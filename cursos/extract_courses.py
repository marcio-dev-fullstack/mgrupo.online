from pathlib import Path
import json
import re

source = Path('/home/ubuntu/mgrupo.online/cursos.html').read_text(encoding='utf-8')
courses = []

# Cursos declarados como arrays que depois usam .map(title => ({ area, title, hours })).
map_pattern = re.compile(
    r'(?P<body>\[(?:.|\n)*?\])\.map\(title\s*=>\s*\(\{\s*area:\s*"(?P<area>[^"]+)",\s*title,\s*hours:\s*"(?P<hours>[^"]+)"\s*\}\)\)',
    re.MULTILINE,
)
for match in map_pattern.finditer(source):
    for title in re.findall(r'"((?:\\.|[^"\\])*)"', match.group('body')):
        courses.append({
            'area': match.group('area'),
            'title': title,
            'hours': match.group('hours'),
        })

# Cursos declarados diretamente como objetos.
object_pattern = re.compile(
    r'\{\s*area:\s*"(?P<area>[^"]+)",\s*title:\s*"(?P<title>(?:\\.|[^"\\])*)",\s*hours:\s*"(?P<hours>[^"]+)"\s*\}',
    re.MULTILINE,
)
for match in object_pattern.finditer(source):
    courses.append({
        'area': match.group('area'),
        'title': match.group('title'),
        'hours': match.group('hours'),
    })

seen = set()
unique = []
for course in courses:
    key = (course['area'], course['title'])
    if key not in seen:
        seen.add(key)
        course['id'] = f"c{len(unique)+1:04d}"
        unique.append(course)

if not unique:
    raise SystemExit('Nenhum curso foi extraído; o formato do catálogo pode ter mudado.')

output = Path('/home/ubuntu/mgrupo.online/courses-data.js')
output.write_text('window.ZENTIX_COURSES = ' + json.dumps(unique, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
print(f'{len(unique)} cursos extraídos para {output}')

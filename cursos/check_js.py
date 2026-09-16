from pathlib import Path
import re

for filename in ['curso.html', 'cursos.html', 'login.html']:
    text = Path(filename).read_text(encoding='utf-8')
    scripts = re.findall(r'<script(?:\s[^>]*)?>(.*?)</script>', text, re.S)
    for index, script in enumerate(scripts):
        if script.strip():
            out = Path('/tmp') / f'{filename.replace(".", "_")}_{index}.js'
            out.write_text(script, encoding='utf-8')
            print(out)

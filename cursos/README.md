# ZENTIX Cursos - v2.0 com Segurança & Controle de Acesso (RBAC)

## 🛡️ Atualizações de Segurança de Acesso

Nesta versão v2.0, foi implementado o modelo de **Controle de Acesso Baseado em Perfis (RBAC - Role-Based Access Control)**:

### 1. Perfis Configurados:
- **`admin` (Acesso Total)**:
  - Acesso irrestrito a todas as áreas, incluindo o Painel Administrativo (`admin.html`).
  - Permissão para gerenciar alunos, alterar cursos e executar exclusões de registros.
- **`aluno` (Acesso Restrito)**:
  - Acesso exclusivo às suas aulas, progresso, anotações, quizzes e emissão de certificados.
  - **Não possui permissão de deleção**: Botões de exclusão são ocultados/desabilitados.
  - Tentativas de acesso direto ao `admin.html` são bloqueadas e redirecionadas para a tela inicial.

### 2. Estrutura de Arquivos da v2.0:
- `auth.js`: Módulo de autenticação e proteção de rotas/botões.
- `style.css`: Estilos de interface com suporte a distintivos de perfil (badges) e estados de permissão.
- `login.html`: Seleção de perfis de teste (Aluno vs Admin).
- `index.html`: Dashboard responsivo adaptativo ao perfil do usuário.
- `admin.html`: Área protegida para administradores.
- `v2.zip`: Pacote consolidado da versão.

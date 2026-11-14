# ZENTIX Cursos - Plataforma Web (v3.0)

Sistema web completo da plataforma de ensino ZENTIX Cursos, incluindo área do aluno, painel administrativo, guarda de rotas de segurança (RBAC), certificados e reprodutor de aula.

## 🚀 O que há de novo na v3.0:
1. **Guarda de Rotas (`auth-guard.js`)**: Bloqueio automático de navegação para `admin.html` em tempo de carregamento caso o usuário seja aluno.
2. **Sistema de Perfis RBAC**:
   - `admin`: Acesso total ao painel administrativo, edição e exclusão de registros.
   - `aluno`: Acesso às aulas, progresso e certificados. Botões de exclusão são ocultados e desabilitados via JavaScript.
3. **Página de Validação Pública (`valida.html`)**: Verificação de certificados por código hash ou parâmetro de URL.
4. **Sala de Aula com Quiz & Anotações**: Reprodutor de vídeo simulado com salvamento automático de anotações no *LocalStorage*.

## 🛠️ Instalação e Atualização no GitHub (Comando Único)

Copie e cole este comando no seu terminal na pasta do projeto:

```bash
git add . && git commit -m "ZENTIX v3.0: Guarda de Rotas JS e Segurança RBAC Completa" && git push origin main
```

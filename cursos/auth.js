/**
 * ZENTIX Cursos - Sistema de Autenticação e Controle de Acesso (RBAC)
 * Roles: 'admin' (Acesso total) | 'aluno' (Acesso restrito / Sem permissão de exclusão)
 */

const ZentixAuth = {
    ROLES: {
        ADMIN: 'admin',
        ALUNO: 'aluno'
    },

    // Retorna o usuário logado atualmente
    getCurrentUser() {
        const session = localStorage.getItem('zentix_session');
        if (!session) return null;
        try {
            return JSON.parse(session);
        } catch(e) {
            return null;
        }
    },

    // Autentica o usuário com base no papel
    login(email, role = 'aluno', name = 'Usuário ZENTIX') {
        const user = {
            id: 'usr_' + Date.now(),
            email: email,
            name: name,
            role: role,
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('zentix_session', JSON.stringify(user));
        return user;
    },

    // Encerra a sessão
    logout() {
        localStorage.removeItem('zentix_session');
        window.location.href = 'login.html';
    },

    // Verifica se o usuário tem a permissão necessária
    hasPermission(requiredRole) {
        const user = this.getCurrentUser();
        if (!user) return false;
        if (user.role === this.ROLES.ADMIN) return true; // Admin tem acesso total
        return user.role === requiredRole;
    },

    // Protege a página contra acessos não autorizados
    protectPage(requiredRole = 'aluno') {
        const user = this.getCurrentUser();
        if (!user) {
            alert('Acesso negado. Por favor, faça login.');
            window.location.href = 'login.html';
            return false;
        }

        if (requiredRole === this.ROLES.ADMIN && user.role !== this.ROLES.ADMIN) {
            alert('🔒 Permissão insuficiente! Apenas Administradores podem acessar esta área.');
            window.location.href = 'index.html';
            return false;
        }

        return true;
    },

    // Aplica regras visuais no DOM conforme o perfil
    applyUIConstraints() {
        const user = this.getCurrentUser();
        if (!user) return;

        // Atualiza elementos de perfil no cabeçalho
        document.querySelectorAll('.user-name-display').forEach(el => el.textContent = user.name);
        document.querySelectorAll('.user-role-badge').forEach(el => {
            el.textContent = user.role === 'admin' ? '🛡️ Admin' : '🎓 Aluno';
            el.className = `user-role-badge badge-${user.role}`;
        });

        // Se for perfil 'aluno', oculta/desabilita elementos administrativos e botões de exclusão
        if (user.role !== this.ROLES.ADMIN) {
            // Oculta links para painel admin
            document.querySelectorAll('.admin-only').forEach(el => el.style.display = 'none');
            
            // Oculta ou desabilita botões de exclusão/deletar
            document.querySelectorAll('.btn-delete, [data-action="delete"]').forEach(btn => {
                btn.style.display = 'none';
                btn.disabled = true;
                btn.title = 'Apenas administradores podem excluir registros.';
            });
        }
    }
};

// Executa proteções visuais ao carregar qualquer página
document.addEventListener('DOMContentLoaded', () => {
    ZentixAuth.applyUIConstraints();
});

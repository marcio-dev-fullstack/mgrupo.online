// auth.js - Gerenciador de Autenticação e Perfis (RBAC)
function realizarLogin(e) {
    if (e) e.preventDefault();
    const email = document.getElementById('email').value;

    let userRole = 'aluno';
    let userName = 'Aluno ZENTIX';

    if (email.includes('admin')) {
        userRole = 'admin';
        userName = 'Márcio (Admin)';
    }

    const userData = {
        email: email,
        nome: userName,
        role: userRole,
        loginTime: new Date().toISOString()
    };

    localStorage.setItem('zentix_user', JSON.stringify(userData));
    alert(`Bem-vindo, ${userName}! Perfil ativado: [${userRole.toUpperCase()}]`);
    
    if (userRole === 'admin') {
        window.location.href = 'admin.html';
    } else {
        window.location.href = 'index.html';
    }
}

function preencherLogin(email, role) {
    document.getElementById('email').value = email;
    document.getElementById('senha').value = '123456';
    realizarLogin();
}

function fazerLogout() {
    localStorage.removeItem('zentix_user');
    sessionStorage.removeItem('zentix_user');
    window.location.href = 'login.html';
}

// Aplica permissões visuais na página
document.addEventListener('DOMContentLoaded', () => {
    const usuarioSessao = localStorage.getItem('zentix_user') || sessionStorage.getItem('zentix_user');
    if (!usuarioSessao) return;

    const user = JSON.parse(usuarioSessao);
    
    // Atualiza nome e badge na navbar
    const nameElem = document.getElementById('user-name');
    const badgeElem = document.getElementById('user-badge');
    const adminLinks = document.querySelectorAll('.admin-only');

    if (nameElem) nameElem.textContent = user.nome;
    if (badgeElem) {
        badgeElem.textContent = user.role === 'admin' ? '🛡️ Admin' : '🎓 Aluno';
        badgeElem.className = `badge ${user.role === 'admin' ? 'badge-admin' : 'badge-student'}`;
    }

    // Exibe ou oculta links administrativos
    adminLinks.forEach(link => {
        link.style.display = user.role === 'admin' ? 'inline-block' : 'none';
    });

    // Se o usuário for ALUNO, esconde e desabilita qualquer botão de exclusão (.btn-delete)
    if (user.role === 'aluno') {
        const deleteButtons = document.querySelectorAll('.btn-delete');
        deleteButtons.forEach(btn => {
            btn.style.display = 'none';
            btn.disabled = true;
        });
    }
});

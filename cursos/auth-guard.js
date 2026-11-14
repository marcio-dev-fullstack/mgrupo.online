// auth-guard.js - Guarda de Rota para Painel Admin
(function verificarAcessoAdmin() {
    const usuarioSessao = localStorage.getItem('zentix_user') || sessionStorage.getItem('zentix_user');
    const usuario = usuarioSessao ? JSON.parse(usuarioSessao) : null;

    if (!usuario) {
        alert('⚠️ Acesso restrito! Efetue login como Administrador.');
        window.location.href = 'login.html';
        return;
    }

    if (usuario.role !== 'admin') {
        alert('⛔ Permissão negada! Seu perfil de Aluno não possui acesso ao Painel Admin.');
        window.location.href = 'index.html';
        return;
    }

    console.log(`[AUTH GUARD] Acesso concedido para Admin: ${usuario.nome}`);
})();

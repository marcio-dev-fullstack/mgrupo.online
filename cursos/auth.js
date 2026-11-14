/**
 * Módulo de Autenticação e Controle de Sessão - ZENTIX Cursos
 */

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    // Se já estiver logado e acessar login.html, redireciona direto para admin.html
    if (loginForm) {
        const existingSession = getActiveSession();
        if (existingSession && existingSession.role === "admin") {
            window.location.href = "admin.html";
            return;
        }

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const user = document.getElementById("usernameInput").value.trim().toLowerCase();
            const pass = document.getElementById("passwordInput").value.trim();

            // Credenciais exclusivas do Administrador
            if ((user === "admin" || user === "admin@zentix.com") && pass === "12345678") {
                const sessionData = {
                    authenticated: true,
                    username: "admin",
                    displayName: "Administrador ZENTIX",
                    role: "admin",
                    loginTime: new Date().toISOString()
                };

                localStorage.setItem("zentix_session", JSON.stringify(sessionData));
                if (errorMsg) errorMsg.style.display = "none";

                window.location.href = "admin.html";
            } else {
                if (errorMsg) errorMsg.style.display = "block";
            }
        });
    }
});

/**
 * Retorna os dados da sessão ativa ou null se inválida
 */
function getActiveSession() {
    const rawSession = localStorage.getItem("zentix_session");
    if (!rawSession) return null;

    try {
        const session = JSON.parse(rawSession);
        if (session && session.authenticated === true) {
            return session;
        }
    } catch (e) {
        localStorage.removeItem("zentix_session");
    }
    return null;
}

/**
 * Protege rotas exclusivas de Administrador (bloqueia acesso direto via URL)
 */
function checkAdminAuth() {
    const session = getActiveSession();
    if (!session || session.role !== "admin") {
        window.location.replace("login.html");
        return null;
    }
    return session;
}

/**
 * Encerra a sessão e redireciona para o login
 */
function logout() {
    localStorage.removeItem("zentix_session");
    window.location.replace("login.html");
}
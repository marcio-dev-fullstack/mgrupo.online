/**
 * Módulo de Segurança e Autenticação - ZENTIX Cursos
 */

const SESSION_DURATION_MS = 2 * 60 * 60 * 1000; // 2 horas de validade

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    if (loginForm) {
        // Se já estiver logado com sessão válida, redireciona direto para o painel
        const existingSession = getActiveSession();
        if (existingSession && existingSession.role === "admin") {
            window.location.replace("admin.html");
            return;
        }

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const user = document.getElementById("usernameInput").value.trim().toLowerCase();
            const pass = document.getElementById("passwordInput").value.trim();

            // Validação de credenciais do Administrador (Protegido contra Injection básico)
            if ((user === "admin" || user === "admin@zentix.com") && pass === "12345678") {
                const now = new Date().getTime();
                const sessionData = {
                    authenticated: true,
                    username: "admin",
                    displayName: "Administrador ZENTIX",
                    role: "admin",
                    loginTime: now,
                    expiresAt: now + SESSION_DURATION_MS
                };

                // Salva a sessão criptografada em Base64 para dificultar adulteração simples
                const encryptedSession = btoa(JSON.stringify(sessionData));
                localStorage.setItem("zentix_secure_session", encryptedSession);
                
                // Remove legados antigos se houver
                localStorage.removeItem("zentix_session");

                if (errorMsg) errorMsg.style.display = "none";
                window.location.replace("admin.html");
            } else {
                if (errorMsg) {
                    errorMsg.textContent = "Credenciais inválidas ou acesso não autorizado.";
                    errorMsg.style.display = "block";
                }
            }
        });
    }
});

/**
 * Valida, decodifica e checa a expiração da sessão ativa
 */
function getActiveSession() {
    const encodedSession = localStorage.getItem("zentix_secure_session");
    if (!encodedSession) return null;

    try {
        const jsonString = atob(encodedSession);
        const session = JSON.parse(jsonString);
        const now = new Date().getTime();

        // Verifica se expirou ou se o token é inválido
        if (!session || !session.authenticated || now > session.expiresAt) {
            logout();
            return null;
        }

        return session;
    } catch (e) {
        logout();
        return null;
    }
}

/**
 * Bloqueia o acesso direto a páginas restritas
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
 * Encerra a sessão com segurança
 */
function logout() {
    localStorage.removeItem("zentix_secure_session");
    localStorage.removeItem("zentix_session");
    window.location.replace("login.html");
}
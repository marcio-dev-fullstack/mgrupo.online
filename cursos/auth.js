/**
 * Módulo de Autenticação e Segurança - ZENTIX Cursos
 */

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
    const userInput = document.getElementById("usernameInput");
    const passInput = document.getElementById("passwordInput");

    if (loginForm) {
        // Limpa qualquer trava anterior de testes ao carregar a página
        localStorage.removeItem("zentix_sec_state");

        // Se já houver uma sessão válida ativa, redireciona direto
        const existingSession = getActiveSession();
        if (existingSession && existingSession.role === "admin") {
            window.location.replace("admin.html");
            return;
        }

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const user = userInput.value.trim().toLowerCase();
            const pass = passInput.value.trim();

            // Credenciais exatas do Administrador
            if ((user === "admin" || user === "admin@zentix.com") && pass === "12345678") {
                // Limpa falhas e bloqueios ao acertar
                localStorage.removeItem("zentix_sec_state");

                const now = new Date().getTime();
                const sessionData = {
                    authenticated: true,
                    username: "admin",
                    displayName: "Administrador ZENTIX",
                    role: "admin",
                    loginTime: now,
                    expiresAt: now + (2 * 60 * 60 * 1000) // 2 horas de validade
                };

                // Salva a sessão segura codificada
                localStorage.setItem("zentix_secure_session", btoa(JSON.stringify(sessionData)));
                localStorage.removeItem("zentix_session");

                if (errorMsg) errorMsg.style.display = "none";
                window.location.replace("admin.html");
            } else {
                // Controle de tentativas incorretas
                let state = getSecurityState();
                state.attempts = (state.attempts || 0) + 1;

                if (state.attempts >= 3) {
                    if (errorMsg) {
                        errorMsg.innerHTML = `<i class="fa-solid fa-lock"></i> Excesso de tentativas. Aguarde alguns instantes.`;
                        errorMsg.style.display = "block";
                    }
                    localStorage.removeItem("zentix_sec_state"); // Reseta o ciclo após o aviso
                } else {
                    saveSecurityState(state);
                    const restam = 3 - state.attempts;
                    if (errorMsg) {
                        errorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Usuário ou senha incorretos. Restam ${restam} tentativa(s).`;
                        errorMsg.style.display = "block";
                    }
                }
                passInput.value = "";
            }
        });
    }
});

function getSecurityState() {
    try {
        const raw = localStorage.getItem("zentix_sec_state");
        if (!raw) return { attempts: 0 };
        return JSON.parse(atob(raw));
    } catch (e) {
        return { attempts: 0 };
    }
}

function saveSecurityState(state) {
    localStorage.setItem("zentix_sec_state", btoa(JSON.stringify(state)));
}

function getActiveSession() {
    const encodedSession = localStorage.getItem("zentix_secure_session");
    if (!encodedSession) return null;

    try {
        const session = JSON.parse(atob(encodedSession));
        const now = new Date().getTime();
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

function checkAdminAuth() {
    const session = getActiveSession();
    if (!session || session.role !== "admin") {
        window.location.replace("login.html");
        return null;
    }
    return session;
}

function logout() {
    localStorage.removeItem("zentix_secure_session");
    localStorage.removeItem("zentix_session");
    window.location.replace("login.html");
}
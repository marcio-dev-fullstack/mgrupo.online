/**
 * Módulo de Segurança, Autenticação e Proteção Brute-Force - ZENTIX Cursos
 */

const SESSION_DURATION_MS = 2 * 60 * 60 * 1000; // 2 horas de validade da sessão
const MAX_LOGIN_ATTEMPTS = 3;                    // Máximo de tentativas antes do bloqueio
const LOCKOUT_DURATION_MS = 5 * 60 * 1000;       // 5 minutos de bloqueio temporário

let lockoutTimerInterval = null;

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");
    const submitBtn = loginForm ? loginForm.querySelector('button[type="submit"]') : null;
    const userInput = document.getElementById("usernameInput");
    const passInput = document.getElementById("passwordInput");

    if (loginForm) {
        // Redireciona imediatamente se já houver uma sessão válida ativa
        const existingSession = getActiveSession();
        if (existingSession && existingSession.role === "admin") {
            window.location.replace("admin.html");
            return;
        }

        // Verifica se o navegador já está sob bloqueio temporário ao carregar a página
        checkAndApplyLockout(errorMsg, submitBtn, userInput, passInput);

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Impede envio se o bloqueio estiver ativo
            if (isLockedOut()) {
                checkAndApplyLockout(errorMsg, submitBtn, userInput, passInput);
                return;
            }

            const user = userInput.value.trim().toLowerCase();
            const pass = passInput.value.trim();

            // Validação exclusiva do Administrador
            if ((user === "admin" || user === "admin@zentix.com") && pass === "12345678") {
                // Limpa histórico de falhas ao acertar
                resetFailedAttempts();

                const now = new Date().getTime();
                const sessionData = {
                    authenticated: true,
                    username: "admin",
                    displayName: "Administrador ZENTIX",
                    role: "admin",
                    loginTime: now,
                    expiresAt: now + SESSION_DURATION_MS
                };

                const encryptedSession = btoa(JSON.stringify(sessionData));
                localStorage.setItem("zentix_secure_session", encryptedSession);
                localStorage.removeItem("zentix_session");

                if (errorMsg) errorMsg.style.display = "none";
                window.location.replace("admin.html");
            } else {
                // Registra tentativa falha
                const attempts = registerFailedAttempt();
                passInput.value = ""; // Limpa o campo de senha por segurança

                if (attempts >= MAX_LOGIN_ATTEMPTS) {
                    activateLockout();
                    checkAndApplyLockout(errorMsg, submitBtn, userInput, passInput);
                } else {
                    const remaining = MAX_LOGIN_ATTEMPTS - attempts;
                    if (errorMsg) {
                        errorMsg.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Credenciais inválidas. Restam <strong>${remaining}</strong> tentativa(s) antes do bloqueio.`;
                        errorMsg.style.display = "block";
                    }
                }
            }
        });
    }
});

/**
 * Gerenciamento de Tentativas e Bloqueio Temporário (Brute-Force Protection)
 */
function getSecurityState() {
    try {
        const raw = localStorage.getItem("zentix_sec_state");
        if (!raw) return { attempts: 0, lockedUntil: 0 };
        return JSON.parse(atob(raw));
    } catch (e) {
        return { attempts: 0, lockedUntil: 0 };
    }
}

function saveSecurityState(state) {
    localStorage.setItem("zentix_sec_state", btoa(JSON.stringify(state)));
}

function registerFailedAttempt() {
    const state = getSecurityState();
    state.attempts = (state.attempts || 0) + 1;
    saveSecurityState(state);
    return state.attempts;
}

function activateLockout() {
    const state = getSecurityState();
    state.lockedUntil = new Date().getTime() + LOCKOUT_DURATION_MS;
    saveSecurityState(state);
}

function resetFailedAttempts() {
    localStorage.removeItem("zentix_sec_state");
    if (lockoutTimerInterval) {
        clearInterval(lockoutTimerInterval);
        lockoutTimerInterval = null;
    }
}

function isLockedOut() {
    const state = getSecurityState();
    const now = new Date().getTime();
    if (state.lockedUntil && now < state.lockedUntil) {
        return true;
    }
    if (state.lockedUntil && now >= state.lockedUntil) {
        resetFailedAttempts();
    }
    return false;
}

function checkAndApplyLockout(errorMsg, submitBtn, userInput, passInput) {
    if (!isLockedOut()) {
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
            submitBtn.style.cursor = "pointer";
        }
        if (userInput) userInput.disabled = false;
        if (passInput) passInput.disabled = false;
        return;
    }

    // Desabilita formulário durante o bloqueio
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.5";
        submitBtn.style.cursor = "not-allowed";
    }
    if (userInput) userInput.disabled = true;
    if (passInput) passInput.disabled = true;

    const updateCountdown = () => {
        const state = getSecurityState();
        const now = new Date().getTime();
        const diff = state.lockedUntil - now;

        if (diff <= 0) {
            resetFailedAttempts();
            if (errorMsg) errorMsg.style.display = "none";
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
                submitBtn.style.cursor = "pointer";
            }
            if (userInput) userInput.disabled = false;
            if (passInput) passInput.disabled = false;
            return;
        }

        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        const formattedTime = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        if (errorMsg) {
            errorMsg.innerHTML = `<i class="fa-solid fa-lock"></i> Acesso temporariamente bloqueado por excesso de tentativas. Tente novamente em <strong>${formattedTime}</strong>.`;
            errorMsg.style.display = "block";
        }
    };

    updateCountdown();
    if (lockoutTimerInterval) clearInterval(lockoutTimerInterval);
    lockoutTimerInterval = setInterval(updateCountdown, 1000);
}

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
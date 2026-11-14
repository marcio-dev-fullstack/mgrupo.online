document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const user = document.getElementById("usernameInput").value.trim().toLowerCase();
            const pass = document.getElementById("passwordInput").value.trim();

            // Credenciais exclusivas do Administrador neste momento
            if ((user === "admin" || user === "admin@zentix.com") && pass === "12345678") {
                const sessionData = {
                    authenticated: true,
                    username: "admin",
                    role: "admin",
                    loginTime: new Date().toISOString()
                };

                localStorage.setItem("zentix_session", JSON.stringify(sessionData));
                errorMsg.style.display = "none";

                // Redireciona para o painel administrativo
                window.location.href = "admin.html";
            } else {
                errorMsg.style.display = "block";
            }
        });
    }
});

// Função utilitária para proteger páginas internas (ex: admin.html)
function checkAdminAuth() {
    const rawSession = localStorage.getItem("zentix_session");
    if (!rawSession) {
        window.location.href = "login.html";
        return null;
    }

    const session = JSON.parse(rawSession);
    if (!session.authenticated || session.role !== "admin") {
        window.location.href = "login.html";
        return null;
    }

    return session;
}

function logout() {
    localStorage.removeItem("zentix_session");
    window.location.href = "login.html";
}
// Lógica principal do Frontend ZENTIX Cursos
document.addEventListener('DOMContentLoaded', () => {
    initDashboard();
    initClassroom();
});

function initDashboard() {
    const container = document.getElementById('courses-container');
    const catalogGrid = document.getElementById('full-catalog-grid');

    if (container && typeof zentixCoursesData !== 'undefined') {
        renderCourseCards(zentixCoursesData, container);
    }

    if (catalogGrid && typeof zentixCoursesData !== 'undefined') {
        renderCourseCards(zentixCoursesData, catalogGrid);
    }

    // Botão de teste no login
    const fillBtn = document.getElementById('fill-test-btn');
    if (fillBtn) {
        fillBtn.addEventListener('click', () => {
            document.getElementById('email').value = 'aluno@zentix.com';
            document.getElementById('password').value = '123456';
        });
    }
}

function renderCourseCards(courses, targetElement) {
    targetElement.innerHTML = courses.map(course => `
        <div class="course-card">
            <div>
                <div class="card-top">
                    <span class="tag">${course.categoryLabel}</span>
                    <i class="fa-solid ${course.icon} card-icon"></i>
                </div>
                <h4>${course.title}</h4>
                <p class="small-desc" style="color:#94a3b8; font-size:0.85rem; margin:8px 0;">${course.description}</p>
            </div>
            <div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${course.progress}%;"></div>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:#94a3b8; margin-top:4px;">
                    <span>${course.completedLessons}/${course.lessonsCount} aulas</span>
                    <span>${course.progress}%</span>
                </div>
                <a href="curso.html?id=${course.id}" class="btn btn-primary btn-block"><i class="fa-solid fa-play"></i> Acessar Curso</a>
            </div>
        </div>
    `).join('');
}

function initClassroom() {
    const notesInput = document.getElementById('student-notes');
    if (notesInput) {
        const saved = localStorage.getItem('zentix_notes_nr10');
        if (saved) notesInput.value = saved;
    }
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    const target = document.getElementById('tab-' + tabName);
    if (target) target.style.display = 'block';
}

function saveNotes() {
    const text = document.getElementById('student-notes').value;
    localStorage.setItem('zentix_notes_nr10', text);
    const status = document.getElementById('notes-status');
    status.innerText = ' Anotações salvas com sucesso!';
    status.style.color = '#10b981';
    setTimeout(() => { status.innerText = ''; }, 3000);
}

function checkQuiz() {
    const selected = document.querySelector('input[name="q1"]:checked');
    const resultDiv = document.getElementById('quiz-result');
    if (!selected) {
        resultDiv.innerHTML = '<p style="color:#f59e0b">Por favor, selecione uma opção.</p>';
        return;
    }
    if (selected.value === 'b') {
        resultDiv.innerHTML = '<p style="color:#10b981; font-weight:bold; margin-top:10px;"><i class="fa-solid fa-check"></i> Resposta Correta! NR-10 trata de segurança em eletricidade.</p>';
    } else {
        resultDiv.innerHTML = '<p style="color:#ef4444; margin-top:10px;"><i class="fa-solid fa-xmark"></i> Resposta Incorreta. Tente novamente.</p>';
    }
}

function printCert(code) {
    const modal = document.getElementById('cert-modal');
    if (modal) modal.style.display = 'flex';
}

function closeCertModal() {
    const modal = document.getElementById('cert-modal');
    if (modal) modal.style.display = 'none';
}

function verifyCertificate() {
    const code = document.getElementById('cert-code-input').value;
    const resultCard = document.getElementById('verify-result');
    if (code.trim().toUpperCase() === 'ZNX-2026-8891') {
        resultCard.style.display = 'block';
    } else {
        alert('Código de certificado não localizado na base do ZENTIX.');
    }
}

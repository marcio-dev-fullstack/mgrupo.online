// app.js - Renderização de Cursos no Dashboard
function renderizarCursos(lista) {
    const container = document.getElementById('courses-container');
    if (!container) return;
    
    container.innerHTML = lista.map(curso => `
        <div class="course-card">
            <h3>${curso.titulo}</h3>
            <p>Categoria: ${curso.categoria}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${curso.progresso}%;"></div>
            </div>
            <p style="font-size: 0.85rem; color: #94a3b8;">Progresso: ${curso.progresso}% (${curso.aulasConcluidas}/${curso.aulasTotal} aulas)</p>
            <a href="curso.html?id=${curso.id}" class="btn btn-primary btn-block">Acessar Curso</a>
        </div>
    `).join('');
}

function filtrarCursos() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtrados = mockCursos.filter(c => c.titulo.toLowerCase().includes(query) || c.categoria.toLowerCase().includes(query));
    renderizarCursos(filtrados);
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof mockCursos !== 'undefined') {
        renderizarCursos(mockCursos);
    }
});

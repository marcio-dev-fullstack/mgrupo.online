
document.addEventListener('DOMContentLoaded', () => {
    const coursesData = window.COURSES_DATA || [];
    let currentAreaId = 'tec';
    let currentCourse = null;

    // DOM Elements
    const areaTabsContainer = document.getElementById('areaTabs');
    const coursesGrid = document.getElementById('coursesGrid');
    const searchInput = document.getElementById('searchInput');
    const themeToggleBtn = document.getElementById('themeToggle');

    // Modals
    const courseModal = document.getElementById('courseModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modalAreaBadge = document.getElementById('modalAreaBadge');
    const modalTitle = document.getElementById('modalTitle');
    const modalLevel = document.getElementById('modalLevel');
    const modalDescription = document.getElementById('modalDescription');
    const modalSyllabus = document.getElementById('modalSyllabus');
    const openQuizBtn = document.getElementById('openQuizBtn');

    // Quiz Modal Elements
    const quizModal = document.getElementById('quizModal');
    const closeQuizBtn = document.getElementById('closeQuizBtn');
    const quizCourseTitle = document.getElementById('quizCourseTitle');
    const quizCaseStudy = document.getElementById('quizCaseStudy');
    const quizMindMap = document.getElementById('quizMindMap');
    const quizQuestionsContainer = document.getElementById('quizQuestionsContainer');
    const submitQuizBtn = document.getElementById('submitQuizBtn');
    const quizScoreBadge = document.getElementById('quizScoreBadge');

    // Init Theme
    const initTheme = () => {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };
    initTheme();

    themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });

    // Render Area Tabs
    const renderAreaTabs = () => {
        areaTabsContainer.innerHTML = '';
        coursesData.forEach(area => {
            const isActive = area.id === currentAreaId;
            const btn = document.createElement('button');
            btn.className = `flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                isActive 
                ? 'bg-brand-600 text-white shadow-md shadow-brand-500/30' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`;
            btn.innerHTML = `<i class="fas ${area.icon}"></i> <span>${area.name}</span>`;
            btn.addEventListener('click', () => {
                currentAreaId = area.id;
                renderAreaTabs();
                renderCourses();
            });
            areaTabsContainer.appendChild(btn);
        });
    };

    // Render Courses
    const renderCourses = (query = '') => {
        coursesGrid.innerHTML = '';
        const selectedArea = coursesData.find(a => a.id === currentAreaId);
        if (!selectedArea) return;

        let filteredCourses = selectedArea.courses;
        if (query.trim() !== '') {
            const q = query.toLowerCase();
            filteredCourses = selectedArea.courses.filter(c => 
                c.title.toLowerCase().includes(q) || 
                c.description.toLowerCase().includes(q)
            );
        }

        if (filteredCourses.length === 0) {
            coursesGrid.innerHTML = `
                <div class="col-span-full text-center py-12 text-slate-500 dark:text-slate-400">
                    <i class="fas fa-search text-4xl mb-3 text-slate-300 dark:text-slate-600"></i>
                    <p class="font-semibold text-lg">Nenhum curso encontrado</p>
                    <p class="text-sm">Tente buscar por outros termos ou selecione outra área.</p>
                </div>
            `;
            return;
        }

        filteredCourses.forEach(course => {
            const card = document.createElement('div');
            card.className = 'bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-6 flex flex-col justify-between hover:shadow-xl hover:border-brand-500/50 transition-all duration-300 group';
            
            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-xs font-bold px-2.5 py-1 rounded-full bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400 border border-brand-200 dark:border-brand-800">
                            40h EAD
                        </span>
                        <span class="text-xs font-semibold text-amber-500 flex items-center gap-1">
                            <i class="fas fa-star"></i> ${course.rating}
                        </span>
                    </div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors line-clamp-2">
                        ${course.title}
                    </h3>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 line-clamp-3">
                        ${course.description}
                    </p>
                </div>

                <div class="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                    <div class="text-xs text-slate-400">
                        <i class="fas fa-chalkboard-teacher text-slate-500 mr-1"></i> ${course.instructor.split(' ')[0]} ${course.instructor.split(' ')[1] || ''}
                    </div>
                    <button class="view-course-btn text-xs font-bold bg-slate-900 hover:bg-brand-600 dark:bg-slate-700 dark:hover:bg-brand-600 text-white px-3.5 py-2 rounded-xl transition flex items-center gap-1">
                        Ver Ementa <i class="fas fa-arrow-right text-[10px]"></i>
                    </button>
                </div>
            `;

            card.querySelector('.view-course-btn').addEventListener('click', () => {
                openCourseModal(course, selectedArea.name);
            });

            coursesGrid.appendChild(card);
        });
    };

    // Open Course Syllabus Modal
    const openCourseModal = (course, areaName) => {
        currentCourse = course;
        modalAreaBadge.textContent = areaName;
        modalTitle.textContent = course.title;
        modalLevel.textContent = course.level;
        modalDescription.textContent = course.description;

        modalSyllabus.innerHTML = '';
        course.modules.forEach(mod => {
            const isMod5 = mod.num === 5;
            const modDiv = document.createElement('div');
            modDiv.className = `p-4 rounded-2xl border transition ${
                isMod5 
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' 
                : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700'
            }`;

            modDiv.innerHTML = `
                <div class="flex items-center justify-between mb-2">
                    <span class="text-xs font-extrabold ${isMod5 ? 'text-emerald-700 dark:text-emerald-400' : 'text-brand-600 dark:text-brand-400'} uppercase">
                        Módulo ${mod.num} (${mod.hours}h)
                    </span>
                    <span class="text-[11px] font-semibold text-slate-400">${isMod5 ? 'Avaliação Autocorrigida' : 'Teoria & Aplicação'}</span>
                </div>
                <h4 class="font-bold text-sm text-slate-900 dark:text-white">${mod.title}</h4>
                <ul class="mt-2 text-xs text-slate-600 dark:text-slate-300 space-y-1 pl-4 list-disc">
                    ${mod.topics.map(t => `<li>${t}</li>`).join('')}
                </ul>
            `;
            modalSyllabus.appendChild(modDiv);
        });

        courseModal.classList.remove('hidden');
    };

    closeModalBtn.addEventListener('click', () => {
        courseModal.classList.add('hidden');
    });

    // Open Module 5 Quiz & Practical Modal
    openQuizBtn.addEventListener('click', () => {
        if (!currentCourse) return;
        courseModal.classList.add('hidden');

        quizCourseTitle.textContent = currentCourse.title;
        quizCaseStudy.textContent = currentCourse.caseStudy;

        // Mindmap nodes
        quizMindMap.innerHTML = '';
        currentCourse.mindmap.forEach(item => {
            const span = document.createElement('span');
            span.className = 'px-3 py-1 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-semibold border border-indigo-300 dark:border-indigo-700 flex items-center gap-1';
            span.innerHTML = `<i class="fas fa-project-diagram text-[10px]"></i> ${item}`;
            quizMindMap.appendChild(span);
        });

        // Quiz Questions
        quizQuestionsContainer.innerHTML = '';
        quizScoreBadge.classList.add('hidden');

        currentCourse.quiz.forEach((q, qIndex) => {
            const qBox = document.createElement('div');
            qBox.className = 'bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-3';
            
            qBox.innerHTML = `
                <div class="font-bold text-sm text-slate-900 dark:text-white flex items-start gap-2">
                    <span class="bg-brand-600 text-white w-6 h-6 rounded-full text-xs flex items-center justify-center shrink-0 mt-0.5">${qIndex + 1}</span>
                    <span>${q.question}</span>
                </div>
                <div class="space-y-2 pl-8">
                    ${q.options.map((opt, optIndex) => `
                        <label class="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-700 cursor-pointer transition">
                            <input type="radio" name="question_${qIndex}" value="${optIndex}" class="text-brand-600 focus:ring-brand-500">
                            <span>${opt}</span>
                        </label>
                    `).join('')}
                </div>
                <div id="explanation_${qIndex}" class="hidden pl-8 text-xs p-3 rounded-xl"></div>
            `;
            quizQuestionsContainer.appendChild(qBox);
        });

        quizModal.classList.remove('hidden');
    });

    closeQuizBtn.addEventListener('click', () => {
        quizModal.classList.add('hidden');
    });

    // Quiz Auto-Correction Engine
    submitQuizBtn.addEventListener('click', () => {
        if (!currentCourse) return;
        let score = 0;
        const total = currentCourse.quiz.length;

        currentCourse.quiz.forEach((q, qIndex) => {
            const selectedOpt = document.querySelector(`input[name="question_${qIndex}"]:checked`);
            const expDiv = document.getElementById(`explanation_${qIndex}`);

            expDiv.classList.remove('hidden', 'bg-emerald-100', 'text-emerald-800', 'bg-rose-100', 'text-rose-800', 'dark:bg-emerald-950/60', 'dark:text-emerald-200', 'dark:bg-rose-950/60', 'dark:text-rose-200');

            if (selectedOpt && parseInt(selectedOpt.value) === q.answer) {
                score++;
                expDiv.classList.add('bg-emerald-100', 'text-emerald-800', 'dark:bg-emerald-950/60', 'dark:text-emerald-200');
                expDiv.innerHTML = `<i class="fas fa-check-circle mr-1"></i> <strong>Correto!</strong> ${q.explanation}`;
            } else {
                expDiv.classList.add('bg-rose-100', 'text-rose-800', 'dark:bg-rose-950/60', 'dark:text-rose-200');
                const correctText = q.options[q.answer];
                expDiv.innerHTML = `<i class="fas fa-times-circle mr-1"></i> <strong>Incorreto.</strong> Resposta correta: "${correctText}". ${q.explanation}`;
            }
        });

        const percentage = Math.round((score / total) * 100);
        quizScoreBadge.classList.remove('hidden', 'bg-emerald-500', 'bg-rose-500', 'text-white');
        if (percentage >= 70) {
            quizScoreBadge.className = 'px-4 py-2 rounded-xl text-sm font-extrabold bg-emerald-600 text-white shadow-lg shadow-emerald-500/30';
            quizScoreBadge.innerHTML = `<i class="fas fa-trophy mr-1"></i> Aprovado no Módulo 5 (${percentage}% - ${score}/${total})`;
        } else {
            quizScoreBadge.className = 'px-4 py-2 rounded-xl text-sm font-extrabold bg-rose-600 text-white shadow-lg shadow-rose-500/30';
            quizScoreBadge.innerHTML = `<i class="fas fa-redo mr-1"></i> Tente Novamente (${percentage}% - ${score}/${total})`;
        }
    });

    // Search filter listener
    searchInput.addEventListener('input', (e) => {
        renderCourses(e.target.value);
    });

    // Initial render
    renderAreaTabs();
    renderCourses();
});

// Banco de Dados Mock de Cursos ZENTIX
const zentixCoursesData = [
    {
        id: 'nr10',
        title: 'NR-10 - Segurança em Instalações e Serviços em Eletricidade',
        category: 'sst',
        categoryLabel: 'Segurança do Trabalho (SST)',
        progress: 45,
        lessonsCount: 8,
        completedLessons: 4,
        hours: 40,
        certificate: true,
        icon: 'fa-bolt-lightning',
        description: 'Capacitação completa para profissionais que atuam direta ou indiretamente em instalações elétricas.',
        modules: [
            {
                title: 'Módulo 1: Introdução à Segurança Elétrica',
                lessons: [
                    { id: 'nr10-1', title: 'Conceitos Fundamentais de Risco Elétrico', duration: '15 min', completed: true },
                    { id: 'nr10-2', title: 'Efeitos do Choque Elétrico no Corpo Humano', duration: '20 min', completed: true }
                ]
            },
            {
                title: 'Módulo 2: Medidas de Controle de Risco',
                lessons: [
                    { id: 'nr10-3', title: 'Desenergização e Seccionamento', duration: '25 min', completed: true },
                    { id: 'nr10-4', title: 'Equipamentos de Proteção Individual (EPI)', duration: '18 min', completed: true },
                    { id: 'nr10-5', title: 'Procedimentos de Trabalho Seguro', duration: '30 min', completed: false }
                ]
            }
        ]
    },
    {
        id: 'topografia',
        title: 'Nocões de Topografia Aplicada e Cadastral',
        category: 'topografia',
        categoryLabel: 'Topografia e Engenharia',
        progress: 30,
        lessonsCount: 10,
        completedLessons: 3,
        hours: 60,
        certificate: false,
        icon: 'fa-compass-drafting',
        description: 'Fundamentos de medição espacial, estação total, nivelamento e georreferenciamento.',
        modules: [
            {
                title: 'Módulo 1: Equipamentos e Leituras',
                lessons: [
                    { id: 'topo-1', title: 'Introdução à Nivelamento Geométrico', duration: '22 min', completed: true },
                    { id: 'topo-2', title: 'Uso Prático da Estação Total', duration: '40 min', completed: true }
                ]
            }
        ]
    },
    {
        id: 'harmonizacao',
        title: 'Harmonização Orofacial Full Face Advanced',
        category: 'saude',
        categoryLabel: 'Saúde & Estética',
        progress: 0,
        lessonsCount: 12,
        completedLessons: 0,
        hours: 120,
        certificate: false,
        icon: 'fa-face-smile-beam',
        description: 'Técnicas modernas de preenchimento facial, toxina botulínica e bioestimuladores de colágeno.',
        modules: [
            {
                title: 'Módulo 1: Anatomia Aplicada da Face',
                lessons: [
                    { id: 'harm-1', title: 'Vascularização e Pontos de Atenção', duration: '35 min', completed: false }
                ]
            }
        ]
    }
];

window.COURSES_DATA = [
  {
    "id": "tec",
    "name": "Tecnologia & Programação",
    "icon": "fa-code",
    "color": "blue",
    "courses": [
      {
        "id": "tec-1",
        "title": "Desenvolvimento Web Full Stack Moderno",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Prof. Márcio Oliveira (UniFATIX)",
        "description": "Formação completa em arquitetura web moderna, desde o frontend responsivo até microserviços escaláveis e implantação em nuvem.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos de HTML5, CSS3, Tailwind & JavaScript ES6+",
            "hours": 8,
            "topics": [
              "Semântica HTML5",
              "Flexbox & Grid Layout",
              "Manipulação do DOM",
              "Assincronismo com Async/Await"
            ]
          },
          {
            "num": 2,
            "title": "Arquitetura Frontend Avançada com React & Next.js",
            "hours": 8,
            "topics": [
              "Componentização",
              "Hooks Avançados & Context API",
              "Server-Side Rendering (SSR)",
              "Gerenciamento de Estado Global"
            ]
          },
          {
            "num": 3,
            "title": "Backend de Alta Performance com Node.js & Express",
            "hours": 8,
            "topics": [
              "APIs RESTful com Node.js",
              "Autenticação JWT & OAuth2",
              "ORMs (Prisma / TypeORM)",
              "WebSockets em Tempo Real"
            ]
          },
          {
            "num": 4,
            "title": "Bancos de Dados Relacionais e NoSQL Scalable",
            "hours": 8,
            "topics": [
              "Modelagem PostgreSQL",
              "Consultas Avançadas & Índices",
              "Documentos MongoDB",
              "Caching Estratégico com Redis"
            ]
          },
          {
            "num": 5,
            "title": "Prática Aplicada, Estudo de Caso & Quiz Autocorrigido",
            "hours": 8,
            "topics": [
              "Estudo de Caso: Plataforma E-commerce",
              "Mapa Mental Interativo",
              "Quiz Interativo de Autocorreção com Gabarito"
            ]
          }
        ],
        "caseStudy": "Projetar a infraestrutura e código de um gateway de pagamentos de alta concorrência capaz de processar 10.000 requisições/segundo com tolerância a falhas.",
        "mindmap": [
          "HTML/CSS/JS",
          "React/Next.js",
          "Node.js API",
          "PostgreSQL/Redis",
          "Deploy & CI/CD"
        ],
        "quiz": [
          {
            "question": "Qual hook do React é recomendado para executar efeitos colaterais após a renderização do componente?",
            "options": [
              "useState",
              "useEffect",
              "useContext",
              "useReducer"
            ],
            "answer": 1,
            "explanation": "O useEffect é o hook nativo do React projetado especificamente para gerenciar efeitos colaterais (side effects) como busca de dados e inscrições."
          },
          {
            "question": "Em arquiteturas RESTful, qual método HTTP deve ser idempotente e utilizado para atualização completa de um recurso?",
            "options": [
              "POST",
              "PUT",
              "PATCH",
              "DELETE"
            ],
            "answer": 1,
            "explanation": "O método PUT é idempotente e substitui a representação inteira do recurso especificado."
          }
        ]
      },
      {
        "id": "tec-2",
        "title": "Engenharia de Software & Arquitetura de Microserviços",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dra. Camila Torres",
        "description": "Domine padrões de projeto, arquitetura hexagonal, DDD (Domain-Driven Design) e sistemas distribuídos tolerantes a falhas.",
        "modules": [
          {
            "num": 1,
            "title": "Princípios SOLID e Design Patterns Clássicos",
            "hours": 8,
            "topics": [
              "Clean Code",
              "Padrões Criacionais, Estruturais e Comportamentais",
              "Refatoração Prática"
            ]
          },
          {
            "num": 2,
            "title": "Domain-Driven Design (DDD) na Prática",
            "hours": 8,
            "topics": [
              "Bounded Contexts",
              "Agregados & Entidades",
              "Event-Driven Architecture"
            ]
          },
          {
            "num": 3,
            "title": "Microsserviços com Docker & Kubernetes",
            "hours": 8,
            "topics": [
              "Containers & Imagens",
              "Orquestração com K8s",
              "Service Mesh e Istio"
            ]
          },
          {
            "num": 4,
            "title": "Mensageria e Event Streaming com Apache Kafka",
            "hours": 8,
            "topics": [
              "Producers e Consumers",
              "Tópicos e Partições",
              "Resiliência e Idempotência"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Quiz Autocorrigido & Estudo de Arquitetura",
            "hours": 8,
            "topics": [
              "Caso Real: Migração Monólito para Microserviços",
              "Mapa Mental",
              "Quiz com Autocorreção"
            ]
          }
        ],
        "caseStudy": "Elaborar o plano de decomposição de uma aplicação legada monolítica bancária em microserviços orientados a eventos usando Apache Kafka.",
        "mindmap": [
          "SOLID",
          "DDD",
          "Docker/K8s",
          "Apache Kafka",
          "Observabilidade"
        ],
        "quiz": [
          {
            "question": "O que especifica o princípio da Inversão de Dependência (letra D do SOLID)?",
            "options": [
              "Classes concretas devem depender de instâncias diretas",
              "Módulos de alto nível não devem depender de módulos de baixo nível; ambos devem depender de abstrações",
              "Funções devem aceitar apenas tipos primitivos",
              "Todas as interfaces devem possuir apenas um método"
            ],
            "answer": 1,
            "explanation": "O DIP afirma que abstrações não devem depender de detalhes, mas detalhes devem depender de abstrações."
          }
        ]
      },
      {
        "id": "tec-3",
        "title": "Python Avançado, Django & FastAPI",
        "level": "Intermediário/Avançado",
        "rating": 4.8,
        "instructor": "Prof. Fernando Ramos",
        "description": "Desenvolva APIs de alta velocidade com FastAPI e aplicações corporativas robustas com Django ORM e Celery.",
        "modules": [
          {
            "num": 1,
            "title": "Python Internals & Programação Funcional/Orientada a Objetos",
            "hours": 8,
            "topics": [
              "Decorators & Generators",
              "Metaclasses",
              "Type Hinting Avançado"
            ]
          },
          {
            "num": 2,
            "title": "FastAPI: APIs Assíncronas de Altíssimo Desempenho",
            "hours": 8,
            "topics": [
              "Pydantic Validation",
              "Dependency Injection",
              "Async/Await Nativo"
            ]
          },
          {
            "num": 3,
            "title": "Django Framework Corporativo & REST Framework",
            "hours": 8,
            "topics": [
              "Django ORM",
              "Serializers & Views",
              "Autenticação e Permissões"
            ]
          },
          {
            "num": 4,
            "title": "Tarefas Assíncronas com Celery & Redis",
            "hours": 8,
            "topics": [
              "Message Broker",
              "Jobs Agendados",
              "Monitoramento com Flower"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Quiz, Mapa Mental e Caso Prático",
            "hours": 8,
            "topics": [
              "Estudo de Caso",
              "Mapa Mental Python",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Construção de uma API assíncrona com FastAPI integrada com Celery para processamento distribuído de arquivos PDF de grande porte.",
        "mindmap": [
          "Asyncio",
          "FastAPI",
          "Django ORM",
          "Celery Workers",
          "PyTest"
        ],
        "quiz": [
          {
            "question": "Qual a principal vantagem da biblioteca Pydantic utilizada pelo FastAPI?",
            "options": [
              "Gerar interface gráfica automaticamente",
              "Validação de dados baseada em type hints com alta performance",
              "Substituir o banco de dados SQL",
              "Compilar Python para C++"
            ],
            "answer": 1,
            "explanation": "Pydantic utiliza as anotações de tipo nativas do Python para validar e serializar dados de forma rápida e segura."
          }
        ]
      },
      {
        "id": "tec-4",
        "title": "DevOps, CI/CD & Infraestrutura como Código (IaC)",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Eng. Lucas Mendonça",
        "description": "Automatize pipelines de integração e entrega contínua com GitHub Actions, Terraform, Ansible e AWS/GCP.",
        "modules": [
          {
            "num": 1,
            "title": "Cultura DevOps & Versionamento com Git Flow Avançado",
            "hours": 8,
            "topics": [
              "Trunk-Based Development",
              "Git Hooks",
              "Estratégias de Branching"
            ]
          },
          {
            "num": 2,
            "title": "Infraestrutura como Código com Terraform",
            "hours": 8,
            "topics": [
              "Provedores AWS/Azure",
              "State Management",
              "Módulos Reutilizáveis"
            ]
          },
          {
            "num": 3,
            "title": "Automação e Gerenciamento de Configuração com Ansible",
            "hours": 8,
            "topics": [
              "Playbooks",
              "Roles & Tasks",
              "Idempotência na Prática"
            ]
          },
          {
            "num": 4,
            "title": "Pipelines de CI/CD com GitHub Actions e GitLab CI",
            "hours": 8,
            "topics": [
              "Build, Test e Security Scans",
              "Deploy Blue/Green",
              "Canary Releases"
            ]
          },
          {
            "num": 5,
            "title": "Prática Aplicada, Mapa Mental & Quiz Autocorrigido",
            "hours": 8,
            "topics": [
              "Desafio de Infraestrutura",
              "Mapa Mental DevOps",
              "Quiz Final"
            ]
          }
        ],
        "caseStudy": "Criar uma pipeline completa em GitHub Actions para provisionar um cluster Kubernetes via Terraform e deployar uma aplicação com zero downtime.",
        "mindmap": [
          "GitOps",
          "Terraform",
          "Ansible",
          "GitHub Actions",
          "Kubernetes"
        ],
        "quiz": [
          {
            "question": "Qual comando do Terraform é responsável por comparar o estado desejado com a infraestrutura real e criar um plano de execução?",
            "options": [
              "terraform apply",
              "terraform plan",
              "terraform init",
              "terraform refresh"
            ],
            "answer": 1,
            "explanation": "O 'terraform plan' executa a verificação especulativa mostrando exatamente o que será criado, modificado ou destruído."
          }
        ]
      },
      {
        "id": "tec-5",
        "title": "Cibersegurança, Pentest & Ethical Hacking",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Esp. Roberto Fontes",
        "description": "Aprenda engenharia reversa, análise de vulnerabilidades OWASP Top 10, pentesting de aplicações e segurança defensiva (Blue Team).",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos de Segurança da Informação & Redes",
            "hours": 8,
            "topics": [
              "Modelo OSI & TCP/IP",
              "Criptografia Simétrica e Assimétrica",
              "Análise de Pacotes com Wireshark"
            ]
          },
          {
            "num": 2,
            "title": "OWASP Top 10 e Segurança em Aplicações Web",
            "hours": 8,
            "topics": [
              "SQL Injection & XSS",
              "CSRF & Broken Auth",
              "Mitigação com WAF"
            ]
          },
          {
            "num": 3,
            "title": "Metodologias de Pentest e Reconhecimento",
            "hours": 8,
            "topics": [
              "OSINT",
              "Nmap & Masscan",
              "Burp Suite na Prática"
            ]
          },
          {
            "num": 4,
            "title": "Segurança em Nuvem e Resposta a Incidentes",
            "hours": 8,
            "topics": [
              "IAM Policies",
              "Análise Forense",
              "Hardening de Servidores"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: CTF, Mapa Mental & Quiz de Autocorreção",
            "hours": 8,
            "topics": [
              "Desafio CTF",
              "Mapa Mental de Segurança",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Identificação e remediação de falhas de injeção de SQL e controle de acesso quebrado em um portal financeiro simulado.",
        "mindmap": [
          "Networking",
          "OWASP Top 10",
          "Burp Suite",
          "Pentest",
          "Hardening"
        ],
        "quiz": [
          {
            "question": "Qual vulnerabilidade permite que um atacante execute scripts maliciosos no navegador de outros usuários?",
            "options": [
              "SQL Injection",
              "Cross-Site Scripting (XSS)",
              "Buffer Overflow",
              "Man-in-the-Middle"
            ],
            "answer": 1,
            "explanation": "O XSS ocorre quando entradas não sanitizadas do usuário são incluídas na página HTML enviada ao navegador."
          }
        ]
      },
      {
        "id": "tec-6",
        "title": "Desenvolvimento Mobile com React Native & Expo",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Eng. Sofia Barbosa",
        "description": "Crie aplicativos nativos para iOS e Android com um único código fonte usando JavaScript/TypeScript e Expo.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos do React Native & Componentes Nativos",
            "hours": 8,
            "topics": [
              "JSX & Flexbox Mobile",
              "StyleSheet",
              "Navegação com React Navigation"
            ]
          },
          {
            "num": 2,
            "title": "Gerenciamento de Estado & Consumo de APIs",
            "hours": 8,
            "topics": [
              "Zustand / Redux Toolkit",
              "Axios & React Query",
              "Offline First com WatermelonDB"
            ]
          },
          {
            "num": 3,
            "title": "Recursos Nativos de Hardware",
            "hours": 8,
            "topics": [
              "Câmera & Geolocalização",
              "Push Notifications",
              "Biometria e Armazenamento Seguro"
            ]
          },
          {
            "num": 4,
            "title": "Publicação nas Lojas App Store e Google Play",
            "hours": 8,
            "topics": [
              "EAS Build & Submit",
              "Diretrizes de UX Mobile",
              "Monetização e In-App Purchases"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Quiz Autocorrigido e App Completo",
            "hours": 8,
            "topics": [
              "Projeto App de Entregas",
              "Mapa Mental Mobile",
              "Quiz de Fixação"
            ]
          }
        ],
        "caseStudy": "Desenvolver o protótipo funcional de um aplicativo de rastreamento em tempo real com GPS e notificações push utilizando Expo.",
        "mindmap": [
          "React Native",
          "Expo",
          "React Navigation",
          "APIs & State",
          "EAS Build"
        ],
        "quiz": [
          {
            "question": "Qual biblioteca oficial é padrão para gerenciamento de rotas e navegação em React Native?",
            "options": [
              "React Router DOM",
              "React Navigation",
              "Next Router",
              "Vue Router"
            ],
            "answer": 1,
            "explanation": "React Navigation é a solução recomendada pela comunidade para gerenciar navegação por pilhas e abas em apps React Native."
          }
        ]
      },
      {
        "id": "tec-7",
        "title": "Bancos de Dados NoSQL & Big Data Architecture",
        "level": "Avançado",
        "rating": 4.7,
        "instructor": "Dr. Marcelo Neves",
        "description": "Arquiteturas modernas de dados não relacionais: MongoDB, Cassandra, Redis e Apache Spark para processamento massivo.",
        "modules": [
          {
            "num": 1,
            "title": "Teorema CAP & Classificação de NoSQL",
            "hours": 8,
            "topics": [
              "Document, Key-Value, Column-Family e Graph Databases"
            ]
          },
          {
            "num": 2,
            "title": "MongoDB Avançado: Aggregation Framework & Indexação",
            "hours": 8,
            "topics": [
              "Pipelines de Agregação",
              "Sharding & Replica Sets",
              "Modelagem de Documentos"
            ]
          },
          {
            "num": 3,
            "title": "Bancos Chave-Valor & Grafo (Redis & Neo4j)",
            "hours": 8,
            "topics": [
              "Estruturas de Dados Redis",
              "Cypher Query Language",
              "Análise de Redes Complexas"
            ]
          },
          {
            "num": 4,
            "title": "Processamento Massivo com Apache Spark & Hadoop",
            "hours": 8,
            "topics": [
              "DataFrames e Spark SQL",
              "Streaming em Tempo Real",
              "Data Lakes"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Caso Real, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Arquitetura Data Lake",
              "Mapa Mental NoSQL",
              "Quiz de Autocorreção"
            ]
          }
        ],
        "caseStudy": "Modelar uma base de dados altamente distribuída com Cassandra e Redis para suportar o feed de notícias de uma rede social de milhões de usuários.",
        "mindmap": [
          "Teorema CAP",
          "MongoDB",
          "Redis",
          "Neo4j",
          "Spark Data Lake"
        ],
        "quiz": [
          {
            "question": "De acordo com o Teorema CAP, em um sistema distribuído na presença de uma partição de rede (P), qual a escolha arquitetural necessária?",
            "options": [
              "Manter tanto Consistência (C) quanto Disponibilidade (A) simultaneamente",
              "Escolher entre Consistência (C) ou Disponibilidade (A)",
              "Ignorar a partição e reiniciar os nós",
              "Converter o banco para SQL tradicional"
            ],
            "answer": 1,
            "explanation": "O Teorema CAP prova que em uma rede com partições inevitáveis, o sistema deve optar entre consistência forte ou alta disponibilidade."
          }
        ]
      },
      {
        "id": "tec-8",
        "title": "Desenvolvimento de APIs GraphQL & RESTful Profissionais",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Eng. Gabriel Matos",
        "description": "Construa interfaces de APIs elegantes, bem documentadas com Swagger/OpenAPI e de alto desempenho usando GraphQL.",
        "modules": [
          {
            "num": 1,
            "title": "Design RESTful e Especificação OpenAPI / Swagger",
            "hours": 8,
            "topics": [
              "Verbos HTTP e Status Codes",
              "HATEOAS",
              "Documentação Automatizada"
            ]
          },
          {
            "num": 2,
            "title": "Fundamentos de GraphQL: Schemas, Queries e Mutations",
            "hours": 8,
            "topics": [
              "Type System",
              "Resolvers",
              "Apollo Server/Client"
            ]
          },
          {
            "num": 3,
            "title": "Otimização e Resolução de Problemas no GraphQL",
            "hours": 8,
            "topics": [
              "Problema N+1 com DataLoader",
              "Subscriptions com WebSockets",
              "Caching"
            ]
          },
          {
            "num": 4,
            "title": "Segurança e Rate Limiting em APIs",
            "hours": 8,
            "topics": [
              "API Gateways",
              "Throttling & CORS",
              "Autenticação Bearer Token"
            ]
          },
          {
            "num": 5,
            "title": "Prática com Autocorreção, Estudo de Caso & Mapa Mental",
            "hours": 8,
            "topics": [
              "Migration REST para GraphQL",
              "Mapa Mental",
              "Quiz com Gabarito"
            ]
          }
        ],
        "caseStudy": "Desenvolver um GraphQL Gateway unificado para agregar microsserviços de produtos, estoque e entregas de um grande marketplace.",
        "mindmap": [
          "REST & OpenAPI",
          "GraphQL Schema",
          "Resolvers & DataLoader",
          "Rate Limiting",
          "Apollo Client"
        ],
        "quiz": [
          {
            "question": "Como o padrão DataLoader resolve o problema N+1 em queries GraphQL?",
            "options": [
              "Criando mais tabelas no banco de dados",
              "Agrupando (batching) e armazenando em cache as requisições de chave no mesmo tick do loop de eventos",
              "Convertendo a query em REST automaticamente",
              "Desativando as consultas aninhadas"
            ],
            "answer": 1,
            "explanation": "DataLoader agrupa múltiplas buscas individuais em uma única consulta batch por IDs e mantém cache durante o ciclo de vida da requisição."
          }
        ]
      },
      {
        "id": "tec-9",
        "title": "Engenharia de Testes, QA & Automação com Cypress e Playwright",
        "level": "Intermediário",
        "rating": 4.9,
        "instructor": "Dra. Patricia Lima",
        "description": "Ganta a qualidade total de software com estratégias de testes unitários, integração e automação E2E moderna.",
        "modules": [
          {
            "num": 1,
            "title": "Pirâmide de Testes & TDD (Test-Driven Development)",
            "hours": 8,
            "topics": [
              "Unit Testing com Jest/Vitest",
              "Mocks, Stubs e Spies",
              "Cobertura de Código"
            ]
          },
          {
            "num": 2,
            "title": "Testes End-to-End Avançados com Cypress",
            "hours": 8,
            "topics": [
              "Seletores Robustos",
              "Interceptação de APIs",
              "Custom Commands"
            ]
          },
          {
            "num": 3,
            "title": "Automação Multi-Navegador com Playwright",
            "hours": 8,
            "topics": [
              "Testes Paralelos",
              "Screenshots e Traces Visual",
              "Testes de Performance"
            ]
          },
          {
            "num": 4,
            "title": "Integração Contínua de QA e Testes de Carga com k6",
            "hours": 8,
            "topics": [
              "Execução em Pipeline CI",
              "Relatórios HTML",
              "Simulação de Stress e Carga"
            ]
          },
          {
            "num": 5,
            "title": "Prática Final: Quiz Autocorrigido e Suite E2E",
            "hours": 8,
            "topics": [
              "Estruturação de Suite de QA",
              "Mapa Mental QA",
              "Quiz de Fixação"
            ]
          }
        ],
        "caseStudy": "Criar uma suíte completa de testes automatizados com Playwright e k6 para validar o fluxo crítico de checkout de um banco digital.",
        "mindmap": [
          "Pirâmide de Testes",
          "TDD & Jest",
          "Cypress E2E",
          "Playwright",
          "k6 Load Testing"
        ],
        "quiz": [
          {
            "question": "Em TDD (Test-Driven Development), qual é o ciclo correto de desenvolvimento?",
            "options": [
              "Escrever código -> Escrever teste -> Refatorar",
              "Red (Escrever teste que falha) -> Green (Escrever código mínimo que passa) -> Refactor",
              "Documentar -> Testar manualmente -> Publicar",
              "Escrever testes de carga -> Ajustar banco -> Refatorar"
            ],
            "answer": 1,
            "explanation": "O ciclo TDD clássico é Red-Green-Refactor, garantindo que o teste guie o design e o comportamento do código."
          }
        ]
      },
      {
        "id": "tec-10",
        "title": "Desenvolvimento Blockchain & Smart Contracts com Solidity",
        "level": "Avançado",
        "rating": 4.8,
        "instructor": "Prof. Rodrigo Amaral",
        "description": "Construa aplicações descentralizadas (dApps) na rede Ethereum usando Solidity, Hardhat e Ethers.js.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos de Cryptography & Arquitetura Blockchain",
            "hours": 8,
            "topics": [
              "Hashing Sha-256",
              "Árvores de Merkle",
              "Mecanismos de Consenso (PoW / PoS)"
            ]
          },
          {
            "num": 2,
            "title": "Programação de Smart Contracts com Solidity",
            "hours": 8,
            "topics": [
              "Tipos de Dados",
              "Modifiers & Events",
              "Padrões ERC-20 e ERC-721 (NFTs)"
            ]
          },
          {
            "num": 3,
            "title": "Ferramentas de Desenvolvimento: Hardhat & Foundry",
            "hours": 8,
            "topics": [
              "Testes Unitários em Solidity",
              "Forking de Mainnet",
              "Deploy em Testnets"
            ]
          },
          {
            "num": 4,
            "title": "Desenvolvimento dApp Frontend com Ethers.js e Web3Modal",
            "hours": 8,
            "topics": [
              "Conexão de Carteira MetaMask",
              "Interação com Contratos",
              "Gas Optimization"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Smart Contract Audit, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Auditoria de Segurança DeFi",
              "Mapa Mental Blockchain",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Desenvolver e auditar o código de um Smart Contract para um protocolo DeFi de empréstimos colateralizados sem custodiante.",
        "mindmap": [
          "Blockchain",
          "Solidity",
          "ERC-20/721",
          "Hardhat",
          "Web3 Integration"
        ],
        "quiz": [
          {
            "question": "Qual é a principal função da EVM (Ethereum Virtual Machine)?",
            "options": [
              "Armazenar arquivos de vídeo na blockchain",
              "Executar o bytecode dos Smart Contracts de maneira determinística em todos os nós da rede",
              "Minerar bitcoins mais rápido",
              "Converter moedas fiduciárias em tokens automaticamente"
            ],
            "answer": 1,
            "explanation": "A EVM é o ambiente de execução isolado que garante que o código dos Smart Contracts rode exatamente da mesma forma em toda a rede Ethereum."
          }
        ]
      }
    ]
  },
  {
    "id": "ia",
    "name": "Inteligência Artificial & Dados",
    "icon": "fa-brain",
    "color": "purple",
    "courses": [
      {
        "id": "ia-1",
        "title": "Machine Learning & Inteligência Artificial Aplicada",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dra. Beatriz Santos",
        "description": "Domine algoritmos supervisionados, não supervisionados, redes neurais e pipelines de aprendizado de máquina com Scikit-Learn.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos de Ciência de Dados & Regressão",
            "hours": 8,
            "topics": [
              "Pandas e NumPy",
              "Regressão Linear e Logística",
              "Métricas MSE e R²"
            ]
          },
          {
            "num": 2,
            "title": "Algoritmos de Classificação & Ensembles",
            "hours": 8,
            "topics": [
              "Árvores de Decisão",
              "Random Forest & XGBoost",
              "Matriz de Confusão e ROC-AUC"
            ]
          },
          {
            "num": 3,
            "title": "Aprendizado Não Supervisionado & Clusterização",
            "hours": 8,
            "topics": [
              "K-Means",
              "DBSCAN",
              "Redução de Dimensionalidade com PCA"
            ]
          },
          {
            "num": 4,
            "title": "Introdução às Redes Neurais com TensorFlow e PyTorch",
            "hours": 8,
            "topics": [
              "Perceptron",
              "Funções de Ativação",
              "Backpropagation e Otimizadores"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Modelo Preditivo, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Desafio de Fraude Financeira",
              "Mapa Mental ML",
              "Quiz com Autocorreção"
            ]
          }
        ],
        "caseStudy": "Construir e otimizar um modelo de XGBoost para detecção de fraudes em transações de cartão de crédito com 99% de precisão.",
        "mindmap": [
          "Supervisionado",
          "Ensembles",
          "K-Means & PCA",
          "PyTorch",
          "Métricas ML"
        ],
        "quiz": [
          {
            "question": "Qual técnica é frequentemente utilizada para evitar o problema de Overfitting em modelos de Machine Learning?",
            "options": [
              "Aumentar infinitamente a complexidade do modelo",
              "Regularização (L1/L2 - Lasso/Ridge) e Validação Cruzada",
              "Remover todos os dados de teste",
              "Utilizar apenas uma variável explicativa"
            ],
            "answer": 1,
            "explanation": "A regularização penaliza coeficientes muito elevados, contendo a sobreajustagem (overfitting) e melhorando a generalização do modelo."
          }
        ]
      },
      {
        "id": "ia-2",
        "title": "Deep Learning, Visão Computacional & PyTorch",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dr. Henrique Vasconcelos",
        "description": "Construa redes neurais convolucionais (CNNs) e modelos de detecção de objetos em tempo real com PyTorch e OpenCV.",
        "modules": [
          {
            "num": 1,
            "title": "Arquitetura de Deep Learning & Tensores PyTorch",
            "hours": 8,
            "topics": [
              "Manipulação de Tensores",
              "Autograd",
              "Modelos Multi-camadas (MLP)"
            ]
          },
          {
            "num": 2,
            "title": "Redes Neurais Convolucionais (CNNs)",
            "hours": 8,
            "topics": [
              "Filtros Convolucionais",
              "Pooling",
              "ResNet e Transfer Learning"
            ]
          },
          {
            "num": 3,
            "title": "Detecção e Segmentação de Objetos",
            "hours": 8,
            "topics": [
              "YOLOv8 na Prática",
              "Segmentação Semântica",
              "OpenCV para Processamento de Imagem"
            ]
          },
          {
            "num": 4,
            "title": "Redes Generativas Adversárias (GANs) e Autoencoders",
            "hours": 8,
            "topics": [
              "Generators & Discriminators",
              "Variational Autoencoders (VAEs)",
              "Síntese de Imagem"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Sistema de Visão, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Caso Real: Inspeção Industrial",
              "Mapa Mental Visão",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Treinar um modelo YOLOv8 para identificação automática de Equipamentos de Proteção Individual (EPI) em canteiros de obra via câmeras de segurança.",
        "mindmap": [
          "PyTorch Tensors",
          "CNNs & ResNet",
          "YOLOv8 Detecção",
          "GANs",
          "OpenCV"
        ],
        "quiz": [
          {
            "question": "Qual a função da operação de Pooling em uma rede convolucional (CNN)?",
            "options": [
              "Aumentar a resolução da imagem de entrada",
              "Reduzir a dimensão espacial dos mapas de características mantendo as informações mais relevantes",
              "Multiplicar os pesos por zero",
              "Inverter as cores da imagem"
            ],
            "answer": 1,
            "explanation": "O Pooling (como Max Pooling) reduz a dimensionalidade espacial, economizando computação e concedendo invariância a pequenas rotações/traduções."
          }
        ]
      },
      {
        "id": "ia-3",
        "title": "Engenharia de Prompt, LLMs & RAG (Retrieval-Augmented Generation)",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Prof. Lucas Silveira",
        "description": "Crie assistentes inteligentes e sistemas RAG corporativos usando LangChain, LlamaIndex, Bancos Vetoriais (Pinecone/Chroma) e OpenAI API.",
        "modules": [
          {
            "num": 1,
            "title": "Arquitetura de Transformers & Modelos de Linguagem (LLMs)",
            "hours": 8,
            "topics": [
              "Self-Attention Mechanism",
              "Embeddings de Texto",
              "Tokenização e Context Window"
            ]
          },
          {
            "num": 2,
            "title": "Engenharia de Prompt Avançada & Few-Shot Prompting",
            "hours": 8,
            "topics": [
              "Chain-of-Thought",
              "ReAct Framework",
              "Técnicas de Minimização de Alucinação"
            ]
          },
          {
            "num": 3,
            "title": "Sistemas RAG (Retrieval-Augmented Generation)",
            "hours": 8,
            "topics": [
              "Bancos Vetoriais (Chroma/Pinecone)",
              "Chunking Strategies",
              "Busca Semântica & Hybrid Search"
            ]
          },
          {
            "num": 4,
            "title": "Agentes Autônomos com LangChain e LlamaIndex",
            "hours": 8,
            "topics": [
              "Tools & Memory",
              "Multi-Agent Systems",
              "Fine-Tuning de LLMs"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Agente RAG Corporativo, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Construção de Chatbot sobre PDFs",
              "Mapa Mental RAG",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Implementar um sistema RAG corporativo para responder dúvidas jurídicas e regulatórias com base em 50.000 documentos com citação de fontes.",
        "mindmap": [
          "Transformers",
          "Prompt Engineering",
          "Vector DB (Chroma)",
          "RAG Pipeline",
          "LangChain Agents"
        ],
        "quiz": [
          {
            "question": "Em arquiteturas RAG, qual é o papel principal do Banco de Dados Vetorial?",
            "options": [
              "Executar código Python em tempo real",
              "Armazenar embeddings e realizar busca por similaridade de cosseno para recuperar contextos relevantes",
              "Substituir o modelo LLM completamente",
              "Gerar imagens a partir de texto"
            ],
            "answer": 1,
            "explanation": "O banco vetorial armazena os fragmentos de texto codificados em vetores para permitir a busca semântica rápida do contexto a ser injetado na LLM."
          }
        ]
      },
      {
        "id": "ia-4",
        "title": "Engenharia de Dados & Pipelines com Apache Airflow",
        "level": "Avançado",
        "rating": 4.8,
        "instructor": "Eng. Renato Alencar",
        "description": "Construa pipelines ETL/ELT escaláveis com Apache Airflow, dbt, Snowflake e Apache Iceberg para Data Lakes corporativos.",
        "modules": [
          {
            "num": 1,
            "title": "Arquiteturas de Data Warehouses & Data Lakes",
            "hours": 8,
            "topics": [
              "Modelagem Star Schema",
              "Data Lakehouse Concept",
              "Formatos Parquet e ORC"
            ]
          },
          {
            "num": 2,
            "title": "Orquestração de Dados com Apache Airflow",
            "hours": 8,
            "topics": [
              "DAGs, Operators e Tasks",
              "TaskFlow API",
              "Tratamento de Falhas e Retries"
            ]
          },
          {
            "num": 3,
            "title": "Transformação de Dados Moderna com dbt (data build tool)",
            "hours": 8,
            "topics": [
              "Modelagem SQL",
              "Testes de Dados & Documentação",
              "Lineage Graphs"
            ]
          },
          {
            "num": 4,
            "title": "Qualidade, Governança e Observabilidade de Dados",
            "hours": 8,
            "topics": [
              "Great Expectations",
              "Catalogação de Dados",
              "Monitoramento de Datasets"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Pipeline ELT, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Pipeline Completa de E-commerce",
              "Mapa Mental Data Eng",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Desenvolver a DAG do Airflow para ingerir 5TB diários de registros de vendas do PostgreSQL para o Snowflake usando dbt para transformação.",
        "mindmap": [
          "Star Schema",
          "Airflow DAGs",
          "dbt Transformation",
          "Snowflake",
          "Data Governance"
        ],
        "quiz": [
          {
            "question": "O que representa uma DAG (Directed Acyclic Graph) no Apache Airflow?",
            "options": [
              "Uma tabela do banco de dados relacional",
              "A coleção de todas as tarefas estruturadas com suas dependências e ordem de execução sem ciclos",
              "Um script para enviar e-mails de marketing",
              "Um algoritmo de regressão linear"
            ],
            "answer": 1,
            "explanation": "Uma DAG no Airflow define o fluxo de trabalho organizado em tarefas encadeadas sem caminhos circulares."
          }
        ]
      },
      {
        "id": "ia-5",
        "title": "Business Intelligence & Analytics com Power BI Avançado",
        "level": "Intermediário",
        "rating": 4.9,
        "instructor": "Esp. Juliana Rocha",
        "description": "Transforme dados brutos em dashboards executivos interativos usando fórmulas DAX avançadas, Power Query e ETL.",
        "modules": [
          {
            "num": 1,
            "title": "ETL Avançado com Power Query & M Code",
            "hours": 8,
            "topics": [
              "Tratamento de Dados",
              "Trabalhando com APIs",
              "Parâmetros e Funções Customizadas"
            ]
          },
          {
            "num": 2,
            "title": "Modelagem de Dados e Relacionamentos",
            "hours": 8,
            "topics": [
              "Esquema Estrela (Star Schema)",
              "Relacionamentos 1:N e N:N",
              "Tabelas Fato e Dimensão"
            ]
          },
          {
            "num": 3,
            "title": "Linguagem DAX Avançada (Data Analysis Expressions)",
            "hours": 8,
            "topics": [
              "Contexto de Linha vs Filtro",
              "CALCULATE, ALL e FILTER",
              "Time Intelligence"
            ]
          },
          {
            "num": 4,
            "title": "Design de Dashboards Executivos & Storytelling com Dados",
            "hours": 8,
            "topics": [
              "Layout UX em Relatórios",
              "Bookmarks & Tooltips",
              "Publicação no Power BI Service"
            ]
          },
          {
            "num": 5,
            "title": "Prática com Autocorreção: Dashboard, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Dashboard de Vendas Executivo",
              "Mapa Mental DAX",
              "Quiz de Fixação"
            ]
          }
        ],
        "caseStudy": "Criar um painel de inteligência de negócios com análise de Time Intelligence para prever faturamento e Churn Rate mensal.",
        "mindmap": [
          "Power Query M",
          "Star Schema",
          "DAX CALCULATE",
          "Time Intelligence",
          "Storytelling Visual"
        ],
        "quiz": [
          {
            "question": "Qual é a função mais importante e versátil na linguagem DAX, capaz de alterar o contexto de filtro de um cálculo?",
            "options": [
              "SUM",
              "CALCULATE",
              "COUNTROWS",
              "RELATED"
            ],
            "answer": 1,
            "explanation": "A CALCULATE é o coração do DAX, pois permite modificar ou sobrescrever o contexto de filtro existente para a expressão informada."
          }
        ]
      },
      {
        "id": "ia-6",
        "title": "Processamento de Linguagem Natural (NLP) & NLTK/SpaCy",
        "level": "Avançado",
        "rating": 4.8,
        "instructor": "Dr. Anderson Melo",
        "description": "Extraia insights de textos com análise de sentimentos, NER (Reconhecimento de Entidades), SpaCy e HuggingFace.",
        "modules": [
          {
            "num": 1,
            "title": "Pré-Processamento de Texto & Tokenização",
            "hours": 8,
            "topics": [
              "Stopwords, Stemming & Lemmatization",
              "TF-IDF e Bag of Words",
              "Expressões Regulares"
            ]
          },
          {
            "num": 2,
            "title": "Word Embeddings (Word2Vec, GloVe, FastText)",
            "hours": 8,
            "topics": [
              "Representação Vetorial",
              "Semântica Distribucional",
              "Similaridade de Cosseno"
            ]
          },
          {
            "num": 3,
            "title": "Modelos Avançados com SpaCy e HuggingFace Transformers",
            "hours": 8,
            "topics": [
              "Named Entity Recognition (NER)",
              "BERT & RoBERTa",
              "Classificação de Texto"
            ]
          },
          {
            "num": 4,
            "title": "Análise de Sentimentos e Mineração de Opinião",
            "hours": 8,
            "topics": [
              "Aspect-Based Sentiment Analysis",
              "Topic Modeling com LDA",
              "Visualização com PyLDAvis"
            ]
          },
          {
            "num": 5,
            "title": "Prática: NLP Pipeline, Mapa Mental & Quiz Autocorrigido",
            "hours": 8,
            "topics": [
              "Mineração de Reviews",
              "Mapa Mental NLP",
              "Quiz de Fixação"
            ]
          }
        ],
        "caseStudy": "Construção de uma pipeline de NLP para categorizar e extrair sentimentos de 100.000 avaliações de clientes de aplicativo móvel.",
        "mindmap": [
          "Tokenização & Lemmatization",
          "Word2Vec",
          "SpaCy NER",
          "BERT Fine-tuning",
          "Topic Modeling"
        ],
        "quiz": [
          {
            "question": "Diferente de Word2Vec, qual a principal vantagem do modelo BERT para tarefas de NLP?",
            "options": [
              "Trabalha apenas com caracteres em caixa alta",
              "Gera embeddings contextuais bidirecionais, onde a mesma palavra tem vetores diferentes dependendo do contexto da frase",
              "Não necessita de GPU para treinamento",
              "Funciona apenas para o idioma inglês"
            ],
            "answer": 1,
            "explanation": "BERT é bidirecional e contextual: o significado de uma palavra é codificado observando tanto as palavras anteriores quanto as posteriores."
          }
        ]
      },
      {
        "id": "ia-7",
        "title": "MLOps: Implantação & Monitoramento de Modelos em Produção",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Eng. Vanessa Guimarães",
        "description": "Leve modelos de IA do ambiente de testes para produção escalável usando MLflow, BentoML, Kubeflow e Evidently AI.",
        "modules": [
          {
            "num": 1,
            "title": "Ciclo de Vida MLOps & Rastreamento com MLflow",
            "hours": 8,
            "topics": [
              "Experimentos e Parâmetros",
              "Registro de Modelos",
              "Artefatos e Métricas"
            ]
          },
          {
            "num": 2,
            "title": "Empacotamento e Servir Modelos de IA",
            "hours": 8,
            "topics": [
              "BentoML",
              "FastAPI para ML",
              "Dockerização de Pipielines"
            ]
          },
          {
            "num": 3,
            "title": "Detecção de Drift de Dados e Conceito",
            "hours": 8,
            "topics": [
              "Evidently AI",
              "Data Drift vs Concept Drift",
              "Alertas e Retreinamento Automatizado"
            ]
          },
          {
            "num": 4,
            "title": "Pipelines de MLOps no Kubernetes com Kubeflow",
            "hours": 8,
            "topics": [
              "Pipelines Declarativas",
              "Feature Stores (Feast)",
              "AB Testing em ML"
            ]
          },
          {
            "num": 5,
            "title": "Prática Final: MLOps Pipeline, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Deploy de Modelo Preditivo",
              "Mapa Mental MLOps",
              "Quiz de Autocorreção"
            ]
          }
        ],
        "caseStudy": "Implementar uma esteira automatizada de MLOps que detecta degradação na acurácia do modelo de recomendação e dispara retreinamento automático.",
        "mindmap": [
          "MLflow Tracking",
          "Model Serving",
          "Data Drift",
          "Feature Store",
          "Kubeflow"
        ],
        "quiz": [
          {
            "question": "O que caracteriza o fenômeno de 'Concept Drift' em MLOps?",
            "options": [
              "O servidor de modelos fica sem memória RAM",
              "As propriedades estatísticas da variável alvo mudam ao longo do tempo, alterando o relacionamento entre dados e previsão",
              "O código em Python é deletado acidentalmente",
              "O tempo de resposta do banco aumenta"
            ],
            "answer": 1,
            "explanation": "Concept Drift ocorre quando o comportamento real do mundo muda, fazendo com que o modelo treinado no passado perca precisão no presente."
          }
        ]
      },
      {
        "id": "ia-8",
        "title": "Estatística Aplicada & Aprendizado Estatístico para Data Science",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Dr. Paulo Viana",
        "description": "Fundamentos matemáticos para cientistas de dados: testes de hipótese, inferência bayesiana e estatística multivariada.",
        "modules": [
          {
            "num": 1,
            "title": "Estatística Descritiva & Distribuições de Probabilidade",
            "hours": 8,
            "topics": [
              "Variância e Desvio Padrão",
              "Distribuição Normal, Binomial e Poisson",
              "Teorema do Limite Central"
            ]
          },
          {
            "num": 2,
            "title": "Inferência Estatística & Testes de Hipótese",
            "hours": 8,
            "topics": [
              "Intervalos de Confiança",
              "Teste t de Student e ANOVA",
              "p-valor e Erros Tipo I e II"
            ]
          },
          {
            "num": 3,
            "title": "Estatística Bayesian na Prática",
            "hours": 8,
            "topics": [
              "Teorema de Bayes",
              "Probabilidade Priori e Posteriori",
              "PyMC para Modelagem Bayesiana"
            ]
          },
          {
            "num": 4,
            "title": "Análise Multivariada & Análise de Séries Temporais",
            "hours": 8,
            "topics": [
              "ARIMA e SARIMAX",
              "Decomposição de Tendência e Sazonalidade",
              "Prophet do Meta"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Teste A/B, Mapa Mental & Quiz Autocorrigido",
            "hours": 8,
            "topics": [
              "Análise de Teste A/B de E-commerce",
              "Mapa Mental Estatística",
              "Quiz de Fixação"
            ]
          }
        ],
        "caseStudy": "Desenho e validação estatística de um Teste A/B com cálculo de tamanho de amostra e poder estatístico para alteração de checkout.",
        "mindmap": [
          "Distribuições",
          "Testes de Hipótese",
          "Teorema de Bayes",
          "Séries Temporais",
          "Teste A/B"
        ],
        "quiz": [
          {
            "question": "O que indica um p-valor inferior ao nível de significância alpha (ex: p < 0.05) em um teste de hipóteses?",
            "options": [
              "Aceita-se a Hipótese Nula (H0)",
              "Rejeita-se a Hipótese Nula (H0) em favor da Hipótese Alternativa (H1)",
              "O teste é totalmente inválido",
              "Os dados contêm erros de digitação"
            ],
            "answer": 1,
            "explanation": "Um p-valor menor que alpha indica que a probabilidade de observar esses dados sob a hipótese nula é extremamente baixa, levando à sua rejeição."
          }
        ]
      },
      {
        "id": "ia-9",
        "title": "IA Generativa na Prática: Midjourney, Stable Diffusion & ComfyUI",
        "level": "Intermediário",
        "rating": 4.9,
        "instructor": "Esp. Carla Paes",
        "description": "Crie arte digital, assets para jogos e conteúdos multimídia avançados com IA generativa de imagens e controle de difusão.",
        "modules": [
          {
            "num": 1,
            "title": "Princípios de Modelos de Difusão e Engenharia de Prompt Visual",
            "hours": 8,
            "topics": [
              "Latent Diffusion Models",
              "Estilos, Iluminação e Câmera",
              "Negative Prompts"
            ]
          },
          {
            "num": 2,
            "title": "Stable Diffusion Avançado & ControlNet",
            "hours": 8,
            "topics": [
              "Pose Control",
              "Canny Edge & Depth Maps",
              "Inpainting e Outpainting"
            ]
          },
          {
            "num": 3,
            "title": "Workflows com ComfyUI e LoRA Training",
            "hours": 8,
            "topics": [
              "Nós de Processamento",
              "Treinamento de LoRAs de Estilo/Pessoa",
              "Kohya_ss"
            ]
          },
          {
            "num": 4,
            "title": "Vídeo Generativo & Síntese de Áudio",
            "hours": 8,
            "topics": [
              "Runway Gen-2 / AnimateDiff",
              "ElevenLabs para Vozes",
              "Edição Multimídia com IA"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Produção Visual, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Campanha Publicitária com IA",
              "Mapa Mental GenAI Visual",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Criação de uma campanha publicitária visual completa com personagens consistentes gerados via LoRAs customizadas no ComfyUI.",
        "mindmap": [
          "Diffusion Models",
          "ControlNet",
          "ComfyUI Nodes",
          "LoRA Training",
          "AI Video & Audio"
        ],
        "quiz": [
          {
            "question": "Qual a função do módulo ControlNet no ecossistema do Stable Diffusion?",
            "options": [
              "Limpar arquivos temporários do computador",
              "Adicionar condições estruturais extras (como poses humanas, bordas e profundidade) para guiar com precisão a geração da imagem",
              "Aumentar a velocidade da conexão de internet",
              "Traduzir prompts do português para o inglês"
            ],
            "answer": 1,
            "explanation": "ControlNet permite adicionar condicionamentos espaciais adicionais ao processo de difusão, permitindo recriar poses e composições exatas."
          }
        ]
      },
      {
        "id": "ia-10",
        "title": "Sistemas de Recomendação Inteligentes & Filtros Colaborativos",
        "level": "Avançado",
        "rating": 4.8,
        "instructor": "Dr. Marcio Oliveira",
        "description": "Desenvolva algoritmos de recomendação personalizados como os da Netflix e Spotify usando Fatoração de Matrizes e Deep Learning.",
        "modules": [
          {
            "num": 1,
            "title": "Abordagens Tradicionais de Recomendação",
            "hours": 8,
            "topics": [
              "Filtro Baseado em Conteúdo",
              "Filtro Colaborativo User-User e Item-Item",
              "Métricas de Avaliação (MAP, NDCG)"
            ]
          },
          {
            "num": 2,
            "title": "Fatoração de Matrizes e Decomposição em Valores Singulares (SVD)",
            "hours": 8,
            "topics": [
              "SVD e SVD++",
              "Alternating Least Squares (ALS)",
              "Biblioteca Surprise"
            ]
          },
          {
            "num": 3,
            "title": "Sistemas de Recomendação em Escala com Apache Spark MLlib",
            "hours": 8,
            "topics": [
              "ALS Distribuído",
              "Processamento em Lote de Recomendações",
              "Persistência em Caching"
            ]
          },
          {
            "num": 4,
            "title": "Deep Learning para Recomendação (Two-Tower Models)",
            "hours": 8,
            "topics": [
              "Embedding Layers",
              "Modelos Baseados em Grafo (PinSage)",
              "Recomendação em Tempo Real"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Engine de Recomendação, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Engine de Recomendação de Filmes",
              "Mapa Mental",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Desenvolver o motor de recomendação personalizado em tempo real de produtos similares para um e-commerce com 1 milhão de SKUs.",
        "mindmap": [
          "Filtro Colaborativo",
          "SVD & ALS",
          "Spark MLlib",
          "Two-Tower Neural Nets",
          "NDCG Evaluation"
        ],
        "quiz": [
          {
            "question": "Qual é a principal limitação dos algoritmos de Filtro Colaborativo pura conhecida como 'Cold Start'?",
            "options": [
              "Servidores que congelam em baixas temperaturas",
              "Dificuldade de fazer recomendações acuradas para novos usuários ou itens que ainda não possuem histórico de interações",
              "Incompatibilidade com linguagens de programação modernas",
              "Excesso de memória utilizada por arquivos de texto"
            ],
            "answer": 1,
            "explanation": "O problema de Cold Start ocorre quando um novo item ou usuário entra no sistema sem dados prévios de avaliação para calcular a similaridade."
          }
        ]
      }
    ]
  },
  {
    "id": "neg",
    "name": "Negócios & Gestão",
    "icon": "fa-chart-line",
    "color": "emerald",
    "courses": [
      {
        "id": "neg-1",
        "title": "Gestão de Projetos Ágeis: Scrum, Kanban & OKRs",
        "level": "Intermediário",
        "rating": 4.9,
        "instructor": "Prof. Eduardo Meirelles",
        "description": "Lidere equipes de alta performance utilizando frameworks ágeis, gestão visual Kanban e métricas de resultado OKR.",
        "modules": [
          {
            "num": 1,
            "title": "Manifesto Ágil & Framework Scrum na Prática",
            "hours": 8,
            "topics": [
              "Papéis (PO, Scrum Master, Devs)",
              "Eventos (Sprint, Daily, Review, Retro)",
              "Artefatos (Backlog, Incremento)"
            ]
          },
          {
            "num": 2,
            "title": "Kanban & Gestão de Fluxo de Trabalho",
            "hours": 8,
            "topics": [
              "Limites de WIP (Work in Progress)",
              "Lead Time e Cycle Time",
              "Diagrama de Fluxo Acumulado (CFD)"
            ]
          },
          {
            "num": 3,
            "title": "Gestão de Metas com OKRs (Objectives and Key Results)",
            "hours": 8,
            "topics": [
              "Escrita de OKRs Desafiadores",
              "Alinhamento Vertical e Horizontal",
              "Rituais de Check-in"
            ]
          },
          {
            "num": 4,
            "title": "Escala Ágil em Grandes Organizações (SAFe / LeSS)",
            "hours": 8,
            "topics": [
              "PI Planning",
              "Release Train",
              "Governança Ágil"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Transformação Ágil, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Simulação de Sprint & Quadro Kanban",
              "Mapa Mental Agilidade",
              "Quiz de Fixação"
            ]
          }
        ],
        "caseStudy": "Conduzir o plano de transição de uma diretoria tradicional de tecnologia para a metodologia ágil utilizando Scrum e OKRs corporativos.",
        "mindmap": [
          "Manifesto Ágil",
          "Scrum Framework",
          "Kanban & WIP",
          "OKRs & Metas",
          "SAFe em Escala"
        ],
        "quiz": [
          {
            "question": "No framework Scrum, qual é a duração máxima recomendada para a reunião diária (Daily Scrum)?",
            "options": [
              "30 minutos",
              "15 minutos",
              "1 hora",
              "Sem limite de tempo"
            ],
            "answer": 1,
            "explanation": "A Daily Scrum é um evento time-boxed de 15 minutos para a equipe sincronizar atividades e identificar impedimentos."
          }
        ]
      },
      {
        "id": "neg-2",
        "title": "Marketing Digital de Performance & Growth Hacking",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Esp. Mariana Costa",
        "description": "Acelere a aquisição e retenção de clientes com mídia paga (Meta Ads, Google Ads), funis de conversão e experimentos de Growth.",
        "modules": [
          {
            "num": 1,
            "title": "Metodologia de Growth Hacking & Funil AARRR",
            "hours": 8,
            "topics": [
              "Aquisição, Ativação, Retenção, Receita e Recomendação",
              "North Star Metric"
            ]
          },
          {
            "num": 2,
            "title": "Mídia Paga Avançada: Meta Ads & Google Search/Performance Max",
            "hours": 8,
            "topics": [
              "Estrutura de Campanhas",
              "Pixel de Rastreamento e API de Conversões",
              "Otimização de ROAS"
            ]
          },
          {
            "num": 3,
            "title": "SEO (Search Engine Optimization) & Inbound Marketing",
            "hours": 8,
            "topics": [
              "SEO Técnico",
              "Pesquisa de Palavras-chave",
              "Automação de Marketing e Email Funnels"
            ]
          },
          {
            "num": 4,
            "title": "Otimização de Taxa de Conversão (CRO) & Testes A/B Visual",
            "hours": 8,
            "topics": [
              "Análise de Heatmaps",
              "Copywriting Persuasivo",
              "Páginas de Destino de Alta Conversão"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Experimento de Growth, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Plano de Tração de Startup",
              "Mapa Mental Growth",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Estruturar uma estratégia de testes A/B no funil de checkout que aumente a taxa de conversão de compras em 25% mantendo o CAC constante.",
        "mindmap": [
          "Funil AARRR",
          "Meta & Google Ads",
          "SEO & Content",
          "CRO & Testes A/B",
          "CAC e LTV"
        ],
        "quiz": [
          {
            "question": "Qual das métricas a seguir representa o custo médio para adquirir um novo cliente em estratégias de marketing?",
            "options": [
              "LTV (Lifetime Value)",
              "CAC (Custo de Aquisição de Cliente)",
              "NPS (Net Promoter Score)",
              "ROAS (Return on Ad Spend)"
            ],
            "answer": 1,
            "explanation": "O CAC mede todos os investimentos em marketing e vendas divididos pelo número de novos clientes adquiridos no período."
          }
        ]
      },
      {
        "id": "neg-3",
        "title": "Finanças Corporativas, Valuation & Modelagem Financeira",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dr. Roberto Camargo",
        "description": "Analise demonstrativos financeiros (DRE, DFC, BP), calcule o valor justo de empresas (DCF) e tome decisões de investimento.",
        "modules": [
          {
            "num": 1,
            "title": "Análise das Demonstrações Financeiras (DRE, Balanço Patrimonial e DFC)",
            "hours": 8,
            "topics": [
              "Indicadores de Liquidez e Endividamento",
              "Margens EBITDA e Lucro Líquido",
              "Análise Vertical e Horizontal"
            ]
          },
          {
            "num": 2,
            "title": "Matemática Financeira Avançada & Custo de Capital (WACC)",
            "hours": 8,
            "topics": [
              "Fluxo de Caixa Descontado",
              "CAPM (Capital Asset Pricing Model)",
              "Custo de Dívida e Equity"
            ]
          },
          {
            "num": 3,
            "title": "Modelagem Financeira e Valuation via Fluxo de Caixa Descontado (DCF)",
            "hours": 8,
            "topics": [
              "Projeções Financeiras",
              "Cálculo do Valor Terminal",
              "Análise de Sensibilidade"
            ]
          },
          {
            "num": 4,
            "title": "Valuation por Múltiplos e Fusions & Acquisitions (M&A)",
            "hours": 8,
            "topics": [
              "EV/EBITDA, P/L e P/VP",
              "Processo de Due Diligence",
              "Estruturação de Operações M&A"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Valuation Completo, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Valuation de uma Empresa de SaaS",
              "Mapa Mental Finanças",
              "Quiz de Autocorreção"
            ]
          }
        ],
        "caseStudy": "Elaborar o modelo financeiro de Valuation por Fluxo de Caixa Descontado para emissão de laudo de avaliação de uma tech company.",
        "mindmap": [
          "DRE & DFC",
          "WACC & CAPM",
          "Valuation DCF",
          "Múltiplos EV/EBITDA",
          "Due Diligence"
        ],
        "quiz": [
          {
            "question": "O que representa a taxa WACC (Weighted Average Cost of Capital) no contexto de Valuation?",
            "options": [
              "O imposto sobre vendas da empresa",
              "A taxa média ponderada de custo do capital próprio e de terceiros utilizada como taxa de desconto do fluxo de caixa",
              "A margem de lucro operacional absoluta",
              "O saldo final de caixa da empresa no ano"
            ],
            "answer": 1,
            "explanation": "O WACC reflete a taxa mínima de retorno exigida pelos provedores de capital (acionistas e credores) para financiar os ativos da firma."
          }
        ]
      },
      {
        "id": "neg-4",
        "title": "Gestão de Product Management & Estratégia de Produtos Tech",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Esp. Thiago Fonseca",
        "description": "Descubra (Product Discovery) e construa produtos digitais escaláveis que resolvem dores reais de usuários e geram receita.",
        "modules": [
          {
            "num": 1,
            "title": "Papel do Product Manager & Product Vision",
            "hours": 8,
            "topics": [
              "Visão de Produto",
              "Estratégia vs Tática",
              "Product Mindset"
            ]
          },
          {
            "num": 2,
            "title": "Product Discovery Continuo & Pesquisa de Usuários",
            "hours": 8,
            "topics": [
              "Opportunity Solution Tree",
              "Mapeamento de Suposições",
              "Entrevistas de Validação"
            ]
          },
          {
            "num": 3,
            "title": "Priorização de Roadmap & Matrizes de Decisão",
            "hours": 8,
            "topics": [
              "Framework RICE",
              "Kano Model",
              "Eisenhower Matrix para PMs"
            ]
          },
          {
            "num": 4,
            "title": "Métricas de Produto & Product-Led Growth (PLG)",
            "hours": 8,
            "topics": [
              "Retention Cohorts",
              "Churn Analysis",
              "Estratégias de Freemium & Onboarding"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Lançamento de Produto, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "PRD (Product Requirement Document)",
              "Mapa Mental PM",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Elaboração de um Product Requirement Document (PRD) e roadmap priorizado pelo framework RICE para um novo recurso de conta PJ digital.",
        "mindmap": [
          "Product Discovery",
          "Opportunity Tree",
          "RICE Prioritization",
          "Metrics & Cohorts",
          "PLG Strategy"
        ],
        "quiz": [
          {
            "question": "No framework de priorização RICE, quais são os 4 fatores considerados na fórmula?",
            "options": [
              "Reach, Impact, Confidence, Effort (Alcance, Impacto, Confiança, Esforço)",
              "Revenue, Income, Cost, Expense",
              "Risk, Innovation, Capability, Execution",
              "Retention, Interaction, Conversion, Engagement"
            ],
            "answer": 0,
            "explanation": "A pontuação RICE é calculada como (Reach x Impact x Confidence) / Effort, ponderando o valor entregue pelo esforço necessário."
          }
        ]
      },
      {
        "id": "neg-5",
        "title": "Liderança Estratégica, Gestão de Pessoas & Cultura Organizacional",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Dra. Helena Martins",
        "description": "Desenvolva habilidades de liderança situacional, inteligência emocional, gestão de conflitos e construção de culturas corporativas fortes.",
        "modules": [
          {
            "num": 1,
            "title": "Estilos de Liderança & Inteligência Emocional",
            "hours": 8,
            "topics": [
              "Autoconhecimento",
              "Liderança Situacional",
              "Empatia e Escuta Ativa"
            ]
          },
          {
            "num": 2,
            "title": "Construção e Alinhamento de Cultura Organizacional",
            "hours": 8,
            "topics": [
              "Valores, Rituais e Comportamentos",
              "Segurança Psicológica nas Equipes",
              "Diversidade e Inclusão"
            ]
          },
          {
            "num": 3,
            "title": "Gestão de Conflitos e Comunicação Não-Violenta (CNV)",
            "hours": 8,
            "topics": [
              "Quatro Pilares da CNV",
              "Feedback Efetivo (Strap/SBI)",
              "Negociação Interna"
            ]
          },
          {
            "num": 4,
            "title": "Desenvolvimento de Talentos & Planos de Carreira (PDI)",
            "hours": 8,
            "topics": [
              "Matriz 9-Box",
              "Avaliação de Desempenho 360°",
              "Mentoria e Coaching"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Plano de Liderança, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Plano de Reestruturação de Equipe",
              "Mapa Mental Liderança",
              "Quiz de Autocorreção"
            ]
          }
        ],
        "caseStudy": "Diagnóstico e plano de intervenção cultural para criar segurança psicológica em uma empresa em ritmo acelerado de fusão.",
        "mindmap": [
          "Liderança Situacional",
          "Segurança Psicológica",
          "CNV & Feedback",
          "Matriz 9-Box",
          "Cultura Organizacional"
        ],
        "quiz": [
          {
            "question": "Segundo Amy Edmondson, o que define uma equipe com alta 'Segurança Psicológica'?",
            "options": [
              "Uma equipe onde ninguém comete erros",
              "A crença compartilhada de que a equipe é segura para assumir riscos interpessoais sem medo de punição ou humilhação",
              "Um ambiente onde não há divergência de opiniões",
              "Um departamento que trabalha exclusivamente de forma isolada"
            ],
            "answer": 1,
            "explanation": "Segurança psicológica permite que membros façam perguntas, admitam erros e proponham ideias inovadoras sem receio de retaliação."
          }
        ]
      },
      {
        "id": "neg-6",
        "title": "Gestão de Vendas B2B & Inside Sales com CRM",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Esp. Marcelo Prado",
        "description": "Construa máquinas de vendas previsíveis com metodologias Spin Selling, GPCT, controle de pipeline e CRM Salesforce/HubSpot.",
        "modules": [
          {
            "num": 1,
            "title": "Estruturação do Processo de Vendas B2B (SDRs & Closers)",
            "hours": 8,
            "topics": [
              "Prospecção Ativa vs Passiva",
              "Qualificação de Leads",
              "Cadências de Contato"
            ]
          },
          {
            "num": 2,
            "title": "Metodologias de Venda Consultiva: SPIN Selling & Challengers",
            "hours": 8,
            "topics": [
              "Perguntas de Situação, Problema, Implicação e Necessidade",
              "Contorno de Objeções"
            ]
          },
          {
            "num": 3,
            "title": "Gestão de Pipeline e Funil de Vendas em CRMs",
            "hours": 8,
            "topics": [
              "HubSpot / Salesforce Configuração",
              "Gatilhos de Passagem de Estágio",
              "Previsibilidade de Vendas (Forecast)"
            ]
          },
          {
            "num": 4,
            "title": "Negociação Avançada B2B e Contratos Corporativos",
            "hours": 8,
            "topics": [
              "BATNA e ZOPA",
              "Propostas de Valor",
              "Fechamento e Onboarding"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Playbook de Vendas, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Criação de Playbook B2B",
              "Mapa Mental Vendas",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Elaboração do playbook completo de vendas B2B e scripts SPIN Selling para um software de gestão empresarial de alto ticket.",
        "mindmap": [
          "Processo B2B",
          "SPIN Selling",
          "CRM & Forecast",
          "Negociação BATNA",
          "Sales Playbook"
        ],
        "quiz": [
          {
            "question": "Na metodologia SPIN Selling, qual tipo de pergunta tem como objetivo fazer o cliente perceber a gravidade e o impacto financeiro de não resolver um problema?",
            "options": [
              "Perguntas de Situação",
              "Perguntas de Implicação",
              "Perguntas de Necessidade de Solução",
              "Perguntas de Fechamento"
            ],
            "answer": 1,
            "explanation": "As perguntas de Implicação exploram as consequências e desdobramentos do problema, aumentando a urgência do cliente pela solução."
          }
        ]
      },
      {
        "id": "neg-7",
        "title": "Empreendedorismo Tech, Startups & Captação de Investimento",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dr. Guilherme Siqueira",
        "description": "Da ideia ao pitch de impacto: valide hipóteses com Lean Startup, formate o Pitch Deck e capte investimentos de Venture Capital.",
        "modules": [
          {
            "num": 1,
            "title": "Metodologia Lean Startup & Construção de MVP",
            "hours": 8,
            "topics": [
              "Loop Construir-Medir-Aprender",
              "Tipos de MVP",
              "Pivot vs Perseverar"
            ]
          },
          {
            "num": 2,
            "title": "Modelos de Negócios Inovadores & Business Model Canvas",
            "hours": 8,
            "topics": [
              "Modelos SaaS, Marketplace e Platform",
              "Unit Economics",
              "Monetização"
            ]
          },
          {
            "num": 3,
            "title": "Captação de Recursos (Angel, Pre-Seed, Seed e Series A)",
            "hours": 8,
            "topics": [
              "Cap Table",
              "MUTUO Conversível / SAFE",
              "Term Sheet e Cláusulas Críticas"
            ]
          },
          {
            "num": 4,
            "title": "Elaboração de Pitch Deck de Alto Impacto",
            "hours": 8,
            "topics": [
              "Estrutura de 10 Slides",
              "Storytelling para Investidores",
              "Simulação de Q&A"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Pitch para Investidores, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Apresentação de Pitch Deck",
              "Mapa Mental Startup",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Modelar o Pitch Deck e a planilha de Unit Economics de uma startup de logística para apresentação a fundos de Venture Capital.",
        "mindmap": [
          "Lean Startup MVP",
          "Canvas & Business Models",
          "Cap Table & SAFE",
          "Pitch Deck",
          "Venture Capital"
        ],
        "quiz": [
          {
            "question": "O que representa o 'Unit Economics' de uma startup?",
            "options": [
              "A cotação diária do dólar",
              "As receitas e custos diretos associados a uma única unidade do modelo de negócio (ex: por cliente ou por transação)",
              "A quantidade total de funcionários contratados",
              "O valor pago em aluguel do escritório"
            ],
            "answer": 1,
            "explanation": "Unit Economics avalia a viabilidade financeira fundamental medindo a rentabilidade direta por cliente (LTV vs CAC)."
          }
        ]
      },
      {
        "id": "neg-8",
        "title": "Gestão de Operações, Cadeia de Suprimentos & Logística 4.0",
        "level": "Intermediário",
        "rating": 4.7,
        "instructor": "Eng. Fernando Albuquerque",
        "description": "Otimize fluxos de suprimentos (Supply Chain), reduza estoques com Lean Manufacturing e integre tecnologias de IoT na logística.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos de Logística Integrada & Supply Chain Management",
            "hours": 8,
            "topics": [
              "Gestão de Compras",
              "Armazenagem e Layout de CD",
              "Modal de Transportes"
            ]
          },
          {
            "num": 2,
            "title": "Filosofia Lean Manufacturing & Sistema Toyota de Produção",
            "hours": 8,
            "topics": [
              "Eliminação de 8 Desperdícios",
              "Just-in-Time & VSM",
              "Kaizen e 5S"
            ]
          },
          {
            "num": 3,
            "title": "Gestão e Modelagem Preditiva de Estoques",
            "hours": 8,
            "topics": [
              "Curva ABC/XYZ",
              "Lote Econômico de Compra (LEC)",
              "Estoque de Segurança"
            ]
          },
          {
            "num": 4,
            "title": "Logística 4.0, WMS, TMS e Rastreamento IoT",
            "hours": 8,
            "topics": [
              "Sistemas WMS/TMS",
              "RFID e Sensores IoT",
              "Roteirização Inteligente"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Reorganização Logística, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Redesenho de Malha Logística",
              "Mapa Mental Operações",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Redesenhar o fluxo de suprimentos e roteirização de entregas de última milha (Last Mile) reduzindo os tempos de ciclo em 30%.",
        "mindmap": [
          "Supply Chain",
          "Lean Manufacturing",
          "Curva ABC & LEC",
          "WMS / TMS",
          "Last Mile IoT"
        ],
        "quiz": [
          {
            "question": "Qual a principal meta da estratégia Just-in-Time (JIT) na produção?",
            "options": [
              "Acumular o máximo de estoque possível para evitar falta de produtos",
              "Produzir e entregar mercadorias exatamente no momento em que são necessárias, reduzindo desperdícios e estoques ao mínimo",
              "Aumentar o número de fornecedores internacionais",
              "Substituir todos os funcionários por robôs"
            ],
            "answer": 1,
            "explanation": "Just-in-Time visa puxar a produção sob demanda, eliminando custos desnecessários de estocagem e movimentação."
          }
        ]
      },
      {
        "id": "neg-9",
        "title": "Design Thinking, Inovação Aberta & Facilitador de Workshops",
        "level": "Intermediário",
        "rating": 4.9,
        "instructor": "Dra. Renata Vasques",
        "description": "Domine o duplo diamante do Design Thinking para solução de problemas complexos e facilitação de sprints de inovação.",
        "modules": [
          {
            "num": 1,
            "title": "O Processo do Duplo Diamante & Empatia",
            "hours": 8,
            "topics": [
              "Mapeamento de Empatia",
              "Jornada do Usuário",
              "Definição do Problema"
            ]
          },
          {
            "num": 2,
            "title": "Ideação e Técnicas de Brainstorming Estruturado",
            "hours": 8,
            "topics": [
              "Crazy Eights",
              "SCAMPER",
              "Matriz de Impacto x Esforço"
            ]
          },
          {
            "num": 3,
            "title": "Prototipagem Rápida e Testes de Conceito",
            "hours": 8,
            "topics": [
              "Protótipos de Baixa vs Alta Fidelidade",
              "Roteiros de Teste com Usuários",
              "Iteração"
            ]
          },
          {
            "num": 4,
            "title": "Facilitação de Design Sprints e Inovação Aberta",
            "hours": 8,
            "topics": [
              "Google Design Sprint 5 Dias",
              "Parcerias com Startups",
              "Hackathons Corporativos"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Facilitar Sprint, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Simulação de Workshop de Inovação",
              "Mapa Mental DT",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Planejar e facilitar um Design Sprint de 5 dias para reformular o aplicativo de atendimento a clientes de uma seguradora.",
        "mindmap": [
          "Duplo Diamante",
          "Mapa de Empatia",
          "Brainstorm SCAMPER",
          "Protótipos Rápidos",
          "Design Sprint"
        ],
        "quiz": [
          {
            "question": "Quais são as quatro fases fundamentais da metodologia do Duplo Diamante no Design Thinking?",
            "options": [
              "Descobrir, Definir, Desenvolver e Entregar",
              "Planejar, Executar, Checar e Agir (PDCA)",
              "Criar, Testar, Vender e Lucrar",
              "Pesquisar, Escrever, Codificar e Publicar"
            ],
            "answer": 0,
            "explanation": "O Duplo Diamante alterna momentos de divergência e convergência: Descobrir o contexto, Definir o problema, Desenvolver soluções e Entregar a melhor alternativa."
          }
        ]
      },
      {
        "id": "neg-10",
        "title": "ESG (Environmental, Social, Governance) & Sustentabilidade Corporativa",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Dra. Claudia Barros",
        "description": "Implemente práticas ambientais, sociais e de governança para adequação regulatória e valorização de marca no mercado global.",
        "modules": [
          {
            "num": 1,
            "title": "Pilar Ambiental (E): Descarbonização & Economia Circular",
            "hours": 8,
            "topics": [
              "Inventário de Gases de Efeito Estufa (Scope 1, 2 e 3)",
              "Créditos de Carbono",
              "Gestão de Resíduos"
            ]
          },
          {
            "num": 2,
            "title": "Pilar Social (S): Direitos Humanos, Diversidade e Relações Comunitárias",
            "hours": 8,
            "topics": [
              "Saúde e Segurança do Trabalho",
              "D&I nas Empresas",
              "Impacto Social Local"
            ]
          },
          {
            "num": 3,
            "title": "Pilar de Governança (G): Ética, Compliance e Anticorrupção",
            "hours": 8,
            "topics": [
              "Conselho de Administração",
              "Canais de Denúncia",
              "LGPD e Proteção de Dados"
            ]
          },
          {
            "num": 4,
            "title": "Frameworks de Relatório ESG (GRI, SASB, TCFD)",
            "hours": 8,
            "topics": [
              "Matriz de Materialidade",
              "Relatórios de Sustentabilidade",
              "Rating e Índices ESG (ISE B3)"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Relatório ESG, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Matriz de Materialidade de Empresa",
              "Mapa Mental ESG",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Elaboração da Matriz de Materialidade e plano de adequação ao escopo 1, 2 e 3 de emissões para uma multinacional industrial.",
        "mindmap": [
          "Pilar Ambiental (E)",
          "Pilar Social (S)",
          "Governança (G)",
          "Frameworks GRI/SASB",
          "Matriz Materialidade"
        ],
        "quiz": [
          {
            "question": "O que abrange o Escopo 3 no inventário de emissões de Gases de Efeito Estufa (GEE) segundo o GHG Protocol?",
            "options": [
              "Apenas o combustível queimado nos veículos da própria frota da empresa",
              "Todas as emissões indiretas ao longo da cadeia de valor (fornecedores, transporte terceirizado, uso e descarte do produto)",
              "O consumo elétrico da sede administrativa",
              "Apenas vazamentos acidentais de gás na fábrica"
            ],
            "answer": 1,
            "explanation": "O Escopo 3 engloba todas as emissões da cadeia de suprimentos a jusante e a montante que não pertencem diretamente à organização."
          }
        ]
      }
    ]
  },
  {
    "id": "des",
    "name": "Design & Experiência",
    "icon": "fa-palette",
    "color": "pink",
    "courses": [
      {
        "id": "des-1",
        "title": "UX/UI Design Profissional & Prototipagem no Figma",
        "level": "Intermediário",
        "rating": 4.9,
        "instructor": "Prof. Lucas Andrade",
        "description": "Projete interfaces memoráveis baseadas em pesquisas com usuários, wireframes e protótipos interativos avançados no Figma.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos de Arquitetura de Informação e UX",
            "hours": 8,
            "topics": [
              "User Flows",
              "Wireframing de Baixa Fidelidade",
              "Heurísticas de Nielsen"
            ]
          },
          {
            "num": 2,
            "title": "UI Design, Tipografia, Cores e Grid Systems",
            "hours": 8,
            "topics": [
              "Teoria das Cores",
              "Hierarquia Tipográfica",
              "Grids Responsivos e Spacing"
            ]
          },
          {
            "num": 3,
            "title": "Dominando o Figma Avançado",
            "hours": 8,
            "topics": [
              "Auto Layout 5.0",
              "Componentes, Variantes e Component Properties",
              "Tokens de Design"
            ]
          },
          {
            "num": 4,
            "title": "Prototipagem Interativa e Micro-interações",
            "hours": 8,
            "topics": [
              "Smart Animate",
              "Interactive Components",
              "Testes de Usabilidade"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Redesign de App, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Projeto App Mobile Figma",
              "Mapa Mental UX/UI",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Criar o protótipo navegável de alta fidelidade de um aplicativo bancário inclusivo e acessível no Figma.",
        "mindmap": [
          "UX Research",
          "Wireframes",
          "Figma Auto Layout",
          "Design Tokens",
          "Usability Testing"
        ],
        "quiz": [
          {
            "question": "Qual é a principal vantagem da funcionalidade Auto Layout no Figma?",
            "options": [
              "Exportar código em Python automaticamente",
              "Criar designs dinâmicos e flexíveis que ajustam o tamanho dos elementos automaticamente conforme o conteúdo muda",
              "Corrigir erros ortográficos no texto",
              "Aplicar filtros nas fotos"
            ],
            "answer": 1,
            "explanation": "O Auto Layout permite criar layouts responsivos baseados no modelo de caixa Flexbox, facilitando o redimensionamento de botões e cards."
          }
        ]
      },
      {
        "id": "des-2",
        "title": "Design Systems em Escala & Governança de Tokens",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dra. Marina Luz",
        "description": "Construa e mantenha Design Systems consistentes unindo Figma e código (React/Storybook) com acessibilidade WCAG.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos de Design System & Atômico Design",
            "hours": 8,
            "topics": [
              "Átomos, Moléculas, Organismos e Páginas",
              "Auditoria de UI",
              "Business Case"
            ]
          },
          {
            "num": 2,
            "title": "Arquitetura de Tokens de Design (Design Tokens)",
            "hours": 8,
            "topics": [
              "Tokens Globais, Aliases e de Componente",
              "Style Dictionary",
              "Sincronização Figma-Code"
            ]
          },
          {
            "num": 3,
            "title": "Acessibilidade Digital (WCAG 2.2 AA)",
            "hours": 8,
            "topics": [
              "Contraste de Cor",
              "Navegação por Teclado e Screen Readers",
              "ARIA Labels"
            ]
          },
          {
            "num": 4,
            "title": "Documentação e Governança com Storybook e Zeroheight",
            "hours": 8,
            "topics": [
              "Storybook para React",
              "Processo de Versionamento de Componentes",
              "Contribuição"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Criar Design System, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Biblioteca de Componentes",
              "Mapa Mental DS",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Construção de uma biblioteca de componentes com 40 elementos acessíveis documentada no Storybook para uso de 50 desenvolvedores.",
        "mindmap": [
          "Atomic Design",
          "Design Tokens",
          "WCAG Acessibilidade",
          "Storybook",
          "Governança"
        ],
        "quiz": [
          {
            "question": "Qual o nível mínimo de contraste recomendado pelas diretrizes WCAG 2.2 (nível AA) para textos normais em interfaces digitais?",
            "options": [
              "2:1",
              "4.5:1",
              "10:1",
              "1:1"
            ],
            "answer": 1,
            "explanation": "A WCAG 2.2 exige uma razão de contraste mínima de 4.5:1 para texto normal para garantir a legibilidade por pessoas com baixa visão."
          }
        ]
      },
      {
        "id": "des-3",
        "title": "Motion Design & Animação 2D com After Effects",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Esp. Gabriel Diniz",
        "description": "Dê vida a ilustrações e marcas com os 12 princípios de animação, composição no After Effects e exportação Lottie.",
        "modules": [
          {
            "num": 1,
            "title": "Os 12 Princípios da Animação Clássica",
            "hours": 8,
            "topics": [
              "Squash and Stretch",
              "Easing (Speed Graph)",
              "Anticipation e Staging"
            ]
          },
          {
            "num": 2,
            "title": "Navegação e Rigging no Adobe After Effects",
            "hours": 8,
            "topics": [
              "Keyframes e Graph Editor",
              "Parenting e Null Objects",
              "Expressions Básicas em JS"
            ]
          },
          {
            "num": 3,
            "title": "Motion Graphics para UI e Lottie Animations",
            "hours": 8,
            "topics": [
              "Animação de Ícones e Telas",
              "Exportação BodyMovin / Lottie",
              "Otimização de SVG"
            ]
          },
          {
            "num": 4,
            "title": "Efeitos Visuais, Typography Motion e Compositing",
            "hours": 8,
            "topics": [
              "Kinetic Typography",
              "Track Matte",
              "Efeitos 3D e Câmeras do AE"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Reel de Motion Design, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Animação de Vinheta & UI",
              "Mapa Mental Motion",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Animação de um conjunto de 15 micro-interações vetoriais exportadas via Lottie JSON para integração nativa no app iOS/Android.",
        "mindmap": [
          "12 Princípios",
          "Speed Graph",
          "Expressions JS",
          "Lottie / BodyMovin",
          "Kinetic Typography"
        ],
        "quiz": [
          {
            "question": "Qual a grande vantagem de exportar animações para aplicativos móveis no formato Lottie (JSON) em vez de MP4 ou GIF?",
            "options": [
              "Tamanho de arquivo extremamente reduzido e renderização vetorial nítida em qualquer resolução",
              "Tocar som automaticamente",
              "Eliminar a necessidade de código no app",
              "Funciona apenas sem internet"
            ],
            "answer": 0,
            "explanation": "Animações Lottie são arquivos vetoriais leves baseados em JSON, permitindo escalabilidade infinita sem perda de qualidade e baixo uso de memória."
          }
        ]
      },
      {
        "id": "des-4",
        "title": "Branding, Identidade Visual & Gestão de Marcas",
        "level": "Intermediário",
        "rating": 4.9,
        "instructor": "Dra. Renata Silveira",
        "description": "Crie marcas estratégicas e memoráveis: do posicionamento conceitual à entrega do Brand Guidelines completo.",
        "modules": [
          {
            "num": 1,
            "title": "Estratégia de Marca & Plataforma de Brand",
            "hours": 8,
            "topics": [
              "Propósito, Erros e Promessa de Marca",
              "Arquétipos de Marca",
              "Benchmarking Competitivo"
            ]
          },
          {
            "num": 2,
            "title": "Naming e Identidade Verbal",
            "hours": 8,
            "topics": [
              "Metodologias de Naming",
              "Tom de Voz e Personalidade",
              "Registro de Marcas (INPI)"
            ]
          },
          {
            "num": 3,
            "title": "Design da Identidade Visual (Logo & Sistema Visual)",
            "hours": 8,
            "topics": [
              "Construção do Logotipo",
              "Paleta de Cores e Tipografia Primária/Secundária",
              "Grafismos e Iconografia"
            ]
          },
          {
            "num": 4,
            "title": "Desenvolvimento do Brand Guidelines (Manual de Marca)",
            "hours": 8,
            "topics": [
              "Regras de Aplicação e Proibições",
              "Mockups e Aplicações Reais",
              "Gestão de Rebranding"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Manual de Marca Completo, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Projeto de Rebranding",
              "Mapa Mental Branding",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Criação do projeto completo de rebranding e manual de marca visual para uma fintech de alcance nacional.",
        "mindmap": [
          "Estratégia de Marca",
          "Naming & Tom de Voz",
          "Logo & Grid",
          "Manual de Marca",
          "INPI Registro"
        ],
        "quiz": [
          {
            "question": "Na teoria de marca baseada na psicologia analítica de Carl Jung, qual o objetivo da utilização de Arquétipos de Marca?",
            "options": [
              "Definir a cor exata da fachada do prédio",
              "Conectar a marca a padrões comportamentais e universais no inconsciente coletivo do consumidor",
              "Calcular os impostos sobre vendas",
              "Escolher o formato das embalagens"
            ],
            "answer": 1,
            "explanation": "Arquétipos (ex: O Herói, O Criador, O Sábio) humanizam a marca e criam conexões emocionais profundas com o público."
          }
        ]
      },
      {
        "id": "des-5",
        "title": "Modelagem e Renderização 3D com Blender",
        "level": "Intermediário/Avançado",
        "rating": 4.8,
        "instructor": "Prof. Daniel Farias",
        "description": "Aprenda modelagem poligonal, escultura digital, texturização PBR, iluminação e renderização fotorrealista no Blender.",
        "modules": [
          {
            "num": 1,
            "title": "Interface do Blender & Modelagem Poligonal Básica",
            "hours": 8,
            "topics": [
              "Navegação 3D",
              "Transformações e Modificadores (Subdivision, Mirror)",
              "Topology Clean"
            ]
          },
          {
            "num": 2,
            "title": "Escultura Digital e Retopologia",
            "hours": 8,
            "topics": [
              "Brushes de Escultura",
              "Retopologia Manual e Automática",
              "UV Unwrapping"
            ]
          },
          {
            "num": 3,
            "title": "Texturização PBR e Shader Editor",
            "hours": 8,
            "topics": [
              "Materiais Principled BSDF",
              "Texturas Procedurais",
              "Baking de Maps (Normal, Roughness)"
            ]
          },
          {
            "num": 4,
            "title": "Iluminação Studio & Renderização com Cycles e Eevee",
            "hours": 8,
            "topics": [
              "Setup de Iluminação 3 Pontos",
              "HDRI Environments",
              "Compositing de Render"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Cena 3D Fotorrealista, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Render de Produto 3D",
              "Mapa Mental Blender",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Modelagem, texturização PBR e renderização fotorrealista em alta resolução para o comercial impresso de uma garrafa de perfume.",
        "mindmap": [
          "Modelagem Poligonal",
          "Escultura Digital",
          "Texturização PBR",
          "Cycles Render",
          "Compositing 3D"
        ],
        "quiz": [
          {
            "question": "No Blender, qual a diferença entre os motores de renderização Eevee e Cycles?",
            "options": [
              "Eevee é um motor em tempo real (rasterização) e Cycles é um motor fisicamente correto baseado em Ray Tracing",
              "Eevee serve apenas para modelar e Cycles apenas para esculpir",
              "Cycles funciona apenas no Windows e Eevee no Mac",
              "Não existe nenhuma diferença técnica entre eles"
            ],
            "answer": 0,
            "explanation": "Eevee privilegia velocidade de visualização em tempo real, enquanto Cycles calcula raios de luz reais para fotorrealismo extremo."
          }
        ]
      },
      {
        "id": "des-6",
        "title": "UX Research & Métricas de Usabilidade Avançadas",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dra. Vanessa Meireles",
        "description": "Planeje pesquisas qualitativas e quantitativas de UX: testes de usabilidade, Card Sorting, Tree Testing e métricas SUS/NPS.",
        "modules": [
          {
            "num": 1,
            "title": "Metodologias de Pesquisa em UX (Quali vs Quanti)",
            "hours": 8,
            "topics": [
              "Plano de Pesquisa",
              "Recrutamento de Participantes",
              "Viés do Pesquisador"
            ]
          },
          {
            "num": 2,
            "title": "Pesquisa Qualitativa: Entrevistas em Profundidade e Testes de Usabilidade",
            "hours": 8,
            "topics": [
              "Roteiro Semiestruturado",
              "Moderação de Testes",
              "Protocolo Think Aloud"
            ]
          },
          {
            "num": 3,
            "title": "Pesquisa Quantitativa: Card Sorting, Tree Testing & Benchmarking",
            "hours": 8,
            "topics": [
              "Card Sorting Aberto/Fechado",
              "Tree Testing",
              "Métricas de Sucesso de Tarefa"
            ]
          },
          {
            "num": 4,
            "title": "Métricas de Usabilidade: System Usability Scale (SUS) & CES",
            "hours": 8,
            "topics": [
              "Cálculo do Score SUS",
              "NPS Aplicado a Produto",
              "Triangulação de Dados"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Relatório de UX Research, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Relatório de Pesquisa com Insights",
              "Mapa Mental Research",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Conduzir a pesquisa de testes de usabilidade com 20 usuários e calcular o score SUS para reformular a arquitetura de um portal governamental.",
        "mindmap": [
          "Quali vs Quanti",
          "Testes de Usabilidade",
          "Card Sorting & Tree",
          "Score SUS",
          "Relatório de Insights"
        ],
        "quiz": [
          {
            "question": "O que avalia a escala padronizada System Usability Scale (SUS) composta por 10 perguntas?",
            "options": [
              "A velocidade da memória RAM do servidor",
              "A percepção subjetiva do usuário quanto à usabilidade global e facilidade de aprendizado do sistema",
              "O custo de desenvolvimento do código",
              "A quantidade de bugs no banco de dados"
            ],
            "answer": 1,
            "explanation": "O SUS fornece uma pontuação de 0 a 100 indicando o nível de usabilidade percebido pelo usuário final."
          }
        ]
      },
      {
        "id": "des-7",
        "title": "Copywriting, UX Writing & Microcopy Persuasivo",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Esp. Bruno Cavalcante",
        "description": "Escreva textos focados em conversão e guie o usuário pelas interfaces digitais com clareza, empatia e sem atritos.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos de UX Writing vs Copywriting Tradicional",
            "hours": 8,
            "topics": [
              "Gatilhos Mentais",
              "Voz e Tom da Interface",
              "Semiótica da Palavra"
            ]
          },
          {
            "num": 2,
            "title": "Microcopy: Mensagens de Erro, CTAs e Onboarding",
            "hours": 8,
            "topics": [
              "Empty States",
              "Mensagens de Erro Construtivas",
              "Botões de Chamada para Ação"
            ]
          },
          {
            "num": 3,
            "title": "Técnicas de Redação Persuasiva (AIDA, PAS e 4Ps)",
            "hours": 8,
            "topics": [
              "Atenção, Interesse, Desejo e Ação",
              "Problema, Agitação e Solução",
              "Headlines Magnéticas"
            ]
          },
          {
            "num": 4,
            "title": "Testes de Texto, Acessibilidade em Texto e Guia de Estilo de Conteúdo",
            "hours": 8,
            "topics": [
              "Highlighter Testing",
              "Linguagem Inclusiva e Simples",
              "Content Style Guide"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Guia de UX Writing, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Revisão de Microcopy de App",
              "Mapa Mental Copywriting",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Reescrever todos os microcopies de erro e botões de um fluxo de pagamento em e-commerce reduzindo o abandono de carrinho em 18%.",
        "mindmap": [
          "UX Writing vs Copy",
          "Microcopy & CTAs",
          "Framework AIDA",
          "Linguagem Inclusiva",
          "Content Style Guide"
        ],
        "quiz": [
          {
            "question": "Qual das frases a seguir representa a melhor prática de UX Writing para uma mensagem de erro de login?",
            "options": [
              "Erro 504: falha inesperada na linha 42 do sistema.",
              "Senha ou e-mail incorretos. Verifique seus dados e tente novamente ou clique em 'Esqueci a senha'.",
              "Você errou a senha!",
              "Ocorreu um problema misterioso."
            ],
            "answer": 1,
            "explanation": "Boas mensagens de erro orientam o usuário de forma clara, empática e oferecem um caminho de solução sem jargões técnicos."
          }
        ]
      },
      {
        "id": "des-8",
        "title": "Edição de Vídeo Profissional & Pós-Produção no Premiere Pro",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Prof. Thiago Ramos",
        "description": "Domine a edição narrativa no Adobe Premiere Pro: cortes dinâmicos, edição multicâmera, tratamento de cor (Lumetri) e mixagem de áudio.",
        "modules": [
          {
            "num": 1,
            "title": "Organização do Projeto e Cortes Narrativos",
            "hours": 8,
            "topics": [
              "Importação e Ingestão",
              "Rhythm e Pacing de Corte",
              "Ferramentas de Edição (Razor, Ripple Edit)"
            ]
          },
          {
            "num": 2,
            "title": "Edição Multicâmera e Efeitos de Transição",
            "hours": 8,
            "topics": [
              "Sincronização de Áudio",
              "Cortes Multicam em Tempo Real",
              "Transições Invisíveis"
            ]
          },
          {
            "num": 3,
            "title": "Tratamento de Cor Avançado com Lumetri Color",
            "hours": 8,
            "topics": [
              "Correction Primária e Secundária",
              "Escopos (Vectorscope, Waveform)",
              "LUTs e Color Grading"
            ]
          },
          {
            "num": 4,
            "title": "Mixagem de Áudio e Sonoplastia (Essential Sound)",
            "hours": 8,
            "topics": [
              "Limpeza de Ruído",
              "Duck Automático para Trilha",
              "Equalização e Compressão"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Edição Comercial, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Montagem de Vídeo Comercial",
              "Mapa Mental Edição",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Realizar a montagem, tratamento de cor Lumetri e mixagem sonora de um mini-documentário institucional de 5 minutos.",
        "mindmap": [
          "Cortes Narrativos",
          "Multicâmera",
          "Lumetri Color Grading",
          "Mixagem Áudio",
          "Exportação Master"
        ],
        "quiz": [
          {
            "question": "Para que serve a técnica de 'Audio Ducking' disponível no painel Essential Sound do Premiere?",
            "options": [
              "Reduzir automaticamente o volume da trilha sonora de fundo sempre que houver locução ou voz presente",
              "Deletar trechos silenciosos do vídeo",
              "Inverter a ordem das falas",
              "Aumentar o brilho da imagem"
            ],
            "answer": 0,
            "explanation": "Audio Ducking automatiza a atenuação da música de fundo para garantir que a voz principal seja ouvida com total clareza."
          }
        ]
      },
      {
        "id": "des-9",
        "title": "Ilustração Digital & Pintura Conceitual no Photoshop",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Esp. Camila Nogueira",
        "description": "Desenvolva técnicas de pintura digital, estudo de luz e sombra, composição visual e concept art para jogos e publicidade.",
        "modules": [
          {
            "num": 1,
            "title": "Configuração do Tablet e Brushes Customizados",
            "hours": 8,
            "topics": [
              "Sensibilidade de Pressão",
              "Criação de Brushes de Textura",
              "Esboços e Lineart"
            ]
          },
          {
            "num": 2,
            "title": "Teoria da Luz, Sombra e Volumes 3D no 2D",
            "hours": 8,
            "topics": [
              "Oclusão de Ambiente",
              "Luz Direta vs Rebatedora",
              "Hard vs Soft Edges"
            ]
          },
          {
            "num": 3,
            "title": "Teoria das Cores & Color Keys",
            "hours": 8,
            "topics": [
              "Temperatura da Cor",
              "Modos de Mesclagem (Multiply, Overlay)",
              "Harmonia de Cores"
            ]
          },
          {
            "num": 4,
            "title": "Pintura de Texturas (Pele, Metal, Tecido e Natureza)",
            "hours": 8,
            "topics": [
              "Material Rendering",
              "Detalhes Finais e Pós-processamento",
              "Composição Focal"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Concept Art de Personagem, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Ilustração Finalizada",
              "Mapa Mental Ilustração",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Criação da ilustração conceitual de um personagem de jogo de fantasia com renderização completa de materiais metálicos e tecido.",
        "mindmap": [
          "Custom Brushes",
          "Luz e Sombra",
          "Color Keys & Blending",
          "Texturização 2D",
          "Concept Art"
        ],
        "quiz": [
          {
            "question": "Na pintura digital, qual o papel da luz de oclusão de ambiente (Ambient Occlusion)?",
            "options": [
              "Adicionar um brilho intenso no centro da imagem",
              "Simular as sombras profundas e suaves que se formam nas fendas e pontos de contato onde a luz ambiente não consegue alcançar",
              "Mudar a cor de fundo para branco",
              "Deixar as linhas mais finas"
            ],
            "answer": 1,
            "explanation": "Oclusão de ambiente dá peso e ancoragem visual às formas, escurecendo áreas onde superfícies se encontram ou se dobram."
          }
        ]
      },
      {
        "id": "des-10",
        "title": "Design Editorial & Diagramação Avançada com InDesign",
        "level": "Intermediário",
        "rating": 4.7,
        "instructor": "Prof. Ricardo Paiva",
        "description": "Diagramação profissional de livros, revistas e relatórios corporativos interativos usando grid systems e estilos no Adobe InDesign.",
        "modules": [
          {
            "num": 1,
            "title": "Configuração de Páginas-Mestre e Grid Editorial",
            "hours": 8,
            "topics": [
              "Sangria e Margens",
              "Grid Modular e de Colunas",
              "Páginas-Mestre (Master Pages)"
            ]
          },
          {
            "num": 2,
            "title": "Tipografia Editorial e Estilos de Parágrafo/Caractere",
            "hours": 8,
            "topics": [
              "Entrelinha e Kerning",
              "Nested Styles e GREP Expressions",
              "Hifenização e Justificação"
            ]
          },
          {
            "num": 3,
            "title": "Gerenciamento de Imagens e Tabelas Complexas",
            "hours": 8,
            "topics": [
              "Vínculos de Imagem (Links)",
              "Modos de Cor CMYK vs RGB",
              "Estilos de Tabela"
            ]
          },
          {
            "num": 4,
            "title": "Publicações Interativas (ePub, PDF Interativo e Preflight)",
            "hours": 8,
            "topics": [
              "Sumário Automatizado",
              "Hiperlinks e Botões",
              "Fechamento de Arquivo para Gráfica (PDF/X-1a)"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Diagramar Revista, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Projeto Editorial Completo",
              "Mapa Mental InDesign",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Diagramar uma revista corporativa de 32 páginas com estilos encadeados GREP e exportar o PDF para impressão pré-impressa sem erros.",
        "mindmap": [
          "Master Pages & Grids",
          "Estilos GREP",
          "CMYK & Preflight",
          "PDF/X-1a Gráfica",
          "Revista Interativa"
        ],
        "quiz": [
          {
            "question": "Para que serve a verificação de Preflight antes de exportar um projeto do InDesign para impressão profissional?",
            "options": [
              "Enviar o projeto para as redes sociais",
              "Verificar em tempo real se existem imagens em baixa resolução (RGB), textos estourados ou fontes ausentes",
              "Traduzir o texto do livro",
              "Diminuir o tamanho das margens automaticamente"
            ],
            "answer": 1,
            "explanation": "O Preflight avisa sobre qualquer inconformidade técnica que possa estragar o resultado impresso na gráfica."
          }
        ]
      }
    ]
  },
  {
    "id": "sau",
    "name": "Saúde & Biociências",
    "icon": "fa-heartbeat",
    "color": "rose",
    "courses": [
      {
        "id": "sau-1",
        "title": "Nutrição Clínica Aplicada & Doenças Crônicas",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dra. Patricia Medeiros",
        "description": "Prescrição dietoterápica baseada em evidências para o manejo de diabetes, hipertensão, obesidade e distúrbios metabólicos.",
        "modules": [
          {
            "num": 1,
            "title": "Avaliação Nutricional Avançada & Anamnese",
            "hours": 8,
            "topics": [
              "Antropometria e Bioimpedância",
              "Exames Laboratoriais Metabólicos",
              "Recordatório de 24h e Frequência Alimentar"
            ]
          },
          {
            "num": 2,
            "title": "Dietoterapia nas Síndromes Metabólicas & Diabetes",
            "hours": 8,
            "topics": [
              "Índice e Carga Glicêmica",
              "Contagem de Carboidratos",
              "Sensibilidade à Insulina"
            ]
          },
          {
            "num": 3,
            "title": "Nutrição em Cardiologia & Nefrologia",
            "hours": 8,
            "topics": [
              "Dieta DASH",
              "Manejo de Sódio, Potássio e Fósforo",
              "Doença Renal Crônica"
            ]
          },
          {
            "num": 4,
            "title": "Nutracêuticos e Suplementação Clínica Baseada em Evidências",
            "hours": 8,
            "topics": [
              "Fitoterápicos Regulamentados",
              "Suplementação de Micronutrientes",
              "Modulação de Microbiota"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Conduta Dietoterápica, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Caso Clínico Síndrome Metabólica",
              "Mapa Mental Nutrição",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Elaboração da conduta nutricional e plano alimentar personalizado para um paciente diabético tipo 2 com hipertensão e dislipidemia.",
        "mindmap": [
          "Avaliação Antropométrica",
          "Contagem Carboidratos",
          "Dieta DASH",
          "Suplementação",
          "Caso Clínico"
        ],
        "quiz": [
          {
            "question": "Qual é a principal recomendação dietética da Dieta DASH desenvolvida para o controle da hipertensão arterial?",
            "options": [
              "Consumo ilimitado de carnes gordurosas",
              "Rica em frutas, hortaliças, laticínios desnatados e redução drástica do consumo de sódio",
              "Eliminação total de fibras alimentares",
              "Jejum intermitente de 48 horas"
            ],
            "answer": 1,
            "explanation": "A dieta DASH foca no aumento de potássio, magnésio, cálcio e fibras com restrição do sódio para redução da pressão arterial."
          }
        ]
      },
      {
        "id": "sau-2",
        "title": "Gestão Hospitalar, Qualidade & Segurança do Paciente",
        "level": "Avançado",
        "rating": 4.8,
        "instructor": "Dr. Fernando Magalhães",
        "description": "Lidere instituições de saúde com foco em acreditação hospitalar (ONA/JCI), gestão de riscos e otimização leitos.",
        "modules": [
          {
            "num": 1,
            "title": "Arquitetura e Governança do Sistema Hospitalar",
            "hours": 8,
            "topics": [
              "Gestão da Assistência",
              "Faturamento e Tabelas SUS/TISS",
              "Administração de Pronto Atendimento"
            ]
          },
          {
            "num": 2,
            "title": "Acreditação Hospitalar (Metodologias ONA, JCI e HIMSS)",
            "hours": 8,
            "topics": [
              "Padrões de Qualidade",
              "Auditoria Clínica",
              "Gestão de Processos Assistenciais"
            ]
          },
          {
            "num": 3,
            "title": "Protocolos de Segurança do Paciente (OMS)",
            "hours": 8,
            "topics": [
              "Identificação Correta do Paciente",
              "Cirurgia Segura",
              "Prevenção de Quedas e Lesões por Pressão"
            ]
          },
          {
            "num": 4,
            "title": "Gestão Financeira Hospitalar e Giro de Leitos",
            "hours": 8,
            "topics": [
              "Indicadores de Ocupação e Permanência",
              "Custos Hospitalares (RKW / ABC)",
              "Gestão de Estoque Farmacêutico"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Auditoria de Segurança, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Análise de Evento Adverso",
              "Mapa Mental Hospitalar",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Plano de ação para adequação dos protocolos de segurança do paciente visando a obtenção da Acreditação ONA Nível 3.",
        "mindmap": [
          "Governança SUS/TISS",
          "Acreditação ONA/JCI",
          "Segurança do Paciente",
          "Giro de Leitos",
          "Gestão de Custos"
        ],
        "quiz": [
          {
            "question": "Qual o objetivo principal do Checklist de Cirurgia Segura recomendado pela Organização Mundial da Saúde (OMS)?",
            "options": [
              "Reduzir a conta de luz da sala de cirurgia",
              "Garantir a verificação sistemática da identidade do paciente, local cirúrgico e contagem de compressas antes, durante e após o ato cirúrgico",
              "Acelerar o tempo de anestesia",
              "Substituir o médico cirurgião por um aplicativo"
            ],
            "answer": 1,
            "explanation": "O checklist da OMS reduz significativamente a morbimortalidade cirúrgica ao prevenir erros evitáveis na sala de operação."
          }
        ]
      },
      {
        "id": "sau-3",
        "title": "Psicologia Cognitivo-Comportamental (TCC) na Prática",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dra. Teresa Alvarenga",
        "description": "Aplique técnicas estruturadas da TCC no tratamento de transtornos de ansiedade, depressão e reestruturação cognitiva.",
        "modules": [
          {
            "num": 1,
            "title": "Modelo Cognitivo & Conceptualização de Caso",
            "hours": 8,
            "topics": [
              "Pensamentos Automáticos",
              "Crenças Intermediárias e Centralizadas",
              "Registro de Pensamentos Disfuncionais (RPD)"
            ]
          },
          {
            "num": 2,
            "title": "Técnicas de Reestruturação Cognitiva",
            "hours": 8,
            "topics": [
              "Questionamento Socrático",
              "Descatastrofização",
              "Exame de Evidências"
            ]
          },
          {
            "num": 3,
            "title": "Intervenções Comportamentais & Desensibilização",
            "hours": 8,
            "topics": [
              "Ativação Comportamental para Depressão",
              "Exposição Gradual para Fobias",
              "Treino de Assertividade"
            ]
          },
          {
            "num": 4,
            "title": "TCC nos Transtornos de Ansiedade e Burnout",
            "hours": 8,
            "topics": [
              "Protocolos para TAG e Síndrome do Pânico",
              "Manejo de Estresse Ocupacional",
              "Prevenção de Recaídas"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Conceptualização TCC, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Estudo de Caso TCC",
              "Mapa Mental Psicologia",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Elaboração da conceptualização cognitiva e plano de tratamento de 12 sessões de TCC para um paciente com Transtorno de Ansiedade Generalizada.",
        "mindmap": [
          "Modelo Cognitivo",
          "Reestruturação Socrática",
          "Ativação Comportamental",
          "Protocolo TAG",
          "Caso Clínico TCC"
        ],
        "quiz": [
          {
            "question": "Na Terapia Cognitivo-Comportamental, o que são chamados de 'Pensamentos Automáticos'?",
            "options": [
              "Pensamentos conscientes e lógicos elaborados após horas de reflexão",
              "Cognições rápidas e involuntárias que surgem diante de situações específicas e influenciam diretamente as emoções e comportamentos",
              "Sonhos durante o sono REM",
              "Alucinações auditivas severas"
            ],
            "answer": 1,
            "explanation": "Pensamentos automáticos são interpretações espontâneas da realidade que brotam na mente sem esforço deliberado."
          }
        ]
      },
      {
        "id": "sau-4",
        "title": "Farmacologia Clínica & Prescrição Racional de Medicamentos",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dr. Sergio Nogueira",
        "description": "Entenda a farmacocinética, farmacodinâmica, interações medicamentosas graves e manejo de antimicrobianos.",
        "modules": [
          {
            "num": 1,
            "title": "Princípios de Farmacocinética e Farmacodinâmica",
            "hours": 8,
            "topics": [
              "Absorção, Distribuição, Metabolismo (CYP450) e Eliminação",
              "Agonistas vs Antagonistas",
              "Janela Terapêutica"
            ]
          },
          {
            "num": 2,
            "title": "Farmacologia do Sistema Nervoso Central e Autônomo",
            "hours": 8,
            "topics": [
              "Ansiolíticos e Antidepressivos",
              "Anti-hipertensivos e Antiarrítmicos",
              "Modulação Adrenérgica e Colinérgica"
            ]
          },
          {
            "num": 3,
            "title": "Uso Racional de Antimicrobianos & Stewardship",
            "hours": 8,
            "topics": [
              "Mecanismos de Ação de Antibióticos",
              "Resistência Bacteriana",
              "Programas de Stewardship"
            ]
          },
          {
            "num": 4,
            "title": "Interações Medicamentosas & Reações Adversas (RAM)",
            "hours": 8,
            "topics": [
              "Sinergismo e Antagonismo",
              "Notificação de Farmacovigilância",
              "Ajuste de Dose na Insuficiência Renal/Hepática"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Análise de Prescrição, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Intervenção Farmacêutica Clínica",
              "Mapa Mental Farmaco",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Identificar e propor o manejo de 3 interações medicamentosas graves em uma prescrição de paciente idoso polimedicado em UTI.",
        "mindmap": [
          "Farmacocinética",
          "Sistemas SNC/SNA",
          "Stewardship Antibióticos",
          "Interações RAM",
          "Prescrição Racional"
        ],
        "quiz": [
          {
            "question": "Qual a importância de monitorar fármacos com uma 'Janela Terapêutica Estreita'?",
            "options": [
              "São medicamentos extremamente baratos",
              "A diferença entre a dose eficaz e a dose tóxica/letal é muito pequena, exigindo controle rigoroso da concentração plasmática",
              "Podem ser tomados em qualquer quantidade sem efeitos colaterais",
              "Funcionam apenas quando dissolvidos em suco"
            ],
            "answer": 1,
            "explanation": "Medicamentos de janela terapêutica estreita (ex: Digoxina, Warfarina) podem causar toxicidade grave com pequenas variações de dose."
          }
        ]
      },
      {
        "id": "sau-5",
        "title": "Fisioterapia Esportiva & Reabilitação Musculoesquelética",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Esp. Leonardo Paiva",
        "description": "Prevenção e tratamento de lesões em atletas: avaliação biomecânica, terapia manual e protocolos de retorno ao esporte (Return to Play).",
        "modules": [
          {
            "num": 1,
            "title": "Biomecânica da Corrida e do Movimento Esportivo",
            "hours": 8,
            "topics": [
              "Cadeia Cinética Aberta e Fechada",
              "Análise de Marcha e Corrida",
              "Avaliação de Controle Motor"
            ]
          },
          {
            "num": 2,
            "title": "Lesões Musculares, Tendinopatias e Ligamentares",
            "hours": 8,
            "topics": [
              "Lesão de LCA de Joelho",
              "Tendinopatia de Aquiles e Patelar",
              "Mecanismos de Reparo Tecidual"
            ]
          },
          {
            "num": 3,
            "title": "Terapia Manual & Eletroterapia Avançada",
            "hours": 8,
            "topics": [
              "Liberação Miofascial",
              "Agulhamento a Seco (Dry Needling)",
              "Corrente Russa e TENS"
            ]
          },
          {
            "num": 4,
            "title": "Critérios para Retorno ao Esporte (Return to Play - RTP)",
            "hours": 8,
            "topics": [
              "Testes Funcionais Hop Tests",
              "Treinamento Pliométrico",
              "Gestão de Carga de Treino"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Protocolo de Reabilitação, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Reabilitação Pós-Op LCA",
              "Mapa Mental Fisioterapia",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Elaborar o programa de reabilitação acelerada de 6 meses e testes de Return to Play para um jogador de futebol com reconstrução do LCA.",
        "mindmap": [
          "Biomecânica Esportiva",
          "Lesões LCA & Tendões",
          "Terapia Manual",
          "Pliometria",
          "Return to Play"
        ],
        "quiz": [
          {
            "question": "Qual é a função dos 'Hop Tests' no protocolo de avaliação para liberação do atleta ao esporte (Return to Play)?",
            "options": [
              "Medir a altura do atleta em repouso",
              "Avaliar a simetria de força, potência e estabilidade dinâmica entre o membro afetado e o membro saudável",
              "Verificar a frequência cardíaca de repouso",
              "Avaliar a flexibilidade dos braços"
            ],
            "answer": 1,
            "explanation": "Os testes de salto unipodal (Hop Tests) exigem que o membro operado alcance pelo menos 90% do desempenho do membro não afetado para segurança."
          }
        ]
      },
      {
        "id": "sau-6",
        "title": "Biologia Molecular, Genética & Biotecnologia",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dra. Elisa Vasconcelos",
        "description": "Compreenda a replicação do DNA, edição gênica com CRISPR-Cas9, sequenciamento de nova geração (NGS) e diagnósticos moleculares.",
        "modules": [
          {
            "num": 1,
            "title": "Dogma Central da Biologia Molecular",
            "hours": 8,
            "topics": [
              "Replicação do DNA",
              "Transcrição do RNA e Splicing",
              "Tradução de Proteínas"
            ]
          },
          {
            "num": 2,
            "title": "Técnicas de PCR em Tempo Real (qPCR) e Eletroforese",
            "hours": 8,
            "topics": [
              "Desenho de Primers",
              "Curvas de Quantificação",
              "Diagnósticos Moleculares"
            ]
          },
          {
            "num": 3,
            "title": "Edição Genômica com CRISPR-Cas9",
            "hours": 8,
            "topics": [
              "Mecanismo gRNA + Cas9",
              "NHEJ vs HDR",
              "Aplicações Terapêuticas e Ética"
            ]
          },
          {
            "num": 4,
            "title": "Sequenciamento de Nova Geração (NGS) e Genômica",
            "hours": 8,
            "topics": [
              "Plataformas Illumina",
              "Sequenciamento de Exoma",
              "Análise de Variantes Genéticas"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Diagnóstico Genético, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Análise de Painel NGS",
              "Mapa Mental Genética",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Desenho do experimento de qPCR e análise de primers para identificação de mutação oncogênica em biópsia líquida.",
        "mindmap": [
          "Dogma Central DNA/RNA",
          "qPCR Diagnóstico",
          "CRISPR-Cas9",
          "NGS Sequenciamento",
          "Genômica Médica"
        ],
        "quiz": [
          {
            "question": "Como a enzima Cas9 é guiada para cortar a sequência exata de DNA desejada no sistema CRISPR-Cas9?",
            "options": [
              "Por um marcador magnético inserido na célula",
              "Através de uma molécula de RNA guia (gRNA) complementar à sequência alvo do DNA",
              "Por meio de impulsos elétricos externos",
              "Aleatoriamente em qualquer trecho de DNA"
            ],
            "answer": 1,
            "explanation": "O RNA guia (gRNA) pareia suas bases de forma específica com o DNA alvo, direcionando a nuclease Cas9 para a clivagem exata."
          }
        ]
      },
      {
        "id": "sau-7",
        "title": "Saúde Pública, Epidemiologia & Vigilância em Saúde",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Dr. Marcelo Castro",
        "description": "Monitore epidemias, analise indicadores de saúde populacional e estruture ações de vigilância epidemiológica e sanitária.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos de Epidemiologia e Métricas de Morbimortalidade",
            "hours": 8,
            "topics": [
              "Prevalência vs Incidência",
              "Taxas de Mortalidade e Letalidade",
              "Razão de Chance (Odds Ratio) e Risco Relativo"
            ]
          },
          {
            "num": 2,
            "title": "Estudos Epidemiológicos Observacionais e Experimentais",
            "hours": 8,
            "topics": [
              "Estudos Caso-Controle",
              "Estudos de Coorte",
              "Ensaios Clínicos Randomizados"
            ]
          },
          {
            "num": 3,
            "title": "Sistemas de Vigilância Epidemiológica e Notificação Compulsória",
            "hours": 8,
            "topics": [
              "SINAN, SIM e SINASC",
              "Investigação de Surtos e Epidemias",
              "Rastreamento de Contatos"
            ]
          },
          {
            "num": 4,
            "title": "Políticas Públicas de Saúde & Organização do SUS",
            "hours": 8,
            "topics": [
              "Princípios do SUS (Universalidade, Equidade, Integralidade)",
              "Atenção Primária à Saúde",
              "Financiamento da Saúde"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Investigação Epidemiológica, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Relatório de Surto Epidêmico",
              "Mapa Mental Epidemiologia",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Investigação epidemiológica de um surto de arbovirose em município de médio porte com cálculo do Índice de Breteau e plano de contenção.",
        "mindmap": [
          "Incidência vs Prevalência",
          "Estudos de Coorte",
          "Vigilância SINAN",
          "Princípios SUS",
          "Investigação de Surto"
        ],
        "quiz": [
          {
            "question": "Qual a diferença epidemiológica fundamental entre os conceitos de 'Incidência' e 'Prevalência'?",
            "options": [
              "Incidência mede casos novos em um período; Prevalência mede o total de casos (novos e antigos) existentes em um momento",
              "Incidência mede apenas óbitos e Prevalência mede curados",
              "São sinônimos perfeitos na epidemiologia",
              "Prevalência calcula apenas doenças genéticas"
            ],
            "answer": 0,
            "explanation": "A incidência foca na velocidade de surgimento de novos eventos (risco), enquanto a prevalência reflete a carga total da doença na população."
          }
        ]
      },
      {
        "id": "sau-8",
        "title": "Bioinformática & Análise de Dados Genômicos com Python/R",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dra. Juliana Mendes",
        "description": "Processe dados omicos, alinhamentos de sequências (BLAST) e construa árvores filogenéticas usando Python (Biopython) e R.",
        "modules": [
          {
            "num": 1,
            "title": "Bancos de Dados Biológicos (NCBI, UniProt, PDB)",
            "hours": 8,
            "topics": [
              "Formatos FASTA, GenBank e PDB",
              "Consultas Automatizadas via APIs",
              "Biopython Fundamentals"
            ]
          },
          {
            "num": 2,
            "title": "Alinhamento de Sequências & Busca de Homologia",
            "hours": 8,
            "topics": [
              "Alinhamento Par a Par (Needleman-Wunsch / Smith-Waterman)",
              "Algoritmo BLAST",
              "Alinhamento Múltiplo (Clustal Omega)"
            ]
          },
          {
            "num": 3,
            "title": "Filogenia Molecular e Modelagem de Proteínas",
            "hours": 8,
            "topics": [
              "Construção de Árvores Filogenéticas",
              "Métodos de Neighbor-Joining e Máxima Verossimilhança",
              "Visualização com PyMOL"
            ]
          },
          {
            "num": 4,
            "title": "Análise de Expressão Gênica (RNA-Seq) em R",
            "hours": 8,
            "topics": [
              "DESeq2",
              "Normalização de Reads (TPM/FPKM)",
              "Enriquecimento de Vias (GSEA)"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Pipeline Bioinformática, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Pipeline RNA-Seq Completo",
              "Mapa Mental Bioinfo",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Construção de um script Python para download automático, alinhamento BLAST e identificação de mutações em genes de resistência bacteriana.",
        "mindmap": [
          "NCBI FASTA",
          "Algoritmo BLAST",
          "Árvores Filogenéticas",
          "RNA-Seq DESeq2",
          "Biopython"
        ],
        "quiz": [
          {
            "question": "Para que serve a ferramenta BLAST (Basic Local Alignment Search Tool) na bioinformática?",
            "options": [
              "Para calcular o peso de amostras em balanças",
              "Para comparar uma sequência de nucleotídeos ou aminoácidos com bancos de dados genéticos e encontrar regiões de similaridade",
              "Para imprimir relatórios médicos em papel",
              "Para simular o batimento cardíaco"
            ],
            "answer": 1,
            "explanation": "O BLAST encontra alinhamentos locais entre sequências de teste e bancos de dados de referência com alta velocidade heurística."
          }
        ]
      },
      {
        "id": "sau-9",
        "title": "Enfermagem em Terapia Intensiva (UTI) & Emergência",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Esp. Carla Magalhães",
        "description": "Assistência de enfermagem ao paciente crítico: ventilação mecânica, monitorização hemodinâmica e parada cardiorrespiratória (PCR/ACLS).",
        "modules": [
          {
            "num": 1,
            "title": "Monitorização Hemodinâmica e Gasometria Arterial",
            "hours": 8,
            "topics": [
              "Pressão Arterial Invasiva (PAI)",
              "Pressão Venosa Central (PVC)",
              "Interpretação de Gasometria Acidobásica"
            ]
          },
          {
            "num": 2,
            "title": "Assistência ao Paciente em Ventilação Mecânica",
            "hours": 8,
            "topics": [
              "Modos Ventilatórios (VCV, PCV, PSV)",
              "Parâmetros PEEP e FiO2",
              "Cuidados na Aspiração Endotraqueal"
            ]
          },
          {
            "num": 3,
            "title": "Atendimento a Parada Cardiorrespiratória (Protocolo ACLS)",
            "hours": 8,
            "topics": [
              "Ritmos Chocáveis vs Não-Chocáveis",
              "Manejo de Vias Aéreas Avançadas",
              "Drogas Vasoativas em Infusão Contínua"
            ]
          },
          {
            "num": 4,
            "title": "Prevenção de Infecções Relacionadas à Assistência (IRAS)",
            "hours": 8,
            "topics": [
              "Bundle de Prevenção de PAV",
              "Bundle de Cateter Venoso Central",
              "Higienização das Mãos"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Simulação de UTI, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Manejo do Paciente Séptico em UTI",
              "Mapa Mental Enfermagem",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Elaboração do plano de cuidados de enfermagem e ajuste dos bundles de prevenção para um paciente em Choque Séptico sob ventilação mecânica.",
        "mindmap": [
          "Gasometria Arterial",
          "Ventilação Mecânica",
          "Protocolo ACLS PCR",
          "Drogas Vasoativas",
          "Bundles IRAS UTI"
        ],
        "quiz": [
          {
            "question": "Em uma situação de Parada Cardiorrespiratória (PCR), quais são os dois ritmos eletrocardiográficos considerados CHOCÁVEIS pelo protocolo ACLS?",
            "options": [
              "Assistolia e Atividade Elétrica Sem Pulso (AESP)",
              "Fibrilação Ventricular (FV) e Taquicardia Ventricular Sem Pulso (TVSP)",
              "Brotamento Atrial e Ritmo Sinusal",
              "Bradicardia Sinusal e Extrassístole"
            ],
            "answer": 1,
            "explanation": "A desfecho imediato por desfibrilação elétrica é indicado apenas para Fibrilação Ventricular (FV) e Taquicardia Ventricular Sem Pulso (TVSP)."
          }
        ]
      },
      {
        "id": "sau-10",
        "title": "Imunologia Prática & Vacinologia",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Dr. Roberto Figueiredo",
        "description": "Respostas imunológicas inatas e adaptativas, imunopatologias, alergias e tecnologias de desenvolvimento de vacinas (mRNA/Vetor).",
        "modules": [
          {
            "num": 1,
            "title": "Imunidade Inata vs Adaptativa & Órgãos Linfoides",
            "hours": 8,
            "topics": [
              "Fagocitose e Sistema Complemento",
              "Linfócitos T (CD4/CD8) e Linfócitos B",
              "Apresentação de Antígenos (MHC I e II)"
            ]
          },
          {
            "num": 2,
            "title": "Imunoglobulinas e Resposta Humoral",
            "hours": 8,
            "topics": [
              "Classes de Anticorpos (IgG, IgM, IgA, IgE, IgD)",
              "Sorologia e Ensaio ELISA",
              "Memória Imunológica"
            ]
          },
          {
            "num": 3,
            "title": "Imunopatologias: Alergias, Autoimunidade e Imunodeficiências",
            "hours": 8,
            "topics": [
              "Hipersensibilidades Tipo I a IV",
              "Lúpus Erythematosus e Artrite Reumatoide",
              "HIV e Imunodeficiências"
            ]
          },
          {
            "num": 4,
            "title": "Plataformas de Vacinas (Atenuadas, Inativadas, mRNA e Vetor Viral)",
            "hours": 8,
            "topics": [
              "Adjuvantes Imunológicos",
              "Imunidade de Rebanho",
              "Cadeia de Frio e Calendário Nacional de Imunizações"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Laudo Sorológico, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Interpretação de Painel Imunológico",
              "Mapa Mental Imunologia",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Interpretação de exames sorológicos de curva de anticorpos (IgM/IgG) para diagnóstico diferencial de infecções agudas versus pregressas.",
        "mindmap": [
          "Inata vs Adaptativa",
          "MHC & Anticorpos",
          "Hipersensibilidades",
          "Vacinas de mRNA",
          "Cadeia de Frio"
        ],
        "quiz": [
          {
            "question": "Qual a primeira classe de imunoglobulina (anticorpo) produzida pelo organismo durante a fase aguda de uma primeira infecção?",
            "options": [
              "IgG",
              "IgM",
              "IgE",
              "IgA"
            ],
            "answer": 1,
            "explanation": "A IgM é secretada na fase inicial como pentâmero de alta avidez, indicando infecção recente, sendo posteriormente substituída pela IgG."
          }
        ]
      }
    ]
  },
  {
    "id": "eng",
    "name": "Engenharia & Exatas",
    "icon": "fa-cogs",
    "color": "amber",
    "courses": [
      {
        "id": "eng-1",
        "title": "Robótica Prática, Sistemas Embarcados & IoT com ESP32",
        "level": "Intermediário",
        "rating": 4.9,
        "instructor": "Prof. André Valente",
        "description": "Projete robôs e dispositivos conectados à internet (IoT) com microcontroladores ESP32, protocolo MQTT e sensores industriais.",
        "modules": [
          {
            "num": 1,
            "title": "Arquitetura do ESP32 & Programação C/C++ (FreeRTOS)",
            "hours": 8,
            "topics": [
              "Pinos GPIO, ADC e PWM",
              "Multithreading no ESP32 com FreeRTOS",
              "Interrupções de Hardware"
            ]
          },
          {
            "num": 2,
            "title": "Sensores Industriais e Protocolos de Comunicação",
            "hours": 8,
            "topics": [
              "I2C, SPI e UART",
              "Leitura de Temperatura, Umidade e Acelerômetros",
              "Display OLED e LCD"
            ]
          },
          {
            "num": 3,
            "title": "Conectividade IoT com Protocolo MQTT e Wi-Fi",
            "hours": 8,
            "topics": [
              "Broker Mosquitto MQTT",
              "Publish e Subscribe",
              "Segurança TLS em IoT"
            ]
          },
          {
            "num": 4,
            "title": "Acionamento de Motores e Controle Robótico",
            "hours": 8,
            "topics": [
              "Pontes H (L298N)",
              "Servomotores e Motores de Passo",
              "PID em Hardware"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Dispositivo IoT Completo, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Estação Meteorológica IoT",
              "Mapa Mental Robótica",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Desenvolver o firmware e protótipo funcional de uma estação de monitoramento ambiental remota via Wi-Fi/MQTT com ESP32.",
        "mindmap": [
          "ESP32 & FreeRTOS",
          "Protocolos I2C/SPI",
          "MQTT Broker",
          "Controle de Motores",
          "Projeto IoT"
        ],
        "quiz": [
          {
            "question": "Por que o protocolo MQTT é amplamente preferido para comunicação em dispositivos de Internet das Coisas (IoT)?",
            "options": [
              "Porque transmite apenas arquivos de vídeo em 4K",
              "É um protocolo publish/subscribe extremamente leve, com baixíssimo consumo de banda e energia ideal para redes instáveis",
              "Substitui completamente o uso de energia elétrica",
              "Funciona apenas em computadores de grande porte"
            ],
            "answer": 1,
            "explanation": "MQTT foi projetado minimizando cabeçalhos de mensagem, tornando-o perfeito para microcontroladores limitados."
          }
        ]
      },
      {
        "id": "eng-2",
        "title": "Energias Renováveis & Projetos Fotovoltaicos Solar",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Eng. Gabriel Rezende",
        "description": "Dimensionamento de sistemas solares fotovoltaicos conectados à rede (On-Grid) e isolados (Off-Grid) conforme a ANEEL.",
        "modules": [
          {
            "num": 1,
            "title": "Recurso Solar & Geometria da Radiação",
            "hours": 8,
            "topics": [
              "Irradiação Solar (HSP)",
              "Orientação e Inclinação dos Painéis",
              "Efeito Fotovoltaico e Células"
            ]
          },
          {
            "num": 2,
            "title": "Componentes de Sistemas Fotovoltaicos On-Grid e Off-Grid",
            "hours": 8,
            "topics": [
              "Módulos Monocristalinos/Policristalinos",
              "Inversores String e Microinversores",
              "Baterias e Controladores MPPT"
            ]
          },
          {
            "num": 3,
            "title": "Dimensionamento elétrico e Software PVSyst",
            "hours": 8,
            "topics": [
              "Cálculo de Potência de Pico (kWp)",
              "Perdas por Sombreamento e Temperatura",
              "Simulação no PVSyst"
            ]
          },
          {
            "num": 4,
            "title": "Normas de Conexão à Rede (ANEEL 1.059) e Proteções Elétricas",
            "hours": 8,
            "topics": [
              "Disjuntores, DPS e Fusíveis",
              "Solicitação de Acesso na Concessionária",
              "Payback e Viabilidade Financeira"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Projeto Solar Completo, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Projeto Memorial Descritivo Solar",
              "Mapa Mental Energia Solar",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Dimensionar o sistema fotovoltaico On-Grid de 75 kWp para uma usina solar comercial com cálculo de Payback e simulação PVSyst.",
        "mindmap": [
          "Irradiação HSP",
          "Inversores MPPT",
          "PVSyst Simulação",
          "Normas ANEEL",
          "Payback Financeiro"
        ],
        "quiz": [
          {
            "question": "Qual é o papel da tecnologia MPPT (Maximum Power Point Tracking) nos inversores solares?",
            "options": [
              "Limpar a poeira dos painéis",
              "Rastrear e ajustar continuamente o ponto de máxima potência do arranjo fotovoltaico para otimizar a geração de energia",
              "Ligar as luzes da casa à noite",
              "Desligar o sistema quando chove"
            ],
            "answer": 1,
            "explanation": "O algoritmo MPPT ajusta a impedância elétrica para extrair a máxima potência disponível dos painéis sob qualquer condição de radiação."
          }
        ]
      },
      {
        "id": "eng-3",
        "title": "Engenharia de Estruturas & Análise por Elementos Finitos (FEA)",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dr. Fernando Siqueira",
        "description": "Simulação computacional de tensões, deformações e análise vibracional em componentes mecânicos e estruturas com Ansys/AbAqus.",
        "modules": [
          {
            "num": 1,
            "title": "Mecânica dos Sólidos e Teoria da Elasticidade",
            "hours": 8,
            "topics": [
              "Tensão e Deformação",
              "Criterios de Escoamento (Von Mises e Tresca)",
              "Elasticidade Linear"
            ]
          },
          {
            "num": 2,
            "title": "Fundamentos do Método dos Elementos Finitos (MEF)",
            "hours": 8,
            "topics": [
              "Discretização e Malha",
              "Funções de Forma e Matriz de Rigidez",
              "Condições de Contorno"
            ]
          },
          {
            "num": 3,
            "title": "Geração e Refinamento de Malhas Computacionais",
            "hours": 8,
            "topics": [
              "Elementos Tetraédricos vs Hexaédricos",
              "Independência de Malha",
              "Concentradores de Tensão"
            ]
          },
          {
            "num": 4,
            "title": "Análise Estática Não-Linear e Análise Dinâmica/Modal",
            "hours": 8,
            "topics": [
              "Contatos entre Superfícies",
              "Frequências Naturais e Modos de Vibração",
              "Fadiga dos Materiais"
            ]
          },
          {
            "num": 5,
            "title": "Módulo Prático: Simulação FEA, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Simulação Estrutural no Ansys",
              "Mapa Mental FEA",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Realizar a análise estática e de fadiga por elementos finitos de um chassi automotivo submetido a torção e cargas dinâmicas.",
        "mindmap": [
          "Mecânica dos Sólidos",
          "Tensão Von Mises",
          "Geração de Malhas",
          "Análise Modal",
          "Simulação Ansys"
        ],
        "quiz": [
          {
            "question": "Qual critério de falha por escoamento é o mais indicado para prever a plastificação em materiais dúcteis (como o aço)?",
            "options": [
              "Tensão de Von Mises",
              "Rankine (Tensão Principal Máxima)",
              "Critério de Mohr-Coulomb",
              "Teoria de Hooke Simples"
            ],
            "answer": 0,
            "explanation": "O critério de Von Mises (energia de distorção) ajusta-se com precisão extrema ao comportamento de metais dúcteis."
          }
        ]
      },
      {
        "id": "eng-4",
        "title": "BIM (Building Information Modeling) & Revit para Engenharia",
        "level": "Intermediário",
        "rating": 4.9,
        "instructor": "Eng. Patricia Fontes",
        "description": "Modelagem tridimensional parametrizada de edifícios, compatibilização de projetos e extração automatizada de quantitativos no Autodesk Revit.",
        "modules": [
          {
            "num": 1,
            "title": "Conceito BIM (Building Information Modeling) & Níveis de LOD",
            "hours": 8,
            "topics": [
              "LOD 100 ao LOD 500",
              "Plano de Execução BIM (BEP)",
              "Dimensões 3D, 4D, 5D, 6D e 7D"
            ]
          },
          {
            "num": 2,
            "title": "Modelagem Arquitetônica Paramétrica no Revit",
            "hours": 8,
            "topics": [
              "Paredes, Esquadrias, Lajes e Telhados",
              "Famílias Paramétricas",
              "Criação de Níveis e Eixos"
            ]
          },
          {
            "num": 3,
            "title": "Compatibilização de Projetos e Detecção de Interferências (Clash Detection)",
            "hours": 8,
            "topics": [
              "Navisworks Manage",
              "Relatórios de Interferência",
              "Coordenação com Instalações MEP"
            ]
          },
          {
            "num": 4,
            "title": "Extração de Quantitativos & Orçamentação BIM (5D)",
            "hours": 8,
            "topics": [
              "Tabelas de Quantitativos Dinâmicas",
              "Integração com Tabelas SINAPI/ORSE",
              "Pranchas de Detalhamento"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Projeto BIM Completo, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Modelagem e Compatibilização",
              "Mapa Mental BIM",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Desenvolver o modelo BIM LOD 350 de um edifício residencial e realizar a compatibilização no Navisworks eliminando 100% dos clashes.",
        "mindmap": [
          "Dimensões BIM",
          "Revit Paramétrico",
          "Clash Detection",
          "Quantitativos 5D",
          "Navisworks"
        ],
        "quiz": [
          {
            "question": "O que significa a dimensão '5D' dentro da metodologia BIM?",
            "options": [
              "Adicionar efeitos visuais de cinema",
              "Integração do modelo 3D com custos, orçamentação e quantitativos em tempo real",
              "Planejamento do tempo de obra",
              "Simulação do vento na fachada"
            ],
            "answer": 1,
            "explanation": "No BIM: 3D é geometria, 4D é tempo/cronograma, e 5D é a estimativa e controle de custos do empreendimento."
          }
        ]
      },
      {
        "id": "eng-5",
        "title": "Engenharia de Controle & Automação Industrial 4.0",
        "level": "Avançado",
        "rating": 4.8,
        "instructor": "Dr. Lucas Vianna",
        "description": "Programação de CLPs (Controladores Lógicos Programáveis), arquitetura SCADA, sensores industriais e robôs manipuladores.",
        "modules": [
          {
            "num": 1,
            "title": "Programação de CLP na Norma IEC 61131-3",
            "hours": 8,
            "topics": [
              "Linguagens Ladder, FBD e Texto Estruturado (ST)",
              "Timers, Counters e Registradores",
              "Siemens TIA Portal"
            ]
          },
          {
            "num": 2,
            "title": "Sistemas de Supervisão e Aquisição de Dados (SCADA)",
            "hours": 8,
            "topics": [
              "Desenvolvimento de Telas IHM",
              "Alarmes e Histórico de Dados",
              "Comunicação OPC UA e Profinet"
            ]
          },
          {
            "num": 3,
            "title": "Teoria de Controle Clássico & Sintonia de PID",
            "hours": 8,
            "topics": [
              "Malha Aberta vs Fechada",
              "Métodos de Ziegler-Nichols",
              "Controladores P, PI e PID em Malha Industrial"
            ]
          },
          {
            "num": 4,
            "title": "Redes Industriais & Indústria 4.0",
            "hours": 8,
            "topics": [
              "Profinet, Modbus e EtherCAT",
              "Gêmeos Digitais (Digital Twins)",
              "Manutenção Preditiva"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Automação de Célula, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Projeto de Automação Industrial",
              "Mapa Mental Automação",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Projeto de automação de uma linha de envasamento automatizada no TIA Portal com controle PID de temperatura e supervisório SCADA.",
        "mindmap": [
          "CLP & Ladder",
          "Sistemas SCADA",
          "Sintonia PID",
          "Redes Profinet",
          "Digital Twins"
        ],
        "quiz": [
          {
            "question": "Qual é a principal função da ação Derivativa (D) em um controlador PID industrial?",
            "options": [
              "Eliminar o erro em regime permanente",
              "Antecipar a tendência de variação do erro futuro para amortecer oscilações e melhorar a resposta transitória",
              "Aumentar o tempo de resposta do sistema",
              "Desligar a bomba quando atinge a meta"
            ],
            "answer": 1,
            "explanation": "A ação derivativa reage à taxa de variação da taxa de erro, atuando como um freio que previne ultrapassagens (overshoot)."
          }
        ]
      },
      {
        "id": "eng-6",
        "title": "Matemática Financeira & Engenharia Econômica",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Prof. Roberto Mendes",
        "description": "Análise de viabilidade econômica de projetos de engenharia: VPL, TIR, Payback Descontado e Amortização (Tabela Price/SAC).",
        "modules": [
          {
            "num": 1,
            "title": "Juros Simples, Compostos e Taxas Equivalentes",
            "hours": 8,
            "topics": [
              "Capitalização e Desconto",
              "Taxa Nominal vs Taxa Efetiva",
              "Inflação e Taxa Real"
            ]
          },
          {
            "num": 2,
            "title": "Sistemas de Amortização de Empréstimos",
            "hours": 8,
            "topics": [
              "Sistema de Amortização Constante (SAC)",
              "Tabela Price (Sistema Francês)",
              "Comparativo de Custo Efectivo Total (CET)"
            ]
          },
          {
            "num": 3,
            "title": "Análise de Viabilidade Econômica de Projetos",
            "hours": 8,
            "topics": [
              "Valor Presente Líquido (VPL)",
              "Taxa Interna de Retorno (TIR)",
              "Payback Simples e Descontado"
            ]
          },
          {
            "num": 4,
            "title": "Análise de Substituição de Equipamentos e Depreciação",
            "hours": 8,
            "topics": [
              "Custo Anual Uniforme Equivalente (CAUE)",
              "Depreciação Linear e Acelerada",
              "Análise de Risco com Simulação de Monte Carlo"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Estudo de Viabilidade, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Laudo de Viabilidade Econômica",
              "Mapa Mental MatFin",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Elaboração do estudo de viabilidade econômica e cálculo do VPL/TIR para substituição da frota de caminhões de uma empresa transportadora.",
        "mindmap": [
          "Juros Compostos",
          "SAC vs Price",
          "VPL & TIR",
          "Payback Descontado",
          "Simulação Monte Carlo"
        ],
        "quiz": [
          {
            "question": "Um projeto de engenharia deve ser ACEITO quando o seu Valor Presente Líquido (VPL) calculado à Taxa Mínima de Atratividade (TMA) for:",
            "options": [
              "Maior que zero (VPL > 0)",
              "Menor que zero (VPL < 0)",
              "Exatamente igual a zero",
              "Igual à taxa de inflação"
            ],
            "answer": 0,
            "explanation": "Um VPL positivo indica que o projeto gera mais riqueza do que se o capital estivesse aplicado à Taxa Mínima de Atratividade."
          }
        ]
      },
      {
        "id": "eng-7",
        "title": "CAD 2D/3D Profissional com AutoCAD Avançado",
        "level": "Intermediário",
        "rating": 4.8,
        "instructor": "Esp. Bruno Alencar",
        "description": "Crie desenhos técnicos precisos, plantas baixas, cortes, blocos dinâmicos e modelagem 3D com AutoCAD.",
        "modules": [
          {
            "num": 1,
            "title": "Desenho Técnico 2D & Comandos de Precisão",
            "hours": 8,
            "topics": [
              "Object Snap (Osnap)",
              "Camadas (Layers) e Propriedades",
              "Comandos de Modificação (Trim, Offset, Array)"
            ]
          },
          {
            "num": 2,
            "title": "Blocos Dinâmicos e Atributos Automatizados",
            "hours": 8,
            "topics": [
              "Parâmetros e Ações de Blocos",
              "Campos Dinâmicos (Fields)",
              "Extração de Dados (Data Extraction)"
            ]
          },
          {
            "num": 3,
            "title": "Configuração de Layouts, Escalas e Plotagem (Paper Space)",
            "hours": 8,
            "topics": [
              "Viewports",
              "Escalas Anotativas",
              "Arquivos CTB de Estilo de Plotagem"
            ]
          },
          {
            "num": 4,
            "title": "Modelagem 3D Básica e Visualização no AutoCAD",
            "hours": 8,
            "topics": [
              "Extrude, Revolve e Sweep",
              "Operações Booleanas (Union, Subtract)",
              "Renderização Básica"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Planta Baixa Completa, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Desenho de Planta Baixa Executiva",
              "Mapa Mental CAD",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Desenhar e plotar a prancha técnica A1 completa de um galpão industrial com blocos dinâmicos e tabela de quantitativos extraída automaticamente.",
        "mindmap": [
          "Precision Osnap",
          "Blocos Dinâmicos",
          "Layout Viewports",
          "Estilos CTB",
          "AutoCAD 3D"
        ],
        "quiz": [
          {
            "question": "Para que serve a funcionalidade 'Escala Anotativa' (Annotative Scale) no AutoCAD?",
            "options": [
              "Mudar a cor da tela para preto",
              "Garantir que textos, cotas e hachuras mantenham o mesmo tamanho físico impresso em milímetros, independentemente da escala da Viewport",
              "Converter desenhos 2D em 3D automaticamente",
              "Salvar o arquivo em formato de imagem"
            ],
            "answer": 1,
            "explanation": "O recurso anotativo ajusta o tamanho dos elementos de anotação de acordo com a escala de exibição na janela de impressão."
          }
        ]
      },
      {
        "id": "eng-8",
        "title": "Engenharia de Manutenção Industrial 4.0 & Confiabilidade",
        "level": "Avançado",
        "rating": 4.8,
        "instructor": "Eng. Paulo Guimarães",
        "description": "Aumente a disponibilidade de ativos industriais com Manutenção Centrada em Confiabilidade (RCM), FMEA e análise de vibrações.",
        "modules": [
          {
            "num": 1,
            "title": "Estratégias de Manutenção (Corretiva, Preventiva e Preditiva)",
            "hours": 8,
            "topics": [
              "Gestão de Ativos (ISO 55000)",
              "Custo Total de Propriedade (TCO)",
              "Indicadores MTBF, MTTR e OEE"
            ]
          },
          {
            "num": 2,
            "title": "Manutenção Centrada em Confiabilidade (RCM / MCC)",
            "hours": 8,
            "topics": [
              "Análise FMEA (Failure Mode and Effects Analysis)",
              "Árvore de Falhas (FTA)",
              "Matriz de Risco"
            ]
          },
          {
            "num": 3,
            "title": "Técnicas de Preditiva: Análise de Vibrações e Termografia",
            "hours": 8,
            "topics": [
              "Espectro FFT de Vibração",
              "Inspeção Termográfica",
              "Análise de Óleos Lubrificantes"
            ]
          },
          {
            "num": 4,
            "title": "Sistemas CMMS/PCM & Manutenção Preditiva com IoT",
            "hours": 8,
            "topics": [
              "Ordem de Serviço Automatizada",
              "Sensores de Vibração sem Fio",
              "Algoritmos Preditivos"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Plano de Manutenção RCM, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Elaboração de FMEA de Turbina",
              "Mapa Mental Manutenção",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Implementação do plano de Manutenção Centrada em Confiabilidade e cálculo do OEE para uma linha de produção química contínua.",
        "mindmap": [
          "ISO 55000 Ativos",
          "MTBF & MTTR & OEE",
          "FMEA de Falhas",
          "Preditiva Vibração",
          "CMMS & IoT"
        ],
        "quiz": [
          {
            "question": "O que indica o indicador MTBF (Mean Time Between Failures) na engenharia de confiabilidade?",
            "options": [
              "O tempo médio necessário para reparar um equipamento quebrou",
              "O tempo médio de operação normal decorrido entre uma falha e a próxima falha de um ativo",
              "O custo em reais das peças de reposição",
              "A quantidade de graxa aplicada no motor"
            ],
            "answer": 1,
            "explanation": "MTBF mede a confiabilidade do equipamento: quanto maior o MTBF, menor é a frequência de quebras do ativo."
          }
        ]
      },
      {
        "id": "eng-9",
        "title": "Química Industrial & Engenharia de Processos Químicos",
        "level": "Avançado",
        "rating": 4.8,
        "instructor": "Dra. Renata Medeiros",
        "description": "Balanço de massa e energia, projeto de reatores químicos (CSTR, PFR) e operações unitárias de separação industrial.",
        "modules": [
          {
            "num": 1,
            "title": "Balanço de Massa e Energia em Sistemas Reacionais",
            "hours": 8,
            "topics": [
              "Graus de Liberdade",
              "Estequiometria Industrial",
              "Balanços de Energia com Mudança de Fase"
            ]
          },
          {
            "num": 2,
            "title": "Engenharia das Reações Químicas & Reatores",
            "hours": 8,
            "topics": [
              "Reatores CSTR, PFR e Batelada",
              "Cinética Química e Equação de Arrhenius",
              "Dimensionamento de Volume"
            ]
          },
          {
            "num": 3,
            "title": "Operações Unitárias de Transferência de Massa",
            "hours": 8,
            "topics": [
              "Torres de Destilação Fracionada",
              "Absorção de Gases",
              "Extração Líquido-Líquido"
            ]
          },
          {
            "num": 4,
            "title": "Simulação de Processos com DWSIM / Aspen Plus",
            "hours": 8,
            "topics": [
              "Modelos Termodinâmicos (Peng-Robinson, NRTL)",
              "Fluxogramas de Processo (PFD)",
              "Otimização Energética"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Simulação de Planta Quimica, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Projeto de Coluna de Destilação",
              "Mapa Mental Química",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Simular e dimensionar a coluna de destilação fracionada para separação da mistura Etanol-Água no simulador DWSIM.",
        "mindmap": [
          "Balanço de Massa",
          "Reatores CSTR/PFR",
          "Destilação Fracionada",
          "Termodinâmica Peng-Robinson",
          "DWSIM Simulation"
        ],
        "quiz": [
          {
            "question": "Qual a principal característica de um Reator CSTR (Continuous Stirred-Tank Reactor) operando em estado estacionário?",
            "options": [
              "A concentração dos reagentes dentro do reator é idêntica à concentração na corrente de saída",
              "Funciona sem agitação mecânica",
              "O volume varia constantemente ao longo do tempo",
              "A temperatura interna é sempre zero absoluto"
            ],
            "answer": 0,
            "explanation": "Devido à agitação perfeita, a mistura dentro do CSTR é homogênea e instantaneamente idêntica à composição da corrente efluente."
          }
        ]
      },
      {
        "id": "eng-10",
        "title": "Física Quântica Aplicada & Introdução à Computação Quântica",
        "level": "Avançado",
        "rating": 4.9,
        "instructor": "Dr. Carlos Eduardo",
        "description": "Entenda os princípios da mecânica quântica: superposição, emaranhamento, qubits e algoritmos quânticos com Qiskit da IBM.",
        "modules": [
          {
            "num": 1,
            "title": "Fundamentos da Mecânica Quântica",
            "hours": 8,
            "topics": [
              "Dualidade Onda-Partícula",
              "Equação de Schrödinger",
              "Princípio da Incerteza de Heisenberg"
            ]
          },
          {
            "num": 2,
            "title": "Qubits e Esfera de Bloch",
            "hours": 8,
            "topics": [
              "Estados Quânticos e Vetores de Estado",
              "Superposição Quântica",
              "Emaranhamento e Pares EPR"
            ]
          },
          {
            "num": 3,
            "title": "Portas Lógicas Quânticas & Circuitos",
            "hours": 8,
            "topics": [
              "Portas Pauli X, Y, Z e Hadamard",
              "Porta CNOT",
              "Medição Quântica e Colapso"
            ]
          },
          {
            "num": 4,
            "title": "Algoritmos Quânticos com IBM Qiskit",
            "hours": 8,
            "topics": [
              "Algoritmo de Deutsch-Jozsa",
              "Busca Quântica de Grover",
              "Fatoração de Shor"
            ]
          },
          {
            "num": 5,
            "title": "Prática: Circuito Quântico no Qiskit, Mapa Mental & Quiz",
            "hours": 8,
            "topics": [
              "Teletransporte Quântico em Qiskit",
              "Mapa Mental Quântico",
              "Quiz Autocorrigido"
            ]
          }
        ],
        "caseStudy": "Implementar e simular o circuito de Teletransporte Quântico de um qubit utilizando a biblioteca Qiskit da IBM.",
        "mindmap": [
          "Dualidade Onda-Partícula",
          "Qubits & Bloch",
          "Porta Hadamard & CNOT",
          "Qiskit IBM",
          "Algoritmo de Grover"
        ],
        "quiz": [
          {
            "question": "O que caracteriza o fenômeno da 'Superposição Quântica' em um Qubit?",
            "options": [
              "O qubit só pode assumir o valor 0",
              "O qubit pode existir simultaneamente em uma combinação linear dos estados |0⟩ e |1⟩ até que uma medição seja realizada",
              "O qubit aquece o computador",
              "O qubit apaga os dados a cada segundo"
            ],
            "answer": 1,
            "explanation": "Diferente do bit clássico que é 0 ou 1, o qubit pode estar em superposição de ambos até que a medição force o colapso."
          }
        ]
      }
    ]
  }
];
// Base de dados com 70 Cursos UNIFATIX ZENTIX
const TODOS_OS_CURSOS = [
  // EDUCAÇÃO - Pedagogia & Gestão Escolar
  { id: "EDU-101", codigo: "EDU-101", titulo: "Gestão, Liderança e Coordenação Pedagógica", categoria: "Educação - Pedagogia", cargaHoraria: "80h", nivel: "Pós / Extensão" },
  { id: "EDU-102", codigo: "EDU-102", titulo: "Psicopedagogia Clínica e Institucional", categoria: "Educação - Pedagogia", cargaHoraria: "120h", nivel: "Especialização" },
  { id: "EDU-103", codigo: "EDU-103", titulo: "Docência no Ensino Superior e Metodologias do Ensino", categoria: "Educação - Pedagogia", cargaHoraria: "60h", nivel: "Extensão" },
  { id: "EDU-104", codigo: "EDU-104", titulo: "Design Instrucional e Criação de Conteúdos para EAD", categoria: "Educação - Pedagogia", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "EDU-105", codigo: "EDU-105", titulo: "Metodologias Ativas e Gamificação na Aprendizagem", categoria: "Educação - Pedagogia", cargaHoraria: "40h", nivel: "Capacitação" },
  { id: "EDU-106", codigo: "EDU-106", titulo: "Neuroeducação e Processos Cognitivos de Aprendizagem", categoria: "Educação - Pedagogia", cargaHoraria: "60h", nivel: "Extensão" },
  { id: "EDU-107", codigo: "EDU-107", titulo: "Alfabetização, Letramento e Práticas de Leitura", categoria: "Educação - Pedagogia", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "EDU-108", codigo: "EDU-108", titulo: "Avaliação Educacional e Métricas de Desempenho Escolar", categoria: "Educação - Pedagogia", cargaHoraria: "40h", nivel: "Capacitação" },
  { id: "EDU-109", codigo: "EDU-109", titulo: "Legislação Educacional, LDB e BNCC na Prática", categoria: "Educação - Pedagogia", cargaHoraria: "60h", nivel: "Extensão" },
  { id: "EDU-110", codigo: "EDU-110", titulo: "Gestão de Conflitos e Mediação no Ambiente Escolar", categoria: "Educação - Pedagogia", cargaHoraria: "40h", nivel: "Capacitação" },

  // EDUCAÇÃO - Inclusiva & Especial
  { id: "EDI-201", codigo: "EDI-201", titulo: "Educação Inclusiva e Atendimento Educacional Especializado (AEE)", categoria: "Educação Inclusiva", cargaHoraria: "120h", nivel: "Especialização" },
  { id: "EDI-202", codigo: "EDI-202", titulo: "LIBRAS - Língua Brasileira de Sinais (Básico ao Avançado)", categoria: "Educação Inclusiva", cargaHoraria: "100h", nivel: "Extensão" },
  { id: "EDI-203", codigo: "EDI-203", titulo: "Transtorno do Espectro Autista (TEA): Estratégias Pedagógicas", categoria: "Educação Inclusiva", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "EDI-204", codigo: "EDI-204", titulo: "Sistema Braille e Tecnologia Assistiva na Escola", categoria: "Educação Inclusiva", cargaHoraria: "60h", nivel: "Capacitação" },
  { id: "EDI-205", codigo: "EDI-205", titulo: "TDAH e Transtornos de Aprendizagem: Intervenção Escolar", categoria: "Educação Inclusiva", cargaHoraria: "60h", nivel: "Extensão" },
  { id: "EDI-206", codigo: "EDI-206", titulo: "Adaptação Curricular e Elaboração de PEI", categoria: "Educação Inclusiva", cargaHoraria: "40h", nivel: "Capacitação" },
  { id: "EDI-207", codigo: "EDI-207", titulo: "Altas Habilidades e Superdotação no Ambiente Educacional", categoria: "Educação Inclusiva", cargaHoraria: "40h", nivel: "Capacitação" },
  { id: "EDI-208", codigo: "EDI-208", titulo: "Comunicação Alternativa e Aumentativa (CAA)", categoria: "Educação Inclusiva", cargaHoraria: "60h", nivel: "Extensão" },
  { id: "EDI-209", codigo: "EDI-209", titulo: "Deficiência Múltipla e Surdocegueira: Práticas de Aprendizado", categoria: "Educação Inclusiva", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "EDI-210", codigo: "EDI-210", titulo: "Políticas Públicas e Direitos da Educação Inclusiva", categoria: "Educação Inclusiva", cargaHoraria: "40h", nivel: "Capacitação" },

  // ENGENHARIA - Segurança do Trabalho & NRs
  { id: "ENG-301", codigo: "ENG-301", titulo: "NR-10: Segurança em Instalações e Serviços em Eletricidade", categoria: "Engenharia de Segurança", cargaHoraria: "40h", nivel: "Norma Regulamentadora" },
  { id: "ENG-302", codigo: "ENG-302", titulo: "NR-35: Trabalho em Altura e Técnicas de Resgate", categoria: "Engenharia de Segurança", cargaHoraria: "16h", nivel: "Norma Regulamentadora" },
  { id: "ENG-303", codigo: "ENG-303", titulo: "NR-33: Espaços Confinados para Supervisores e Trabalhadores", categoria: "Engenharia de Segurança", cargaHoraria: "40h", nivel: "Norma Regulamentadora" },
  { id: "ENG-304", codigo: "ENG-304", titulo: "NR-12: Segurança no Trabalho em Máquinas e Equipamentos", categoria: "Engenharia de Segurança", cargaHoraria: "30h", nivel: "Norma Regulamentadora" },
  { id: "ENG-305", codigo: "ENG-305", titulo: "NR-20: Segurança com Inflamáveis e Combustíveis", categoria: "Engenharia de Segurança", cargaHoraria: "32h", nivel: "Norma Regulamentadora" },
  { id: "ENG-306", codigo: "ENG-306", titulo: "NR-17: Ergonomia e Análise Ergonômica do Trabalho (AET)", categoria: "Engenharia de Segurança", cargaHoraria: "60h", nivel: "Aperfeiçoamento" },
  { id: "ENG-307", codigo: "ENG-307", titulo: "Gestão de PGR (Programa de Gerenciamento de Riscos) e GRO", categoria: "Engenharia de Segurança", cargaHoraria: "80h", nivel: "Especialização" },
  { id: "ENG-308", codigo: "ENG-308", titulo: "Higiene Ocupacional: Riscos Químicos, Físicos e Biológicos", categoria: "Engenharia de Segurança", cargaHoraria: "100h", nivel: "Extensão" },
  { id: "ENG-309", codigo: "ENG-309", titulo: "Perícia Trabalhista e Laudos de Insalubridade / Periculosidade", categoria: "Engenharia de Segurança", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "ENG-310", codigo: "ENG-310", titulo: "Formação e Gestão de CIPA (Comissão Interna de Prevenção)", categoria: "Engenharia de Segurança", cargaHoraria: "20h", nivel: "Capacitação" },

  // ENGENHARIA - Civil & Agrimensura
  { id: "ENC-401", codigo: "ENC-401", titulo: "Topografia Prática e Georreferenciamento de Imóveis", categoria: "Engenharia Civil", cargaHoraria: "120h", nivel: "Especialização Prática" },
  { id: "ENC-402", codigo: "ENC-402", titulo: "AutoCAD 2D/3D e Introdução à Modelagem BIM (Revit)", categoria: "Engenharia Civil", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENC-403", codigo: "ENC-403", titulo: "Gestão, Planejamento e Controle de Obras (MS Project)", categoria: "Engenharia Civil", cargaHoraria: "60h", nivel: "Aperfeiçoamento" },
  { id: "ENC-404", codigo: "ENC-404", titulo: "Patologia das Construções e Diagnóstico Estrutural", categoria: "Engenharia Civil", cargaHoraria: "80h", nivel: "Pós / Extensão" },
  { id: "ENC-405", codigo: "ENC-405", titulo: "Dimensionamento de Estruturas de Concreto Armado", categoria: "Engenharia Civil", cargaHoraria: "100h", nivel: "Especialização" },
  { id: "ENC-406", codigo: "ENC-406", titulo: "Infraestrutura Viária, Pavimentação e Rodovias", categoria: "Engenharia Civil", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENC-407", codigo: "ENC-407", titulo: "Drenagem Urbana e Hidrologia Aplicada", categoria: "Engenharia Civil", cargaHoraria: "60h", nivel: "Aperfeiçoamento" },
  { id: "ENC-408", codigo: "ENC-408", titulo: "Orçamento de Obras, BDI e Licitações Públicas", categoria: "Engenharia Civil", cargaHoraria: "40h", nivel: "Capacitação" },
  { id: "ENC-409", codigo: "ENC-409", titulo: "Inspeção Predial e Manutenção de Edificações", categoria: "Engenharia Civil", cargaHoraria: "60h", nivel: "Extensão" },
  { id: "ENC-410", codigo: "ENC-410", titulo: "Geotecnia, Mecânica dos Solos e Estabilidade de Taludes", categoria: "Engenharia Civil", cargaHoraria: "80h", nivel: "Especialização" },

  // ENGENHARIA - Elétrica & Energias Renováveis
  { id: "ENE-501", codigo: "ENE-501", titulo: "Projeto de Instalações Elétricas Residenciais e Industriais", categoria: "Engenharia Elétrica", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENE-502", codigo: "ENE-502", titulo: "Energia Solar Fotovoltaica: Projeto, Dimensionamento e Instalação", categoria: "Engenharia Elétrica", cargaHoraria: "60h", nivel: "Aperfeiçoamento" },
  { id: "ENE-503", codigo: "ENE-503", titulo: "Automação Industrial com CLP e SCADA", categoria: "Engenharia Elétrica", cargaHoraria: "100h", nivel: "Especialização" },
  { id: "ENE-504", codigo: "ENE-504", titulo: "Subestações Elétricas de Média e Alta Tensão", categoria: "Engenharia Elétrica", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENE-505", codigo: "ENE-505", titulo: "Eficiência Energética Industrial e Gestão ISO 50001", categoria: "Engenharia Elétrica", cargaHoraria: "60h", nivel: "Aperfeiçoamento" },
  { id: "ENE-506", codigo: "ENE-506", titulo: "Manutenção Eletromecânica de Motores e Geradores", categoria: "Engenharia Elétrica", cargaHoraria: "60h", nivel: "Capacitação" },
  { id: "ENE-507", codigo: "ENE-507", titulo: "Projetos de SPDA (Proteção contra Descargas Atmosféricas)", categoria: "Engenharia Elétrica", cargaHoraria: "40h", nivel: "Capacitação" },
  { id: "ENE-508", codigo: "ENE-508", titulo: "Redes Elétricas Inteligentes (Smart Grids) e Armazenamento", categoria: "Engenharia Elétrica", cargaHoraria: "60h", nivel: "Extensão" },
  { id: "ENE-509", codigo: "ENE-509", titulo: "Qualidade da Energia Elétrica e Correção de Fator de Potência", categoria: "Engenharia Elétrica", cargaHoraria: "60h", nivel: "Aperfeiçoamento" },
  { id: "ENE-510", codigo: "ENE-510", titulo: "Comissionamento e Testes em Sistemas Eletroeletrônicos", categoria: "Engenharia Elétrica", cargaHoraria: "40h", nivel: "Capacitação" },

  // ENGENHARIA - Mecânica & Automação Industrial
  { id: "ENM-601", codigo: "ENM-601", titulo: "Desenho Técnico Industrial e Modelagem 3D em SolidWorks", categoria: "Engenharia Mecânica", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENM-602", codigo: "ENM-602", titulo: "Elementos de Máquinas e Dimensionamento Mecânico", categoria: "Engenharia Mecânica", cargaHoraria: "80h", nivel: "Especialização" },
  { id: "ENM-603", codigo: "ENM-603", titulo: "Manutenção Preditiva, Preventiva e Gestão RCM/TPM", categoria: "Engenharia Mecânica", cargaHoraria: "60h", nivel: "Aperfeiçoamento" },
  { id: "ENM-604", codigo: "ENM-604", titulo: "Refrigeração Comercial, Climatização e Plano PMOC", categoria: "Engenharia Mecânica", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENM-605", codigo: "ENM-605", titulo: "Sistemas Hidráulicos e Pneumáticos Industriais", categoria: "Engenharia Mecânica", cargaHoraria: "60h", nivel: "Capacitação" },
  { id: "ENM-606", codigo: "ENM-606", titulo: "Processos de Soldagem e Ensaio Não Destrutivo (END)", categoria: "Engenharia Mecânica", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "ENM-607", codigo: "ENM-607", titulo: "Robótica Industrial e Integração de Células Automatizadas", categoria: "Engenharia Mecânica", cargaHoraria: "100h", nivel: "Especialização" },
  { id: "ENM-608", codigo: "ENM-608", titulo: "Usinagem CNC, Programação Código G e CAM", categoria: "Engenharia Mecânica", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENM-609", codigo: "ENM-609", titulo: "Metalurgia Física e Seleção de Materiais de Engenharia", categoria: "Engenharia Mecânica", cargaHoraria: "60h", nivel: "Aperfeiçoamento" },
  { id: "ENM-610", codigo: "ENM-610", titulo: "Lean Manufacturing e Gestão de Linhas de Produção", categoria: "Engenharia Mecânica", cargaHoraria: "60h", nivel: "Capacitação" },

  // ENGENHARIA - Ambiental & Sustentabilidade
  { id: "ENA-701", codigo: "ENA-701", titulo: "Licenciamento Ambiental e Estudo de Impacto (EIA/RIMA)", categoria: "Engenharia Ambiental", cargaHoraria: "100h", nivel: "Especialização" },
  { id: "ENA-702", codigo: "ENA-702", titulo: "Gestão e Gerenciamento de Resíduos Sólidos (PGRS)", categoria: "Engenharia Ambiental", cargaHoraria: "60h", nivel: "Extensão" },
  { id: "ENA-703", codigo: "ENA-703", titulo: "Tratamento de Água e Efluentes Sanitários / Industriais", categoria: "Engenharia Ambiental", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "ENA-704", codigo: "ENA-704", titulo: "Perícia e Valoração de Danos Ambientais", categoria: "Engenharia Ambiental", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENA-705", codigo: "ENA-705", titulo: "Geoprocessamento e Sensoriamento Remoto com QGIS", categoria: "Engenharia Ambiental", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "ENA-706", codigo: "ENA-706", titulo: "Auditoria Ambiental e Implementação da ISO 14001", categoria: "Engenharia Ambiental", cargaHoraria: "60h", nivel: "Capacitação" },
  { id: "ENA-707", codigo: "ENA-707", titulo: "Recuperação de Áreas Degradadas (PRAD)", categoria: "Engenharia Ambiental", cargaHoraria: "60h", nivel: "Extensão" },
  { id: "ENA-708", codigo: "ENA-708", titulo: "Gestão de Bacias Hidrográficas e Outorga de Água", categoria: "Engenharia Ambiental", cargaHoraria: "60h", nivel: "Capacitação" },
  { id: "ENA-709", codigo: "ENA-709", titulo: "Créditos de Carbono e Inventário de Gases de Efeito Estufa", categoria: "Engenharia Ambiental", cargaHoraria: "40h", nivel: "Capacitação" },
  { id: "ENA-710", codigo: "ENA-710", titulo: "Monitoramento e Qualidade do Ar e Ruídos Ambientais", categoria: "Engenharia Ambiental", cargaHoraria: "40h", nivel: "Capacitação" },

  // ENGENHARIA - Software & Sistemas
  { id: "ENS-801", codigo: "ENS-801", titulo: "Arquitetura de Software e Padrões de Projeto", categoria: "Engenharia de Software", cargaHoraria: "80h", nivel: "Especialização" },
  { id: "ENS-802", codigo: "ENS-802", titulo: "Engenharia de Dados e Construção de Pipelines ETL", categoria: "Engenharia de Software", cargaHoraria: "100h", nivel: "Extensão" },
  { id: "ENS-803", codigo: "ENS-803", titulo: "DevOps, Conteinerização com Docker e Orquestração Kubernetes", categoria: "Engenharia de Software", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "ENS-804", codigo: "ENS-804", titulo: "Desenvolvimento Web Full Stack (Node.js, Express, React, SQL)", categoria: "Engenharia de Software", cargaHoraria: "120h", nivel: "Especialização Prática" },
  { id: "ENS-805", codigo: "ENS-805", titulo: "Arquitetura Mobile e Aplicativos Híbridos", categoria: "Engenharia de Software", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENS-806", codigo: "ENS-806", titulo: "Segurança da Informação, Criptografia e DevSecOps", categoria: "Engenharia de Software", cargaHoraria: "80h", nivel: "Aperfeiçoamento" },
  { id: "ENS-807", codigo: "ENS-807", titulo: "Inteligência Artificial e Machine Learning para Engenharia", categoria: "Engenharia de Software", cargaHoraria: "100h", nivel: "Especialização" },
  { id: "ENS-808", codigo: "ENS-808", titulo: "Internet das Coisas (IoT) Industrial e Sensores", categoria: "Engenharia de Software", cargaHoraria: "80h", nivel: "Extensão" },
  { id: "ENS-809", codigo: "ENS-809", titulo: "Qualidade de Software, Testes Automatizados e QA", categoria: "Engenharia de Software", cargaHoraria: "60h", nivel: "Capacitação" },
  { id: "ENS-810", codigo: "ENS-810", titulo: "Governança de TI, COBIT e Gerenciamento de Serviços ITIL", categoria: "Engenharia de Software", cargaHoraria: "60h", nivel: "Capacitação" }
];

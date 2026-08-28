// ROTEIRO DE INSPEÇÃO ILPI
const CHECKLIST_ILPI = [
    {
        "id": "1",
        "category": "I. DOCUMENTAÇÃO E GESTÃO LEGAL",
        "description": "1. LICENÇA SANITARIA",
        "risk": "",
        "legislation": "Art. 8 RDC 502/21"
    },
    {
        "id": "2",
        "category": "I. DOCUMENTAÇÃO E GESTÃO LEGAL",
        "description": "2. REGIMENTO/ CONTRATO SOCIAL",
        "risk": "",
        "legislation": "Arts. 7 e 9 RDC 502/21; Art. 48, § único da Lei 10.741/2003"
    },
    {
        "id": "3",
        "category": "I. DOCUMENTAÇÃO E GESTÃO LEGAL",
        "description": "4. CONTRATO DE PRESTAÇÃO SERVIÇO COM O IDOSO (Contrato de Prestação de Serviço assinado)",
        "risk": "",
        "legislation": "Art. 12 RDC 502/21"
    },
    {
        "id": "4",
        "category": "I. DOCUMENTAÇÃO E GESTÃO LEGAL",
        "description": "5. DOCUMENTAÇÃO GERAL E RT (Responsável Técnico)",
        "risk": "",
        "legislation": "Arts. 13 e 17 RDC 502/21"
    },
    {
        "id": "5",
        "category": "I. DOCUMENTAÇÃO E GESTÃO LEGAL",
        "description": "6. TERCERIZAÇÃO DE SERVIÇOS (Alimentação, Limpeza, Lavanderia - Contrato e LISA)",
        "risk": "",
        "legislation": "Art. 14 RDC 502/21"
    },
    {
        "id": "6",
        "category": "II. RECURSOS HUMANOS E EDUCAÇÃO PERMANENTE",
        "description": "3. RESPONSÁVEL TÉCNICO (Mínimo 20 hs/semana)",
        "risk": "",
        "legislation": "Arts. 10, 11, 16, Inc. I da RDC 502/21"
    },
    {
        "id": "7",
        "category": "II. RECURSOS HUMANOS E EDUCAÇÃO PERMANENTE",
        "description": "7. RH CUIDADORES (Listagem)",
        "risk": "",
        "legislation": "Art. 16, Inc. II da RDC 502/21"
    },
    {
        "id": "8",
        "category": "II. RECURSOS HUMANOS E EDUCAÇÃO PERMANENTE",
        "description": "8. RH APOIO (Lazer, Limpeza, Alimentação, Lavanderia)",
        "risk": "",
        "legislation": "Arts. 15 e 16, Inc. III, IV, V e VI RDC 502/21"
    },
    {
        "id": "9",
        "category": "II. RECURSOS HUMANOS E EDUCAÇÃO PERMANENTE",
        "description": "Há um profissional de lazer - 1:40 idosos, 12 hs/semana",
        "risk": "",
        "legislation": "Art. 16, Inc. III da RDC 502/21"
    },
    {
        "id": "10",
        "category": "II. RECURSOS HUMANOS E EDUCAÇÃO PERMANENTE",
        "description": "Há um profissional de limpeza para cada 100 m² de área interna?",
        "risk": "",
        "legislation": "Art. 16, Inc. IV da RDC 502/21"
    },
    {
        "id": "11",
        "category": "II. RECURSOS HUMANOS E EDUCAÇÃO PERMANENTE",
        "description": "Há um profissional de alimentação - 1:20 idosos, cobertura de 2 turnos de 8 hs",
        "risk": "",
        "legislation": "Art. 16, Inc. V da RDC 502/21"
    },
    {
        "id": "12",
        "category": "II. RECURSOS HUMANOS E EDUCAÇÃO PERMANENTE",
        "description": "Há um profissional de lavanderia - 1:30 idosos",
        "risk": "",
        "legislation": "Art. 16, Inc. VI da RDC 502/21"
    },
    {
        "id": "13",
        "category": "II. RECURSOS HUMANOS E EDUCAÇÃO PERMANENTE",
        "description": "9. EDUCAÇÃO PERMANENTE (Gerontologia e/ou outras Áreas Saúde)",
        "risk": "",
        "legislation": "Art. 18 RDC 502/21"
    },
    {
        "id": "14",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "10. PBA (Projeto Arquitetônico)",
        "risk": "",
        "legislation": "Art. 19 RDC 502/21"
    },
    {
        "id": "15",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "11. INFRAESTRUTURA (Condições gerais, pisos, rampas)",
        "risk": "",
        "legislation": "Art. 20 e 24 RDC 502/21"
    },
    {
        "id": "16",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Possui, no mínimo, duas portas de acesso (sendo uma de serviço)?",
        "risk": "",
        "legislation": "Art. 24, Inc. I da RDC 502/21"
    },
    {
        "id": "17",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Os pisos são antiderrapantes, fáceis de limpar e uniformes?",
        "risk": "",
        "legislation": "Art. 24, Inc. II da RDC 502/21"
    },
    {
        "id": "18",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Estão em conformidade com a NBR 9050 (corrimão, sinalização, largura de 1,20 m)?",
        "risk": "",
        "legislation": "Art. 24, Inc. III § único da RDC 502/21"
    },
    {
        "id": "19",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "12. CIRCULAÇÃO/ PORTAS/ JANELAS",
        "risk": "",
        "legislation": "Arts. 25, 27 e 28 da RDC 502/21; NBR 9050"
    },
    {
        "id": "20",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Há rampas para desníveis?",
        "risk": "",
        "legislation": "Arts. 21 e 22 da RDC 502/21"
    },
    {
        "id": "21",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "As circulações principais têm 1,00 m de largura e as secundárias 0,80 m?",
        "risk": "",
        "legislation": "Art. 25 RDC 502/21"
    },
    {
        "id": "22",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Circulações maior 1,50 m possuem corrimão em ambos os lados e menor com corrimão somente um lado?",
        "risk": "",
        "legislation": "Art. 25, § 1º e 2º da RDC 502/21"
    },
    {
        "id": "23",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Há luz de vigília permanente nas circulações?",
        "risk": "",
        "legislation": "Art. 25 RDC 502/21"
    },
    {
        "id": "24",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "As portas têm vão livre com largura mínima de 1,10 m, travamento simples (sem tranca ou chaves)?",
        "risk": "",
        "legislation": "Art. 27 RDC 502/21"
    },
    {
        "id": "25",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "As janelas com peitoril mínimo de 1,00 m?",
        "risk": "",
        "legislation": "Art. 28 RDC 502/21"
    },
    {
        "id": "26",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "13. DORMITORIOS",
        "risk": "",
        "legislation": "Art. 29, Inc. I da RDC 502/21"
    },
    {
        "id": "27",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "São separados por sexo?",
        "risk": "",
        "legislation": "Art. 29, Inc. I da RDC 502/21"
    },
    {
        "id": "28",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Acomodam no máximo 4 pessoas?",
        "risk": "",
        "legislation": "Art. 29, Inc. I da RDC 502/21"
    },
    {
        "id": "29",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Todos são dotados de sanitários?",
        "risk": "",
        "legislation": "Art. 29, Inc. I da RDC 502/21"
    },
    {
        "id": "30",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Possui armários e mesinha de cabeceira individualizados?",
        "risk": "",
        "legislation": "Art. 29, Inc. I, item 1 e 2 da RDC 502/21"
    },
    {
        "id": "31",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "A área mínima está de acordo (7,50 m² para 01 leito / 5,50 m² para 02 a 04 leitos)?",
        "risk": "",
        "legislation": "Art. 29, Inc. I, item 1 e 2 da RDC 502/21"
    },
    {
        "id": "32",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "A distância entre as camas é de no mínimo 0,80 m?",
        "risk": "",
        "legislation": "Art. 29, Inc. I, item 4 da RDC 502/21"
    },
    {
        "id": "33",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Possuem luz de vigília e campainha de alarme?",
        "risk": "",
        "legislation": "Art. 29, Inc. I, item 3 da RDC 502/21"
    },
    {
        "id": "34",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "15. BANHEIROS",
        "risk": "",
        "legislation": "Art. 29, Inc. I, item 5 e IV da RDC 502/21"
    },
    {
        "id": "35",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Os banheiros dos dormitórios têm área mínima de 3,60 m², sem degraus, com 01 bacia, 01 lavatório e 01 chuveiro?",
        "risk": "",
        "legislation": "Art. 29, Inc. I, item 5 da RDC 502/21"
    },
    {
        "id": "36",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Os banheiros coletivos são separados por sexo e o box para vaso sanitário permite a transferência de uma cadeira de rodas?",
        "risk": "",
        "legislation": "Art. 29, Inc. IV da RDC 502/21"
    },
    {
        "id": "37",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "14. ÁREA DE ATIVIDADES (Salas Coletivas, Convivência)",
        "risk": "",
        "legislation": "Art. 29, Inc. II e Art. 30 da RDC 502/21"
    },
    {
        "id": "38",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Há salas para atividades coletivas (1,0 m²/pessoa com máximo 15 pessoas)?",
        "risk": "",
        "legislation": "Art. 29, Inc. II, item 1 da RDC 502/21"
    },
    {
        "id": "39",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Há sala de convivência com área mínima de 1,3 m² por pessoa?",
        "risk": "",
        "legislation": "Art. 29, Inc. II, item 2 da RDC 502/21"
    },
    {
        "id": "40",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "22. ESPAÇO ECUMENICO",
        "risk": "",
        "legislation": "Art. 6, Inc. III, Arts. 21 e 29, Inc. V da RDC 502/21"
    },
    {
        "id": "41",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "21. AMBIENTES GERAIS (Sala Adm/Área Externa Descoberta)",
        "risk": "",
        "legislation": "Arts. 21 e 29, Inc. VI da RDC 502/21"
    },
    {
        "id": "42",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Existe uma área externa descoberta para convivência?",
        "risk": "",
        "legislation": "Art. 29, Inc. XV da RDC 502/21"
    },
    {
        "id": "43",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "20. DML/ ALMOXARIFADO",
        "risk": "",
        "legislation": "Arts. 21 e 29, Incs. XI e XII da RDC 502/21"
    },
    {
        "id": "44",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Existe DML?",
        "risk": "",
        "legislation": "Arts. 21 e 29, Incs. XI da RDC 502/21"
    },
    {
        "id": "45",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "Possui um almoxarifado com área mínima de 10,0 m²?",
        "risk": "",
        "legislation": "Art. 29, Inc. XII da RDC 502/21"
    },
    {
        "id": "46",
        "category": "III. ESTRUTURA FÍSICA E AMBIENTES",
        "description": "23. SANITARIO FUNCIONARIO (Há vestiários e banheiros separados por sexo com 01 bacia, 01 lavatório, 01 chuveiro para cada 10 funcionários)",
        "risk": "",
        "legislation": "Art. 29, Inc. XIII da RDC 502/21"
    },
    {
        "id": "47",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "16. REFEITORIO/ COZINHA/ DESPENSA",
        "risk": "",
        "legislation": "Art. 29, Incs. VII e VIII da RDC 502/21"
    },
    {
        "id": "48",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "O refeitório tem área mínima de 1,0 m² por usuário e guarda lanche?",
        "risk": "",
        "legislation": "Art. 29, Inc. VII da RDC 502/21"
    },
    {
        "id": "49",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "O refeitório possui lavatório para higienização de mãos e luz de vigília?",
        "risk": "",
        "legislation": "Art. 29, Inc. VII da RDC 502/21"
    },
    {
        "id": "50",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Há cozinha?",
        "risk": "",
        "legislation": "Art. 29, Inc. VIII da RDC 502/21"
    },
    {
        "id": "51",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Há despensa?",
        "risk": "",
        "legislation": "Art. 29, Inc. VIII da RDC 502/21"
    },
    {
        "id": "52",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "33. SERVIÇO ALIMENTAÇÃO (Refeições/Boas Práticas)",
        "risk": "",
        "legislation": "Arts. 44 e 45 da RDC 502/21"
    },
    {
        "id": "53",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Recebem no mínimo 06 refeições diárias?",
        "risk": "",
        "legislation": "Art. 44 da RDC 502/21"
    },
    {
        "id": "54",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Como é o fornecimento de água:",
        "risk": "",
        "legislation": "Art. 44 da RDC 502/21"
    },
    {
        "id": "55",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Há carnes, frutas, legumes na despensa e no cardápio?",
        "risk": "",
        "legislation": "Art. 44 da RDC 502/21"
    },
    {
        "id": "56",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Há alimentos SEM valor nutritivo (doces, gelatinas, suco em pó, entre outros)?",
        "risk": "",
        "legislation": "Art. 44 da RDC 502/21"
    },
    {
        "id": "57",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "A manipulação de alimentos segue a RDC nº 216/2004?",
        "risk": "",
        "legislation": "Art. 45 da RDC 502/21"
    },
    {
        "id": "58",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "34. NORMAS E ROTINAS TÉCNICAS - ALIMENTAÇÃO",
        "risk": "",
        "legislation": "Art. 46, Incs. I, II, III, IV, V da RDC 502/21"
    },
    {
        "id": "59",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "17. LAVANDERIA (Instalação Física)",
        "risk": "",
        "legislation": "Art. 29, Incs. IX e X e Art. 48 da RDC 502/21"
    },
    {
        "id": "60",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Possui lavanderia?",
        "risk": "",
        "legislation": "Art. 29, Inc. IX da RDC 502/21"
    },
    {
        "id": "61",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "O local de guarda de roupas coletivas é separado?",
        "risk": "",
        "legislation": "Art. 29, Inc. X da RDC 502/21"
    },
    {
        "id": "62",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "18. PROCESSAMENTO DE ROUPAS (Rotinas gerais)",
        "risk": "",
        "legislation": "Art. 47, Incs. I e II, Arts. 48, 49 e 50 da RDC 502/21"
    },
    {
        "id": "63",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Há rotinas de processamento de roupas disponíveis (Lavar, secar, passar, reparar, guardar e troca - uso coletivo)?",
        "risk": "",
        "legislation": "Art. 47, Incs. I e II da RDC 502/21"
    },
    {
        "id": "64",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "O idoso consegue efetuar o processamento de suas roupas?",
        "risk": "",
        "legislation": "Art. 48 da RDC 502/21"
    },
    {
        "id": "65",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "As roupas de uso pessoal são identificadas?",
        "risk": "",
        "legislation": "Art. 49 da RDC 502/21"
    },
    {
        "id": "66",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "19. PROCESSAMENTO DE ROUPAS COM RESIDUOS (Roupas Sujas de Idosos Grau III)",
        "risk": "",
        "legislation": "Arts. 47, 49 e 50 da RDC 502/21"
    },
    {
        "id": "67",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "35. LIMPEZA (Rotinas e Higienização de Ambientes)",
        "risk": "",
        "legislation": "Arts. 51, 52 e 53 da RDC 502/21"
    },
    {
        "id": "68",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Os ambientes estão limpos, sem resíduos e odores?",
        "risk": "",
        "legislation": "Art. 51 da RDC 502/21"
    },
    {
        "id": "69",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Existe rotina técnica de limpeza e higienização dos artigos e ambientes?",
        "risk": "",
        "legislation": "Art. 52 da RDC 502/21"
    },
    {
        "id": "70",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Os produtos utilizados tem registro na Anvisa?",
        "risk": "",
        "legislation": "Art. 53 da RDC 502/21"
    },
    {
        "id": "71",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "24. RESIDUO (PGRSS)",
        "risk": "",
        "legislation": "Art. 2, Inc. I e Art. 5, Inc. I da RDC 222/2018"
    },
    {
        "id": "72",
        "category": "IV. SERVIÇOS DE APOIO E PROCESSAMENTO",
        "description": "Existe uma lixeira ou abrigo externo para armazenamento de resíduos?",
        "risk": "",
        "legislation": "Art. 29, Inc. XIV da RDC 502/21"
    },
    {
        "id": "73",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "25. PLANO TRABALHO",
        "risk": "",
        "legislation": "Arts. 31 e 32 da RDC 502/21"
    },
    {
        "id": "74",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "26. REGISTRO IDOSO (Prontuário)",
        "risk": "",
        "legislation": "Arts. 33 e 37 da RDC 502/21"
    },
    {
        "id": "75",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "Relação de Pertences Pessoais registrada na admissão",
        "risk": "",
        "legislation": "Art. 33 e Art. 50, Inc. XV da Lei 10.741/2003"
    },
    {
        "id": "76",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "27. PLANO ATENÇÃO INTEGRAL SAUDE (PAIS)",
        "risk": "",
        "legislation": "Arts. 36, 37, 38, 39, 40, 41, 42 e 43 a RDC 502/21"
    },
    {
        "id": "77",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "Plano de Atenção Integral à Saúde Individualizado",
        "risk": "",
        "legislation": "Arts. 36 e 37 a RDC 502/21"
    },
    {
        "id": "78",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "Avaliação de Admissão Multiprofissional (comorbidades)",
        "risk": "",
        "legislation": "Art. 37, Inc. IV a RDC 502/21"
    },
    {
        "id": "79",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "Avaliações e Prescrições da Equipe Multiprofissional (Fisioterapia, Nutrição, Psicologia, etc.)",
        "risk": "",
        "legislation": "Art. 33 e Art. 50, Inc. XV da Lei 10.741/2003"
    },
    {
        "id": "80",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "28. AVALIAÇÃO PLANO ATENÇÃO SAUDE",
        "risk": "",
        "legislation": "Art. 38 da RDC 502/21"
    },
    {
        "id": "81",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "29. ESQUEMA VACINAL (Comprovação de Vacinação atualizada - Cópia do Cartão de Vacina)",
        "risk": "",
        "legislation": "Art. 39 da RDC 502/21"
    },
    {
        "id": "82",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "30. ROTINAS IDOSO (Registros diários/periódicos dos atendimentos da Equipe Multiprofissional, datados e assinados)",
        "risk": "",
        "legislation": "Art. 33 e 41 da RDC 502/21"
    },
    {
        "id": "83",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "31. CONTROLE MEDICAÇÃO (Guarda e Adm.)",
        "risk": "",
        "legislation": "Art. 40 da RDC 502/21"
    },
    {
        "id": "84",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "Prescrição Médica/Odontológica legível e atualizada",
        "risk": "",
        "legislation": "Art. 40 da RDC 502/21"
    },
    {
        "id": "85",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "Registro de Administração de Medicamentos com data, hora e identificação do profissional que administrou",
        "risk": "",
        "legislation": "Art. 40 da RDC 502/21"
    },
    {
        "id": "86",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "32. INTERCORRENCIA MEDICA (Registro de Intercorrências de Saúde e encaminhamentos a outros serviços)",
        "risk": "",
        "legislation": "Arts. 42 e 43 da RDC 502/21"
    },
    {
        "id": "87",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "36. NOTIFICAÇÃO COMPULSORIA (doenças de interesse epidemiológico)",
        "risk": "",
        "legislation": "Arts. 54, 55 e 57 da RDC 502/21"
    },
    {
        "id": "88",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "Avaliação de Risco de Queda e Suicídio",
        "risk": "",
        "legislation": "Arts. 55 e Art. 8, Inc. XI da RDC 36/2013"
    },
    {
        "id": "89",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "Avaliação de Risco para Lesão por Pressão",
        "risk": "",
        "legislation": "Art. 8, Inc. XII da RDC 36/2013"
    },
    {
        "id": "90",
        "category": "V. GESTÃO DO CUIDADO E SAÚDE DO RESIDENTE",
        "description": "37. AVALIAÇÃO DESEMPENHO (Indicadores: mortalidade, DDA, escabiose, desidratação, úlcer decúbito e desnutrição)",
        "risk": "",
        "legislation": "Arts. 58, 59, 60 e Anexo da RDC 502/2021"
    }
];

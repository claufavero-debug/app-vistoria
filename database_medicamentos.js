// ROTEIRO DE INSPEÇÃO PARA DISTRIBUIDORA E TRANSPORTADORA DE MEDICAMENTOS
const CHECKLIST_MEDICAMENTOS = [
    // ==========================================================================
    // INFORMAÇÕES GERAIS
    // ==========================================================================
    {
        id: "1",
        category: "INFORMAÇÕES GERAIS",
        description: `Apresenta contrato social ou ata de constituição registrada na junta comercial e suas alterações, se houver;`,
        risk: "",
        legislation: `RDC 16/2014 art. 28`
    },
    {
        id: "2",
        category: "INFORMAÇÕES GERAIS",
        description: `Apresenta Cadastro Nacional de Pessoa Jurídica (CNPJ) contemplando a atividade econômica pleiteada?`,
        risk: "",
        legislation: `RDC 16/2014 art. 28`
    },
    {
        id: "3",
        category: "INFORMAÇÕES GERAIS",
        description: `Apresenta autorização ou alvará referente à localização e ocupação, proteção ambiental, segurança das instalações segurança dos trabalhadores?`,
        risk: "",
        legislation: `RDC 16/2014 art. 28`
    },
    {
        id: "4",
        category: "INFORMAÇÕES GERAIS",
        description: `Apresenta comprovação do registro de responsabilidade técnica realizada pelo profissional legalmente habilitado junto ao respectivo conselho de classe?`,
        risk: "",
        legislation: `RDC 16/2014 art. 28`
    },
    {
        id: "5",
        category: "INFORMAÇÕES GERAIS",
        description: `Apresenta certificado de licenciamento de corpo de bombeiros?`,
        risk: "",
        legislation: `LEI Nº 13331, de 23 de novembro de 2001; DECRETO Nº 5.711, de 05 de maio de 2002`
    },
    {
        id: "6",
        category: "INFORMAÇÕES GERAIS",
        description: `Apresenta AFE junto a Anvisa?`,
        risk: "",
        legislation: `RDC 16/2014`
    },
    {
        id: "7",
        category: "INFORMAÇÕES GERAIS",
        description: `Terceirização e prestação de serviços?`,
        risk: "",
        legislation: `RDC 430/20 ART. 72 a 76`
    },
    {
        id: "8",
        category: "INFORMAÇÕES GERAIS",
        description: `Possui Programa De Gerenciamento De Resíduos ? Contratos?`,
        risk: "",
        legislation: `RDC 222/2018`
    },

    // ==========================================================================
    // SISTEMA DE GESTÃO DA QUALIDADE
    // ==========================================================================
    {
        id: "9",
        category: "SISTEMA DE GESTÃO DA QUALIDADE",
        description: `Apresenta Manual de Boas Práticas de Distribuição, Armazenagem e transporte .`,
        risk: "",
        legislation: `RDC 16/2014 art. 28`
    },
    {
        id: "10",
        category: "SISTEMA DE GESTÃO DA QUALIDADE",
        description: `Apresenta POPs para as principais atividades que serão desenvolvidas, contendo as informações necessárias para o funcionamento de acordo com a política de qualidade e a legislação vigente.`,
        risk: "",
        legislation: `RDC 16/2014 art. 28`
    },
    {
        id: "11",
        category: "SISTEMA DE GESTÃO DA QUALIDADE",
        description: `Apresenta cadastro de fornecedores e clientes homologados?`,
        risk: "",
        legislation: `RDC nº 430/2020, arts. 18 e 30`
    },

    // ==========================================================================
    // PESSOAL
    // ==========================================================================
    {
        id: "12",
        category: "PESSOAL",
        description: `Apresenta registro de treinamento atualizado?`,
        risk: "",
        legislation: `RDC 430/20 ART. 12 § 2º`
    },
    {
        id: "13",
        category: "PESSOAL",
        description: `Empresa possui número apropriado de funcionários com qualificações adequadas?`,
        risk: "",
        legislation: `RDC 430/20 ART. 10`
    },
    {
        id: "14",
        category: "PESSOAL",
        description: `Possui PCMSO, PGR e ASO?`,
        risk: "",
        legislation: `legislação trabalhista/SST`
    },

    // ==========================================================================
    // INFRAESTRUTURA
    // ==========================================================================
    {
        id: "15",
        category: "INFRAESTRUTURA",
        description: `As instalações e mobiliários possuem dimensões compatíveis com o volume das operações realizadas, apresentam superfícies lisas, sem rachaduras e sem desprendimento de pó?`,
        risk: "",
        legislation: `RDC 430/20 ART. 44 e 45`
    },
    {
        id: "16",
        category: "INFRAESTRUTURA",
        description: `Possui área: recebimento, expedição, medicamentos recolhidos, suspeitos de falsificação e devolvidos. As atividades são desempenhadas conforme a norma?`,
        risk: "",
        legislation: `RDC 430/20 ART. 42`
    },
    {
        id: "17",
        category: "INFRAESTRUTURA",
        description: `Possui Área Ou Local De Armazenagem De Medicamentos Sujeitos A Regime Especial De Controle ? Apresenta comprovante de apresentação de RMV`,
        risk: "",
        legislation: `RDC 430/20 ART. 42`
    },
    {
        id: "18",
        category: "INFRAESTRUTURA",
        description: `Controla e registra as condições de umidade e temperatura no setor de armazenamento dos medicamentos? O monitoramento é realizado por instrumentos posicionados de acordo com o estudo de qualificação térmica da área? Os equipamentos são calibrados?`,
        risk: "",
        legislation: `RDC 430/20 ART. 43`
    },
    {
        id: "19",
        category: "INFRAESTRUTURA",
        description: `Apresenta Copa, DML, e banheiros ( não possuem comunicação direta com as áreas de armazenagem)`,
        risk: "",
        legislation: `RDC 430/20 ART. 42`
    },
    {
        id: "20",
        category: "INFRAESTRUTURA",
        description: `Apresenta comprovante de dedetização e limpeza de reservatório de água atualizado?`,
        risk: "",
        legislation: `RDC nº 430/2020, arts. 13, 44 e 45`
    },

    // ==========================================================================
    // TRANSPORTADORAS (EXCLUSIVAS)
    // ==========================================================================
    {
        id: "21",
        category: "TRANSPORTADORAS (EXCLUSIVAS)",
        description: `Apresenta a relação do quantitativo e identificação dos veículos próprios ou de terceiros sob sua responsabilidade, disponibilizados para o transporte?`,
        risk: "",
        legislation: `RDC 16/14 ART. 28\nRDC nº 430/2020, arts. 61 a 66.`
    },
    {
        id: "22",
        category: "TRANSPORTADORAS (EXCLUSIVAS)",
        description: `Armazenagem em trânsito em condições de acordo com a norma`,
        risk: "",
        legislation: `RDC 430/20 ART. 51`
    },
    {
        id: "23",
        category: "TRANSPORTADORAS (EXCLUSIVAS)",
        description: `As cargas que não cumpram com os requerimentos do recebimento são devolvidas no ato do recebimento ou postas de quarentena aguardando a disposição pela garantia da qualidade?`,
        risk: "",
        legislation: `RDC 430/20 ART. 57`
    },
    {
        id: "24",
        category: "TRANSPORTADORAS (EXCLUSIVAS)",
        description: `As notas fiscais contém os números de lote e dados da origem dos medicamentos transacionados? Disponibiliza manifesto de carga transportada com a previsão de desembarque a bordo do veículo transportador?`,
        risk: "",
        legislation: `RDC 430/20 ART. 60 e 64`
    },
    {
        id: "25",
        category: "TRANSPORTADORAS (EXCLUSIVAS)",
        description: `Condições de transporte adequadas? Monitoramento de T e U. Compartilhamento de cargas adequado. Controle durante o armazenamento e transporte.`,
        risk: "",
        legislation: `RDC 430/20 ART. 60, 64 e 70, 84, 85`
    },
    {
        id: "26",
        category: "TRANSPORTADORAS (EXCLUSIVAS)",
        description: `Os veículos e contêineres possuem manutenção e limpeza adequadas? Há procedimentos de limpeza e sanitização dos veículos mantendo-se os registros destas atividades?`,
        risk: "",
        legislation: `RDC 430/20 ART. 68`
    },
    {
        id: "27",
        category: "TRANSPORTADORAS (EXCLUSIVAS)",
        description: `Comunicação aos órgãos sanitários competentes diante de suspeita ou identificação de alteração, adulteração, fraude, falsificação, desvio de qualidade, roubo, furto ou outras ocorrências que possam comprometer a qualidade, segurança ou integridade dos medicamentos transportados`,
        risk: "",
        legislation: `RDC ANVISA nº 430/2020, art. 18, inciso XVI, e art. 71.`
    },
    {
        id: "28",
        category: "TRANSPORTADORAS (EXCLUSIVAS)",
        description: `Qualificação de rota do ponto de vista térmico, com monitoramento e controle da temperatura durante o transporte, sendo a disposição e montagem das cargas orientadas pelo detentor do registro e fundamentadas nos estudos de qualificação da cadeia de frio.`,
        risk: "",
        legislation: `RDC 430/20 ART. 83, 84 e 85`
    },

    // ==========================================================================
    // GERENCIAMENTO DE RECLAMAÇÕES
    // ==========================================================================
    {
        id: "29",
        category: "GERENCIAMENTO DE RECLAMAÇÕES",
        description: `Apresenta registro de recebimento de reclamações que foram examinadas, avaliadas, investigadas e arquivadas?`,
        risk: "",
        legislation: `RDC 430/20 ART. 25`
    },

    // ==========================================================================
    // AUDITORIA DE QUALIDADE
    // ==========================================================================
    {
        id: "30",
        category: "AUDITORIA DE QUALIDADE",
        description: `Realiza o programa de auditoria interna?`,
        risk: "",
        legislation: `RDC 430/20 ART. 37`
    }
];

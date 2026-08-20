// ROTEIRO DE INSPEÇÃO PARA DISTRIBUIDORA DE COSMÉTICOS E SANEANTES
const CHECKLIST_COSMETICOS = [
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
        legislation: `RDC nº 16/2014`
    },
    {
        id: "8",
        category: "INFORMAÇÕES GERAIS",
        description: `Possui Programa De Gerenciamento De Resíduos ? Contratos?`,
        risk: "",
        legislation: `RDC 222/2018\nRDC 48/2013 (17.21)\nRDC 47/2013 (17.21)`
    },

    // ==========================================================================
    // SISTEMA DE GESTÃO DA QUALIDADE
    // ==========================================================================
    {
        id: "9",
        category: "SISTEMA DE GESTÃO DA QUALIDADE",
        description: `Apresenta Manual de Boas Práticas de Distribuição, Armazenagem e transporte .`,
        risk: "",
        legislation: `RDC 16/2014 art. 28\nRDC 48/2013 (10.4)\nRDC 47/2013 (3.2.2; 10.1)`
    },
    {
        id: "10",
        category: "SISTEMA DE GESTÃO DA QUALIDADE",
        description: `Apresenta POPs para as principais atividades que serão desenvolvidas, contendo as informações necessárias para o funcionamento de acordo com a política de qualidade e a legislação vigente.`,
        risk: "",
        legislation: `RDC 16/2014 art. 28\nRDC 47/2013 (3.2.3 e 3.2.4)\nRDC 48/2013 (10.4)`
    },
    {
        id: "11",
        category: "SISTEMA DE GESTÃO DA QUALIDADE",
        description: `Apresenta cadastro de fornecedores e prestadores de serviços homologados? Qualificação?`,
        risk: "",
        legislation: `RDC 48/2013 (3.3.5)\nRDC 47/2013 (3.3.5)`
    },

    // ==========================================================================
    // PESSOAL
    // ==========================================================================
    {
        id: "12",
        category: "PESSOAL",
        description: `Apresenta registro de treinamento atualizado?`,
        risk: "",
        legislation: `RDC 48/2013 (5.3; 11.3; 11.6)\nRDC 47/2013 (4.1 )`
    },
    {
        id: "13",
        category: "PESSOAL",
        description: `Empresa possui número apropriado de funcionários com qualificações adequadas?`,
        risk: "",
        legislation: `RDC 48/2013 (11.1 e 11.2)\nRDC 47/2013 (11.1 e 11.2)`
    },
    {
        id: "14",
        category: "PESSOAL",
        description: `Possui PCMSO, PGR e ASO?`,
        risk: "",
        legislation: `legislação trabalhista/SST\nRDC 48/2013 (5.2)`
    },

    // ==========================================================================
    // INFRAESTRUTURA
    // ==========================================================================
    {
        id: "15",
        category: "INFRAESTRUTURA",
        description: `As instalações e mobiliários possuem dimensões compatíveis com o volume das operações realizadas, apresentam superfícies lisas, sem rachaduras e sem desprendimento de pó?`,
        risk: "",
        legislation: `RDC 48/2013 (12.2 a 12.11)\nRDC 47/2013 (12.2 a 12.11)`
    },
    {
        id: "16",
        category: "INFRAESTRUTURA",
        description: `Possui área: carga e descarga coberta; recebimento, expedição, produtos recolhidos, suspeitos de falsificação e devolvidos. As atividades são desempenhadas conforme a norma?`,
        risk: "",
        legislation: `RDC 48/2013 (15.30)\nRDC 47/2013 (15.31)`
    },
    {
        id: "17",
        category: "INFRAESTRUTURA",
        description: `Controla e registra as condições de umidade e temperatura no setor de armazenamento dos produtos? Os equipamentos são calibrados?`,
        risk: "",
        legislation: `RDC 48/2013 (17.18.2; 17.9)\nRDC 47/2013( 17.18.2; 17.9)`
    },
    {
        id: "18",
        category: "INFRAESTRUTURA",
        description: `Apresenta Copa, DML, e banheiros ( não possuem comunicação direta com as áreas de armazenagem)`,
        risk: "",
        legislation: `RDC 48/2013 (14.1)\nRDC 47/2013 (14.1)`
    },
    {
        id: "19",
        category: "INFRAESTRUTURA",
        description: `Apresenta comprovante de dedetização e limpeza de reservatório de água atualizado? Telas na janelas? Sistema de proteção das instalações adequado?`,
        risk: "",
        legislation: `RDC 48/2013 (5.1)\nRDC 47/2013 (5.1)`
    },

    // ==========================================================================
    // MANUSEIO/ARMAZENAMENTO/DISTRIBUIÇÃO
    // ==========================================================================
    {
        id: "20",
        category: "MANUSEIO/ARMAZENAMENTO/DISTRIBUIÇÃO",
        description: `Áreas adequadas, estoque ordenado, armazenamento garante a segurança do produto? Empilhamento seguro? Os produtos estão isolados do piso e afastados das paredes?`,
        risk: "",
        legislation: `RDC 48/2013 (15.1 a 15.4; 15.16; 15.25; 15.25)\nRDC 47/2013`
    },
    {
        id: "21",
        category: "MANUSEIO/ARMAZENAMENTO/DISTRIBUIÇÃO",
        description: `Os produtos são armazenados e distribuídos de acordo com a regra primeiro que expira, primeiro que sai (PEPS)?`,
        risk: "",
        legislation: `RDC 48/2013 (15.13)\nRDC 47/2013 ((15.1 a 15.4; 15.16; 15.25; 15.25)`
    },
    {
        id: "22",
        category: "MANUSEIO/ARMAZENAMENTO/DISTRIBUIÇÃO",
        description: `O manuseio e distribuição dos produtos permite a rastreabilidade?`,
        risk: "",
        legislation: `RDC 48/2013 (15.26)\nRDC 47/2013 (15.27)`
    },

    // ==========================================================================
    // DESVIOS
    // ==========================================================================
    {
        id: "23",
        category: "DESVIOS",
        description: `Apresenta registro de não conformidades? Recolhimento? Devolução?`,
        risk: "",
        legislation: `RDC 48/2013 (capítulo 7 e 8)\nRDC 47/2013 (capítulo 7 e 8)`
    },

    // ==========================================================================
    // GERENCIAMENTO DE RECLAMAÇÕES
    // ==========================================================================
    {
        id: "24",
        category: "GERENCIAMENTO DE RECLAMAÇÕES",
        description: `Apresenta registro de recebimento de reclamações que foram examinadas, avaliadas, investigadas e arquivadas?`,
        risk: "",
        legislation: `RDC 48/2013 (6.1 a 6.6)\nRDC 47/2013 (6.1 a 6.6)`
    },

    // ==========================================================================
    // AUDITORIA DE QUALIDADE
    // ==========================================================================
    {
        id: "25",
        category: "AUDITORIA DE QUALIDADE",
        description: `Realiza o programa de auditoria interna?`,
        risk: "",
        legislation: `RDC 48/2013 ( 9.1 a 9.6)\nRDC 47/2013 (9.1 a 9.6)`
    }
];

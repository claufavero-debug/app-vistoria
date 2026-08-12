// ROTEIRO DE INSPEÇÃO PARA DISTRIBUIDORA DE PRODUTOS PARA A SAÚDE
const CHECKLIST_DISTRIBUIDORA = [
    // Category: Informações Gerais
    {
        id: "D1",
        category: "Informações Gerais",
        description: "Apresenta contrato social ou ata de constituição registrada na junta comercial e suas alterações, se houver?",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º a 30; RDC 16/2014 art. 2º"
    },
    {
        id: "D2",
        category: "Informações Gerais",
        description: "Apresenta Cadastro Nacional de Pessoa Jurídica (CNPJ) contemplando a atividade econômica pleiteada?",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º a 30; RDC 16/2014 art. 2º"
    },
    {
        id: "D3",
        category: "Informações Gerais",
        description: "Apresenta autorização ou alvará referente à localização e ocupação, proteção ambiental, segurança das instalações e segurança dos trabalhadores?",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º a 77; RDC 16/2014 art. 2º"
    },
    {
        id: "D4",
        category: "Informações Gerais",
        description: "Apresenta contratos de prestação de serviços diversos ou documentos equivalentes (devem ser realizados somente com empresas autorizadas e licenciadas pela autoridade competente), quando aplicável?",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º, 17 e 21 a 27; RDC 16/2014 art. 28"
    },
    {
        id: "D5",
        category: "Informações Gerais",
        description: "Apresenta comprovação do registro de responsabilidade técnica realizada pelo profissional legalmente habilitado junto ao respectivo conselho de classe?",
        risk: "",
        legislation: "RDC 665/2022, arts. 8º, 13º e 14º; RDC 16/2014"
    },
    {
        id: "D6",
        category: "Informações Gerais",
        description: "Apresenta certificado de licenciamento de corpo de bombeiros válido?",
        risk: "",
        legislation: "Lei Estadual nº 13.331/01; Decreto nº 5.711/02"
    },
    {
        id: "D7",
        category: "Informações Gerais",
        description: "Apresenta AFE (Autorização de Funcionamento de Empresa) junto a Anvisa?",
        risk: "",
        legislation: "RDC 16/2014"
    },

    // Category: Responsabilidade Gerencial
    {
        id: "D8",
        category: "Responsabilidade Gerencial",
        description: "Apresenta Manual de Boas Práticas de Distribuição e Armazenagem?",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º, 28 a 30; RDC 16/2014"
    },
    {
        id: "D9",
        category: "Responsabilidade Gerencial",
        description: "Apresenta procedimentos operacionais padrão (POPs) para as principais atividades desenvolvidas, com instruções de funcionamento e política de qualidade?",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º, 28 a 30; RDC 16/2014"
    },
    {
        id: "D10",
        category: "Responsabilidade Gerencial",
        description: "Estabelece sua política e seus objetivos de comprometimento com a qualidade, mensuráveis e coerentes com as diretrizes organizacionais?",
        risk: "",
        legislation: "RDC 665/2022, art. 5º"
    },
    {
        id: "D11",
        category: "Responsabilidade Gerencial",
        description: "Apresenta estrutura organizacional adequada, representada por organograma, com pessoal suficiente para os processos de qualidade?",
        risk: "",
        legislation: "RDC 665/2022, art. 8º"
    },
    {
        id: "D12",
        category: "Responsabilidade Gerencial",
        description: "Designa profissional qualificado para assegurar que os requisitos do sistema de qualidade sejam estabelecidos e mantidos (com designação documentada)?",
        risk: "",
        legislation: "RDC 665/2022, art. 9º"
    },
    {
        id: "D13",
        category: "Responsabilidade Gerencial",
        description: "Possui POPs específicos para: treinamento pessoal, recebimento, armazenamento de produtos acabados, devolvidos e recolhidos, controle de documentos, limpeza e sanitização, tratamento de não conformidades, recolhimento de produtos, tratamento de reclamações, ações preventivas e corretivas?",
        risk: "",
        legislation: "RDC 665/2022, art. 12, item VIII C/C RDC 16/14 art. 28, item II, al. B, D"
    },

    // Category: Limpeza e Sanitização
    {
        id: "D14",
        category: "Limpeza e Sanitização",
        description: "Apresenta registro físico ou digital de limpeza dos ambientes e/ou equipamentos?",
        risk: "",
        legislation: "RDC 665/2022, art. 68"
    },
    {
        id: "D15",
        category: "Limpeza e Sanitização",
        description: "O consumo de alimentos e bebidas é feito exclusivamente em local específico e isolado da área de armazenamento?",
        risk: "",
        legislation: "RDC 665/2022, art. 72"
    },

    // Category: Saúde e Higiene Pessoal
    {
        id: "D16",
        category: "Saúde e Higiene Pessoal",
        description: "Os funcionários estão aparentemente saudáveis e fazem uso de vestuário limpo e adequado para a atividade?",
        risk: "",
        legislation: "RDC 665/2022, art. 70"
    },

    // Category: Controle de Contaminação
    {
        id: "D17",
        category: "Controle de Contaminação",
        description: "O estabelecimento está livre de pragas, insetos, roedores e de condições de criatório de vetores (dengue, zika, chikungunya, febre amarela, etc.)?",
        risk: "",
        legislation: "RDC 665/2022, art. 74"
    },
    {
        id: "D18",
        category: "Controle de Contaminação",
        description: "Apresenta comprovante atualizado de desinsetização/desratização e laudo de limpeza do reservatório de água?",
        risk: "",
        legislation: "RDC 665/2022, art. 74"
    },

    // Category: Rotulagem de Produtos
    {
        id: "D19",
        category: "Rotulagem de Produtos (Importadora)",
        description: "[EXCLUSIVO IMPORTADORA] Os produtos importados possuem rótulo e instruções de uso redigidas em português?",
        risk: "",
        legislation: "RDC 665/2022, arts. 85 a 88"
    },
    {
        id: "D20",
        category: "Rotulagem de Produtos (Importadora)",
        description: "[EXCLUSIVO IMPORTADORA] Os rótulos são projetados, impressos e aplicados de forma legível e perfeitamente aderidos ao produto durante todas as etapas?",
        risk: "",
        legislation: "RDC 665/2022, arts. 85 a 88"
    },
    {
        id: "D21",
        category: "Rotulagem de Produtos (Importadora)",
        description: "[EXCLUSIVO IMPORTADORA] Possui procedimentos documentados específicos para as rotinas de embalagem e rotulagem?",
        risk: "",
        legislation: "RDC 665/2022, arts. 85 a 88"
    },

    // Category: Inspeções e Testes
    {
        id: "D22",
        category: "Inspeções e Testes (Importadora)",
        description: "[EXCLUSIVO IMPORTADORA] O importador/distribuidor assegura por meio de registro que todo equipamento de medição e teste (mecânico, automatizado ou eletrônico) é adequado e produz resultados válidos?",
        risk: "",
        legislation: "RDC 665/2022, art. 93"
    },
    {
        id: "D23",
        category: "Inspeções e Testes (Importadora)",
        description: "[EXCLUSIVO IMPORTADORA] O importador/distribuidor assegura que sejam mantidos registros das datas de calibração e das mensurações obtidas?",
        risk: "",
        legislation: "RDC 665/2022, art. 94 C/C RDC 16/2014 art. 28"
    },

    // Category: Segurança do Trabalhador
    {
        id: "D24",
        category: "Segurança do Trabalhador",
        description: "Os funcionários fazem uso de EPI (Equipamento de Proteção Individual) compatível com o processo de trabalho realizado?",
        risk: "",
        legislation: "RDC 665/2022, art. 77"
    },
    {
        id: "D25",
        category: "Segurança do Trabalhador",
        description: "Apresenta procedimentos e instruções assegurando o cumprimento das normas aplicáveis à saúde e segurança do trabalhador?",
        risk: "",
        legislation: "RDC 665/2022, arts. 15 e 70"
    },
    {
        id: "D26",
        category: "Segurança do Trabalhador",
        description: "Apresenta os programas regulamentares (PCMSO, PGR) e exames (ASO) dos funcionários atualizados?",
        risk: "",
        legislation: "Legislação Trabalhista Brasileira / Normas Regulamentadoras"
    },

    // Category: Manuseio e Armazenamento
    {
        id: "D27",
        category: "Manuseio e Armazenamento",
        description: "Apresenta evidências documentadas das atividades de movimentação, fluxo e armazenamento seguro de produtos?",
        risk: "",
        legislation: "RDC 665/2022, Capítulo VI"
    },

    // Category: Gerenciamento de Reclamações
    {
        id: "D28",
        category: "Gerenciamento de Reclamações",
        description: "Apresenta registro de recebimento de reclamações de clientes que foram adequadamente examinadas, avaliadas, investigadas e arquivadas?",
        risk: "",
        legislation: "RDC 665/2022, art. 121"
    },

    // Category: Auditoria de Qualidade
    {
        id: "D29",
        category: "Auditoria de Qualidade",
        description: "A empresa possui um programa de auditoria de qualidade documentado com procedimentos estabelecidos e implantados?",
        risk: "",
        legislation: "RDC 665/2022, art. 124"
    },
    {
        id: "D30",
        category: "Auditoria de Qualidade",
        description: "Apresenta registros atualizados das execuções de auditorias internas periódicas?",
        risk: "",
        legislation: "RDC 665/2022, art. 124"
    },

    // Category: Instalação e Assistência Técnica
    {
        id: "D31",
        category: "Instalação e Assistência Técnica (Importadora)",
        description: "[EXCLUSIVO IMPORTADORA] A assistência técnica de equipamentos médicos é devidamente registrada e nela constam os resultados das inspeções e testes para aprovação do serviço?",
        risk: "",
        legislation: "RDC 665/2022, arts. 125 a 130"
    },

    // Category: Técnicas Estatísticas
    {
        id: "D32",
        category: "Técnicas Estatísticas (Importadora)",
        description: "[EXCLUSIVO IMPORTADORA] Estabelece procedimentos para identificar técnicas estatísticas válidas para verificar o desempenho do sistema de qualidade e a capacidade do processo?",
        risk: "",
        legislation: "RDC 665/2022, arts. 131 a 134"
    }
];

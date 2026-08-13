// ROTEIRO DE INSPEÇÃO PARA DISTRIBUIDORA DE PRODUTOS PARA A SAÚDE (COMPLETO)
const CHECKLIST_DISTRIBUIDORA = [
    // Category: INFORMAÇÕES GERAIS
    {
        id: "D1",
        category: "INFORMAÇÕES GERAIS",
        description: "Apresenta contrato social ou ata de constituição registrada na junta comercial e suas alterações, se houver;",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º e 28 a 30; RDC 16/2014 art. 28"
    },
    {
        id: "D2",
        category: "INFORMAÇÕES GERAIS",
        description: "Apresenta Cadastro Nacional de Pessoa Jurídica (CNPJ) contemplando a atividade econômica pleiteada?",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º e 28 a 30;RDC 16/2014 art. 28"
    },
    {
        id: "D3",
        category: "INFORMAÇÕES GERAIS",
        description: "Apresenta autorização ou alvará referente à localização e ocupação, proteção ambiental, segurança das instalações segurança dos trabalhadores?",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º, 67 e 77;RDC 16/2014 art. 28"
    },
    {
        id: "D4",
        category: "INFORMAÇÕES GERAIS",
        description: "Apresenta contratos de prestação de serviços diversos ou documentos equivalentes, os quais devem ser realizados somente com empresas autorizadas e licenciadas pela autoridade competente, quando aplicável ?",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º, 16, 17 e 21 a 27; RDC 16/2014 art. 28"
    },
    {
        id: "D5",
        category: "INFORMAÇÕES GERAIS",
        description: "Apresenta comprovação do registro de responsabilidade técnica realizada pelo profissional legalmente habilitado junto ao respectivo conselho de classe?",
        risk: "",
        legislation: "RDC 665/2022, arts. 8º, 9º, 13º e 14;RDC 16/2014 art. 28"
    },
    {
        id: "D6",
        category: "INFORMAÇÕES GERAIS",
        description: "Apresenta certificado de licenciamento de corpo de bombeiros?",
        risk: "",
        legislation: "LEI Nº 13331, de 23 de novembro de 2001; DECRETO Nº 5.711, de 05 de maio de 2002"
    },
    {
        id: "D7",
        category: "INFORMAÇÕES GERAIS",
        description: "Apresenta AFE junto a Anvisa?",
        risk: "",
        legislation: "RDC 16/2014"
    },

    // Category: RESPONSABILIDADE GERENCIAL
    {
        id: "D8",
        category: "RESPONSABILIDADE GERENCIAL",
        description: "Apresenta Manual de Boas Práticas de Distribuição e Armazenagem.",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º, 7º e 28 a 30; RDC 16/2014 art. 28"
    },
    {
        id: "D9",
        category: "RESPONSABILIDADE GERENCIAL",
        description: "Apresenta procedimentos operacionais padrão as principais atividades que serão desenvolvidas, contendo as informações necessárias para o funcionamento de acordo com a política de qualidade e a legislação vigente.",
        risk: "",
        legislation: "RDC 665/2022, arts. 4º, 7º e 28 a 30;RDC 16/2014 art. 28"
    },
    {
        id: "D10",
        category: "RESPONSABILIDADE GERENCIAL",
        description: "Estabelece sua política e seus objetivos de comprometimento com a qualidade, que devem ser mensuráveis e coerentes com a política estabelecida",
        risk: "",
        legislation: "RDC 665/2022, art. 5º"
    },
    {
        id: "D11",
        category: "RESPONSABILIDADE GERENCIAL",
        description: "Apresenta estrutura organizacional adequada, representada por meio de organograma, com pessoal suficiente para assegurar que os produtos sejam fabricados de acordo com os requisitos da norma?",
        risk: "",
        legislation: "RDC 665/2022, art 8º"
    },
    {
        id: "D12",
        category: "RESPONSABILIDADE GERENCIAL",
        description: "Designa um indivíduo para assegurar que os requisitos do sistema de qualidade sejam estabelecidos e mantidos, sendo esta documentada.",
        risk: "",
        legislation: "RDC 665/2022, art. 9º"
    },

    // Category: PESSOAL
    {
        id: "D13",
        category: "PESSOAL",
        description: "Apresenta POP para treinamento de boas práticas dos funcionários?",
        risk: "",
        legislation: "RDC 665/2022, Art. 15"
    },
    {
        id: "D14",
        category: "PESSOAL",
        description: "Apresenta registro de treinamento atualizado?",
        risk: "",
        legislation: "RDC 665/2022, Art. 15"
    },

    // Category: CONTROLE DE COMPRAS
    {
        id: "D15",
        category: "CONTROLE DE COMPRAS",
        description: "A empresa realiza a avaliação de fornecedores de produtos e serviços e mantém registros dos aprovados?",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 21 A 24 RDC 16/14 ART. 28"
    },
    {
        id: "D16",
        category: "CONTROLE DE COMPRAS",
        description: "A empresa realiza a avaliação de clientes?",
        risk: "",
        legislation: "RDC 16/14 ART. 28"
    },
    {
        id: "D17",
        category: "CONTROLE DE COMPRAS",
        description: "Apresenta POP de Qualificação de fornecedores e prestadores de serviços",
        risk: "",
        legislation: "RDC 665/2022 art. 21 e 22"
    },
    {
        id: "D18",
        category: "CONTROLE DE COMPRAS",
        description: "São utilizados serviços de transportes devidamente qualificados?",
        risk: "",
        legislation: "RDC 16/14 ART. 28"
    },

    // Category: GERENCIAMENTO DE RISCO (aplicável somente às importadoras)
    {
        id: "D19",
        category: "GERENCIAMENTO DE RISCO (aplicável somente às importadoras)",
        description: "Estabelece processo contínuo de gerenciamento de risco que envolva todo o ciclo de vida de um produto importado?",
        risk: "",
        legislation: "RDC 665/2022 art. 18 a 20"
    },

    // Category: DOCUMENTOS E REGISTROS DE QUALIDADE
    {
        id: "D20",
        category: "DOCUMENTOS E REGISTROS DE QUALIDADE",
        description: "Possui manual de boas práticas de armazenamento e distribuição que descreve: política de qualidade, organograma, cargos e responsabilidades, política de treinamento e contratações, qualificação de fornecedores e prestadores de serviços",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 4º, 7º E 28 A 30 C/C RDC 16/14 ART. 28 ÍTEM I AL. F"
    },
    {
        id: "D21",
        category: "DOCUMENTOS E REGISTROS DE QUALIDADE",
        description: "POSSUI POP’S PARA: treinamento pessoal, recebimento de produtos, armazenamento de produtos cabados, devolvidos e recolhidos, controle de documentos, limpeza e sanitização, tratamento de não conformidades, recolhimento de produtos, tratamento de reclamações, ações preventivas e corretivas.",
        risk: "",
        legislation: "RDC 665/2022, ART. 120, INC. VIII C/C RDC 16/14 ART. 28 ÍTEM II, AL. B, D"
    },

    // Category: LIMPEZA E SANITIZAÇÃO
    {
        id: "D22",
        category: "LIMPEZA E SANITIZAÇÃO",
        description: "Apresenta registro de limpeza dos ambientes e ou equipamentos?",
        risk: "",
        legislation: "RDC 665/2022 art. 68 a 69"
    },
    {
        id: "D23",
        category: "LIMPEZA E SANITIZAÇÃO",
        description: "O consumo de alimentos e bebidas é feito em local específico?",
        risk: "",
        legislation: "RDC 665/2022, ART. 72"
    },

    // Category: SAÚDE E HIGIENE PESSOAL
    {
        id: "D24",
        category: "SAÚDE E HIGIENE PESSOAL",
        description: "Os funcionários estão aparentemente saudáveis e fazem uso de vestuário limpo e adequado para a atividade",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 70 E 71"
    },

    // Category: CONTROLE DE CONTAMINAÇÃO
    {
        id: "D25",
        category: "CONTROLE DE CONTAMINAÇÃO",
        description: "O estabelecimento está livre de pragas, insetos, roedores e de condições que propiciem abrigo e criatório de animais prejudiciais à saúde, em especial os mosquitos transmissores de dengue, zika, chikungunya, febre amarela e outras doenças?",
        risk: "",
        legislation: "RDC 665/22, art. 74"
    },
    {
        id: "D26",
        category: "CONTROLE DE CONTAMINAÇÃO",
        description: "Apresenta comprovante de dedetização e limpeza de reservatório de água atualizado?",
        risk: "",
        legislation: "RDC 665/22, art. 74"
    },

    // Category: ROTULAGEM DE PRODUTOS(aplicável somente às importadoras)
    {
        id: "D27",
        category: "ROTULAGEM DE PRODUTOS(aplicável somente às importadoras)",
        description: "Os produtos importados possuem rótulo e instruções em português?",
        risk: "",
        legislation: "RDC 665/22, art. 85 a 87"
    },
    {
        id: "D28",
        category: "ROTULAGEM DE PRODUTOS(aplicável somente às importadoras)",
        description: "Os rótulos são projetados, impressos e aplicados de forma legível e aderida ao produto durante todas as etapas",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 86 E 87"
    },
    {
        id: "D29",
        category: "ROTULAGEM DE PRODUTOS(aplicável somente às importadoras)",
        description: "Possui procedimento para embalagem e rotulagem",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 84 A 87"
    },

    // Category: INSPEÇÕES E TESTES (aplicável somente às importadoras)
    {
        id: "D30",
        category: "INSPEÇÕES E TESTES (aplicável somente às importadoras)",
        description: "O importador/distribuidor assegura através de registro que todo o equipamento de medição e teste, incluindo o equipamento mecânico, automatizado ou eletrônico, seja adequado aos fins que se destinam, produzindo resultados válidos?",
        risk: "",
        legislation: "RDC 665/2022, ART. 93"
    },
    {
        id: "D31",
        category: "INSPEÇÕES E TESTES (aplicável somente às importadoras)",
        description: "O importador/distribuidor assegura que sejam mantidos registros das datas de calibração e mensuração obtidas?",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 94 A 99 C/C RDC 16/14 ART. 28"
    },

    // Category: SEGURANÇA DO TRABALHADOR
    {
        id: "D32",
        category: "SEGURANÇA DO TRABALHADOR",
        description: "Os funcionários fazem uso de epi compatível com o processo de trabalho realizado?",
        risk: "",
        legislation: "RDC 665/2022, ART. 77"
    },
    {
        id: "D33",
        category: "SEGURANÇA DO TRABALHADOR",
        description: "Apresenta procedimentos assegurando o cumprimento às normas aplicáveis à saúde do trabalhador?",
        risk: "",
        legislation: "RDC 665/2022, Art. 15, §1º e art. 70"
    },
    {
        id: "D34",
        category: "SEGURANÇA DO TRABALHADOR",
        description: "Apresenta PCMSO, PGR, ASO atualizados?",
        risk: "",
        legislation: "legislação trabalhista/SST"
    },

    // Category: MANUSEIO E ARMAZENAMENTO
    {
        id: "D35",
        category: "MANUSEIO E ARMAZENAMENTO",
        description: "Os produtos armazenados ou expostos para o consumo estão dentro do prazo de validade?",
        risk: "",
        legislation: "RDC 665/2022, art. 109"
    },
    {
        id: "D36",
        category: "MANUSEIO E ARMAZENAMENTO",
        description: "A área de armazenamento tem capacidade suficiente para assegurar a estocagem ordenada e racional das diversas categorias de produtos?",
        risk: "",
        legislation: "RDC 16/14 ART. 28, ÍTEM II, AL. C"
    },
    {
        id: "D37",
        category: "MANUSEIO E ARMAZENAMENTO",
        description: "Todos os materiais são armazenados e manuseados sob condições apropriadas e de forma ordenada, de modo a preservar a integridade e prevenir trocas?",
        risk: "",
        legislation: "RDC 16/14 ART. 28, ÍTEM II, AL. C"
    },
    {
        id: "D38",
        category: "MANUSEIO E ARMAZENAMENTO",
        description: "Controla e registra as condições de umidade e temperatura no setor de armazenamento dos produtos?",
        risk: "",
        legislation: "RDC 665/2022, ART. 68, PARÁGRAFO ÚNICO, E ART. 111"
    },

    // Category: DISTRIBUIÇÃO DE PRODUTOS ACABADOS
    {
        id: "D39",
        category: "DISTRIBUIÇÃO DE PRODUTOS ACABADOS",
        description: "Possui sistema de rastreabilidade implantado, com controle numérico (lote, série, outro).",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 112, III, 113 E 114 C/C RDC 16/14 ART. 28 ÍTEM II, AL."
    },

    // Category: PROCEDIMENTO PARA PRODUTOS NÃO CONFORMES
    {
        id: "D40",
        category: "PROCEDIMENTO PARA PRODUTOS NÃO CONFORMES",
        description: "Existe local segregado, devidamente identificado, para estocagem de produtos vencidos, reprovados, recolhidos ou para produtos não conformes?",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 109, III, 110 E 115 A 118"
    },
    {
        id: "D41",
        category: "PROCEDIMENTO PARA PRODUTOS NÃO CONFORMES",
        description: "As não conformidades são devidamente identificadas, tratadas e registradas?",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 115 A 118 C/C RDC 16/14 ART."
    },
    {
        id: "D42",
        category: "PROCEDIMENTO PARA PRODUTOS NÃO CONFORMES",
        description: "Se a importadora detém o registro do produto, possui sistema de tecnovigilância estruturado e implantado? (EM CASO AFIRMATIVO: recebe e documenta as informações referentes a queixas técnicas, eventos adversos, falsificações e outros)",
        risk: "",
        legislation: "RDC 67/09 ART. 6º, INC. 6; RDC 665/2022, ARTS. 120 E 121; RDC 16/14 ART. 28"
    },

    // Category: AÇÕES CORRETIVAS E PREVENTIVAS
    {
        id: "D43",
        category: "AÇÕES CORRETIVAS E PREVENTIVAS",
        description: "Apresenta evidências das atividades?",
        risk: "",
        legislation: "RDC 665/2022"
    },

    // Category: GERENCIAMENTO DE RECLAMAÇÕES
    {
        id: "D44",
        category: "GERENCIAMENTO DE RECLAMAÇÕES",
        description: "Apresenta registro de recebimento de reclamações que foram examinadas, avaliadas, investigadas e arquivadas?",
        risk: "",
        legislation: "RDC 665/2022, art. 121"
    },

    // Category: AUDITORIA DE QUALIDADE
    {
        id: "D45",
        category: "AUDITORIA DE QUALIDADE",
        description: "A empresa possui sistema de qualidade com procedimentos de auditoria da qualidade estabelecidos e implantados?",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 122 A 124"
    },
    {
        id: "D46",
        category: "AUDITORIA DE QUALIDADE",
        description: "Apresenta registros atualizados da execução de auditoria?",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 122 A 124"
    },

    // Category: INSTALAÇÃO DE EQUIPAMENTOS E ASSISTÊNCIA TÉCNICA (aplicável somente às importadoras)
    {
        id: "D47",
        category: "INSTALAÇÃO DE EQUIPAMENTOS E ASSISTÊNCIA TÉCNICA (aplicável somente às importadoras)",
        description: "A assistência técnica de equipamentos médicos é registrada? No registro da assistência técnica constam: resultados das inspeções e testes para aprovação do serviço?",
        risk: "",
        legislation: "RDC 665/2022, ARTS. 15, 125 A 130"
    },

    // Category: TÉCNICAS ESTATÍSTICAS(aplicável somente às importadoras)
    {
        id: "D48",
        category: "TÉCNICAS ESTATÍSTICAS(aplicável somente às importadoras)",
        description: "Estabelece procedimentos para identificar técnicas estatísticas válidas para verificar o desempenho do sistema da qualidade e a capacidade do processo em atender as especificações estabelecidas?",
        risk: "",
        legislation: "RDC 665/2022, art. 131 a 134."
    }
];

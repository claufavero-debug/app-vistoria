// ROTEIRO DE VISTORIA SANITÁRIA - DROGARIAS E FARMÁCIAS (EAC)
const CHECKLIST_DROGARIA = [
    // Category: Geral
    {
        id: "15905",
        category: "Geral",
        description: "O estabelecimento está licenciado para a atividade de laboratório de análise clínica Tipo I?",
        risk: "maior",
        legislation: "RDC 786/23 Art 9, parágrafo único"
    },
    {
        id: "15859",
        category: "Geral",
        description: "Cumpre os seguintes requisitos para realização de EAC: I - leitura exclusivamente visual; II - material biológico primário; III - sem instrumento complexo; IV - todas as etapas in loco?",
        risk: "critico",
        legislation: "RDC 786/23 Art 9, Itens I a IV"
    },
    {
        id: "15862",
        category: "Geral",
        description: "O EAC executado no serviço Tipo I é realizado exclusivamente por profissional habilitado (farmacêutico)?",
        risk: "critico",
        legislation: "RDC 786/23 Art 11"
    },
    {
        id: "15863",
        category: "Geral",
        description: "O registro do resultado (cópia) do EAC realizado na farmácia consta na declaração de serviço farmacêutico?",
        risk: "maior",
        legislation: "RDC 786/23 Art 12, parágrafo 2º"
    },
    {
        id: "15864",
        category: "Geral",
        description: "A iluminação da sala de realização de EAC é planejada de modo a não prejudicar a avaliação e a coloração da pele do paciente?",
        risk: "menor",
        legislation: "RDC 786/23 Art 18"
    },
    {
        id: "15865",
        category: "Geral",
        description: "O serviço Tipo I deve ser dotado, no mínimo, de: Área de recepção; DML; Sanitário; Sala de execução de EAC?",
        risk: "critico",
        legislation: "RDC 786/23 Art 20, Itens I a IV"
    },
    {
        id: "15866",
        category: "Geral",
        description: "Possui sala de atendimento individualizado para coleta e execução de EAC, podendo ser compartilhada para assistência farmacêutica?",
        risk: "critico",
        legislation: "RDC 786/23 Art 21, parágrafo 2º"
    },
    {
        id: "15867",
        category: "Geral",
        description: "A sala de execução de EAC é dotada de: lavatório, bancada, mesa, cadeira de coleta, refrigeração com termômetro, depósito e recipiente de descarte?",
        risk: "critico",
        legislation: "RDC 786/23 Art 21, Itens I a VII"
    },
    {
        id: "15868",
        category: "Geral",
        description: "A sala de execução de EAC no serviço Tipo I dispõe de ventilação natural ou de sistema de climatização?",
        risk: "maior",
        legislation: "RDC 786/23 Art. 22"
    },
    {
        id: "15869",
        category: "Geral",
        description: "O serviço que executa EAC está inscrito no CNES?",
        risk: "menor",
        legislation: "RDC 786/23 Art. 29"
    },
    {
        id: "15870",
        category: "Geral",
        description: "Em caso de impedimento do RT, o serviço que executa EAC conta com profissional legalmente habilitado substituto?",
        risk: "critico",
        legislation: "RDC 786/23 Art 30, parágrafo único"
    },
    {
        id: "15871",
        category: "Geral",
        description: "Possui estrutura organizacional documentada?",
        risk: "menor",
        legislation: "RDC 786/23 Art. 31"
    },
    {
        id: "15872",
        category: "Geral",
        description: "O serviço estabelece política de acesso a dados e informações, computadorizados ou não, de forma a proteger o paciente?",
        risk: "maior",
        legislation: "RDC 786/23 Art. 32"
    },
    {
        id: "15873",
        category: "Geral",
        description: "Realiza avaliação da qualidade de seus produtos/serviços no caso de desvio de qualidade, registrando em instruções escritas?",
        risk: "critico",
        legislation: "RDC 786/23 Art 33, parágrafo único"
    },
    {
        id: "15874",
        category: "Geral",
        description: "A drogaria ao contratar laboratório requisita documentos que comprovem a regularidade sanitária (AAS ou protocolo)?",
        risk: "critico",
        legislation: "RDC 786/23 Art 43, parágrafo único"
    },
    {
        id: "15884",
        category: "Geral",
        description: "Todos os produtos sujeitos à vigilância sanitária utilizados pelo serviço que executa EAC estão regularizados junto à ANVISA?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 55"
    },
    {
        id: "15885",
        category: "Geral",
        description: "Identifica e notifica incidentes, eventos adversos e queixas técnicas ocorridos, investigando ocorrências e adotando ações preventivas?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 57"
    },
    {
        id: "15886",
        category: "Geral",
        description: "Notifica eventos adversos e queixas técnicas no sistema de notificações em vigilância sanitária (NOTIVISA)?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 57, parágrafo 1º"
    },
    {
        id: "15888",
        category: "Geral",
        description: "Garante meios eficazes para o armazenamento dos produtos e material biológico mesmo em caso de falha de energia elétrica?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 62"
    },
    {
        id: "15889",
        category: "Geral",
        description: "Possui registro das medições de temperatura no início e fim da operação dos instrumentos com temperatura controlada?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 63"
    },
    {
        id: "15890",
        category: "Geral",
        description: "Para instrumentos de operação contínua, o registro é realizado para monitorar o instrumento durante todo o processo?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 63, parágrafo único"
    },
    {
        id: "15892",
        category: "Geral",
        description: "Registros dos produtos recebidos apresentam dados como lote, conformidade de transporte, data de recebimento e rastreabilidade?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 66, parágrafo único"
    },
    {
        id: "15893",
        category: "Geral",
        description: "Respeita as condições de preservação e validade de reagentes e insumos, sendo vedada revalidação pós-vencimento?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 68"
    },
    {
        id: "15894",
        category: "Geral",
        description: "O serviço define política de controle de acesso, lançamento de dados, liberação de resultados, privacidade e segurança?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 71, Itens I a V"
    },
    {
        id: "15895",
        category: "Geral",
        description: "Realiza gerenciamento de riscos contemplando identificação, análise, monitoramento, investigação de falhas e ações corretivas?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 75, Itens I a IV"
    },
    {
        id: "15896",
        category: "Geral",
        description: "Mantém atualizadas e disponíveis a todos os funcionários instruções escritas de biossegurança (EPI, EPC, acidentes, manuseio)?",
        risk: "maior",
        legislation: "RDC 786/23 Art. 76, Itens I a IV"
    },
    {
        id: "15897",
        category: "Geral",
        description: "Toda a documentação e registros são mantidos e arquivados pelo prazo mínimo de 5 (cinco) anos?",
        risk: "maior",
        legislation: "RDC 786/23 Art. 81"
    },
    {
        id: "15898",
        category: "Geral",
        description: "Mantém atualizados e disponíveis projeto básico, registros de exames, inventário de produtos, relação da equipe e de capacitações?",
        risk: "maior",
        legislation: "RDC 786/23 Art. 83, Itens I a V"
    },
    {
        id: "15899",
        category: "Geral",
        description: "Disponibiliza nos locais de execução de exames procedimentos escritos para registro, liberação de laudos e resultados críticos?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 85, Itens I e II"
    },
    {
        id: "15900",
        category: "Geral",
        description: "Capacitações periódicas contemplam segurança do paciente, riscos inerentes e programa de garantia da qualidade?",
        risk: "maior",
        legislation: "RDC 786/23 Art. 92, Itens I a IV"
    },
    {
        id: "15901",
        category: "Geral",
        description: "Utiliza amostras controle comerciais regularizadas na ANVISA ou amostras obtidas por comparação interlaboratorial para controle interno?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 148"
    },
    {
        id: "15903",
        category: "Geral",
        description: "Realiza controle interno da qualidade (CIQ) no mínimo a cada troca de lote e remessa para exames de leitura visual?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 150"
    },

    // Category: Específico
    {
        id: "15906",
        category: "Específico",
        description: "Está vinculado a laboratório clínico de apoio caso realize exames (EAC) que utilizem instrumentos automatizados para leitura?",
        risk: "critico",
        legislation: "RDC 786/23 Art 10, parágrafo 1º"
    },
    {
        id: "15860",
        category: "Específico",
        description: "Cumpre requisitos de material biológico primário, etapas in loco, instrumento com valor direto e sem preparo de reagente?",
        risk: "critico",
        legislation: "RDC 786/23 Art 10, parágrafo 1º, Itens I a VIII"
    },
    {
        id: "15861",
        category: "Específico",
        description: "Possui cadastro atualizado com o nome do laboratório clínico supervisor (serviço Tipo III) ao qual está vinculado?",
        risk: "maior",
        legislation: "RDC 786/23 Art 10, parágrafo 2º"
    },
    {
        id: "15875",
        category: "Específico",
        description: "Contrato escrito prevê auditorias recíprocas, rastreabilidade de amostras, regramento de fases, e comunicação célere de desvios?",
        risk: "critico",
        legislation: "RDC 786/23 Art 48, Itens I a VIII"
    },
    {
        id: "15881",
        category: "Específico",
        description: "Implementa Programa de Gestão da Qualidade (PGQ) contemplando tecnologias, riscos, documentos, pessoal, processos e controle?",
        risk: "critico",
        legislation: "RDC 786/23 Art 53, Itens I a VI"
    },
    {
        id: "15882",
        category: "Específico",
        description: "O PGQ está documentado e tem sua efetividade monitorada por indicadores sob responsabilidade do RT?",
        risk: "maior",
        legislation: "RDC 786/23 Art. 54"
    },
    {
        id: "15883",
        category: "Específico",
        description: "O serviço compara resultados de indicadores de desempenho por programas ou referências científicas atualizadas?",
        risk: "maior",
        legislation: "RDC 786/23 Art. 54, parágrafo único"
    },
    {
        id: "15887",
        category: "Específico",
        description: "Realiza e mantém registro de manutenção preventiva e corretiva dos instrumentos com frequência mínima anual?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 59, parágrafo 1º"
    },
    {
        id: "15891",
        category: "Específico",
        description: "Mantém instruções de uso dos instrumentos escritas em língua portuguesa (ou manuais do fabricante)?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 65"
    },
    {
        id: "15902",
        category: "Específico",
        description: "Realiza controle interno da qualidade (CIQ) em todos os instrumentos em uso?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 149"
    },
    {
        id: "15904",
        category: "Específico",
        description: "Possui programa de CEQ (Controle Externo de Qualidade) documentado para todos os instrumentos em uso?",
        risk: "critico",
        legislation: "RDC 786/23 Art. 151"
    }
];

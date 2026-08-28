// ROTEIRO DE INSPEÇÃO DE ENDOSCOPIA
const CHECKLIST_ENDOSCOPIA = [
    {
        "id": "1",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Alvará Sanitário atualizado e Responsável Técnico (nível superior) e substituto formalmente designados.",
        "risk": "",
        "legislation": "Art. 10 RDC 63/11; Art. 3º e 5° RDC 6/13; Art. 14, 15 RDC 63/11"
    },
    {
        "id": "2",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Normas, rotinas e POPs (incluindo detalhamento do processamento) atualizados, aprovados e acessíveis à equipe.",
        "risk": "",
        "legislation": "Art. 51 RDC 63/11; Art. 30 RDC 6/13"
    },
    {
        "id": "3",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Capacitação profissional registrada (prevenção infecção, EPI, HM, processamento, resíduos, emergência).",
        "risk": "",
        "legislation": "Art. 14, 15 RDC 6/13; Art. 32 RDC 63/11"
    },
    {
        "id": "4",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Registros diários de procedimentos endoscópicos (com dados completos e rastreabilidade mantida por 5 anos).",
        "risk": "",
        "legislation": "Art. 6º, Inciso I, e Art. 7º RDC 6/13"
    },
    {
        "id": "5",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Registro de intercorrências, eventos adversos e medidas de suporte (guardados por 5 anos) e notificação ao SNVS.",
        "risk": "",
        "legislation": "Art. 6º, II, e Art. 7° RDC 6/13; Art. 9º, 10 RDC 36/13; Art. 62 RDC 63/11"
    },
    {
        "id": "6",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Controle de medicamentos sujeitos a controle especial (guardados sob chave em local exclusivo, registros por 2 anos).",
        "risk": "",
        "legislation": "Art. 6º, III, e Art. 7, 8º RDC 6/13; Art. 64, 65, 67 Portaria 344/98"
    },
    {
        "id": "7",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Registro de acidentes ocupacionais arquivados e mantidos rastreáveis por no mínimo 5 anos.",
        "risk": "",
        "legislation": "Art. 6º, Inciso IV, e Art. 7º RDC 6/13"
    },
    {
        "id": "8",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Manutenção preventiva e corretiva de equipamentos com registros e especificações guardados por 5 anos.",
        "risk": "",
        "legislation": "Art. 7º e 9º RDC 6/13; Art. 23 RDC 63/11; Art. 16 RDC 509/21"
    },
    {
        "id": "9",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Contratos formais e alvarás vigentes dos serviços terceirizados (processamento, controle de pragas, etc.).",
        "risk": "",
        "legislation": "Art. 42 RDC 6/13; Art. 11, 23 RDC 63/11; Art. 12, 13 RDC 156/06"
    },
    {
        "id": "10",
        "category": "I. GESTÃO, DOCUMENTAÇÃO E REGISTROS",
        "description": "Limpeza semestral dos reservatórios de água (registros) e controle documentado da qualidade da água.",
        "risk": "",
        "legislation": "Art. 23, Inciso VI, e Art. 39 RDC 63/2011"
    },
    {
        "id": "11",
        "category": "II. INFRAESTRUTURA FÍSICA, INSTALAÇÕES E EQUIPAMENTOS",
        "description": "Projeto Básico de Arquitetura (PBA) aprovado e ambientes mínimos conforme tipo de serviço (recepção, consulta/exame, processamento, recuperação).",
        "risk": "",
        "legislation": "Art. 18 e 19 da RDC 6/2013"
    },
    {
        "id": "12",
        "category": "II. INFRAESTRUTURA FÍSICA, INSTALAÇÕES E EQUIPAMENTOS",
        "description": "Sala de recuperação acomodando com segurança e conforto o reestabelecimento do paciente (para Tipos II e III).",
        "risk": "",
        "legislation": "Art. 19, 22 e 23 da RDC 6/2013"
    },
    {
        "id": "13",
        "category": "II. INFRAESTRUTURA FÍSICA, INSTALAÇÕES E EQUIPAMENTOS",
        "description": "Manutenção predial preventiva/corretiva das instalações físicas em boas condições de conservação, segurança e limpeza.",
        "risk": "",
        "legislation": "Art. 23, 36 e 42 da RDC 63/2011"
    },
    {
        "id": "14",
        "category": "II. INFRAESTRUTURA FÍSICA, INSTALAÇÕES E EQUIPAMENTOS",
        "description": "Iluminação e ventilação adequadas e compatíveis com o desenvolvimento das atividades.",
        "risk": "",
        "legislation": "Art. 38 da RDC 63/2011"
    },
    {
        "id": "15",
        "category": "II. INFRAESTRUTURA FÍSICA, INSTALAÇÕES E EQUIPAMENTOS",
        "description": "Sistema de energia elétrica de emergência garantindo a continuidade do fornecimento em caso de interrupção.",
        "risk": "",
        "legislation": "Art. 41 da RDC 63/2011"
    },
    {
        "id": "16",
        "category": "II. INFRAESTRUTURA FÍSICA, INSTALAÇÕES E EQUIPAMENTOS",
        "description": "Carro ou maleta de emergência completo (oxímetro, O2, balão auto-inflável, laringoscópio, tubos, desfibrilador, medicamentos).",
        "risk": "",
        "legislation": "Art. 10, 20, 21 RDC 6/13; Art. 53, 58 RDC 63/11"
    },
    {
        "id": "17",
        "category": "II. INFRAESTRUTURA FÍSICA, INSTALAÇÕES E EQUIPAMENTOS",
        "description": "Quantidade suficiente de endoscópios e acessórios para a demanda, respeitando os tempos de processamento.",
        "risk": "",
        "legislation": "Art. 29 RDC 6/13; Art. 17 RDC 63/11; Art. 5º RDC 509/21"
    },
    {
        "id": "18",
        "category": "II. INFRAESTRUTURA FÍSICA, INSTALAÇÕES E EQUIPAMENTOS",
        "description": "Sala/área de processamento com cuba profunda, bancada lisa e impermeável, ponto de água potável e ar comprimido medicinal/filtrado.",
        "risk": "",
        "legislation": "Art. 18, 24, 25 e 28 da RDC 6/2013"
    },
    {
        "id": "19",
        "category": "II. INFRAESTRUTURA FÍSICA, INSTALAÇÕES E EQUIPAMENTOS",
        "description": "Sistema de climatização da sala de processamento com exaustão forçada para exterior, pressão negativa e PMOC atualizado.",
        "risk": "",
        "legislation": "Art. 26 RDC 6/13; Portaria 3523/98; Lei 13589/18"
    },
    {
        "id": "20",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Pré-limpeza do endoscópio realizada imediatamente após o exame (remoção de sujidade externa e irrigação dos canais).",
        "risk": "",
        "legislation": "Art. 31, parágrafo único, da RDC 6/2013"
    },
    {
        "id": "21",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Limpeza completa e secagem prévia à desinfecção/esterilização, com saneantes hospitalares regularizados na ANVISA.",
        "risk": "",
        "legislation": "Art. 32 a 35 RDC 6/13; RDC 59/10; RDC 14/07"
    },
    {
        "id": "22",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Limpeza de produtos de conformação complexa precedida por limpeza manual e complementada por automatizada (ex: ultrassônica).",
        "risk": "",
        "legislation": "Art. 41 da RDC 6/2013"
    },
    {
        "id": "23",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Desinfecção de alto nível no tempo adequado, com monitoramento diário dos parâmetros indicadores (efetividade/pH) e registro (5 anos).",
        "risk": "",
        "legislation": "Art. 36 e 37 da RDC 6/2013; Art. 57 da RDC 63/2011"
    },
    {
        "id": "24",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Esterilização dos acessórios e produtos críticos antes do uso (proibido imersão química manual ou estufa).",
        "risk": "",
        "legislation": "Art. 42, 50 e 52 da RDC 6/2013; Art. 57 RDC 63/2011"
    },
    {
        "id": "25",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Embalagens para esterilização regularizadas na ANVISA e seladas em termoseladora (envelopes).",
        "risk": "",
        "legislation": "Art. 43, 44 e 46 da RDC 6/2013"
    },
    {
        "id": "26",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Identificação clara nas embalagens esterilizadas (nome, data de esterilização, validade, método e responsável).",
        "risk": "",
        "legislation": "Art. 47 e 48 da RDC 6/2013"
    },
    {
        "id": "27",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Endoscópios flexíveis armazenados em posição vertical com preservação de alinhamento das extremidades.",
        "risk": "",
        "legislation": "Art. 38 da RDC 6/2013"
    },
    {
        "id": "28",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Produtos esterilizados armazenados em local limpo, seco, protegidos de luz solar direta e com mínima manipulação.",
        "risk": "",
        "legislation": "Art. 51 da RDC 6/2013"
    },
    {
        "id": "29",
        "category": "III. PROCESSAMENTO DE PRODUTOS PARA SAÚDE E MATERIAIS",
        "description": "Transporte de endoscópios entre salas em recipientes laváveis com tampas diferenciadas e identificadas (sujo vs. limpo).",
        "risk": "",
        "legislation": "Art. 39 da RDC 6/2013"
    },
    {
        "id": "30",
        "category": "IV. ASSISTÊNCIA, SEGURANÇA DO PACIENTE E BIOSSEGURANÇA",
        "description": "Presença de profissional habilitado para a realização dos procedimentos de endoscopia.",
        "risk": "",
        "legislation": "Art. 16, Inciso I, da RDC 6/2013"
    },
    {
        "id": "31",
        "category": "IV. ASSISTÊNCIA, SEGURANÇA DO PACIENTE E BIOSSEGURANÇA",
        "description": "Presença de profissional habilitado para sedação profunda/anestesia não tópica, monitorando o paciente até a sala de recuperação.",
        "risk": "",
        "legislation": "Art. 16, Inciso II, da RDC 6/2013"
    },
    {
        "id": "32",
        "category": "IV. ASSISTÊNCIA, SEGURANÇA DO PACIENTE E BIOSSEGURANÇA",
        "description": "Dimensionamento da equipe multiprofissional compatível com a demanda e perfil do atendimento.",
        "risk": "",
        "legislation": "Art. 17, 29 e 30 da RDC 63/2011"
    },
    {
        "id": "33",
        "category": "IV. ASSISTÊNCIA, SEGURANÇA DO PACIENTE E BIOSSEGURANÇA",
        "description": "Disponibilidade e uso correto de EPIs completos no processamento (gorro, óculos/protetor facial, máscara, luvas de borracha cano longo, avental impermeável, protetor auricular, calçados impermeáveis). Proibido sair do local vestindo EPI.",
        "risk": "",
        "legislation": "Art. 47 e 50 da RDC 63/2011; Art. 56 da RDC 6/2013"
    },
    {
        "id": "34",
        "category": "IV. ASSISTÊNCIA, SEGURANÇA DO PACIENTE E BIOSSEGURANÇA",
        "description": "Protocolo de Higienização das Mãos (HM) implantado, lavatórios com insumos (sabão líquido, papel toalha) e dispensadores de preparação alcoólica nos pontos de assistência. Produtos regularizados na ANVISA.",
        "risk": "",
        "legislation": "Art. 5º, 6º RDC 42/10; Art. 8°, 59 RDC 63/11; Portaria 1377/13; RDC 36/13"
    },
    {
        "id": "35",
        "category": "IV. ASSISTÊNCIA, SEGURANÇA DO PACIENTE E BIOSSEGURANÇA",
        "description": "Orientação aos pacientes (verbal e escrita) sobre procedimentos/riscos; liberação sob sedação apenas com acompanhante adulto (ou responsável legal se menor/incapaz).",
        "risk": "",
        "legislation": "Art. 11, 12 e 13 da RDC 6/2013"
    },
    {
        "id": "36",
        "category": "IV. ASSISTÊNCIA, SEGURANÇA DO PACIENTE E BIOSSEGURANÇA",
        "description": "Preparação para estabilização de emergências e protocolo de transferência segura para serviço de urgência (com acompanhamento habilitado e relatório assinado).",
        "risk": "",
        "legislation": "Art. 10 da RDC 6/2013; Art. 19 da RDC 63/2011"
    },
    {
        "id": "37",
        "category": "IV. ASSISTÊNCIA, SEGURANÇA DO PACIENTE E BIOSSEGURANÇA",
        "description": "Plano de Gerenciamento de Resíduos de Serviços de Saúde (PGRSS) implementado, com contrato e licença ambiental vigentes da empresa de destinação.",
        "risk": "",
        "legislation": "Art. 23 RDC 63/11; Art. 2º, 5º, 6º RDC 222/2018"
    }
];

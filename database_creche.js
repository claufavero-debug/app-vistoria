// ROTEIRO DE VISTORIA SANITÁRIA - EDUCAÇÃO INFANTIL (CRECHE)
const CHECKLIST_CRECHE = [
    // Category: Infraestrutura
    {
        id: "12323",
        category: "Infraestrutura",
        description: "A escola não possui comunicação/acesso ou espaços de uso comum com domicílio particular ou estabelecimento comercial?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 49 § 3º"
    },
    {
        id: "11064",
        category: "Infraestrutura",
        description: "A fiação elétrica é protegida e devidamente embutida?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 item 7.2 C/C DM 5616/87 Art.70 Inc VI"
    },
    {
        id: "1699",
        category: "Infraestrutura",
        description: "A escola possui sistema de proteção em janelas, aberturas e escadas (grades/redes) de forma a garantir a segurança das crianças?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 11.a"
    },
    {
        id: "10196",
        category: "Infraestrutura",
        description: "Possui pisos, paredes, revestimentos e divisórias, feitos de materiais lisos, laváveis, impermeáveis e íntegos?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 10.1.a"
    },
    {
        id: "1704",
        category: "Infraestrutura",
        description: "Os vidros de portas ou painéis, que chegam até 0,50m do piso, são do tipo não estilhaçável e possuem proteção contra quebras?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 11. e"
    },
    {
        id: "10197",
        category: "Infraestrutura",
        description: "A iluminação e ventilação são suficientes e se encontram em condições adequadas?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 7.2 C/C DM 5616/87 Art.70 inc VI"
    },
    {
        id: "4208",
        category: "Infraestrutura",
        description: "Possui sistema de abastecimento de água ligado à rede pública?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 83"
    },
    {
        id: "10846",
        category: "Infraestrutura",
        description: "A rede de esgoto está ligada à rede oficial e se encontra em perfeitas condições de funcionamento?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 83"
    },
    {
        id: "11088",
        category: "Infraestrutura",
        description: "As redes de esgotos, fossa (quando existentes) e caixas de gordura estão em bom estado de conservação e funcionamento?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 85"
    },
    {
        id: "11214",
        category: "Infraestrutura",
        description: "Possui ralos com sistema \"abre e fecha\", mantendo-os fechados quando não estiverem sendo usados?",
        risk: "menor",
        legislation: "DM 5616/96 Art. 70 Inc.V C/C LM 7031/96 Art. 91"
    },
    {
        id: "11197",
        category: "Infraestrutura",
        description: "Possui filtros/bebedouros para água que atendam a demanda sendo vedado o uso de jato inclinado?",
        risk: "critico",
        legislation: "DM 5616/87 art. 76 Inc. VIII"
    },
    {
        id: "2092",
        category: "Infraestrutura",
        description: "Possui instalações sanitárias completas, adequadas e suficientes para atender aos funcionários da creche?",
        risk: "critico",
        legislation: "DM 5616/87 Art. 152 § 1º E Art. 78 Inc. III, IV e V"
    },
    {
        id: "11111",
        category: "Infraestrutura",
        description: "Existe armário para guarda de vestuário e bens pessoais dos funcionários?",
        risk: "menor",
        legislation: "DM 5616/87 Art. 80 VI"
    },
    {
        id: "11205",
        category: "Infraestrutura",
        description: "Possui local para guardar, de forma individual, os materiais de higiene, banho e sono das crianças?",
        risk: "menor",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 51 Inc. V"
    },
    {
        id: "10198",
        category: "Infraestrutura",
        description: "Possui lavanderia dotada de equipamentos adequados?",
        risk: "menor",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 9.4.4"
    },
    {
        id: "10199",
        category: "Infraestrutura",
        description: "As creches de pequeno porte (até 50 crianças) possuem armário para guarda da roupa limpa e as de médio e grande porte (acima de 50 crianças) possuem uma sala para guarda da referida roupa?",
        risk: "menor",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 9.4.5"
    },
    {
        id: "5769",
        category: "Infraestrutura",
        description: "O depósito de material de limpeza (DML) possui área suficiente e encontra-se limpo e organizado?",
        risk: "menor",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 50 Inc. XIV"
    },
    {
        id: "2511",
        category: "Infraestrutura",
        description: "Existe um recinto ou armário para a guarda do material de limpeza utilizado na instituição fora do alcance das crianças?",
        risk: "menor",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 art. 50 Inc. XIV"
    },
    {
        id: "10107",
        category: "Infraestrutura",
        description: "O estabelecimento se encontra livre de condições que propiciem alimentação, proliferação ou abrigo de animais sinantrópicos?",
        risk: "critico",
        legislation: "LM 7031/96 art. 91 C/C RESOLUÇÃO CME/BH N° 001/2015 Art. 50 Inc. XIV"
    },
    {
        id: "11337",
        category: "Infraestrutura",
        description: "Existem lixeiras íntegras em quantidade suficiente, constituídas de material lavável, providas de saco plástico na cor adequada e de tampas acionadas sem contato manual e devidamente identificadas com descrição e symbologia?",
        risk: "maior",
        legislation: "DM 16.509/16 ANEXO I Item 2.5"
    },

    // Category: Berçário (0 a 1 ano)
    {
        id: "1710",
        category: "Berçário (0 a 1 ano)",
        description: "O berçário respeita os seguintes limites: área mínima de 2,50 m² por berço, acomodação máxima de 15 crianças e distância mínima entre os berços e entre esses e as paredes de 0,50m?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 9.3.1 \"A\", \"B\" e \"E\""
    },
    {
        id: "2358",
        category: "Berçário (0 a 1 ano)",
        description: "As janelas do berçário, sala de repouso, lavanderia e quarto de observação se encontram teladas?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 10.1"
    },
    {
        id: "1716",
        category: "Berçário (0 a 1 ano)",
        description: "O berçário possui espaços exclusivos para banhos de sol, com acesso que permita o trânsito de carrinhos de bebê?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 item 9.3.2 C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 51 Inc. III"
    },
    {
        id: "10432",
        category: "Berçário (0 a 1 ano)",
        description: "Todos os móveis almofadados, incluindo os colchões e colchonetes, estão revestidos de material lavável e impermeável, com todas as faces íntegras?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 51 Inc.VII"
    },

    // Category: Fraldário e Lactário
    {
        id: "12452",
        category: "Fraldário e Lactário",
        description: "Possui bancada para trocas de fraldas, com dimensões mínimas de 100cm x 80cm e altura em torno de 85cm acompanhada de colchonete, sendo disponibilizados pia, álcool 70% e papel toalha?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 51, VII, §3º"
    },
    {
        id: "12453",
        category: "Fraldário e Lactário",
        description: "Possui banheira contígua à bancada para troca de fraldas, com ducha de água quente e fria, para crianças de 0 a 1 ano?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 51 Inc.VII E §4º"
    },
    {
        id: "12454",
        category: "Fraldário e Lactário",
        description: "Possui alteamento de 40 centímetros para o local de banho das crianças de 1 a 2 anos?",
        risk: "menor",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 51 Inc.VIII E §5º"
    },
    {
        id: "2434",
        category: "Fraldário e Lactário",
        description: "Possui lactário destinado à limpeza, preparo, esterilização, guarda e distribuição das mamadeiras?",
        risk: "critico",
        legislation: "LM 7031 Art. 97 Inc. II"
    },
    {
        id: "12440",
        category: "Fraldário e Lactário",
        description: "Possui geladeira exclusiva para armazenamento de mamadeiras?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 9.4.1"
    },

    // Category: Salas e Sanitários
    {
        id: "12438",
        category: "Salas e Sanitários",
        description: "As salas de atividades garantem um mínimo de 1m² por criança, com ventilação direta e iluminação natural, que possa ser contemplada com a artificial?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 50 Inc.IV"
    },
    {
        id: "1707",
        category: "Salas e Sanitários",
        description: "As salas de atividades possuem: número máximo de crianças adequado, acesso direto com o exterior e estantes seguras ou armários para guarda de material?",
        risk: "menor",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 itens 9.3.3 \"b\", \"c\" e \"e\""
    },
    {
        id: "12439",
        category: "Salas e Sanitários",
        description: "Possui sala multiuso para atividades diferenciadas, com equipamentos e acessórios adequados?",
        risk: "menor",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 50 Inc. XV"
    },
    {
        id: "1706",
        category: "Salas e Sanitários",
        description: "Possui recreio descoberto, com área verde e a instalação de equipamentos de recreação (balanços, escorregas, caixas de areia etc.)?",
        risk: "menor",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RDC 321/88 Item 9.3.7 E 9.3.6 ABNT e parâmetros de infraestrutura para educação infantil"
    },
    {
        id: "2093",
        category: "Salas e Sanitários",
        description: "As portas dos sanitários individuais das crianças são isentas de chaves e trincos?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 50 Inc.X"
    },
    {
        id: "11057",
        category: "Salas e Sanitários",
        description: "A instalação sanitária infantil possui: um vaso sanitário para cada 20 crianças; um lavatório com altura de 60cm para cada 20 crianças; chuveiros para banho que atendam a rotina?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C RESOLUÇÃO CME/BH Nº 001/2015 Art. 50 Inc.X de \"a\" a \"c\""
    },

    // Category: Equipamentos e Medicamentos
    {
        id: "4225",
        category: "Equipamentos e Medicamentos",
        description: "Ausência de focos de insalubridade (lixo, água estagnada, insetos, roedores) nas dependências do estabelecimento e condições para infestação de pragas?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 91"
    },
    {
        id: "11187",
        category: "Equipamentos e Medicamentos",
        description: "Possui bebedouros de jato inclinado, proibida sua localização em instalações sanitárias?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C DM 5616/87 Art. 154 C/C Parecer Técnico COMCIRA"
    },
    {
        id: "11167",
        category: "Equipamentos e Medicamentos",
        description: "Os produtos de limpeza possuem registro no Ministério da Saúde ou ANVISA?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C DF 79094/77 Reg. LF 6360/76 Art. 14"
    },
    {
        id: "5032",
        category: "Equipamentos e Medicamentos",
        description: "Os medicamentos são armazenados em local seguro, devidamente identificado e de acesso restrito a funcionários?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C LF 5991/73 Orientação SMSA/SMED"
    },

    // Category: Procedimentos
    {
        id: "5033",
        category: "Procedimentos",
        description: "A medicação é feita exclusivamente sob prescrição médica?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C LF 5991/73 Art. 6º"
    },
    {
        id: "5030",
        category: "Procedimentos",
        description: "É respeitada a proibição de criação e/ou conservação de animais, que pela sua natureza ou quantidade sejam causa de insalubridade e/ou incomodidade?",
        risk: "maior",
        legislation: "DM 5616/87 Art. 183"
    },
    {
        id: "10194",
        category: "Procedimentos",
        description: "As áreas internas e externas do estabelecimento se encontram livres de objetos em desuso ou estranhos ao ambiente?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 91 C/C DM 5616/87 Art. 70 Inc XIV"
    },
    {
        id: "11336",
        category: "Procedimentos",
        description: "É feita a segregação dos resíduos no local e momento de sua geração?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 97 Inc. II C/C RDC 222/18 Art.11"
    },
    {
        id: "14078",
        category: "Procedimentos",
        description: "Exige o uso de máscara em ambientes fechados (conforme regramento vigente)?",
        risk: "informativo",
        legislation: "DM 17992/2022 C/C PM 0375/2022"
    },

    // Category: Recursos Humanos
    {
        id: "543",
        category: "Recursos Humanos",
        description: "Os funcionários da limpeza e processamento usam EPIs obrigatórios (luvas, calçado fechado impermeável, avental impermeável, óculos)?",
        risk: "maior",
        legislation: "LM 7031/96 Art. 73 Inciso V"
    },

    // Category: Documentação
    {
        id: "6955",
        category: "Documentação",
        description: "As atividades constantes do Alvará de Localização e Ficha Cadastral coincidem com as atividades exercidas no local?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 19"
    },
    {
        id: "7615",
        category: "Documentação",
        description: "Há registros de limpeza e manutenção preventiva/corretiva incluindo a troca de filtros dos bebedouros?",
        risk: "critico",
        legislation: "DM 5616/87 Art. 154"
    },
    {
        id: "531",
        category: "Documentação",
        description: "Possui comprovante de higienização dos reservatórios de água com intervalo máximo de seis meses?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc.V C/C DM 5616/87 Art. 5º"
    },
    {
        id: "2270",
        category: "Documentação",
        description: "Existem medidas preventivas e corretivas de controle de pragas executado por empresa com alvará sanitário?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc.V C/C LM 7031/96 Art. 91"
    },
    {
        id: "13818",
        category: "Documentação",
        description: "O estabelecimento apresentou comprovação de análise do Plano de Manutenção, Operação e Controle (PMOC) e laudos de qualidade do ar?",
        risk: "critico",
        legislation: "LM 7031/96 Art. 97 Inc. V C/C PF 3523/98; Anvisa 09/2003"
    },

    // Category: Tabagismo
    {
        id: "7055",
        category: "Tabagismo",
        description: "Atende à obrigatoriedade de afixação e manutenção de avisos/cartazes alusivos à proibição do tabagismo em local visível?",
        risk: "menor",
        legislation: "LE 12.903/98 Art. 4"
    },
    {
        id: "8503",
        category: "Tabagismo",
        description: "Respeita a proibição do uso de produtos fumígenos em recinto público ou privado coletivo, total ou parcialmente fechado?",
        risk: "maior",
        legislation: "DF 8.262/14 Art. 3"
    }
];

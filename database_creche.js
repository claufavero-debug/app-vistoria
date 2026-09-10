// ROTEIRO DE INSPEÇÃO EDUCAÇÃO INFANTIL (CRECHE)
const CHECKLIST_CRECHE = [
    {
        "id": "1",
        "category": "DOCUMENTAÇÃO",
        "description": "Projetos físicos aprovados e arquivados pela gerência para consulta.",
        "risk": "",
        "legislation": "Item 3.4.1 / 4.1, Res. SESA 162/05"
    },
    {
        "id": "2",
        "category": "DOCUMENTAÇÃO",
        "description": "Certificado do Corpo de Bombeiros.",
        "risk": "",
        "legislation": "Item 4.6 / Infra 6 e 7, Res. SESA 162/05"
    },
    {
        "id": "3",
        "category": "DOCUMENTAÇÃO",
        "description": "Limpeza/desinfecção semestral do reservatório de água e bebedouro.",
        "risk": "",
        "legislation": "Saúde 9, Res. SESA 162/05"
    },
    {
        "id": "4",
        "category": "DOCUMENTAÇÃO",
        "description": "Certificado de controle de pragas.",
        "risk": "",
        "legislation": "Art. 320, Decr. Est. 5711/02"
    },
    {
        "id": "5",
        "category": "DOCUMENTAÇÃO",
        "description": "Comprovante de contratação de Responsável Técnico (RT) em Nutrição.",
        "risk": "",
        "legislation": "Item 4.8 / Saúde 23, Res. SESA 162/05"
    },
    {
        "id": "6",
        "category": "DOCUMENTAÇÃO",
        "description": "Capacitações contínuas (manipulação alim., 1º socorros).",
        "risk": "",
        "legislation": "Manipuladores (Item 4) Res. SESA 162/05, Item 4.6.7, RDC 216/04 e Lei 13722/18"
    },
    {
        "id": "7",
        "category": "DOCUMENTAÇÃO",
        "description": "Certificado de limpeza do ar condicionado (PMOC).",
        "risk": "",
        "legislation": "Saúde 4 da Res. SESA 162/05, Lei 13589/18 e Port. MS 3523/98"
    },
    {
        "id": "8",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Pátio Descoberto (3,0m²/criança, 30% turno), drenado declividade para escoamento de água de chuva",
        "risk": "",
        "legislation": "Tab. Pátios, Res. SESA 162/05"
    },
    {
        "id": "9",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Pátio Coberto (2,0m²/criança, 30% turno), boa ventilação",
        "risk": "",
        "legislation": "Tab. Pátios, Res. SESA 162/05"
    },
    {
        "id": "10",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Circulação (corredores, rampas, escadas) com 1,50m de largura, antiderrapante, corrimão/guarda-corpo.",
        "risk": "",
        "legislation": "Circulação (Itens 1-3), Res. SESA 162/05"
    },
    {
        "id": "11",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Iluminação natural e artificial em condições adequadas",
        "risk": "",
        "legislation": "Padrão Salas / Infra 5, Res. SESA 162/05"
    },
    {
        "id": "12",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Ventilação natural e cruzada em condições adequadas",
        "risk": "",
        "legislation": "Padrão Salas (Item 5), Res. SESA 162/05"
    },
    {
        "id": "13",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Portas com dimensão mínima (0,80x2,10m) e acionamento seguro - Proibida maçaneta de bola.",
        "risk": "",
        "legislation": "Padrão Salas (Item 7 e 9), Res. SESA 162/05"
    },
    {
        "id": "14",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Janelas com peitoril mínimo de 0,70m, ventarola superior e proteção contra quedas (1º pav.).",
        "risk": "",
        "legislation": "Padrão Salas (Item 6 e 8), Res. SESA 162/05"
    },
    {
        "id": "15",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Instalações elétricas embutidas, íntegras, aterradas e protegidas contra acidentes.",
        "risk": "",
        "legislation": "Padrão Salas / Infra 5, Res. SESA 162/05"
    },
    {
        "id": "16",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Pisos íntegros, contínuos, laváveis, antiderrapantes - Proibido carpete/forração.",
        "risk": "",
        "legislation": "Padrão Salas (Item 10), Res. SESA 162/05"
    },
    {
        "id": "17",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Paredes lisas e laváveis - Proibida parede de vidro (exceto tijolo de vidro).",
        "risk": "",
        "legislation": "Padrão Salas (Item 11), Res. SESA 162/05"
    },
    {
        "id": "18",
        "category": "INFRAESTRUTURA GERAL E EDIFICAÇÃO",
        "description": "Tetos em laje ou forro contínuo de cor clara - Proibido forro treliçado.",
        "risk": "",
        "legislation": "Padrão Salas (Item 12), Res. SESA 162/05"
    },
    {
        "id": "19",
        "category": "INFRAESTRUTURA DAS SALAS",
        "description": "Berçário I e II (0-2 anos): dimensionamento mínimo de 2,20 m² por criança.",
        "risk": "",
        "legislation": "Tab. Berçário I e II, Res. SESA 162/05"
    },
    {
        "id": "20",
        "category": "INFRAESTRUTURA DAS SALAS",
        "description": "Solário anexo aos berçários (2,50m²/criança, máx. 30%), lavável, drenado, sem plantas.",
        "risk": "",
        "legislation": "Berçário I (Item 16), Res. SESA 162/05"
    },
    {
        "id": "21",
        "category": "INFRAESTRUTURA DAS SALAS",
        "description": "Salas de Maternais e Pré-Escolas: dimensionamento mínimo de 1,50 m² por criança.",
        "risk": "",
        "legislation": "Tab. Maternais e Pré-Esc., Res. SESA 162/05"
    },
    {
        "id": "22",
        "category": "INFRAESTRUTURA DAS SALAS",
        "description": "Lavatório (Berçário II ao Pré II) adaptado à altura das crianças",
        "risk": "",
        "legislation": "Padrão Salas (lavatórios), Res. SESA 162/05"
    },
    {
        "id": "23",
        "category": "INFRAESTRUTURA DAS SALAS",
        "description": "Mobiliários íntegros, sem arestas/cantos vivos, laváveis e adequados à faixa etária (colchonetes/ caminha empilhável).",
        "risk": "",
        "legislation": "Padrão Salas (Item 15), Res. SESA 162/05"
    },
    {
        "id": "24",
        "category": "INFRAESTRUTURA DAS SALAS",
        "description": "Espelhos bem fixados, sem reflexo direto e inteiros em todas as salas.",
        "risk": "",
        "legislation": "Infra 18, Res. SESA 162/05"
    },
    {
        "id": "25",
        "category": "INSTALAÇÕES SANITÁRIAS E HIGIENE INFANTIL",
        "description": "Sanitário Berçário: anexo, 1 vaso/40 cçs, 1 lavatório/40 cçs, 1 trocador impermeável (1,10m) + 1 cuba/20 cçs, 1 chuveiro/20 cçs.",
        "risk": "",
        "legislation": "Sanitário Berçário, Res. SESA 162/05"
    },
    {
        "id": "26",
        "category": "INSTALAÇÕES SANITÁRIAS E HIGIENE INFANTIL",
        "description": "Sanitário Maternais: anexo/próximo, box sanitário sem porta, 1 vaso adaptado/15 cçs (mín. 2 vasos) , 1 lavatório/15 cçs (mín. 2 lav.).",
        "risk": "",
        "legislation": "Sanitário Maternal, Res. SESA 162/05"
    },
    {
        "id": "27",
        "category": "INSTALAÇÕES SANITÁRIAS E HIGIENE INFANTIL",
        "description": "Sanitário Pré: separado por sexo, box sanitário com porta e sem trinco, 1 vaso adaptado/15 cçs (mín. 2 vasos) , 1 lavatório/15 cçs (mín. 2 lav.).",
        "risk": "",
        "legislation": "Sanitários Pré, Res. SESA 162/05"
    },
    {
        "id": "28",
        "category": "INSTALAÇÕES SANITÁRIAS E HIGIENE INFANTIL",
        "description": "Insumos de higiene: sabonete líquido, toalha descartável, lixeira com tampa/pedal",
        "risk": "",
        "legislation": "Infra 10/Saúde 7 e 10, Res. SESA 162/05"
    },
    {
        "id": "29",
        "category": "INSTALAÇÕES SANITÁRIAS E HIGIENE INFANTIL",
        "description": "Sanitários de funcionários: separados por sexo (1 vaso/40 func.), chuveiro quente para manipuladores (1/20 func.).",
        "risk": "",
        "legislation": "Sanitário Funcionários, Res. SESA 162/05"
    },
    {
        "id": "30",
        "category": "INSTALAÇÕES SANITÁRIAS E HIGIENE INFANTIL",
        "description": "Sanitário adaptado (PNE/PCD)",
        "risk": "",
        "legislation": "Res. SESA 1891/24 e NBR 9050"
    },
    {
        "id": "31",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Acesso direto e independente, sem comunicação com outras dependências que não façam parte da cozinha",
        "risk": "",
        "legislation": "Preparo local (Item 2) Res. SESA 162/05 e Item 4.1.1 RDC 216/04"
    },
    {
        "id": "32",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Espaço adequado, com fluxo único, sem cruzamento de áreas.",
        "risk": "",
        "legislation": "Preparo local (Item 4) Res. SESA 162/05 e Item 4.1.2 RDC 216/04"
    },
    {
        "id": "33",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Portas e janelas teladas nas aberturas externas, de fácil limpeza, com portas providas de fechamento automático",
        "risk": "",
        "legislation": "Preparo local (Item 9) Res. SESA 162/05 e Item 4.1.4 RDC 216/04"
    },
    {
        "id": "34",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Guichê de distribuição (opcional) e abertos somente no momento da distribuição",
        "risk": "",
        "legislation": "Preparo local (Item 16) Res. SESA 162/05"
    },
    {
        "id": "35",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Iluminação com boa visibilidade, sem zonas de sombra",
        "risk": "",
        "legislation": "Preparo local (Item 10) Res. SESA 162/05 e Item 4.1.8 RDC 216/04"
    },
    {
        "id": "36",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Ventilação boa (evita a condensação de vapores) - Possui equipamento de ventilação e exaustão.",
        "risk": "",
        "legislation": "Preparo local (Item 11) Res. SESA 162/05 e Item 4.1.10 RDC 216/04"
    },
    {
        "id": "37",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Pia exclusiva para lavagem das mãos dos manipuladores c/ sabão líquido, toalha descartável e escova de unhas.",
        "risk": "",
        "legislation": "Saúde 8, Res. SESA 162/05 e Item 4.1.14, RDC 216/04"
    },
    {
        "id": "38",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Mobiliário em quantidade suficiente, de superfície lisa, impermeável e lavável",
        "risk": "",
        "legislation": "Preparo local-equipamentos (Item 3) Res. SESA 162/05 e Item 4.1.15 RDC 216/04"
    },
    {
        "id": "39",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Utensílios em bom estado de conservação, limpos, e conservado",
        "risk": "",
        "legislation": "Saúde 16 e preparo local-equipamentos (Item 2) Res. SESA 162/05 e Item 4.1.15 RDC 216/04"
    },
    {
        "id": "40",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Despensa arejada, boa iluminação, tela nas janelas e portas, com estrado ou prateleiras de fácil limpeza",
        "risk": "",
        "legislation": "Preparo local-equipamentos (Item 5) Res. SESA 162/05 e Item 4.7.6 RDC 216/04"
    },
    {
        "id": "41",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Refeitório: 1,00 m²/criança (ou sala de uso múltiplo 1,50m²), 1 lavatório/30 cçs, mobília compatível.",
        "risk": "",
        "legislation": "Refeitório/ Uso Múltiplo, Res. SESA 162/05"
    },
    {
        "id": "42",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Lactário próximo ao berçário, acesso independente, tela milimétrica nas janelas e portas (fechamento automático). Área mínima com fluxo único (sem cruzamento de áreas).",
        "risk": "",
        "legislation": "Lactário, Res. SESA 162/05"
    },
    {
        "id": "43",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Lactário tem a descrição do preparo da fórmula láctea com registro de horários e consumo, higienização/desinfecção das mamadeiras",
        "risk": "",
        "legislation": "Alimentos (Item 13, 14 e 15), Res. SESA 162/05"
    },
    {
        "id": "44",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Matéria-prima em boas condições, embalagem e rotulagem adequadas",
        "risk": "",
        "legislation": "Alimentos (Item 1 e 2) Res. SESA 162/05 e Item 4.7.3 e 4.7.5, RDC 216/04"
    },
    {
        "id": "45",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Lavagem de hortifruti em água corrente e imersão em solução desinfetante (conforme instrução do fabricante - diluição e tempo de contato).",
        "risk": "",
        "legislation": "Alimentos (Item 6) Res. SESA 162/05 e Item 4.8.19, RDC 216/04"
    },
    {
        "id": "46",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Descongelamento sob refrigeração",
        "risk": "",
        "legislation": "Alimentos (Item 8) Res. SESA 162/05 e Item 4.8.13 RDC 216/04"
    },
    {
        "id": "47",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Sobras de alimentos com descarte imediato",
        "risk": "",
        "legislation": "Alimentos (Item 9) Res. SESA 162/05"
    },
    {
        "id": "48",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Amostra controle de 200 g dos alimentos preparados, conservados sob refrigeração por 72 horas - Identificação do produto, data da produção e horário",
        "risk": "",
        "legislation": "Alimentos (Item 10) Res. SESA 162/05"
    },
    {
        "id": "49",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Manipuladores com bom asseio pessoal e uso de uniforme e EPIs",
        "risk": "",
        "legislation": "Manipuladores (Item 1) Res. SESA 162/05 e Item 4.6.3 e 4.6.6, RDC 216/04"
    },
    {
        "id": "50",
        "category": "INFRAESTRUTURA - ÁREA DE MANIPULAÇÃO, REFEITÓRIO, LACTÁRIO, ALIMENTOS E MANIPULADORES",
        "description": "Refeição tercerizada - deve apresentar Licença Sanitária",
        "risk": "",
        "legislation": "Controle qualidade (Item 1) Res. SESA 162/05"
    },
    {
        "id": "51",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Sala multiplo uso e/ou biblioteca",
        "risk": "",
        "legislation": "Sala multiplo, biblioteca Res. SESA 162/05"
    },
    {
        "id": "52",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Diretoria e sala de professores",
        "risk": "",
        "legislation": "Diretoria, sala de professores Res. SESA 162/05"
    },
    {
        "id": "53",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Enfermaria",
        "risk": "",
        "legislation": "Opcional, res. SESA 162/05"
    },
    {
        "id": "54",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Espaço de amamentação",
        "risk": "",
        "legislation": "Berçario I (Item 15) Res. SESA 162/05"
    },
    {
        "id": "55",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Almoxarifado/Sala para material pedagógico",
        "risk": "",
        "legislation": "Infra 11 Res. SESA 162/05"
    },
    {
        "id": "56",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "DML (Depósito de Material de Limpeza): mínimo 1 unidade, com tanque, ventilação e acesso restrito.",
        "risk": "",
        "legislation": "Tab. DML, Res. SESA 162/05"
    },
    {
        "id": "57",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Lavanderia com fluxo unidirecional (sem cruzamento de roupa suja/limpa) e produtos registrados no MS.",
        "risk": "",
        "legislation": "Infra 13 e Saúde 3, Res. SESA 162/05"
    },
    {
        "id": "58",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Abastecimento de água e esgoto ligada à rede pública",
        "risk": "",
        "legislation": "Infra 1 e 2, Res. SESA 162/05"
    },
    {
        "id": "59",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Abrigo de resíduos tipo cabine ou container e separado por categoria (reciclável e não reciclável)",
        "risk": "",
        "legislation": "Tab. Abrigo de Resíduos, Res. SESA 162/05"
    },
    {
        "id": "60",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Caixa de areia coberta com plástico após uso e manutenção registrada a cada 6 meses.",
        "risk": "",
        "legislation": "Infra 16/Saúde 13, Res. SESA 162/05"
    },
    {
        "id": "61",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Plantas tóxicas ausente",
        "risk": "",
        "legislation": "Saúde 6, Res. SESA 162/05"
    },
    {
        "id": "62",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Medicamentos armazenado em local seguro, identificados e administrado com receita médica, por pessoa capacitada.",
        "risk": "",
        "legislation": "Saúde 22, Res. SESA 162/05"
    },
    {
        "id": "63",
        "category": "OUTRAS INFRAESTRUTURAS",
        "description": "Caixa de gordura em bom estado de conservação e perfeito funcionamento.",
        "risk": "",
        "legislation": "Infra 4 e Saúde 15, Res. SESA 162/05"
    }
];

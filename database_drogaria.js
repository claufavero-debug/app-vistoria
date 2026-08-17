// ROTEIRO DE INSPEÇÃO PARA COMÉRCIO VAREJISTA DE PRODUTOS FARMACÊUTICOS SEM MANIPULAÇÃO DE FÓRMULAS
const CHECKLIST_DROGARIA = [
    // ==========================================================================
    // INFRA - ESTRUTURA
    // ==========================================================================
    {
        id: "6127",
        category: "INFRA - ESTRUTURA",
        description: `POSSUI AMBIENTE PARA:\nOpções:\n*ATIVIDADES ADMINISTRATIVAS\n*RECEBIMENTO E ARMAZENAMENTO DOS PRODUTOS\n*DISPENSAÇÃO DE MEDICAMENTOS\n*DEPÓSITO DE MATERIAL DE LIMPEZA E SANITÁRIO (NÃO SE APLICA A SHOPPING E AFINS)`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 5`
    },
    {
        id: "6158",
        category: "INFRA - ESTRUTURA",
        description: `INEXISTEM EM QUALQUER DEPENDÊNCIA DA FARMÁCIA OU DROGARIA OUTROS SERVIÇOS DIVERSOS DO LICENCIAMENTO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 90`
    },
    {
        id: "361",
        category: "INFRA - ESTRUTURA",
        description: `AS ÁREAS INTERNAS E EXTERNAS SÃO MANTIDAS EM BOAS CONDIÇÕES FÍSICO ESTRUTURAIS, DE MODO A PERMITIR A HIGIENE E NÃO OFERECER RISCO AO USUÁRIO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 6`
    },
    {
        id: "6128",
        category: "INFRA - ESTRUTURA",
        description: `AS INSTALAÇÕES POSSUEM SUPERFÍCIES INTERNAS, PISO, PAREDES E TETO LISOS E IMPERMEÁVEIS, EM PERFEITAS CONDIÇÕES, RESISTENTES AOS AGENTES SANITIZANTES E FACILMENTE LAVÁVEIS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 6, §1º`
    },
    {
        id: "1360",
        category: "INFRA - ESTRUTURA",
        description: `OS AMBIENTES (JANELAS, RALOS E DEMAIS ABERTURAS)ESTÃO EM BOAS CONDIÇÕES DE CONSERVAÇÃO E HIGIENE E PROTEGIDOS CONTRA A ENTRADA DE INSETOS, ROEDORES OU OUTROS ANIMAIS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 6, §2º`
    },
    {
        id: "6146",
        category: "INFRA - ESTRUTURA",
        description: `O AMBIENTE É MANTIDO LIMPO, PROTEGIDO DA AÇÃO DIRETA DA LUZ SOLAR, UMIDADE E CALOR, DE MODO A PRESERVAR A IDENTIDADE E INTEGRIDADE QUÍMICA, FÍSICA E MICROBIOLÓGICA, GARANTINDO A QUALIDADE E SEGURANÇA DOS PRODUTOS?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 35, §2º`
    },
    {
        id: "10197",
        category: "INFRA - ESTRUTURA",
        description: `A ILUMINAÇÃO E VENTILAÇÃO SÃO SUFICIENTES E SE ENCONTRAM EM CONDIÇÕES ADEQUADAS?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 6, §3º`
    },
    {
        id: "11082",
        category: "INFRA - ESTRUTURA",
        description: `AS INSTALAÇÕES SANITARIAS ESTÃO EM BOAS CONDIÇÕES HIGIÊNICO SANITÁRIAS E SÃO PROVIDAS DE SABONETE LÍQUIDO, PAPEL TOALHA, VASO SANITÁRIO COM TAMPA, RALO COM SISTEMA DE FECHAMENTO E LIXIERA COM TAMPA ACIONADA POR PEDAL E SACO PLÁSTICO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 9, § ÚNICO`
    },
    {
        id: "6137",
        category: "INFRA - ESTRUTURA",
        description: `O ACESSO AO SANITÁRIO NÃO SE DÁ ATRÁVES DO AMBIENTE DESTINADO AOS SERVIÇOS FARMACÊUTICOS?`,
        risk: "menor",
        legislation: `RDC 44/09 ART. 15, §3º`
    },
    {
        id: "6132",
        category: "INFRA - ESTRUTURA",
        description: `HÁ LOCAL ESPECÍFICO PARA GUARDA DOS PERTENCES DOS FUNCIONÁRIOS NO AMBIENTE DESTINADO ÀS ATIVIDADES ADMINISTRATIVAS? (NÃO SE APLICA A SHOPPING E AFINS)`,
        risk: "menor",
        legislation: `RDC 44/09 ART. 10`
    },
    {
        id: "6133",
        category: "INFRA - ESTRUTURA",
        description: `AS SALAS DE DESCANSO E REFEITÓRIO, CASO EXISTAM, ESTÃO SEPARADAS DOS DEMAIS AMBIENTES?`,
        risk: "menor",
        legislation: `RDC 44/09 ART. 11`
    },
    {
        id: "5565",
        category: "INFRA - ESTRUTURA",
        description: `O ESTABELECIMENTO É ABASTECIDO COM ÁGUA POTÁVEL?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 12`
    },
    {
        id: "1723",
        category: "INFRA - ESTRUTURA",
        description: `EXISTE REGISTRO DA OPERAÇÃO DE HIGIENIZAÇÃO DO RESERVATÓRIO DE ÁGUA NA FREQUÊNCIA RECOMENDADA?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 12`
    },
    {
        id: "6136",
        category: "INFRA - ESTRUTURA",
        description: `O AMBIENTE PARA PRESTAÇÃO DOS SERVIÇOS QUE DEMANDAM ATENDIMENTO INDIVIDUALIZADO GARANTE A PRIVACIDADE E O CONFORTO DOS USUÁRIOS, POSSUINDO DIMENSÕES, MOBILIÁRIO E INFRA ESTRUTURA COMPATÍVEIS COM AS ATIVIDADES E SERVIÇOS OFERECIDOS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 15, §1º`
    },
    {
        id: "11487",
        category: "INFRA - ESTRUTURA",
        description: `EXISTE REGISTRO DE LIMPEZA DA SALA DE SERVIÇOS FARMACÊUTICOS/ CÔMODO DE INJETÁVEIS QUE PREVÊ A LIMPEZA NO INÍCIO, TÉRMINO E DEMAIS HORÁRIOS SEMPRE QUE NECESSÁRIO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 16, §1º E §2º`
    },
    {
        id: "7216",
        category: "INFRA - ESTRUTURA",
        description: `POSSUI EQUIPAMENTOS DE COMBATE Á INCÊNDIO, DENTRO DO PRAZO DE VALIDADE DE MANUTENÇÃO EM LOCAL DE LIVRE ACESSO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART.6, § 4º`
    },
    {
        id: "6131",
        category: "INFRA - ESTRUTURA",
        description: `OS MATERIAIS DE LIMPEZA UTILIZADOS PELO ESTABELECIMENTO ESTÃO REGULARIZADOS JUNTO À ANVISA E SÃO ARMAZENADOS EM LOCAL ADEQUADO E IDENTIFICADO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART.8`
    },
    {
        id: "11102",
        category: "INFRA - ESTRUTURA",
        description: `POSSUI PROGRAMA DE SANITIZAÇÃO , INCLUINDO DESRATIZAÇÃO E DESISNSETIZAÇÃO REALIZADO POR FIRMA LICENCIADA PARA ESTE FIM PERANTE OS ÓRGÃOS COMPETENTES?`,
        risk: "maior",
        legislation: `RDC 44/09 ART.7`
    },
    {
        id: "5164",
        category: "INFRA - ESTRUTURA",
        description: `INEXISTEM CONDIÇÕES QUE PROPICIEM ALIMENTAÇÃO, PROLIFERAÇÃO OU ABRIGO DE ANIMAIS SINANTRÓPICOS, TAIS COMO:\nOpções:\n*PRATINHOS DE VASOS DE PLANTAS\n*LATINHAS, EMBALAGENS, DESCARTÁVEIS, PNEUS OU MATERIAL EM DESUSO EM CONDIÇÕES DE ACUMULAR ÁGUA\n*CAIXAS D'ÁGUA OU DEPÓSITOS DE ÁGUA SEM TAMPA\n*PISCINAS, LAGOS OU ESPELHOS D'ÁGUA DECORATIVOS COM ÁGUA SEM TRATAMENTO\n*RALOS COM ENTUPIMENTO OU EM DESUSO\n*VASOS SANITÁRIOS EM DESUSO SEM TAMPA\n*CACOS DE VIDRO NOS MUROS QUE POSSAM ACUMULAR ÁGUA\n*BANDEJA EXTERNA DE GELADEIRA E AR CONDICIONADO COM ACÚMULO DE ÁGUA\n*FALTA DE HIGIENIZAÇÃO NO SUPORTE DE ÁGUA MINERAL SEMPRE QUE HOUVER TROCA DO GALÃO\n*ÁREA EXTERNA, INCLUSIVE CANALETAS, COM LIXO`,
        risk: "maior",
        legislation: `LM 7031/96 ART. 91`
    },

    // ==========================================================================
    // EQUIPAMENTOS, MEDICAMENTOS E PRODUTOS
    // ==========================================================================
    {
        id: "6143",
        category: "EQUIPAMENTOS, MEDICAMENTOS E PRODUTOS",
        description: `ADQUIRE APENAS PRODUTOS REGULARIZADOS NO MINISTÉRIO DA SAÚDE, CONFORME LEGISLAÇÃO VIGENTE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 30`
    },
    {
        id: "6144",
        category: "EQUIPAMENTOS, MEDICAMENTOS E PRODUTOS",
        description: `OS PRODUTOS SÃO ADQUIRIDOS DE DISTRIBUIDORES LEGALMENTE AUTORIZADOS E LICENCIADOS?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 31, § 1º`
    },
    {
        id: "11488",
        category: "EQUIPAMENTOS, MEDICAMENTOS E PRODUTOS",
        description: `A NOTA FISCAL DE COMPRA POSSUI NOME, NÚMERO DE LOTE E O FABRICANTE DOS PRODUTOS ADQUIRIDOS?`,
        risk: "maior",
        legislation: `Art. INDEF.`
    },
    {
        id: "4609",
        category: "EQUIPAMENTOS, MEDICAMENTOS E PRODUTOS",
        description: `OS PRODUTOS ESTAO ARMAZENADOS EM LOCAL ADEQUADO (AFASTADOS DA PAREDE, DE DESINFETANTES, EM TEMPERATURA ADEQUADA, ETC), DE FORMA ORGANIZADA E ATENDENDO AS ESPECIFICAÇÕES DO FABRICANTE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 36`
    },
    {
        id: "11489",
        category: "EQUIPAMENTOS, MEDICAMENTOS E PRODUTOS",
        description: `OS ARTIGOS DE CONVENIÊNCIA ESTÃO EXPOSTOS EM SUAS EMBALAGENS ORIGINAIS E DEVIDAMENTE LACRADOS, EM BALCÕES, ESTANTES OU GÔNDOLAS E SEPARADOS DOS MEDICAMENTOS?`,
        risk: "maior",
        legislation: `LE 18679/09 ART. 1, § ÚNICO`
    },
    {
        id: "11490",
        category: "EQUIPAMENTOS, MEDICAMENTOS E PRODUTOS",
        description: `CUMPRE A PROIBIÇÃO DE COMERCIALIZAÇÃO, EM FARMÁCIAS E DROGARIAS, DE BEBIDAS ALCOÓLICAS, CIGARROS E ALIMENTOS NÃO INDUSTRIALIZADOS?`,
        risk: "critico",
        legislation: `LE 18679/09 ART. 3`
    },
    {
        id: "6148",
        category: "EQUIPAMENTOS, MEDICAMENTOS E PRODUTOS",
        description: `OS MEDICAMENTOS, EXCETO OS PERMITIDOS, SÃO MANTIDOS EM ÁREA DE CIRCULAÇÃO RESTRITA AOS FUNCIONÁRIOS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 40, § 1º`
    },
    {
        id: "6147",
        category: "EQUIPAMENTOS, MEDICAMENTOS E PRODUTOS",
        description: `PARA AQUELES PRODUTOS QUE EXIGEM ARMAZENAMENTO EM TEMPERATURA ABAIXO DA TEMPERATURA AMBIENTE, SÃO OBEDECIDAS AS ESPECIFICAÇÕES DECLARADAS NA RESPECTIVA EMBALAGEM E A TEMPERATURA DO LOCAL É MEDIDA E REGISTRADA DIARIAMENTE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 35, § 3º`
    },

    // ==========================================================================
    // PROCEDIMENTOS
    // ==========================================================================
    {
        id: "6145",
        category: "PROCEDIMENTOS",
        description: `O RECEBIMENTO DOS PRODUTOS É REALIZADO EM ÁREA ESPECÍFICA E POR PESSOA TREINADA E EM CONFORMIDADE COM PROCEDIMENTO OPERACIONAL PADRÃO POP?`,
        risk: "critico",
        legislation: `RDC 44/09 ART.32`
    },
    {
        id: "11492",
        category: "PROCEDIMENTOS",
        description: `NO MOMENTO DO RECEBIMENTO É VERIFICADO O BOM ESTADO DE CONSERVAÇÃO, A LEGIBILIDADE DO NÚMERO DE LOTE E PRAZO DE VALIDADE E A PRESENÇA DE MECANISMO DE CONFERÊNCIA DA AUTENTICIDADE E ORIGEM DO PRODUTO, AFIM DE EVITAR A EXPOSIÇÃO DOS USUÁRIOS A PRODUTOS FALSIFICADOS, CORROMPIDOS OU ADULTERADOS?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 34`
    },
    {
        id: "5215",
        category: "PROCEDIMENTOS",
        description: `A ÁREA OU SALA DE ARMAZENAMENTO TEM CAPACIDADE SUFICIENTE PARA ASSEGURAR A ESTOCAGEM ORDENADA DAS DIVERSAS CATEGORIAS DE MATÉRIAS-PRIMAS, MATERIAIS DE EMBALAGEM E OUTROS PRODUTOS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 35, §1º`
    },
    {
        id: "6155",
        category: "PROCEDIMENTOS",
        description: `OS PRODUTOS VIOLADOS, VENCIDOS, SOB SUSPEITA DE FALSIFICAÇÃO, CORRUPÇÃO, ADULTERAÇÃO OU ALTERAÇÃO SÃO SEGREGADOS EM AMBIENTE SEGURO E DIVERSO DA ÁREA DE DISPENSAÇÃO E IDENTIFICADOS QUANTO A SUA CONDIÇÃO E DESTINO, DE MODO A EVITAR SUA ENTREGA AO CONSUMO?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 38`
    },
    {
        id: "6156",
        category: "PROCEDIMENTOS",
        description: `A INUTILIZAÇÃO E O DESCARTE DESSES PRODUTOS OBEDECEM AO DESCRITO NO PLANO DE GERENCIAMENTO DE RESÍDUOS DE SERVIÇOS DE SAÚDE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 38, §2º`
    },
    {
        id: "11493",
        category: "PROCEDIMENTOS",
        description: `OS MEDICAMENTOS SUJEITOS A CONTROLE ESPECIAL ESTÃO ARMAZENADOS EM ARMÁRIO RESISTENTE OU SALA PRÓPRIA COM CHAVE SOB A GUARDA DO FARMACÊUTICO?`,
        risk: "critico",
        legislation: `PF 344/98 ART. 67`
    },
    {
        id: "11494",
        category: "PROCEDIMENTOS",
        description: `POSSUI SISTEMA INFORMATIZADO PARA REALIZAR A ESCRITURAÇÃO E TRANSMISSÃO DE MEDICAMENTOS CONTROLADOS E ANTIMICROBIANOS PARA A ANVISA?`,
        risk: "critico",
        legislation: `RDC 22/14 ART. 10`
    },
    {
        id: "6115",
        category: "PROCEDIMENTOS",
        description: `O ENVIO DE ARQUIVOS XML É FEITO NO PRAZO MÁXIMO DE 7 DIAS?`,
        risk: "maior",
        legislation: `RDC 22/14 ART. 10, §3º`
    },
    {
        id: "436",
        category: "PROCEDIMENTOS",
        description: `OS BALANÇOS SÃO ENTREGUES REGULARMENTE?`,
        risk: "maior",
        legislation: `PF 344/98 ART. 73`
    },
    {
        id: "437",
        category: "PROCEDIMENTOS",
        description: `O ESTOQUE FÍSICO ESTÁ IDÊNTICO AO ESCRITURADO NO SISTEMA NACIONAL DE GERENCIAMENTO DE PRODUTOS CONTROLADOS SNGPC E NO SISTEMA INFORMATIZADO DO ESTABELECIMENTO, OBSERVANDO O PRAZO DE ESCRITURAÇÃO?`,
        risk: "critico",
        legislation: `RDC 22/14 ART. 15`
    },
    {
        id: "11496",
        category: "PROCEDIMENTOS",
        description: `QUANDO HOUVER INCONSISTÊNCIA QUE IMPEÇA O ENVIO DOS ARQUIVOS XML, AS MOVIMENTAÇÕES DESTA INCONSISTÊNCIA SÃO ESCRITURADAS NO SISTEMA INFORMATIZADO DO ESTABELECIMENTO?`,
        risk: "maior",
        legislation: `RDC 22/14 ART. 14, §1º`
    },
    {
        id: "11497",
        category: "PROCEDIMENTOS",
        description: `AS NOTIFICAÇÕES DE SIBUTRAMINA ESTÃO ACOMPANHADAS DO TERMO DE RESPONSABILIDADE DEVIDAMENTE PREENCHIDO?`,
        risk: "critico",
        legislation: `RDC 52/11 ART. 4`
    },
    {
        id: "11452",
        category: "PROCEDIMENTOS",
        description: `REALIZA A RETENÇÃO E ESCRITURAÇÃO DAS RECEITAS DE ANTIMICROBIANOS DISPENSADAS?`,
        risk: "critico",
        legislation: `RDC 20/11 ART. 2`
    },
    {
        id: "11498",
        category: "PROCEDIMENTOS",
        description: `AS RECEITAS DE ANTIMICROBIANOS ESTÃO DE ACORDO COM A LEGISLAÇÃO E RESPEITAM O PRAZO DE VALIDADE DE 10 DIAS?`,
        risk: "critico",
        legislation: `RDC 20/11 ART. 5, § ÚNICO, INC. I A IV (PARA OS REQUISITOS DA RECEITA) E ART. 6 (VALIDADE DA RECEITA)`
    },
    {
        id: "11500",
        category: "PROCEDIMENTOS",
        description: `HÁ REGISTRO NAS RECEITAS DE ANTIMICROBIANOS DOS SEGUINTES DADOS:\n• DATA DA DISPENSAÇÃO\n• QUANTIDADE AVIADA\n• NÚMERO DE LOTE DISPENSADO\n• RÚBRICA DO FARMACÊUTICO\n• IDADE DO PACIENTE`,
        risk: "maior",
        legislation: `RDC 20/11 ART. 9, §3º`
    },
    {
        id: "11460",
        category: "PROCEDIMENTOS",
        description: `É OBSERVADA A PROIBIÇÃO DE DEVOLUÇÃO POR PESSOA FÍSICA DE MEDICAMENTOS ANTIMICROBIANOS?`,
        risk: "maior",
        legislation: `RDC 20/11 ART. 20`
    },
    {
        id: "452",
        category: "PROCEDIMENTOS",
        description: `A TRANSFERÊNCIA DE MEDICAMENTOS É FEITA COM NOTA FISCAL?`,
        risk: "critico",
        legislation: `PF 344/98 ART.25`
    },
    {
        id: "453",
        category: "PROCEDIMENTOS",
        description: `AS NOTIFICAÇÕES DE RECEITA ESTÃO CORRETA E COMPLETAMENTE PREENCHIDAS?`,
        risk: "maior",
        legislation: `PF 344/98 ART. 36`
    },
    {
        id: "456",
        category: "PROCEDIMENTOS",
        description: `POSSUI CARIMBO COM IDENTIFICAÇÃO DO FORNECEDOR, QUANTIDADE AVIADA E LOTE PARA DISPENSAÇÃO DE MEDICAMENTOS CONTROLADOS E ANTIMICROBIANOS?`,
        risk: "maior",
        legislation: `PF 344/98 ART. 35, §5º`
    },
    {
        id: "6118",
        category: "PROCEDIMENTOS",
        description: `A RELAÇÃO MENSAL DE RECEITAS B2 E AS RESPECTIVAS RECEITAS SÃO ENTREGUES ATÉ 15° DIA DO MÊS SUBSEQUENTE NA VIGILÂNCIA SANITÁRIA PARA CONFERÊNCIA?`,
        risk: "maior",
        legislation: `RDC 58/07 ART. 1, §4º`
    },
    {
        id: "6119",
        category: "PROCEDIMENTOS",
        description: `A RELAÇÃO MENSAL DE RECEITAS A E AS RESPECTIVAS RECEITAS SÃO ENTREGUES ATÉ 15° DIA DO MÊS SUBSEQUENTE NA VIGILÂNCIA SANITÁRIA PARA CONFERÊNCIA?`,
        risk: "maior",
        legislation: `PF 344/98 ART. 72`
    },
    {
        id: "6162",
        category: "PROCEDIMENTOS",
        description: `AS AÇÕES RELACIONADAS À ATENÇÃO FARMACÊUTICA SÃO REGISTRADAS DE MODO A PERMITIR A AVALIAÇÃO DE SEUS RESULTADOS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 65`
    },
    {
        id: "6160",
        category: "PROCEDIMENTOS",
        description: `AS ATIVIDADES SÃO DOCUMENTADAS DE FORMA SISTEMÁTICA E CONTÍNUA, COM O CONSENTIMENTO EXPRESSO DO USUÁRIO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 64, §1º`
    },
    {
        id: "6161",
        category: "PROCEDIMENTOS",
        description: `OS REGISTROS CONTÊM, NO MÍNIMO, INFORMAÇÕES REFERENTES AO USUÁRIO (NOME, ENDEREÇO E TELEFONE), ÀS ORIENTAÇÕES E INTERVENÇÕES FARMACÊUTICAS REALIZADAS E AOS RESULTADOS DELAS DECORRENTES, BEM COMO INFORMAÇÕES DO PROFISSIONAL RESPONSÁVEL PELA EXECUÇÃO DO SERVIÇO: NOME E NÚMERO DE INSCRIÇÃO NO CONSELHO REGIONAL DE FARMÁCIA?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 64, §2º`
    },
    {
        id: "460",
        category: "PROCEDIMENTOS",
        description: `HÁ CARTAZ PROIBINDO O REAPROVEITAMENTO DE SERINGAS DESCARTÁVEIS?`,
        risk: "maior",
        legislation: `PM 026/98 ART. 9, §3º`
    },
    {
        id: "6072",
        category: "PROCEDIMENTOS",
        description: `INEXISTE A ADMINISTRAÇÃO DE MEDICAMENTOS DE USO EXCLUSIVO HOSPITALAR?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 74, § ÚNICO`
    },
    {
        id: "6074",
        category: "PROCEDIMENTOS",
        description: `INEXISTE O ARMAZENAMENTO EM FARMÁCIAS E DROGARIAS DE MEDICAMENTOS CUJA EMBALAGEM PRIMÁRIA TENHA SIDO VIOLADA?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 76, §2º`
    },
    {
        id: "6075",
        category: "PROCEDIMENTOS",
        description: `PARA A ADMINISTRAÇÃO DE MEDICAMENTOS SÃO UTILIZADOS MATERIAIS, APARELHOS E ACESSÓRIOS QUE POSSUEM REGISTRO, NOTIFICAÇÃO, CADASTRO OU QUE SEJAM LEGALMENTE DISPENSADOS DE TAIS REQUISITOS JUNTO À ANVISA?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 77`
    },
    {
        id: "6076",
        category: "PROCEDIMENTOS",
        description: `SÃO MANTIDOS REGISTROS DAS MANUTENÇÕES E CALIBRAÇÕES PERIÓDICAS DOS APARELHOS, SEGUNDO REGULAMENTAÇÃO ESPECÍFICA DO ÓRGÃO COMPETENTE E INSTRUÇÕES DO FABRICANTE DO EQUIPAMENTO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART.77, § ÚNICO`
    },
    {
        id: "6067",
        category: "PROCEDIMENTOS",
        description: `AS MEDIÇÕES DO PARÂMETRO BIOQUÍMICO DE GLICEMIA CAPILAR SÃO REALIZADAS POR MEIO DE EQUIPAMENTOS DE AUTOTESTE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART.70`
    },
    {
        id: "6068",
        category: "PROCEDIMENTOS",
        description: `PARA A MEDIÇÃO DE PARÂMETROS FISIOLÓGICO E BIOQUÍMICO PERMITIDOS SÃO UTILIZADOS MATERIAIS, APARELHOS E ACESSÓRIOS QUE POSSUEM REGISTRO, NOTIFICAÇÃO, CADASTRO OU QUE SEJAM LEGALMENTE DISPENSADOS DE TAIS REQUISITOS JUNTO À ANVISA?`,
        risk: "critico",
        legislation: `RDC 44/09 ART.71`
    },
    {
        id: "6070",
        category: "PROCEDIMENTOS",
        description: `OS PROCEDIMENTOS QUE GEREM RESÍDUOS DE SAÚDE, COMO MATERIAIS PERFUROCORTANTES, GAZE OU ALGODÃO SUJOS COM SANGUE SÃO DESCARTADOS CONFORME AS EXIGÊNCIAS DE LEGISLAÇÃO ESPECÍFICA PARA GERENCIAMENTO DE RESÍDUOS DE SERVIÇOS DE SAÚDE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART.73`
    },
    {
        id: "6079",
        category: "PROCEDIMENTOS",
        description: `A PERFURAÇÃO DO LÓBULO AURICULAR É FEITA COM APARELHO ESPECÍFICO PARA ESSE FIM E QUE UTILIZE O BRINCO COMO MATERIAL PERFURANTE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 78`
    },
    {
        id: "6080",
        category: "PROCEDIMENTOS",
        description: `CUMPRE A PROIBIÇÃO DA NÃO UTILIZAÇÃO DE AGULHAS DE APLICAÇÃO DE INJEÇÃO, AGULHAS DE SUTURAS E OUTROS OBJETOS PARA A REALIZAÇÃO DA PERFURAÇÃO?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 78, § ÚNICO`
    },
    {
        id: "6081",
        category: "PROCEDIMENTOS",
        description: `OS BRINCOS E A PISTOLA A SEREM OFERECIDOS AOS USUÁRIOS SÃO REGULARIZADOS JUNTO À ANVISA, CONFORME LEGISLAÇÃO VIGENTE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 79`
    },
    {
        id: "6082",
        category: "PROCEDIMENTOS",
        description: `OS BRINCOS SÃO CONSERVADOS EM CONDIÇÕES QUE PERMITAM A MANUTENÇÃO DA SUA ESTERILIDADE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 79, §1º`
    },
    {
        id: "6083",
        category: "PROCEDIMENTOS",
        description: `OS DADOS E INFORMAÇÕES OBTIDOS EM DECORRÊNCIA DA PRESTAÇÃO DE SERVIÇOS FARMACÊUTICOS TÊM TRATAMENTO SIGILOSO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 82`
    },
    {
        id: "6150",
        category: "PROCEDIMENTOS",
        description: `O FRACIONAMENTO DE MEDICAMENTOS, CASO OCORRA, SOMENTE SE DÁ A PARTIR DE EMBALAGENS ESPECIALMENTE DESENVOLVIDAS PARA ESTA FINALIDADE?`,
        risk: "maior",
        legislation: `RDC 80/06 ART.1`
    },
    {
        id: "448",
        category: "PROCEDIMENTOS",
        description: `É OBEDECIDA A VEDAÇÃO À CAPTAÇÃO E A INTERMEDIAÇÃO DE RECEITAS CONTENDO PRESCRIÇÕES MAGISTRAIS E OFICINAIS, AINDA QUE EM FILIAIS DA MESMA EMPRESA?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 50`
    },
    {
        id: "6153",
        category: "PROCEDIMENTOS",
        description: `A PROMOÇÃO E A PROPAGANDA DE PRODUTOS SUJEITOS ÀS NORMAS DE VIGILÂNCIA SANITÁRIA OBEDECEM ÀS DISPOSIÇÕES NORMATIVAS DESCRITAS EM LEGISLAÇÃO ESPECÍFICA?`,
        risk: "maior",
        legislation: `RDC 44/09 ART.91`
    },
    {
        id: "6154",
        category: "PROCEDIMENTOS",
        description: `SÃO OBEDECIDAS AS REGRAS PARA PROGRAMAS DE FIDELIZAÇÃO DIRIGIDOS AO CONSUMIDOR E ANÚNCIOS DE DESCONTOS PARA MEDICAMENTOS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 91, § ÚNICO`
    },
    {
        id: "441",
        category: "PROCEDIMENTOS",
        description: `É RESPEITADA A PROIBIÇÃO DE DEMONSTRAÇÃO DE COSMÉTICOS E SERVIÇOS DE ESTÉTICA?`,
        risk: "menor",
        legislation: `LF 5991/73 ART. 55`
    },
    {
        id: "442",
        category: "PROCEDIMENTOS",
        description: `É RESPEITADA A PROIBIÇÃO DE PROPAGANDA DE MÉDICOS, LABORATÓRIOS, ÓPTICAS E OUTROS NAS DEPENDÊNCIAS DA DROGARIA?`,
        risk: "maior",
        legislation: `PM 026/98 ART. 11`
    },
    {
        id: "443",
        category: "PROCEDIMENTOS",
        description: `É RESPEITADA A PROIBIÇÃO DE DISTRIBUIÇÃO DE AMOSTRA GRÁTIS?`,
        risk: "maior",
        legislation: `RDC 60/09 ART. 3`
    },
    {
        id: "6106",
        category: "PROCEDIMENTOS",
        description: `O TRANSPORTE DO MEDICAMENTO PARA DISPENSAÇÃO SOLICITADA POR MEIO REMOTO ASSEGURA CONDIÇÕES QUE PRESERVEM A INTEGRIDADE E QUALIDADE DO PRODUTO, RESPEITANDO AS RESTRIÇÕES DE TEMPERATURA E UMIDADE DESCRITAS NA EMBALAGEM DO MEDICAMENTO PELO DETENTOR DO REGISTRO, ALÉM DE ATENDER AS BOAS PRÁTICAS DE TRANSPORTE PREVISTAS NA LEGISLAÇÃO ESPECÍFICA?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 56`
    },
    {
        id: "6107",
        category: "PROCEDIMENTOS",
        description: `OS PRODUTOS TERMOSSENSÍVEIS SÃO TRANSPORTADOS EM EMBALAGENS ESPECIAIS CAPAZ DE MANTER TEMPERATURA COMPATÍVEL COM SUA CONSERVAÇÃO?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 56, § 1º`
    },
    {
        id: "6108",
        category: "PROCEDIMENTOS",
        description: `OS MEDICAMENTOS NÃO SÃO TRANSPORTADOS JUNTAMENTE COM PRODUTOS OU SUBSTÂNCIAS QUE POSSAM AFETAR SUAS CARACTERÍSTICAS DE QUALIDADE, SEGURANÇA E EFICÁCIA?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 56, § 2º`
    },
    {
        id: "6109",
        category: "PROCEDIMENTOS",
        description: `AS FARMÁCIAS E DROGARIAS QUE ENTREGAM MEDICAMENTOS POR VIA POSTAL ATENDEM AS CONDIÇÕES SANITÁRIAS QUE ASSEGUREM A INTEGRIDADE E A QUALIDADE DOS PRODUTOS, CONFORME LEGISLAÇÃO VIGENTE?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 57`
    },
    {
        id: "6110",
        category: "PROCEDIMENTOS",
        description: `NO CASO DE TERCEIRIZAÇÃO DO SERVIÇO DE TRANSPORTE, ESTE É FEITO POR EM PRESA DEVIDAMENTE REGULARIZADA CONFORME A LEGISLAÇÃO VIGENTE? APRESENTAR CONTRATO`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 56, § 4º`
    },

    // ==========================================================================
    // RECURSOS HUMANOS
    // ==========================================================================
    {
        id: "6138",
        category: "RECURSOS HUMANOS",
        description: `HÁ ASSISTÊNCIA DE FARMACÊUTICO RESPONSÁVEL TÉCNICO OU DE SEU SUBSTITUTO, DURANTE TODO O HORÁRIO DE FUNCIONAMENTO DO ESTABELECIMENTO, NOS TERMOS DA LEGISLAÇÃO VIGENTE?`,
        risk: "critico",
        legislation: `LF 5991/73 ART. 15, § 1º`
    },
    {
        id: "415",
        category: "RECURSOS HUMANOS",
        description: `O FARMACÊUTICO RESPONSÁVEL TÉCNICO ESTÁ PRESENTE NO SEU HORÁRIO DE ASSISTÊNCIA?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 3`
    },
    {
        id: "6139",
        category: "RECURSOS HUMANOS",
        description: `OS FUNCIONÁRIOS ESTÃO IDENTIFICADOS E UTILIZAM VESTIMENTAS DE TRABALHO:\nOpções:\n*LIMPAS\n*EM BOAS CONDIÇÕES DE USO E CONFORTO`,
        risk: "menor",
        legislation: `RDC 44/09 ART. 17`
    },
    {
        id: "6140",
        category: "RECURSOS HUMANOS",
        description: `O UNIFORME OU A IDENTIFICAÇÃO USADA PELO FARMACÊUTICO O DISTINGUE DOS DEMAIS FUNCIONÁRIOS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 17, § ÚNICO`
    },
    {
        id: "6141",
        category: "RECURSOS HUMANOS",
        description: `DISPONIBILIZA EQUIPAMENTOS DE PROTEÇÃO INDIVIDUAL AOS FUNCIONÁRIOS ENVOLVIDOS NA PRESTAÇÃO DE SERVIÇOS FARMACÊUTICO PARA ASSEGURAR A PROTEÇÃO DO FUNCIONÁRIO, DO USUÁRIO E DO PRODUTO CONTRA CONTAMINAÇÃO OU DANOS À SAÚDE?`,
        risk: "critico",
        legislation: `RDC 44/09 ART. 18`
    },
    {
        id: "11499",
        category: "RECURSOS HUMANOS",
        description: `A APLICAÇÃO DE INJETÁVEIS POR OUTROS PROFISSIONAIS, ALÉM DO FARMACÊUTICO, É REALIZADA DE ACORDO COM O POP SOB SUPERVISÃO DO RT OU SUBSTITUTO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 22`
    },

    // ==========================================================================
    // DOCUMENTAÇÃO
    // ==========================================================================
    {
        id: "6955",
        category: "DOCUMENTAÇÃO",
        description: `AS ATIVIDADES CONSTANTES DO ALVARÁ DE LOCALIZAÇÃO E DA FICHA DE INSCRIÇÃO CADASTRAL - FIC COINCIDEM COM AS ATIVIDADES EXERCIDAS OU EM CONDIÇÕES DE SEREM EXERCIDAS NO LOCAL?`,
        risk: "critico",
        legislation: `DM 17012/18 ART. 15, INC. II`
    },
    {
        id: "356",
        category: "DOCUMENTAÇÃO",
        description: `O ESTABELECIMENTO POSSUI AFE EXPEDIDA E ATUALIZADA PELA ANVISA?`,
        risk: "critico",
        legislation: `RDC 16/14 ART. 13`
    },
    {
        id: "6962",
        category: "DOCUMENTAÇÃO",
        description: `POSSUI PROJETO ARQUITETÔNICO PROTOCOLADO OU APROVADO PELOS ÓRGÃOS COMPETENTES NOS TERMOS DA LEGISLAÇÃO VIGENTE ?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 65`
    },
    {
        id: "450",
        category: "DOCUMENTAÇÃO",
        description: `O ESTABELECIMENTO POSSUI CADASTRO DA VIGILÂNCIA SANITÁRIA PARA VENDA DE RETINOICOS DE USO SISTÊMICO? APREENDER O PRODUTO EM DEPÓSITO E LAVRAR ADVERTÊNCIA SE O ESTABELECIMENTO NÃO POSSUIR O CADASTRO DA VIGILÂNCIA SANITÁRIA.`,
        risk: "critico",
        legislation: `PF 344/98 ART. 28`
    },
    {
        id: "1",
        category: "DOCUMENTAÇÃO",
        description: `ENCONTRA-SE REGULARIZADO JUNTO Á VIGILÂNCIA SANITÁRIA POR MEIO DE ALVARÁ DE AUTORIZAÇÃO SANITÁRIA?`,
        risk: "critico",
        legislation: `LM 7031/96 ART. 19`
    },
    {
        id: "354",
        category: "DOCUMENTAÇÃO",
        description: `O AAS ESTÁ EM LOCAL VISÍVEL AO PÚBLICO?`,
        risk: "maior",
        legislation: `LM 7031/96 ART. 20`
    },
    {
        id: "413",
        category: "DOCUMENTAÇÃO",
        description: `POSSUI PROVA DE HABILITAÇÃO LEGAL (CERTIDÃO DE REGULARIDADE TÉCNICA) ATUALIZADO, EMITIDO PELO CONSELHO REGIONAL DE FARMÁCIA DA RESPECTIVA JURISDIÇÃO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 2 INC. IV`
    },
    {
        id: "6121",
        category: "DOCUMENTAÇÃO",
        description: `A CERTIDÃO DE REGULARIDADE TÉCNICA ESTÁ AFIXADA EM LOCAL VISÍVEL AO PÚBLICO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 2, INC. IV`
    },
    {
        id: "6122",
        category: "DOCUMENTAÇÃO",
        description: `HÁ CARTAZ AFIXADO, EM LOCAL VISÍVEL AO PÚBLICO, CONTENDO AS INFORMAÇÕES?\nOPÇÕES:\nRAZÃO SOCIAL\nNÚMERO DE INSCRIÇÃO NO CADASTRO NACIONAL DE PESSOA JURÍDICA\nNÚMERO DA AUTORIZAÇÃO DE FUNCIONAMENTO DE EMPRESA AFE EXPEDIDA PELA ANVISA\nNÚMERO DA AUTORIZAÇÃO ESPECIAL DE FUNCIONAMENTO AE PARA FARMÁCIAS, QUANDO APLICÁVEL\nNOME DO FARMACÊUTICO RESPONSÁVEL TÉCNICO, E DE SEUS SUBSTITUTOS, SEGUIDO DO NÚMERO DE INSCRIÇÃO NO CONSELHO REGIONAL DE FARMÁCIA\nHORÁRIO DE TRABALHO DE CADA FARMACÊUTICO\nNÚMEROS ATUALIZADOS DE TELEFONE DO CONSELHO REGIONAL DE FARMÁCIA E DO ÓRGÃO ESTADUAL E MUNICIPAL DE VIGILÂNCIA SANITÁRIA`,
        risk: "menor",
        legislation: `RDC 44/09 ART. 2, §2º, INC. I A VII`
    },
    {
        id: "6159",
        category: "DOCUMENTAÇÃO",
        description: `OBS.: SE ESTIVER EM OUTRO DOCUMENTO NÃO É NECESSÁRIO REPETIR NO CARTAZ`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 62`
    },
    {
        id: "6149",
        category: "DOCUMENTAÇÃO",
        description: `O ESTABELECIMENTO MANTÉM À DISPOSIÇÃO DOS USUÁRIOS, EM LOCAL DE FÁCIL VISUALIZAÇÃO E DE MODO A PERMITIR A IMEDIATA IDENTIFICAÇÃO, LISTA ATUALIZADA DOS MEDICAMENTOS GENÉRICOS COMERCIALIZADOS NO PAÍS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 42, §1º`
    },
    {
        id: "6123",
        category: "DOCUMENTAÇÃO",
        description: `NA ÁREA DESTINADA AOS MEDICAMENTOS ESTÁ EXPOSTO CARTAZ, EM LOCAL VISÍVEL AO PÚBLICO, COM OS DIZERES: “MEDICAMENTOS PODEM CAUSAR EFEITOS INDESEJADOS. EVITE A AUTOMEDICAÇÃO: INFORME-SE COM O FARMACÊUTICO”?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 41`
    },
    {
        id: "2186",
        category: "DOCUMENTAÇÃO",
        description: `POSSUI PLANO DE GERENCIAMENTO DE RESÍDUOS DE SERVIÇOS DE SAÚDE(PGRSS):\nOpções:\n*COM CÓPIA DISPONÍVEL P/ CONSULTA DA AUTORIDADE SANITÁRIA - LM 7031/96 ART. 97 INC. II – RDC 222/2018\n*PROTOCOLADO OU APROVADO PELA GEVIS E SLU`,
        risk: "critico",
        legislation: `RDC 222/18 ART. 5 (POSSUIR O PLANO) E ART. 9 (CÓPIA DISPONÍVEL PARA CONSULTA)`
    },
    {
        id: "6125",
        category: "DOCUMENTAÇÃO",
        description: `A DOCUMENTAÇÃO REFERENTE AO MANUAL DE BOAS PRÁTICAS E REGISTRO DE ATIVIDADES É MANTIDA NO ESTABELECIMENTO POR NO MÍNIMO 5 CINCO ANOS, PERMANECENDO, NESSE PERÍODO, À DISPOSIÇÃO DO ÓRGÃO DE VIGILÂNCIA SANITÁRIA COMPETENTE PARA FISCALIZAÇÃO?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 89`
    },
    {
        id: "6126",
        category: "DOCUMENTAÇÃO",
        description: `O MANUAL DE BOAS PRÁTICAS FARMACÊUTICAS É ESPECÍFICO PARA O ESTABELECIMENTO E ESTÁ DE ACORDO COM TODAS AS ATIVIDADES REALIZADAS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 85`
    },
    {
        id: "11504",
        category: "DOCUMENTAÇÃO",
        description: `O ESTABELECIMENTO POSSUI PROCEDIMENTOS OPERACIONAIS PADRÃO - POP, DE ACORDO COM O PREVISTO NO MANUAL DE BOAS PRÁTICAS FARMACÊUTICAS, NO MÍNIMO, REFERENTES ÀS ATIVIDADES RELACIONADAS A: I- MANUTENÇÃO DAS CONDIÇÕES HIGIÊNICAS E SANITÁRIAS ADEQUADAS A CADA AMBIENTE DA FARMÁCIA OU DROGARIA; II-AQUISIÇÃO, RECEBIMENTO E ARMAZENAMENTO DOS PRODUTOS DE COMERCIALIZAÇÃO PERMITIDA; III-EXPOSIÇÃO E ORGANIZAÇÃO DOS PRODUTOS PARA COMERCIALIZAÇÃO; IV-DISPENSAÇÃO DE MEDICAMENTOS; V-DESTINO DOS PRODUTOS COM PRAZO DE VALIDADE VENCIDOS; VI-DESTINAÇÃO DOS PRODUTOS PRÓXIMOS AO VENCIMENTO; VII-PRESTAÇÃO DE SERVIÇOS FARMACÊUTICOS QUANDO HOUVER; VIII-UTILIZAÇÃO DE MATERIAIS DESCARTÁVEIS E SUA INUTILIZAÇÃO APÓS O USO; IX- TRANSPORTE DE MEDICAMENTOS PARA ENTREGA QUANDO HOUVER; X LIMPEZA DA CAIXA DE ÁGUA;`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 86, INC I A VIII`
    },
    {
        id: "6124",
        category: "DOCUMENTAÇÃO",
        description: `O ESTABELECIMENTO MANTÊM REGISTROS, NO MÍNIMO, REFERENTES A:\nOpções:\n*TREINAMENTO DE PESSOAL\n*SERVIÇO FARMACÊUTICO PRESTADO, QUANDO HOUVER\n*DIVULGAÇÃO DO CONTEÚDO DOS PROCEDIMENTOS OPERACIONAIS PADRÃO POPS AOS FUNCIONÁRIOS, DE ACORDO COM AS ATIVIDADES POR ELES REALIZADA\n*EXECUÇÃO DE PROGRAMA DE COMBATE A INSETOS E ROEDORES\n*MANUTENÇÃO E CALIBRAÇÃO DE APARELHOS OU EQUIPAMENTOS, QUANDO EXIGIDO`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 88, INC I A V`
    },
    {
        id: "6112",
        category: "DOCUMENTAÇÃO",
        description: `POSSUI CERTIFICADO DE ESCRITURAÇÃO DIGITAL IMPRESSO E DISPONÍVEL PARA A FISCALIZAÇÃO?`,
        risk: "maior",
        legislation: `RDC 22/14 ART. 9`
    },
    {
        id: "11502",
        category: "DOCUMENTAÇÃO",
        description: `O ESTABELECIMENTO POSSUI DECLARAÇÃO DO SERVIÇO FARMACÊUTICO, QUANDO HOUVER, EM PAPEL COM IDENTIFICAÇÃO DO ESTABELECIMENTO, CONTENDO NOME, ENDEREÇO, TELEFONE E CNPJ, ASSIM COMO A IDENTIFICAÇÃO DO USUÁRIO OU RESPONSÁVEL LEGAL?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 81, §1º`
    },
    {
        id: "11503",
        category: "DOCUMENTAÇÃO",
        description: `A DECLARAÇÃO DO SERVIÇO CONTÉM AS INFORMAÇÕES MÍNIMAS ESTABELECIDAS NA LEGISLAÇÃO VIGENTE E É EMITIDA EM DUAS VIAS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 81, §2º (REQUISITOS) INC I (VER LETRAS) E INC II (VER LETRAS ) §4º (PARA AS 02 VIAS)`
    },
    {
        id: "435",
        category: "DOCUMENTAÇÃO",
        description: `AS RECEITAS, NOTAS FISCAIS E BALANÇOS SÃO ARQUIVADOS POR DOIS ANOS? RECEITAS DE ANABOLIZANTES C5 POR 5 ANOS?`,
        risk: "maior",
        legislation: `PF 344/98 ART. 64 CAPUT`
    },
    {
        id: "11564",
        category: "DOCUMENTAÇÃO",
        description: `POSSUI POP PARA TRANSPORTE DE MEDICAMENTOS?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 56, §3º`
    },
    {
        id: "11566",
        category: "DOCUMENTAÇÃO",
        description: `POSSUI POP PARA LIMPEZA DA CAIXA D'ÁGUA?`,
        risk: "maior",
        legislation: `RDC 44/09 ART. 12`
    },

    // ==========================================================================
    // TABAGISMO
    // ==========================================================================
    {
        id: "7055",
        category: "TABAGISMO",
        description: `ATENDE A OBRIGATORIEDADE DE AFIXAÇÃO E MANUTENÇÃO, EM LOCAIS DE FÁCIL VISIBILIDADE, DE AVISOS, PLACAS OU CARTAZES ALUSIVOS À PROIBIÇÃO DA PRÁTICA DO TABAGISMO?`,
        risk: "menor",
        legislation: `LE 12903/98 ART. 4`
    },
    {
        id: "8503",
        category: "TABAGISMO",
        description: `RESPEITA A PROIBIÇÃO DO USO DE CIGARROS, CIGARRILHAS, CHARUTOS, CACHIMBOS OU QUALQUER PRODUTO FUMÍGENO, DERIVADO OU NÃO DO TABACO, EM RECINTO PÚBLICO OU PRIVADO QUE SEJA ACESSÍVEL AO PÚBLICO GERAL OU DE USO COLETIVO, TOTAL OU PARCIALMENTE FECHADO, INCLUINDO ÁREAS COM TOLDOS, DIVISÓRIAS, TETO OU PAREDE EM QUALQUER UM DOS LADOS, ELIMINANDO O CONCEITO DE UTILIZAÇÃO DE "FUMÓDROMOS" (ÁREAS EXCLUSIVAS PARA FUMAR)?`,
        risk: "critico",
        legislation: `DF 8262/14 ART 3º`
    }
];

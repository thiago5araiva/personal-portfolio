export const PRACTICE = {
    practitioner: 'Thiago Saraiva',
    role: 'Prática Pericial',
    year: '2026',
    thesis_pt: 'Engenharia forense aplicada a',
    thesis_pt_emphasis: 'evidências digitais.',
    thesis_secondary:
        'Análise técnica conduzida por quem constrói os sistemas que investiga.',
    bio_pt:
        'Engenheiro de software com mais de 9 anos construindo sistemas escaláveis para empresas globais — Squarespace e Pinterest nos Estados Unidos, Hospital Albert Einstein, Accenture e Cheesecake Labs no Brasil. Atuação pericial em todo território nacional: a combinação rara entre construir e investigar sistemas resulta em laudos fundamentados em compreensão real, não em leitura superficial de ferramentas.',
}

export const HERO_META = [
    { label: 'Cobertura', value: 'Brasil', accent: 'atendimento nacional' },
    { label: 'Engenharia', value: '10+', accent: 'anos' },
    { label: 'Especialização', value: 'Cybersecurity · FIAP' },
    { label: 'Idiomas', value: 'PT · EN · ES' },
]

export const TOC_SECTIONS = [
    { id: 'capabilities', code: '01', label: 'Capacidades' },
    { id: 'methodology', code: '02', label: 'Metodologia' },
    { id: 'scope', code: '03', label: 'Áreas' },
    { id: 'credentials', code: '04', label: 'Credenciais' },
    { id: 'faq', code: '05', label: 'Perguntas' },
    { id: 'engagement', code: '06', label: 'Contato' },
]

export const CAPABILITIES = [
    {
        code: '01.01',
        title: 'Dispositivos móveis e comunicações',
        description:
            'Extração e análise forense de smartphones, tablets e plataformas de mensageria. Recuperação de conversas apagadas, autenticação de comunicações, análise de metadados e correlação temporal de eventos.',
        tooling: ['Autopsy', 'IPED Forensics', 'fluxos classe Cellebrite'],
        coverage: [
            'smartphones',
            'tablets',
            'WhatsApp',
            'e-mail',
            'redes sociais',
        ],
    },
    {
        code: '01.02',
        title: 'Sistemas, rede e infraestrutura',
        description:
            'Análise de servidores, banco de dados e logs de aplicação. Investigação de incidentes em ambientes em nuvem, rastreamento de transações em blockchain, perícia em fraudes digitais e crimes cibernéticos.',
        tooling: [
            'Volatility',
            'Wireshark',
            'ferramentas OSINT',
            'EASM',
        ],
        coverage: [
            'servidores',
            'banco de dados',
            'logs',
            'nuvem',
            'blockchain',
        ],
    },
    {
        code: '01.03',
        title: 'Áudio, vídeo e documentos eletrônicos',
        description:
            'Transcrição forense, perícia de áudio e verificação de autenticidade de assinaturas eletrônicas. Análise de documentos digitais com PKI e certificados, validação de cadeia criptográfica.',
        tooling: [
            'pipelines FFmpeg',
            'suítes de perícia em áudio',
            'PKI · verificação X.509',
        ],
        coverage: [
            'transcrição forense',
            'perícia de áudio',
            'assinatura eletrônica',
            'documentos digitais',
        ],
    },
    {
        code: '01.04',
        title: 'Criptoativos e blockchain',
        description:
            'Rastreamento de transações em redes públicas — Bitcoin, Ethereum e cadeias compatíveis com EVM. Análise de fluxo de fundos entre carteiras e exchanges, identificação de endereços por clustering on-chain, perícia em smart contracts e investigação de fraudes com criptoativos — pirâmides financeiras, ransomware, golpes em NFT e phishing de seed phrase. Atuação enquadrada na Lei 14.478/2022 (Marco Legal dos Ativos Virtuais) e nas instruções da Receita Federal.',
        tooling: [
            'block explorers (Etherscan · Blockchair · Mempool)',
            'web3.py · ethers.js · scripts customizados',
            'Slither · Foundry (smart contracts)',
            'OFAC sanctions · CryptoScamDB · ChainAbuse',
        ],
        coverage: [
            'Bitcoin · Ethereum · redes EVM',
            'carteiras · seed phrases · exchanges',
            'smart contracts · DeFi · NFT',
            'pagamentos de ransomware',
            'pirâmides com criptoativos',
        ],
    },
]

export const METHODOLOGY = [
    {
        step: '01',
        title: 'Preservação',
        input: 'dispositivo',
        output: 'hash + cadeia de custódia',
        description:
            'Isolamento físico e lógico das evidências, geração de hashes criptográficos para selo de integridade, documentação inicial da cadeia de custódia conforme Art. 158-A do CPP.',
    },
    {
        step: '02',
        title: 'Coleta',
        input: 'dispositivo lacrado',
        output: 'imagem forense',
        description:
            'Aquisição bit-a-bit ou lógica conforme protocolo aplicável ao tipo de dispositivo, validação por hash duplo, registro de operadores e ferramentas em todas as etapas.',
    },
    {
        step: '03',
        title: 'Análise',
        input: 'imagem forense',
        output: 'achados + indicadores',
        description:
            'Exame científico com ferramentas forenses certificadas, correlação de evidências entre dispositivos e fontes, recuperação de artefatos apagados, mapeamento de IOCs (indicadores de comprometimento).',
    },
    {
        step: '04',
        title: 'Laudo',
        input: 'achados',
        output: 'laudo pericial',
        description:
            'Redação técnica fundamentada em evidências auditáveis, anexação de capturas e exportações, cadeia rastreável de raciocínio entre observação, análise e conclusão.',
    },
    {
        step: '05',
        title: 'Sustentação',
        input: 'laudo',
        output: 'parecer em juízo',
        description:
            'Esclarecimento de quesitos perante o juízo, defesa metodológica em audiência, resposta a quesitos suplementares e parecer crítico de laudo divergente quando aplicável.',
    },
]

export const SCOPE_AREAS = [
    {
        code: 'CV',
        title: 'Cível',
        items: [
            'Contratos digitais',
            'Propriedade intelectual',
            'Documentos eletrônicos',
        ],
    },
    {
        code: 'CR',
        title: 'Criminal',
        items: [
            'Crimes cibernéticos',
            'Fraudes digitais',
            'Defesa criminal',
        ],
    },
    {
        code: 'TR',
        title: 'Trabalhista',
        items: [
            'Evidências digitais',
            'Relações de trabalho',
            'Provas eletrônicas',
        ],
    },
    {
        code: 'EM',
        title: 'Corporativo',
        items: ['Compliance', 'Investigações internas', 'LGPD'],
    },
]

export const EVIDENCE_TYPES = [
    'Computadores e servidores',
    'Smartphones e tablets',
    'E-mails e comunicações',
    'Redes sociais',
    'Banco de dados e logs',
    'Documentos digitais',
    'Blockchain e criptomoedas',
    'Áudio e vídeo',
]

export const CREDENTIALS = {
    education: [
        {
            year: '2023–27',
            title: 'Cybersecurity',
            org: 'FIAP',
            note: 'em andamento',
        },
        {
            year: '2018–22',
            title: 'Engenharia de Software',
            org: 'UniCesumar',
        },
        {
            year: '2007–11',
            title: 'Publicidade',
            org: 'Faculdade Alves Faria',
        },
    ],
    forensic: [
        'Autopsy Forensics · IPED Forensics',
        'Volatility · análise de memória',
        'Forense em dispositivos móveis',
        'Forense em assinatura eletrônica',
        'Forense de áudio · transcrição forense',
        'OSINT · forense em internet',
        'Análise on-chain · rastreamento de criptoativos',
        'Perícia em smart contracts · DeFi · NFT',
    ],
    security: [
        'Pentest · OWASP Top 10',
        'MITRE ATT&CK · Cyber Kill Chain',
        'Inteligência de ameaças · indicadores de comprometimento',
        'Resposta a incidentes · ransomware',
        'Segurança em nuvem · PKI · criptografia',
    ],
    compliance: [
        'LGPD para profissionais de tecnologia',
        'Direito Digital · GRC',
        'Gestão de Riscos',
        'Due Care · Due Diligence',
    ],
    engineering: [
        {
            year: '2024',
            title: 'Desenvolvimento Front-End',
            org: 'Meta',
        },
        {
            year: '2024',
            title: 'Desenvolvimento Back-End',
            org: 'IBM',
        },
        {
            year: '2024',
            title: 'Desenvolvimento Blockchain',
            org: 'University at Buffalo',
        },
        {
            year: '—',
            title: 'Administração Oracle MySQL',
            org: 'Oracle',
        },
    ],
    experience: [
        'Squarespace · engenheiro fullstack sênior',
        'Pinterest · engenheiro fullstack sênior',
        'Hospital Albert Einstein · engenheiro front-end',
        'Accenture Concrete · engenheiro mobile',
        'Cheesecake Labs · engenheiro mobile',
        'BrasilSeg · desenvolvedor frontend e mobile',
    ],
    languages: [
        'Português (nativo)',
        'Inglês (fluente)',
        'Espanhol (intermediário)',
    ],
}

export const FAQ = [
    {
        question: 'O que é cadeia de custódia digital?',
        answer:
            'A cadeia de custódia é o registro documentado de todas as etapas de manuseio da evidência digital, desde a coleta até a apresentação em juízo. Garante que a prova não foi alterada e mantém validade jurídica, conforme Art. 158-A do CPP.',
    },
    {
        question:
            'Qual a diferença entre perito judicial e assistente técnico?',
        answer:
            'O perito judicial é nomeado pelo juiz para produzir o laudo pericial oficial. O assistente técnico é indicado pelas partes para acompanhar a perícia, formular quesitos e produzir parecer técnico divergente quando necessário.',
    },
    {
        question: 'A perícia digital serve como prova em tribunal?',
        answer:
            'Sim. A perícia digital produz provas técnicas com validade jurídica, desde que realizada com metodologia adequada e respeito à cadeia de custódia. O laudo pericial é meio de prova previsto no CPC e no CPP.',
    },
    {
        question: 'Quanto tempo leva uma perícia digital?',
        answer:
            'Varia conforme complexidade do caso, volume de dados e tipo de dispositivos envolvidos. Casos simples concluem em dias; perícias complexas podem levar semanas. Prazo é sempre estimado previamente, antes do início.',
    },
    {
        question: 'Que dispositivos podem ser periciados?',
        answer:
            'Computadores, notebooks, smartphones, tablets, servidores, dispositivos de armazenamento (HD, SSD, pen drives), sistemas em nuvem, e-mails, redes sociais, bancos de dados e qualquer meio digital com evidência relevante.',
    },
    {
        question: 'Em quais comarcas há atuação?',
        answer:
            'Atuação pericial em todo território nacional, incluindo varas estaduais, federais e do trabalho. A maior parte do trabalho é conduzida remotamente — extração de evidências, análise forense e elaboração de laudo. Diligências presenciais são realizadas conforme natureza da prova e jurisdição do processo.',
    },
    {
        question: 'Há atuação em casos com criptomoedas?',
        answer:
            'Sim. Rastreamento de transações em redes públicas (Bitcoin, Ethereum e cadeias EVM), identificação de fluxo de fundos entre carteiras e exchanges, análise técnica de smart contracts e investigação de fraudes envolvendo criptoativos — pirâmides financeiras, pagamentos de ransomware, golpes em NFT e phishing de seed phrase. O trabalho observa a Lei 14.478/2022 (Marco Legal dos Ativos Virtuais), as instruções normativas da Receita Federal sobre operações com criptoativos e a Lei 9.613/1998 quando há indícios de lavagem de capitais.',
    },
]

export const ENGAGEMENT = {
    whatsapp_label: '+55 62 99324-8451',
    whatsapp_url: 'https://wa.me/5562993248451',
    email: 'perito@thiagosaraiva.dev',
    hours: 'Seg a Sex · 09h às 18h (Brasília)',
    coverage: 'Atendimento nacional',
}

import {
	Shield,
	HardDrive,
	Search,
	FileText,
	BookOpen,
	Building2,
	MessageSquare,
	Scale,
	ShieldAlert,
	Smartphone,
	GraduationCap,
	Fingerprint,
	ShieldCheck,
	Gavel,
	Briefcase,
	MonitorSmartphone,
	Mail,
	Users,
	Database,
	LinkIcon,
	Microscope,
	ClipboardCheck,
	Award,
} from 'lucide-react'

const PILLARS = [
	{
		icon: Shield,
		title: 'Preservação',
		description: 'Garantia de integridade das evidências com cadeia de custódia documentada',
	},
	{
		icon: HardDrive,
		title: 'Extração',
		description: 'Coleta técnica de dados de dispositivos, sistemas e ambientes digitais',
	},
	{
		icon: Search,
		title: 'Análise',
		description: 'Exame científico e correlação de evidências com metodologia rastreável',
	},
	{
		icon: FileText,
		title: 'Laudo Pericial',
		description: 'Documento técnico com conclusões fundamentadas para apresentação em juízo',
	},
]

const SERVICES = [
	{
		icon: Scale,
		title: 'Assistência Técnica Judicial',
		description:
			'Pareceres técnicos, formulação de quesitos e análise crítica de laudos periciais. Acompanhamento de diligências e suporte técnico às partes no processo.',
	},
	{
		icon: BookOpen,
		title: 'Perícia Judicial',
		description:
			'Análise técnica com base científica para processos cíveis e criminais. Laudos reconhecidos com rigor metodológico e fundamentação técnica.',
	},
	{
		icon: Building2,
		title: 'Investigação Corporativa',
		description:
			'Suporte técnico para incidentes, preservação de evidências e apoio a decisões em contextos corporativos. Compliance, LGPD e resposta a incidentes.',
	},
	{
		icon: Smartphone,
		title: 'Perícia em Dispositivos Móveis',
		description: 'Extração e análise forense de smartphones e tablets. Recuperação de dados, análise de aplicativos, mensagens e metadados.',
	},
	{
		icon: MessageSquare,
		title: 'Perícia em Comunicações Digitais',
		description: 'Análise de WhatsApp, emails, redes sociais e plataformas digitais. Verificação de autenticidade e recuperação de conversas.',
	},
	{
		icon: ShieldAlert,
		title: 'Análise de Fraudes Digitais',
		description: 'Investigação de phishing, ransomware, fraudes bancárias, roubo de dados e crimes cibernéticos.',
	},
]

const CREDENTIALS = [
	{
		icon: GraduationCap,
		title: 'Formação Acadêmica',
		items: ['Cybersecurity — FIAP', 'Engenharia de Software — UniCesumar', 'Publicidade — Faculdade Alves Faria'],
	},
	{
		icon: Fingerprint,
		title: 'Forense Digital',
		items: [
			'Autopsy Forensics, IPED Forensics',
			'Volatility para Análise de Memória',
			'Forense em Dispositivos Móveis e OSINT',
			'Transcrição Forense e Perícias de Áudio',
		],
	},
	{
		icon: ShieldCheck,
		title: 'Cyber Segurança',
		items: ['Pentest, OWASP Top 10, MITRE ATT&CK', 'Threat Intelligence e Resposta a Incidentes', 'Ransomware e Segurança Defensiva'],
	},
	{
		icon: Scale,
		title: 'Governança & Compliance',
		items: ['LGPD para Profissionais de Tecnologia', 'Direito Digital e Fundamentos de GRC', 'Gestão de Riscos e Due Diligence'],
	},
]

const EXPERIENCE_COMPANIES = ['Squarespace', 'Pinterest', 'Hospital Albert Einstein', 'Accenture', 'Cheesecake Labs', 'BrasilSeg', 'Zoom']

const METHODOLOGY = [
	{
		step: '01',
		title: 'Preservação',
		description: 'Isolamento e proteção das evidências digitais com hash de integridade',
	},
	{
		step: '02',
		title: 'Coleta',
		description: 'Extração técnica seguindo protocolos forenses e cadeia de custódia',
	},
	{
		step: '03',
		title: 'Análise',
		description: 'Exame científico com ferramentas forenses certificadas',
	},
	{
		step: '04',
		title: 'Documentação',
		description: 'Elaboração de laudo técnico fundamentado e rastreável',
	},
	{
		step: '05',
		title: 'Apresentação',
		description: 'Sustentação técnica em audiências e esclarecimento de quesitos',
	},
]

const AREAS = [
	{
		icon: Gavel,
		title: 'Cível',
		items: ['Contratos digitais', 'Propriedade intelectual', 'Documentos eletrônicos'],
	},
	{
		icon: Fingerprint,
		title: 'Criminal',
		items: ['Crimes cibernéticos', 'Fraudes digitais', 'Defesa criminal'],
	},
	{
		icon: Briefcase,
		title: 'Trabalhista',
		items: ['Evidências digitais', 'Relações de trabalho', 'Provas eletrônicas'],
	},
	{
		icon: Building2,
		title: 'Corporativo',
		items: ['Compliance', 'Investigações internas', 'LGPD'],
	},
]

const EVIDENCE_TYPES = [
	{ icon: MonitorSmartphone, label: 'Computadores e Servidores' },
	{ icon: Smartphone, label: 'Smartphones e Tablets' },
	{ icon: Mail, label: 'E-mails e Comunicações' },
	{ icon: Users, label: 'Redes Sociais' },
	{ icon: Database, label: 'Banco de Dados e Logs' },
	{ icon: FileText, label: 'Documentos Digitais' },
	{ icon: LinkIcon, label: 'Blockchain e Criptomoedas' },
]

const TRUST = [
	{
		icon: Microscope,
		title: 'Fundamento Científico',
		description: 'Toda análise respaldada por metodologia científica reconhecida',
	},
	{
		icon: ClipboardCheck,
		title: 'Rigor Metodológico',
		description: 'Rastreabilidade completa de cada etapa do processo pericial',
	},
	{
		icon: Scale,
		title: 'Independência Técnica',
		description: 'Conclusões baseadas exclusivamente em evidências e análise objetiva',
	},
	{
		icon: BookOpen,
		title: 'Clareza Probatória',
		description: 'Laudos em linguagem técnica clara, compreensíveis para operadores do Direito',
	},
	{
		icon: Shield,
		title: 'Conformidade Legal',
		description: 'Atuação em conformidade com o CPC, CPP e LGPD',
	},
	{
		icon: Award,
		title: 'Experiência Comprovada',
		description: 'Atuação consolidada em processos judiciais e investigações corporativas',
	},
]

const FAQ = [
	{
		question: 'O que é cadeia de custódia digital?',
		answer: 'A cadeia de custódia é o registro documentado de todas as etapas de manuseio da evidência digital, desde a coleta até a apresentação em juízo. Garante que a prova não foi alterada e mantém sua validade jurídica, conforme previsto no Art. 158-A do CPP.',
	},
	{
		question: 'Qual a diferença entre perito judicial e assistente técnico?',
		answer: 'O perito judicial é nomeado pelo juiz para produzir o laudo pericial oficial. O assistente técnico é indicado pelas partes para acompanhar a perícia, formular quesitos e produzir parecer técnico divergente, se necessário.',
	},
	{
		question: 'A perícia digital serve como prova em tribunal?',
		answer: 'Sim. A perícia digital produz provas técnicas com validade jurídica, desde que realizada com metodologia adequada e respeito à cadeia de custódia. O laudo pericial é um dos meios de prova previstos no Código de Processo Civil e no Código de Processo Penal.',
	},
	{
		question: 'Quanto tempo leva uma perícia digital?',
		answer: 'O prazo varia conforme a complexidade do caso, volume de dados e tipo de dispositivos envolvidos. Casos simples podem ser concluídos em dias, enquanto perícias complexas podem levar semanas. O prazo é sempre estimado previamente.',
	},
	{
		question: 'Que tipos de dispositivos podem ser periciados?',
		answer: 'Computadores, notebooks, smartphones, tablets, servidores, dispositivos de armazenamento (HD, SSD, pen drives), sistemas em nuvem, emails, redes sociais, bancos de dados e qualquer meio digital que contenha evidências relevantes.',
	},
]

export const PAGE_CONSTANTS = {
	PILLARS,
	SERVICES,
	CREDENTIALS,
	EXPERIENCE_COMPANIES,
	METHODOLOGY,
	AREAS,
	EVIDENCE_TYPES,
	TRUST,
	FAQ,
}

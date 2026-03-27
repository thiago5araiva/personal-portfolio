'use client'

import { useEffect, useRef, useState } from 'react'
import {
    Shield,
    HardDrive,
    Search,
    FileText,
    Scale,
    BookOpen,
    Building2,
    Smartphone,
    MessageSquare,
    ShieldAlert,
    Microscope,
    ClipboardCheck,
    Award,
    ChevronDown,
    Phone,
    Mail,
    Clock,
    ArrowRight,
    Fingerprint,
    Binary,
    Lock,
    Briefcase,
    Gavel,
    Users,
    Database,
    Globe,
    MonitorSmartphone,
    LinkIcon,
    GraduationCap,
    ShieldCheck,
    User,
} from 'lucide-react'

/* ─────────────────────────────────────────────
   Intersection Observer hook for scroll reveals
   ───────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true)
                    obs.unobserve(el)
                }
            },
            { threshold },
        )
        obs.observe(el)
        return () => obs.disconnect()
    }, [threshold])

    return { ref, visible }
}

function RevealSection({
    children,
    className = '',
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const { ref, visible } = useReveal()
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${
                visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    )
}

/* ─────────────────────────────────────────────
   Data
   ───────────────────────────────────────────── */
const PILLARS = [
    {
        icon: Shield,
        title: 'Preservação',
        description:
            'Garantia de integridade das evidências com cadeia de custódia documentada',
    },
    {
        icon: HardDrive,
        title: 'Extração',
        description:
            'Coleta técnica de dados de dispositivos, sistemas e ambientes digitais',
    },
    {
        icon: Search,
        title: 'Análise',
        description:
            'Exame científico e correlação de evidências com metodologia rastreável',
    },
    {
        icon: FileText,
        title: 'Laudo Pericial',
        description:
            'Documento técnico com conclusões fundamentadas para apresentação em juízo',
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
        description:
            'Extração e análise forense de smartphones e tablets. Recuperação de dados, análise de aplicativos, mensagens e metadados.',
    },
    {
        icon: MessageSquare,
        title: 'Perícia em Comunicações Digitais',
        description:
            'Análise de WhatsApp, emails, redes sociais e plataformas digitais. Verificação de autenticidade e recuperação de conversas.',
    },
    {
        icon: ShieldAlert,
        title: 'Análise de Fraudes Digitais',
        description:
            'Investigação de phishing, ransomware, fraudes bancárias, roubo de dados e crimes cibernéticos.',
    },
]

const CREDENTIALS = [
    {
        icon: GraduationCap,
        title: 'Formação Acadêmica',
        items: [
            'Cybersecurity — FIAP (2023–2027)',
            'Engenharia de Software — UniCesumar',
            'Publicidade — Faculdade Alves Faria',
        ],
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
        items: [
            'Pentest, OWASP Top 10, MITRE ATT&CK',
            'Threat Intelligence e Resposta a Incidentes',
            'Ransomware e Segurança Defensiva',
        ],
    },
    {
        icon: Scale,
        title: 'Governança & Compliance',
        items: [
            'LGPD para Profissionais de Tecnologia',
            'Direito Digital e Fundamentos de GRC',
            'Gestão de Riscos e Due Diligence',
        ],
    },
]

const EXPERIENCE_COMPANIES = [
    'Squarespace',
    'Pinterest',
    'Hospital Albert Einstein',
    'Accenture',
    'Cheesecake Labs',
    'BrasilSeg',
]

const METHODOLOGY = [
    {
        step: '01',
        title: 'Preservação',
        description:
            'Isolamento e proteção das evidências digitais com hash de integridade',
    },
    {
        step: '02',
        title: 'Coleta',
        description:
            'Extração técnica seguindo protocolos forenses e cadeia de custódia',
    },
    {
        step: '03',
        title: 'Análise',
        description:
            'Exame científico com ferramentas forenses certificadas',
    },
    {
        step: '04',
        title: 'Documentação',
        description:
            'Elaboração de laudo técnico fundamentado e rastreável',
    },
    {
        step: '05',
        title: 'Apresentação',
        description:
            'Sustentação técnica em audiências e esclarecimento de quesitos',
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
        description:
            'Toda análise respaldada por metodologia científica reconhecida',
    },
    {
        icon: ClipboardCheck,
        title: 'Rigor Metodológico',
        description:
            'Rastreabilidade completa de cada etapa do processo pericial',
    },
    {
        icon: Scale,
        title: 'Independência Técnica',
        description:
            'Conclusões baseadas exclusivamente em evidências e análise objetiva',
    },
    {
        icon: BookOpen,
        title: 'Clareza Probatória',
        description:
            'Laudos em linguagem técnica clara, compreensíveis para operadores do Direito',
    },
    {
        icon: Shield,
        title: 'Conformidade Legal',
        description: 'Atuação em conformidade com o CPC, CPP e LGPD',
    },
    {
        icon: Award,
        title: 'Experiência Comprovada',
        description:
            'Atuação consolidada em processos judiciais e investigações corporativas',
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

/* ─────────────────────────────────────────────
   Component
   ───────────────────────────────────────────── */
export default function PeritoPage() {
    return (
        <div className="scroll-smooth">
            {/* ═══ HERO ═══ */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary-default">
                {/* Geometric grid overlay */}
                <div className="absolute inset-0 opacity-[0.04]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="grid"
                                width="60"
                                height="60"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 60 0 L 0 0 0 60"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-white/10 rounded-full text-white/50 text-xs tracking-[0.2em] uppercase font-light">
                        <Binary className="w-3.5 h-3.5" />
                        Perícia Digital Forense
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-6">
                        Perito Judicial
                        <br />
                        <span className="font-bold">em Tecnologia</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-white/60 font-light leading-relaxed mb-10">
                        Análise técnica com fundamento científico, rigor
                        metodológico e credibilidade probatória para decisões
                        judiciais seguras
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/5562993248451"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-caesar-burgundy text-white text-sm font-medium tracking-wide rounded-sm hover:bg-caesar-burgundy/90 transition-colors"
                        >
                            Solicitar Consulta Técnica
                            <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="#servicos"
                            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white/70 text-sm font-light tracking-wide rounded-sm hover:border-white/40 hover:text-white transition-colors"
                        >
                            Conheça os Serviços
                        </a>
                    </div>
                </div>

            </section>

            {/* ═══ O QUE É PERÍCIA DIGITAL ═══ */}
            <section className="py-20 lg:py-28 bg-background-primary">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealSection>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-xs tracking-[0.25em] uppercase text-font-low font-medium mb-4 block">
                                Fundamentos
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-font-high tracking-tight mb-6">
                                O que é Perícia Digital Forense
                            </h2>
                            <p className="text-font-medium font-light leading-relaxed text-base lg:text-lg">
                                A perícia digital forense é a disciplina
                                técnico-científica responsável pela coleta,
                                preservação, análise e apresentação de
                                evidências digitais em processos judiciais.
                                Garante que provas eletrônicas sejam tratadas
                                com integridade, rastreabilidade e validade
                                jurídica.
                            </p>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {PILLARS.map((pillar, i) => (
                            <RevealSection key={pillar.title} delay={i * 100}>
                                <div className="group relative p-6 lg:p-8 bg-white border border-border-primary/40 rounded-sm hover:border-primary-default/30 transition-all duration-300">
                                    <div className="flex items-center justify-center w-12 h-12 mb-5 bg-primary-default/5 rounded-sm">
                                        <pillar.icon className="w-5 h-5 text-primary-default" />
                                    </div>
                                    <h3 className="text-sm font-bold text-font-high tracking-wide uppercase mb-3">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-sm text-font-medium font-light leading-relaxed">
                                        {pillar.description}
                                    </p>
                                    {/* Step number watermark */}
                                    <span className="absolute top-4 right-4 text-5xl font-bold text-primary-default/[0.04] leading-none select-none">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SERVIÇOS ═══ */}
            <section
                id="servicos"
                className="py-20 lg:py-28 bg-white scroll-mt-8"
            >
                <div className="max-w-6xl mx-auto px-6">
                    <RevealSection>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-xs tracking-[0.25em] uppercase text-font-low font-medium mb-4 block">
                                Especialidades
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-font-high tracking-tight mb-6">
                                Serviços Periciais
                            </h2>
                            <p className="text-font-medium font-light leading-relaxed">
                                Atuação técnica especializada em diversas
                                modalidades de perícia digital, com rigor
                                científico e fundamentação probatória.
                            </p>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICES.map((service, i) => (
                            <RevealSection key={service.title} delay={i * 80}>
                                <div className="group h-full p-6 lg:p-8 border border-border-primary/40 rounded-sm hover:border-primary-default/20 hover:shadow-sm transition-all duration-300 bg-background-primary/50">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="flex items-center justify-center w-10 h-10 bg-primary-default/5 rounded-sm group-hover:bg-primary-default/10 transition-colors">
                                            <service.icon className="w-4.5 h-4.5 text-primary-default" />
                                        </div>
                                        <h3 className="text-sm font-bold text-font-high tracking-wide">
                                            {service.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm text-font-medium font-light leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ SOBRE O PERITO ═══ */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealSection>
                        <div className="text-center mb-16">
                            <span className="text-xs tracking-[0.25em] uppercase text-font-low font-medium mb-4 block">
                                O Profissional
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-font-high tracking-tight">
                                Sobre o Perito
                            </h2>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-12">
                        {/* Bio — left column */}
                        <RevealSection className="lg:col-span-2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="flex items-center justify-center w-14 h-14 bg-primary-default rounded-sm">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-font-high">
                                        Thiago Saraiva
                                    </h3>
                                    <p className="text-xs text-font-low tracking-wide">
                                        Engenheiro de Software &amp; Especialista em Forense Digital
                                    </p>
                                </div>
                            </div>

                            <p className="text-sm text-font-medium font-light leading-relaxed mb-4">
                                Mais de 9 anos de experiência desenvolvendo
                                soluções escaláveis e de alta performance para
                                empresas globais nos setores de tecnologia, saúde
                                e financeiro — incluindo projetos internacionais
                                de alto impacto nos Estados Unidos.
                            </p>
                            <p className="text-sm text-font-medium font-light leading-relaxed mb-4">
                                Especialização em Cyber Segurança com foco em{' '}
                                <span className="font-medium text-font-high">
                                    Computação Forense, Perícia Digital, Pentest,
                                    Threat Intelligence e Resposta a Incidentes
                                </span>
                                . Formação que combina profundidade técnica em
                                engenharia de software com rigor metodológico em
                                análise forense.
                            </p>
                            <p className="text-sm text-font-medium font-light leading-relaxed">
                                Essa combinação rara permite compreender sistemas
                                por dentro — não apenas analisar superficialmente
                                — garantindo análises técnicas mais precisas e
                                laudos fundamentados com profundidade.
                            </p>
                        </RevealSection>

                        {/* Credentials — right column */}
                        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {CREDENTIALS.map((cred, i) => (
                                <RevealSection key={cred.title} delay={i * 100}>
                                    <div className="h-full p-5 bg-background-primary border border-border-primary/40 rounded-sm">
                                        <div className="flex items-center gap-2.5 mb-3">
                                            <cred.icon className="w-4 h-4 text-primary-default" />
                                            <h4 className="text-xs font-bold text-font-high tracking-wide uppercase">
                                                {cred.title}
                                            </h4>
                                        </div>
                                        <ul className="space-y-1.5">
                                            {cred.items.map((item) => (
                                                <li
                                                    key={item}
                                                    className="text-xs text-font-medium font-light leading-relaxed flex items-start gap-2"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-primary-default/30 mt-1.5 shrink-0" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </RevealSection>
                            ))}
                        </div>
                    </div>

                    {/* Experience companies */}
                    <RevealSection delay={300}>
                        <div className="pt-8 border-t border-border-primary/40">
                            <p className="text-xs tracking-[0.2em] uppercase text-font-low font-medium text-center mb-5">
                                Experiência em empresas de referência
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {EXPERIENCE_COMPANIES.map((company) => (
                                    <span
                                        key={company}
                                        className="px-4 py-2 text-xs font-medium text-font-medium bg-background-primary border border-border-primary/40 rounded-sm"
                                    >
                                        {company}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ═══ METODOLOGIA ═══ */}
            <section className="py-20 lg:py-28 bg-primary-default relative overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="dots"
                                width="20"
                                height="20"
                                patternUnits="userSpaceOnUse"
                            >
                                <circle cx="1" cy="1" r="0.5" fill="white" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#dots)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-6">
                    <RevealSection>
                        <div className="text-center mb-16">
                            <span className="text-xs tracking-[0.25em] uppercase text-white/40 font-medium mb-4 block">
                                Processo
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
                                Metodologia Científica e Rastreável
                            </h2>
                            <p className="max-w-2xl mx-auto text-white/50 font-light leading-relaxed">
                                Todo trabalho pericial segue uma metodologia
                                rigorosa que garante a validade jurídica das
                                evidências e a rastreabilidade de cada etapa.
                            </p>
                        </div>
                    </RevealSection>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[23px] lg:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                        <div className="space-y-8 lg:space-y-12">
                            {METHODOLOGY.map((step, i) => (
                                <RevealSection key={step.step} delay={i * 120}>
                                    <div
                                        className={`relative flex items-start gap-6 lg:gap-12 ${
                                            i % 2 === 0
                                                ? 'lg:flex-row'
                                                : 'lg:flex-row-reverse'
                                        }`}
                                    >
                                        {/* Content — mobile: always right; desktop: alternates */}
                                        <div className="lg:hidden flex-1 pl-6">
                                            <div className="text-xs font-bold text-caesar-burgundy tracking-[0.2em] mb-1">
                                                ETAPA {step.step}
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-white/50 font-light leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Desktop layout */}
                                        <div
                                            className={`hidden lg:block flex-1 ${
                                                i % 2 === 0
                                                    ? 'text-right pr-12'
                                                    : 'text-left pl-12'
                                            }`}
                                        >
                                            <div className="text-xs font-bold text-caesar-burgundy tracking-[0.2em] mb-1">
                                                ETAPA {step.step}
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-white/50 font-light leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>

                                        {/* Node */}
                                        <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 z-10 flex items-center justify-center w-[47px] h-[47px] rounded-full border border-white/20 bg-primary-default">
                                            <span className="text-xs font-bold text-white/70">
                                                {step.step}
                                            </span>
                                        </div>

                                        {/* Spacer for desktop */}
                                        <div className="hidden lg:block flex-1" />
                                    </div>
                                </RevealSection>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ ÁREAS DE ATUAÇÃO ═══ */}
            <section className="py-20 lg:py-28 bg-background-primary">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealSection>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-xs tracking-[0.25em] uppercase text-font-low font-medium mb-4 block">
                                Abrangência
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-font-high tracking-tight mb-6">
                                Atuação em Diversas Esferas
                            </h2>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {AREAS.map((area, i) => (
                            <RevealSection key={area.title} delay={i * 100}>
                                <div className="p-6 bg-white border border-border-primary/40 rounded-sm">
                                    <div className="flex items-center gap-3 mb-4">
                                        <area.icon className="w-5 h-5 text-primary-default" />
                                        <h3 className="text-sm font-bold text-font-high tracking-wide uppercase">
                                            {area.title}
                                        </h3>
                                    </div>
                                    <ul className="space-y-2">
                                        {area.items.map((item) => (
                                            <li
                                                key={item}
                                                className="text-sm text-font-medium font-light flex items-start gap-2"
                                            >
                                                <span className="w-1 h-1 rounded-full bg-caesar-burgundy mt-2 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </RevealSection>
                        ))}
                    </div>

                    {/* Evidence types */}
                    <RevealSection delay={200}>
                        <div className="pt-8 border-t border-border-primary/40">
                            <p className="text-xs tracking-[0.2em] uppercase text-font-low font-medium text-center mb-6">
                                Tipos de Evidência
                            </p>
                            <div className="flex flex-wrap justify-center gap-3">
                                {EVIDENCE_TYPES.map((type) => (
                                    <div
                                        key={type.label}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border-primary/40 rounded-sm text-xs text-font-medium font-light"
                                    >
                                        <type.icon className="w-3.5 h-3.5 text-primary-default/60" />
                                        {type.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </RevealSection>
                </div>
            </section>

            {/* ═══ POR QUE CONFIAR ═══ */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <RevealSection>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <span className="text-xs tracking-[0.25em] uppercase text-font-low font-medium mb-4 block">
                                Credibilidade
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-font-high tracking-tight mb-6">
                                Compromisso com a Verdade Técnica
                            </h2>
                        </div>
                    </RevealSection>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {TRUST.map((item, i) => (
                            <RevealSection key={item.title} delay={i * 80}>
                                <div className="flex gap-4 p-6 rounded-sm hover:bg-background-primary/80 transition-colors">
                                    <div className="flex items-center justify-center w-10 h-10 shrink-0 bg-primary-default/5 rounded-sm">
                                        <item.icon className="w-4.5 h-4.5 text-primary-default" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-font-high mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-font-medium font-light leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ FAQ ═══ */}
            <section className="py-20 lg:py-28 bg-background-primary">
                <div className="max-w-3xl mx-auto px-6">
                    <RevealSection>
                        <div className="text-center mb-12">
                            <span className="text-xs tracking-[0.25em] uppercase text-font-low font-medium mb-4 block">
                                Dúvidas
                            </span>
                            <h2 className="text-3xl lg:text-4xl font-bold text-font-high tracking-tight">
                                Perguntas Frequentes
                            </h2>
                        </div>
                    </RevealSection>

                    <div className="space-y-3">
                        {FAQ.map((item, i) => (
                            <RevealSection key={i} delay={i * 60}>
                                <details className="group bg-white border border-border-primary/40 rounded-sm overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex items-center justify-between cursor-pointer p-5 lg:p-6 select-none">
                                        <span className="text-sm font-medium text-font-high pr-4">
                                            {item.question}
                                        </span>
                                        <ChevronDown className="w-4 h-4 text-font-low shrink-0 transition-transform duration-200 group-open:rotate-180" />
                                    </summary>
                                    <div className="px-5 lg:px-6 pb-5 lg:pb-6 -mt-1">
                                        <p className="text-sm text-font-medium font-light leading-relaxed border-t border-border-primary/20 pt-4">
                                            {item.answer}
                                        </p>
                                    </div>
                                </details>
                            </RevealSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ CONTATO / CTA ═══ */}
            <section
                id="contato"
                className="py-20 lg:py-28 bg-primary-default relative scroll-mt-8"
            >
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern
                                id="grid2"
                                width="40"
                                height="40"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 40 0 L 0 0 0 40"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.5"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid2)" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <RevealSection>
                        <Lock className="w-6 h-6 text-white/30 mx-auto mb-6" />
                        <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
                            Solicite uma Consulta Técnica
                        </h2>
                        <p className="text-white/50 font-light leading-relaxed mb-10">
                            Entre em contato para discutir seu caso com sigilo e
                            profissionalismo
                        </p>
                    </RevealSection>

                    <RevealSection delay={150}>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            <div className="flex items-center gap-3 text-white/60">
                                <Phone className="w-4 h-4" />
                                <a href="https://wa.me/5562993248451" target="_blank" rel="noopener noreferrer" className="text-sm font-light hover:text-white transition-colors">
                                    +55 62 99324-8451
                                </a>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-white/20" />
                            <div className="flex items-center gap-3 text-white/60">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:perito@thiagosaraiva.dev" className="text-sm font-light hover:text-white transition-colors">
                                    perito@thiagosaraiva.dev
                                </a>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-white/20" />
                            <div className="flex items-center gap-3 text-white/60">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm font-light">
                                    Seg–Sex, 9h às 18h
                                </span>
                            </div>
                        </div>
                    </RevealSection>

                    <RevealSection delay={300}>
                        <a
                            href="https://wa.me/5562993248451"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-caesar-burgundy text-white font-medium tracking-wide rounded-sm hover:bg-caesar-burgundy/90 transition-colors text-sm"
                        >
                            Falar com o Perito
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </RevealSection>
                </div>
            </section>

            {/* ═══ FOOTER ═══ */}
            <footer className="py-8 bg-primary-default border-t border-white/5">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <p className="text-xs text-white/30 font-light tracking-wide">
                        Perito Judicial em Informática — Perícia Digital Forense
                    </p>
                </div>
            </footer>
        </div>
    )
}

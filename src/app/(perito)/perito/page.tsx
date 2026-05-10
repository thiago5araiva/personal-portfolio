import { ChevronDown } from 'lucide-react'
import ConversionLink from './components/conversion-link'
import PeritoToc from './components/perito-toc'
import {
    CAPABILITIES,
    CREDENTIALS,
    ENGAGEMENT,
    EVIDENCE_TYPES,
    FAQ,
    HERO_META,
    METHODOLOGY,
    PRACTICE,
    SCOPE_AREAS,
    TOC_SECTIONS,
} from './constants'

const sectionIdLookup = Object.fromEntries(
    TOC_SECTIONS.map((s) => [s.id, s])
)

function SectionHeader({
    id,
    overline,
}: {
    id: string
    overline?: string
}) {
    const section = sectionIdLookup[id]
    return (
        <header className="mb-10 lg:mb-14">
            <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-instrument-cyan mb-3">
                {section.code} / {section.label}
                {overline ? (
                    <span className="text-caesar-black/35"> · {overline}</span>
                ) : null}
            </p>
            <h2 className="font-display font-medium text-[var(--type-h2)] tracking-editorial text-caesar-black leading-[1.05] max-w-[24ch]">
                {section.label}
            </h2>
        </header>
    )
}

export default function PeritoPage() {
    return (
        <div className="bg-caesar-white text-caesar-black">
            {/* Top utility bar */}
            <div className="border-b border-caesar-black/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between font-mono text-[0.625rem] uppercase tracking-meta text-caesar-black/45">
                    <span className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-instrument-cyan" />
                        <span>
                            Atendimento nacional · disponível para casos
                        </span>
                    </span>
                    <a
                        href={ENGAGEMENT.whatsapp_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:inline text-caesar-black/55 hover:text-caesar-burgundy transition-colors">
                        {ENGAGEMENT.whatsapp_label}
                    </a>
                </div>
            </div>

            {/* Hero */}
            <header className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 lg:pt-24 pb-16 lg:pb-24 border-b border-caesar-black/10">
                <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45 mb-10">
                    <span className="text-instrument-cyan">
                        {PRACTICE.practitioner}
                    </span>
                    <span className="text-caesar-black/20 mx-3">/</span>
                    {PRACTICE.role}
                </p>

                <h1 className="font-display font-medium text-[var(--type-display)] tracking-tightest leading-[0.98] text-caesar-black max-w-[18ch]">
                    {PRACTICE.thesis_pt}{' '}
                    <span className="text-caesar-black/55">
                        {PRACTICE.thesis_pt_emphasis}
                    </span>
                </h1>

                <p className="font-mono text-sm text-caesar-black/50 mt-8 max-w-md leading-relaxed">
                    {PRACTICE.thesis_secondary}
                </p>

                <dl className="mt-14 lg:mt-20 pt-8 border-t border-caesar-black/10 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 font-mono text-[0.6875rem] uppercase tracking-meta">
                    {HERO_META.map((m) => (
                        <div key={m.label}>
                            <dt className="text-caesar-black/40 mb-2">
                                {m.label}
                            </dt>
                            <dd className="text-caesar-black/85">
                                {m.value}
                                {m.accent ? (
                                    <span className="text-instrument-cyan">
                                        {' '}
                                        {m.accent}
                                    </span>
                                ) : null}
                            </dd>
                        </div>
                    ))}
                </dl>
            </header>

            {/* Body grid: ToC + content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 lg:grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-24">
                <PeritoToc />

                <div>
                    {/* 01 — Capacidades */}
                    <section
                        id="capabilities"
                        className="pt-16 lg:pt-24 pb-16 lg:pb-24 scroll-mt-16">
                        <SectionHeader
                            id="capabilities"
                            overline="4 famílias técnicas"
                        />

                        <div className="border-t border-caesar-black/10 divide-y divide-caesar-black/10">
                            {CAPABILITIES.map((cap) => (
                                <article
                                    key={cap.code}
                                    className="grid grid-cols-12 gap-x-6 gap-y-5 py-10 lg:py-12">
                                    <div className="col-span-12 lg:col-span-3">
                                        <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-instrument-cyan mb-2">
                                            {cap.code}
                                        </p>
                                        <h3 className="font-display text-2xl lg:text-[1.625rem] tracking-editorial text-caesar-black leading-[1.1]">
                                            {cap.title}
                                        </h3>
                                    </div>

                                    <div className="col-span-12 lg:col-span-9">
                                        <p className="text-base text-caesar-black/75 leading-relaxed max-w-[60ch]">
                                            {cap.description}
                                        </p>

                                        <dl className="mt-8 grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-x-6 gap-y-4">
                                            <dt className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 pt-0.5">
                                                Ferramentas
                                            </dt>
                                            <dd className="font-mono text-sm text-caesar-black/80 leading-relaxed">
                                                {cap.tooling.join(' · ')}
                                            </dd>

                                            <dt className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 pt-0.5">
                                                Abrangência
                                            </dt>
                                            <dd className="text-sm text-caesar-black/70 leading-relaxed">
                                                {cap.coverage.join(' · ')}
                                            </dd>
                                        </dl>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    {/* 02 — Metodologia */}
                    <section
                        id="methodology"
                        className="pt-16 lg:pt-24 pb-16 lg:pb-24 border-t border-caesar-black/10 scroll-mt-16">
                        <SectionHeader
                            id="methodology"
                            overline="5 etapas · cadeia rastreável"
                        />

                        <p className="text-base text-caesar-black/70 leading-relaxed max-w-[60ch] mb-10 lg:mb-12">
                            Cada etapa tem entrada e saída explícitas. O laudo
                            final reproduz a sequência completa, permitindo que
                            qualquer perito reverifique o trabalho ponto a ponto.
                        </p>

                        <ol className="border-t border-caesar-black/10 divide-y divide-caesar-black/10">
                            {METHODOLOGY.map((step) => (
                                <li
                                    key={step.step}
                                    className="grid grid-cols-12 gap-x-6 gap-y-4 py-8 lg:py-10">
                                    <div className="col-span-12 lg:col-span-2">
                                        <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-instrument-cyan">
                                            Etapa {step.step}
                                        </p>
                                    </div>
                                    <div className="col-span-12 lg:col-span-6">
                                        <h3 className="font-display text-xl lg:text-2xl tracking-editorial text-caesar-black leading-tight mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-sm text-caesar-black/70 leading-relaxed max-w-[55ch]">
                                            {step.description}
                                        </p>
                                    </div>
                                    <div className="col-span-12 lg:col-span-4 font-mono text-[0.6875rem] uppercase tracking-meta space-y-2 lg:text-right">
                                        <div>
                                            <span className="text-caesar-black/40">
                                                entrada
                                            </span>{' '}
                                            <span className="text-caesar-black/80 normal-case tracking-wider">
                                                {step.input}
                                            </span>
                                        </div>
                                        <div>
                                            <span className="text-caesar-black/40">
                                                saída
                                            </span>{' '}
                                            <span className="text-instrument-cyan normal-case tracking-wider">
                                                {step.output}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </section>

                    {/* 03 — Áreas de atuação */}
                    <section
                        id="scope"
                        className="pt-16 lg:pt-24 pb-16 lg:pb-24 border-t border-caesar-black/10 scroll-mt-16">
                        <SectionHeader
                            id="scope"
                            overline="cobertura nacional · todas as esferas"
                        />

                        <p className="text-base text-caesar-black/70 leading-relaxed max-w-[60ch] mb-10 lg:mb-12">
                            Atuação em qualquer comarca do território nacional —
                            varas estaduais, federais e do trabalho. A maior
                            parte da perícia é conduzida remotamente; diligências
                            presenciais são avaliadas conforme natureza da prova.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 border-t border-caesar-black/10 pt-10">
                            {SCOPE_AREAS.map((area) => (
                                <div key={area.code}>
                                    <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-instrument-cyan mb-2">
                                        {area.code}
                                    </p>
                                    <h3 className="font-display text-xl tracking-editorial text-caesar-black mb-4">
                                        {area.title}
                                    </h3>
                                    <ul className="space-y-1.5">
                                        {area.items.map((item) => (
                                            <li
                                                key={item}
                                                className="text-sm text-caesar-black/75 leading-relaxed">
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className="mt-14 pt-8 border-t border-caesar-black/10">
                            <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 mb-5">
                                Tipos de evidência · {EVIDENCE_TYPES.length}
                            </p>
                            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-caesar-black/75">
                                {EVIDENCE_TYPES.map((type, i) => (
                                    <li
                                        key={type}
                                        className="flex items-center gap-3">
                                        <span className="font-mono text-[0.625rem] tracking-meta text-instrument-cyan">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        {type}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* 04 — Credenciais */}
                    <section
                        id="credentials"
                        className="pt-16 lg:pt-24 pb-16 lg:pb-24 border-t border-caesar-black/10 scroll-mt-16">
                        <SectionHeader id="credentials" />

                        <div className="border-t border-caesar-black/10 pt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
                            <div>
                                <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 mb-5">
                                    Formação acadêmica
                                </p>
                                <ul className="space-y-3">
                                    {CREDENTIALS.education.map((e) => (
                                        <li
                                            key={e.title}
                                            className="grid grid-cols-[5.5rem_1fr] gap-3 items-baseline">
                                            <span className="font-mono text-xs text-instrument-cyan tracking-wider">
                                                {e.year}
                                            </span>
                                            <span className="text-sm text-caesar-black/85">
                                                {e.title}
                                                <span className="text-caesar-black/45">
                                                    {' '}
                                                    · {e.org}
                                                </span>
                                                {e.note ? (
                                                    <span className="font-mono text-[0.625rem] uppercase tracking-meta text-caesar-black/40 ml-2">
                                                        ({e.note})
                                                    </span>
                                                ) : null}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 mt-10 mb-5">
                                    Certificações em engenharia
                                </p>
                                <ul className="space-y-3">
                                    {CREDENTIALS.engineering.map((e) => (
                                        <li
                                            key={e.title}
                                            className="grid grid-cols-[5.5rem_1fr] gap-3 items-baseline">
                                            <span className="font-mono text-xs text-instrument-cyan tracking-wider">
                                                {e.year}
                                            </span>
                                            <span className="text-sm text-caesar-black/85">
                                                {e.title}
                                                <span className="text-caesar-black/45">
                                                    {' '}
                                                    · {e.org}
                                                </span>
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 mt-10 mb-5">
                                    Idiomas
                                </p>
                                <ul className="text-sm text-caesar-black/75 space-y-1.5">
                                    {CREDENTIALS.languages.map((l) => (
                                        <li key={l}>{l}</li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 mb-5">
                                    Especialização forense
                                </p>
                                <ul className="space-y-1.5 mb-10">
                                    {CREDENTIALS.forensic.map((c) => (
                                        <li
                                            key={c}
                                            className="text-sm text-caesar-black/80 leading-relaxed">
                                            {c}
                                        </li>
                                    ))}
                                </ul>

                                <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 mb-5">
                                    Segurança · pentest · resposta a incidentes
                                </p>
                                <ul className="space-y-1.5 mb-10">
                                    {CREDENTIALS.security.map((c) => (
                                        <li
                                            key={c}
                                            className="text-sm text-caesar-black/80 leading-relaxed">
                                            {c}
                                        </li>
                                    ))}
                                </ul>

                                <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 mb-5">
                                    Conformidade · GRC · LGPD
                                </p>
                                <ul className="space-y-1.5">
                                    {CREDENTIALS.compliance.map((c) => (
                                        <li
                                            key={c}
                                            className="text-sm text-caesar-black/80 leading-relaxed">
                                            {c}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="mt-14 pt-8 border-t border-caesar-black/10">
                            <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 mb-5">
                                Experiência em engenharia · 9 anos
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                                {CREDENTIALS.experience.map((x) => (
                                    <li
                                        key={x}
                                        className="text-sm text-caesar-black/80">
                                        {x}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-14 pt-8 border-t border-caesar-black/10">
                            <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/40 mb-5">
                                Sobre o perito
                            </p>
                            <p className="text-base text-caesar-black/75 leading-relaxed max-w-[64ch]">
                                {PRACTICE.bio_pt}
                            </p>
                        </div>
                    </section>

                    {/* 05 — Perguntas frequentes */}
                    <section
                        id="faq"
                        className="pt-16 lg:pt-24 pb-16 lg:pb-24 border-t border-caesar-black/10 scroll-mt-16">
                        <SectionHeader
                            id="faq"
                            overline={`${FAQ.length} dúvidas comuns`}
                        />

                        <div className="border-t border-caesar-black/10 divide-y divide-caesar-black/10">
                            {FAQ.map((item, i) => (
                                <details
                                    key={item.question}
                                    className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-6 cursor-pointer select-none">
                                        <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-instrument-cyan">
                                            P{String(i + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-base lg:text-lg text-caesar-black font-medium leading-snug">
                                            {item.question}
                                        </span>
                                        <ChevronDown
                                            className="w-4 h-4 text-caesar-black/40 transition-transform duration-300 ease-out-quart group-open:rotate-180"
                                            aria-hidden
                                        />
                                    </summary>
                                    <div className="grid grid-cols-[3rem_1fr_2rem] gap-4 pb-7 -mt-1">
                                        <span aria-hidden />
                                        <p className="text-sm text-caesar-black/70 leading-relaxed max-w-[60ch]">
                                            {item.answer}
                                        </p>
                                        <span aria-hidden />
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* 06 — Contato */}
                    <section
                        id="engagement"
                        className="pt-16 lg:pt-24 pb-20 lg:pb-32 border-t border-caesar-black/10 scroll-mt-16">
                        <SectionHeader
                            id="engagement"
                            overline="canais de comunicação"
                        />

                        <p className="text-base text-caesar-black/75 leading-relaxed max-w-[60ch] mb-12">
                            Casos avaliados em sigilo, em qualquer comarca do
                            país. Resposta em horário comercial. WhatsApp é o
                            canal mais rápido para consulta inicial — descreva
                            brevemente o tipo de evidência, comarca e prazo.
                        </p>

                        <dl className="border-t border-caesar-black/10 divide-y divide-caesar-black/10">
                            <div className="grid grid-cols-[8rem_1fr] gap-4 py-5 items-baseline">
                                <dt className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45">
                                    WhatsApp
                                </dt>
                                <dd>
                                    <ConversionLink
                                        href={ENGAGEMENT.whatsapp_url}
                                        ariaLabel="Abrir conversa no WhatsApp"
                                        className="font-mono text-base text-caesar-black underline decoration-caesar-burgundy underline-offset-[6px] hover:text-caesar-burgundy transition-colors duration-300 ease-out-quart">
                                        {ENGAGEMENT.whatsapp_label}
                                    </ConversionLink>
                                </dd>
                            </div>
                            <div className="grid grid-cols-[8rem_1fr] gap-4 py-5 items-baseline">
                                <dt className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45">
                                    E-mail
                                </dt>
                                <dd>
                                    <a
                                        href={`mailto:${ENGAGEMENT.email}`}
                                        className="font-mono text-base text-caesar-black hover:text-instrument-cyan transition-colors duration-300 ease-out-quart">
                                        {ENGAGEMENT.email}
                                    </a>
                                </dd>
                            </div>
                            <div className="grid grid-cols-[8rem_1fr] gap-4 py-5 items-baseline">
                                <dt className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45">
                                    Horário
                                </dt>
                                <dd className="font-mono text-base text-caesar-black/75">
                                    {ENGAGEMENT.hours}
                                </dd>
                            </div>
                            <div className="grid grid-cols-[8rem_1fr] gap-4 py-5 items-baseline">
                                <dt className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45">
                                    Cobertura
                                </dt>
                                <dd className="font-mono text-base text-caesar-black/85">
                                    <span className="text-instrument-cyan">
                                        {ENGAGEMENT.coverage}
                                    </span>
                                </dd>
                            </div>
                        </dl>

                        <div className="mt-12">
                            <ConversionLink
                                href={ENGAGEMENT.whatsapp_url}
                                ariaLabel="Iniciar consulta técnica no WhatsApp"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-caesar-burgundy text-caesar-white font-mono text-xs uppercase tracking-meta hover:bg-caesar-black transition-colors duration-300 ease-out-quart">
                                Iniciar consulta técnica
                                <span aria-hidden>→</span>
                            </ConversionLink>
                            <p className="font-mono text-[0.625rem] uppercase tracking-meta text-caesar-black/35 mt-4">
                                Resposta em até 24h em dias úteis
                            </p>
                        </div>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-caesar-black/10">
                <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 items-baseline">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45">
                        {PRACTICE.practitioner} ·{' '}
                        <span className="text-caesar-black/30">
                            Prática Pericial
                        </span>
                    </p>
                    <p className="font-mono text-[0.625rem] uppercase tracking-meta text-caesar-black/30">
                        Atuação em conformidade com CPC · CPP · LGPD
                    </p>
                </div>
            </footer>
        </div>
    )
}

import { TypeAbout } from './about.types'
import Image from 'next/image'
import me from '@/assets/images/photo-me.webp'

type Props = TypeAbout

type Stat = { value: string; label: string }
type Chapter = { number: string; topic: string; title: string; body: string }
type ListItem = { left: string; right: string }
type ParticularsBlock = { label: string; items: ListItem[] }

const STATS: Stat[] = [
    { value: '10+', label: 'Years shipping' },
    { value: '50+', label: 'Projects delivered' },
    { value: '∞', label: 'Lines of code' },
]

const WORK_CHAPTERS: Chapter[] = [
    {
        number: '01',
        topic: 'Now',
        title: 'Currently at Zoom.',
        body: 'Senior fullstack work on the meeting product. Ruby and React Native, day to day. Joined after a couple of years between New York and San Francisco; this is the first time I am working from Brazil with a US team again.',
    },
    {
        number: '02',
        topic: 'Recently',
        title: 'Two years between NYC and SF.',
        body: 'At Pinterest Business (500M+ monthly users), expanded the platform component system and shipped a 12% performance gain on critical pages. After that, two years at Squarespace, refactoring around a third of the legacy main platform and pushing scalable UI components into the design system. Both fullstack, both at scale, both with global teams.',
    },
    {
        number: '03',
        topic: 'Healthcare',
        title: 'Albert Einstein.',
        body: 'Two years at Brazil’s largest private hospital, ranked among the top thirty worldwide by Newsweek. Built a unified medical platform for dataset creation, study visualization, and team collaboration. Contributed to the AI data pipeline behind machine‑learning diagnostics, integrating medical software and devices with secure data management.',
    },
    {
        number: '04',
        topic: 'Banking from scratch',
        title: 'Riachuelo and Banco do Brasil.',
        body: 'Built Riachuelo Midway from zero at Accenture: a retail digital banking platform with 90% test coverage and real‑time integrations to payment processors. Years earlier, helped ship one of the first React frontends in a Brazilian corporate bank, for Banco do Brasil’s insurance arm. Banking taught me regulatory rigor and the cost of getting numbers wrong.',
    },
]

type Aside = { topic: string; title: string; body: string }

const ASIDES: Aside[] = [
    {
        topic: 'Discipline',
        title: 'A soldier discipline.',
        body: 'Practicing martial arts, especially Krav Maga which was developed and perfected by the Israeli army, offers benefits that align with military principles and are highly applicable in technology. Readiness is similar to a military mentality, which is crucial for risk management and asset protection. Discipline and focus, essential qualities for maintaining productivity and efficiency in projects. Mental resilience, which allows you to overcome obstacles and deal with inherent stress.',
    },
    {
        topic: 'Adventure',
        title: 'Offroad enthusiast.',
        body: 'Just like in offroad driving, software development demands from the developer a combination of technical preparation, adaptability, and resilience. Each trail brings its own challenges, such as obstacles or steep climbs, requiring an ability to read the environment, plan ahead, and often improvise to keep moving forward. In the same way, a developer faces shifting requirements and unexpected bugs, relying on analysis and adaptability to overcome obstacles and deliver value.',
    },
]

const PARTICULARS: ParticularsBlock[] = [
    {
        label: 'Education',
        items: [
            { left: '2023 — 2027', right: 'Cybersecurity · FIAP (ongoing)' },
            { left: '2018 — 2022', right: 'Software Engineering · UniCesumar' },
            { left: '2007 — 2011', right: 'Advertising · Faculdade Alves Faria' },
        ],
    },
    {
        label: 'Languages',
        items: [
            { left: 'Portuguese', right: 'C2 · native' },
            { left: 'English', right: 'C1 · fluent in technical and editorial contexts' },
            { left: 'Spanish', right: 'B1 · everyday and basic documentation' },
        ],
    },
    {
        label: 'Certificates',
        items: [
            { left: '2024', right: 'Blockchain · University at Buffalo' },
            { left: '2024', right: 'Meta Front-End Developer' },
            { left: '2024', right: 'IBM Back-End Development' },
        ],
    },
]

function MetaLabel({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
    const color = accent ? 'text-caesar-burgundy' : 'text-caesar-black/45'
    return (
        <p className={`font-mono text-[0.6875rem] uppercase tracking-meta ${color} mb-3`}>
            {children}
        </p>
    )
}

export default function AboutView(_props: Props) {
    return (
        <section className="about">
            <header className="about__header pt-[clamp(3rem,6vw,7rem)] pb-[clamp(3rem,6vw,6rem)] border-b border-caesar-black/15">
                <div className="flex items-baseline justify-between font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/55 mb-[clamp(2.5rem,5vw,4.5rem)]">
                    <span className="text-caesar-burgundy">The author</span>
                    <span>São Paulo · Brazil</span>
                </div>

                <div className="grid grid-cols-12 gap-x-4 items-end">
                    <h1 className="col-span-12 md:col-span-9 font-display font-medium leading-[0.95] tracking-tightest text-caesar-black text-[var(--type-display)]">
                        More story
                        <br />
                        about me.
                    </h1>

                    <div className="col-span-12 md:col-span-3 md:justify-self-end mt-[clamp(2rem,3vw,0rem)]">
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44">
                            <Image
                                draggable={false}
                                alt="Thiago Saraiva"
                                src={me}
                                fill
                                className="object-cover grayscale"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </header>

            <section className="about__lede py-[clamp(3rem,6vw,6rem)] border-b border-caesar-black/15">
                <div className="grid grid-cols-12 gap-x-4">
                    <p className="col-span-12 md:col-start-2 md:col-span-9 font-sans text-[clamp(1.125rem,0.5vw+1rem,1.5rem)] leading-relaxed text-caesar-black/80 max-w-[55ch]">
                        Software engineer with{' '}
                        <strong className="font-medium text-caesar-black">
                            over a decade building scalable systems
                        </strong>{' '}
                        across banking, healthcare, and global consumer platforms. Earlier years between Brazilian fintech and mobile shops, then two years at{' '}
                        <strong className="font-medium text-caesar-black">Hospital Albert Einstein</strong>{' '}
                        on healthcare data and ML diagnostics, then{' '}
                        <strong className="font-medium text-caesar-black">Pinterest</strong> and{' '}
                        <strong className="font-medium text-caesar-black">Squarespace</strong> between New York and San Francisco. Currently at{' '}
                        <strong className="font-medium text-caesar-black">Zoom</strong>. I write here when the build is done.
                    </p>
                </div>
            </section>

            <section className="about__stats py-[clamp(3rem,5vw,5rem)] border-b border-caesar-black/15">
                <div className="grid grid-cols-3 gap-6">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="grid gap-2">
                            <span className="font-display font-medium text-caesar-black text-[clamp(2rem,4vw,3.5rem)] leading-none tracking-tightest">
                                {stat.value}
                            </span>
                            <span className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="about__chapters py-[clamp(3rem,6vw,6rem)] grid gap-[clamp(3rem,6vw,5rem)]">
                {WORK_CHAPTERS.map((chapter) => (
                    <article key={chapter.number} className="grid grid-cols-12 gap-x-4">
                        <div className="col-span-12 md:col-span-2">
                            <MetaLabel accent>
                                №&nbsp;{chapter.number}
                            </MetaLabel>
                            <p className="font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/55">
                                {chapter.topic}
                            </p>
                        </div>

                        <div className="col-span-12 md:col-span-9 md:col-start-3 mt-[clamp(1rem,2vw,0rem)]">
                            <h2 className="font-display font-medium tracking-editorial leading-[1.05] text-caesar-black text-[var(--type-h2)] mb-[clamp(0.75rem,1vw,1.25rem)]">
                                {chapter.title}
                            </h2>
                            <p className="font-sans text-[var(--type-body)] leading-relaxed text-caesar-black/70 max-w-[var(--measure-body)]">
                                {chapter.body}
                            </p>
                        </div>
                    </article>
                ))}
            </section>

            <section className="about__asides py-[clamp(3rem,6vw,6rem)] border-t border-caesar-black/15">
                <div className="grid grid-cols-12 gap-x-4 mb-[clamp(2.5rem,5vw,4rem)]">
                    <div className="col-span-12 md:col-span-2">
                        <p className="font-mono text-[0.75rem] uppercase tracking-meta text-caesar-burgundy">
                            Off the clock
                        </p>
                    </div>
                    <p className="col-span-12 md:col-span-9 md:col-start-3 mt-2 md:mt-0 font-sans text-[var(--type-body)] leading-relaxed text-caesar-black/65 max-w-[55ch] italic">
                        Two practices that shape the work without showing up on the resume.
                    </p>
                </div>

                <div className="grid gap-[clamp(2.5rem,5vw,4.5rem)]">
                    {ASIDES.map((aside) => (
                        <article key={aside.topic} className="grid grid-cols-12 gap-x-4">
                            <div className="col-span-12 md:col-span-2">
                                <p className="font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/55">
                                    {aside.topic}
                                </p>
                            </div>

                            <div className="col-span-12 md:col-span-9 md:col-start-3 mt-[clamp(0.75rem,1.5vw,0rem)]">
                                <h2 className="font-display font-medium tracking-editorial leading-[1.1] text-caesar-black text-[clamp(1.5rem,1.5vw+0.75rem,2rem)] mb-[clamp(0.75rem,1vw,1.25rem)]">
                                    {aside.title}
                                </h2>
                                <p className="font-sans text-[var(--type-body)] leading-relaxed text-caesar-black/70 max-w-[var(--measure-body)]">
                                    {aside.body}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="about__particulars py-[clamp(3rem,6vw,6rem)] border-t border-caesar-black/15 grid gap-[clamp(2.5rem,5vw,4rem)]">
                <p className="font-mono text-[0.75rem] uppercase tracking-meta text-caesar-burgundy">
                    Particulars
                </p>

                {PARTICULARS.map((block) => (
                    <div key={block.label} className="grid grid-cols-12 gap-x-4 gap-y-3">
                        <div className="col-span-12 md:col-span-2">
                            <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45">
                                {block.label}
                            </p>
                        </div>
                        <ul className="col-span-12 md:col-span-9 md:col-start-3 grid gap-2">
                            {block.items.map((item) => (
                                <li key={`${block.label}-${item.left}-${item.right}`} className="grid grid-cols-12 gap-x-4 items-baseline">
                                    <span className="col-span-4 sm:col-span-3 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/55">
                                        {item.left}
                                    </span>
                                    <span className="col-span-8 sm:col-span-9 font-sans text-[var(--type-body)] text-caesar-black/80 leading-snug">
                                        {item.right}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </section>
    )
}

import Link from 'next/link'

type LinkItem = { label: string; href: string; external?: boolean }

const PRIMARY: LinkItem[] = [
    { label: 'Index', href: '/' },
    { label: 'About', href: '/about' },
]

const CHANNELS: LinkItem[] = [
    { label: 'Email', href: 'mailto:thiagosaraivacsouza@gmail.com' },
    { label: 'WhatsApp', href: 'https://wa.me/5562993248451', external: true },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/thiago5araiva/', external: true },
    { label: 'GitHub', href: 'https://github.com/thiago5araiva', external: true },
]

function FooterLink({ link }: { link: LinkItem }) {
    return (
        <Link
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="group inline-flex items-center gap-3 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/75 hover:text-caesar-burgundy transition-colors duration-300 ease-out-quart">
            <span
                aria-hidden
                className="inline-block h-px w-3 bg-caesar-black/40 transition-all duration-500 ease-out-quart group-hover:w-6 group-hover:bg-caesar-burgundy"
            />
            {link.label}
        </Link>
    )
}

export default function FooterComponent() {
    const year = new Date().getFullYear()

    return (
        <footer className="footer mt-[clamp(4rem,8vw,8rem)] pt-[clamp(2.5rem,5vw,4rem)] pb-[clamp(2.5rem,4vw,3.5rem)] border-t border-caesar-black/15">
            <div className="grid grid-cols-12 gap-x-4 gap-y-8">
                <div className="col-span-12 md:col-span-5">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-burgundy mb-3">
                        Colophon
                    </p>
                    <p className="font-sans text-[0.9375rem] leading-relaxed text-caesar-black/70 max-w-[36ch]">
                        Set in Bricolage Grotesque, Geist and JetBrains Mono. Hand-built with Next.js, hosted on Vercel.
                    </p>
                </div>

                <nav className="col-span-6 md:col-span-3">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45 mb-3">
                        Pages
                    </p>
                    <ul className="grid gap-2">
                        {PRIMARY.map((l) => (
                            <li key={l.label}>
                                <FooterLink link={l} />
                            </li>
                        ))}
                    </ul>
                </nav>

                <nav className="col-span-6 md:col-span-4">
                    <p className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45 mb-3">
                        Channels
                    </p>
                    <ul className="grid gap-2">
                        {CHANNELS.map((l) => (
                            <li key={l.label}>
                                <FooterLink link={l} />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="mt-[clamp(2.5rem,5vw,4rem)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/45">
                <span>© {year} Thiago Saraiva</span>
                <span>São Paulo · Brazil</span>
            </div>
        </footer>
    )
}

type Props = {
    issueNumber: number
    renderedAt: string
}

const formatIssue = (n: number) => String(n).padStart(3, '0')

export default function Intro({ issueNumber, renderedAt }: Props) {
    const date = renderedAt ? new Date(renderedAt) : new Date()
    const monthYear = date
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase()

    return (
        <header className="home__intro pt-[clamp(3rem,6vw,7rem)] pb-[clamp(3rem,6vw,6rem)] border-b border-caesar-black/15">
            <div className="flex items-baseline justify-between font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black/55 mb-[clamp(2.5rem,5vw,4.5rem)]">
                <span>
                    Issue&nbsp;
                    <span className="text-caesar-burgundy">№&nbsp;{formatIssue(issueNumber)}</span>
                </span>
                <span>{monthYear}</span>
            </div>

            <div className="grid grid-cols-12 gap-x-4">
                <h1 className="col-span-12 md:col-span-10 font-display font-medium leading-[0.95] tracking-tightest text-caesar-black text-[var(--type-display)]">
                    Thinking out loud
                    <br />
                    about shipping
                    <br />
                    software.
                </h1>

                <p className="col-span-12 md:col-start-7 md:col-span-6 mt-[clamp(2rem,4vw,3.5rem)] font-sans text-[var(--type-body)] leading-relaxed text-caesar-black/70 max-w-[42ch]">
                    Field notes from a decade of fullstack work across banking, healthcare, and global consumer platforms. Pinterest, Squarespace, now Zoom. Written between deploys.
                </p>
            </div>
        </header>
    )
}

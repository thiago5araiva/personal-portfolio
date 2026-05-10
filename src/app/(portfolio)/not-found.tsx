import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <section className="not-found pt-[clamp(4rem,10vw,10rem)] pb-[clamp(4rem,8vw,8rem)]">
            <div className="grid grid-cols-12 gap-x-4">
                <p className="col-span-12 md:col-span-2 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-burgundy mb-4 md:mb-0">
                    №&nbsp;404
                </p>

                <div className="col-span-12 md:col-span-9 md:col-start-3">
                    <h1 className="font-display font-medium tracking-editorial leading-[1.05] text-caesar-black text-[var(--type-display)] mb-[clamp(1.5rem,3vw,2.5rem)]">
                        Contents
                        <br />
                        ran away.
                    </h1>

                    <p className="font-sans text-[clamp(1.0625rem,0.5vw+1rem,1.375rem)] leading-relaxed text-caesar-black/70 max-w-[50ch] mb-[clamp(2.5rem,5vw,4rem)]">
                        The page you are looking for doesn&apos;t exist, or it moved without leaving a forwarding address. No need to panic.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
                        <Link
                            href="/"
                            className="group inline-flex items-center gap-3 font-mono text-[0.8125rem] uppercase tracking-meta text-caesar-black hover:text-caesar-burgundy transition-colors duration-300 ease-out-quart">
                            <span aria-hidden className="inline-block h-px w-4 bg-caesar-black/40 transition-all duration-500 ease-out-quart group-hover:w-10 group-hover:bg-caesar-burgundy" />
                            Back to the index
                        </Link>

                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-3 font-mono text-[0.8125rem] uppercase tracking-meta text-caesar-black/70 hover:text-caesar-burgundy transition-colors duration-300 ease-out-quart">
                            <span aria-hidden className="inline-block h-px w-4 bg-caesar-black/40 transition-all duration-500 ease-out-quart group-hover:w-10 group-hover:bg-caesar-burgundy" />
                            About the author
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

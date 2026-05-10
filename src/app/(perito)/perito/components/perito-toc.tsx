'use client'

import { useEffect, useState } from 'react'
import { TOC_SECTIONS } from '../constants'

export default function PeritoToc() {
    const [active, setActive] = useState<string>(TOC_SECTIONS[0].id)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    )[0]
                if (visible) setActive(visible.target.id)
            },
            {
                rootMargin: '-20% 0px -55% 0px',
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        )

        TOC_SECTIONS.forEach((section) => {
            const el = document.getElementById(section.id)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <nav
                aria-label="Navegação por seção"
                className="hidden lg:block sticky top-10 self-start">
                <p className="font-mono text-[0.625rem] uppercase tracking-meta text-caesar-black/35 mb-5">
                    Sumário
                </p>
                <ol className="space-y-3">
                    {TOC_SECTIONS.map((section) => {
                        const isActive = active === section.id
                        return (
                            <li key={section.id}>
                                <a
                                    href={`#${section.id}`}
                                    className="group flex items-baseline gap-3 font-mono text-[0.6875rem] uppercase tracking-meta">
                                    <span
                                        className={`transition-colors duration-300 ease-out-quart ${
                                            isActive
                                                ? 'text-caesar-burgundy'
                                                : 'text-caesar-black/35 group-hover:text-instrument-cyan'
                                        }`}>
                                        {section.code}
                                    </span>
                                    <span
                                        className={`transition-colors duration-300 ease-out-quart ${
                                            isActive
                                                ? 'text-caesar-black'
                                                : 'text-caesar-black/55 group-hover:text-caesar-black'
                                        }`}>
                                        {section.label}
                                    </span>
                                </a>
                            </li>
                        )
                    })}
                </ol>
                <div className="mt-8 pt-6 border-t border-caesar-black/10">
                    <a
                        href="#engagement"
                        className="font-mono text-[0.6875rem] uppercase tracking-meta text-caesar-black/55 hover:text-caesar-burgundy transition-colors">
                        Falar com o perito →
                    </a>
                </div>
            </nav>
            <nav
                aria-label="Navegação por seção"
                className="lg:hidden sticky top-0 z-30 -mx-6 px-6 py-3 bg-caesar-white/95 backdrop-blur border-b border-caesar-black/10">
                <ol className="flex gap-5 overflow-x-auto no-scrollbar">
                    {TOC_SECTIONS.map((section) => {
                        const isActive = active === section.id
                        return (
                            <li key={section.id} className="shrink-0">
                                <a
                                    href={`#${section.id}`}
                                    className="flex items-baseline gap-1.5 font-mono text-[0.625rem] uppercase tracking-meta">
                                    <span
                                        className={
                                            isActive
                                                ? 'text-caesar-burgundy'
                                                : 'text-caesar-black/35'
                                        }>
                                        {section.code}
                                    </span>
                                    <span
                                        className={
                                            isActive
                                                ? 'text-caesar-black'
                                                : 'text-caesar-black/55'
                                        }>
                                        {section.label}
                                    </span>
                                </a>
                            </li>
                        )
                    })}
                </ol>
            </nav>
        </>
    )
}

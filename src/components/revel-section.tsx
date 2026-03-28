'use client'

import useReveal from '@/hooks/userReveal'
type Props = {
    children: React.ReactNode
    className?: string
    delay?: number
}
export default function RevealSection(props: Props) {
    const { children, className = '', delay = 0 } = props
    const { ref, visible } = useReveal()
    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${
                visible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}>
            {children}
        </div>
    )
}

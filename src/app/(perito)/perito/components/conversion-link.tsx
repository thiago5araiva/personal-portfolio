'use client'

import { ReactNode } from 'react'

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void
    }
}

type Props = {
    href: string
    children: ReactNode
    className?: string
    ariaLabel?: string
}

export default function ConversionLink({
    href,
    children,
    className,
    ariaLabel,
}: Props) {
    const fireConversion = () => {
        if (typeof window === 'undefined' || !window.gtag) return
        window.gtag('event', 'conversion', {
            send_to: 'AW-16550274592/WI1-CM201ZIcEKDM5NM9',
            value: 1.0,
            currency: 'BRL',
        })
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            onClick={fireConversion}
            onAuxClick={fireConversion}
            className={className}>
            {children}
        </a>
    )
}

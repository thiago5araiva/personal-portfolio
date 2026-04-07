import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import Script from 'next/script'
import { ReactNode } from 'react'

type Props = Readonly<{
    children: ReactNode
}>

export const metadata: Metadata = {
    title: 'Perito Judicial em Tecnologia — Perícia Digital Forense',
    description:
        'Análise técnica com fundamento científico, rigor metodológico e credibilidade probatória. Perícia judicial, assistência técnica e investigação corporativa em evidências digitais.',
    metadataBase: new URL('https://perito.thiagosaraiva.dev'),
    keywords: [
        'perito judicial',
        'perito digital',
        'perícia digital forense',
        'perícia em tecnologia',
        'assistente técnico judicial',
        'laudo pericial',
        'evidências digitais',
        'cadeia de custódia',
        'perícia em celular',
        'forense digital',
        'perito em crimes cibernéticos',
        'investigação corporativa',
        'perícia WhatsApp',
        'LGPD',
    ],
    authors: [{ name: 'Thiago Saraiva' }],
    openGraph: {
        title: 'Perito Judicial em Tecnologia — Perícia Digital Forense',
        description:
            'Análise técnica com fundamento científico, rigor metodológico e credibilidade probatória para decisões judiciais seguras.',
        url: 'https://perito.thiagosaraiva.dev',
        siteName: 'Perito Judicial - Thiago Saraiva',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Perito Judicial em Tecnologia — Perícia Digital Forense',
            },
        ],
        locale: 'pt_BR',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Perito Judicial em Tecnologia',
        description:
            'Análise técnica com fundamento científico e credibilidade probatória para decisões judiciais seguras.',
        images: ['/og-image.jpg'],
    },
}

export default function PeritoLayout({ children }: Props) {
    return (
        <main id="perito-layout">
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=AW-16550274592"
                strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-16550274592');
                `}
            </Script>
            <Script id="gtag-conversion" strategy="afterInteractive">
                {`
                    gtag('event', 'conversion', {
                        'send_to': 'AW-16550274592/WI1-CM201ZIcEKDM5NM9',
                        'value': 1.0,
                        'currency': 'BRL'
                    });
                `}
            </Script>
            <div className="w-[100vw] relative left-[calc(-50vw+50%)] overflow-x-hidden">
                {children}
            </div>
        </main>
    )
}

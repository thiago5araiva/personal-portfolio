import { Metadata } from 'next'
import Script from 'next/script'
import { ReactNode } from 'react'

type Props = Readonly<{
    children: ReactNode
}>

export const metadata: Metadata = {
    title: 'Perito Judicial em Tecnologia — Perícia Digital Forense · Criptoativos · Atendimento Nacional',
    description:
        'Perícia digital forense com cobertura em todo território nacional. Análise técnica em dispositivos móveis, sistemas, comunicações, criptoativos e blockchain — laudo pericial com fundamento científico e cadeia de custódia rastreável para perícia judicial, assistência técnica e investigação corporativa.',
    metadataBase: new URL('https://perito.thiagosaraiva.dev'),
    keywords: [
        'perito judicial',
        'perito digital',
        'perícia digital forense',
        'perícia em tecnologia',
        'perito digital nacional',
        'perícia digital remota',
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
        'perícia em criptomoedas',
        'perícia em blockchain',
        'rastreamento de bitcoin',
        'perícia em smart contracts',
        'investigação de fraudes em criptoativos',
        'Marco Legal dos Ativos Virtuais',
        'Lei 14.478/2022',
        'perito em criptoativos',
    ],
    authors: [{ name: 'Thiago Saraiva' }],
    openGraph: {
        title: 'Perito Judicial em Tecnologia — Atendimento Nacional',
        description:
            'Perícia digital forense em todo Brasil. Análise técnica com fundamento científico, rigor metodológico e credibilidade probatória para decisões judiciais seguras.',
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
        title: 'Perito Judicial em Tecnologia · Atendimento Nacional',
        description:
            'Perícia digital forense em todo Brasil. Fundamento científico e credibilidade probatória para decisões judiciais seguras.',
        images: ['/og-image.jpg'],
    },
}

export default function PeritoLayout({ children }: Props) {
    return (
        <main
            id="perito-layout"
            className="bg-caesar-white text-caesar-black antialiased">
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
            <div className="w-[100vw] relative left-[calc(-50vw+50%)] overflow-x-hidden">
                {children}
            </div>
        </main>
    )
}

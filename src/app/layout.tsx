import { Analytics } from '@vercel/analytics/react'

import '@/app/global.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata, Viewport } from 'next'
import { ReactNode } from 'react'

import Providers from '@/providers'
import { Bricolage_Grotesque, Geist, JetBrains_Mono } from 'next/font/google'

type Props = Readonly<{
    children: ReactNode
}>

const display = Bricolage_Grotesque({
    subsets: ['latin'],
    variable: '--font-display',
    display: 'swap',
})

const sans = Geist({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
})

const mono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
    display: 'swap',
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    title: 'Thiago Saraiva - Developer',
    description:
        'Experient software engineer with a decade working with application development, management, and maintenance',
    metadataBase: new URL('https://thiagosaraiva.dev'),
    keywords: [
        'developer',
        'software engineer',
        'frontend',
        'react',
        'next.js',
    ],
    authors: [{ name: 'Thiago Saraiva' }],
    openGraph: {
        title: 'Thiago Saraiva - Developer',
        description:
            'Experient software engineer with a decade working with application development',
        url: 'https://thiagosaraiva.dev',
        siteName: 'Thiago Saraiva Portfolio',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Thiago Saraiva - Developer',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Thiago Saraiva - Developer',
        description:
            'Experient software engineer with a decade working with application development',
        images: ['/og-image.jpg'],
    },
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://images.ctfassets.net" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body className={`${display.variable} ${sans.variable} ${mono.variable} font-sans bg-caesar-white text-caesar-black antialiased`}>
                <Providers>
                    <main className="main relative container max-w-screen-2xl mx-auto px-4 sm:px-8">
                        {children}
                    </main>
                </Providers>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}

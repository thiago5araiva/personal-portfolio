import { fonts } from '@/app/config/layout.config'
import { Analytics } from '@vercel/analytics/react'

import '@/app/config/style.config.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { ReactNode } from 'react'

import Navigation from '@/navigation/sidebar-left'

import routes from '../navigation'
import Providers from '@/providers'

type Props = Readonly<{
    children: ReactNode
}>

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
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <title>Thiago Saraiva - Developer</title>
            </head>
            <body className={fonts}>
                <Providers>
                    <main className="main relative container max-w-screen-2xl mx-auto px-4 sm:px-8">
                        <div className="main__container lg:flex lg:justify-center">
                            <Navigation links={routes} />
                            <div className="main__content lg:mx-8">
                                {children}
                            </div>
                        </div>
                    </main>
                </Providers>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}

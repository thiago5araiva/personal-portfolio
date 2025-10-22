import { fonts } from '@/config/layout.config'
import { Analytics } from '@vercel/analytics/react'

import '@/config/style.config.css'
import QueryProvider from '@/src/providers/queryProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import Navigation from '@/src/components/navigation.component'
import Footer from '@/src/components/footer.component'

import routes from './src/routes'

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
            </head>
            <body className={fonts}>
                <QueryProvider>
                    <main className="main relative container max-w-screen-2xl mx-auto px-8">
                        <div className="main__container md:flex md:justify-center">
                            <div className="main__navigation border-r pr-8">
                                <Navigation links={routes} />
                            </div>
                            <div className="main__content md:mx-8">
                                {children}
                            </div>
                        </div>
                    </main>
                </QueryProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}

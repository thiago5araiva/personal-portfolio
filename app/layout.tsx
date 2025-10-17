import { fonts } from '@/config/layout.config'
import { Analytics } from '@vercel/analytics/react'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import QueryProvider from '@/src/providers/queryProvider'
import '@/config/style.config.css'
import NavigationComponent from './src/components/navigation.component'
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
                    <div className="container mx-auto px-6 h-screen lg:flex max-w-screen-2xl">
                        <div className="page__left navigation__container lg:h-full lg:pr-6 lg:border-r lg:mr-6">
                            <NavigationComponent links={routes} />
                        </div>
                        <main>{children}</main>
                    </div>
                </QueryProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}

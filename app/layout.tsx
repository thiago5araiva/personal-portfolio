import type { Metadata } from 'next'
import { Alegreya, Overpass } from 'next/font/google'

import { cn } from '@/_lib/utils'
import { Analytics } from '@vercel/analytics/react'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navigation } from './_components'
import Footer from './_components/footer'
import QueryProvider from './_providers/queryProvider'
import './globals.css'
const overpass = Overpass({
    subsets: ['latin'],
    variable: '--font-overpass',
    display: 'swap',
})

const alegreya = Alegreya({
    subsets: ['latin'],
    variable: '--font-alegreya',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Thiago Saraiva - Developer',
    description:
        'Experient software engineer with a decade working with application development, management, and maintenance',
    metadataBase: new URL('https://thiagosaraiva.com'),
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
        url: 'https://thiagosaraiva.com',
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
type Props = Readonly<{
    children: React.ReactNode
}>

const data = {
    heading: 'Let’s connect and make something great',
    mail: 'thiagosaraivacsouza@gmail.com',
    year: '2025',
    social: [
        {
            label: 'Linkedin',
            href: 'https://www.linkedin.com/in/thiago5araiva/',
        },
        {
            label: 'Instagram',
            href: 'https://www.instagram.com/thiago5araiva/',
        },
    ],
}

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en">
            <head>
                <link rel="manifest" href="./manifest.json" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#001514" />
            </head>
            <body className={cn(overpass.variable, alegreya.variable)}>
                <QueryProvider>
                    <div className="container mx-auto px-6 max-w-screen-lg">
                        <Navigation />
                        <main>{children}</main>
                        <Footer data={data} />
                    </div>
                </QueryProvider>
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    )
}

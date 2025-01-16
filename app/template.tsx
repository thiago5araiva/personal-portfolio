import { Navigation } from '@/_components/'
import { ReactNode } from 'react'

import Footer from '@/_components/footer'
import QueryProvider from '@/_providers/queryProvider'

type Props = {
    children: ReactNode
}

const footerMockData = {
    heading: 'Let’s connect and make something great',
    mail: 'thiagosaraivacsouza@gmail.com',
    year: new Date().getFullYear(),
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

export default async function RootTemplate({ children }: Props) {
    return (
        <QueryProvider>
            <div className="container mx-auto px-6 max-w-screen-lg">
                <Navigation />
                <main>{children}</main>
                <Footer data={footerMockData} />
            </div>
        </QueryProvider>
    )
}

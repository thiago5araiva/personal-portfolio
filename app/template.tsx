import { ReactNode } from 'react'
import { Footer, Navigation } from '@/components/'

import QueryProvider from '@/providers/queryProvider'

type Props = {
    children: ReactNode
}

export default async function RootTemplate({ children }: Props) {
    return (
        <QueryProvider>
            <main className="container mx-auto px-6 max-w-screen-lg">
                <Navigation />
                {children}
                {/* <Footer /> */}
            </main>
        </QueryProvider>
    )
}

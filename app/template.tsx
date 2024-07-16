import { ReactNode } from 'react'
import { Footer, Navigation } from '@/_components/'

import QueryProvider from '@/_providers/queryProvider'
import Head from 'next/head'

type Props = {
  children: ReactNode
}

export default async function RootTemplate({ children }: Props) {
  return (
    <QueryProvider>
      <main className="container mx-auto px-6 max-w-screen-lg">
        <Navigation />
        {children}
        <Footer />
      </main>
    </QueryProvider>
  )
}

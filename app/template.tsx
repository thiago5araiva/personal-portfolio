import Footer from '@/_components/footer'
import Navigation from '@/_components/navigation'
import Providers from '@/_services/providers'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default async function RootTemplate({ children }: Props) {
  return (
    <Providers>
      <main className="container mx-auto px-6 max-w-screen-lg">
        <Navigation />
        {children}
        <Footer />
      </main>
    </Providers>
  )
}

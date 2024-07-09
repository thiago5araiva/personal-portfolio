import Footer from '@/_components/footer'
import Navigation from '@/_components/navigation'
import Providers from '@/_services/providers'
import { ReactNode } from 'react'
import Loading from './_components/loading'
import useGlobalStore from './_store/global'

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

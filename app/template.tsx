'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Footer from '@/_components/footer'
import Navigation from '@/_components/navigation'
import { Suspense } from 'react'
import Loading from './_components/laoding'
import { Toaster } from './_components/ui/toaster'

type Props = {
  children: React.ReactNode
}
const queryClient = new QueryClient()

export default function RootTemplate({ children }: Props) {
  return (
    <main className="container mx-auto px-6 max-w-screen-lg">
      <QueryClientProvider client={queryClient}>
        <Navigation />
        {children}
        <Footer />
      </QueryClientProvider>
      <Toaster />
    </main>
  )
}

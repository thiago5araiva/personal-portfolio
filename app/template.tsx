"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Footer from "@/_components/footer"
import Navigation from "@/_components/navigation"

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
    </main>
  )
}

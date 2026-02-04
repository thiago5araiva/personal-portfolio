'use client'
import {
    QueryClient,
    QueryClientProvider,
    isServer,
} from '@tanstack/react-query'
import { ReactNode } from 'react'

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000,
            },
        },
    })
}
let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
    if (isServer) return makeQueryClient()
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
}
export default function QueryProvider({ children }: { children: ReactNode }) {
    const queryClient = getQueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

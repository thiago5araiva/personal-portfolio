'use client'
import React, { ReactNode, useEffect, useState } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { contentfulRepository } from '@/services/contentful/contentful-repository'

export default function QueryProvider({ children }: { children: ReactNode }) {
    const [queryClient] = useState(() => new QueryClient())

    useEffect(() => {
        queryClient.prefetchQuery({
            queryKey: ['postEntries'],
            queryFn: () => contentfulRepository.getPostEntries(),
        })
    }, [queryClient])

    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

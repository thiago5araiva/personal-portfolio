import { Action, Carousel, Heading, Paragraph } from '@/components/'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

import {
    accenture,
    baires,
    cheesecake,
    einstein,
    labsit,
    magalu,
    midway,
    pinterest,
    porto,
    squarespace,
} from '@/assets/images/companies'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import getQueryClient from './providers/getQueryClient'
import { notionRepository } from './services/notion/notion-repository'
import Content from '@/home/content'

export default async function Page() {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['home'],
        queryFn: () => fetch('home/api'),
    })
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <Content />
        </HydrationBoundary>
    )
}

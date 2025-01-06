import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import Content from '../content'
import getQueryClient from '@/_providers/getQueryClient'
import { useEffect } from 'react'

type Props = { params: Promise<{ id: string }> }

export default async function PostPage({ params }: Props) {
    const id = (await params).id
    console.log(id)

    // const queryClient = getQueryClient()
    // await queryClient.prefetchQuery({
    //     queryKey: ['work-item'],
    //     queryFn: async () => await fetch(`${id}/api/`),
    // })

    return (
        <section className="work-item">
            <Link
                href={'/work'}
                className="flex items-center gap-3 text-font-medium mb-6 sm:mb-10"
            >
                <MoveLeft className="w-6 h-5" />
                <span>Latest Works</span>
            </Link>
            <Content uuid={id} />
        </section>
    )
}

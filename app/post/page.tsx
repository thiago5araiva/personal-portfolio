import getQueryClient from '@/_providers/getQueryClient'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import Content from './content'

type Props = {
    searchParams: { [key: string]: string | string[] | undefined }
}

export default async function PostPage({ searchParams }: Props) {
    const queryClient = getQueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['post'],
        queryFn: () => fetch(`post/api/?id=${searchParams.id}`),
    })

    return (
        <section className="work-item">
            <Link
                href={'work/'}
                className="flex items-center gap-3 text-font-medium mb-6 sm:mb-10"
            >
                <MoveLeft className="w-6 h-5" />
                <span>Latest Works</span>
            </Link>
            <Content query={searchParams} />
        </section>
    )
}

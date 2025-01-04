import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import Content from './content'
import getQueryClient from '@/_providers/getQueryClient'

type Props = { params: Promise<{ id: string }> }

export default async function WorkPage({ params }: Props) {
    return (
        <section className="work-item">
            <Link
                href={'/work'}
                className="flex items-center gap-3 text-font-medium mb-6 sm:mb-10"
            >
                <MoveLeft className="w-6 h-5" />
                <span>Latest Works</span>
            </Link>
            <Content />
        </section>
    )
}

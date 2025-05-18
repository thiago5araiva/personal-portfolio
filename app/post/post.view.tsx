import Heading from '@/_components/typography/heading'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import RenderComponent from './components/render-component'
import { TypeModule } from './post.types'
type Props = TypeModule

export default function View(props: Props) {
    const { state } = props
    return (
        <section className="work-item">
            <Link
                className="flex gap-3 text-font-medium mb-6 sm:mb-10"
                href="/content"
            >
                <MoveLeft className="w-6 h-5" />
                <span>Latest Works</span>
            </Link>
            <div className="grid">
                <Heading type="h1" className="text-4xl text-font-medium mb-4">
                    {state.data?.child_page.title}
                </Heading>
                {state.data?.block?.map((node: any) =>
                    RenderComponent(node, node.type)
                )}
            </div>
        </section>
    )
}

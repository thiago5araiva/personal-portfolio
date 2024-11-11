import Heading from '@/components/typography/heading'
import Link from 'next/link'
import { SectionWorkType } from './types'
import { ContentBlockType } from '@/work/types'

type Props = {
    title?: string
    content?: ContentBlockType[]
}
export default function HomeWork({ title, content }: Props) {
    return (
        <section>
            <div className="mb-6 sm:mb-10">
                <Heading
                    type="h3"
                    className="text-2xl text-font-high font-semibold cursor-pointer"
                >
                    {title}
                </Heading>
            </div>
            <div className="grid gap-10">
                {content?.map((item) => {
                    const { title } = item.content as { title: string }
                    return (
                        <Link href={`/work/${item?.id}`} key={item.id}>
                            <div className="pb-6 sm:pb-10 border-b border-border-primary">
                                <Heading
                                    type="h2"
                                    className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal"
                                >
                                    {title}
                                </Heading>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

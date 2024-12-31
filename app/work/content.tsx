'use client'

import { Heading, Paragraph } from '@/components'
import useStore from '@/store'
import Link from 'next/link'

const title = 'Work'
const description = `Here are some of my projects and case studies, part of my job is to 
keep the projects of the companies I've worked for secret. These examples give you a flavor of my work.`

export default function WorkPageContent() {
    const { content } = useStore()

    return (
        <section className="work">
            <div className="mb-12 sm:mb-20">
                <Heading
                    type="h2"
                    className="text-2xl mb-3 sm:text-4xl text-font-high"
                >
                    {title}
                </Heading>
                <Paragraph className=" text-font-medium sm:text-xl">
                    {description}
                </Paragraph>
            </div>
            <div className="grid gap-6 mb-36">
                {content?.map((item) => {
                    return (
                        <Link href={`/work/${item?.id}`} key={item.id}>
                            <div className="pb-6 sm:pb-10 border-b border-border-primary">
                                <Heading
                                    type="h2"
                                    className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal"
                                >
                                    {item.child_page.title}
                                </Heading>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

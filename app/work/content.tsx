'use client'

import { ContentLink, Heading, Paragraph } from '@/components'
import useStore from '@/store'

const title = 'Work'
const description = `Here are some of my projects and case studies, part of my job is to 
keep the projects of the companies I've worked for secret. These examples give you a flavor of my work.`

export default function WorkPageContent() {
    const { content } = useStore()
    const work = content?.components.section[0]
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
                {work?.content?.map(({ id, child_page }, index) => (
                    <ContentLink
                        id={id}
                        key={index}
                        href={`post/`}
                        label={child_page.title}
                    />
                ))}
            </div>
        </section>
    )
}

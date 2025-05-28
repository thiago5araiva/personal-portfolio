'use client'
import { ContentLink, Heading, Paragraph } from '@/_components'
import { TypeModule } from './content.types'
import { WORK_DESCRIPTION, WORK_TITLE } from './content.constants'

type Props = TypeModule

export default function WorkPageContent(props: Props) {
    const { state } = props
    return (
        <section className="work">
            <div className="mb-12 sm:mb-20">
                <Heading
                    type="h2"
                    className="text-2xl mb-3 sm:text-4xl text-font-high"
                >
                    {WORK_TITLE}
                </Heading>
                <Paragraph className=" text-font-medium sm:text-xl">
                    {WORK_DESCRIPTION}
                </Paragraph>
            </div>
            <div className="grid gap-6 mb-36">
                {state.data.map(({ id, child_page }, index) => (
                    <ContentLink
                        id={id}
                        key={index}
                        href={`post/`}
                        label={child_page?.title}
                    />
                ))}
            </div>
        </section>
    )
}

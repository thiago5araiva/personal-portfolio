import React from 'react'
import { SectionServiceType } from './types'
import { Carousel, Paragraph, Subtitle, Heading } from '@/components/'

type Props = {
    title?: string
    content?: SectionServiceType['contentCollection']
    images?: {
        frontend?: SectionServiceType['frontStackCollection']
        backend?: SectionServiceType['backendStackCollection']
    }
}

export default function HomeService({ title, content, images }: Props) {
    return (
        <section className="my-20 sm:my-[140px]">
            <div className="mb-6">
                <Heading
                    type="h3"
                    className="text-xl text-font-medium font-semibold sm:text-2xl"
                >
                    {title}
                </Heading>
            </div>
            <div className="mb-6 grid gap-6 sm:gap-10 sm:mb-10 lg:grid-cols-2 lg:gap-[120px]">
                {content?.items.map((item, index) => (
                    <div key={index}>
                        <Subtitle className="text-base text-font-high mb-3 sm:text-lg">
                            {item.title}
                        </Subtitle>
                        <Paragraph className="text-base text-font-medium sm:text-lg">
                            {item.description}
                        </Paragraph>
                    </div>
                ))}
            </div>
            <div className="my-20 sm:my-[121px]">
                <Carousel data={images?.backend?.items} right />
                <Carousel data={images?.frontend?.items} />
            </div>
        </section>
    )
}

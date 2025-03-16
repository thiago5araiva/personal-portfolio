'use client'

import { CTA, Carousel, ContentLink, Heading, Paragraph } from '@/components/'
import { useQuery } from '@tanstack/react-query'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { action, header, work, service } from './mock'
import useStore from '@/store'
import Loading from '@/components/loading'
import { ContentHome, NotionContentType } from '@/home/type'

export default function HomeContent() {
    const { content, setContent } = useStore()
    const { data: notionData, ...notionResponse } = useQuery({
        queryKey: ['home'],
        queryFn: async (): Promise<{ data: ContentHome }> =>
            await fetch('/api').then((res) => res.json()),
    })

    useEffect(() => {
        if (!notionResponse.isSuccess) return
        if (notionData) setContent(notionData.data)
    }, [notionResponse.isSuccess])

    const hero = content?.components.hero
    const infiniteScroll = content?.components.infiniteScroll
    const work = content?.components.section[0]
    const service = content?.components.section[1]

    if (!notionResponse.isSuccess) return <Loading />

    return (
        <section id="home">
            <div className="home-header grid gap-6">
                <Heading type="h1" weight="bold">
                    {hero?.title}
                </Heading>
                <Paragraph size="xl">{hero?.description}</Paragraph>
            </div>
            <div className="home-cta mt-16">
                <Link target="blank" href={hero?.action.url || ''}>
                    <CTA
                        icon={<MoveRight />}
                        label={hero?.action.label || ''}
                        variant="primary"
                    />
                </Link>
            </div>
            <div className="home-companies mt-36">
                <Carousel data={infiniteScroll} />
            </div>
            <div className="home-work mt-12 grid gap-12">
                <Heading type="h6" weight="bold">
                    {work?.title}
                </Heading>
                {work?.content?.map(({ id, child_page }, index) => (
                    <ContentLink
                        id={id}
                        key={index}
                        href={`post`}
                        label={child_page?.title}
                    />
                ))}
            </div>
            <div className="home-service my-36 grid gap-6 lg:gap-12">
                <Heading type="h6">{service?.title}</Heading>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-28">
                    {service?.content.map((item, index) => (
                        <div className="grid gap-4" key={index}>
                            <Heading
                                type="h6"
                                className="text-base lg:text-lg uppercase font-light"
                            >
                                {item.title}
                            </Heading>
                            <Paragraph size="lg">{item.description}</Paragraph>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

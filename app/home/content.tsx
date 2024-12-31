'use client'

import { Action, Carousel, Heading, Paragraph } from '@/components/'
import { useQuery } from '@tanstack/react-query'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'
import { action, header, work, service } from './mock'
import useStore from '@/store'
import Loading from '@/components/loading'
import { NotionContentType } from '@/api/type'

export default function Content() {
    const { content, setContent } = useStore()

    const getContent = async (): Promise<{ data: NotionContentType[] }> => {
        const response = await fetch('api')
        return response.json()
    }

    const notionResponse = useQuery({
        queryKey: ['content'],
        queryFn: () => getContent(),
    })

    useEffect(() => {
        if (!notionResponse.isSuccess) return
        if (content.length > 0) return
        const { data: notionData } = notionResponse
        setContent(notionData.data)
    }, [notionResponse.isSuccess])

    if (!notionResponse.isSuccess) return <Loading />

    return (
        <section id="home">
            <div className="home-header grid gap-6">
                <Heading type="h1" weight="bold">
                    {header.title}
                </Heading>
                <Paragraph size="xl">{header.description}</Paragraph>
            </div>
            <div className="home-cta mt-16">
                <Link target="blank" href={action.url}>
                    <Action
                        icon={<MoveRight />}
                        label={action.label}
                        variant="primary"
                    />
                </Link>
            </div>
            <div className="home-companies mt-36">
                <Carousel data={header.logos} />
            </div>
            <div className="home-work mt-12 grid gap-12">
                <Heading type="h6" weight="bold">
                    {work.title}
                </Heading>
                {content.map((item) => (
                    <Link href={`/work/${item.id}`} key={item.id}>
                        <Heading
                            key={item.id}
                            type="h4"
                            className="text-font-medium pb-12 border-b-2"
                        >
                            {item.child_page?.title}
                        </Heading>
                    </Link>
                ))}
            </div>
            <div className="home-service my-36 grid gap-12">
                <Heading type="h6">{service.title}</Heading>
                <div className="grid grid-cols-2 gap-28">
                    {service.items.map((item, index) => (
                        <div className="grid gap-4" key={index}>
                            <Heading type="h6" className="text-lg uppercase">
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

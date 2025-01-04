'use client'

import { ContentLink, Heading, Paragraph } from '@/_components'
import useStore from '@/_store'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { useState } from 'react'

const title = 'Work'
const description = `Here are some of my projects and case studies, part of my job is to 
keep the projects of the companies I've worked for secret. These examples give you a flavor of my work.`

export default function WorkPageContent() {
    const { content } = useStore()
    const params = useParams<{ id: string }>()

    const handleSelect = async (id: string) => {
        const response = await fetch(
            'work/api/?id=' + '07e21cd8-1338-4721-ad8d-9173484d27fb'
        )
    }
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
                {content?.map(({ id, child_page }, index) => (
                    <div
                        key={index}
                        onClick={() =>
                            handleSelect('88811f55-c0a2-4994-829f-4ea0205709a5')
                        }
                    >
                        <ContentLink
                            href={`/work/${id}`}
                            label={child_page.title}
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

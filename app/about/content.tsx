'use client'
import Image from 'next/image'

import Heading from '@/components/typography/heading'
import Paragraph from '@/components/typography/paragraph'
import Subtitle from '@/components/typography/subtitle'
import { Button } from '@/components/ui/button'

import photo from '@/assets/images/me-photo.png'
import { Loading } from '../components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { useQuery } from '@tanstack/react-query'
import { Download } from 'lucide-react'
import { getPageAboutContent } from './actions'

export default function AboutPage() {
    const getAboutContentByIdResponse = useQuery({
        queryKey: ['pageWorkById'],
        queryFn: () => getPageAboutContent(),
    })

    const data = getAboutContentByIdResponse?.data?.pageAbout
    const content = data?.content.json as Document
    if (getAboutContentByIdResponse.isLoading) return <Loading />
    const options = {
        renderNode: {
            [BLOCKS.HEADING_2]: (node: any, children: any) => (
                <Heading type="h2">{children}</Heading>
            ),
            [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
                <Paragraph>{children}</Paragraph>
            ),
            [BLOCKS.EMBEDDED_ASSET]: (node: any, children: any) => {
                const img = data?.content?.links.assets.block.find(
                    (item) => item.sys.id === node.data.target.sys.id
                )
                if (!img) return
                return (
                    <Image
                        className="rounded mx-auto"
                        src={img.url}
                        alt={img.title}
                        width={img.width}
                        height={img.height}
                        priority
                    />
                )
            },
        },
    }

    const handleDownloadCV = () => {
        const file = data?.file
        if (!file) return
        const link = document.createElement('a')
        link.href = file.url
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(file.url)
    }

    return (
        <section className="about">
            <div className="mb-6 sm:mb-10">
                <Heading
                    type="h2"
                    className="text-2xl text-font-high sm:text-4xl mb-3 sm:mb-4"
                >
                    {data?.title}
                </Heading>
                <Subtitle className="text-base text-font-medium sm:text-xl">
                    {data?.subtitle}
                </Subtitle>
            </div>
            <div className="grid gap-6 sm:gap-10">
                {documentToReactComponents(content, options)}
                <div className="flex justify-center">
                    <Button
                        onClick={handleDownloadCV}
                        className="flex items-center gap-3 rounded-full border border-font-high "
                        variant="ghost"
                    >
                        {data?.cta}
                        <Download className="w-4 h-4" />
                    </Button>
                </div>
                {/* <div className="more my-20 sm:my-[140px]">
          <div className="mb-3 sm:mb-10">
            <Heading
              type="h6"
              className="text-xl text-font-high font-semibold sm:text-2xl"
            >
              Some of my galleries ...
            </Heading>
          </div>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <Image src={mock1} alt={"me"} width={320} height={480} />
              </CarouselItem>
              <CarouselItem className="flex justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <Image src={mock2} alt={"me"} width={320} height={480} />
              </CarouselItem>
              <CarouselItem className="flex justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <Image src={mock3} alt={"me"} width={320} height={480} />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div> */}
            </div>
        </section>
    )
}

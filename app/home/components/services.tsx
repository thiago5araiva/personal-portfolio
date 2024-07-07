import React from 'react'
import { SectionServiceType } from '../types'

import Heading from '@/_components/typography/heading'
import Subtitle from '@/_components/typography/subtitle'
import Paragraph from '@/_components/typography/paragraph'
import InfiniteScroll from '@/_components/scroll'

type Props = {
  title?: string
  content?: SectionServiceType['contentCollection']
  images?: SectionServiceType['assetsCollection']
}

export default function HomeService({ title, content, images }: Props) {
  return (
    <section className="my-20 sm:my-[140px]">
      <div className="mb-6">
        <Heading
          type="h6"
          className="text-xl text-font-medium font-semibold sm:text-2xl">
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
        <InfiniteScroll data={images?.items} direction="right" />
      </div>
    </section>
  )
}

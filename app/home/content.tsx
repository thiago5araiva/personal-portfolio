'use client'
import { useQuery } from '@tanstack/react-query'

import Hero from './components/hero'
import Services from './components/services'
import Work from './components/work'

import { getPageHomeContent } from './actions'

export default function HomePage() {
  const getHomeContentResponse = useQuery({
    queryKey: ['pageHome'],
    queryFn: getPageHomeContent,
  })

  const content = getHomeContentResponse.data?.pageHome

  return (
    <section className="my-16 sm:my-[121px]">
      <Hero
        title={content?.sectionHero.title}
        description={content?.sectionHero.description}
        cta={content?.sectionHero.cta}
        images={content?.sectionHero.assetsCollection.items}
      />
      <Work
        title={content?.sectionWork.title}
        content={content?.sectionWork.contentCollection}
      />
      <Services
        title={content?.sectionService?.title}
        content={content?.sectionService.contentCollection}
        images={content?.sectionService.assetsCollection}
      />
    </section>
  )
}

'use client'
import { useQuery } from '@tanstack/react-query'

import Hero from './components/hero'
import Services from './components/services'
import Work from './components/work'

import Loading from '@/_components/loading'
import { getPageHomeContent } from './actions'

export default function HomePage() {
  const { data: getHomeContentResponse, isLoading } = useQuery({
    queryKey: ['pageHome'],
    queryFn: getPageHomeContent,
  })

  if (isLoading) <Loading />
  const content = getHomeContentResponse?.pageHome

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

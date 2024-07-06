'use client'

import { useQuery } from '@tanstack/react-query'

import Loading from '@/_components/laoding'
import Hero from './hero'
import Services from './services'
import Work from './work'

import { getPageHomeContent } from './actions'

export default function HomePage() {
  const getHomeContentResponse = useQuery({
    queryKey: ['homeContent'],
    queryFn: getPageHomeContent,
  })

  if (getHomeContentResponse.isLoading) return <Loading />
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

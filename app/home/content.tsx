'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('./hero'))
const Services = dynamic(() => import('./services'))
const Work = dynamic(() => import('./work'))

import { getPageHomeContent } from './actions'
import { Loading } from '../components'

export default function HomePage() {
    const getHomeContentResponse = useQuery({
        queryKey: ['pageHome'],
        queryFn: getPageHomeContent,
    })

    const content = getHomeContentResponse?.data?.pageHome
    if (getHomeContentResponse.isLoading) return <Loading />

    return (
        <section>
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
                images={{
                    backend: content?.sectionService.backendStackCollection,
                    frontend: content?.sectionService.frontStackCollection,
                }}
            />
        </section>
    )
}

'use client'
import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

const Hero = dynamic(() => import('./hero'))
const Services = dynamic(() => import('./services'))
const Work = dynamic(() => import('./work'))

import { getPageHomeContent } from './actions'
import { Loading } from '../components'
import { getNotionContent } from '@/work/service'
import { contentBlock } from '@/work/utils/format'

export default function HomePage() {
    const getHomeContentResponse = useQuery({
        queryKey: ['pageHome'],
        queryFn: getPageHomeContent,
    })

    const { data: notion, ...response } = useQuery({
        queryKey: ['notion'],
        queryFn: () => getNotionContent('work/api'),
    })
    if (response.isLoading) return <Loading />
    const block = contentBlock(notion?.data.block)
    const child = block.filter((item) => item.type === 'child_page')

    const content = getHomeContentResponse?.data?.pageHome

    return (
        <section>
            <Hero
                title={content?.sectionHero.title}
                description={content?.sectionHero.description}
                cta={content?.sectionHero.cta}
                images={content?.sectionHero.assetsCollection.items}
            />
            <Work title={'Last Work'} content={child.slice(0, 3)} />
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

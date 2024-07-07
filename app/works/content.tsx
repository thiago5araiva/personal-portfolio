'use client'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'

import Heading from '@/_components/typography/heading'
import Header from './components/header'
import { getPageWorkContent } from './actions'
import Loading from '@/_components/loading'

export default function WorksPage() {
  const getWorksContentResponse = useQuery({
    queryKey: ['pageWorks'],
    queryFn: getPageWorkContent,
  })

  if (getWorksContentResponse.isLoading) return <Loading />
  const content = getWorksContentResponse.data?.pageWork

  return (
    <section className="work">
      <Header title={content?.title} subtitle={content?.subtitle} />
      <div className="mt-12 mb-20 sm:mt-20 sm:mb-[140px] grid gap-10">
        {content?.contentCollection?.items.map(({ sys, title }) => (
          <Link key={sys.id} href={`/works/${sys.id}`}>
            <div className="pb-6 sm:pb-10 border-b border-border-primary">
              <Heading
                type="h2"
                className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal">
                {title}
              </Heading>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

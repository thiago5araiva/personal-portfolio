'use client'
import Heading from '@/_components/typography/heading'
import Subtitle from '@/_components/typography/subtitle'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { getPageWorkContent } from './actions'
import Loading from '@/_components/laoding'
import Header from './components/header'

export default function WorksPage() {
  const getWorksContentResponse = useQuery({
    queryKey: ['pageWorks'],
    queryFn: getPageWorkContent,
  })

  const content = getWorksContentResponse.data?.pageWork

  return (
    <section className="work">
      <Header title={content?.title} subtitle={content?.subtitle} />
      <div className="mt-12 mb-20 sm:mt-20 sm:mb-[140px] grid gap-10">
        {content?.contentCollection?.items.map(({ _id, title }) => (
          <Link key={_id} href={`/works/${_id}`}>
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

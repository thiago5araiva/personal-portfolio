import Link from 'next/link'

import Heading from '@/_components/typography/heading'
import Header from './components/header'

export default function WorksPage() {
  return (
    <section className="work">
      <Header
        title="Work"
        subtitle="Get Inspired by My Portfolio of Fresh and Innovative Design Projects"
      />
      <Link href={'/work/orbit'}>
        <div className="pb-6 sm:pb-10 border-b border-border-primary">
          <Heading
            type="h2"
            className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal">
            Orbit
          </Heading>
        </div>
      </Link>
    </section>
  )
}

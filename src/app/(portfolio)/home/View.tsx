'use client'

import { TypeHomeModel } from '@/app/(portfolio)/home/Model'
import Intro from '@/app/(portfolio)/home/components/Intro'
import Featured from '@/app/(portfolio)/home/components/Featured'
import Content from '@/app/(portfolio)/home/components/Content'

type Props = TypeHomeModel

export default function View({ state }: Props) {
	const total = state.recommended.length

	return (
		<section className="home">
			<Intro issueNumber={total} renderedAt={state.renderedAt} />

			<div className="lg:grid lg:grid-cols-[minmax(0,1fr)_clamp(13rem,18vw,17rem)] lg:gap-x-[clamp(2rem,4vw,4.5rem)]">
				<div className="home__feed min-w-0">
					<Content
						data={state.recommended}
						includes={state.includes}
						renderedAt={state.renderedAt}
						total={total}
					/>
				</div>

				<aside className="home__author hidden lg:block lg:border-l lg:border-caesar-black/15 lg:pl-[clamp(1.5rem,2.5vw,3rem)]">
					<div className="sticky top-12 pt-[clamp(3rem,6vw,5.5rem)]">
						<Featured data={state.featured} />
					</div>
				</aside>
			</div>

			<section className="home__author-mobile lg:hidden mt-[clamp(3rem,6vw,5rem)] pb-12">
				<Featured data={state.featured} />
			</section>
		</section>
	)
}

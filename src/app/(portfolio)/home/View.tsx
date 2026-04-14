'use client'

import { TypeHomeModel } from '@/app/(portfolio)/home/Model'

import Featured from '@/app/(portfolio)/home/components/Featured'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Content from '@/app/(portfolio)/home/components/Content'
import { Badge } from '@/components/ui/badge'

type Props = TypeHomeModel

export default function View({ state, action }: Props) {
	return (
		<section className={'home h-full'}>
			<div className="lg:flex lg:gap-8">
				{/* content-component */}
				<div className="home__content max-w-3xl">
					<Tabs value={state.activeContentTab} onValueChange={action.handleContentTab} className="grid gap-4 sm:gap-8 mb-4">
						<div className="sticky top-0 pt-4 sm:pt-8 text-caesar-black bg-caesar-white z-20">
							<TabsList className="w-full text-base justify-around border-b rounded-none shadow-none">
								<TabsTrigger
									value="recommended"
									className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-text">
									Recommended
								</TabsTrigger>
								<TabsTrigger
									disabled={!state.following.length}
									value="following"
									className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-bold">
									<div className={'flex gap-3 items-center'}>
										<span>Following</span>
										<Badge className={'text-caesar-black/40'} variant="outline">{`${state.following.length}`}</Badge>
									</div>
								</TabsTrigger>
							</TabsList>
						</div>
						<Content data={state.contentTabType} includes={state.includes} />
					</Tabs>
				</div>
				{/* desktop: topic-component lateral */}
				<div className="home__featured hidden lg:block border-l pl-9 max-w-sm">
					<div className="sticky top-9">{<Featured data={state.featured} />}</div>
				</div>
			</div>
			{/* mobile: topic-component no final */}
			<section className="home__featured-mobile lg:hidden my-9  px-2 sm:px-6">
				<Featured data={state.featured} />
			</section>
		</section>
	)
}

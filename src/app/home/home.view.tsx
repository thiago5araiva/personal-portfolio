'use client'

import { TypeHomeModel } from '@/app/home/home.model'

import Featured from '@/app/home/components/featured'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Content from '@/app/home/components/content'
import { Badge } from '@/components/ui/badge'
import { useState } from 'react'

type Props = TypeHomeModel
type TabValue = 'following' | 'recommended'

export default function View({ state, infiniteScroll }: Props) {
    const [activeTab, setActiveTab] = useState<TabValue>('recommended')

    const { recommended, following, featured, includes } = state

    const handleTabs = (value = '') => setActiveTab(value as TabValue)

    const contentType = activeTab === 'recommended' ? recommended : following

    const scrollProps =
        activeTab === 'recommended' ? infiniteScroll : undefined

    return (
        <section className={'home h-full'}>
            <div className="lg:flex lg:gap-8">
                {/* content-component */}
                <div className="home__content max-w-3xl">
                    <Tabs
                        value={activeTab}
                        onValueChange={handleTabs}
                        className="grid gap-4 sm:gap-8 mb-4">
                        <div className="sticky top-0 pt-4 sm:pt-8 text-caesar-black bg-caesar-white z-20">
                            <TabsList className="w-full text-base justify-around border-b rounded-none shadow-none">
                                <TabsTrigger
                                    value="recommended"
                                    className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-text">
                                    Recommended
                                </TabsTrigger>
                                <TabsTrigger
                                    disabled={!following.length}
                                    value="following"
                                    className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-bold">
                                    <div className={'flex gap-3 items-center'}>
                                        <span>Following</span>
                                        <Badge
                                            className={'text-caesar-black/40'}
                                            variant="outline">{`${following.length}`}</Badge>
                                    </div>
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <Content
                            data={contentType}
                            includes={includes}
                            infiniteScroll={scrollProps}
                        />
                    </Tabs>
                </div>
                {/* desktop: topic-component lateral */}
                <div className="home__featured hidden lg:block border-l pl-9 max-w-sm">
                    <div className="sticky top-9">
                        <Featured data={featured} />
                    </div>
                </div>
            </div>
            {/* mobile: topic-component no final */}
            <section className="home__featured-mobile lg:hidden my-9  px-2 sm:px-6">
                <Featured data={featured} />
            </section>
        </section>
    )
}

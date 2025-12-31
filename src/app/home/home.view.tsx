'use client'

import { TypeHomeModel } from '@/app/home/home.model'

import Featured from '@/app/home/components/featured'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Content from '@/app/home/components/content'
import { useState } from 'react'

type TabValue = 'following' | 'recommended'

type Props = TypeHomeModel

export default function View({ state, actions }: Props) {
    const [activeTab, setActiveTab] = useState<TabValue>('following')
    const handleTabs = (value: string) => setActiveTab(value as TabValue)

    const { posts } = state

    return (
        <section className={'home'}>
            <div className="lg:flex lg:gap-8">
                {/* content-component */}
                <div className="home__content max-w-3xl">
                    <Tabs
                        value={activeTab}
                        onValueChange={handleTabs}
                        className="grid gap-4 sm:gap-8">
                        <div className="sticky top-0 pt-4 sm:pt-8 bg-white z-20">
                            <TabsList className="w-full text-base justify-around border-b rounded-none shadow-none">
                                <TabsTrigger
                                    value="following"
                                    className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-bold">
                                    Following
                                </TabsTrigger>
                                <TabsTrigger
                                    value="recommended"
                                    className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-bold">
                                    Recommended
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        {activeTab === 'following' && (
                            <Content.List data={posts} />
                        )}
                        {activeTab === 'recommended' && (
                            <Content.List data={posts} />
                        )}
                    </Tabs>
                </div>
                {/* desktop: topic-component lateral */}
                <div className="home__featured hidden lg:block border-l pl-9 max-w-sm">
                    <div className="sticky top-9">
                        <Featured />
                    </div>
                </div>
            </div>
            {/* mobile: topic-component no final */}
            <section className="home__featured-mobile lg:hidden my-9  px-2 sm:px-6">
                <Featured />
            </section>
        </section>
    )
}

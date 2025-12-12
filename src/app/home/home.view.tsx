'use client'

import { TypeHomeModel } from '@/app/home/home.model'

import Tabs from '@/app/home/components/tabs'
import Featured from '@/app/home/components/featured'

type Props = TypeHomeModel

export default function View({ state, actions }: Props) {
    /*** props ***/
    const { posts } = state

    return (
        <section className={'home'}>
            <div className="lg:flex lg:gap-8">
                {/* content-component */}
                <div className="home__content max-w-3xl">
                    <Tabs />
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

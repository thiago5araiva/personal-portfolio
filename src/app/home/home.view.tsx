import Search from '@/components/search.component'
import Content from './home.content'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/components/ui/tabs'
import Topic from '@/components/topic.component'
import { MOCK_TOPIC_ITEMS } from '@/app/home/home.mock'
import { TypeHomeModel } from '@/app/home/home.model'

type Props = TypeHomeModel

function FeaturedPanel() {
    return (
        <>
            <Search className={'mb-3'} />
            <Topic>
                <Topic.Header title={'What Read Today'} />
                <Topic.List data={MOCK_TOPIC_ITEMS} />
                <Topic.Button href="/" label={'See more'} />
            </Topic>
        </>
    )
}

export default function View({ state, actions }: Props) {
    return (
        <>
            <section className="home lg:flex lg:gap-8">
                {/* content-component */}
                <div className="home__content max-w-3xl">
                    <Tabs
                        defaultValue="following"
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
                        <TabsContent value="following">
                            <div className="flex flex-col gap-6 sm:gap-8 px-2 sm:px-6">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index}>
                                        <Content>
                                            <Content.Header />
                                            <Content.Body />
                                            <Content.Footer />
                                        </Content>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="recommended">
                            <div className="flex flex-col gap-6 sm:gap-8 px-2 sm:px-6">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <div key={index}>
                                        <Content>
                                            <Content.Header />
                                            <Content.Body />
                                            <Content.Footer />
                                        </Content>
                                    </div>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
                {/* Desktop: topic-component lateral */}
                <div className="home__featured hidden lg:block border-l pl-9 max-w-sm">
                    <div className="sticky top-9">
                        <FeaturedPanel />
                    </div>
                </div>
            </section>
            {/* Mobile: topic-component no final */}
            <section className="home__featured-mobile lg:hidden mt-8 pt-8 border-t px-2 sm:px-6">
                <FeaturedPanel />
            </section>
        </>
    )
}

import Search from '@/src/components/search.component'
import Content from './content.home'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/src/components/ui/tabs'
import Topic from '@/src/components/topic.component'

export default function View() {
    return (
        <section className="home lg:flex lg:gap-8">
            {/* content-component */}
            <div className="home__content max-w-3xl">
                <Tabs defaultValue="following" className="grid gap-8">
                    <div className="sticky top-0 pt-8 bg-white z-50">
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
                        <div className="flex flex-col gap-8 -z-50">
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
                        <Content>
                            <Content.Header />
                            <Content.Body />
                            <Content.Footer />
                        </Content>
                    </TabsContent>
                </Tabs>
            </div>
            {/* topic-component */}
            <div className="home__featured hidden lg:block border-l  pl-9">
                <div className="sticky top-9">
                    <Search />
                    <Topic>
                        <Topic.Header title={'What Read Today'} />
                        <Topic.List data={[]} />
                        <Topic.Button href="/" label={'See more'} />
                    </Topic>
                </div>
            </div>
        </section>
    )
}

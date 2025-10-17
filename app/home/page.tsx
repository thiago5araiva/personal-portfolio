import NavigationComponent from '@/src/components/navigation.component'
import routes from '@/src/routes'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from '@/src/components/ui/tabs'

import FeaturedComponent from './featured.home'
import SearchComponent from './search.home'
import Content from './content.home'

export default async function Page() {
    return (
        <section className="page__home h-full">
            {/* main content */}
            <div className="page__center flex flex-col h-full lg:flex-row lg:w-full">
                <div className="page__content w-full h-full order-2 lg:order-1 border-r">
                    <div className="mr-6 py-9">
                        <Tabs defaultValue="following" className="w-full">
                            <TabsList className="w-full text-base justify-start border-b rounded-none shadow-none">
                                <TabsTrigger
                                    value="following"
                                    className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-bold"
                                >
                                    Following
                                </TabsTrigger>
                                <TabsTrigger
                                    value="recommended"
                                    className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-bold"
                                >
                                    Recommended
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="following">
                                <Content />
                            </TabsContent>
                            <TabsContent value="recommended">
                                <Content />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                {/* right content */}
                <div className="page__right flex flex-col gap-6 order-1 lg:order-2 lg:pl-6 py-9">
                    <SearchComponent />
                    <FeaturedComponent />
                </div>
            </div>
        </section>
    )
}

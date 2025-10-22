'use client'

import View from './home.view'

export default function Page() {
    return (
        <View />
        // <section className="home w-full my-9 lg:flex lg:justify-center lg:gap-9 bg-red-300">
        //     <div className="home__search mb-9 lg:hidden">
        //         <Search />
        //     </div>
        //     <div className="home__content">
        //         <Tabs defaultValue="following" className="">
        //             <TabsList className="w-full text-base justify-around border-b rounded-none shadow-none">
        //                 <TabsTrigger
        //                     value="following"
        //                     className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-bold">
        //                     Following
        //                 </TabsTrigger>
        //                 <TabsTrigger
        //                     value="recommended"
        //                     className="font-light text-base data-[state=active]:shadow-none data-[state=active]:font-bold">
        //                     Recommended
        //                 </TabsTrigger>
        //             </TabsList>
        //             <div className="mt-12">
        //                 <TabsContent value="following" className="">
        //                     <Content />
        //                 </TabsContent>
        //                 <TabsContent value="recommended" className="">
        //                     <Content />
        //                 </TabsContent>
        //             </div>
        //         </Tabs>
        //     </div>
        //     <div className="home__featured hidden lg:block">
        //         <div className="sticky top-9">
        //             <Topic>
        //                 <Topic.Header title={'What Read Today'} />
        //                 <Topic.List data={mockData} />
        //                 <Topic.Button href="/" label={'See more'} />
        //             </Topic>
        //         </div>
        //     </div>
        // </section>
    )
}

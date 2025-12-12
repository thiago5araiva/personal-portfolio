import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Content from '@/app/home/components/content'
import { useState } from 'react'

type TabValue = 'following' | 'recommended'

export default function HomeTabs() {
    const [activeTab, setActiveTab] = useState<TabValue>('following')
    const handleTabs = (value: string) => setActiveTab(value as TabValue)
    return (
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
            {activeTab === 'following' && <Content.List />}
            {activeTab === 'recommended' && <Content.List />}
        </Tabs>
    )
}

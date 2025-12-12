import Search from '@/components/search.component'
import Topic from '@/components/topic.component'
import { MOCK_TOPIC_ITEMS } from '@/app/home/home.mock'

export default function HomeFeatured() {
    return (
        <div className={'featured'}>
            <Search className={'mb-3'} />
            <Topic>
                <Topic.Header title={'What Read Today'} />
                <Topic.List data={MOCK_TOPIC_ITEMS} />
                <Topic.Button href="/" label={'See more'} />
            </Topic>
        </div>
    )
}

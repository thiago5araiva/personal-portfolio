import Topic from '@/components/topic.component'

type Props = { data: Array<{ title: string; url: string }> }

export default function HomeFeatured({ data }: Props) {
    return (
        <div className={'featured'}>
            <Topic>
                <Topic.Header title={'What Read Today'} />
                <Topic.List data={data} />
            </Topic>
        </div>
    )
}

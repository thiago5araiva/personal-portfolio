import ContentViewModel from './content.viewmodel'
import { contentfulRepository } from '@/services/contentful/contentful-repository'
import { PostDataItem } from '@/store/contentful.store/contentful.type'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const response = await contentfulRepository.getPostEntries()
    const items: PostDataItem[] = response?.data?.items ?? []
    return items.map((item) => ({ slug: item.fields.slug }))
}

export default async function ContentPage({ params }: Props) {
    const { slug } = await params
    const response = await contentfulRepository.getPostEntries()
    const items: PostDataItem[] = response?.data?.items ?? []
    const post = items.find((item) => item.fields.slug === slug)

    return <ContentViewModel slug={slug} serverPost={post} />
}

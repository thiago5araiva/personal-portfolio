import ContentViewModel from './content.viewmodel'

type Props = {
    params: Promise<{ slug: string }>
}

export default async function ContentPage({ params }: Props) {
    const { slug } = await params
    return <ContentViewModel slug={slug} />
}

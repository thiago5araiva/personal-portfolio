'use client'

import ContentView from './content.view'
import useContentModel from './content.model'
import { PostDataItem } from '@/services/contentful/contentful.type'

type Props = {
    slug: string
    serverPost?: PostDataItem
}

export default function ContentViewModel({ slug, serverPost }: Props) {
    const model = useContentModel({ slug, serverPost })
    return <ContentView {...model} />
}

'use client'

import ContentView from './content.view'
import useContentModel from './content.model'

type Props = {
    slug: string
}

export default function ContentViewModel({ slug }: Props) {
    const model = useContentModel({ slug })
    return <ContentView {...model} />
}

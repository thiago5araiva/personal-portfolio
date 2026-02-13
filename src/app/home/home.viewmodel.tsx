'use client'

import View from './home.view'
import useHomeModel from './home.model'

type Props = {
    initialData: any
    allItems: any[]
}

export default function IndexPage({ initialData, allItems }: Props) {
    const model = useHomeModel(initialData, allItems)
    return <View {...model} />
}

'use client'

import View from './home.view'
import useHomeModel from './home.model'

type Props = {
    initialData: any
}

export default function IndexPage({ initialData }: Props) {
    const model = useHomeModel(initialData)
    return <View {...model} />
}

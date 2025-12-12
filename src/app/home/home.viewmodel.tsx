'use client'

import View from './home.view'
import useHomeModel from './home.model'

export default function IndexPage() {
    const model = useHomeModel()
    return <View {...model} />
}

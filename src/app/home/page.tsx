'use client'

import View from './home.view'
import useHomeModel from './home.model'

export default function Page() {
    const model = useHomeModel()
    return <View {...model} />
}

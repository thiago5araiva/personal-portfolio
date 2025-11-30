'use client'
import useModel from './content.model'
import View from './content.view'

export default function WorkPage() {
    const model = useModel()
    return <View {...model} />
}

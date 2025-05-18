'use client'

import View from '.'
import useModel from './home.model'

export default function ViewModel() {
    const model = useModel()
    return <View {...model} />
}

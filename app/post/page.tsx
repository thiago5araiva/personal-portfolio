'use client'

import { Loading } from '@/_components'
import { Suspense } from 'react'
import useModel from './post.model'
import View from './post.view'

const WrapperView = () => {
    const model = useModel()
    return <View {...model} />
}

export default function ViewModel() {
    return (
        <Suspense fallback={<Loading />}>
            <WrapperView />
        </Suspense>
    )
}

'use client'

import View from './View'
import useHomeModel from './Model'
import type { PageData } from './Server'

type Props = {
	initialData: PageData
}

export default function IndexPage({ initialData }: Props) {
	const model = useHomeModel(initialData)
	return <View {...model} />
}

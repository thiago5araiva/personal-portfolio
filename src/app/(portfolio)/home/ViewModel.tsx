'use client'

import View from './View'
import useHomeModel from './Model'
import type { HomePageData } from './home.server'

type Props = {
	initialData: HomePageData
}

export default function IndexPage({ initialData }: Props) {
	const model = useHomeModel(initialData)
	return <View {...model} />
}

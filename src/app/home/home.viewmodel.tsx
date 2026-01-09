'use client'

import View from './home.view'
import useHomeModel from './home.model'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'

export default function IndexPage() {
    const model = useHomeModel()
    return <View {...model} />
}

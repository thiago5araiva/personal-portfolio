'use client'

import useNotionStore, { setNotionContent } from '@/_store/notion.store'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import {
    COMPANIES_LOGO,
    CTA_BUTTON,
    HEADER,
    SERVICES,
    WORK,
} from './home.constants'

export default function Model() {
    const { content } = useNotionStore()
    const asyncGetLandpageResponse = useQuery({
        queryKey: ['landpage'],
        queryFn: async () => (await fetch('/home/api')).json(),
        enabled: content.length > 0 ? false : true,
        staleTime: 5 * 1000,
    })
    const { data: landpageData, ...landpageResponse } = asyncGetLandpageResponse
    const handleSetNotionContent = () => {
        if (!landpageData?.data) return
        setNotionContent(landpageData?.data)
    }
    useEffect(handleSetNotionContent, [landpageData?.data])
    return {
        state: {
            loading: landpageResponse.isLoading,
            data: content.slice(0, 3),
            HEADER,
            CTA_BUTTON,
            COMPANIES_LOGO,
            WORK,
            SERVICES,
        },
        action: {},
    }
}

export type TypeHomeModel = ReturnType<typeof Model>

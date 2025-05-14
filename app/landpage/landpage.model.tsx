//TODO: : fetch data just one time create a store to save the data

'use client'

import { useEffect, useState } from 'react'
import {
    COMPANIES_LOGO,
    CTA_BUTTON,
    HEADER,
    SERVICES,
    WORK,
} from './landpage.constants'
import useLandpageQuery from './landpage.query'
import { NotionContentType } from './landpage.types'

export default function Model() {
    const [notionData, setNotionData] = useState<NotionContentType[]>([])
    const [notionLoading, setNotionLoading] = useState<boolean>(false)

    const { asyncGetLandpageContent } = useLandpageQuery()
    const { data: notionResponseData, ...response } = asyncGetLandpageContent

    useEffect(() => {
        if (!notionResponseData?.data) return
        setNotionData(notionResponseData.data)
        setNotionLoading(response.isLoading)
    }, [notionResponseData?.data])

    return {
        state: {
            loading: notionLoading,
            data: notionData,
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

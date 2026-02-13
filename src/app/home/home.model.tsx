import { AsyncQueryPostEntries } from '@/app/home/home.actions'
import {
    setContentfulData,
    useContentfulStoreHydrated,
} from '@/store/contentful.store'
import { useEffect } from 'react'
import {
    ContentfulAsset,
    ContentfulIncludes,
    PostDataItem,
} from '@/store/contentful.store/contentful.type'
import { toast } from 'sonner'

const currentDate = new Date()
const isoDateString = currentDate.toISOString()

function handleFeaturedItems(data: PostDataItem[]) {
    const filterByTag = data?.filter((i) => i.fields.tag === 'frontend')
    return filterByTag?.map((i) => ({
        title: i.fields.title,
        url: `/content/${i.fields.slug}`,
    }))
}

function handleFollowingItems(posts: PostDataItem[]) {
    return posts?.filter((i) => i.isFollow)
}

function flattenPages(pages: any[]) {
    const items = pages.flatMap((page) => page?.data?.items ?? [])
    const assets = pages.flatMap(
        (page) => page?.data?.includes?.Asset ?? []
    )
    const uniqueAssets = assets.reduce<ContentfulAsset[]>((acc, asset) => {
        if (!acc.some((a) => a.sys.id === asset.sys.id)) acc.push(asset)
        return acc
    }, [])
    const includes: ContentfulIncludes = { Asset: uniqueAssets }
    return { items, includes }
}

export default function HomeModel(initialData?: any) {
    const contentFulStore = useContentfulStoreHydrated()

    const {
        data: postResponseData,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isSuccess,
        isError,
    } = AsyncQueryPostEntries(initialData)

    const pages = postResponseData?.pages ?? []
    const { items: recommended, includes } = flattenPages(pages)
    const following = handleFollowingItems(contentFulStore?.data.items)
    const featured = handleFeaturedItems(recommended)

    const handleContentfulDataStore = () => {
        if (isSuccess && recommended.length > 0) {
            const content = {
                ...pages[0]?.data,
                items: recommended,
                includes,
            }
            const updatedAt = isoDateString
            const payload = { ...contentFulStore, updatedAt, data: content }
            setContentfulData(payload)
        }
        if (isError) toast('Error fetching posts.')
    }

    useEffect(handleContentfulDataStore, [postResponseData])

    return {
        state: {
            recommended,
            following,
            includes,
            featured,
        },
        infiniteScroll: {
            fetchNextPage,
            hasNextPage: hasNextPage ?? false,
            isFetchingNextPage,
        },
    }
}

export type TypeHomeModel = ReturnType<typeof HomeModel>

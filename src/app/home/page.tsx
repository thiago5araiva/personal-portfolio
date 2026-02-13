import IndexPage from '@/app/home/home.viewmodel'
import { contentfulRepository } from '@/services/contentful/contentful-repository'
import { PAGE_SIZE } from '@/store/contentful.store/contentful.type'

export default async function Page() {
    const response = await contentfulRepository.getPostEntries()
    const allData = response?.data ?? null

    const firstPageData = allData
        ? {
              ...allData,
              items: allData.items.slice(0, PAGE_SIZE),
              skip: 0,
              limit: PAGE_SIZE,
          }
        : null

    return (
        <IndexPage
            initialData={firstPageData}
            allItems={allData?.items ?? []}
        />
    )
}

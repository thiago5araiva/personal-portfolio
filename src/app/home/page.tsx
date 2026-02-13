import IndexPage from '@/app/home/home.viewmodel'
import { contentfulRepository } from '@/services/contentful/contentful-repository'
import { PAGE_SIZE } from '@/store/contentful.store/contentful.type'

export default async function Page() {
    const response = await contentfulRepository.getPostEntries({
        skip: 0,
        limit: PAGE_SIZE,
    })
    const postData = response?.data ?? null
    return <IndexPage initialData={postData} />
}

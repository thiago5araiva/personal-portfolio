import IndexPage from '@/app/home/home.viewmodel'
import { contentfulRepository } from '@/services/contentful/contentful-repository'

export default async function Page() {
    const response = await contentfulRepository.getPostEntries()
    const postData = response?.data ?? null
    return <IndexPage initialData={postData} />
}

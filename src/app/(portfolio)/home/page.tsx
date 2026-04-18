import IndexPage from './ViewModel'
import { getHomePageData } from './Server'

export const revalidate = 60

export default async function Page() {
	const initialData = await getHomePageData()
	return <IndexPage initialData={initialData} />
}

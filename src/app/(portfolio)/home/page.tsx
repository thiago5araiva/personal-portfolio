import IndexPage from './ViewModel'
import { getHomePageData } from './home.server'

export const revalidate = 60

export default async function Page() {
	const { entries, featured } = await getHomePageData()
	const initialData = { entries, featured }
	return <IndexPage initialData={initialData} />
}

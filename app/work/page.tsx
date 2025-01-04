import getQueryClient from '@/_providers/getQueryClient'
import Content from './content'
type Props = {
    params: Promise<{ id: string }>
}
export default async function WorkPage({ params }: Props) {
    return <Content />
}

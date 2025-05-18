import ContentCode from './ContentCode'
import ContentHeading from './ContentHeading'
import ContentParagraph from './ContentParagraph'
import { NotionBlockType } from '@/_store/notion.store/notion.types'

type ComponentMap = {
    heading_2: typeof ContentHeading
    paragraph: typeof ContentParagraph
    code: typeof ContentCode
}

export default function PostRenderCmponent(
    node: NotionBlockType,
    type: keyof ComponentMap
) {
    const { id } = node

    const componentMap: ComponentMap = {
        heading_2: ContentHeading,
        paragraph: ContentParagraph,
        code: ContentCode,
    }

    const Component = componentMap[type]
    if (!Component) {
        console.warn(`Unsupported block type: ${type}`)
        return null
    }

    const data = node[type]
    if (!data) {
        console.warn(`No data found for block type: ${type}`)
        return null
    }

    return <Component key={id} data={data as any} />
}

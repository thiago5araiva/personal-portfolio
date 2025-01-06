import { Paragraph } from '@/_components'
import { ReactNode } from 'react'
import { BlockParagraph, BlockType } from '@/post/types'

type Props = {
    data: BlockParagraph
}

export default function ContentParagraph({ data }: Props) {
    const { rich_text } = data
    const children: ReactNode = rich_text?.map((val) => val.plain_text)
    return (
        <Paragraph size="lg" className="text-font-medium mb-10">
            {children}
        </Paragraph>
    )
}

import { Heading } from '@/_components'
import { ReactNode } from 'react'
import { BlockHeading } from '@/post/types'

type Props = {
    data: BlockHeading
}

export default function ContentHeading({ data }: Props) {
    const { rich_text } = data
    const children: ReactNode = rich_text?.map((val) => val.plain_text)
    return (
        <Heading
            type="h2"
            className="text-font-high text-2xl mb-4"
            weight="bold"
        >
            {children}
        </Heading>
    )
}

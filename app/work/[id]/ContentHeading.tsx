import { Heading } from '@/_components'
import { ReactNode } from 'react'
import { BlockHeading } from '../types'

type Props = {
    data: BlockHeading
}

export default function ContentHeading({ data }: Props) {
    const { rich_text } = data
    const children: ReactNode = rich_text?.map((val) => val.plain_text)
    return (
        <Heading
            type="h3"
            className="text-font-high text-base mb-4"
            weight="bold"
        >
            {children}
        </Heading>
    )
}

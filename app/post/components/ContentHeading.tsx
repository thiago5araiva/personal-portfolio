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
        <Heading type="h4" className="mb-3 lg:mb-4">
            {children}
        </Heading>
    )
}

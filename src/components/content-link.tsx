import Link from 'next/link'
import { Heading } from '@/components'
type Props = {
    id?: string
    className?: string
    href: string
    label: string
}
export default function ContentLinkComponent({ id, label, href }: Props) {
    return (
        <Link href={{ pathname: href, query: { id } }}>
            <div className={'pb-6 lg:pb-10 border-b border-border-primary'}>
                <Heading type="h3" className="text-font-medium">
                    {label}
                </Heading>
            </div>
        </Link>
    )
}

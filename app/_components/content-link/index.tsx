import Link from 'next/link'
import { Heading } from '@/_components'
import { cn } from '@/_lib/utils'
type Props = {
    id?: string
    className?: string
    href: string
    label: string
}
export default function ContentLinkComponent({
    id,
    label,
    href,
    className,
}: Props) {
    return (
        <Link href={{ pathname: href, query: { id } }}>
            <div
                className={cn(
                    'pb-6 lg:pb-10 border-b border-border-primary',
                    className
                )}
            >
                <Heading type="h3" className="text-font-medium">
                    {label}
                </Heading>
            </div>
        </Link>
    )
}

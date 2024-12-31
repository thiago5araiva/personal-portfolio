import Link from 'next/link'
import { Heading } from '@/components'
import { cn } from '@/lib/utils'
type Props = {
    className?: string
    href: string
    label: string
}
export default function ContentLinkComponent({
    label,
    href,
    className,
}: Props) {
    return (
        <Link href={href}>
            <div
                className={cn(
                    'pb-6 sm:pb-10 border-b border-border-primary',
                    className
                )}
            >
                <Heading
                    type="h2"
                    className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal"
                >
                    {label}
                </Heading>
            </div>
        </Link>
    )
}

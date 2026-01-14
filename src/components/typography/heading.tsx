import { EHeading, TypographyProps } from '@/components/typography/types'
import { cn } from '@/lib/utils'
import { createElement } from 'react'

export default function HeadingComponent({
    type = 'h1',
    children,
    className,
}: TypographyProps) {
    const obj = {
        size: EHeading[type],
        height: 'leading-normal lg:leading-normal',
        weight: 'font-bold',
    }
    const styles = cn(Object.values(obj).join(' '), className)
    const classValue = { className: styles }
    return createElement(type, classValue, children)
}

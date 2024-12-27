import {
    color,
    lineHeight,
    ParagraphSizes,
    TypographyProps,
    TypographyWeight,
} from '@/components/typography/types'
import { cn } from '@/lib/utils'
import { createElement } from 'react'
export default function ParagraphComponent({
    children,
    ...rest
}: TypographyProps) {
    const size = !rest.size ? 'text-base' : ParagraphSizes[rest.size]
    const weight = !rest.weight ? 'font-normal' : TypographyWeight[rest.weight]
    const className = !rest.className ? '' : rest.className

    const values = [color, className, lineHeight]
    const classValue = cn(size, weight, ...values)

    return createElement('p', { className: classValue }, children)
}

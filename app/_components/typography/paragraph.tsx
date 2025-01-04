import {
    paragraphColor,
    lineHeight,
    ParagraphSizes,
    TypographyProps,
    TypographyWeight,
} from '@/_components/typography/types'
import { cn } from '@/_lib/utils'
import { createElement } from 'react'
export default function ParagraphComponent({
    children,
    ...rest
}: TypographyProps) {
    const size = !rest.size ? 'text-base' : ParagraphSizes[rest.size]
    const weight = !rest.weight ? 'font-normal' : TypographyWeight[rest.weight]
    const className = !rest.className ? '' : rest.className

    const values = [paragraphColor, className, lineHeight]
    const classValue = cn(size, weight, ...values)

    return createElement('p', { className: classValue }, children)
}

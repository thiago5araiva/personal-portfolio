import { cn } from '@/lib/utils'
import { createElement } from 'react'
import {
    HeadingType,
    TypographyWeight,
    TypographyProps,
    lineHeight,
    color,
} from '@/components/typography/types'

export default function HeadingComponent({
    type,
    children,
    ...rest
}: TypographyProps) {
    const defaultType = !type ? 'h1' : type
    const weight = !rest.weight ? 'font-normal' : TypographyWeight[rest.weight]
    const className = !rest.className ? '' : rest.className

    const values = [color, className, lineHeight]
    const classValue = cn(HeadingType[defaultType], weight, ...values)

    return createElement(defaultType, { className: classValue }, children)
}

import {
    EParagraphSize,
    TypographyProps,
} from '@/components/typography/types'
import { cn } from '@/lib/utils'
import { createElement } from 'react'

export default function ParagraphComponent({
    size = 'base',
    children,
    className,
}: TypographyProps) {
    const obj = {
        size: EParagraphSize[size],
    }
    const styles = cn(Object.values(obj).join(' '), className)
    const classValue = { className: styles }
    return createElement('p', classValue, children)
}

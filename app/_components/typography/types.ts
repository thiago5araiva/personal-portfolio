import { ReactNode } from 'react'

/*-- heading --*/
export enum HeadingType {
    h1 = 'text-7xl',
    h2 = 'text-6xl',
    h3 = 'text-5xl',
    h4 = 'text-4xl',
    h5 = 'text-3xl',
    h6 = 'text-2xl',
    p = 'text-base',
}

/*-- paragraph --*/
export enum ParagraphSizes {
    xs = 'text-xs',
    sm = 'text-sm',
    base = 'text-base',
    lg = 'text-lg',
    xl = 'text-xl',
    '2xl' = 'text-2xl',
}

/*-- common --*/
export type TypographyProps = {
    size?: keyof typeof ParagraphSizes
    type?: keyof typeof HeadingType
    weight?: keyof typeof TypographyWeight
    className?: string
    children: ReactNode
}
export enum TypographyWeight {
    light = 'font-light',
    normal = 'font-normal',
    medium = 'font-medium',
    semibold = 'font-semibold',
    bold = 'font-bold',
}
export const lineHeight = 'leading-normal'
export const headingColor = 'text-font-high'
export const paragraphColor = 'text-font-medium'

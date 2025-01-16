import { ReactNode } from 'react'

/*-- heading --*/
export enum EHeading {
    h1 = 'text-5xl lg:text-7xl',
    h2 = 'text-2xl text-4xl',
    h3 = 'text-xl lg:text-2xl',
    h4 = 'text-4xl',
    h5 = 'text-3xl',
    h6 = 'text-2xl lg:text-3xl',
}

/*-- paragraph --*/
export enum EParagraphSize {
    xs = 'text-xs',
    sm = 'text-sm',
    base = 'text-base lg:text-xl',
    lg = 'text-base lg:text-lg',
    xl = 'text-base lg:text-xl',
    '2xl' = 'text-2xl',
}

/*-- common --*/
export type TypographyProps = {
    size?: keyof typeof EParagraphSize
    type?: keyof typeof EHeading
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

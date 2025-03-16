import { ReactElement } from 'react'
import { ButtonHTMLAttributes } from 'react'

export enum ButtonType {
    primary = `bg-primary-default hover:bg-primary-hover active:bg-primary-pressed text-white disabled:text-white`,
    secondary = `text-font-high border border-font-high hover:bg-surface-low active:bg-surface-medium`,
    ghost = `text-font-high hover:bg-surface-low active:bg-surface-medium`,
}
export interface CTAProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
    icon?: ReactElement
    right?: boolean
    variant: keyof typeof ButtonType
}

export const base = `text-base rounded-full focus:ring-4 focus:ring-primary-focused focus-visible:ring-4 focus-visible:ring-primary-focused disabled:border-primary-disabled disabled:text-primary-disabled disabled:bg-primary-disabled`

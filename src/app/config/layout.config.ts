import { cn } from '@/lib/utils'
import { Roboto } from 'next/font/google'

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-roboto',
    display: 'swap',
})

export const fonts = cn(roboto.variable)

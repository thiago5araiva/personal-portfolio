import { cn } from '@/src/lib/utils'
import { Alegreya, Overpass } from 'next/font/google'

export const overpass = Overpass({
    subsets: ['latin'],
    variable: '--font-overpass',
    display: 'swap',
})
export const alegreya = Alegreya({
    subsets: ['latin'],
    variable: '--font-alegreya',
    display: 'swap',
})

export const fonts = cn(overpass.variable, alegreya.variable)

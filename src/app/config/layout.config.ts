import { cn } from '@/lib/utils'
import { Archivo, Inter } from 'next/font/google'

export const archivo = Archivo({
    subsets: ['latin'],
    variable: '--font-archivo',
    display: 'swap',
})
export const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
})

export const fonts = cn(archivo.variable, inter.variable)

import { Fragment, ReactNode } from 'react'
import QueryProvider from './query'
import { Toaster } from '@/components/ui/sonner'

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            <QueryProvider>{children}</QueryProvider>
            <Toaster />
        </Fragment>
    )
}

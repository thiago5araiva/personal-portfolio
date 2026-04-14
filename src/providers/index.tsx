import { Fragment, ReactNode } from 'react'
import { Toaster } from '@/components/ui/sonner'

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            {children}
            <Toaster />
        </Fragment>
    )
}

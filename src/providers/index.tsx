import { Fragment, ReactNode } from 'react'
import QueryProvider from './query'

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            <QueryProvider>{children}</QueryProvider>
        </Fragment>
    )
}

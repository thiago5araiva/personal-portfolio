import AvatarComponent from '@/src/components/avatar.component'
import { Dot, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { mockData, mockLink } from './mock.home'
import { FeaturedItemListProps, FeaturedLinkProps } from './types.home'
import { ReactNode } from 'react'

const FeaturedContainer = ({ children }: { children: ReactNode }) => {
    return <div className="featured__container grid gap-6">{children}</div>
}
const FeaturedHeader = () => {
    return (
        <div className="featured__header flex items-center gap-3">
            <Dot className="text-brand-tertiary" />
            <span className="font-bold">What We’re Reading Today</span>
        </div>
    )
}
const FeaturedItemList = ({ data }: FeaturedItemListProps) => {
    return (
        <div className="featured__list grid gap-6">
            {data.map((item) => (
                <div className="featured__item" key={item.key}>
                    <div className="flex gap-3 items-center mb-3">
                        <AvatarComponent name={'Amit Das'} />
                    </div>
                    <h3 className="text-base">{item.value}</h3>
                </div>
            ))}
        </div>
    )
}
const FeaturedLink = ({ data }: FeaturedLinkProps) => {
    return (
        <Link href={data.href} className="flex items-center gap-3 mt-3">
            <h6>{data.label}</h6>
            <MoveRight className="text-brand-tertiary" />
        </Link>
    )
}

const FeaturedComponent = {
    Container: FeaturedContainer,
    Header: FeaturedHeader,
    List: FeaturedItemList,
    Link: FeaturedLink,
}

export default function Featured() {
    return (
        <FeaturedComponent.Container>
            <FeaturedComponent.Header />
            <FeaturedComponent.List data={mockData} />
            <FeaturedComponent.Link data={mockLink} />
        </FeaturedComponent.Container>
    )
}

import AvatarComponent from '@/src/components/avatar.component'
import Search from '@/src/components/search.component'
import { Dot, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { mockData, mockLink } from '../../home/mock.home'
import { createContext, ReactNode, useContext } from 'react'

type TopicType = { children: ReactNode }
type TopicHeaderType = { title: string }
type TopicListType = { data: Array<{ key: number; value: string }> }
type TopicListItemType = { value: string }
type TopicButtonType = { href: string; label: string }

function Topic({ children }: TopicType) {
    return <div className="topic grid gap-6">{children}</div>
}

Topic.Header = function Header({ title }: TopicHeaderType) {
    return (
        <div className="featured__header flex items-center">
            <Dot className="text-brand-tertiary" />
            <span className="font-bold">{title}</span>
        </div>
    )
}

Topic.List = function List({ data }: TopicListType) {
    return (
        <div className=" featured__list grid gap-6">
            {data.map(({ key, value }) => (
                <div className="featured__item" key={key}>
                    <Topic.ListItem value={value} />
                </div>
            ))}
        </div>
    )
}

Topic.ListItem = function ListItem({ value }: TopicListItemType) {
    return <h3 className="text-base font-light">{value}</h3>
}

Topic.Button = function Button({ href, label }: TopicButtonType) {
    return (
        <div className="self-end">
            <Link href={href} className="flex items-center gap-3">
                <h6>{label}</h6>
                <MoveRight className="text-brand-tertiary" />
            </Link>
        </div>
    )
}

export default Topic

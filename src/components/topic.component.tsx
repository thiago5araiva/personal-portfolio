import { Dot, MoveRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

type TopicType = { children: ReactNode }
type TopicHeaderType = { title: string }
type TopicListType = { data: Array<{ title: string; url: string }> }
type TopicListItemType = { value: string }
type TopicButtonType = { href: string; label: string }

function Topic({ children }: TopicType) {
    return <div className="topic grid gap-6">{children}</div>
}

Topic.Header = function Header({ title }: TopicHeaderType) {
    return (
        <div className="featured__header flex items-center">
            <Dot className="text-caesar-burgundy" />
            <span className="font-bold">{title}</span>
        </div>
    )
}
Topic.List = function List({ data }: TopicListType) {
    const uniqContent = data?.filter(
        (item, idx, self) =>
            idx === self.findIndex((t) => t.title === item.title)
    )

    return (
        <div className=" featured__list grid gap-6">
            {uniqContent?.slice(0, 3).map(({ title, url }) => (
                <Link href={url} key={title}>
                    <div className="featured__item">
                        <Topic.ListItem value={title} />
                    </div>
                </Link>
            ))}
        </div>
    )
}
Topic.ListItem = function ListItem({ value }: TopicListItemType) {
    return (
        <h3 className="text-base font-light line-clamp-2 text-caesar-black/70">
            {value}
        </h3>
    )
}
Topic.Button = function Button({ href, label }: TopicButtonType) {
    return (
        <div className="self-end">
            <Link
                href={href}
                className="flex items-center gap-3"
                target={'_blank'}>
                <h6>{label}</h6>
                <MoveRight className="text-caesar-burgundy" />
            </Link>
        </div>
    )
}

export default Topic

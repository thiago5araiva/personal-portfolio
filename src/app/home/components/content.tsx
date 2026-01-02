import AvatarComponent from '@/components/avatar.component'
import PlaceholderImage from '@/assets/images/placeholder.png'
import Image from 'next/image'
import { Bookmark, BookmarkCheck, Dot } from 'lucide-react'
import { PropsWithChildren } from 'react'
import { PostDataItem } from '@/store/contentful.store/contentful.type'

interface ContentContextType {
    state: { content: PostDataItem[] }
    actions: { onSelect: (id: string) => void }
}

type Props = PropsWithChildren<{
    data: PostDataItem[]
    onSelect: (id: string) => void
}>

type ContentProps = {
    image: string
    body: { title: string; description: string }
    createdAt: string
}

type TypeHeader = Pick<ContentProps, 'createdAt'>

type TypeBody = Pick<ContentProps, 'body'>

type TypeFooter = {
    state: { follow?: boolean; time: number }
    actions: { onSelect: () => void }
}

type TypeListItem = { value: PostDataItem }

Content.Header = function ContentHeader({ createdAt }: TypeHeader) {
    const date = new Date(createdAt)
    const today = new Date()
    const dateDiff = Number(today) - Number(date)
    const pastDays = Math.abs(Math.floor(dateDiff / (1000 * 60 * 60 * 24)))
    return (
        <div className="content__header flex items-center mb-4 lg:mb-3">
            <AvatarComponent name={'Amit Das'} />
            <Dot />
            <span>{`${pastDays} days ago`}</span>
        </div>
    )
}

Content.Body = function ContentBody({ body }: TypeBody) {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1">
                <Content.Title value={body.title} />
                <Content.Description value={body.description} />
            </div>
            <Content.Image />
        </div>
    )
}

Content.Footer = function ContentFooter(props: TypeFooter) {
    const { state, actions } = props
    const handleOnSelect = () => actions.onSelect()
    return (
        <div className="flex items-center justify-between text-sm mt-4 lg:mt-3 border-b pb-8">
            <div className="flex items-center gap-1 sm:gap-3 flex-wrap">
                <div className="flex items-center bg-gray-400 text-white rounded-full py-1 px-2 sm:px-3 text-xs sm:text-sm">
                    Portfolio
                </div>
                <Dot className="hidden sm:block" />
                <div className="flex items-center">
                    <span>{`${Math.round(state.time)} min read`}</span>
                </div>
                <Dot className="hidden sm:block" />
                <div className="hidden sm:flex items-center">
                    <span>Selected for you</span>
                </div>
            </div>
            <div className="shrink-0 ml-2" onClick={handleOnSelect}>
                {!state.follow && <Bookmark className={'text-brand-primary'} />}
                {state.follow && (
                    <BookmarkCheck className={'text-brand-primary'} />
                )}
            </div>
        </div>
    )
}

Content.Divider = function ContentDivider() {
    return <div className="border my-8 bg-gray-300" />
}

Content.Title = function ContentTitle({ value }: { value: string }) {
    return <h3 className="text-xl sm:text-2xl mb-3 lg:mb-3">{value}</h3>
}

Content.Description = function ContentText({ value }: { value: string }) {
    return <p className="mb-0 lg:mb-0 font-light">{value}</p>
}

Content.Image = function ContentImage() {
    return (
        <div className="item__image relative w-full h-[180px] lg:h-[120px] lg:w-[180px] lg:min-w-[180px] bg-gray-100 overflow-hidden rounded-lg">
            <Image
                draggable={false}
                src={PlaceholderImage}
                fill
                sizes="(max-width: 1024px) 100vw, 180px"
                alt="placeholder"
                className="object-cover"
            />
        </div>
    )
}

export default function Content({ data, onSelect }: Props) {
    return (
        <div className="flex flex-col gap-6 sm:gap-8 px-2 sm:px-6">
            {data.map((item) => {
                const { sys, follow, fields } = item
                const title = fields.title
                const description = fields.description
                const time = fields.body.split(' ').length / 200
                const handleBookmark = () => onSelect(sys.id)

                return (
                    <div key={sys.id}>
                        <Content.Header createdAt={sys.createdAt} />
                        <Content.Body body={{ title, description }} />
                        <Content.Footer
                            actions={{ onSelect: handleBookmark }}
                            state={{ follow, time }}
                        />
                    </div>
                )
            })}
        </div>
    )
}

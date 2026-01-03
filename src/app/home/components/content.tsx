import AvatarComponent from '@/components/avatar.component'
import PlaceholderImage from '@/assets/images/placeholder.png'
import Image from 'next/image'
import { BookmarkCheck, Dot } from 'lucide-react'
import { PropsWithChildren } from 'react'
import { PostDataItem } from '@/store/contentful.store/contentful.type'
import Link from 'next/link'
import { useContentfulStoreHydrated } from '@/store/contentful.store'

type Props = PropsWithChildren<{
    data: PostDataItem[]
}>
type TypeHeader = { createdAt: string }
type TypeBody = { state: { title: string; description: string; img?: string } }
type TypeFooter = {
    state: { follow?: boolean; time: number }
}

Content.Header = function ContentHeader({ createdAt }: TypeHeader) {
    const date = new Date(createdAt)
    const today = new Date()
    const dateDiff = Number(today) - Number(date)
    const pastDays = Math.abs(Math.floor(dateDiff / (1000 * 60 * 60 * 24)))
    return (
        <div className="content__header flex items-center mb-4 lg:mb-3">
            <AvatarComponent name={'Amit Das'} />
            <Dot className="text-caesar-black/30" />
            <span className="text-caesar-black/50 text-sm">{`${pastDays} days ago`}</span>
        </div>
    )
}
Content.Body = function ContentBody({ state }: TypeBody) {
    const { title, description } = state
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1">
                <Content.Title value={title} />
                <Content.Description value={description} />
            </div>
            <Content.Image />
        </div>
    )
}
Content.Footer = function ContentFooter(props: TypeFooter) {
    const { state } = props
    return (
        <div className="flex items-center justify-between text-sm mt-4 lg:mt-3 border-b border-caesar-black/20 group-hover:border-caesar-black transition-colors pb-8">
            <div className="flex items-center gap-1 sm:gap-3 flex-wrap">
                <div className="flex items-center bg-caesar-black/10 text-caesar-black/70 rounded-full py-1 px-2 sm:px-3 text-xs">
                    Portfolio
                </div>
                <Dot className="hidden sm:block text-caesar-black/30" />
                <span className="text-caesar-black/50 text-sm">{`${Math.round(state.time)} min read`}</span>
            </div>
            <div className="shrink-0 ml-2">
                {state.follow && (
                    <BookmarkCheck className="text-caesar-black" />
                )}
            </div>
        </div>
    )
}
Content.Divider = function ContentDivider() {
    return <div className="border my-8 bg-caesar-black/10" />
}
Content.Title = function ContentTitle({ value }: { value: string }) {
    return (
        <h3 className="text-xl sm:text-2xl mb-3 lg:mb-3 text-caesar-black">
            {value}
        </h3>
    )
}
Content.Description = function ContentText({ value }: { value: string }) {
    return (
        <p className="mb-0 lg:mb-0 font-light text-caesar-black/70">{value}</p>
    )
}
Content.Image = function ContentImage({ src }: { src?: string }) {
    return (
        <div className="item__image relative w-full h-[180px] lg:h-[120px] lg:w-[180px] lg:min-w-[180px] bg-caesar-black/5 overflow-hidden rounded-lg">
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

export default function Content({ data }: Props) {
    return (
        <div className="flex flex-col gap-6 sm:gap-8 px-2 sm:px-6">
            {data.map((item) => {
                const { sys, follow, fields } = item
                const title = fields.title
                const description = fields.description
                const time = fields.body.split(' ').length / 200
                return (
                    <Link key={sys.id} href={`/content/${fields.slug}`}>
                        <div className="group">
                            <Content.Header createdAt={sys.createdAt} />
                            <Content.Body state={{ title, description }} />
                            <Content.Footer state={{ follow, time }} />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

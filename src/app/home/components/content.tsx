import AvatarComponent from '@/components/avatar.component'
import PlaceholderImage from '@/assets/images/placeholder.png'
import Image from 'next/image'
import { BookmarkPlus, Dot } from 'lucide-react'
import { ReactNode } from 'react'

function Content({ children }: { children: ReactNode }) {
    return <div className="content content__container">{children}</div>
}

Content.Header = function ContentHeader() {
    return (
        <div className="content__header flex items-center mb-4 lg:mb-3">
            <AvatarComponent name={'Amit Das'} />
            <Dot />
            <span>4 days ago</span>
        </div>
    )
}
Content.Body = function ContentBody() {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-8">
            <div className="flex-1">
                <Content.Title />
                <Content.Text />
            </div>
            <Content.Image />
        </div>
    )
}
Content.Footer = function ContentFooter() {
    return (
        <div className="flex items-center justify-between text-sm mt-4 lg:mt-3 border-b pb-8">
            <div className="flex items-center gap-1 sm:gap-3 flex-wrap">
                <div className="flex items-center bg-gray-400 text-white rounded-full py-1 px-2 sm:px-3 text-xs sm:text-sm">
                    Portfolio
                </div>
                <Dot className="hidden sm:block" />
                <div className="flex items-center">
                    <span>3 min read</span>
                </div>
                <Dot className="hidden sm:block" />
                <div className="hidden sm:flex items-center">
                    <span>Selected for you</span>
                </div>
            </div>
            <div className="shrink-0 ml-2">
                <BookmarkPlus size={20} />
            </div>
        </div>
    )
}
Content.Divider = function ContentDivider() {
    return <div className="border my-8 bg-gray-300" />
}
Content.Title = function ContentTitle() {
    return (
        <h3 className="text-xl sm:text-2xl mb-3 lg:mb-3">
            Your portfolio is stopping you from geting that job
        </h3>
    )
}
Content.Text = function ContentText() {
    return (
        <p className="mb-0 lg:mb-0">
            An intense way to learn about the process and practice your designs
            skills — My 1st hackathon Hackathons have been on my mind since I
            heard it was a good way to gain experience as a junior UX designer.
            As my portfolio...
        </p>
    )
}
Content.Image = function ContentImage() {
    return (
        <div className="item__image relative w-full h-[180px] lg:h-[120px] lg:w-[180px] lg:min-w-[180px] bg-gray-100 overflow-hidden rounded-lg">
            <Image
                src={PlaceholderImage}
                fill
                sizes="(max-width: 1024px) 100vw, 180px"
                alt="placeholder"
                className="object-cover"
            />
        </div>
    )
}
Content.List = function ContentList() {
    return (
        <div className="flex flex-col gap-6 sm:gap-8 px-2 sm:px-6">
            {Array.from({ length: 6 }).map((_, index) => (
                <div key={index}>
                    <Content>
                        <Content.Header />
                        <Content.Body />
                        <Content.Footer />
                    </Content>
                </div>
            ))}
        </div>
    )
}

export default Content

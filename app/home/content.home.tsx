import AvatarComponent from '@/src/components/avatar.component'
import PlaceholderImage from '@/src/assets/images/placeholder.png'
import Image from 'next/image'
import { BookmarkPlus, Dot } from 'lucide-react'
import { ReactNode } from 'react'

//TODO [  ] add content tag
//TODO [  ] add read time
//TODO [  ] add select type "for you" | "by you"
//TODO [  ] add favorite button

function Content({ children }: { children: ReactNode }) {
    return <div className="content__container">{children}</div>
}

Content.Header = function ContentHeader() {
    return (
        <div className="content__header flex items-center mb-6 md:mb-3">
            <AvatarComponent name={'Amit Das'} />
            <Dot />
            <span>4 days ago</span>
        </div>
    )
}

Content.Body = function ContentBody() {
    return (
        <div className="md:flex gap-8">
            <div>
                <Content.Title />
                <Content.Text />
            </div>
            <Content.Image />
        </div>
    )
}

Content.Footer = function ContentFooter() {
    return (
        <div className="flex items-center justify-between text-sm mt-6 md:mt-3 border-b pb-8">
            <div className="flex items-center gap-3">
                <div className="flex items-center bg-gray-400 text-white rounded-full py-1 px-3">
                    Portfolio
                </div>
                <Dot />
                <div className="flex items-center">
                    <span>3 min read</span>
                </div>
                <Dot />
                <div className="flex items-center">
                    <span>Selected for you</span>
                </div>
            </div>
            <div>
                <BookmarkPlus />
            </div>
        </div>
    )
}

Content.Divider = function ContentDivider() {
    return <div className="border my-8 bg-gray-300" />
}

Content.Title = function ContentTitle() {
    return (
        <h3 className="text-2xl mb-6 md:mb-3">
            Your portfolio is stopping you from geting that job
        </h3>
    )
}

Content.Text = function ContentText() {
    return (
        <p className="mb-6 md:mb-0">
            An intense way to learn about the process and practice your designs
            skills — My 1st hackathon Hackathons have been on my mind since I
            heard it was a good way to gain experience as a junior UX designer.
            As my portfolio...
        </p>
    )
}

Content.Image = function ContentImage() {
    return (
        <div className="item__image relative w-full h-[150px] bg-red-300 overflow-hidden rounded-lg">
            <Image
                src={PlaceholderImage}
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                alt="placeholder"
                className="object-cover"
            />
        </div>
    )
}

export default Content

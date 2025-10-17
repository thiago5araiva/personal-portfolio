import AvatarComponent from '@/src/components/avatar.component'
import { Dot } from 'lucide-react'
import { ReactNode } from 'react'

const ContentContainer = ({ children }: { children: ReactNode }) => {
    return <div className="content__container w-full">{children}</div>
}
const ContentHeader = () => {
    return (
        <div className="item__header flex items-center mb-3">
            <div className="flex gap-3 items-center">
                <AvatarComponent name={'Amit Das'} />
            </div>
            <Dot />
            <span>4 days ago</span>
        </div>
    )
}
const ContentItem = () => {
    return (
        <div className="item__content">
            <h3 className="text-2xl">
                Your portfolio is stopping you from geting that job
            </h3>
            <p>
                An intense way to learn about the process and practice your
                designs skills — My 1st hackathon Hackathons have been on my
                mind since I heard it was a good way to gain experience as a
                junior UX designer. As my portfolio...
            </p>
        </div>
    )
}

const ContentComponent = {
    Container: ContentContainer,
    Header: ContentHeader,
    Item: ContentItem,
}

export default function Content() {
    return (
        <ContentComponent.Container>
            <ContentComponent.Header />
            <ContentComponent.Item />
        </ContentComponent.Container>
    )
}

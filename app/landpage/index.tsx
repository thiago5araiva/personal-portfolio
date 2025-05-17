import {
    Carousel,
    CTA,
    Heading,
    Paragraph,
    ContentLink,
    Loading,
} from '@/components'
import { TypeModule } from './landpage.types'
import Link from 'next/link'
import { MoveRight, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import * as stackIcon from '@/assets/images/stack/'
import Image from 'next/image'

type Props = TypeModule

export default function View(props: Props) {
    const { state } = props

    if (state.data.length == 0) return <Loading />

    return (
        <section id="home">
            <div className="home-header grid gap-6">
                <Heading type="h1" weight="bold">
                    {state.HEADER.title}
                </Heading>
                <Paragraph size="xl">{state.HEADER.description}</Paragraph>
            </div>
            <div className="home-cta mt-16">
                <Link target="blank" href={state.CTA_BUTTON.url}>
                    <CTA
                        icon={<MoveRight />}
                        label={state.CTA_BUTTON.label}
                        variant="primary"
                    />
                </Link>
            </div>
            <div className="home-companies mt-36">
                <Carousel data={state.COMPANIES_LOGO} />
            </div>
            <div className="home-work mt-12 grid gap-12">
                <Heading type="h6" weight="bold">
                    {state.WORK.title}
                </Heading>
                {state.data.map(({ id, child_page }) => (
                    <ContentLink
                        id={id}
                        key={id}
                        href={`post`}
                        label={child_page?.title}
                    />
                ))}
                <div className="flex justify-center">
                    <Button variant={'outline'} className="rounded-full w-36">
                        <Link href={'/work'}>See more</Link>
                    </Button>
                </div>
            </div>
            <div className="home-service my-36 grid gap-6 lg:gap-12">
                <Heading type="h6">{state.SERVICES.title}</Heading>
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-28">
                    {state.SERVICES.items.map((item, index) => (
                        <div className="grid gap-4" key={index}>
                            <Heading
                                type="h6"
                                className="text-base lg:text-lg uppercase font-light"
                            >
                                {item.title}
                            </Heading>
                            <Paragraph size="lg">{item.description}</Paragraph>
                        </div>
                    ))}
                </div>
            </div>
            <div className="home-stack flex justify-around">
                {Object.keys(stackIcon).map((item, index) => (
                    <Image
                        key={index}
                        src={stackIcon[item as keyof typeof stackIcon]}
                        alt="Logo"
                        width={45}
                        height={45}
                        draggable={false}
                        priority
                    />
                ))}
            </div>
        </section>
    )
}

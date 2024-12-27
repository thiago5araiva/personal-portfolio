import { Action, Carousel, Heading, Paragraph } from '@/components/'
import { MoveRight } from 'lucide-react'
import Link from 'next/link'

import {
    accenture,
    baires,
    cheesecake,
    einstein,
    labsit,
    magalu,
    midway,
    pinterest,
    porto,
    squarespace,
} from '@/assets/images/companies'

const header = {
    title: 'Creative Engineer: Building Experiences with Software',
    description: `As a fullstack developer from Brazil, I'm ready to bring your ideas to life. With a background in advertising and software engineering, I specialize in creating experiences for companies of all sizes, from startups to big tech giants. I'm a problem solver at heart and thrive on tackling complex, challenging projects. Let's transform your vision into reality.`,
    action: {
        label: 'Get in touch',
        url: 'https://www.linkedin.com/in/thiago5araiva/',
    },
    logos: [
        {
            image: accenture,
            alt: 'Accenture',
        },
        {
            image: pinterest,
            alt: 'Pinterest',
        },
        {
            image: squarespace,
            alt: 'Squarespace',
        },
        {
            image: magalu,
            alt: 'magalu',
        },
        {
            image: einstein,
            alt: 'Hospital Albert Einstein',
        },
        {
            image: porto,
            alt: 'Porto Seguro',
        },
        {
            image: cheesecake,
            alt: 'Cheesecake Labs',
        },
        {
            image: baires,
            alt: 'Baires Dev',
        },
        {
            image: labsit,
            alt: 'Labsit',
        },
        {
            image: midway,
            alt: 'Midway Financeira',
        },
    ],
}

const action = { ...header.action }
export default function Page() {
    return (
        <section id="home">
            <div className="home-header grid gap-6">
                <Heading type="h1" weight="bold">
                    {header.title}
                </Heading>
                <Paragraph size="xl">{header.description}</Paragraph>
            </div>
            <div className="home-cta mt-16">
                <Link target="blank" href={action.url}>
                    <Action
                        icon={<MoveRight />}
                        label={action.label}
                        variant="primary"
                    />
                </Link>
            </div>
            <div className="home-companies mt-36">
                <Carousel data={header.logos} />
            </div>
        </section>
    )
}

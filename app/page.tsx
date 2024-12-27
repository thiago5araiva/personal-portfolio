import { Action, Heading, Paragraph } from '@/components/'
import { MoveRight } from 'lucide-react'

const header = {
    title: 'Creative Engineer: Building Experiences with Software',
    description: `As a fullstack developer from Brazil, I'm ready to bring your ideas to life. With a background in advertising and software engineering, I specialize in creating experiences for companies of all sizes, from startups to big tech giants. I'm a problem solver at heart and thrive on tackling complex, challenging projects. Let's transform your vision into reality.`,
    action: `Get in touch`,
}

export default function Page() {
    return (
        <section id="home">
            <div className="home-header grid gap-6">
                <Heading type="h1" weight="bold">
                    {header.title}
                </Heading>
                <Paragraph size="xl">{header.description}</Paragraph>
            </div>
            <div className="home-cta my-16">
                <Action
                    icon={<MoveRight />}
                    label={header.action}
                    variant="primary"
                />
            </div>
        </section>
    )
}

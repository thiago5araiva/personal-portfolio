import { Heading, Paragraph } from '@/components/'

const title = 'Creative Engineer: Building Experiences with Software'
const description = `As a fullstack developer from Brazil, I'm ready to bring your ideas to life. With a background in advertising and software engineering, I specialize in creating experiences for companies of all sizes, from startups to big tech giants. I'm a problem solver at heart and thrive on tackling complex, challenging projects. Let's transform your vision into reality.`

export const Title = ({ content }: { content: string }) => {
    return <Heading type="h1">{content}</Heading>
}

export const Description = ({ content }: { content: string }) => {
    return <Paragraph size="xl">{content}</Paragraph>
}

export default function Page() {
    return (
        <section id="home">
            <div className="home-header grid gap-6">
                <Title content={title} />
                <Description content={description} />
            </div>
        </section>
    )
}

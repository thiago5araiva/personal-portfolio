import Heading from '@/_components/typography/heading'
import Paragraph from '@/_components/typography/paragraph'
import Link from 'next/link'

type Props = {
    data: {
        heading: string
        mail: string
        year: number
        social: Array<{
            label: string
            href: string
        }>
    }
}
export default function FooterComponent({ data }: Props) {
    return (
        <footer className="pt-10 mt-16 border-t border-border-primary">
            <div className="grid justify-center gap-10 lg:grid-cols-3">
                <div className="grid gap-2 lg:col-span-2">
                    <Heading type="h6" className="text-center lg:text-left">
                        {data.heading}
                    </Heading>
                    <Paragraph className="text-center lg:text-left text-2xl text-font-low">
                        {data.mail}
                    </Paragraph>
                </div>
                <div className=" lg:justify-self-end">
                    <ul className="grid gap-4 items-center justify-center">
                        {data.social.map((item, index) => (
                            <Link href={item.href} key={index} target="_blank">
                                <li className="text-center">{item.label}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="my-10 text-center">
                <small className="text-base text-font-low font-weight-light">
                    © Copyright {data.year} Thiago Saraiva
                </small>
            </div>
        </footer>
    )
}

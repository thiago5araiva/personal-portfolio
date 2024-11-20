import Heading from '@/components/typography/heading'
import Subtitle from '@/components/typography/subtitle'

type Props = {
    title?: string
    subtitle?: string
}
export default function WorkHeader({ title, subtitle }: Props) {
    return (
        <div className="mb-12 sm:mb-20">
            <Heading
                type="h2"
                className="text-2xl mb-3 sm:text-4xl text-font-high"
            >
                {title}
            </Heading>
            <Subtitle className="text-base text-font-medium sm:text-xl">
                {subtitle}
            </Subtitle>
        </div>
    )
}

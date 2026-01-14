import { icons, LucideProps } from 'lucide-react'

interface Props extends LucideProps {
    name: keyof typeof icons
}

export default function Icon({ name, ...props }: Props) {
    const LucideIcon = icons[name]
    return <LucideIcon {...props} />
}

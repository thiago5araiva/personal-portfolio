import Image from 'next/image'
import { Bell, Bookmark, FileText, Home, icons } from 'lucide-react'
import Icon from '@/src/utils/icons'
import Logo from '@/src/assets/images/logo.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar'
import Link from 'next/link'

type Link = {
    label: string
    href: string
    name: string
}

type Props = {
    links: Link[]
}

function NavigationLinks({ data }: { data: Props['links'] }) {
    return (
        <nav className="flex lg:flex-col gap-9 text-brand-secondary">
            {data.map(({ label, href, name }) => {
                const icon = name as keyof typeof icons
                return (
                    <Link key={name} href={href}>
                        <Icon
                            key={name}
                            name={icon}
                            size={21}
                            className="hover:text-brand-tertiary"
                        />
                        <span className="sr-only">{label}</span>
                    </Link>
                )
            })}
        </nav>
    )
}

export default function NavigationComponent({ links }: Props) {
    return (
        <div className="flex w-full justify-between items-center py-9 lg:flex-col lg:h-full">
            {/* logo */}
            <div className="navigation-logo">
                <Image src={Logo} alt="Logo" width={30} height={23} />
            </div>
            {/* links */}
            <div className="navigation-links">
                <nav className="flex lg:flex-col gap-6 text-brand-secondary">
                    <NavigationLinks data={links} />
                </nav>
            </div>
            {/* avatar */}
            <div className="navigation-avatar">
                <Avatar className="bg-brand-secondary text-white text-xs w-9 h-9">
                    <AvatarImage src="" alt="user" />
                    <AvatarFallback>ER</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

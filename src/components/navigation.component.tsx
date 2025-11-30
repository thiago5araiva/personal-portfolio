import Image from 'next/image'
import { Bell, Bookmark, FileText, Home, icons } from 'lucide-react'
import Icon from '@/utils/icons'
import Logo from '@/assets/images/logo.png'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

type Link = {
    label: string
    href: string
    name: string
}

type Icon = keyof typeof icons

type Props = {
    links: Link[]
}

function NavigationLinks({ data }: { data: Props['links'] }) {
    return (
        <nav className="flex lg:flex-col gap-6 justify-center text-brand-secondary">
            {data.map(({ label, href, name }) => {
                const icon = name as Icon
                return (
                    <Link key={name} href={href}>
                        <Icon
                            key={name}
                            name={icon}
                            size={18}
                            className="text-brand-primary hover:text-brand-tertiary"
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
        <nav className="navi__position bg-white sticky top-0 z-10 right-0 left-0">
            <div className="nav__container flex lg:flex-col lg:h-screen items-center justify-between py-4 sm:py-9">
                {/* logo */}
                <div className="navigation-logo">
                    <Image src={Logo} alt="Logo" width={24} height={24} />
                </div>
                {/* links */}
                <div className="navigation-links order-1 ">
                    <NavigationLinks data={links} />
                </div>
                {/* avatar */}
                <div className="navigation-avatar order-2">
                    <Avatar className="bg-white">
                        <AvatarImage src="" alt="user" />
                        <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </nav>
    )
}

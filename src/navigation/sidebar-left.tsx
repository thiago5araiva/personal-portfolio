import Image from 'next/image'
import { icons } from 'lucide-react'
import Icon from '@/utils/icons'
import Logo from '@/assets/images/portfolio-logo.png'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
        <nav className="flex lg:flex-col gap-6 justify-center text-caesar-black">
            {data.map(({ label, href, name }) => {
                const icon = name as Icon
                return (
                    <Link key={name} href={href}>
                        <Icon
                            key={name}
                            name={icon}
                            size={21}
                            className="text-caesar-black/70 hover:text-caesar-black transition-colors"
                        />
                        <span className="sr-only">{label}</span>
                    </Link>
                )
            })}
        </nav>
    )
}

export default function SidebarLeft({ links }: Props) {
    return (
        <div className="main__navigation lg:border-r lg:pr-8">
            <nav className="navi__position bg-caesar-white sticky top-0 z-10 right-0 left-0">
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
                        <Avatar className="bg-caesar-black text-caesar-white">
                            <AvatarImage src="" alt="user" />
                            <AvatarFallback className="bg-caesar-black text-caesar-white text-xs">ER</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </nav>
        </div>
    )
}

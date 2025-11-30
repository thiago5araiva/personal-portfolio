import { cn } from '../lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

type Props = {
    name: string
    profileImageUrl?: string
    className?: string
}

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
}

export default function AvatarComponent(props: Props) {
    const { name, profileImageUrl, className } = props
    const initials = getInitials(name)
    return (
        <div className={cn('avatar-component', className)}>
            <div className="flex gap-3 items-center">
                <Avatar className="bg-brand-secondary text-white text-xs w-9 h-9">
                    <AvatarImage src={profileImageUrl} alt="user" />
                    <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
                <h6>{name}</h6>
            </div>
        </div>
    )
}

'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card'
import { MessageCircle, Mail, Linkedin, User } from 'lucide-react'
import Link from 'next/link'

type ContactInfo = {
    whatsapp?: string
    email?: string
    linkedin?: string
}

type Props = {
    name: string
    role?: string
    profileImageUrl?: string
    contacts: ContactInfo
    children: React.ReactNode
}

const getInitials = (name: string) => {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
}

function ContactLink({
    href,
    icon: Icon,
    label,
    color,
}: {
    href: string
    icon: typeof MessageCircle
    label: string
    color: string
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group/link flex items-center gap-3 py-2.5 px-3"
        >
            <span
                className={`flex items-center justify-center w-8 h-8 ${color}`}
            >
                <Icon size={14} strokeWidth={2} />
            </span>
            <span
                className="text-sm text-caesar-black/70 font-medium tracking-tight"
            >
                {label}
            </span>
            <span
                className="ml-auto opacity-0 -translate-x-2 transition-all duration-300
                           group-hover/link:opacity-100 group-hover/link:translate-x-0"
            >
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-caesar-black/40"
                >
                    <path
                        d="M4 2L8 6L4 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </a>
    )
}

function InternalLink({
    href,
    icon: Icon,
    label,
    color,
}: {
    href: string
    icon: typeof MessageCircle
    label: string
    color: string
}) {
    return (
        <Link
            href={href}
            className="group/link flex items-center gap-3 py-2.5 px-3"
        >
            <span
                className={`flex items-center justify-center w-8 h-8 ${color}`}
            >
                <Icon size={14} strokeWidth={2} />
            </span>
            <span
                className="text-sm text-caesar-black/70 font-medium tracking-tight"
            >
                {label}
            </span>
            <span
                className="ml-auto opacity-0 -translate-x-2 transition-all duration-300
                           group-hover/link:opacity-100 group-hover/link:translate-x-0"
            >
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-caesar-black/40"
                >
                    <path
                        d="M4 2L8 6L4 10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </span>
        </Link>
    )
}

export default function ContactHoverCard({
    name,
    role = 'Developer',
    profileImageUrl,
    contacts,
    children,
}: Props) {
    const initials = getInitials(name)

    const whatsappUrl = contacts.whatsapp
        ? `https://wa.me/${contacts.whatsapp.replace(/\D/g, '')}`
        : null
    const emailUrl = contacts.email ? `mailto:${contacts.email}` : null
    const linkedinUrl = contacts.linkedin

    return (
        <HoverCard openDelay={200} closeDelay={100}>
            <HoverCardTrigger asChild>{children}</HoverCardTrigger>
            <HoverCardContent
                side="right"
                align="end"
                sideOffset={16}
                className="w-72 p-0 border border-caesar-black/10 shadow-2xl shadow-caesar-black/20
                           bg-white rounded-none overflow-hidden
                           data-[state=open]:animate-in data-[state=closed]:animate-out
                           data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
                           data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
                           data-[side=right]:slide-in-from-left-4"
            >
                {/* Header */}
                <div className="relative">
                    {/* Profile section */}
                    <div className="pt-5 pb-4 px-5">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <Avatar className="w-14 h-14 ring-2 ring-caesar-black/10 ring-offset-2 ring-offset-white">
                                    <AvatarImage
                                        src={profileImageUrl}
                                        alt={name}
                                    />
                                    <AvatarFallback className="bg-caesar-black text-white text-sm font-semibold tracking-wide">
                                        {initials}
                                    </AvatarFallback>
                                </Avatar>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-caesar-black text-base tracking-tight truncate">
                                    {name}
                                </h3>
                                <p className="text-caesar-black/50 text-xs font-medium uppercase tracking-widest mt-0.5">
                                    {role}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mx-5 h-px bg-caesar-black/10" />

                {/* Contact links */}
                <div className="p-3 space-y-0.5">
                    <InternalLink
                        href="/about"
                        icon={User}
                        label="About"
                        color="text-caesar-burgundy"
                    />
                    {whatsappUrl && (
                        <ContactLink
                            href={whatsappUrl}
                            icon={MessageCircle}
                            label="WhatsApp"
                            color="text-caesar-burgundy"
                        />
                    )}
                    {emailUrl && (
                        <ContactLink
                            href={emailUrl}
                            icon={Mail}
                            label="Email"
                            color="text-caesar-burgundy"
                        />
                    )}
                    {linkedinUrl && (
                        <ContactLink
                            href={linkedinUrl}
                            icon={Linkedin}
                            label="LinkedIn"
                            color="text-caesar-burgundy"
                        />
                    )}
                </div>

                {/* Footer */}
                <div className="px-5 py-3 bg-caesar-black/5 border-t border-caesar-black/10">
                    <p className="text-[10px] text-caesar-black/40 font-medium uppercase tracking-widest text-center">
                        Clique para conectar
                    </p>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

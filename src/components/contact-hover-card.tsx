'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle } from '@/components/ui/drawer'
import { MessageCircle, Mail, Linkedin, User } from 'lucide-react'
import Link from 'next/link'
import { useIsMobile } from '@/hooks/useIsMobile'
import ProfileImage from '@/assets/images/me.png'

const CONTACT_INFO = {
	name: 'Thiago Saraiva',
	role: 'Software Engineer',
	profileImage: ProfileImage,
	email: 'thiagosaraivacsouza@gmail.com',
	linkedin: 'https://www.linkedin.com/in/thiago5araiva/',
}

const CardLinkContact = ({ href, icon: Icon, label, color }: { href: string; icon: typeof MessageCircle; label: string; color: string }) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-3 py-2.5 px-3">
			<span className={`flex items-center justify-center w-8 h-8 ${color}`}>
				<Icon size={14} strokeWidth={2} />
			</span>
			<span className="text-sm text-caesar-black/70 font-medium tracking-tight">{label}</span>
			<span
				className="ml-auto opacity-0 -translate-x-2 transition-all duration-300
                           group-hover/link:opacity-100 group-hover/link:translate-x-0">
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-caesar-black/40">
					<path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</span>
		</a>
	)
}
const CardLinkInternal = ({ href, icon: Icon, label, color }: { href: string; icon: typeof MessageCircle; label: string; color: string }) => {
	return (
		<Link href={href} className="group/link flex items-center gap-3 py-2.5 px-3">
			<span className={`flex items-center justify-center w-8 h-8 ${color}`}>
				<Icon size={14} strokeWidth={2} />
			</span>
			<span className="text-sm text-caesar-black/70 font-medium tracking-tight">{label}</span>
			<span
				className="ml-auto opacity-0 -translate-x-2 transition-all duration-300
                           group-hover/link:opacity-100 group-hover/link:translate-x-0">
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-caesar-black/40">
					<path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</span>
		</Link>
	)
}
const CardContent = () => {
	return (
		<div>
			<div className="pt-5 pb-4 px-5">
				<div className="flex items-center gap-4">
					<div className="flex-1 min-w-0">
						<h3 className="font-semibold text-caesar-black text-base tracking-tight truncate">{CONTACT_INFO.name}</h3>
						<p className="text-caesar-black/50 text-xs font-medium uppercase tracking-widest mt-0.5">{CONTACT_INFO.role}</p>
					</div>
				</div>
			</div>
			<div className="mx-5 h-px bg-caesar-black/10" />
			<div className="p-3 space-y-0.5">
				<CardLinkInternal href="/about" icon={User} label="About" color="text-caesar-burgundy" />
				<CardLinkContact href={CONTACT_INFO.email} icon={Mail} label="Email" color="text-caesar-burgundy" />
				<CardLinkContact href={CONTACT_INFO.linkedin} icon={Linkedin} label="LinkedIn" color="text-caesar-burgundy" />
			</div>
		</div>
	)
}
const ContactCardMobile = () => {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Avatar className="text-caesar-black transition-all duration-300 group-hover:ring-2 group-hover:ring-caesar-burgundy/30 group-hover:ring-offset-2">
					<Avatar className="w-14 h-14 ring-2 ring-caesar-black/10 ring-offset-2 ring-offset-white">
						<AvatarImage src={ProfileImage.src} alt={'Thiago Saraiva'} />
						<AvatarFallback className="w-14 h-14 bg-caesar-black text-white text-sm font-semibold tracking-wide">TS</AvatarFallback>
					</Avatar>
				</Avatar>
			</DrawerTrigger>
			<DrawerContent className="bg-caesar-white rounded-none border-caesar-black/10">
				<DrawerTitle className="sr-only">Contact</DrawerTitle>
				<CardContent />
			</DrawerContent>
		</Drawer>
	)
}

export default function ContactCard() {
	const isMobile = useIsMobile()
	if (isMobile) return <ContactCardMobile />

	return (
		<HoverCard openDelay={200} closeDelay={100}>
			<HoverCardTrigger asChild>
				<Avatar className="text-caesar-black transition-all duration-300 group-hover:ring-2 group-hover:ring-caesar-burgundy/30 group-hover:ring-offset-2">
					<AvatarImage src={ProfileImage.src} alt={'Thiago Saraiva'} />
					<AvatarFallback className="bg-caesar-black text-white text-sm font-semibold tracking-wide">TS</AvatarFallback>
				</Avatar>
			</HoverCardTrigger>
			<HoverCardContent
				side="right"
				align="end"
				sideOffset={16}
				className="w-72 p-0 border border-caesar-black/10 shadow-2xl shadow-caesar-black/20
                           bg-white rounded-none overflow-hidden
                           data-[state=open]:animate-in data-[state=closed]:animate-out
                           data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
                           data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
                           data-[side=right]:slide-in-from-left-4">
				<CardContent />
			</HoverCardContent>
		</HoverCard>
	)
}

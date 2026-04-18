import Image from 'next/image'
import Logo from '@/assets/images/portfolio-logo.png'
import Link from 'next/link'
import ContactCard from '@/components/contact-hover-card'
import React from 'react'

export default function SidebarLeft() {
	return (
		<div className="main__navigation lg:border-r lg:pr-8">
			<nav className="navi__position bg-caesar-white sticky top-0 z-10 right-0 left-0">
				<div className="nav__container flex lg:flex-col lg:h-screen items-center justify-between py-4 sm:py-9">
					<Link href={'/'}>
						<div className="navigation-logo">
							<Image src={Logo} alt="Logo" width={24} height={24} />
						</div>
					</Link>
					<ContactCard />
				</div>
			</nav>
		</div>
	)
}

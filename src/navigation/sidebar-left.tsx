import Link from 'next/link'

export default function SidebarLeft() {
	return (
		<div className="main__navigation lg:border-r lg:border-caesar-black/15 lg:pr-8">
			<nav className="navi__position bg-caesar-white sticky top-0 z-10 right-0 left-0">
				<div className="nav__container flex items-center lg:flex-col lg:h-screen py-4 sm:py-9">
					<Link
						href="/"
						aria-label="Home"
						className="group inline-flex items-center gap-2 font-mono text-[0.75rem] uppercase tracking-meta text-caesar-black transition-colors duration-300 ease-out-quart hover:text-caesar-burgundy">
						<span
							aria-hidden
							className="inline-block h-px w-3 bg-caesar-black/40 transition-all duration-500 ease-out-quart group-hover:w-6 group-hover:bg-caesar-burgundy"
						/>
						<span>TS</span>
					</Link>
				</div>
			</nav>
		</div>
	)
}

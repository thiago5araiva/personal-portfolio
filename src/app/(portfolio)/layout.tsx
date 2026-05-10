import Navigation from '@/navigation/sidebar-left'
import FooterComponent from '@/components/footer.component'
import { ReactNode } from 'react'

type Props = Readonly<{
	children: ReactNode
}>

export default function PortfolioLayout({ children }: Props) {
	return (
		<div className="main__container lg:flex lg:justify-center">
			<Navigation />
			<div className="main__content w-full lg:mx-8 flex flex-col min-h-screen">
				<div className="flex-1">{children}</div>
				<FooterComponent />
			</div>
		</div>
	)
}

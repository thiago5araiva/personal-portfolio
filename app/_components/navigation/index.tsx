'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { twMerge as merge } from 'tailwind-merge'
import Logo from '@/_assets/images/portfolio-logo.png'
import Drawer from './Drawer'

const routes = [
  { label: 'Home', value: '/' },
  { label: 'Works', value: '/works' },
  { label: 'About', value: '/about' },
]

const styles = {
  base: 'text-xl font-bold hover:text-primary-hover',
  inactive: 'text-low font-light ',
}

export default function NavigationComponent() {
  const pathname = usePathname()

  return (
    <nav className="py-5 mb-16 sm-20">
      <div className="flex items-center justify-between">
        <Link href={'/'}>
          <Image
            src={Logo}
            alt="Logo"
            width={39}
            height={39}
            draggable={false}
            priority
          />
        </Link>
        <div className="hidden lg:flex gap-10">
          {routes?.map((route, index) => {
            return (
              <Link
                key={index}
                href={route.value}
                className={merge(
                  `${styles.base} ${
                    pathname !== route.value && styles.inactive
                  }`
                )}>
                {route.label}
              </Link>
            )
          })}
        </div>
        <div className="lg:hidden">
          <Drawer routes={routes} />
        </div>
      </div>
    </nav>
  )
}

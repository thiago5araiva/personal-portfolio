import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/images/logo.png'

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-primary-default/90 backdrop-blur border-b border-white/10">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 h-16">
                <Link href="/" className="flex items-center" aria-label="Home">
                    <Image src={Logo} alt="Logo" width={32} height={32} priority />
                </Link>
                <Link
                    href="/blog"
                    className="text-sm font-medium tracking-wide text-white/70 hover:text-white transition-colors">
                    Blog
                </Link>
            </nav>
        </header>
    )
}

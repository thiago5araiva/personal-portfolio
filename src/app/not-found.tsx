import { Button } from '@/components/ui/button'
import { MoveLeft, MoveRight } from 'lucide-react'
import Link from 'next/link'

export default function NotFoundPage() {
    return (
        <section className="not-found">
            <div className="flex flex-col items-center my-36">
                <div className="max-w-[480px]	 mb-10">
                    <h1 className="text-3xl text-font-high font-semibold text-center mb-6 sm:text-6xl">
                        Oops ~ Contents Ran Away
                    </h1>
                    <p className="text-lg text-font-high text-center sm:text-xl">
                        Don’t panic! I can help you to ...
                    </p>
                </div>
                <div className="grid gap-4">
                    <div>
                        <Link href={'/'}>
                            <Button className="w-[260px] bg-primary-default text-base-white rounded-full">
                                <MoveLeft className="mr-3" />
                                Find Your Way Home
                            </Button>
                        </Link>
                    </div>
                    <div>
                        <Button className="w-[260px]  border border-primary-default black rounded-full">
                            Contact Me
                            <MoveRight className="ml-3" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

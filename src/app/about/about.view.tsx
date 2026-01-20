import { TypeAbout } from './about.types'
import Image from 'next/image'
import me from '@/assets/images/photo-me.webp'

type Props = TypeAbout

export default function AboutView(props: Props) {
    return (
        <section className="about pt-8 sm:pt-10 lg:pt-12">
            {/* Hero Section */}
            <div className="grid lg:grid-cols-[1fr,auto] gap-10 lg:gap-16 items-start pb-12 lg:pb-16">
                {/* Text content */}
                <div className="order-2 lg:order-1">
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-caesar-black/50 mb-4 block">
                        Software Engineer
                    </span>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-caesar-black tracking-tight leading-[1.1] mb-4">
                        More Story
                        <br />
                        About <span className="text-caesar-burgundy">Me</span>
                    </h1>

                    <p className="text-lg text-caesar-black/60 max-w-md mb-8">
                        Explore the chapters of my life, both inside and outside
                        the software engineering world.
                    </p>

                    {/* Stats */}
                    <div className="flex gap-10">
                        <div>
                            <div className="text-2xl font-bold text-caesar-black">
                                10+
                            </div>
                            <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-caesar-black/40">
                                Years Experience
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-caesar-black">
                                50+
                            </div>
                            <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-caesar-black/40">
                                Projects Delivered
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-caesar-black">
                                ∞
                            </div>
                            <div className="text-[10px] font-medium tracking-[0.15em] uppercase text-caesar-black/40">
                                Lines of Code
                            </div>
                        </div>
                    </div>
                </div>

                {/* Photo */}
                <div className="order-1 lg:order-2">
                    <div className="relative w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52">
                        <Image
                            draggable={false}
                            alt="Thiago Saraiva"
                            src={me}
                            fill
                            className="object-cover grayscale"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Intro text */}
            <div className="py-10 lg:py-12 border-y border-caesar-black/10">
                <p className="text-xl lg:text-2xl text-caesar-black/80 leading-relaxed max-w-3xl">
                    Hi, I am an experienced software engineer with{' '}
                    <strong className="text-caesar-black font-semibold">
                        a decade working with application development
                    </strong>
                    , management, and maintenance, based in Brazil. My passion
                    for creating and developing is intuitive to the teams I work
                    with or companies I develop applications for.{' '}
                    <span className="text-caesar-burgundy">
                        You can be sure that I will put all my knowledge and
                        passion into every project.
                    </span>
                </p>
            </div>

            {/* Chapters */}
            <div className="py-10 lg:py-14 space-y-10 lg:space-y-12">
                {/* Chapter 01 */}
                <div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-caesar-burgundy mb-3 block">
                        01 — Discipline
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-caesar-black mb-4">
                        A Soldier Discipline
                    </h2>
                    <p className="text-base lg:text-lg text-caesar-black/70 leading-relaxed max-w-2xl">
                        Practicing martial arts, especially Krav Maga which was
                        developed and perfected by the Israeli army, offers
                        benefits that align with military principles and are
                        highly applicable in technology. Readiness is similar to
                        a military mentality, which is crucial for risk
                        management and asset protection. Discipline and focus,
                        essential qualities for maintaining productivity and
                        efficiency in projects. Mental resilience, which allows
                        you to overcome obstacles and deal with inherent stress.
                    </p>
                </div>

                {/* Chapter 02 */}
                <div>
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-caesar-burgundy mb-3 block">
                        02 — Adventure
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-caesar-black mb-4">
                        Offroad Enthusiast
                    </h2>
                    <p className="text-base lg:text-lg text-caesar-black/70 leading-relaxed max-w-2xl">
                        Just like in offroad driving, software development
                        demands from the developer a combination of technical
                        preparation, adaptability, and resilience. Each trail
                        brings its own challenges, such as obstacles or steep
                        climbs, requiring an ability to read the environment,
                        plan ahead, and often improvise to keep moving forward.
                        In the same way, a developer faces shifting requirements
                        and unexpected bugs, relying on analysis and
                        adaptability to overcome obstacles and deliver value.
                    </p>
                </div>
            </div>
        </section>
    )
}

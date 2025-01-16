'use client'

import Heading from '@/_components/typography/heading'
import Image from 'next/image'

import { Paragraph } from '@/_components'
import { about } from './mock'
import me from '@/_assets/images/photo-me.webp'
export default function AboutPage() {
    return (
        <section className="about">
            <div className="flex gap-6 items-end mb-6 sm:mb-10">
                <Image
                    draggable={false}
                    alt={'Thiago Saraiva'}
                    src={me}
                    width={150}
                    height={10}
                    className="rounded-full"
                />
                <div className="grid gap-3 lg:gap-4">
                    <Heading type="h2">{about?.title}</Heading>
                    <Paragraph size="xl" className="text-font-medium">
                        {about?.subtitle}
                    </Paragraph>
                </div>
            </div>
            <div className="grid gap-6 lg:gap-10 ">
                <Paragraph size="2xl">
                    Hi, I am a experient software engineer with a decade working
                    with application development, management, and maintenance,
                    based in Brazil. My passion for creating and developing is
                    intuitive to the teams I work with or companies I develop
                    applications for. You can be sure that I will put all my
                    knowledge and passion into every project.
                </Paragraph>
                <div className="grid gap-3 lg:gap-4">
                    <Heading type="h3" size="xl">
                        A Soldier Discipline
                    </Heading>
                    <Paragraph size="lg">
                        Practicing martial arts, especially Krav Maga which was
                        developed and perfected by the Israeli army, offers
                        benefits that align with military principles and are
                        highly applicable in technology. Readiness is similar to
                        a military mentality, which is crucial for risk
                        management and asset protection. discipline and focus,
                        essential qualities for maintaining productivity and
                        efficiency in projects. mental resilience, which allows
                        you to overcome obstacles and deal with inherent stress.
                    </Paragraph>
                </div>
                <div className="grid gap-3 lg:gap-4">
                    <Heading type="h3" size="xl">
                        Offroad Enthusiast
                    </Heading>
                    <Paragraph size="lg">
                        Practicing martial arts, especially Krav Maga which was
                        developed and perfected by the Israeli army, offers
                        benefits that align with military principles and are
                        highly applicable in technology. Readiness is similar to
                        a military mentality, which is crucial for risk
                        management and asset protection. discipline and focus,
                        essential qualities for maintaining productivity and
                        efficiency in projects. mental resilience, which allows
                        you to overcome obstacles and deal with inherent stress.
                    </Paragraph>
                </div>
            </div>
        </section>
    )
}

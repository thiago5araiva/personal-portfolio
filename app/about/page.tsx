"use client";
import Image from "next/image";

import Heading from "@/_components/typography/heading";
import Paragraph from "@/_components/typography/paragraph";
import Subtitle from "@/_components/typography/subtitle";
import { Button } from "@/_components/ui/button";

import photo from "@/_assets/images/me-photo.png";
import mock1 from "@/_assets/images/mock-1.png";
import mock2 from "@/_assets/images/mock-2.png";
import mock3 from "@/_assets/images/mock-3.png";
import { Download } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/_components/ui/carousel";

export default function AboutPage() {
  return (
    <section className="about ">
      <div className="mb-6 sm:mb-10">
        <Heading type="h2" className="text-2xl sm:text-4xl mb-3 sm:mb-4">
          More Story About Me
        </Heading>
        <Subtitle className="text-base sm:text-xl">
          Explore the chapters of my life, both inside and outside the design
          world.
        </Subtitle>
      </div>
      <div className="grid gap-6 sm:gap-10">
        <Paragraph className="text-xl font-semibold leading-normal sm:text-2xl sm:leading-normal">
          Hello, Albert Antonio, a seasoned Director of Design with a decade of
          experience in the dynamic design landscape, based in Indonesia. My
          passion for creating captivating visuals and intuitive user
          experiences has been the driving force behind my journey in the design
          world.
        </Paragraph>
        <Image src={photo} alt={"me"} width={1040} height={480} />
        <Paragraph className="text-base sm:text-xl">
          My 10-year journey in design has been marked by innovation,
          collaboration, and a dedication to delivering design solutions that
          resonate with users. I believe that the fusion of my interests in
          gaming, football, and writing brings a unique perspective to my work,
          enriching my ability to create memorable and engaging design
          experiences.
        </Paragraph>
        <div className="grid gap-3 sm:gap-4">
          <Heading className="text-lg font-semibold sm:text-xl">
            A Gamer at Heart
          </Heading>
          <Paragraph className="text-base">
            Beyond the design board, you'll often find me immersed in the world
            of gaming. As an avid gamer, I appreciate the artistry and
            craftsmanship that goes into creating interactive digital worlds.
            It's a passion that fuels my creativity and keeps me inspired to
            push the boundaries of design.
          </Paragraph>
        </div>
        <div className="grid gap-3 sm:gap-4">
          <Heading className="text-lg font-semibold sm:text-xl">
            Football Enthusiast
          </Heading>
          <Paragraph className="text-base">
            Football is not just a sport; it's a source of endless inspiration.
            I've always been fascinated by the teamwork, strategy, and
            dedication that football embodies. Much like design, football
            requires a blend of creativity and precision to achieve success, and
            I've found valuable lessons in the beautiful game.
          </Paragraph>
        </div>
        <div className="grid gap-3 sm:gap-4">
          <Heading className="text-lg font-semibold sm:text-xl">
            Writing as a Creative Outlet
          </Heading>
          <Paragraph className="text-base">
            When I'm not designing or gaming, I often turn to writing as a
            creative outlet. Whether it's crafting compelling narratives or
            sharing insights on design trends, writing allows me to explore new
            ideas and communicate my passion for design to a wider audience.
          </Paragraph>
        </div>
        <div className="flex justify-center">
          <Button
            className="flex items-center gap-3 rounded-full border border-font-high "
            variant="outline"
          >
            Download CV
            <Download className="w-4 h-4" />
          </Button>
        </div>
        <div className="more my-20 sm:my-[140px]">
          <div className="mb-3 sm:mb-10">
            <Heading type="h6" className="text-xl font-semibold sm:text-2xl">
              Some of my galleries ...
            </Heading>
          </div>
          <Carousel>
            <CarouselContent>
              <CarouselItem className="flex justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <Image src={mock1} alt={"me"} width={320} height={480} />
              </CarouselItem>
              <CarouselItem className="flex justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <Image src={mock2} alt={"me"} width={320} height={480} />
              </CarouselItem>
              <CarouselItem className="flex justify-center sm:basis-1/2 md:basis-1/3 lg:basis-1/3">
                <Image src={mock3} alt={"me"} width={320} height={480} />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

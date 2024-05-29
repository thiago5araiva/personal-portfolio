import Image from "next/image";
import Heading from "@/_components/typography/heading";
import Subtitle from "@/_components/typography/subtitle";
import InfiniteScroll from "@/_components/scroll";
import { Button } from "@/_components/ui/button";

import { MoveUpRight } from "lucide-react";

import evernote from "@/_assets/images/company-logo.svg";
import Paragraph from "@/_components/typography/paragraph";

export default function HomePage() {
  return (
    <section className="my-16 sm:my-[121px]">
      <div className="my-16 sm:my-[121px]">
        <div className="mb-20 sm:mb-[140px]">
          <div className="mb-4 sm:mb-6 ">
            <Heading
              type="h1"
              className="leading-normal sm:text-6xl sm:leading-normal"
            >
              Shaping Imagination into Design Reality Visual Marvels by Albert
              Antonio
            </Heading>
          </div>
          <div className="mb-10 sm:mb-16">
            <Subtitle className="leading-normal sm:text-xl">
              A Director Design based on Indonesia, with 10+ years of
              experience.
            </Subtitle>
          </div>
          <div className="">
            <Button className="rounded-full px-10 bg-primary-default text-background-primary hover:bg-primary-hover">
              Get in touch
              <MoveUpRight className="ml-3" />
            </Button>
          </div>
        </div>
        <div>
          <InfiniteScroll>
            <Image alt="teste" src={evernote} />
            <Image alt="teste" src={evernote} />
            <Image alt="teste" src={evernote} />
            <Image alt="teste" src={evernote} />
            <Image alt="teste" src={evernote} />
            <Image alt="teste" src={evernote} />
          </InfiniteScroll>
        </div>
      </div>
      <section>
        <div className="mb-6 sm:mb-10">
          <Heading type="h2" className="text-2xl font-semibold">
            Works
          </Heading>
        </div>
        <div className="grid gap-10">
          <div className="pb-6 sm:pb-10 border-b border-border-primary">
            <Heading
              type="h2"
              className="text-2xl leading-normal sm:text-4xl sm:leading-normal"
            >
              Increase Conversion Rate for Checkout Process
            </Heading>
          </div>
          <div className="pb-6 sm:pb-10 border-b border-border-primary">
            <Heading
              type="h2"
              className="text-2xl leading-normal sm:text-4xl sm:leading-normal"
            >
              Digital Wallet Revolution: Reimagining Payments with PayZen{" "}
            </Heading>
          </div>
          <div className="pb-6 sm:pb-10 border-b border-border-primary">
            <Heading
              type="h2"
              className="text-2xl leading-normal sm:text-4xl sm:leading-normal"
            >
              Elevating Fitness Journeys: A UX Transformation for FitLife
            </Heading>
          </div>
        </div>
      </section>
      <section className="my-20 sm:my-[140px]">
        <div className="mb-6">
          <Heading type="h6" className="text-xl font-semibold sm:text-2xl">
            I could help you with...
          </Heading>
        </div>
        <div className="mb-6 grid gap-6 sm:gap-10 sm:mb-10 lg:grid-cols-2 lg:gap-[120px]">
          <div>
            <Subtitle className="text-base mb-3 sm:text-lg">
              Digital Product Design
            </Subtitle>
            <Paragraph className="text-base sm:text-lg">
              Digital product design enhances user experience through intuitive,
              visually appealing interfaces, ensuring project success.
            </Paragraph>
          </div>
          <div>
            <Subtitle className="text-base mb-3 sm:text-lg">
              Design System
            </Subtitle>
            <Paragraph className="text-base sm:text-lg">
              Standardized design elements, such as typography, colors, and
              components, that ensure consistency and efficiency in your
              project.
            </Paragraph>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="rounded-full px-10 border border-primary-default text-primary-default hover:bg-primary-hover">
            Hire me
            <MoveUpRight className="ml-3" />
          </Button>
        </div>
      </section>
      <div className="my-20 sm:my-[121px]">
        <InfiniteScroll>
          <Image alt="teste" src={evernote} />
          <Image alt="teste" src={evernote} />
          <Image alt="teste" src={evernote} />
          <Image alt="teste" src={evernote} />
        </InfiniteScroll>
        <InfiniteScroll direction="right">
          <Image alt="teste" src={evernote} />
          <Image alt="teste" src={evernote} />
          <Image alt="teste" src={evernote} />
          <Image alt="teste" src={evernote} />
        </InfiniteScroll>
      </div>
    </section>
  );
}
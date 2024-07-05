"use client"
import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

import InfiniteScroll from "@/_components/scroll"
import Heading from "@/_components/typography/heading"
import Paragraph from "@/_components/typography/paragraph"
import Subtitle from "@/_components/typography/subtitle"
import { Button } from "@/_components/ui/button"

import Loading from "@/_components/laoding"
import { MoveUpRight } from "lucide-react"
import { getPageHomeContent } from "./service"

export default function HomePage() {
  const getHomeContentResponse = useQuery({
    queryKey: ["homeContent"],
    queryFn: getPageHomeContent,
  })

  if (getHomeContentResponse.isLoading) return <Loading />
  const content = getHomeContentResponse.data?.pageHome
  console.log(content)
  return (
    <section className="my-16 sm:my-[121px]">
      <div className="my-16 sm:my-[121px]">
        <div className="mb-20 sm:mb-[140px] max-w-[860px]">
          <div className="mb-4 sm:mb-6 ">
            <Heading
              type="h1"
              className="text-font-low leading-normal sm:text-6xl sm:leading-normal"
            >
              {content?.sectionHero.title}
            </Heading>
          </div>
          <div className="mb-10 sm:mb-16">
            <Subtitle className="text-font-medium leading-normal sm:text-xl">
              {content?.sectionHero.description}
            </Subtitle>
          </div>
          <div className="">
            <Button>
              <span className="mx-2">{content?.sectionHero.cta}</span>
              <MoveUpRight />
            </Button>
          </div>
        </div>
        <div>
          <small className="font-bold">trusted by:</small>
          <InfiniteScroll data={content?.sectionHero.assetsCollection.items} />
        </div>
      </div>
      <section>
        <div className="mb-6 sm:mb-10">
          <Heading
            type="h2"
            className="text-2xl text-font-high font-semibold cursor-pointer"
          >
            {content?.sectionWork.title}
          </Heading>
        </div>
        <div className="grid gap-10">
          {content?.sectionWork.contentCollection.items.map(
            ({ _id, title }, index) => {
              return (
                <Link key={index} href={`/work/${_id}`}>
                  <div className="pb-6 sm:pb-10 border-b border-border-primary">
                    <Heading
                      type="h2"
                      className="text-2xl text-font-high leading-normal sm:text-4xl sm:leading-normal"
                    >
                      {title}
                    </Heading>
                  </div>
                </Link>
              )
            }
          )}
        </div>
      </section>
      <section className="my-20 sm:my-[140px]">
        <div className="mb-6">
          <Heading
            type="h6"
            className="text-xl text-font-medium font-semibold sm:text-2xl"
          >
            {content?.sectionService.title}
          </Heading>
        </div>
        <div className="mb-6 grid gap-6 sm:gap-10 sm:mb-10 lg:grid-cols-2 lg:gap-[120px]">
          {content?.sectionService.contentCollection.items.map(
            (item, index) => (
              <div key={index}>
                <Subtitle className="text-base text-font-high mb-3 sm:text-lg">
                  {item.title}
                </Subtitle>
                <Paragraph className="text-base text-font-medium sm:text-lg">
                  {item.description}
                </Paragraph>
              </div>
            )
          )}
        </div>
        <div className="flex justify-center">
          <Button variant="secondary">
            Hire me
            <MoveUpRight className="ml-3" />
          </Button>
        </div>
      </section>
      <div className="my-20 sm:my-[121px]">
        <InfiniteScroll
          data={content?.sectionService.assetsCollection.items.slice(0, 6)}
        />
        <InfiniteScroll
          direction="right"
          data={content?.sectionService.assetsCollection.items.slice(6, 12)}
        />
      </div>
    </section>
  )
}

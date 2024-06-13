"use client";
import { Suspense, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import InfiniteScroll from "@/_components/scroll";
import Heading from "@/_components/typography/heading";
import Paragraph from "@/_components/typography/paragraph";
import Subtitle from "@/_components/typography/subtitle";
import { Button } from "@/_components/ui/button";

import { getWorkContentCollection } from "@/_services/contentful/workContent";
import useWorkStore from "@/_store/work";

import evernote from "@/_assets/images/company-logo.svg";
import { MoveUpRight } from "lucide-react";

export default function HomePage() {
  const { workCollection, setWorkCollectionState } = useWorkStore();

  const workCollectionParams = { limit: 3, order: "createdAt_DESC" };
  const { data: workCollectionData } = useQuery({
    queryKey: ["workCollection", workCollectionParams],
    queryFn: () => getWorkContentCollection({ ...workCollectionParams }),
  });

  useEffect(() => {
    if (workCollection) return;
    setWorkCollectionState(workCollectionData?.workContentCollection.items);
  }, [workCollectionData]);

  return (
    <section className="my-16 sm:my-[121px]">
      <div className="my-16 sm:my-[121px]">
        <div className="mb-20 sm:mb-[140px]">
          <div className="mb-4 sm:mb-6 ">
            <Heading
              type="h1"
              className="text-font-low leading-normal sm:text-6xl sm:leading-normal"
            >
              Shaping Imagination into Design Reality Visual Marvels by Albert
              Antonio
            </Heading>
          </div>
          <div className="mb-10 sm:mb-16">
            <Subtitle className="text-font-medium leading-normal sm:text-xl">
              A Director Design based on Indonesia, with 10+ years of
              experience.
            </Subtitle>
          </div>
          <div className="">
            <Button>
              <span className="mx-2">Get in touch</span>
              <MoveUpRight />
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
          <Heading type="h2" className="text-2xl text-font-high font-semibold">
            Works
          </Heading>
        </div>
        <div className="grid gap-10">
          {workCollection?.map(({ sys, title }) => {
            return (
              <Link key={sys.id} href={`/work/${sys.id}`}>
                <div
                  className="pb-6 sm:pb-10 border-b border-border-primary"
                  key={sys.id}
                >
                  <Heading
                    type="h2"
                    className="text-2xl text-font-high leading-normal sm:text-4xl sm:leading-normal"
                  >
                    {title}
                  </Heading>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="my-20 sm:my-[140px]">
        <div className="mb-6">
          <Heading
            type="h6"
            className="text-xl text-font-medium font-semibold sm:text-2xl"
          >
            I could help you with...
          </Heading>
        </div>
        <div className="mb-6 grid gap-6 sm:gap-10 sm:mb-10 lg:grid-cols-2 lg:gap-[120px]">
          <div>
            <Subtitle className="text-base text-font-high mb-3 sm:text-lg">
              Digital Product Design
            </Subtitle>
            <Paragraph className="text-base text-font-medium sm:text-lg">
              Digital product design enhances user experience through intuitive,
              visually appealing interfaces, ensuring project success.
            </Paragraph>
          </div>
          <div>
            <Subtitle className="text-base text-font-high mb-3 sm:text-lg">
              Design System
            </Subtitle>
            <Paragraph className="text-base text-font-medium sm:text-lg">
              Standardized design elements, such as typography, colors, and
              components, that ensure consistency and efficiency in your
              project.
            </Paragraph>
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="secondary">
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

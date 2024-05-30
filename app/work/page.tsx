"use client";
import Heading from "@/_components/typography/heading";
import { getWorkContentCollection } from "./queries";
import { WorkContentCollectionItem } from "./types";
import { useEffect, useState } from "react";
import Link from "next/link";
import Subtitle from "@/_components/typography/subtitle";

export default function WorkPage() {
  const [works, setWorks] = useState<WorkContentCollectionItem[]>([]);

  useEffect(() => {
    getWorkContentCollection().then((data) => {
      const { items } = data.workContentCollection;
      setWorks(items);
    });
  }, []);

  return (
    <section className="work">
      <div className="mb-12 sm:mb-20">
        <Heading type="h2" className="text-2xl mb-3">
          My Works
        </Heading>
        <Subtitle className="text-base">
          Get Inspired by My Portfolio of Fresh and Innovative Design Projects
        </Subtitle>
      </div>
      <div className="mt-12 mb-20 sm:mt-20 sm:mb-[140px] grid gap-10">
        {works.map(({ title, sys }) => (
          <Link key={sys.id} href={`/work/${sys.id}`}>
            <div className="pb-6 sm:pb-10 border-b border-border-primary">
              <Heading
                type="h2"
                className="text-2xl leading-normal sm:text-4xl sm:leading-normal"
              >
                {title}
              </Heading>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

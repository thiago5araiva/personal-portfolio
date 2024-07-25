"use client";

import { Heading } from "@/_components";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useLayoutEffect } from "react";
import { getPageWorkContent } from "./actions";
import Header from "./header";
import useStore from "./store";

export default function Content() {
  const getWorkContentResponse = useQuery({
    queryKey: ["pageWork"],
    queryFn: getPageWorkContent,
  });

  const content = getWorkContentResponse?.data?.pageWork;

  return (
    <section className="work">
      <Header
        title="Work"
        subtitle="Here are some of my projects and case studies, part of my job is to keep the projects of the companies
      I've worked for secret. I hope these examples give you a flavour of my work. "
      />
      <div className="grid gap-6">
        {content?.contentCollection?.items.map(({ sys, slug, title }) => (
          <Link href={`/work/${sys.id}`} key={sys.id}>
            <div className="pb-6 sm:pb-10 border-b border-border-primary">
              <Heading
                type="h2"
                className="text-2xl text-font-medium leading-normal sm:text-4xl sm:leading-normal"
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

"use client";
import Link from "next/link";
import Header from "./header";
import { Heading } from "@/_components";
import { useQuery } from "@tanstack/react-query";
import { getPageWorkContent } from "./actions";
import Loading from "@/_components/loading";
import { useEffect } from "react";
import useStore from "./store";

export default function Content() {
  const { pageWork, setPageWork } = useStore();
  const { data: getWorkContentResponse, isLoading } = useQuery({
    queryKey: ["pageWork"],
    queryFn: getPageWorkContent,
  });

  useEffect(() => {
    if (pageWork) return;
    setPageWork(getWorkContentResponse);
  }, [getWorkContentResponse]);

  if (isLoading) <Loading />;

  return (
    <section className="work">
      <Header
        title="Work"
        subtitle="Here are some of my projects and case studies, part of my job is to keep the projects of the companies
      I've worked for secret. I hope these examples give you a flavour of my work. "
      />
      <div className="grid gap-6">
        {pageWork?.contentCollection?.items.map(({ sys, slug, title }) => (
          <Link href={`/work/${slug}`} key={sys.id}>
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

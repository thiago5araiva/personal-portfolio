"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import Heading from "@/_components/typography/heading";
import Subtitle from "@/_components/typography/subtitle";

import { getWorkContent } from "../queries";
import { WorkContentItem } from "../types";

import Paragraph from "@/_components/typography/paragraph";
import { MoveLeft } from "lucide-react";

type BuildComponentsType = {
  type: string;
  value: string;
};

export function BuildComponents({ type, value }: BuildComponentsType) {
  const components: { [type: string]: ReactNode } = {
    "heading-3": <h3 className="text-lg mb-3 sm:text-xl sm:mb-4">{value}</h3>,
    paragraph: <p className="text-base mb-6 sm:text-lg sm:mb-10">{value}</p>,
  };
  return components[type];
}

export default function Page({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubTitle] = useState<string>();
  const [content, setContent] = useState<WorkContentItem[]>();

  const router = useRouter();

  useEffect(() => {
    getWorkContent(params.id).then((data) => {
      const { title, createdAt, content } = data;
      setTitle(title);
      setSubTitle(createdAt);
      setContent(content);
    });
  }, [params.id]);

  return (
    <section className="mb-20 sm:mb-[140px]">
      <div
        onClick={() => router.back()}
        className="flex gap-6 mb-6 sm:mb-10 cursor-pointer"
      >
        <MoveLeft />
        <span>All works</span>
      </div>
      <div className="mb-6 sm:mb-10">
        <Heading type="h2" className="text-xl mb-3 sm:text-4xl sm:mb-4">
          {title}
        </Heading>
        <Subtitle className="text-base sm:text-lg">{subtitle}</Subtitle>
      </div>
      <div className="">
        {content?.map(({ nodeType, content }, index) => {
          return (
            <div key={index}>
              <BuildComponents type={nodeType} value={content[0]?.value} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

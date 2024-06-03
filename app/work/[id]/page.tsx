"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

import Heading from "@/_components/typography/heading";
import Subtitle from "@/_components/typography/subtitle";

import { getWorkContent } from "../queries";

import { MoveLeft } from "lucide-react";
import {
  ContentfulWorkContentData,
  ContentfulWorkContentDataImages,
} from "../../_store/work/types";
import Image from "next/image";

type RenderCustomComponents = {
  type: string;
  data: any;
};

export function RenderContentfulData({ type, data }: RenderCustomComponents) {
  const { value, url, title, width, height } = data;
  const components: { [type: string]: ReactNode } = {
    "heading-3": (
      <h3 className="text-lg text-font-mediumfont-semibold mb-3 sm:text-xl sm:mb-4">
        {value}
      </h3>
    ),
    paragraph: (
      <p className="text-base text-font-medium mb-6 sm:text-lg sm:mb-10">
        {value}
      </p>
    ),
    "embedded-asset-block": (
      <Image
        src={url}
        alt={title}
        width={width}
        height={height}
        className="mb-6 sm:mb-10"
      />
    ),
  };
  return components[type];
}

export default function Page({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState<string>();
  const [subtitle, setSubtitle] = useState<string>();
  const [content, setContent] = useState<ContentfulWorkContentData[]>([]);
  const [images, setImages] = useState<ContentfulWorkContentDataImages[]>([]);
  const router = useRouter();

  const groupContent = () => {
    return content.map((item) => {
      const { nodeType, data } = item;
      if (nodeType === "embedded-asset-block") {
        const img = images.find((i) => i.sys.id === data.target.sys.id);
        return { ...item, content: [img] };
      }
      return item;
    });
  };

  useEffect(() => {
    const content = async () => {
      const { workContent } = await getWorkContent(params.id);
      setTitle(workContent.title);
      setSubtitle(workContent.createdAt);
      setContent(workContent.content.json.content);
      setImages(workContent.content.links.assets.block);
    };
    content();
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
        {groupContent().map((item, index) => {
          return (
            <RenderContentfulData
              key={index}
              type={item.nodeType}
              data={item.content[0]}
            />
          );
        })}
      </div>
    </section>
  );
}

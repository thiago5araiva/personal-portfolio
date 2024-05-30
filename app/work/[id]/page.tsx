"use client";
import { useRouter } from "next/navigation";

import { MoveLeft } from "lucide-react";
import Heading from "@/_components/typography/heading";
import Subtitle from "@/_components/typography/subtitle";
import { useEffect, useState } from "react";
import { getWorkContent } from "../queries";
import { WorkContent } from "../types";
import cleanContent from "../utils/filterContent";

export default function Page({ params }: { params: { id: string } }) {
  const [content, setContent] = useState<WorkContent>();

  const router = useRouter();

  useEffect(() => {
    getWorkContent(params.id).then((data) => {
      const { content } = data.workContent;
      const { json } = content;
      setContent({
        workContent: {
          ...data.workContent,
          content: {
            ...data.workContent.content,
            json: {
              ...data.workContent.content.json,
              content: cleanContent(json.content),
            },
          },
        },
      });
    });
  }, [params.id]);

  console.clear();
  console.log(content);

  return (
    <section>
      <div
        onClick={() => router.back()}
        className="flex gap-6 mb-6 sm:mb-10 cursor-pointer"
      >
        <MoveLeft />
        <span>All works</span>
      </div>
      <div className="mb-6 sm:mb-10">
        <Heading type="h2" className="text-2xl mb-3">
          {content?.workContent.title}
        </Heading>
        <Subtitle className="text-base">
          {content?.workContent.createdAt}
        </Subtitle>
      </div>
      <div className="grid gap-6 sm:gap-10"></div>
    </section>
  );
}

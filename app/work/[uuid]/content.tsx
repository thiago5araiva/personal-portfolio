"use client";
import { Heading, Paragraph } from "@/_components";
import { useParams } from "next/navigation";
import useStore from "../store";
import { formatDate } from "@/_utils/date";
import { Badge } from "@/_components/ui/badge";

export default function WorkContent() {
  const params = useParams();
  const { pageWork } = useStore();

  const collection = pageWork?.contentCollection?.items;
  const content = collection?.find((item) => item.slug === params.uuid);

  return (
    <div>
      <Heading type="h3" className="mb-4 sm:mb-3">
        {content?.title}
      </Heading>
      <div className="flex justify-between">
        <Paragraph>{`${formatDate(content?.createdAt)} • ${content?.type}`}</Paragraph>
        <div className="flex gap-3 ml-6">
          {content?.stack.map((item, index) => (
            <Badge
              key={index}
              className="bg-background-secondary texst-font-low cursor-pointer"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";
import { Heading, Paragraph } from "@/_components";
import { Badge } from "@/_components/ui/badge";
import { formatDate } from "@/_utils/date";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import useStore from "../store";

const renderContent = ({ index, type, value }: { [key: string]: string }) => {
  const props = { key: index, className: "mb-8 sm:mb-10" };

  const components: { [key: string]: ReactNode } = {
    heading1: <Heading {...props}>{value}</Heading>,
    paragraph: <Paragraph {...props}>{value}</Paragraph>,
  };
  return components[type];
};

export default function WorkContent() {
  const params = useParams();
  const { pageWork } = useStore();

  const collection = pageWork?.contentCollection?.items;
  const data = collection?.find((item) => item.slug === params.uuid);
  const content = data?.content.json.content.map((item) => {
    return {
      type: item?.nodeType,
      value: item?.content[0]?.value,
    };
  });

  return (
    <div>
      <Heading type="h3" className="mb-4 sm:mb-3">
        {data?.title}
      </Heading>
      <div className="flex justify-between mb-8 sm:mb-10">
        <Paragraph>{`${formatDate(data?.createdAt)} • ${data?.type}`}</Paragraph>
        <div className="flex gap-3 ml-6">
          {data?.stack.map((item, index) => (
            <Badge
              key={index}
              className="bg-background-secondary texst-font-low cursor-pointer"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        {content?.map(({ type, value }, index) =>
          renderContent({ index: `${index}`, type, value }),
        )}
      </div>
    </div>
  );
}

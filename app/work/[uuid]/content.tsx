"use client";
import { Heading, Loading, Paragraph } from "@/_components";
import { Badge } from "@/_components/ui/badge";
import { formatDate } from "@/_utils/date";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import useStore from "../store";
import { useQuery } from "@tanstack/react-query";
import { getWorkContentById } from "../actions";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

const renderContent = ({ type, value }: { [key: string]: string }) => {
  const props = { className: "mb-8 sm:mb-10" };

  const components: { [key: string]: ReactNode } = {
    heading1: <Heading {...props}>{value}</Heading>,
    text: <Paragraph {...props}>{value}</Paragraph>,
  };
  return components[type];
};

export default function WorkContent() {
  const params = useParams();
  const uuid = params.uuid as string;
  const getWorkContentByIdResponse = useQuery({
    queryKey: ["pageWorkById", uuid],
    queryFn: () => getWorkContentById(uuid),
    enabled: !!params.uuid,
  });
  const data = getWorkContentByIdResponse?.data?.workContent;
  if (getWorkContentByIdResponse.isLoading) return <Loading />;
  const richContent = documentToReactComponents(data?.content.json as Document);

  return (
    <div className="bg-green w-full">
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
      <div className="w-full grid gap-6 text-base text-font-medium sm:text-lg leading-normal">
        {documentToReactComponents(data?.content.json as Document)}
        <embed
          src={data?.embed}
          className="border-2 rounded border-font-low"
          style={{ width: "100%", height: 300 }}
        />
      </div>
    </div>
  );
}

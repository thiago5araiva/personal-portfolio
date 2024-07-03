import Heading from "@/_components/typography/heading";
import Paragraph from "@/_components/typography/paragraph";
import contentful from "@/_services/contentful";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect, useState } from "react";

const { client, gql } = contentful();

const query = gql`
  query ComponentFooter($componentFooterId: String!) {
    componentFooter(id: $componentFooterId) {
      _id
      text
      email
      linkCollection {
        items {
          _id
          label
          url
        }
      }
      copyright
    }
  }
`;

export type FooterType = {
  componentFooter: {
    _id: string;
    text: string;
    email: string;
    linkCollection: {
      items: Array<{
        label: string;
        url: string;
        _id: string;
      }>;
    };
    copyright: string;
  };
};

export default function Footer() {
  const asyncGetGlobalFooter = async (): Promise<FooterType> =>
    await client.request(query, {
      componentFooterId: "2VD03T7wdQAj9he83Dufkd",
    });

  const { data: getGlobalFooterResponse } = useQuery({
    queryKey: ["globalFooter"],
    queryFn: asyncGetGlobalFooter,
  });

  const content = getGlobalFooterResponse?.componentFooter;
  const year = `${new Date().getFullYear()}`;
  return (
    <footer className="border-t-2 py-10">
      <div className="grid gap-10">
        <div className="lg:flex justify-between">
          <div className="mb-10 lg:mb-0">
            <Heading
              type="h5"
              className="text-2xl text-center text-font-high lg:text-2xl lg:text-left font-bold mb-4"
            >
              {content?.text}
            </Heading>
            <Heading
              type="h5"
              className="text-xl text-center text-font-low lg:text-2xl lg:text-left font-bold"
            >
              {content?.email}
            </Heading>
          </div>
          <div className="flex flex-col gap-4 text-center cursor-pointer">
            {content?.linkCollection.items.map((link, index) => (
              <Link
                href={link.url}
                className="text-base text-font-low"
                key={index}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <span>
            © Copyright {year} {content?.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}

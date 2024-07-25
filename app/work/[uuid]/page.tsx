import { Heading, Paragraph } from "@/_components";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Content from "./content";
import getQueryClient from "@/_providers/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getWorkContentById } from "../actions";

export default async function WorkPage({ uuid }: { uuid: string }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["pageWork"],
    queryFn: () => getWorkContentById(uuid),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="work-${id}">
        <Link
          href={"/work"}
          className="flex items-center gap-3 text-font-medium mb-6 sm:mb-10"
        >
          <MoveLeft className="w-6 h-5" />
          <span>Latest Works</span>
        </Link>
        <Content />
      </section>
    </HydrationBoundary>
  );
}

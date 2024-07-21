import getQueryClient from "@/_providers/getQueryClient";
import Content from "./content";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { getPageWorkContent } from "./actions";

export default async function WorkPage() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["pageWork"],
    queryFn: getPageWorkContent,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Content />
    </HydrationBoundary>
  );
}

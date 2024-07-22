"use client";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("./hero"));
const Services = dynamic(() => import("./services"));
const Work = dynamic(() => import("./work"));

import { useLayoutEffect } from "react";
import { getPageHomeContent } from "./actions";
import useStore from "./store";

export default function HomePage() {
  const { pageHome, setPageHome } = useStore();
  const getHomeContentResponse = useQuery({
    queryKey: ["pageHome"],
    queryFn: getPageHomeContent,
  });

  useLayoutEffect(() => {
    if (pageHome) return;
    setPageHome(getHomeContentResponse?.data);
  }, [getHomeContentResponse?.data]);

  return (
    <section>
      <Hero
        title={pageHome?.sectionHero.title}
        description={pageHome?.sectionHero.description}
        cta={pageHome?.sectionHero.cta}
        images={pageHome?.sectionHero.assetsCollection.items}
      />
      <Work
        title={pageHome?.sectionWork.title}
        content={pageHome?.sectionWork.contentCollection}
      />
      <Services
        title={pageHome?.sectionService?.title}
        content={pageHome?.sectionService.contentCollection}
        images={{
          backend: pageHome?.sectionService.backendStackCollection,
          frontend: pageHome?.sectionService.frontStackCollection,
        }}
      />
    </section>
  );
}

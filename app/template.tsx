import { ReactNode } from "react";
import { Footer, Navigation } from "@/_components/";

import QueryProvider from "@/_providers/queryProvider";
import { PHProvider } from "@/_providers/posthogProvider";
import dynamic from "next/dynamic";

const PostHogPageView = dynamic(() => import("@/_providers/queryProvider"), {
  ssr: false,
});

type Props = {
  children: ReactNode;
};

export default async function RootTemplate({ children }: Props) {
  return (
    <PHProvider>
      <QueryProvider>
        <main className="container mx-auto px-6 max-w-screen-lg">
          <Navigation />
          {children}
          <Footer />
        </main>
      </QueryProvider>
    </PHProvider>
  );
}

import { ReactNode } from "react";
import { Footer, Navigation } from "@/_components/";

import Providers from "@/_services/providers";

type Props = {
  children: ReactNode;
};

export default async function RootTemplate({ children }: Props) {
  return (
    <Providers>
      <main className="container mx-auto px-6 max-w-screen-lg">
        <Navigation />
        {children}
        <Footer />
      </main>
    </Providers>
  );
}

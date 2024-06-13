import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/_components/ui/drawer";
import Paragraph from "@/_components/typography/paragraph";
import Heading from "@/_components/typography/heading";
import { Button } from "@/_components/ui/button";

import { AlignJustify } from "lucide-react";

import { TRoutes } from "./types";

type Props = {
  routes: TRoutes;
};

const styles = {
  base: "text-xl font-bold hover:text-primary-hover",
  inactive: "text-low font-light ",
};

export default function DrawerComponent({ routes }: Props) {
  const pathname = usePathname();
  return (
    <Drawer direction="top">
      <DrawerTrigger asChild>
        <AlignJustify />
      </DrawerTrigger>
      <DrawerContent className="h-full bg-background-primary rounded-none">
        <div className="mx-auto h-full w-full max-w-sm grid">
          <DrawerHeader>
            <div>
              <DrawerTitle className="text-center text-4xl">
                Thiago Saraiva
              </DrawerTitle>
              <DrawerDescription className="text-center text-md">
                Set your daily activity goal.
              </DrawerDescription>
            </div>
          </DrawerHeader>
          <div className="grid justify-center">
            <div className="flex flex-col gap-3">
              {routes?.map((route, index) => (
                <Link
                  key={index}
                  href={route.value}
                  className={twMerge(
                    `${styles.base} ${pathname !== route.value && styles.inactive}`,
                  )}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="ghost">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

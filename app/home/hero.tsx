import Link from "next/link";
import { Heading, Carousel } from "@/_components/";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/_components/ui/dialog";
import { Button } from "@/_components/ui/button";
import { Mail, MoveUpRight, Smartphone } from "lucide-react";
import { AssetsCollection } from "./types";

type Props = {
  title?: string;
  description?: string;
  cta?: string;
  images?: AssetsCollection[];
};

export default function HomeHero({ title, description, cta, images }: Props) {
  return (
    <div className="my-16 sm:my-[121px]">
      <div className="mb-20 sm:mb-[140px] max-w-[860px]">
        <div className="mb-4 sm:mb-6 ">
          <Heading
            type="h1"
            className="text-font-low text-5xl leading-normal sm:text-6xl sm:leading-normal "
          >
            {title}
          </Heading>
        </div>
        <div className="mb-10 sm:mb-16">
          <Heading
            type="h2"
            className="text-font-medium text-lg font-normal leading-loose sm:text-xl sm:leading-normal"
          >
            {description}
          </Heading>
        </div>
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <span className="mx-2">{cta}</span>
                <MoveUpRight />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-white">
              <DialogHeader>
                <DialogTitle>
                  Let’s connect and make something great
                </DialogTitle>
                <DialogDescription>
                  Send me an email or message on whatsapp to talk and let me
                  know about your ideas.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3">
                <Link
                  href={"https://wa.me/5562993248451"}
                  target="blank"
                  className="flex items-center gap-3 hover:underline"
                >
                  <Smartphone className=" w-4" />
                  <span>+55 62 993248451</span>
                </Link>
                <div className="flex gap-3">
                  <Mail className=" w-4" />
                  <span>thiagosaraivacsouza@gmail.com</span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div>
        <small className="font-bold ">work with:</small>
        <Carousel data={images} />
      </div>
    </div>
  );
}

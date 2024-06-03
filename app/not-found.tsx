import Heading from "@/_components/typography/heading";
import Paragraph from "@/_components/typography/paragraph";
import { Button } from "./_components/ui/button";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="flex flex-col items-center my-36">
        <div className="max-w-[480px]	 mb-10">
          <Heading className="text-3xl text-font-high font-semibold text-center mb-6 sm:text-6xl">
            Oops ~ Contents Ran Away
          </Heading>
          <Paragraph className="text-lg text-font-high text-center sm:text-xl">
            Don’t panic! I can help you to ...
          </Paragraph>
        </div>
        <div className="grid gap-4">
          <div>
            <Link href={"/"}>
              <Button className="w-[260px] bg-primary-default text-base-white rounded-full">
                <MoveLeft className="mr-3" />
                Find Your Way Home
              </Button>
            </Link>
          </div>
          <div>
            <Button className="w-[260px]  border border-primary-default black rounded-full">
              Contact Me
              <MoveRight className="ml-3" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

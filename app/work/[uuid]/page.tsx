import { Heading, Paragraph } from "@/_components";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import Content from "./content";

export default function WorkPage() {
  return (
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
  );
}

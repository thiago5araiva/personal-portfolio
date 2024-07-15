import Heading from "@/_components/typography/heading";
import Link from "next/link";
import { SectionWorkType } from "./types";

type Props = {
  title?: string;
  content?: SectionWorkType["contentCollection"];
};
export default function HomeWork({ title, content = { items: [] } }: Props) {
  return (
    <section>
      <div className="mb-6 sm:mb-10">
        <Heading
          type="h3"
          className="text-2xl text-font-high font-semibold cursor-pointer"
        >
          {title}
        </Heading>
      </div>
      <div className="grid gap-10">
        {content?.items.map(({ _id, title }, index) => {
          return (
            <Link key={index} href={`/works/${_id}`}>
              <div className="pb-6 sm:pb-10 border-b border-border-primary">
                <Heading
                  type="h3"
                  className="text-2xl text-font-high leading-normal sm:text-4xl sm:leading-normal"
                >
                  {title}
                </Heading>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

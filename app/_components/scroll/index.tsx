import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import "./styles.css";
import { AssetsCollection } from "@/home/types";

type Props = {
  content?: AssetsCollection[];
  direction?: "left" | "right";
  width: number;
  height: number;
};
export default function InfiniteScrollComponent({
  content = [],
  direction = "left",
  width = 90,
  height = 90,
}: Props) {
  const length = content.length;
  return (
    <div className="wrapper">
      {content.map((item, index) => {
        const count = index + 1;
        const animation = `calc(30s / ${length} * (${length} - ${count}) * -1)`;
        return (
          <div
            className={twMerge(`item`, direction)}
            style={{ animationDelay: animation }}
            key={index}
          >
            <Image
              draggable={false}
              alt={item.title}
              src={item.url}
              width={width}
              height={height}
            />
          </div>
        );
      })}
    </div>
  );
}

import { ReactElement } from "react";
import "./styles.css";
import { twMerge } from "tailwind-merge";
type Props = {
  children: ReactElement[];
  direction?: "left" | "right";
};
export default function InfiniteScrollComponent({
  children,
  direction = "left",
}: Props) {
  const length = children.length;
  return (
    <div className="wrapper">
      {children.map((item, index) => {
        const count = index + 1;
        const animation = `calc(30s / ${length} * (${length} - ${count}) * -1)`;
        return (
          <div
            className={twMerge(`item`, direction)}
            style={{ animationDelay: animation }}
            key={index}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

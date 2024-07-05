import { AssetsCollection } from "@/home/types"
import Image from "next/image"
import { twMerge } from "tailwind-merge"

import "./styles.css"

type Props = {
  data?: AssetsCollection[]
  direction?: "left" | "right"
}
export default function InfiniteScrollComponent({ data, direction }: Props) {
  const content = data || []
  const length = data?.length
  return (
    <div className="wrapper">
      {content?.map((item, index) => {
        const count = index + 1
        const animation = `calc(30s / ${length} * (${length} - ${count}) * -1)`
        return (
          <div
            className={twMerge(`item`, direction || "left")}
            style={{ animationDelay: animation }}
            key={index}
          >
            <Image
              draggable={false}
              alt={item.title}
              src={item.url}
              width={210}
              height={90}
            />
          </div>
        )
      })}
    </div>
  )
}

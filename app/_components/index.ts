import dynamic from "next/dynamic";

export const Footer = dynamic(() => import("./footer"));
export const Heading = dynamic(() => import("./typography/heading"));
export const Subtitle = dynamic(() => import("./typography/subtitle"));
export const Paragraph = dynamic(() => import("./typography/paragraph"));
export const Carousel = dynamic(() => import("@/_components/infinite-scroll"));
export const Navigation = dynamic(() => import("@/_components/navigation"));
export const Loading = dynamic(() => import("@/_components/loading"));

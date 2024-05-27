import Image from "next/image";
import evernote from "@/assets/images/company-logo.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const stack = [
  "ReactJS",
  "React Native",
  "AngularJS",
  "VueJS",
  "NextJS",
  "JavaScript",
  "TypeScript",
  "Node",
  "Nest",
  "Python",
  "Django",
  "Flask",
  "FastAPI",
  "MongoDB",
];

export default function SectionStack() {
  return (
    <div>
      <Carousel
        className="w-full max-w-screen-lg"
        opts={{
          loop: true,
          skipSnaps: true,
        }}
        plugins={[Autoplay({ delay: 1800 })]}
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 6 }).map((item, index) => (
            <CarouselItem
              key={index}
              className=" sm:basis-1/2 md:basis-1/2 lg:basis-1/3"
            >
              <div className="flex justify-center lg:block">
                <div className="flex items-center justify-around gap-3">
                  <Image alt="teste" src={evernote} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

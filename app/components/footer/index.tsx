import Heading from "@/components/typography/heading";
import Paragraph from "@/components/typography/paragraph";

export default function SectionFooter() {
  return (
    <footer className="border-t-2 py-10">
      <div className="grid gap-10">
        <div className="lg:flex justify-between">
          <div className="mb-10 lg:mb-0">
            <Heading
              type="h5"
              className="text-2xl text-center lg:text-2xl lg:text-left font-bold mb-4"
            >
              Let’s connect and make something great
            </Heading>
            <Heading
              type="h5"
              className="text-xl text-center lg:text-2xl lg:text-left font-bold text-font-low"
            >
              albert.antonio@gmail.com
            </Heading>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <Paragraph variant="p2">teste</Paragraph>
            <Paragraph variant="p2">teste</Paragraph>
            <Paragraph variant="p2">teste</Paragraph>
            <Paragraph variant="p2">teste</Paragraph>
            <Paragraph variant="p2">teste</Paragraph>
            <Paragraph variant="p2">teste</Paragraph>
          </div>
        </div>
        <div className="flex justify-center">
          <span>© Copyright 2023 Albert Antonio</span>
        </div>
      </div>
    </footer>
  );
}

import Heading from "@/_components/typography/heading";
import Subtitle from "@/_components/typography/subtitle";

type Props = {
  title: string;
  subtitle: string;
  className?: string;
};

export default function WorkHeader({ title, subtitle, className }: Props) {
  return (
    <div className={className}>
      <Heading type="h2" className="text-2xl mb-3">
        {title}
      </Heading>
      <Subtitle className="text-base">{subtitle}</Subtitle>
    </div>
  );
}

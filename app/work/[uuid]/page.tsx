import { Heading, Paragraph } from "@/_components";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function WorkContent() {
  return (
    <section className="work-${id}">
      <Link
        href={"/work"}
        className="flex items-center gap-3 text-font-medium mb-6 sm:mb-10"
      >
        <MoveLeft className="w-6 h-5" />
        <span>Latest Works</span>
      </Link>
      <div>
        <Heading type="h3" className="mb-4 sm:mb-3">
          Digital Wallet Revolution: Reimagining Payments with PayZen
        </Heading>
        <Paragraph>
          23 September 2023 • Product Designer • Associated with PayZen
        </Paragraph>
      </div>
    </section>
  );
}

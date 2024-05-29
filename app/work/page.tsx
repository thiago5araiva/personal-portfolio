import Heading from "@/_components/typography/heading";
import Header from "./components/Header";

export default function WorkPage() {
  return (
    <section>
      <Header
        className="mb-12 sm:mb-20"
        title="My Works"
        subtitle="Get Inspired by My Portfolio of Fresh and Innovative Design Projects"
      />
      <div className="mt-12 mb-20 sm:mt-20 sm:mb-[140px] grid gap-10">
        <div className="pb-6 sm:pb-10 border-b border-border-primary">
          <Heading
            type="h2"
            className="text-2xl leading-normal sm:text-4xl sm:leading-normal"
          >
            Increase Conversion Rate for Checkout Process
          </Heading>
        </div>
        <div className="pb-6 sm:pb-10 border-b border-border-primary">
          <Heading
            type="h2"
            className="text-2xl leading-normal sm:text-4xl sm:leading-normal"
          >
            Digital Wallet Revolution: Reimagining Payments with PayZen{" "}
          </Heading>
        </div>
        <div className="pb-6 sm:pb-10 border-b border-border-primary">
          <Heading
            type="h2"
            className="text-2xl leading-normal sm:text-4xl sm:leading-normal"
          >
            Elevating Fitness Journeys: A UX Transformation for FitLife
          </Heading>
        </div>
      </div>
    </section>
  );
}

import Navigation from "@/_components/navigation";
import Footer from "@/_components/footer";

type Props = {
  children: React.ReactNode;
};
export default function RootTemplate({ children }: Props) {
  return (
    <main className="container mx-auto px-6 max-w-screen-lg">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}

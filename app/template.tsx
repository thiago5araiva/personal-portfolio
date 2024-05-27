import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <main className="container mx-auto px-6 max-w-screen-lg">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}

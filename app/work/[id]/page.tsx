"use client";
import { useRouter } from "next/navigation";

import { MoveLeft } from "lucide-react";
import Header from "../components/Header";
import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const goback = () => router.back();
  return (
    <section>
      <div onClick={goback} className="flex gap-6 mb-6 sm:mb-10 cursor-pointer">
        <MoveLeft />
        <span>All works</span>
      </div>
      <Header
        className="mb-6 sm:mb-10"
        title="More Story About Me"
        subtitle="Get Inspired by My Portfolio of Fresh and Innovative Design Projects"
      />
    </section>
  );
}

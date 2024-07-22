"use client";
import { use, useEffect, useState } from "react";

export default function Loading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-white">
      <div
        className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-border-secondary rounded-full dark:text-blue-500"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

"use client";

import { useRef, type ReactNode } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { StickyProfileImage } from "@/components/sticky-profile-image";

export function HeroAbout({ children }: { children?: ReactNode }) {
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Hero startRef={startRef} />
      <main className="px-6 md:px-12 lg:px-24 mx-auto max-w-7xl">
        <About endRef={endRef} />
        {children}
      </main>
      <StickyProfileImage startRef={startRef} endRef={endRef} />
    </>
  );
}

"use client";
import { signatureFont } from "@/app/layout";

export function VideoHero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">

      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-6xl px-6">

          <p className="mb-4 text-sm tracking-widest text-white/80">
            FILMMAKING • TECH • CREATOR TOOLS
          </p>

          <h1 className="text-5xl font-semibold text-white md:text-7xl">
            Create <span className="text-[#F7C948]">BETTER</span> videos.
          </h1>

          <div className="mt-8 flex gap-4">
            <button className="rounded-lg bg-white px-6 py-3 text-black">
              Watch My Work
            </button>

            <button className="rounded-lg border border-white px-6 py-3 text-white">
              Free Resources
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
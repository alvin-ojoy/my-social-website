import Link from "next/link";
import { signatureFont } from "@/app/layout";

export function VideoHero() {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <p className="mb-4 text-sm tracking-[0.3em] text-white/80">
            CONTENT CREATION • TECH REVIEWS • FILMMAKING
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
            Create{" "}
            <span
              className={`${signatureFont.className} inline-block -rotate-2 text-7xl text-[#F7C948] md:text-8xl`}
            >
              BETTER
            </span>{" "}
            content.
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="https://www.youtube.com/@alvinojoy"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-white px-6 py-3 text-black transition hover:opacity-90"
            >
              Watch My Work
            </Link>

            <Link
              href="/resources"
              className="rounded-lg border border-white px-6 py-3 text-white transition hover:bg-white hover:text-black"
            >
              Free Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
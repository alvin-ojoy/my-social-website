import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { Container } from '@/components/ui/container';
import { signatureFont } from "@/app/layout";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className={`${signatureFont.className} uppercase text-4xl text-neutral-900`}>
            Alvin Ojoy
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="uppercase text-xs text-neutral-900 tracking-[0.1em] transition hover:text-neutral-900 hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
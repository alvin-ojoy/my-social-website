import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { Container } from '@/components/ui/container';
import { signatureFont } from "@/app/layout";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className={`${signatureFont.className} text-4xl text-[#F7C948] drop-shadow-sm`}>
            Alvin Ojoy
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-neutral-500 transition hover:text-neutral-900"
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
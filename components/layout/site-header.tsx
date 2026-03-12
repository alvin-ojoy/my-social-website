import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { Container } from '@/components/ui/container';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/55 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-[0.14em] text-white uppercase">
            Alvin Ojoy
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/60 transition hover:text-white"
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
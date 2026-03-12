import { Container } from '@/components/ui/container';
import { socialLinks } from '@/content/social-links';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/40">© 2026 Alvin Ojoy</p>
          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-white/55 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
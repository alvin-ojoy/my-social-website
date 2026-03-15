import { Container } from '@/components/ui/container';
import { socialLinks } from '@/content/social-links';

export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 py-8 sm:py-10">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-signature text-xl text-neutral-900">© 2026 Alvin Ojoy</p>

          <div className="flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-neutral-500 transition hover:text-neutral-900"
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
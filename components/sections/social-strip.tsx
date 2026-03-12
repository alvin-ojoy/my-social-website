import { Container } from '@/components/ui/container';
import { socialLinks } from '@/content/social-links';

export function SocialStrip() {
  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-wrap items-center gap-4 border-y border-white/10 py-6 text-sm text-white/55">
          <span className="mr-2 uppercase tracking-[0.25em] text-white/35">Find me on</span>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
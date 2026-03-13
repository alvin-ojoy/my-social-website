import { Container } from '@/components/ui/container';
import { socialLinks } from '@/content/social-links';
import { signatureFont } from "@/app/layout";

export function SocialStrip() {
  return (
    <section className="py-8">
      <Container>
        <div className="flex flex-wrap items-center gap-4 border-y border-neutral-200 py-6 text-sm text-neutral-600">
          <span className="text-xs mr-2 uppercase tracking-[0.3em] text-neutral-400">Find me on</span>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-neutral-900"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
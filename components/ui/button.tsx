import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ href, children, variant = 'primary' }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center rounded-2xl px-5 py-3 text-sm font-medium transition',
        variant === 'primary'
          ? 'bg-white text-black hover:opacity-90'
          : 'border border-white/20 bg-white/5 text-white hover:bg-white/10'
      )}
    >
      {children}
    </Link>
  );
}
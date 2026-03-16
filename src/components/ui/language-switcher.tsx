'use client';

import { Globe } from 'lucide-react';
import Link from 'next/link';

interface LanguageSwitcherProps {
  locale: 'en' | 'zh';
}

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const targetUrl = locale === 'zh' ? '/' : '/zh/';
  const targetLabel = locale === 'zh' ? 'EN' : '中文';

  return (
    <Link
      href={targetUrl}
      className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
      title={locale === 'zh' ? 'Switch to English' : '切换到中文'}
    >
      <Globe className="size-4" />
      <span>{targetLabel}</span>
    </Link>
  );
}

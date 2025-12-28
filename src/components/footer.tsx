import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import type { HomeLocale } from '@/lib/home-i18n';

const FOOTER_TEXT: Record<
  HomeLocale,
  {
    about: string;
    product: string;
    docs: string;
    community: string;
    legal: string;
    privacy: string;
    githubRepo: string;
    githubDiscussions: string;
    qqGroup: string;
    description: string;
  }
> = {
  en: {
    about: 'Ech0',
    product: 'Product',
    docs: 'Docs',
    community: 'Community',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    githubRepo: 'GitHub Repo',
    githubDiscussions: 'GitHub Discussions',
    qqGroup: 'Official QQ Group',
    description:
      'Next-generation open-source, self-hosted, lightweight federated publishing platform.',
  },
  zh: {
    about: 'Ech0',
    product: '产品',
    docs: '文档',
    community: '社区',
    legal: '使用协议',
    privacy: '隐私政策',
    githubRepo: 'GitHub Repo',
    githubDiscussions: 'Github Discussions',
    qqGroup: '官方QQ群',
    description:
      '面向个人的新一代开源、自托管、专注思想流动的轻量级联邦发布平台。',
  },
};

export function Footer({ locale = 'en' }: { locale?: HomeLocale }) {
  const t = FOOTER_TEXT[locale];
  return (
    <footer className="border-t bg-fd-background/50 mt-auto">
      <div className="mx-auto max-w-fd-container px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">{t.about}</h3>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              {t.description}
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">{t.product}</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link href="/docs/" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  {t.docs}
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">{t.community}</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/lin-snow/Ech0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  {t.githubRepo}
                </a>
              </li>
              {/* <li>
                <Link href="/supporters" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  Supporters
                </Link>
              </li> */}
              <li>
                <a
                  href="https://github.com/lin-snow/Ech0/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  {t.githubDiscussions}
                </a>
              </li>

              <li>
                <a
                  href="https://qm.qq.com/cgi-bin/qm/qr?group_code=1065435773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  {t.qqGroup}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">{t.legal}</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link href="/docs/legal/privacy/" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  {t.privacy}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

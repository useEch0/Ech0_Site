"use client";

import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';
import type { HomeLocale, HomeMessages } from '@/lib/home-i18n';
import { getHomeMessages } from '@/lib/home-i18n';
import styles from './home-client.module.css';

function MicahAvatar({ seed }: { seed: string }) {
  const avatar = useMemo(() => createAvatar(micah, {
    seed,
    size: 64,
  }).toDataUri(), [seed]);

  return (
    <Image
      src={avatar}
      alt={`${seed} avatar`}
      width={32}
      height={32}
      className={styles.voiceAvatarImage}
      unoptimized
    />
  );
}

export default function HomePageClient({
  locale = 'en',
  messages,
  mainLang,
}: {
  locale?: HomeLocale;
  messages?: HomeMessages;
  mainLang?: string;
}) {
  const t = messages ?? getHomeMessages(locale);
  const isZh = locale === 'zh';
  const docsHref = '/docs';
  const installationHref = '/docs/start/installation';
  const githubHref = 'https://github.com/lin-snow/Ech0';
  const heroTitle = t.marketing.heroTitle;
  const heroAsk = t.marketing.heroAsk;
  const featureShowcases = t.marketing.featureShowcases;
  const communityVoices = t.marketing.communityVoices;

  return (
    <main className={styles.page} lang={mainLang ?? (isZh ? 'zh-CN' : 'en')}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.heroHeadline}>
            {heroTitle}
            {t.marketing.heroSuffix ? <span>{t.marketing.heroSuffix}</span> : null}
          </h1>
          <p className={styles.tagline}>{t.positioning.statement}</p>
          <div className={styles.heroCtas}>
            <Link href={installationHref} className={styles.primaryBtn}>
              {heroAsk}
            </Link>
            <a href={githubHref} className={styles.secondaryBtn} target="_blank" rel="noopener noreferrer">
              {isZh ? 'GitHub' : 'GitHub'}
            </a>
          </div>
          <figure className={styles.heroPreview}>
            <div className={styles.heroPreviewFrame}>
              <Image
                src="/images/screenshot.png"
                alt="screenshot.png"
                width={1920}
                height={1080}
                sizes="100vw"
                className={styles.heroPreviewImage}
                priority
              />
            </div>
          </figure>

        </section>

        <section id="highlights" className={styles.highlights}>
          <div className={styles.sectionHeader}>
            <h2>{isZh ? '功能介绍' : 'Feature Overview'}</h2>
          </div>

          <div className={styles.featureShowcaseList}>
            {featureShowcases.map((feature, index) => (
              <article
                key={feature.title}
                className={`${styles.featureShowcaseItem} ${index % 2 === 1 ? styles.featureShowcaseItemReverse : ''}`}
              >
                <div className={styles.featureShowcaseCopy}>
                  <span className={styles.featureShowcaseEmoji}>{feature.emoji}</span>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                  <p className={styles.featureShowcaseDetail}>{feature.detail}</p>
                  <Link href={docsHref}>{t.cta.allCapabilities} -&gt;</Link>
                </div>
                <div className={styles.featureShowcaseVisual} aria-hidden="true">
                  <div className={styles.featureVisualCanvas}>
                    <figure className={styles.featureImageCard}>
                      <div className={styles.featureImageWrap}>
                        <Image
                          src={`/images/${feature.image}`}
                          alt={feature.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 40vw"
                          className={styles.featureImage}
                        />
                      </div>
                    </figure>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="modules" className={styles.modules}>
          <div className={styles.modulesHeader}>
            <h2>{isZh ? '面向个人创作者的系统能力组合' : 'A system capability stack for individual creators'}</h2>
          </div>

          <div className={styles.moduleGridEditorial}>
            {t.moduleSummaries.map((module, index) => (
              <article key={module.title} className={styles.moduleCardEditorial}>
                <div className={styles.moduleCardMeta}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{module.title}</h3>
                <ul>
                  {module.items.slice(0, 3).map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}

            <article className={styles.moduleMoreCard}>
              <p>+More</p>
              <h3>{isZh ? '完整能力清单与文档' : 'Complete capabilities and docs'}</h3>
              <Link href={docsHref}>{t.cta.allCapabilities}</Link>
            </article>
          </div>
        </section>

        <section id="loved-by" className={styles.lovedBy}>
          <div className={styles.lovedByHeader}>
            <h2>{t.testimonials.title}</h2>
            <p>{t.testimonials.description}</p>
          </div>
          <div className={styles.lovedByGrid}>
            {communityVoices.map((voice) => (
              <article key={voice.handle} className={styles.voiceCard}>
                <div className={styles.voiceHead}>
                  <span className={styles.voiceAvatar}>
                    <MicahAvatar seed={voice.handle} />
                  </span>
                  <div>
                    <strong>{voice.name}</strong>
                    <small>{voice.handle}</small>
                  </div>
                  <span className={styles.voiceQuote} aria-hidden="true">"</span>
                </div>
                <p>{voice.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="quickstart" className={styles.quickstart}>
          <div className={styles.footerPanelTop}>
            <div className={styles.footerBrandBlock}>
              <div className={styles.footerBrandTitle}>
                <Image src="/Ech0.svg" alt="Ech0 logo" width={18} height={18} />
                <span>Ech0</span>
              </div>
              <p>
                {t.marketing.footerDescription}
              </p>
            </div>

            <div className={styles.footerLinksGrid}>
              <div>
                <h4>{isZh ? '产品' : 'Product'}</h4>
                <Link href="#highlights">{isZh ? '功能亮点' : 'Highlights'}</Link>
                <Link href="#modules">{isZh ? '能力模块' : 'Modules'}</Link>
                <Link href="/docs/">{isZh ? '文档' : 'Docs'}</Link>
              </div>
              <div>
                <h4>{isZh ? '开发者' : 'Developer'}</h4>
                <a href="https://github.com/lin-snow/Ech0" target="_blank" rel="noopener noreferrer">GitHub</a>
                <Link href="/docs/">{isZh ? 'API 文档' : 'API Docs'}</Link>
                <Link href="/docs/">{isZh ? 'Webhook' : 'Webhook'}</Link>
              </div>
              <div>
                <h4>{isZh ? '资源' : 'Resources'}</h4>
                <Link href={installationHref}>{isZh ? '部署指南' : 'Deployment'}</Link>
                <Link href="/docs/">{isZh ? '备份与迁移' : 'Backup & Migration'}</Link>
                <Link href="/docs/">{isZh ? '许可证' : 'License'}</Link>
              </div>
            </div>
          </div>
          <div className={styles.footerPanelBottom}>
            <span>Ech0</span>
          </div>
        </section>
      </div>
    </main>
  );
}

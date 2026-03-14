import type { Metadata } from 'next';
import HomePageClient from '@/app/(home)/home-client';

export const metadata: Metadata = {
  title: 'Ech0',
  description: '面向个人的新一代开源、自托管、轻量级联邦发布平台。',
};

export default function Page() {
  return <HomePageClient locale="zh" mainLang="zh-CN" />;
}



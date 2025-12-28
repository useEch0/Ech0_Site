export type HomeLocale = 'en' | 'zh';

export interface HomeMessages {
  hero: {
    headlinePrefix: string;
    headlineRotating: string[];
    tagline: string;
    ctaDemo: string;
    ctaGithub: string;
    screenshotAlt: string;
  };
  features: {
    lightweight: { title: string; description: string; imageAlt: string };
    social: { title: string; description: string; imageAlt: string };
    writing: { title: string; description: string; imageAlt: string };
    sovereignty: { title: string; description: string; imageAlt: string };
    visualPreviewPlaceholder: string;
  };
  testimonials: {
    title: string;
    description: string;
  };
  deployment: {
    title: string;
    description: string;
    copyAria: string;
  };
}

const MESSAGES: Record<HomeLocale, HomeMessages> = {
  en: {
    hero: {
      headlinePrefix: 'Ech0 Your',
      headlineRotating: ['Thoughts', 'Ideas', 'Inspirations'],
      tagline:
        'Next-generation open-source, self-hosted, lightweight federated publishing platform.',
      ctaDemo: 'View Demo',
      ctaGithub: 'Star on GitHub',
      screenshotAlt: 'Ech0 Interface',
    },
    features: {
      lightweight: {
        title: 'Atomic Lightweight',
        description:
          'Memory usage less than 15MB, image size less than 50MB. Single SQLite file storage architecture implies zero maintenance overhead.',
        imageAlt: 'Performance metrics',
      },
      social: {
        title: 'Social, Connected',
        description:
          'Like, comment, and connect with others in a rich social environment. Explore conversations, build relationships, and stay connected across a federated universe.',
        imageAlt: 'Social interactions',
      },
      writing: {
        title: 'Zero-Interference Writing',
        description:
          'Pure online Markdown editor supporting rich plugins and live preview. Focus on your thoughts without the noise of complex interfaces.',
        imageAlt: 'Writing interface',
      },
      sovereignty: {
        title: 'Data Sovereignty',
        description:
          'All content stored locally in SQLite. Support one-click export/backup via Web, TUI, or CLI. Your data is yours, always.',
        imageAlt: 'Data privacy',
      },
      visualPreviewPlaceholder: 'Visual Preview',
    },
    testimonials: {
      title: 'Loved by the Community',
      description:
        'Join the growing network of thinkers and creators using Ech0.',
    },
    deployment: {
      title: 'Deploy in Seconds',
      description: 'Get your own instance running with a single Docker command.',
      copyAria: 'Copy code',
    },
  },
  zh: {
    hero: {
      headlinePrefix: 'Ech0 流动你的 ',
      headlineRotating: ['想法', '灵感', '思考'],
      tagline:
        '面向个人的新一代开源、自托管、轻量级联邦发布平台。',
      ctaDemo: '查看演示',
      ctaGithub: '在 GitHub 点赞',
      screenshotAlt: 'Ech0 界面预览',
    },
    features: {
      lightweight: {
        title: '极致轻量',
        description:
          '内存占用低于 15MB，镜像体积小于 50MB。单文件 SQLite 存储架构，几乎零维护成本。',
        imageAlt: '性能指标',
      },
      social: {
        title: '社交互联',
        description:
          '点赞、评论、关注，在联邦宇宙中探索对话、建立连接，与更多人保持互动。',
        imageAlt: '社交互动',
      },
      writing: {
        title: '零干扰写作',
        description:
          '纯净在线 Markdown 编辑器，支持丰富插件与实时预览。专注于表达，而不是复杂界面。',
        imageAlt: '写作界面',
      },
      sovereignty: {
        title: '数据主权',
        description:
          '内容全部本地 SQLite 存储，支持 Web/TUI/CLI 一键导出与备份。数据永远属于你。',
        imageAlt: '数据安全',
      },
      visualPreviewPlaceholder: '效果预览',
    },
    testimonials: {
      title: '社区用户喜爱',
      description: '加入越来越多使用 Ech0 的创作者与思考者。',
    },
    deployment: {
      title: '秒速部署',
      description: '一条 Docker 命令即可运行你的实例。',
      copyAria: '复制代码',
    },
  },
};

export function getHomeMessages(locale: HomeLocale): HomeMessages {
  return MESSAGES[locale];
}



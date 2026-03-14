export type HomeLocale = 'en' | 'zh';

export interface HomeHighlight {
  tag: string;
  title: string;
  description: string;
}

export interface HomeModuleSummary {
  title: string;
  items: string[];
}

export interface HomeVoice {
  name: string;
  handle: string;
  text: string;
}

export interface HomeFeatureShowcase {
  emoji: string;
  title: string;
  description: string;
  detail: string;
  image: string;
}

export interface HomeMessages {
  positioning: {
    headline: string;
    statement: string;
  };
  manifesto: {
    title: string;
    paragraph: string;
    accentLeft: string;
    accentRight: string;
  };
  cta: {
    primary: string;
    secondary: string;
    allCapabilities: string;
  };
  highlights: HomeHighlight[];
  moduleSummaries: HomeModuleSummary[];
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
  marketing: {
    heroTitle: string;
    heroSuffix: string;
    heroAsk: string;
    featureShowcases: HomeFeatureShowcase[];
    communityVoices: HomeVoice[];
    footerDescription: string;
  };
}

const MESSAGES: Record<HomeLocale, HomeMessages> = {
  en: {
    positioning: {
      headline: 'A next-generation open-source self-hosted platform for personal publishing',
      statement:
        'Ech0 helps individuals publish thoughts, notes, and links with full data ownership, ultra-light footprint, and a focused writing experience.',
    },
    manifesto: {
      title: 'A principled publishing alternative for thoughtful writers',
      paragraph:
        'We believe individual creators should own their workflow, data, and publishing rhythm without platform lock-in or noisy algorithmic pressure.',
      accentLeft: 'Your content, your rules',
      accentRight: 'No surveillance-first model',
    },
    cta: {
      primary: 'Read Docs',
      secondary: 'Star on GitHub',
      allCapabilities: 'View all capabilities',
    },
    highlights: [
      {
        tag: 'Architecture',
        title: 'Lightweight architecture',
        description: 'Low resource usage and compact image size, suitable for personal servers and ARM devices.',
      },
      {
        tag: 'Deployment',
        title: 'One-command deployment',
        description: 'Docker-first setup from install to running instance with minimal friction.',
      },
      {
        tag: 'Distribution',
        title: 'Self-contained package',
        description: 'Binary and container delivery with no additional runtime dependencies.',
      },
      {
        tag: 'Compatibility',
        title: 'Cross-platform support',
        description: 'Runs on Linux, Windows, and ARM devices like Raspberry Pi.',
      },
      {
        tag: 'Storage',
        title: 'VireFS + S3 storage',
        description: 'Unified storage abstraction for local files and S3-compatible object storage.',
      },
      {
        tag: 'Ownership',
        title: 'Data sovereignty',
        description: 'User-controlled content and metadata with RSS output and migration tools.',
      },
      {
        tag: 'Writing',
        title: 'Markdown writing + Zen mode',
        description: 'markdown-it based editing, plugin extension, and focused timeline reading.',
      },
      {
        tag: 'Security',
        title: 'Modern auth and security',
        description: 'OAuth2/OIDC, Passkey, token management, and multi-account permissions.',
      },
      {
        tag: 'Developer',
        title: 'Developer ready',
        description: 'Busen event bus, structured logs, Web console, TUI/CLI, API and Webhook.',
      },
      {
        tag: 'License',
        title: 'Fully open source',
        description: 'AGPL-3.0 licensed with no tracking, no subscription, and no SaaS lock-in.',
      },
    ],
    moduleSummaries: [
      {
        title: 'Storage & Data',
        items: [
          'VireFS unified storage abstraction',
          'Native S3-compatible object storage support',
          'Snapshot export and migration import',
        ],
      },
      {
        title: 'Writing & Content',
        items: [
          'markdown-it rendering and plugin extensions',
          'Zen timeline reading mode',
          'Tagging, card content, and video parsing',
        ],
      },
      {
        title: 'Auth & Security',
        items: [
          'OAuth2 / OIDC integration',
          'Passkey passwordless login',
          'Token + multi-account permission control',
        ],
      },
      {
        title: 'System & Developer',
        items: [
          'Busen decoupled data bus',
          'Structured logs and live console',
          'CLI/TUI tools, API and Webhook',
        ],
      },
    ],
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
    marketing: {
      heroTitle: 'Ech0 your thoughts',
      heroSuffix: '',
      heroAsk: 'Deploy now',
      featureShowcases: [
        {
          emoji: '☁️',
          title: 'Lightweight and ready to run',
          description: 'Low resource usage and compact image size, suitable for personal servers and ARM devices.',
          detail: 'Runs smoothly from personal servers to ARM boards with low operating cost.',
          image: 'dashboard.png',
        },
        {
          emoji: '✍️',
          title: 'Write and publish in flow',
          description: 'markdown-it based editing, plugin extension, and focused timeline reading.',
          detail: 'Markdown, tags, rich cards, and zen reading work together in one workflow.',
          image: 'editor.png',
        },
        {
          emoji: '🔐',
          title: 'Data management and control',
          description: 'Unified storage and data operations built for long-term self-hosted maintenance.',
          detail: 'Manage assets and content data with a clear workflow as your instance keeps growing.',
          image: 'datamanager.png',
        },
        {
          emoji: '🔑',
          title: 'Auth and identity security',
          description: 'OAuth2/OIDC, Passkey, token management, and multi-account permissions.',
          detail: 'Build a secure identity layer with modern auth standards and fine-grained access control.',
          image: 'auth&identity.png',
        },
        {
          emoji: '💬',
          title: 'Native comments and engagement',
          description: 'Built-in comments, likes, and sharing for direct audience interaction.',
          detail: 'No third-party comment plugin required, keep interactions and data in your own system.',
          image: 'comments.png',
        },
        {
          emoji: '🗂️',
          title: 'Comment moderation workspace',
          description: 'Manage, review, and organize feedback with a focused moderation panel.',
          detail: 'Handle discussions with clear status and operation flow as your content grows.',
          image: 'commentmanager.png',
        },
      ],
      communityVoices: [
        { name: 'eseaan', handle: '@eseaan', text: 'Ech0 feels like a calm place for writing.' },
        { name: 'RvNoxy', handle: '@rvnoxy', text: 'Deployment is smooth, and the system design is surprisingly complete.' },
        { name: 'willow-god', handle: '@willow-god', text: 'Fast to start, fluid to use, great for personal publishing.' },
        { name: 'WindyDante', handle: '@WindyDante', text: 'The more I use it, the more natural it feels.' },
        { name: 'Trojans', handle: '@trojans', text: 'Easy setup, solid capabilities, and truly self-hosted.' },
        { name: 'ljxme', handle: '@ljxme', text: 'The lightweight approach is perfect for daily capture.' },
      ],
      footerDescription:
        'An open-source self-hosted publishing platform for individuals, designed for lightweight control and long-term flow.',
    },
  },
  zh: {
    positioning: {
      headline: '面向个人的开源自托管轻量发布平台',
      statement:
        'Ech0 为个人用户而生，以低成本、超轻量和高自由度帮助你发布想法、文字与链接，界面简洁直观，数据完全自主可控。',
    },
    manifesto: {
      title: '为写作者而生的原则性发布平台',
      paragraph:
        '我们相信创作者应该拥有自己的工作流、数据与发布节奏，而不是被平台规则与噪音算法裹挟。',
      accentLeft: '你的内容，由你掌控',
      accentRight: '拒绝监控式增长逻辑',
    },
    cta: {
      primary: '查看文档',
      secondary: '在 GitHub 点赞',
      allCapabilities: '查看完整能力',
    },
    highlights: [
      {
        tag: '架构',
        title: '轻量高效架构',
        description: '低资源占用与小体积镜像，适合个人服务器到 ARM 设备。',
      },
      {
        tag: '部署',
        title: '极速部署体验',
        description: '开箱即用 Docker 部署，从安装到运行一条命令即可启动。',
      },
      {
        tag: '交付',
        title: '自包含部署包',
        description: '提供完整二进制与容器镜像，无需额外依赖。',
      },
      {
        tag: '兼容性',
        title: '跨平台支持',
        description: '支持 Linux、Windows 与 ARM 架构设备（如 Raspberry Pi）。',
      },
      {
        tag: '存储',
        title: 'VireFS 统一存储',
        description: '统一本地存储与 S3 兼容对象存储的挂载与管理。',
      },
      {
        tag: '主权',
        title: '数据主权架构',
        description: '内容与元数据由用户掌控，支持 RSS 输出与迁移归档。',
      },
      {
        tag: '写作',
        title: 'Markdown + Zen',
        description: '基于 markdown-it 的写作渲染与 Zen Mode 沉浸阅读。',
      },
      {
        tag: '安全',
        title: '认证与安全',
        description: '支持 OAuth2/OIDC、Passkey、访问令牌与多账户权限。',
      },
      {
        tag: '开发者',
        title: '开发者友好',
        description: 'Busen 数据总线、结构化日志、Web 控制台、CLI/TUI、Webhook。',
      },
      {
        tag: '开源',
        title: '完全开源',
        description: '基于 AGPL-3.0 发布，无追踪、无订阅、无 SaaS 依赖。',
      },
    ],
    moduleSummaries: [
      {
        title: '存储与数据',
        items: [
          'VireFS 统一抽象层 + S3 对象存储',
          '迁移导入、快照导出与自动备份',
          '数据主权与 RSS 输出能力',
        ],
      },
      {
        title: '写作与内容',
        items: [
          'markdown-it 编辑渲染与插件扩展',
          'Zen Mode 时间线沉浸阅读',
          '标签系统、卡片内容与视频解析',
        ],
      },
      {
        title: '认证与安全',
        items: [
          'OAuth2 / OIDC 协议接入',
          'Passkey 无密码登录',
          '令牌管理与多账户权限控制',
        ],
      },
      {
        title: '系统与开发者',
        items: [
          'Busen 解耦通信与可靠消息',
          '结构化日志与实时控制台',
          'CLI/TUI、开放 API 与 Webhook',
        ],
      },
    ],
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
    marketing: {
      heroTitle: '静候灵感落笔',
      heroSuffix: '',
      heroAsk: '立即部署',
      featureShowcases: [
        {
          emoji: '☁️',
          title: '轻量高效，部署即用',
          description: '低资源占用与小体积镜像，适合个人服务器到 ARM 设备。',
          detail: '从个人服务器到 ARM 设备，都能低成本稳定运行。',
          image: 'dashboard.png',
        },
        {
          emoji: '✍️',
          title: '专注表达，保持流动',
          description: '基于 markdown-it 的写作渲染与 Zen Mode 沉浸阅读。',
          detail: 'Markdown、标签、卡片内容与沉浸阅读协同工作。',
          image: 'editor.png',
        },
        {
          emoji: '🔐',
          title: '数据管理与运维掌控',
          description: '面向长期自托管场景的数据与资源管理能力，流程更清晰。',
          detail: '随着实例规模增长，依然可以稳定地管理内容资产与系统数据。',
          image: 'datamanager.png',
        },
        {
          emoji: '🔑',
          title: '认证与身份安全',
          description: '支持 OAuth2/OIDC、Passkey、访问令牌与多账户权限。',
          detail: '以现代认证标准构建身份层，兼顾安全性、可扩展性与访问控制。',
          image: 'auth&identity.png',
        },
        {
          emoji: '💬',
          title: '原生评论与互动',
          description: '内建评论、点赞与分享能力，直接连接你的读者反馈。',
          detail: '无需第三方评论服务，互动数据与内容资产统一留在你的系统里。',
          image: 'comments.png',
        },
        {
          emoji: '🗂️',
          title: '评论管理工作台',
          description: '集中审核、管理与整理评论内容，保持社区秩序与讨论质量。',
          detail: '随着内容增长，依然可以清晰地处理互动流程与运营节奏。',
          image: 'commentmanager.png',
        },
      ],
      communityVoices: [
        { name: 'eseaan', handle: '@eseaan', text: 'Ech0 是个让人安静写作的地方。' },
        { name: 'RvNoxy', handle: '@rvnoxy', text: '部署很顺滑，后台和生态设计比预想更完整。' },
        { name: 'willow-god', handle: '@willow-god', text: '打开即用，体验流畅，作为个人发布工具非常合适。' },
        { name: 'WindyDante', handle: '@WindyDante', text: '越用越顺手。' },
        { name: 'Trojans', handle: '@trojans', text: '配置简单，功能扎实，最重要的是部署可控。' },
        { name: 'ljxme', handle: '@ljxme', text: 'Ech0 的轻量化设计很适合日常记录。' },
      ],
      footerDescription: '面向个人的新一代开源、自托管、专注思想流动的轻量级发布平台。',
    },
  },
};

export function getHomeMessages(locale: HomeLocale): HomeMessages {
  return MESSAGES[locale];
}



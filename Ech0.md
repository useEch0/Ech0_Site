<div align="center">
  <img alt="Ech0" src="/Ech0.svg" width="120">

  # Ech0

  面向个人的新一代开源、自托管、专注思想流动的轻量级发布平台

  [预览](https://memo.vaaat.com/) · [官网](https://www.ech0.app/) · [Ech0 Hub](https://hub.ech0.app/) · [GitHub](https://github.com/lin-snow/Ech0)

  [![GitHub release](https://img.shields.io/github/v/release/lin-snow/Ech0)](https://github.com/lin-snow/Ech0/releases) ![License](https://img.shields.io/github/license/lin-snow/Ech0)
</div>

---

Ech0 是一款专为个人用户设计的开源自托管平台。低成本、超轻量，让你轻松发布和分享想法、文字与链接。简洁直观的界面结合高效的命令行工具，让内容管理变得简单而自由。你的数据完全自主可控。

---

## 目录

- [产品亮点](#产品亮点)
- [部署指南](#部署指南)
  - [Docker 部署](#docker-部署推荐)
  - [Docker Compose](#docker-compose)
  - [Kubernetes (Helm)](#kubernetes-helm)
  - [脚本安装](#脚本安装)
  - [二进制直接运行](#二进制直接运行)
- [版本升级](#版本升级)
- [初始化与首次使用](#初始化与首次使用)
- [配置参考](#配置参考)
  - [服务器](#服务器)
  - [数据库](#数据库)
  - [日志](#日志)
  - [认证 / JWT](#认证--jwt)
  - [文件上传](#文件上传)
  - [本地存储](#本地存储)
  - [S3 对象存储](#s3-对象存储)
  - [站点设置](#站点设置)
  - [评论系统](#评论系统配置)
  - [事件总线 (Busen)](#事件总线-busen)
  - [数据迁移](#数据迁移配置)
  - [CORS](#cors)
- [功能详解](#功能详解)
  - [内容发布 (Echo)](#内容发布-echo)
  - [编辑器与草稿系统](#编辑器与草稿系统)
  - [图片智能压缩](#图片智能压缩)
  - [富媒体扩展卡片](#富媒体扩展卡片)
  - [标签系统](#标签系统)
  - [Zone 热敏打印台](#zone-热敏打印台)
  - [Zen Mode 沉浸阅读](#zen-mode-沉浸阅读)
  - [评论系统](#评论系统)
  - [文件管理](#文件管理)
  - [存储架构 (VireFS)](#存储架构-virefs)
  - [认证体系](#认证体系)
  - [Webhook 事件推送](#webhook-事件推送)
  - [访问令牌 (Access Token)](#访问令牌-access-token)
  - [数据备份与导出](#数据备份与导出)
  - [数据迁移](#数据迁移)
  - [RSS 订阅](#rss-订阅)
  - [AI Agent 摘要](#ai-agent-摘要)
  - [系统日志控制台](#系统日志控制台)
  - [Hub 联邦内容聚合](#hub-联邦内容聚合)
  - [Connect 实例互联](#connect-实例互联)
  - [通知收件箱 (Inbox)](#通知收件箱-inbox)
  - [活跃度热力图 (Heatmap)](#活跃度热力图-heatmap)
  - [Widget 小组件视图](#widget-小组件视图)
  - [PWA 支持](#pwa-支持)
  - [i18n 多语言](#i18n-多语言)
  - [主题与深色模式](#主题与深色模式)
  - [自定义 CSS / JS](#自定义-css--js)
- [CLI 与 TUI](#cli-与-tui)
  - [CLI 命令](#cli-命令)
  - [TUI 终端交互界面](#tui-终端交互界面)
- [API 参考](#api-参考)
  - [通用约定](#通用约定)
  - [初始化](#初始化)
  - [用户认证](#用户认证-api)
  - [OAuth2 / OIDC](#oauth2--oidc-api)
  - [Passkey / WebAuthn](#passkey--webauthn-api)
  - [Echo 管理](#echo-管理-api)
  - [标签](#标签-api)
  - [评论](#评论-api)
  - [文件管理](#文件管理-api)
  - [系统设置](#系统设置-api)
  - [Webhook 管理](#webhook-管理-api)
  - [访问令牌](#访问令牌-api)
  - [备份与迁移](#备份与迁移-api)
  - [Agent](#agent-api)
  - [收件箱](#收件箱-api)
  - [Connect 互联](#connect-互联-api)
  - [Dashboard 与日志](#dashboard-与日志-api)
  - [公共端点](#公共端点-api)
- [开发指南](#开发指南)
  - [技术栈](#技术栈)
  - [后端环境要求](#后端环境要求)
  - [前端环境要求](#前端环境要求)
  - [启动开发环境](#启动开发环境)
  - [Makefile 命令](#makefile-命令)
  - [项目架构](#项目架构)
  - [目录结构](#目录结构)
  - [分层架构与约定](#分层架构与约定)
  - [依赖注入 (Wire)](#依赖注入-wire)
  - [事件总线 (Busen)](#事件总线-busen-1)
  - [API 文档 (Swagger)](#api-文档-swagger)
  - [数据库 Schema](#数据库-schema)
  - [前端架构](#前端架构)
  - [代码规范](#代码规范)
  - [Docker 镜像构建](#docker-镜像构建)
- [常见问题](#常见问题)
- [社区与反馈](#社区与反馈)
- [开源协议](#开源协议)

---

## 产品亮点

| 类别 | 特性 |
| --- | --- |
| **架构** | 低资源占用，小体积镜像（~30-40MB），适合个人服务器到 ARM 设备 |
| **部署** | 开箱即用 Docker 部署，单条命令即可启动，支持 Helm / systemd / 二进制直接运行 |
| **分发** | 前端编译产物内嵌于后端二进制，单文件完整分发，无需额外运行时依赖 |
| **平台** | 支持 linux/amd64、linux/arm64、linux/armv7（如 Raspberry Pi），Windows 开发环境 |
| **存储** | VireFS 统一抽象层，无缝切换本地存储与 S3 兼容对象存储（AWS / R2 / MinIO） |
| **写作** | 基于 markdown-it 的编辑渲染引擎，Vditor 富文本编辑器，实时预览 |
| **认证** | JWT + OAuth2/OIDC（GitHub / Google / QQ / 自定义）+ Passkey/WebAuthn 无密码登录 |
| **互动** | 原生评论系统（审核流程 + 防垃圾检测）、点赞、分享 |
| **开放** | 完整 REST API（Swagger 文档）、Webhook 事件推送、RSS、Access Token |
| **工具** | CLI 工具链 + TUI 终端管理界面（基于 charmbracelet/huh） |
| **体验** | 响应式设计、PWA、i18n 双语（zh-CN / en-US）、深色模式、Zen Mode 沉浸阅读 |
| **数据** | SQLite 零配置数据库、定时自动备份、多源数据迁移（Memos / Ech0 v3 / v4） |
| **协议** | AGPL-3.0，无追踪、无订阅、无 SaaS 依赖 |

---

## 部署指南

### Docker 部署（推荐）

```shell
docker run -d \
  --name ech0 \
  -p 6277:6277 \
  -v /opt/ech0/data:/app/data \
  -e JWT_SECRET="your-random-secret-here" \
  sn0wl1n/ech0:latest
```

部署完成后访问 `http://<ip>:6277`。

> - **务必**将 `JWT_SECRET` 替换为你自己的随机字符串（留空则自动生成 16 字节 hex）
> - 首个注册的用户将成为系统 Owner（最高权限管理员）
> - 所有数据持久化在 `/opt/ech0/data` 目录（数据库文件 `ech0.db`、日志 `app.log`、上传文件）
> - 默认端口 `6277`，默认监听 `0.0.0.0`

### Docker Compose

创建目录并放入 `docker-compose.yml`：

```yaml
services:
  ech0:
    image: sn0wl1n/ech0:latest
    ports:
      - "6277:6277"
    volumes:
      - ./ech0/data:/app/data
    environment:
      - JWT_SECRET=your-random-secret-here
```

启动：

```shell
docker-compose up -d
```

> 项目还提供了 `docker-compose.cap.yml`，用于部署 CAP（Comment Adapter Platform）服务，镜像为 `tiago2/cap:latest`，端口 `3000`。

### Kubernetes (Helm)

项目提供了 Helm Chart，位于 `charts/ech0/` 目录。

```shell
git clone https://github.com/lin-snow/Ech0.git && cd Ech0

# 默认安装
helm install ech0 ./charts/ech0

# 自定义命名空间
helm install ech0 ./charts/ech0 --namespace my-namespace --create-namespace
```

**Helm 主要配置项（values.yaml）：**

| 参数 | 默认值 | 说明 |
| --- | --- | --- |
| `replicaCount` | `1` | 副本数 |
| `image.repository` | `sn0wl1n/ech0` | 镜像仓库 |
| `image.pullPolicy` | `IfNotPresent` | 拉取策略 |
| `service.type` | `ClusterIP` | Service 类型 |
| `service.httpPort` | `6277` | 服务端口 |
| `persistence.enabled` | `true` | 持久化存储 |
| `persistence.size` | `1Gi` | PVC 存储大小 |
| `persistence.mountPath` | `/app/data` | 挂载路径 |
| `config.JWT_SECRET` | `Hello Echos` | JWT 密钥（**务必修改**） |
| `autoscaling.enabled` | `false` | 水平自动扩缩 |

Chart 模板包含：Deployment、Service、ServiceAccount、PVC、Secret、Ingress、HTTPRoute（Gateway API）、HPA。

### 脚本安装

项目提供了 `scripts/ech0.sh` 一键安装脚本，适用于裸机 Linux 服务器：

```shell
curl -fsSL "https://raw.githubusercontent.com/lin-snow/Ech0/main/scripts/ech0.sh" -o ech0.sh
bash ech0.sh
```

脚本功能：
- 自动检测平台架构（amd64 / arm64）
- 从 GitHub Releases 下载对应二进制
- 安装到 `/opt/ech0`，创建 `/usr/local/bin/ech0` 符号链接
- 自动注册 systemd 服务并启用开机自启
- 支持版本更新、启停重启、备份恢复、卸载
- 自动检测依赖（curl、tar、systemctl）

### 二进制直接运行

从 [GitHub Releases](https://github.com/lin-snow/Ech0/releases) 下载对应平台的二进制包解压后：

```shell
# 启动 Web 服务（前台阻塞）
./ech0 serve

# 或启动 TUI 交互界面（默认行为）
./ech0

# 数据默认存储在 ./data/ 目录
```

---

## 版本升级

> **v3 → v4 不支持直接升级**。请先在 v3 面板中导出快照，重新部署 v4 后使用"v3 迁移"功能导入数据。

### Docker

```shell
docker stop ech0 && docker rm ech0
docker pull sn0wl1n/ech0:latest
docker run -d \
  --name ech0 \
  -p 6277:6277 \
  -v /opt/ech0/data:/app/data \
  -e JWT_SECRET="your-secret-here" \
  sn0wl1n/ech0:latest
```

### Docker Compose

```shell
docker-compose pull && docker-compose up -d --force-recreate
docker image prune -f
```

### Kubernetes (Helm)

```shell
cd Ech0 && git pull
helm upgrade ech0 ./charts/ech0
```

---

## 初始化与首次使用

1. **检查初始化状态**：首次访问时，系统会自动检测是否已完成初始化（`GET /api/init/status`）
2. **创建 Owner 账号**：如果尚未初始化，首个注册的用户会被设置为系统 Owner（`POST /api/init/owner`）
3. **Owner 权限**：Owner 是最高权限角色，可管理所有系统设置、创建/删除管理员、管理用户
4. **用户上限**：系统默认最多支持 **5** 个用户账号
5. **开始使用**：登录后即可发布 Echo、上传文件、配置系统设置

---

## 配置参考

Ech0 通过环境变量进行配置，所有变量以 `ECH0_` 为前缀（`JWT_SECRET` 例外）。可在 `.env` 文件中设置，也可通过 Docker `-e` 参数或 Helm values 传入。

### 服务器

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_SERVER_PORT` | `6277` | HTTP 监听端口 |
| `ECH0_SERVER_HOST` | `0.0.0.0` | 监听地址 |
| `ECH0_SERVER_MODE` | `release` | 运行模式（`debug` 开启调试日志 / `release` 生产模式） |

### 数据库

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_DB_TYPE` | `sqlite` | 数据库类型 |
| `ECH0_DB_PATH` | `data/ech0.db` | SQLite 数据库文件路径 |
| `ECH0_DB_LOGMODE` | `release` | 数据库 SQL 日志模式（`debug` 打印 SQL / `release` 静默） |

### 日志

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_LOG_LEVEL` | `info` | 日志级别：`debug` / `info` / `warn` / `error` / `panic` |
| `ECH0_LOG_FORMAT` | `json` | 输出格式：`json`（结构化）/ `console`（人类可读） |
| `ECH0_LOG_CONSOLE` | `false` | 是否同时输出到标准输出 |
| `ECH0_LOG_FILE_ENABLE` | `true` | 是否写入日志文件 |
| `ECH0_LOG_FILE_PATH` | `data/app.log` | 日志文件路径 |
| `ECH0_LOG_FILE_MAX_SIZE` | `100` | 单文件最大体积（MB），超出后自动轮转 |
| `ECH0_LOG_FILE_MAX_BACKUPS` | `5` | 保留的历史日志文件数 |
| `ECH0_LOG_FILE_MAX_AGE` | `30` | 日志文件保留天数 |
| `ECH0_LOG_FILE_COMPRESS` | `true` | 是否 gzip 压缩已轮转的日志文件 |
| `ECH0_LOG_BUFFER_SIZE` | `2048` | 内存日志缓冲区大小 |
| `ECH0_LOG_RECENT_SIZE` | `2000` | Web 控制台最近日志条目数 |
| `ECH0_LOG_DROP_POLICY` | `drop_oldest` | 缓冲区满时丢弃策略：`drop_oldest` / `drop_newest` |
| `ECH0_LOG_FLUSH_BATCH` | `128` | 批量刷写条数 |
| `ECH0_LOG_FLUSH_INTERVAL_MS` | `500` | 刷写间隔（毫秒） |

### 认证 / JWT

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `JWT_SECRET` | 自动生成 | JWT 签名密钥，留空则启动时自动生成 16 字节随机 hex（**注意：无 `ECH0_` 前缀**） |
| `ECH0_JWT_EXPIRES` | `2592000` | Token 有效期（秒），默认 30 天 |
| `ECH0_JWT_ISSUER` | `ech0` | JWT 签发者标识 |
| `ECH0_JWT_AUDIENCE` | `ech0` | JWT 受众标识 |
| `ECH0_AUTH_REDIRECT_ALLOWED_RETURN_URLS` | 空 | OAuth 登录/绑定回跳 URL 白名单（逗号分隔） |
| `ECH0_AUTH_WEBAUTHN_RP_ID` | 空 | Passkey WebAuthn RP ID（通常为域名，如 `example.com`） |
| `ECH0_AUTH_WEBAUTHN_ORIGINS` | 空 | Passkey 允许的来源 URL（逗号分隔，如 `https://example.com`） |

### 文件上传

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_UPLOAD_IMAGE_MAX_SIZE` | `20971520` | 图片最大体积（字节），默认 20MB |
| `ECH0_UPLOAD_AUDIO_MAX_SIZE` | `20971520` | 音频最大体积（字节），默认 20MB |
| `ECH0_UPLOAD_IMAGE_PATH` | `data/files/images/` | 图片本地存储路径 |
| `ECH0_UPLOAD_AUDIO_PATH` | `data/files/audios/` | 音频本地存储路径 |

允许上传的默认文件类型：JPEG、PNG、GIF、WebP、SVG、AVIF、MP3、FLAC、WAV、MP4。

### 本地存储

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_OBJECT_ENABLED` | `false` | 是否启用对象存储（设为 `true` 后使用 S3 配置） |
| `ECH0_STORAGE_DATA_ROOT` | `data/files` | 本地文件存储根目录 |

### S3 对象存储

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_S3_ENDPOINT` | 空 | S3 端点地址（**不含** `http://` 前缀） |
| `ECH0_S3_ACCESS_KEY` | 空 | Access Key ID |
| `ECH0_S3_SECRET_KEY` | 空 | Secret Access Key |
| `ECH0_S3_BUCKET` | 空 | 存储桶名称（**需配置公共访问权限**） |
| `ECH0_S3_REGION` | 空 | 区域标识 |
| `ECH0_S3_PROVIDER` | 空 | 提供商标识：`aws` / `r2`（Cloudflare）/ `minio` / `other` |
| `ECH0_S3_USE_SSL` | `false` | S3 连接是否使用 SSL |
| `ECH0_S3_CDN_URL` | 空 | CDN 加速域名（可选） |
| `ECH0_S3_PATH_PREFIX` | 空 | 存储路径前缀（如 `uploads/`，用于桶内隔离） |

### 站点设置

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_SETTING_SITE_TITLE` | `Ech0` | 站点标题 |
| `ECH0_SETTING_SERVER_LOGO` | `/Ech0.svg` | Logo 地址 |
| `ECH0_SETTING_SERVER_NAME` | `Ech0` | 服务器显示名称 |
| `ECH0_SETTING_SERVER_URL` | `https://ech0.example.com` | 服务地址（**需含协议**，用于 Connect、头像、回跳等） |
| `ECH0_SETTING_ALLOW_REGISTER` | `true` | 是否允许新用户注册 |
| `ECH0_SETTING_ICP_NUMBER` | 空 | ICP 备案号（中国大陆服务器） |
| `ECH0_SETTING_FOOTER_CONTENT` | 空 | 页脚自定义内容 |
| `ECH0_SETTING_FOOTER_LINK` | 空 | 页脚自定义链接 |
| `ECH0_SETTING_METING_API` | 空 | 音乐解析 API 地址（不设置则使用 Ech0 默认 Vercel API） |
| `ECH0_SETTING_CUSTOM_CSS` | 空 | 全局注入的自定义 CSS |
| `ECH0_SETTING_CUSTOM_JS` | 空 | 全局注入的自定义 JavaScript |

### 评论系统配置

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_COMMENT_ENABLE` | `false` | 是否启用内建评论功能 |

### 事件总线 (Busen)

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_EVENT_DEFAULT_BUFFER` | `512` | 默认事件通道缓冲区大小 |
| `ECH0_EVENT_DEFAULT_OVERFLOW` | `block` | 缓冲区满时策略（`block` 阻塞等待） |
| `ECH0_EVENT_DEADLETTER_BUFFER` | `64` | 死信通道缓冲区大小 |
| `ECH0_EVENT_SYSTEM_BUFFER` | `64` | 系统事件缓冲区 |
| `ECH0_EVENT_AGENT_BUFFER` | `128` | Agent 事件缓冲区 |
| `ECH0_EVENT_AGENT_PARALLELISM` | `2` | Agent 并行处理数 |
| `ECH0_EVENT_INBOX_BUFFER` | `64` | 收件箱事件缓冲区 |
| `ECH0_EVENT_WEBHOOK_POOL_WORKERS` | `6` | Webhook 投递工作线程数 |
| `ECH0_EVENT_WEBHOOK_POOL_QUEUE` | `6` | Webhook 投递队列大小 |

### 数据迁移配置

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_MIGRATION_WORKER_ENABLED` | `false` | 是否启用迁移 Worker |
| `ECH0_MIGRATION_MAX_CONCURRENCY` | `1` | 迁移最大并发数 |
| `ECH0_MIGRATION_BATCH_SIZE` | `100` | 批量处理大小 |
| `ECH0_MIGRATION_RATE_LIMIT_PER_SEC` | `20` | 每秒速率限制 |

### CORS

| 变量 | 默认值 | 说明 |
| --- | --- | --- |
| `ECH0_WEB_CORS_ALLOWED_ORIGINS` | 空 | 允许的跨域来源（逗号分隔），前后端分离开发时需配置 |

---

## 功能详解

### 内容发布 (Echo)

Echo 是 Ech0 的核心内容单元，类似于"动态"或"说说"。每条 Echo 包含：

- **文字内容**：支持完整 Markdown 语法，基于 markdown-it 渲染引擎，代码块使用 highlight.js 高亮
- **附件文件**：支持多图、音频、视频上传，通过 Uppy 组件管理（单批最多 6 个文件，2 并发上传）
- **布局模式**：图片展示支持四种布局——`waterfall`（瀑布流）/ `grid`（网格）/ `horizontal`（横向）/ `carousel`（轮播）
- **扩展内容**：可嵌入音乐、视频、GitHub 项目、网站链接卡片（见下方"富媒体扩展卡片"）
- **标签**：支持多标签分类与检索
- **隐私控制**：可设为 `private`（仅自己可见）
- **点赞**：支持访客点赞（无需登录），点赞计数持久化
- **搜索**：支持按关键词搜索 Echo 内容，搜索触发于输入框失焦时
- **今日 Echo**：`GET /api/echo/today`，支持时区感知（通过 `X-Timezone` 请求头传递用户本地时区）

**分页**：支持 `page` + `pageSize`（1-100 条/页）参数分页查询，可按标签、隐私、搜索关键词过滤。

### 编辑器与草稿系统

编辑器提供 6 种模式，通过模式面板切换：

| 模式 | 标识 | 说明 |
| --- | --- | --- |
| Echo 编辑 | `ECH0` | 默认模式，Markdown 内容编辑（基于 Vditor） |
| 模式面板 | `Panel` | 显示可用的扩展和收件箱入口 |
| 扩展编辑 | `EXTEN` | 编辑音乐/视频/GitHub 项目/网站链接扩展卡片 |
| 图片管理 | `Image` | 图片上传、布局选择、智能压缩开关 |
| 标签管理 | `TagManage` | 为 Echo 添加/移除标签 |
| 收件箱 | `INBOX` | 查看和管理收件箱消息 |

**草稿自动保存：**
- 每 600ms 防抖自动保存到 `localStorage`（key: `editor_echo_draft_v1`）
- 草稿有效期 24 小时，过期自动清除
- 监听内容、文件、扩展、标签等所有编辑状态的变化
- 页面关闭/隐藏时立即刷新保存（`pagehide` / `beforeunload` 事件）
- 仅在非编辑更新模式下保存（编辑已有 Echo 时不覆盖草稿）
- 下次打开编辑器时，若存在有效草稿会弹出恢复确认对话框
- 恢复内容包括：文字、隐私设置、布局、附件文件、扩展内容、标签

### 图片智能压缩

上传图片时可开启"智能压缩"（Smart Compress），基于 `@uppy/compressor`：

- **Safari 浏览器**：输出为 `image/jpeg` 格式
- **其他浏览器**：输出为 `image/webp` 格式
- **可转换类型**：`image/jpeg`、`image/png`、`image/webp`
- 压缩开关由用户在图片编辑面板中手动控制（`BaseSwitch` 组件）
- 仅对本地上传图片生效，外部链接图片不压缩

### 富媒体扩展卡片

每条 Echo 可以附带一个扩展内容，通过 `EchoExtension` 存储，支持以下类型：

| 类型 | 标识 | Payload 字段 | 说明 |
| --- | --- | --- | --- |
| 音乐卡片 | `MUSIC` | `url` | 通过 MetingAPI 解析流媒体直链，使用 APlayer 播放 |
| 视频卡片 | `VIDEO` | `videoId` | 支持哔哩哔哩、YouTube 视频嵌入解析 |
| GitHub 项目 | `GITHUBPROJ` | `repoUrl` | 展示仓库名、描述、Star 等信息 |
| 网站链接 | `WEBSITE` | `title`, `site` | 展示网页标题与摘要预览 |

### 标签系统

- 创建 Echo 时可关联多个标签（多对多关系，通过 `EchoTag` 中间表）
- 系统自动统计每个标签的使用次数（`UsageCount`）
- 支持按标签快速过滤 Echo 列表
- 管理员可删除标签
- 标签名最长 50 字符，全局唯一

### Zone 热敏打印台

Zone 是 Ech0 独有的创意交互界面——一个模拟热敏打印机的可视化控制台，将 Echo 内容"打印"为可拖拽的纸质卡片。

**路由**：`/zone/:echoId?`（echoId 可选），无需登录即可访问。

**打字机控制台（TypewriterConsole）：**
- 模拟复古热敏打印机外壳，带 LCD 显示屏、扫描线和 CRT 颗粒叠加效果
- 提供 20 行文本输入区域，带字符计数器（最多 2000 字符）
- 控制按钮：印章开关（"印"）、全部删除（"删"）、打印（PRINT）
- 底部带 "ECH0" 标识徽章

**纸质卡片（DraggablePaper）：**
- 打印后的内容呈现为热敏小票样式的卡片，顶部和底部带锯齿边缘
- 卡片包含：`Echo Print` 标题、ID、时间戳、正文内容、元数据（EchoID、标签、图片数、扩展类型）、条形码图案、`END OF TRANSMISSION` 结尾
- 逐字打字动画：50 字以内 `900 + 字数×22`ms，50-150 字 `700 + 字数×10`ms，150 字以上 `字数×10`ms
- 支持鼠标/触控拖拽，拖拽时放大 1.05 倍并显示阴影
- 点击卡片置顶（z-index 动态管理）
- 针对 iOS 设备优化了 CSS 合成性能

**随机印章系统：**
- 开启印章后，打印的卡片会随机附带一枚印章图片（80×80px，60% 透明度）
- 印章从 `assets/stamp/` 目录加载（支持 PNG/JPG/SVG/WebP）
- 随机旋转角度（0-18°）和位置偏移

**本地持久化：**
- 所有卡片（位置、内容、印章、z-index）保存到 `localStorage`（key: `zone-paper-cards`）
- 页面刷新后自动恢复所有卡片的位置和状态
- 支持一键清除所有卡片

**与 Echo 联动：**
- 在 Echo 详情页或 Hub 中点击"打印"按钮，内容通过 Pinia Zone Store 传递
- 自动导航到 `/zone/:echoId` 并打印该 Echo

### Zen Mode 沉浸阅读

提供干扰最小化的 Timeline 沉浸式阅读体验，隐藏侧边栏和操作按钮。

**动画实现（Web Animations API）：**
- 淡出：360ms，缓动 `cubic-bezier(0.22, 1, 0.36, 1)`
- 淡入：380ms，同缓动曲线
- 透明度变化：`1 → 0.9 → 1`
- 过渡期间锁定操作，防止重复触发

**无障碍与响应式：**
- 检测 `prefers-reduced-motion: reduce`，若用户偏好减少动画则跳过过渡直接切换
- 视口宽度 < 640px 时自动禁用 Zen Mode（移动设备不适用）

### 评论系统

Ech0 内建了完整的原生评论系统，无需依赖任何第三方评论服务。

**评论类型：**
- **访客评论**（`source: guest`）：无需登录，需填写昵称和邮箱（可选网站），默认需要管理员审核
- **系统评论**（`source: system`）：管理员/Owner 发表的评论，自动通过审核，无需邮箱

**内容限制**：评论正文最多 200 个 UTF-8 字符（后端通过 `utf8.RuneCountInString` 校验）。

**审核流程：**
- 评论状态：`pending`（待审核）→ `approved`（已通过）/ `rejected`（已拒绝）
- 管理员可在面板中批量审核、删除评论
- 可将优质评论标记为"热评"（`hot: true`）

**防垃圾机制：**
- **表单 Token**：HMAC-SHA256 签名验证，最短提交间隔 2 秒，Token 24 小时过期
- **蜜罐字段**（Honeypot）：隐藏字段检测机器人
- **频率限制**：同一 IP 或邮箱每分钟最多 3 条、每小时最多 20 条
- **重复检测**：90 秒内同一来源的相同内容不可重复提交
- **CAP 验证码**：可选集成 [CAP（Comment Adapter Platform）](https://github.com/user/cap) 验证码服务，通过配置 `CaptchaVerify`（验证端点 URL）和 `CaptchaSecret`（密钥）启用，后端向 CAP 发送 POST 请求校验 token。可通过 `docker-compose.cap.yml` 一键部署 CAP 服务（端口 3000）

**管理功能：**
- 在 `系统设置 → 评论设置` 中配置：是否启用、是否需要审核、验证码设置
- 面板中支持按状态筛选、关键词搜索、单条/批量操作（审核通过、拒绝、删除）

### 文件管理

内建可视化文件管理器，支持完整的文件生命周期管理：

**上传：**
- 支持图片、音频、视频、文档上传（通过 Uppy 组件，支持拖拽）
- MIME 类型白名单校验
- 文件大小限制可配置（默认图片和音频各 20MB）
- 自动提取图片尺寸信息
- 可选智能压缩（WebP/JPEG，见"图片智能压缩"）
- S3 模式下支持**预签名 URL 直传**（24 小时有效），绕过服务端中转

**支持的文件类型及分类：**

| 分类 | 扩展名 | 存储子目录 |
| --- | --- | --- |
| `image` | jpg, jpeg, png, gif, webp, svg, avif | `images/` |
| `audio` | mp3, flac, wav, m4a, ogg | `audios/` |
| `video` | mp4, avi, mkv, webm | `videos/` |
| `document` | pdf, doc, docx, markdown | `documents/` |
| `file` | 其他 | `files/` |

**管理功能：**
- 目录树浏览（懒加载）
- 文件元数据编辑（尺寸、Content-Type）
- 外部链接注册为文件（`external` 存储类型，仅记录 URL 不下载）
- 文件流式预览/下载
- 孤儿文件自动清理（创建超过 24 小时且未被任何 Echo 引用的文件）

### 存储架构 (VireFS)

Ech0 使用自研的 **VireFS** 统一存储抽象层：

```
VireFS
├── Local Storage（本地文件系统）
├── Object Storage（S3 兼容）
│   ├── AWS S3
│   ├── Cloudflare R2
│   ├── MinIO
│   └── 其他 S3 兼容服务
└── External（外部 URL 引用）
```

> 后端定义了 6 种 S3 提供商（aws、aliyun、tencent、minio、r2、other），前端 UI 当前启用 4 种：AWS、MinIO、Cloudflare R2、Other。

- **本地模式**：文件存储在 `ECH0_STORAGE_DATA_ROOT`（默认 `data/files`）下，按类型自动分目录
- **对象存储模式**：启用 `ECH0_OBJECT_ENABLED=true` 后使用 S3 配置，支持 CDN 加速和路径前缀
- **外部模式**：仅记录 URL 引用，不下载文件到本地

文件 Key 通过 VireFS Schema 自动路由到对应子目录（`images/`、`audios/`、`videos/` 等）。

### 认证体系

Ech0 支持三种认证方式，可同时启用：

#### 本地认证（用户名/密码）
- 支持注册和登录
- 密码使用 MD5 哈希存储（`UserLocalAuth` 表）
- 可通过 `ECH0_SETTING_ALLOW_REGISTER` 控制是否开放注册
- JWT Token 认证，可配置有效期（默认 30 天）

#### OAuth2 / OIDC
- **内置提供商**：GitHub、Google、QQ
- **自定义提供商**：支持任意 OAuth2 或 OIDC 提供商
- **OIDC 增强**：支持 `id_token` 标准化验证（签名、iss、aud、exp、nonce 强校验防回放攻击）
- **账号绑定**：已登录用户可将 OAuth 身份绑定到现有账号
- **回跳安全**：OAuth 回跳 URL 走 `ECH0_AUTH_REDIRECT_ALLOWED_RETURN_URLS` 白名单校验
- **状态管理**：State 参数包含 action（login/bind）、nonce（CSRF）、redirect、expiration

配置项通过 `系统设置 → SSO → OAuth2` 界面管理，包含：Provider、ClientID、ClientSecret、AuthURL、TokenURL、UserInfoURL、Scopes、OIDC Issuer/JWKS 等。

#### Passkey / WebAuthn（无密码登录）
- 基于 FIDO2/WebAuthn 标准（使用 `go-webauthn/webauthn` 库）
- 支持生物识别（指纹、面容）或硬件安全密钥
- 支持 Discoverable Credentials（Resident Keys）
- 支持多设备管理：注册、列表、重命名、删除
- 签名计数器（SignCount）验证防止凭证克隆

配置步骤：在 `系统设置 → SSO → Passkey` 中设置 `WebAuthn RP ID`（通常为域名）和 `WebAuthn Origins`（站点完整 URL），保存后按浏览器提示绑定设备。

#### 权限模型

| 角色 | 权限 |
| --- | --- |
| **Owner** | 最高权限：管理系统设置、创建/删除管理员、管理所有用户、发布内容 |
| **Admin** | 管理内容、评论、文件、设置（部分），发布内容 |
| **User** | 管理自己的 Echo 和文件 |
| **Guest** | 浏览公开内容、点赞、评论（如已开启） |

### Webhook 事件推送

当系统内发生关键事件时，Ech0 会通过 HTTP POST 推送 JSON 到你配置的 URL。

**支持的事件主题（白名单）：**

| Topic | 触发时机 |
| --- | --- |
| `user.created` | 新用户注册 |
| `user.updated` | 用户信息更新 |
| `user.deleted` | 用户被删除 |
| `echo.created` | 新 Echo 发布 |
| `echo.updated` | Echo 内容更新 |
| `echo.deleted` | Echo 被删除 |
| `comment.created` | 新评论发表 |
| `comment.status.updated` | 评论审核状态变更 |
| `comment.deleted` | 评论被删除 |
| `resource.uploaded` | 文件上传完成 |
| `system.backup` | 备份执行 |
| `system.export` | 数据导出 |
| `system.backup_schedule.updated` | 备份计划变更 |
| `inbox.clear` | 收件箱清空 |
| `ech0.update.check` | 版本更新检查 |

**请求格式：**

```
Method: POST
Content-Type: application/json
User-Agent: Ech0-Webhook-Client
X-Ech0-Event: echo.created          # 事件 topic
X-Ech0-Event-ID: 1710000000000000   # 事件 ID（纳秒时间戳）
X-Ech0-Timestamp: 1710000000        # Unix 秒级时间戳（UTC）
X-Ech0-Signature: sha256=<hex>      # HMAC-SHA256 签名（仅配置 secret 时）

Body:
{
  "topic": "echo.created",
  "event_name": "EchoCreatedEvent",
  "payload_raw": { ... },
  "metadata": { ... },
  "occurred_at": 1710000000
}
```

**签名算法**：`HMAC_SHA256(secret, rawBodyBytes)`

**投递机制：**
- 即时重试：指数退避，最多 3 次（500ms → 1s → 2s），请求超时 5 秒
- 死信队列：重试仍失败的事件进入死信，初始 6 小时后重试，后台每 5 分钟扫描
- 成功判定：接收端返回 HTTP 2xx
- 状态追踪：每次投递更新 `last_status`（success/failed）和 `last_trigger`

**URL 安全校验（防 SSRF）：**
- 必须为 `http://` 或 `https://`
- 禁止 `localhost`、`.local` 域名
- 禁止内网/环回/链路本地 IP（`127.*`、`10.*`、`192.168.*` 等）

在 `系统设置 → Webhook` 中管理，支持创建、编辑、启停、测试、删除。

### 访问令牌 (Access Token)

支持生成 API Access Token 用于第三方集成或自动化调用：

| 有效期选项 | 标识 | 说明 |
| --- | --- | --- |
| 8 小时 | `8_hours` | 短期临时令牌 |
| 1 个月 | `1_month` | 中期令牌 |
| 永不过期 | `never` | 长期令牌（`Expiry` 字段为 NULL） |

- 每个令牌有唯一 Token 值和名称
- 支持随时吊销（删除）
- 在 `系统设置 → 访问令牌` 中管理

### 数据备份与导出

**备份方式：**
- **Web 界面**：一键导出 ZIP 备份包
- **CLI 命令**：`ech0 backup`
- **TUI 界面**：菜单中选择"执行备份"
- **定时自动备份**：支持 Cron 表达式配置（`系统设置 → 备份计划`）

**备份内容：**
- 完整 SQLite 数据库
- 文件资源
- 备份文件名格式：`ech0-<timestamp>.zip`
- 存储位置：`data/files/backups/`

**导出端点**：`GET /api/backup/export?token=<jwt>`，返回 ZIP 文件流，附带 Content-Length、Cache-Control 和 Accept-Ranges 头。

### 数据迁移

支持从以下来源导入数据：

| 来源类型 | 标识 | 说明 |
| --- | --- | --- |
| Ech0 v4 | `ech0_v4` | 从其他 Ech0 v4 实例迁移 |
| Ech0 v3 | `ech0_v3` | 从旧版 Ech0 迁移 |
| Memos | `memos` | 从 Memos 平台迁移 |

**迁移流程（6 个阶段）：**
1. `extracting` — 上传并解压 ZIP 源数据
2. `transforming` — 数据格式转换
3. `validating` — 数据校验
4. `loading` — 写入数据库
5. `reporting` — 生成迁移报告
6. `completed` — 迁移完成

**状态机**：`idle` → `pending` → `running` → `success` / `failed` / `cancelled`

**安全机制：**
- 迁移期间启用全局写锁（WriteGuard），防止数据竞争
- 数据库锁冲突时自动指数退避重试（最多 20 次）
- 支持中途取消和清理临时文件
- 迁移完成后可选择性应用源实例的设置（系统设置、评论设置、S3 配置、OAuth2 配置）

### RSS 订阅

访问 `/rss` 获取 Atom 格式的 RSS Feed。

- 包含所有公开 Echo
- 每条 Feed Item 包含作者、时间戳和直链
- 支持任意 RSS 阅读器订阅
- 基于 `gorilla/feeds` 生成

### AI Agent 摘要

Ech0 集成了 LLM Agent 功能，可自动生成近期内容摘要。

**支持的 LLM 提供商（7 种）：**

| 提供商标识 | 说明 |
| --- | --- |
| `openai` | OpenAI GPT 系列 |
| `deepseek` | DeepSeek 系列 |
| `anthropic` | Anthropic Claude 系列 |
| `gemini` | Google Gemini |
| `qwen` | Qwen（通义千问） |
| `ollama` | 本地部署的开源模型 |
| `custom` | 自定义 OpenAI 兼容 API（兜底方案） |

**配置项**（通过 `系统设置 → Agent`）：
- Enable：是否启用
- Provider：LLM 提供商标识
- Model：模型名称
- ApiKey：API 密钥
- BaseURL：自定义 API 端点（Ollama 或 Custom 提供商必填）
- Prompt：自定义系统提示词

**运行机制：**
- 从最近的 Echo 中构建上下文
- 使用 CloudWeGo Eino 框架调用 LLM
- 单次缓存（Single-Flight 模式），避免重复生成
- 结果通过 `/api/agent/recent` 公开访问

### 系统日志控制台

内建 Web 实时日志控制台：

- **SSE 推流**：`GET /api/system/logs/stream`（Server-Sent Events）
- **WebSocket**：`WS /ws/system/logs`
- **历史查询**：`GET /api/system/logs`，支持按级别和关键词过滤
- **Keep-Alive**：SSE 连接每 15 秒发送心跳
- 日志基于 Zap 结构化日志引擎，支持 JSON 和 Console 两种格式

### Hub 联邦内容聚合

Hub 是 Ech0 的联邦内容聚合功能，可从多个 Ech0 实例拉取并合并展示 Echo 内容。

**工作原理：**
- 每个 Hub 实例拥有独立的分页状态和缓冲区（`HubState`）
- 去重策略：使用 `${hub_url}-${echo_id}` 格式的虚拟 Key，通过 `Set<string>` 保证全局唯一
- 缓冲合并：各实例独立缓冲，按 `createdTs` 降序排列，合并时选取时间戳最大的条目优先展示
- 预加载优化：当缓冲区剩余不足 3 条时，异步触发下一页数据预取，不阻塞主合并循环
- 超时控制：每个 Hub 请求 5 秒超时
- 自动离线移除：使用 `Promise.allSettled()` 处理请求，失败的实例自动从列表中移除

**与 Connect 的关系：**
- Connect 是实例互联的配置管理（添加/删除实例 URL）
- Hub 是基于 Connect 数据的内容聚合展示层

### Connect 实例互联

Connect 功能允许多个 Ech0 实例互联，聚合展示不同实例的内容。

**工作原理：**
- 添加其他实例的 URL 后，后端会定期通过 HTTP 请求获取各实例信息
- 每个实例返回：ServerName、ServerURL、Logo、TotalEchos、TodayEchos、SysUsername、Version
- 不可达的实例自动过滤，只返回有效实例数据
- 重试机制：3 次尝试，指数退避（1s → 2s → 4s），单次超时 3 秒，总超时 20 秒
- 自动去重（防止同一 URL 重复出现）

**前提条件**：需在 `系统设置 → 服务地址` 中正确填写自身实例 URL（含 `http://` 或 `https://`），否则其他实例无法获取你的头像等信息。

### 通知收件箱 (Inbox)

内建通知系统：

| 消息来源 | 标识 | 说明 |
| --- | --- | --- |
| 系统通知 | `system` | 版本更新、备份完成等系统事件 |
| 用户通知 | `user` | 互动相关通知 |
| Agent 通知 | `agent` | AI 摘要生成完成 |

- 支持已读/未读状态和未读计数
- 支持阅读次数追踪（`ReadCount`）
- 支持单条删除和全部清空
- 支持关键词搜索
- 分页查询（`page` + `pageSize`）

### 活跃度热力图 (Heatmap)

`GET /api/heatmap` 返回类似 GitHub Contribution Graph 的活跃度数据。

- **展示范围**：最近 30 天
- **网格布局**：3 行 × 10 列
- **颜色强度**（5 级）：
  - 0 条：背景色（空白）
  - 1 条：accent 30% 混合
  - 2 条：accent 52% 混合
  - 3 条：accent 62% 混合
  - 4+ 条：accent 78% 混合（最深）
- 使用 `color-mix(in oklab, ...)` 进行颜色混合，适配亮色/暗色主题
- 鼠标悬停显示日期和发布数量的 Tooltip（自动判断上/下方向避免溢出）

### Widget 小组件视图

`/widget` 路由提供一个独立的小组件视图页面，以衬线字体标题 "Ech0 Widget" 展示：

- 活跃度热力图（30 天）
- 近期内容卡片（若启用 Agent 则包含 AI 摘要）
- 已连接的 Hub/实例列表

适合嵌入到其他页面或作为独立信息面板使用。

### PWA 支持

Ech0 支持安装为 Progressive Web App，通过浏览器"添加到主屏幕"获得接近原生应用的使用体验。

**Manifest 配置**（`app.webmanifest`）：
- 显示模式：`standalone`
- 图标尺寸：16×16、32×32、180×180、192×192、512×512 及 favicon.ico
- 包含桌面端（1548×971）和移动端（640×1136）两张截图
- 主题色：`#f4f1ec`

### i18n 多语言

- **支持语言**：`zh-CN`（简体中文）、`en-US`（英语）
- **语言协商顺序**（优先级递减）：
  1. 请求参数 `lang` 或 `X-Locale` 请求头
  2. 用户个人设置（`user.locale`）
  3. 系统默认语言（`system_settings.default_locale`）
  4. `Accept-Language` 请求头
  5. 回退语言（`zh-CN`）
- **前端**：vue-i18n，语言包位于 `web/src/locales/messages/`
- **后端**：go-i18n，响应支持 `error_code` + `message_key` + `message_params` 结构
- **时区感知**：每个请求通过 `X-Timezone` 头传递用户本地时区（`Intl.DateTimeFormat().resolvedOptions().timeZone`），后端据此计算"今日"等时间相关逻辑

### 主题与深色模式

- 支持三态切换：`system`（跟随系统）→ `light`（亮色）→ `dark`（暗色）→ 循环
- 基于 Token 分层的主题系统：`foundation`（原子）→ `semantic`（语义）→ `component`（组件）
- Token 文件位于 `web/src/themes/tokens/`
- **View Transitions API 圆形揭示动画**：切换主题时以点击位置为圆心，通过 `clip-path: circle()` 展开动画（500ms，`cubic-bezier(0.4, 0, 0.2, 1)`），不支持该 API 的浏览器自动降级为即时切换
- 检测 `prefers-reduced-motion`，若用户偏好减少动画则跳过过渡
- 详见 `web/src/themes/TOKEN_GUIDE.md`

### 自定义 CSS / JS

通过环境变量或系统设置注入：
- `ECH0_SETTING_CUSTOM_CSS`：注入全局自定义样式
- `ECH0_SETTING_CUSTOM_JS`：注入全局自定义脚本

可用于微调界面风格、添加统计代码等。

---

## CLI 与 TUI

### CLI 命令

Ech0 基于 Cobra 提供以下命令：

```
ech0                # 默认启动 TUI 交互界面
ech0 serve          # 启动 Web 服务（前台阻塞）
ech0 web            # serve 的别名（已废弃）
ech0 tui            # 启动 TUI 交互界面
ech0 backup         # 执行备份（生成 ZIP 到 data/files/backups/）
ech0 version        # 显示版本信息
ech0 info           # 显示系统信息
ech0 hello          # 显示 Ech0 ASCII Logo
```

### TUI 终端交互界面

基于 charmbracelet/huh 构建的终端交互界面，适合 SSH 连接的服务器环境：

```
┌─────────────────────────┐
│  🚀 启动 Web 服务        │
│  🦖 查看信息             │
│  📦 执行备份             │
│  📌 查看版本             │
│  ❌ 退出                 │
└─────────────────────────┘
```

- 启动 Web 服务前会自动检测端口是否被占用
- 如果服务已在其他进程运行，菜单会显示"服务已在其他进程中运行"

---

## API 参考

### 通用约定

**基础 URL**：`http://<host>:6277/api`

**认证方式**：在请求头中携带 JWT Token：
```
Authorization: Bearer <token>
```

**统一响应格式**：
```json
{
  "code": 1,          // 1 成功，0 失败
  "data": { ... },    // 响应数据
  "msg": "ok",        // 消息
  "error_code": "",   // 错误码（可选，用于 i18n）
  "message_key": "",  // 翻译 key（可选）
  "message_params": {} // 翻译参数（可选）
}
```

**中间件链**：Recovery → CORS → i18n → WriteGuard → [JWT Auth]（受保护端点）

### 初始化

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/init/status` | - | 检查系统是否已初始化 |
| POST | `/init/owner` | - | 创建初始 Owner 账号（仅首次可用） |

### 用户认证 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| POST | `/login` | - | 用户名/密码登录，返回 JWT Token |
| POST | `/register` | - | 注册新用户（需系统允许注册） |
| GET | `/allusers` | - | 获取所有用户列表（公开） |
| GET | `/user` | ✓ | 获取当前登录用户信息 |
| PUT | `/user` | ✓ | 更新用户资料（用户名、头像、语言偏好） |
| DELETE | `/user/:id` | ✓ | 删除用户（仅 Owner，不可删除自己） |
| PUT | `/user/admin/:id` | ✓ | 切换用户管理员角色（仅 Owner） |

### OAuth2 / OIDC API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/oauth/:provider/login` | - | 发起 OAuth 登录，重定向到提供商 |
| GET | `/oauth/:provider/callback` | - | OAuth 回调处理 |
| POST | `/oauth/:provider/bind` | ✓ | 将 OAuth 身份绑定到当前账号 |
| GET | `/oauth/info` | ✓ | 获取当前用户的 OAuth 绑定信息 |
| GET | `/oauth2/status` | - | 检查 OAuth2 是否启用（公开） |
| GET | `/oauth2/settings` | ✓ | 获取 OAuth2 配置（管理员） |
| PUT | `/oauth2/settings` | ✓ | 更新 OAuth2 配置（管理员） |

### Passkey / WebAuthn API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| POST | `/passkey/login/begin` | - | 开始 Passkey 登录挑战 |
| POST | `/passkey/login/finish` | - | 完成 Passkey 登录验证 |
| POST | `/passkey/register/begin` | ✓ | 开始注册新 Passkey |
| POST | `/passkey/register/finish` | ✓ | 完成 Passkey 注册 |
| GET | `/passkeys` | ✓ | 列出用户所有 Passkey |
| PUT | `/passkeys/:id` | ✓ | 重命名 Passkey 设备名称 |
| DELETE | `/passkeys/:id` | ✓ | 删除 Passkey |
| GET | `/passkey/status` | - | 检查 WebAuthn 是否启用（公开） |
| GET | `/passkey/settings` | ✓ | 获取 Passkey 配置（管理员） |
| PUT | `/passkey/settings` | ✓ | 更新 Passkey 配置（管理员） |

### Echo 管理 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| POST | `/echo` | ✓ | 创建新 Echo |
| GET | `/echo/page?page=1&pageSize=20` | ✓ | 分页获取 Echo 列表 |
| POST | `/echo/page` | ✓ | 分页获取 Echo 列表（POST 变体） |
| GET | `/echo/:id` | ✓ | 获取指定 Echo 详情 |
| PUT | `/echo` | ✓ | 更新 Echo（需传 ID） |
| DELETE | `/echo/:id` | ✓ | 删除 Echo（级联删除关联文件） |
| GET | `/echo/today` | ✓ | 获取今日 Echo |
| PUT | `/echo/like/:id` | - | 点赞 Echo（公开，无需登录） |
| GET | `/echo/tag/:tagid` | ✓ | 按标签获取 Echo 列表 |

### 标签 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/tags` | - | 获取所有标签（公开） |
| DELETE | `/tag/:id` | ✓ | 删除标签 |

### 评论 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/comments/form` | - | 获取评论表单元数据（FormToken、CAPTCHA 状态等） |
| GET | `/comments?echo_id=:id` | - | 获取指定 Echo 的评论列表 |
| GET | `/comments/public` | - | 获取最近公开评论 |
| POST | `/comments` | - | 发表评论（含 FormToken 和反垃圾字段） |
| GET | `/panel/comments` | ✓ | 管理面板：评论列表（支持状态过滤） |
| GET | `/panel/comments/:id` | ✓ | 获取评论详情 |
| PATCH | `/panel/comments/:id/status` | ✓ | 更新评论审核状态 |
| PATCH | `/panel/comments/:id/hot` | ✓ | 标记/取消热评 |
| DELETE | `/panel/comments/:id` | ✓ | 删除评论 |
| POST | `/panel/comments/batch` | ✓ | 批量操作（审核通过/拒绝/删除） |
| GET | `/panel/comments/settings` | ✓ | 获取评论设置 |
| PUT | `/panel/comments/settings` | ✓ | 更新评论设置 |

### 文件管理 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| POST | `/files/upload` | ✓ | 上传文件（multipart/form-data） |
| GET | `/files?page=1&pageSize=20` | ✓ | 分页文件列表（支持 search、storageType 过滤） |
| GET | `/file/tree?storageType=local&prefix=` | ✓ | 文件目录树（懒加载） |
| GET | `/file/:id` | ✓ | 获取文件元数据 |
| GET | `/file/:id/stream` | ✓ | 通过 ID 流式读取文件内容 |
| GET | `/file/stream?key=` | ✓ | 通过存储 Key 流式读取文件 |
| PUT | `/file/:id/meta` | ✓ | 更新文件元数据（尺寸/Content-Type） |
| POST | `/files/external` | ✓ | 注册外部 URL 为文件记录 |
| DELETE | `/file/:id` | ✓ | 删除文件（同时删除存储） |
| PUT | `/files/presign` | ✓ | 获取 S3 预签名上传 URL（24h 有效） |

### 系统设置 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/settings` | - | 获取站点公开设置（公开） |
| PUT | `/settings` | ✓ | 更新站点设置（管理员） |
| GET | `/s3/settings` | ✓ | 获取 S3 存储配置 |
| PUT | `/s3/settings` | ✓ | 更新 S3 存储配置（变更后自动重载存储管理器） |

### Webhook 管理 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/webhook` | ✓ | 获取 Webhook 列表 |
| POST | `/webhook` | ✓ | 创建 Webhook（name、url、secret、is_active） |
| PUT | `/webhook/:id` | ✓ | 更新 Webhook |
| DELETE | `/webhook/:id` | ✓ | 删除 Webhook |
| POST | `/webhook/:id/test` | ✓ | 测试 Webhook 连通性（发送 `webhook.test` 事件） |

### 访问令牌 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/access-tokens` | ✓ | 列出所有访问令牌 |
| POST | `/access-tokens` | ✓ | 创建访问令牌（name、expiry_option） |
| DELETE | `/access-tokens/:id` | ✓ | 吊销访问令牌 |

### 备份与迁移 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/backup/export?token=<jwt>` | - | 下载备份 ZIP 文件 |
| GET | `/backup/schedule` | ✓ | 获取备份计划配置 |
| POST | `/backup/schedule` | ✓ | 更新备份计划（enable、cron_expression） |
| POST | `/migration/upload` | ✓ | 上传迁移数据源 ZIP |
| POST | `/migration/start` | ✓ | 开始迁移（source_type、source_payload） |
| GET | `/migration/status` | ✓ | 获取迁移状态和进度 |
| POST | `/migration/cancel` | ✓ | 取消正在进行的迁移 |
| POST | `/migration/cleanup` | ✓ | 清理迁移临时文件 |

### Agent API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/agent/recent` | - | 获取 AI 生成的近期内容摘要（公开） |
| GET | `/agent/info` | - | 获取 Agent 状态（是否启用等） |
| GET | `/agent/settings` | ✓ | 获取 Agent LLM 配置 |
| PUT | `/agent/settings` | ✓ | 更新 Agent 配置 |

### 收件箱 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/inbox?page=1&pageSize=20` | ✓ | 分页获取收件箱消息 |
| GET | `/inbox/unread` | ✓ | 获取未读消息列表 |
| PUT | `/inbox/:id/read` | ✓ | 标记消息为已读 |
| DELETE | `/inbox/:id` | ✓ | 删除单条消息 |
| DELETE | `/inbox` | ✓ | 清空所有消息 |

### Connect 互联 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/connect` | - | 获取当前实例公开信息（公开） |
| GET | `/connect/list` | - | 获取已连接的实例 URL 列表（公开） |
| GET | `/connects/info` | - | 获取所有已连接实例的详细信息（公开） |
| POST | `/addConnect` | ✓ | 添加实例连接 |
| DELETE | `/delConnect/:id` | ✓ | 删除实例连接 |

### Dashboard 与日志 API

| 方法 | 路径 | 认证 | 说明 |
| --- | --- | --- | --- |
| GET | `/system/logs?level=&keyword=` | ✓ | 获取历史日志（支持按级别和关键词过滤） |
| GET | `/system/logs/stream` | ✓ | SSE 实时日志流 |
| WS | `/ws/system/logs` | ✓ | WebSocket 实时日志流 |

### 公共端点 API

| 方法 | 路径 | 说明 |
| --- | --- | --- |
| GET | `/healthz` | 健康检查 |
| GET | `/rss` | RSS Feed（Atom 格式） |
| GET | `/heatmap` | 活跃度热力图数据 |
| GET | `/hello` | API 信息与版本号 |
| GET | `/website/title?url=` | 解析网页标题 |
| GET | `/swagger/*any` | Swagger UI API 文档 |
| GET | `/files/*filepath` | 静态文件服务（上传的文件） |

---

## 开发指南

### 技术栈

**后端（Go 1.26+）：**
| 库 | 用途 |
| --- | --- |
| gin-gonic/gin | HTTP 框架 |
| gorm.io/gorm + driver/sqlite | ORM 与 SQLite 驱动 |
| google/wire | 编译时依赖注入 |
| spf13/cobra | CLI 命令行框架 |
| charmbracelet/huh | TUI 终端交互界面 |
| golang-jwt/jwt | JWT Token 签发与验证 |
| go-webauthn/webauthn | Passkey/WebAuthn |
| coreos/go-oidc | OIDC 身份验证 |
| golang.org/x/oauth2 | OAuth2 授权码流程 |
| lin-snow/Busen | 事件总线（typed-first in-process） |
| lin-snow/VireFS | 统一存储抽象层 |
| cloudwego/eino | LLM Agent 集成框架 |
| gorilla/websocket | WebSocket 支持 |
| gorilla/feeds | RSS Feed 生成 |
| go-co-op/gocron | 定时任务调度 |
| swaggo/gin-swagger | Swagger API 文档 |
| uber-go/zap | 结构化日志 |
| ristretto | 缓存层 |

**前端（Node.js 25+ / pnpm 10+）：**
| 库 | 用途 |
| --- | --- |
| Vue 3 + TypeScript | UI 框架 |
| Vite | 构建工具 |
| Pinia | 状态管理（13 个 Store） |
| Vue Router | 路由 |
| vue-i18n | 国际化 |
| UnoCSS | 原子化 CSS |
| markdown-it + highlight.js | Markdown 渲染与代码高亮 |
| Vditor | Markdown 编辑器 |
| @uppy/* | 文件上传组件（支持 S3 直传） |
| GSAP | 动画库 |
| @headlessui/vue | 无样式 UI 组件 |
| @fancyapps/ui | 图片灯箱 |
| vue-virtual-scroller | 虚拟滚动 |
| APlayer | 音乐播放器 |
| @dicebear/* | 随机头像生成 |
| vue-sonner | Toast 通知 |

### 后端环境要求

**Go 1.26.0+**

**C 编译器**（CGO 依赖，如 go-sqlite3）：
- Windows：安装 [MinGW-w64](https://winlibs.com/)，将 `bin` 目录加入 `PATH`
- macOS：`brew install gcc`
- Linux：`sudo apt install build-essential`

**Google Wire**（依赖注入代码生成）：
```shell
go install github.com/google/wire/cmd/wire@latest
```

**Golangci-Lint**（代码检查与格式化，配置见 `.golangci.yaml`）：
```shell
golangci-lint run   # 检查
golangci-lint fmt   # 格式化（gci, gofmt, gofumpt, goimports）
```

**Air**（后端热重载，可选，配置见 `.air.toml`）：
```shell
make air-install
# 或
go install github.com/air-verse/air@latest
```

**Swagger**（API 文档生成）：
```shell
swag init -g internal/server/server.go -o internal/swagger
```

### 前端环境要求

- **Node.js** v25.5.0+
- **pnpm** v10.30.0+

> 多版本管理推荐使用 [fnm](https://github.com/Schniz/fnm)

**前端脚本命令：**
```shell
pnpm dev              # Vite 开发服务器
pnpm build            # 类型检查 + 生产构建
pnpm build-only       # 仅构建（跳过类型检查）
pnpm type-check       # Vue TypeScript 类型检查
pnpm lint             # ESLint 检查与修复
pnpm format           # Prettier 格式化
pnpm token:check      # 检查禁用 Token 是否回流
pnpm i18n:key-check   # 验证 i18n key 对齐
pnpm i18n:hardcoded-check  # 检测硬编码文案
pnpm i18n:pseudo-smoke     # 伪本地化冒烟测试
pnpm i18n:check       # 运行所有 i18n 检查
```

### 启动开发环境

**第一步：启动后端**（项目根目录）

```shell
make run   # 普通启动（等价于 go run ./cmd/ech0 serve）
make dev   # Air 热重载模式（监听 .go/.yaml/.yml/.toml/.json 文件变更）
```

> Air 热重载排除目录：tmp/、web/、data/、backup/、template/、node_modules/、.git/

**第二步：启动前端**（新终端）

```shell
cd web
pnpm install   # 首次或依赖变更时
pnpm dev       # 启动 Vite 开发服务器
# 或在根目录：make web-dev
```

**第三步：访问**

- 前端预览：`http://localhost:5173`
- 后端 API：`http://localhost:6277`
- Swagger 文档：`http://localhost:6277/swagger/index.html`

> 前后端分离开发时，需配置 `ECH0_WEB_CORS_ALLOWED_ORIGINS` 以允许跨域请求。

### Makefile 命令

| 命令 | 说明 |
| --- | --- |
| `make run` | 启动后端服务（`go run ./cmd/ech0 serve`） |
| `make dev` | Air 热重载启动后端（自动安装 Air） |
| `make web-dev` | 启动前端 Vite 开发服务器 |
| `make lint` | 运行 golangci-lint 检查 |
| `make fmt` | 运行 golangci-lint 格式化 |
| `make test` | 运行 Go 测试 |
| `make wire` | 重新生成依赖注入代码（`go generate ./internal/di`） |
| `make wire-check` | 校验 Wire 生成代码是否最新 |
| `make build-image` | 构建 Docker 镜像（支持多平台） |
| `make push-image` | 推送 Docker 镜像到仓库 |
| `make air-install` | 安装 Air 到 GOPATH/bin |
| `make help` | 查看所有命令说明 |

**构建变量**：`DOCKER_REGISTRY`（默认 sn0wl1n）、`IMAGE_NAME`（默认 ech0）、`IMAGE_TAG`（默认 latest）。

### 项目架构

```
请求 → Gin Router → Middleware → Handler → Service → Repository → Database (SQLite)
                                                    ↘ VireFS (Storage)
                                                    ↘ Busen (Event Bus) → Webhook / Inbox / Agent
```

**核心设计模式：**
- **分层架构**：Handler（HTTP）→ Service（业务）→ Repository（数据）→ Database
- **依赖注入**：Google Wire 编译时 DI
- **事件驱动**：Busen 事件总线解耦模块通信
- **存储抽象**：VireFS 统一本地/S3 文件操作
- **组件生命周期**：有序启动/关闭编排，失败自动回滚，信号处理优雅退出

### 目录结构

```
Ech0/
├── cmd/ech0/              # 入口 & CLI 命令
│   ├── main.go            #   应用启动入口（Bootstrap → CLI）
│   ├── serve.go           #   ech0 serve 命令
│   ├── tui.go             #   ech0 tui 命令
│   ├── backup.go          #   ech0 backup 命令
│   ├── version.go         #   ech0 version 命令
│   ├── info.go            #   ech0 info 命令
│   └── hello.go           #   ech0 hello 命令
├── internal/
│   ├── app/               # 应用生命周期（启动/关闭编排、信号处理）
│   ├── bootstrap/         # 启动引导（配置加载、日志初始化、环境变量）
│   ├── cli/               # TUI 交互界面实现（charmbracelet/huh）
│   ├── config/            # 配置结构定义与环境变量加载
│   ├── database/          # 数据库初始化与自动迁移（20 张表）
│   ├── di/                # Wire 依赖注入声明与生成
│   ├── handler/           # HTTP Handler（按领域划分）
│   │   ├── echo/          #   Echo CRUD
│   │   ├── user/          #   用户认证、OAuth、Passkey
│   │   ├── comment/       #   评论管理
│   │   ├── file/          #   文件上传与管理
│   │   ├── setting/       #   系统设置、Webhook、Token
│   │   ├── dashboard/     #   日志控制台
│   │   ├── migration/     #   数据迁移
│   │   ├── connect/       #   实例互联
│   │   ├── inbox/         #   收件箱
│   │   ├── agent/         #   AI Agent
│   │   ├── init/          #   系统初始化
│   │   └── common/        #   Heatmap、RSS、备份导出
│   ├── model/             # 数据模型（Echo、User、Comment、File、Setting 等）
│   ├── repository/        # 数据访问层
│   ├── router/            # 路由注册、中间件（CORS、JWT、i18n、WriteGuard）
│   ├── server/            # HTTP Server 启动与配置
│   ├── service/           # 业务逻辑层（11 个领域服务）
│   ├── storage/           # VireFS 存储抽象（Schema、Selector、URL Resolver）
│   ├── event/             # 事件定义（contracts）与发布者
│   ├── swagger/           # Swagger 自动生成文档
│   └── util/              # 工具包（jwt、log、i18n 等）
├── web/                   # Vue 3 前端项目
│   ├── src/
│   │   ├── router/        #   路由定义
│   │   ├── stores/        #   Pinia Store（13 个）
│   │   ├── service/api/   #   API 请求封装（13 个模块）
│   │   ├── locales/       #   i18n 语言包（zh-CN、en-US）
│   │   ├── themes/        #   主题 Token 与样式分层
│   │   ├── components/    #   Vue 组件
│   │   ├── composables/   #   Vue Composables
│   │   ├── editor/        #   编辑器组件
│   │   ├── layout/        #   布局组件
│   │   └── lib/           #   工具库
│   └── scripts/           #   质量检查脚本（Token、i18n）
├── charts/ech0/           # Helm Chart（含 values.yaml、所有 K8s 模板）
├── scripts/               # 安装脚本（ech0.sh）
├── template/              # 前端构建产物目录（编译后嵌入二进制）
├── docs/                  # 开发文档
│   ├── auth-refactor.md   #   OAuth2/OIDC/Passkey 重构说明
│   ├── i18n-contract.md   #   i18n 前后端契约
│   ├── logging.md         #   日志规范
│   ├── table-design-standard.md  # 表格设计标准
│   └── webhook-usage.md   #   Webhook 使用说明
├── Dockerfile             # 生产部署 Dockerfile
├── build.Dockerfile       # 多阶段完整构建（前端 + 后端）
├── docker-compose.yml     # Docker Compose 配置
├── docker-compose.cap.yml # CAP 评论适配器服务
├── Makefile               # 开发命令集
├── .air.toml              # Air 热重载配置
├── .golangci.yaml         # Lint 配置
├── .env.example           # 环境变量示例
├── go.mod / go.sum        # Go 模块
├── CONTRIBUTING.md        # 贡献指南
├── SECURITY.md            # 安全策略
└── CODE_OF_CONDUCT.md     # 行为准则
```

### 分层架构与约定

**包导入 alias 规范**：
```go
import (
    echoModel      "github.com/lin-snow/ech0/internal/model/echo"
    userService    "github.com/lin-snow/ech0/internal/service/user"
    fileHandler    "github.com/lin-snow/ech0/internal/handler/file"
    echoRepository "github.com/lin-snow/ech0/internal/repository/echo"
    logUtil        "github.com/lin-snow/ech0/internal/util/log"
)
```

层级命名：`xxxModel` / `xxxUtil` / `xxxHandler` / `xxxService` / `xxxRepository`

### 依赖注入 (Wire)

项目使用 Google Wire 进行编译时依赖注入：

- **声明文件**：`internal/di/wire.go`
- **生成文件**：`internal/di/wire_gen.go`

**Provider 组：**

| Provider Set | 包含 |
| --- | --- |
| `AppSet` | 应用生命周期组件 |
| `DomainSet` | Handler、Task、Migrator、EventRegistrar |
| `InfraSet` | Database、EventBus、Cache（Ristretto）、Transaction |
| `RuntimeSet` | Server 运行时 |
| `EventGraphSet` | 事件订阅者（Webhook、Inbox、Agent、Scheduler、DeadLetter） |
| `HandlerGraphSet` | HTTP Handler 依赖图 |

```shell
make wire        # 重新生成 wire_gen.go
make wire-check  # 校验生成代码是否与声明一致
```

### 事件总线 (Busen)

Ech0 使用自研的 [Busen](https://github.com/lin-snow/Busen) 事件总线：

- **typed-first in-process 架构**：编译时类型安全
- **显式背压**：缓冲区满时可配置 block 策略
- **Hooks**：支持事件前/后处理钩子
- **Drain Shutdown**：优雅关闭时排空所有待处理事件

**订阅者（Subscriber）：**
- Webhook Dispatcher — 将事件投递到外部 Webhook
- Inbox Collector — 将特定事件写入用户收件箱
- Agent Processor — 触发 AI 摘要更新
- Backup Scheduler — 处理备份计划变更
- Dead Letter Handler — 重试投递失败的事件

### API 文档 (Swagger)

```shell
# 生成或更新 Swagger 文档（在项目根目录执行）
swag init -g internal/server/server.go -o internal/swagger

# 启动后端后访问
http://localhost:6277/swagger/index.html
```

### 数据库 Schema

Ech0 使用 SQLite，启动时通过 GORM AutoMigrate 自动建表（共 20 张表）：

| 表名 | 说明 | 主键 |
| --- | --- | --- |
| `users` | 用户 | UUID v7 |
| `user_local_auths` | 本地密码认证 | UserID |
| `user_external_identities` | OAuth2/OIDC 外部身份 | UUID v7 |
| `web_authn_credentials` | WebAuthn 凭证 | UUID v7 |
| `passkeys` | Passkey 记录 | UUID v7 |
| `oauth_bindings` | OAuth 绑定（遗留） | UUID v7 |
| `echoes` | Echo 内容 | UUID v7 |
| `echo_extensions` | Echo 扩展内容（音乐/视频/项目/链接） | UUID v7 |
| `tags` | 标签 | UUID v7 |
| `echo_tags` | Echo-Tag 多对多关系 | UUID v7 |
| `files` | 文件记录 | UUID v7 |
| `echo_files` | Echo-File 关系（含排序） | UUID v7 |
| `comments` | 评论 | UUID v7 |
| `key_values` | 键值存储（所有系统设置） | Key |
| `connecteds` | 已连接的实例 | UUID v7 |
| `webhooks` | Webhook 配置 | UUID v7 |
| `dead_letters` | 事件死信队列 | UUID v7 |
| `migration_jobs` | 迁移任务 | String |
| `access_token_settings` | 访问令牌 | UUID v7 |
| `inboxes` | 收件箱消息 | UUID v7 |

**KeyValue 存储的 Key 列表：**
`system_settings`、`comment_setting`、`s3_setting`、`oauth2_setting`、`passkey_setting`、`server_url`、`backup_schedule`、`agent_setting`、`release_version`、`install_initialized`、`migration_global_job_state`

### 前端架构

**路由（Vue Router）：**

| 路径 | 说明 |
| --- | --- |
| `/` | 首页（Timeline） |
| `/auth` | 登录/注册 |
| `/init` | Owner 初始化 |
| `/zone/:echoId?` | Echo Timeline / Zone 视图 |
| `/echo/:echoId` | 单条 Echo 详情 |
| `/connect` | 实例互联 |
| `/hub` | Hub 视图 |
| `/widget` | Widget 视图 |
| `/panel` | 管理面板（需认证） |
| `/panel/dashboard` | 仪表板 |
| `/panel/setting` | 系统设置 |
| `/panel/user` | 用户管理 |
| `/panel/storage` | 文件浏览器 |
| `/panel/data-management` | 备份/迁移 |
| `/panel/sso` | OAuth2/Passkey 配置 |
| `/panel/extension` | 扩展管理 |
| `/panel/comment` | 评论审核 |
| `/panel/advance` | 高级设置 |
| `/panel/system-log` | 实时日志 |

**Pinia Store（13 个）：**
init、user、setting、echo、editor、zone、zen、theme、migration、inbox、hub、connect、store-init

**API Service 模块（13 个）：**
auth、user、echo、file、comment、setting、inbox、init、connect、agent、system-log、other

**构建产物**：Vite 构建输出到 `../template/dist`，由后端在编译时嵌入二进制。

### 代码规范

**后端：**
- 日志统一使用 `internal/util/log`（基于 Zap），禁止 `fmt.Print*` 和标准库 `log`
- 错误对象使用 `zap.Error(err)`，不使用 `zap.String("error", err.Error())`
- 日志字段建议：`module`、`user_id`、`path`、`provider`、`error`
- 代码格式化：`golangci-lint fmt`（配置：gci、gofmt、gofumpt、goimports）

**前端：**
- 新增 UI 文案必须通过 `t()` 引用 locale key，禁止硬编码中文/英文
- API 错误展示优先使用服务端返回的 `message_key`
- 主题变量遵循 Token 分层规范（foundation → semantic → component）
- 禁止新增 legacy Token 前缀（详见 `TOKEN_GUIDE.md`）
- Base 组件只使用 `component` Token，业务组件优先使用 `semantic` Token

### Docker 镜像构建

**多阶段构建**（`build.Dockerfile`）：

1. **前端构建阶段**：`node:25-alpine`
   - pnpm install → pnpm build
   - 输出：`/template/dist`

2. **后端构建阶段**：`golang:1.26.1-alpine`
   - CGO_ENABLED=1 静态链接编译
   - 将前端 dist 复制到 `/app/template/dist`
   - 支持交叉编译：`linux/amd64`、`linux/arm64`、`linux/armv7`

3. **最终镜像**：`alpine:latest`
   - 单二进制 + 嵌入前端
   - 镜像约 30-40MB
   - 暴露端口：6277
   - 创建目录：`/app/data`、`/app/backup`、`/app/template`

**构建命令：**
```shell
make build-image                                    # 本平台构建
make build-image ARCH=arm64                         # 交叉编译 arm64
make build-image DOCKER_REGISTRY=myrepo IMAGE_TAG=v1.0  # 自定义仓库和标签
```

---

## 常见问题

**Ech0 是什么？**
Ech0 是轻量级开源自托管发布平台，核心定位类似朋友圈/说说，而非 Obsidian、Notion 等专业笔记工具。

**Ech0 是免费的吗？**
完全免费且开源，遵循 AGPL-3.0 协议。无广告、无追踪、无订阅。

**系统支持多少用户？**
默认最多 5 个用户账号。首个注册用户自动成为 Owner。

**为什么发布失败提示联系管理员？**
只有管理员（Admin/Owner）可发布内容。Owner 可在用户管理中为其他用户分配管理员权限。

**如何备份数据？**
所有数据存储在 SQLite 文件 `data/ech0.db` 中。可通过以下方式备份：
- 直接复制 `data/` 目录
- Web 界面"快照导出"
- CLI：`ech0 backup`
- 配置定时自动备份（Cron 表达式）

**如何从其他平台迁移？**
支持从 Ech0 v3、Ech0 v4、Memos 迁移。在管理面板 → 数据管理中上传导出的 ZIP 文件并启动迁移。v3 用户需先在 v3 面板导出快照。

**Connect 头像不显示？**
在 `系统设置 → 服务地址` 中填写完整的实例 URL（含协议，如 `https://memo.vaaat.com`）。

**MetingAPI 是什么？**
用于解析音乐流媒体直链的 API 服务，用于音乐卡片功能。不配置则使用 Ech0 默认 API（部署于 Vercel）。

**S3 存储如何配置？**
在存储设置中填入配置。注意：endpoint 不含 `http://` 前缀，存储桶需配置公共访问权限。支持 AWS S3、Cloudflare R2、MinIO。

**如何启用 Passkey？**
`SSO → Passkey` 中配置 `WebAuthn RP ID`（域名）和 `WebAuthn Origins`（站点完整 URL），保存显示"Passkey 就绪"后绑定设备。

**如何调用 API？**
通过 `系统设置 → 访问令牌` 生成 Token，在请求头中携带 `Authorization: Bearer <token>`。完整接口文档见 `/swagger/index.html`。

**Ech0 不建议发什么？**
不建议同时包含 `文字 + 图片 + 扩展内容` 的密集帖子，也不推荐发布长篇文章或大量扩展内容。

**如何开启评论？**
`系统设置 → 评论设置` 中启用内建评论功能即可。可选配置是否需要审核、是否启用验证码。无需任何第三方服务。

---

## 社区与反馈

- Bug 反馈：[GitHub Issues](https://github.com/lin-snow/Ech0/issues)
- 功能建议：[GitHub Discussions](https://github.com/lin-snow/Ech0/discussions)
- 安全漏洞：请通过 [GitHub Security Advisories](https://github.com/lin-snow/Ech0/security/advisories/new) 私密报告
- 贡献代码：请阅读 [CONTRIBUTING.md](https://github.com/lin-snow/Ech0/blob/main/CONTRIBUTING.md)
- 官方 QQ 群：`1065435773`

---

## 开源协议

Ech0 基于 [AGPL-3.0](https://github.com/lin-snow/Ech0/blob/main/LICENSE) 协议发布。

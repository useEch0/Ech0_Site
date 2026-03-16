<p align="left">
  <a href="https://hellogithub.com/repository/lin-snow/Ech0" target="_blank">
    <img src="https://api.hellogithub.com/v1/widgets/recommend.svg?rid=8f3cafdd6ef3445dbb1c0ed6dd34c8b5&claim_uid=swhbQfnJvKS0t7I&theme=neutral"
         alt="Featured｜HelloGitHub"
         width="250"
         height="54" />
  </a>
</p>

<p align="right">
  <a title="en-US" href="./README.md">
    <img src="https://img.shields.io/badge/-English-545759?style=for-the-badge" alt="English">
  </a>
  <img src="https://img.shields.io/badge/-简体中文-F54A00?style=for-the-badge" alt="简体中文">
</p>


<div align="center">
  <img alt="Ech0" src="./docs/imgs/logo.svg" width="150">

  [预览地址](https://memo.vaaat.com/) | [官网与文档](https://www.ech0.app/) | [Ech0 Hub](https://hub.ech0.app/)

  # Ech0
</div>

<div align="center">

[![GitHub release](https://img.shields.io/github/v/release/lin-snow/Ech0)](https://github.com/lin-snow/Ech0/releases) ![License](https://img.shields.io/github/license/lin-snow/Ech0) [![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/lin-snow/Ech0) [![Hello Github](https://api.hellogithub.com/v1/widgets/recommend.svg?rid=8f3cafdd6ef3445dbb1c0ed6dd34c8b5&claim_uid=swhbQfnJvKS0t7I&theme=small)](https://hellogithub.com/repository/lin-snow/Ech0)

</div>



> 面向个人的新一代开源、自托管、专注思想流动的轻量级发布平台。

Ech0 是一款专为个人用户设计的新一代开源自托管平台，低成本、超轻量，让你轻松发布和分享想法、文字与链接。简洁直观的界面结合高效的命令行工具，让内容管理变得简单而自由。你的数据完全自主可控。

![界面预览](./docs/imgs/screenshot.png)

---

<details>
   <summary><strong>目录</strong></summary>

- [Ech0](#ech0)
  - [产品亮点](#产品亮点)
  - [极速部署](#极速部署)
    - [🐳 Docker 部署（推荐）](#-docker-部署推荐)
    - [🐋 Docker Compose](#-docker-compose)
    - [☸️ Kubernetes (Helm)](#️-kubernetes-helm)
  - [版本更新](#版本更新)
    - [🔄 Docker](#-docker)
    - [💎 Docker Compose](#-docker-compose-1)
    - [☸️ Kubernetes (Helm)](#️-kubernetes-helm-1)
  - [常见问题](#常见问题)
  - [反馈与社区](#反馈与社区)
- [开源治理](#开源治理)
  - [项目架构](#项目架构)
  - [开发指南](#开发指南)
    - [后端环境要求](#后端环境要求)
    - [前端环境要求](#前端环境要求)
    - [启动前后端联调](#启动前后端联调)
  - [感谢充电支持！](#感谢充电支持)
  - [Star 增长曲线](#star-增长曲线)
  - [致谢](#致谢)
  - [支持项目](#支持项目)

</details>

---

## 产品亮点

- ☁️ **轻量高效架构**：低资源占用与小体积镜像，适合个人服务器到 ARM 设备。
- 🚀 **极速部署体验**：开箱即用 Docker 部署，从安装到运行一条命令即可启动。
- 📦 **自包含部署包**：提供完整二进制与容器镜像，无需额外依赖。
- 💻 **跨平台支持**：支持 Linux、Windows 与 ARM 架构设备（如 Raspberry Pi）。

## Storage & Data

- 🗂️ **VireFS 统一存储抽象层**：以 **VireFS** 统一本地存储与 S3 兼容对象存储的挂载与管理。
- ☁️ **S3 对象存储支持**：原生支持 S3 兼容对象存储，便于云端资源扩展。
- 📦 **数据主权架构**：内容与元数据由用户掌控，并支持 RSS 输出。
- 🔄 **数据迁移机制**：支持迁移导入历史数据，配合快照导出实现迁移与归档。
- 🔐 **自动备份系统**：支持 Web、CLI、TUI 三种导出/备份方式与后台自动备份。

## Writing & Content

- ✍️ **Markdown 写作体验**：基于 **markdown-it** 的编辑与渲染引擎，支持插件扩展和实时预览。
- 🧘 **Zen Mode 沉浸式阅读**：提供干扰最小化的 Timeline 浏览模式。
- 🏷️ **标签管理系统**：支持标签分类、快速过滤与精准检索。
- 🃏 **富媒体卡片内容**：支持网站链接、GitHub 项目等卡片展示。
- 🎥 **视频内容解析**：支持哔哩哔哩与 YouTube 视频解析展示。

## Media & Assets

- 📁 **可视化文件管理器**：内建文件上传、浏览与资源管理能力。

## Social & Interaction

- 💬 **原生评论系统**：内建评论与评论管理功能，无需第三方评论服务。
- 🃏 **内容互动能力**：支持点赞、分享等社交互动。

## Auth & Security

- 🔑 **OAuth2 / OIDC 身份认证**：支持 OAuth2 与 OIDC 协议，便于接入第三方登录。
- 🙈 **Passkey 无密码登录**：支持生物识别或硬件密钥登录。
- 🔑 **访问令牌管理**：支持生成与吊销访问令牌，便于 API 调用与第三方集成。
- 👤 **多账户权限管理**：支持多用户与权限控制。

## System & Developer

- 🧱 **Busen 数据总线架构**：通过自研 Busen 实现模块解耦通信与可靠消息传递。
- 📊 **结构化日志系统**：系统日志统一为结构化格式，提升可读性与可分析性。
- 🖥️ **实时系统日志控制台**：内建 Web 控制台可实时查看日志流，便于调试与排障。
- 📟 **TUI 管理界面**：提供终端交互界面，适合服务器环境管理。
- 🧰 **CLI 工具链**：提供 CLI 工具，支持自动化管理与脚本集成。
- 🔗 **开放 API 与 Webhook**：提供完整 API 与 Webhook，便于外部系统集成和自动化工作流。

## Experience

- 🌍 **跨设备适配**：响应式设计，适配桌面、平板与移动浏览器。
- 🌐 **i18n 多语言支持**：支持多语言界面切换，覆盖不同语言使用场景。
- 👾 **PWA 支持**：支持安装为 Web App，体验更接近原生应用。
- 🌗 **主题与 Dark Mode**：支持深色模式与主题扩展。

## License

- 🎉 **完全开源**：基于 **AGPL-3.0** 协议发布，无追踪、无订阅、无 SaaS 依赖。

---

## 极速部署

<!-- ### 🧙 脚本一键部署（推荐,请确保网络可以访问GitHub Release）
```shell
curl -fsSL "https://sh.soopy.cn/ech0.sh" -o ech0.sh && bash ech0.sh
``` -->

### 🐳 Docker 部署（推荐）

```shell
docker run -d \
  --name ech0 \
  -p 6277:6277 \
  -v /opt/ech0/data:/app/data \
  -e JWT_SECRET="Hello Echos" \
  sn0wl1n/ech0:latest
```

> 💡 部署完成后访问 ip:6277 即可使用
> 🚷 建议把`-e JWT_SECRET="Hello Echos"`里的`Hello Echos`改成别的内容以提高安全性
> 📍 首次使用注册的账号会被设置为管理员（目前仅管理员支持发布内容）
> 🎈 数据存储在/opt/ech0/data下

### 🐋 Docker Compose

创建一个新目录并将 `docker-compose.yml` 文件放入其中

在该目录下执行以下命令启动服务：

```shell
docker-compose up -d
```

### ☸️ Kubernetes (Helm)

如果你希望在 Kubernetes 集群中部署 Ech0，可以使用项目提供的 Helm Chart。

由于本项目暂时未提供在线 Helm 仓库，你需要先将代码库克隆到本地，然后从本地目录进行安装。

1.  **克隆代码库:**
    ```shell
    git clone https://github.com/lin-snow/Ech0.git
    cd Ech0
    ```

2.  **使用 Helm 安装:**
    ```shell
    # helm install <发布名称> <chart目录>
    helm install ech0 ./charts/ech0
    ```

    你也可以自定义发布名称和命名空间：
    ```shell
    helm install my-ech0 ./charts/ech0 --namespace my-namespace --create-namespace
    ```

---

## 版本更新

> ⚠️ 目前不支持从 v3 直接更新到 v4。请先在 v3 面板中点击"导出快照"，然后重新部署 v4，并在 v4 面板中选择"v3 迁移"即可导入原有数据。

### 🔄 Docker

```shell
# 停止当前的容器
docker stop ech0

# 移除容器
docker rm ech0

# 拉取最新的镜像
docker pull sn0wl1n/ech0:latest

# 启动新版本的容器
docker run -d \
  --name ech0 \
  -p 6277:6277 \
  -v /opt/ech0/data:/app/data \
  -e JWT_SECRET="Hello Echos" \
  sn0wl1n/ech0:latest
```

### 💎 Docker Compose

```shell
# 进入 compose 文件目录
cd /path/to/compose

# 拉取最新镜像并重启
docker-compose pull && \
docker-compose up -d --force-recreate

# 清理旧镜像
docker image prune -f
```

### ☸️ Kubernetes (Helm)

1. **更新代码库:**
   进入本地的 Ech0 代码库目录，并拉取最新的代码。
   ```shell
   cd Ech0
   git pull
   ```

2. **更新 Helm Release:**
   使用 `helm upgrade` 命令更新你的发布版本。
   ```shell
   # helm upgrade <发布名称> <chart目录>
   helm upgrade ech0 ./charts/ech0
   ```
   如果你使用了自定义的发布名称和命名空间，请使用对应的名称：
   ```shell
   helm upgrade my-ech0 ./charts/ech0 --namespace my-namespace
   ```

<!-- ---

## 访问方式

### 🖥️ TUI 模式

![TUI 模式](./docs/imgs/tui.png)

直接运行对应的二进制文件即可。例如在 Windows 中，双击 `Ech0.exe`。 -->

---

## 常见问题

1. **Ech0 是什么？**
   Ech0 是一款轻量级的开源自托管平台，专为快速发布与分享个人想法、文字和链接而设计。它提供简洁的界面，支持零干扰的写作体验，所有数据存储于本地，确保用户对内容的完全控制。

2. **Ech0 不是什么？**
   Ech0 不是传统的笔记软件，设计之初并不是为了专业的笔记管理和记录（如 Obsidian、Notion 等），Ech0 的核心功能类似朋友圈/说说。

3. **Ech0 是免费的吗？**
   是的，Ech0 完全免费且开源，遵循 AGPL-3.0 协议。它没有广告、追踪、订阅或服务依赖。

4. **如何进行备份和导入数据？**
   由于所有内容都存储在本地 SQLite 文件中，建议定期备份 `/opt/ech0/data` 目录（或您部署时映射的数据目录）。在线数据管理中支持"快照导出"和"迁移导入"：导出用于离线归档，导入统一通过迁移功能完成。

5. **Ech0 支持 RSS 吗？**
   是的，Ech0 支持 RSS 订阅，您可以通过 RSS 阅读器订阅您的内容更新。

6. **为什么发布失败，提示联系管理员？**
   当前版本设计上，只有管理员可以发布内容。部署后，首个注册的用户会自动被设置为系统管理员，其他用户无法发布内容（可在设置中分配权限）。

7. **为什么没有明确的权限划分？**
   Ech0 旨在保持简洁和轻量，因此在设计时没有复杂的权限系统。我们希望用户能够专注于分享内容，而不是被复杂的权限管理所困扰。为了保持流畅的使用体验，Ech0 尽量精简了功能，避免不必要的复杂性。（因此目前只有管理员与非管理员之分，所以请谨慎分配你的权限）。

8. **为什么别人无法显示自己的 Connect 头像？**
   要使别人显示自己的 Connect 头像需要在`系统设置-服务地址`中填入自己当前的实例地址，比如我自己填的是部署 ech0 后的域名`https://memo.vaaat.com`(注意：这里填的链接需要带上 http 或 https)。

9. **设置中的 MetingAPI 项是什么？**
   这是用于解析获取音乐流媒体直链的服务 api，用于分享的音乐卡片功能，如果不设置则默认使用 ech0 提供的 api（部署于 vercel）。

10. **为什么添加后的 Connect 只显示了一部分？**
      因为后端会尝试获取所有 connect 的实例信息，如果某个实例挂了或者无法访问则会被抛弃，只返回获取到的有效 connect 实例的信息给前端。

11. **Ech0 不建议发什么？**
      Ech0 发布的内容分为三部分：文字、图片、扩展内容（如音乐、视频等播放器卡片），Ech0 不建议发布同时包含`文字 + 图片 + 扩展内容`这种密集内容，因为其违反了 Ech0 的一些设计理念，同时在任何时候都不推荐发布扩展内容或长篇幅的文章。

12. **如何开启评论功能？**
      在设置页面的`评论设置`中选择评论服务并填写对应参数即可。当前支持 `Twikoo / Waline / Artalk / Giscus`，不同服务的必填字段会在界面中动态展示。

13. **S3 存储如何配置？**
      在存储设置页面填入所需配置信息，注意：endpoint 不需要填 http 或者 https 开头，存储桶需提供公共访问权限。

14. **如何启用 Passkey 无密码登录？**
      在 `SSO - Passkey` 页面先配置 `WebAuthn RP ID` 与 `WebAuthn Origins`，保存并显示"Passkey 就绪"后，再按浏览器提示绑定你常用的生物识别或安全密钥设备即可使用。

---

## 反馈与社区

- 若程序出现 bug，可在 [Issues](https://github.com/lin-snow/Ech0/issues) 中反馈。
- 针对新增或改进的需求，欢迎前往 [Discussions](https://github.com/lin-snow/Ech0/discussions) 一起交流。
- 官方 QQ 群号：1065435773

| 官方 QQ 交流群                                                   | 其它交流群 |
| --------------------------------------------------------------- | ---------- |
| <img src="./docs/imgs/qq.png" alt="QQ群" style="height:250px;"> | 暂无       |


---

## 开源治理

- [贡献指南](./CONTRIBUTING.md)
- [行为准则](./CODE_OF_CONDUCT.md)
- [安全策略](./SECURITY.md)
- [许可证](./LICENSE)

---

## 项目架构

- 后端事件总线已切换为 [Busen](https://github.com/lin-snow/Busen)：采用 typed-first in-process 架构，并通过显式背压、hooks 与 drain shutdown 提升稳定性。

---

## 开发指南

### 后端环境要求

📌 **Go 1.26.0+**

📌 **C 编译器**
使用 `go-sqlite3` 等需要 CGO 的库时，需安装：
- Windows：
    - [MinGW-w64](https://winlibs.com/)
    - 解压后将 bin 目录添加到 PATH
- macOS： `brew install gcc`
- Linux： `sudo apt install build-essential`

📌 **Google Wire**
安装[wire](https://github.com/google/wire)用于依赖注入文件生成:
- `go install github.com/google/wire/cmd/wire@latest`

📌 **Golangci-Lint**
安装[Golangci-Lint](https://golangci-lint.run/)用于 lint 和 fmt:
- 在项目根目录下执行`golangci-lint run`进行 lint
- 在项目根目录下执行`golangci-lint fmt`进行格式化

📌 **Air（后端热重载，可选）**
- 推荐通过 Makefile 安装：`make air-install`
- 或手动安装：`go install github.com/air-verse/air@latest`

📌 **Swagger**
安装[Swagger](https://github.com/swaggo/gin-swagger)用于生成和使用符合 OpenAPI 规范的接口文档
- 在项目根目录下执行`swag init -g internal/server/server.go -o internal/swagger`后生成或更新 swagger 文档
- 打开浏览器访问`http://localhost:6277/swagger/index.html`查看和使用 swagger 文档

📌 **Event 运行参数（Busen）**
- `ECH0_EVENT_DEFAULT_BUFFER` / `ECH0_EVENT_DEFAULT_OVERFLOW`
- `ECH0_EVENT_DEADLETTER_BUFFER` / `ECH0_EVENT_SYSTEM_BUFFER`
- `ECH0_EVENT_AGENT_BUFFER` / `ECH0_EVENT_AGENT_PARALLELISM`
- `ECH0_EVENT_INBOX_BUFFER`
- `ECH0_EVENT_WEBHOOK_POOL_WORKERS` / `ECH0_EVENT_WEBHOOK_POOL_QUEUE`

### 前端环境要求

📌 **NodeJS v25.5.0+, PNPM v10.30.0+**
> 注：如需要多个 nodejs 版本共存可使用[fnm](https://github.com/Schniz/fnm)进行管理

---

### 启动前后端联调

**第一步： 后端（在 Ech0 根目录下）：**

```shell
make run # 普通启动后端（等价于 go run main.go serve）
make dev # 使用 Air 启动后端热重载
```

> 如果依赖注入关系发生了变化先需要在`ech0/internal/di/`下执行`wire`命令生成新的`wire_gen.go`文件

**第二步： 前端（新终端）：**

```shell
cd web # 进入前端目录

pnpm install # 如果没有安装依赖则执行

pnpm dev # 启动前端预览
# 或在项目根目录执行：make web-dev
```

**第三步： 前后端启动后访问：**
前端预览： http://localhost:5173 （端口在启动后可在控制台查看）
后端预览： http://localhost:6277 （默认后端端口为 6277）

> 对使用**层次化架构的包**进行导入时，请使用**规范的 alias 命名**：
> model 层： `xxxModel`
> util 层： `xxxUtil`
> handler 层： `xxxHandler`
> service 层： `xxxService`
> repository 层： `xxxRepository`

---

## 感谢充电支持！

感谢所有为项目充电的朋友！你们的支持让项目持续发光发热 💡✨

|                        ⚙️ 用户                        | 🔋 充电日期 | 💬 留言                    |
| :---------------------------------------------------: | :---------: | :------------------------- |
|                     🧑‍💻 匿名小伙伴                     |  2025-5-19  | 笨比程序员买杯糖水喝吧     |
|        🧑‍💻 [@sseaan](https://github.com/sseaan)        |  2025-7-27  | Ech0 是个好东西 🥳         |
| 🧑‍💻 [@QYG2297248353](https://github.com/QYG2297248353) | 2025-10-10  | 无                         |
|    🧑‍💻 [@continue33](https://github.com/continue33)    | 2025-10-23  | 感谢修复 R2                |
|    🧑‍💻 [@hoochanlon](https://github.com/hoochanlon)    | 2025-10-28  | 无                         |
|       🧑‍💻 [@Rvn0xsy](https://github.com/Rvn0xsy)       | 2025-11-12  | 很棒的项目，我会持续关注！ |
|                       🧑‍💻 王贼臣                       | 2025-11-20  | 感谢 www.cardopt.cn        |
|         🧑‍💻 [@ljxme](https://github.com/ljxme)         | 2025-11-30  | 略尽绵薄之力 😋            |
|       🧑‍💻 [@he9ab2l](https://github.com/he9ab2l)       | 2025-12-23  | 无                         |
|              🧑‍💻 鸿运当头(windfore)                     |  2026-1-6   | 感谢你创造 ech0            |
|                     🧑‍💻 匿名用户                       | 2026-01-23  | 无                         |

---

## Star 增长曲线

<a href="https://www.star-history.com/#lin-snow/Ech0&Timeline">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=lin-snow/Ech0&type=Timeline&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=lin-snow/Ech0&type=Timeline" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=lin-snow/Ech0&type=Timeline" />
 </picture>
</a>

---

## 致谢

- 感谢广大用户提供的各种改进建议和问题反馈
- 感谢所有开源社区的贡献者与支持者

[![Contributors](https://contrib.rocks/image?repo=lin-snow/Ech0)](https://contrib.rocks/image?repo=lin-snow/Ech0)

![Alt](https://repobeats.axiom.co/api/embed/d69b9177e4a121e31aaed95354ff862c928ca22d.svg "Repobeats analytics image")

---

## 支持项目

🌟 如果你觉得 **Ech0** 不错，欢迎为项目点个 Star！🚀

Ech0 完全开源且免费，持续维护和优化离不开大家的支持。如果这个项目对你有所帮助，也欢迎通过赞助支持项目的持续发展。你的每一份鼓励和支持，都是我们前进的动力！
你可以向打赏二维码付款，然后备注你的 github 名称，将在首页 `README.md` 页面向所有展示你的贡献

|                  支持平台                  |                         二维码                         |
| :----------------------------------------: | :----------------------------------------------------: |
| [**爱发电**](https://afdian.com/a/l1nsn0w) | <img src="./docs/imgs/pay.jpeg" alt="Pay" width="200"> |

---

```cpp

███████╗     ██████╗    ██╗  ██╗     ██████╗
██╔════╝    ██╔════╝    ██║  ██║    ██╔═████╗
█████╗      ██║         ███████║    ██║██╔██║
██╔══╝      ██║         ██╔══██║    ████╔╝██║
███████╗    ╚██████╗    ██║  ██║    ╚██████╔╝
╚══════╝     ╚═════╝    ╚═╝  ╚═╝     ╚═════╝

```

import type { Metadata } from "next";
import { ShieldIcon, EyeIcon, LockIcon, GithubIcon, ServerIcon, UsersIcon, UsersRoundIcon } from "lucide-react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "隐私政策 - Ech0",
  description: "Ech0 隐私政策 - 我们从不收集您的个人数据。开源且以隐私为核心的笔记平台。",
};

export default function PrivacyPage() {
  return (
    <HomeLayout {...baseOptions}>
      <main className="flex flex-1 flex-col">
        <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800/50">
          <div className="max-w-4xl mx-auto">
            {/* 顶部标题区 */}
            <div className="text-center mb-20">
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 rounded-2xl">
                  <ShieldIcon className="w-12 h-12" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 leading-tight">隐私政策</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Ech0 以隐私优先为设计原则，确保您的数据始终完全掌握在您自己手中。
              </p>
            </div>

            {/* 隐私承诺 */}
            <section className="mb-20">
              <div className="bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-950 dark:via-cyan-950 dark:to-blue-950 border border-teal-200 dark:border-teal-800 rounded-3xl p-12 shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 rounded-2xl flex-shrink-0">
                    <LockIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-teal-900 dark:text-teal-100 mb-6 tracking-tight">
                      我们对隐私的承诺
                    </h2>
                    <p className="text-lg text-teal-800 dark:text-teal-200 leading-relaxed">
                      Ech0 是一个<strong>免费且开源</strong>的发布平台，以隐私和自主为核心。我们相信，您的思想与创作应永远属于您自己——而非某家公司或云端。当您使用 Ech0 时，您的数据仅存储在您自己的服务器上，完全由您掌控，除非您主动选择分享。<br />
                      您的思想，您的网络，您的规则。
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 我们不收集的信息 */}
            <section className="mb-20">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-500 rounded-xl">
                  <EyeIcon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">我们不收集以下信息</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "个人信息或用户档案",
                  "使用追踪或行为分析数据",
                  "您的笔记或任何内容数据",
                  "Cookies 或追踪脚本",
                  "位置信息或设备数据",
                  "用于盈利或出售的任何数据",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 border-l-4 border-red-500 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
                  >
                    <div className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-900 dark:text-gray-100 font-semibold">我们不会收集 {item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Ech0 工作原理 */}
            <section className="mb-20">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl">
                  <ServerIcon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Ech0 的工作方式</h2>
              </div>

              <div className="text-center mb-8">
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Ech0 采用<strong>自托管（self-hosted）</strong>的方式，这意味着您的数据始终完全由您掌控。
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    title: "数据仅属于您",
                    description: "所有笔记与数据都存储在您自己的服务器或设备中，绝不会上传到外部服务器。",
                  },
                  {
                    title: "完全的掌控权",
                    description: "您可以完全决定谁能访问您的数据，以及如何进行安全保护。",
                  },
                  {
                    title: "无外部依赖",
                    description: "Ech0 不依赖我们的服务器、第三方服务或互联网即可正常运行。",
                  },
                  {
                    title: "开源透明",
                    description: "我们的代码完全公开，任何人都可以审查与验证隐私声明的真实性。",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 开源保障 */}
            <section className="mb-20">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">开源保证</h2>
              </div>

              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-3xl p-12 shadow-lg">
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 text-center leading-relaxed">
                  因为 Ech0 是<strong>完全开源</strong>的，您可以获得以下隐私保障：
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "可自由审查代码以验证隐私声明",
                    "社区可共同审计并改进隐私实践",
                    "没有隐藏的数据收集机制",
                    "可自由修改软件以满足个人隐私需求",
                    "从源代码自行构建，确保完全透明",
                  ].map((guarantee, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{guarantee}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 联系方式 */}
            <section className="mb-20">
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-xl">
                  <UsersIcon className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold tracking-tight">有疑问或担忧？</h2>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border border-purple-200 dark:border-purple-800 rounded-3xl p-12 shadow-lg">
                <p className="text-xl text-purple-800 dark:text-purple-200 mb-8 text-center leading-relaxed">
                  如果您对本隐私政策或我们的隐私实践有任何疑问，欢迎通过以下方式联系：
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href="https://github.com/lin-snow/Ech0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-6 p-8 bg-white/80 dark:bg-gray-800/80 border border-purple-200 dark:border-purple-700 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-xl group-hover:scale-110 transition-transform">
                      <GithubIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-900 dark:text-purple-100">在 GitHub 上提交问题</div>
                      <div className="text-purple-700 dark:text-purple-300">报告隐私疑虑或提出问题</div>
                    </div>
                  </a>

                  <a
                    href="https://qm.qq.com/cgi-bin/qm/qr?group_code=1065435773"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-6 p-8 bg-white/80 dark:bg-gray-800/80 border border-purple-200 dark:border-purple-700 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-xl group-hover:scale-110 transition-transform">
                      <UsersRoundIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-900 dark:text-purple-100">加入QQ群</div>
                      <div className="text-purple-700 dark:text-purple-300">与开发者和其他用户交流</div>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* 更新时间 */}
            <section className="text-center">
              <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-8 shadow-sm">
                <div className="text-gray-600 dark:text-gray-400">
                  <p className="text-lg font-medium mb-2">本隐私政策体现了我们对用户隐私的持续承诺。</p>
                  <p>
                    如需查看最新版本，请访问{" "}
                    <a
                      href="https://github.com/lin-snow/Ech0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 underline font-semibold"
                    >
                      GitHub 仓库
                    </a>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </HomeLayout>
  );
}

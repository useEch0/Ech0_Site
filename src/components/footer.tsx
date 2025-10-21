import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-fd-background/50 mt-auto">
      <div className="mx-auto max-w-fd-container px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">Ech0</h3>
            <p className="text-sm text-fd-muted-foreground leading-relaxed">
              面向个人的新一代开源、自托管、专注思想流动的轻量级联邦发布平台。
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">产品</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link href="/docs" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  文档
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">社区</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <a
                  href="https://github.com/lin-snow/Ech0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repo
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
                  Github Discussions
                </a>
              </li>

              <li>
                <a
                  href="https://qm.qq.com/cgi-bin/qm/qr?group_code=1065435773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                >
                  官方QQ群
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-fd-foreground mb-3 sm:mb-4">使用协议</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm">
              <li>
                <Link href="/docs/legal/privacy/" className="text-fd-muted-foreground hover:text-fd-foreground transition-colors">
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

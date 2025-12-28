import clsx from 'clsx';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  username: string;
  message: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "sseaan",
    username: "@sseaan",
    message: "Ech0 是个好东西 🥳",
    avatar: "https://github.com/sseaan.png"
  },
  {
    name: "continue33",
    username: "@continue33",
    message: "感谢修复 R2，现在体验非常顺滑！",
    avatar: "https://github.com/continue33.png"
  },
  {
    name: "Rvn0xsy",
    username: "@Rvn0xsy",
    message: "很棒的项目，我会持续关注！期待更多的功能更新。",
    avatar: "https://github.com/Rvn0xsy.png"
  },
  {
    name: "匿名小伙伴",
    username: "Anonymous",
    message: "笨比程序员买杯糖水喝吧，支持开源精神！",
    avatar: "" // Will use fallback
  },
  {
    name: "ljxme",
    username: "@ljxme",
    message: "略尽绵薄之力 😋，Ech0 的轻量化设计真的很打动我。",
    avatar: "https://github.com/ljxme.png"
  },
  {
    name: "王贼臣",
    username: "@wangzeichen",
    message: "很好的平台，感谢 www.cardopt.cn 的支持。",
    avatar: ""
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                    Loved by the Community
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Join the growing network of thinkers and creators using Ech0.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <div 
                        key={i}
                        className="group p-6 rounded-2xl bg-[#1E1E1E]/95 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center shrink-0 border border-white/5">
                                {t.avatar ? (
                                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-primary font-bold text-lg">{t.name[0]}</span>
                                )}
                            </div>
                            <div>
                                <div className="font-bold text-white text-base">{t.name}</div>
                                <div className="text-xs text-gray-400">{t.username}</div>
                            </div>
                            <Quote className="ml-auto w-5 h-5 text-primary/40 group-hover:text-primary transition-colors" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed tracking-wide">
                            {t.message}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

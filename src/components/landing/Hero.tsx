import Link from 'next/link';
import { ArrowRight, Github } from 'lucide-react';
import TextType from '@/components/ui/texttype';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-4 pt-32 pb-16 text-center md:pt-48 md:pb-32 bg-background">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-white/0 via-primary/5 to-white/0 pointer-events-none" />

      <h1 className="relative z-10 max-w-4xl mx-auto text-5xl font-bold tracking-tight text-foreground md:text-7xl">
        Ech0 Your <TextType
          text={["Thoughts", "Ideas", "Inspirations"]}
          className="text-primary inline-block min-w-[280px] text-left"
          cursorClassName="text-primary ml-1"
          cursorCharacter="|"
          loop={true}
          variableSpeed={{ min: 50, max: 100 }}
          deletingSpeed={30}
          pauseDuration={2000}
        />
      </h1>
      
      <p className="relative z-10 max-w-2xl mx-auto mt-6 text-xl text-muted-foreground md:text-2xl">
        New generation open-source, self-hosted, lightweight federated publishing platform.
      </p>

      <div className="relative z-10 flex flex-col items-center justify-center gap-4 mt-10 md:flex-row">
        <Link 
          href="https://memo.vaaat.com/" 
          target="_blank"
          className="flex items-center gap-2 px-8 py-4 text-lg font-medium text-white transition-all rounded-full bg-primary hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          View Demo <ArrowRight className="w-5 h-5" />
        </Link>
        
        <Link 
          href="https://github.com/lin-snow/Ech0" 
          target="_blank"
          className="flex items-center gap-2 px-8 py-4 text-lg font-medium transition-all bg-white border rounded-full text-foreground border-border hover:bg-secondary hover:border-secondary-foreground/10"
        >
          <Github className="w-5 h-5" />
          Star on GitHub
        </Link>
      </div>

      <div className="relative w-full max-w-5xl mt-20 perspective-[2000px]">
        <div className="overflow-hidden bg-white border rounded-xl shadow-2xl border-border/50 rotate-x-6 md:rotate-x-12 transform-style-3d">
            <img 
              src="./images/screenshot.png" 
              alt="Ech0 Interface" 
              className="w-full h-auto"
            />
        </div>
        {/* Shadow reflection */}
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-black/20 blur-3xl rounded-[100%]" />
      </div>
    </section>
  );
}

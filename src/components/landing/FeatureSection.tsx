import clsx from 'clsx';
import { ReactNode } from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  icon?: ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  reverse?: boolean;
}

export function FeatureSection({ title, description, icon, imageSrc, imageAlt, reverse = false }: FeatureSectionProps) {
    return (
        <section className="py-24 px-4 md:px-6 overflow-hidden">
            <div className={clsx(
                "max-w-7xl mx-auto flex flex-col gap-12 md:gap-24 items-center",
                reverse ? "md:flex-row-reverse" : "md:flex-row"
            )}>
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                    {icon && (
                        <div className="inline-flex items-center justify-center w-16 h-16 text-3xl mb-4 bg-primary/10 rounded-2xl text-primary">
                            {icon}
                        </div>
                    )}
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Visual Content */}
                <div className="flex-1 w-full max-w-xl">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-secondary bg-white group hover:shadow-2xl transition-shadow duration-500">
                         {imageSrc ? (
                             <img 
                                src={imageSrc} 
                                alt={imageAlt || title}
                                className="w-full h-auto block transform group-hover:scale-105 transition-transform duration-700"
                             />
                         ) : (
                             <div className="aspect-video w-full bg-secondary/50 flex items-center justify-center text-muted-foreground">
                                 {/* Placeholder if no image */}
                                 <span>Visual Preview</span>
                             </div>
                         )}
                    </div>
                </div>
            </div>
        </section>
    );
}

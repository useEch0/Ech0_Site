"use client";

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function DeploymentSection() {
  const [copied, setCopied] = useState(false);

  const code = `docker run -d \\
  --name ech0 \\
  -p 6277:6277 \\
  -v /opt/ech0/data:/app/data \\
  -v /opt/ech0/backup:/app/backup \\
  -e JWT_SECRET="Hello Echos" \\
  sn0wl1n/ech0:latest`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Deploy in Seconds</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
           Get your own instance running with a single Docker command.
        </p>

        <div className="relative group mx-auto max-w-3xl text-left bg-[#1E1E1E] rounded-2xl p-6 shadow-2xl overflow-hidden border border-white/10">
            <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <pre className="overflow-x-auto text-sm md:text-base font-mono text-gray-300 leading-relaxed">
                <code>{code}</code>
            </pre>
            
            <button 
                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Copy code"
                onClick={handleCopy}
            >
                {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
            </button>
        </div>
      </div>
    </section>
  );
}

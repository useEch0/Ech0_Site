"use client";

import React from "react";
import { Github, Mail } from "lucide-react";

type TeamMember = {
  id: string | number;
  name: string;
  role?: string;
  bio?: string;
  avatarUrl?: string | null;
  socials?: {
    github?: string;
    email?: string;
  };
};

type TeamGridProps = {
  members: TeamMember[];
  columns?: number;
  className?: string;
};

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((s) => s[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100">
      {initials}
    </div>
  );
}

export default function TeamGrid({ members, columns = 3, className = "" }: TeamGridProps) {
  const gridColsClass = {
    1: "grid-cols-1",
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 md:grid-cols-3",
    4: "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }[columns] || "sm:grid-cols-2 md:grid-cols-3";

  return (
    <section
      className={`w-full ${className} bg-transparent text-gray-900 dark:text-gray-100`}
      aria-label="组员"
    >
      <div className={`grid gap-4 ${gridColsClass}`}>
        {members.map((m) => (
          <article
            key={m.id}
            className="rounded-2xl p-5 bg-yellow-50 border border-yellow-100 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:shadow-black/20"
          >
            <div className="flex items-start gap-4">
              {m.avatarUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={m.avatarUrl}
                  alt={m.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <Initials name={m.name} />
              )}
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold truncate">{m.name}</h3>
                {m.role && <p className="text-sm truncate text-gray-600 dark:text-gray-400">{m.role}</p>}
              </div>
            </div>

            {m.bio && (
              <p className="text-sm mt-4 line-clamp-3 text-gray-600 dark:text-gray-400">{m.bio}</p>
            )}

            <div className="flex items-center gap-3 mt-4">
              {m.socials?.github && (
                <a
                  href={m.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${m.name} 的 GitHub`}
                >
                  <Github size={16} className="text-gray-600 dark:text-gray-400 hover:opacity-75" />
                </a>
              )}

              {m.socials?.email && (
                <a href={`mailto:${m.socials.email}`} aria-label={`Email ${m.name}`}>
                  <Mail size={16} className="text-gray-600 dark:text-gray-400 hover:opacity-75" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Github, Mail } from "lucide-react";

const palette = {
  dark: "#393022",
  medium: "#655a49",
  light: "#fae2bf",
  soft: "#FFF4E5",
  background: "#FFFCF0",
};

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
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold"
      style={{ background: palette.light, color: palette.dark }}
    >
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
      className={`w-full ${className}`}
      aria-label="组员"
      style={{ background: palette.background, color: palette.dark }}
    >
      <div className={`grid gap-4 ${gridColsClass}`}>
        {members.map((m) => (
          <article
            key={m.id}
            className="rounded-2xl p-5"
            style={{
              background: palette.soft,
              border: `1px solid ${palette.light}`,
              boxShadow: `0 2px 6px ${palette.light}55`,
            }}
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
                <h3 className="text-base font-semibold truncate" style={{ color: palette.dark }}>
                  {m.name}
                </h3>
                {m.role && (
                  <p className="text-sm truncate" style={{ color: palette.medium }}>
                    {m.role}
                  </p>
                )}
              </div>
            </div>

            {m.bio && (
              <p className="text-sm mt-4 line-clamp-3" style={{ color: palette.medium }}>
                {m.bio}
              </p>
            )}

            <div className="flex items-center gap-3 mt-4">
              {m.socials?.github && (
                <a
                  href={m.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${m.name} 的 GitHub`}
                >
                  <Github size={16} style={{ color: palette.medium }} className="hover:opacity-75" />
                </a>
              )}

              {m.socials?.email && (
                <a href={`mailto:${m.socials.email}`} aria-label={`Email ${m.name}`}>
                  <Mail size={16} style={{ color: palette.medium }} className="hover:opacity-75" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

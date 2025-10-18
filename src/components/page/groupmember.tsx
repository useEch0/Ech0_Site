"use client";

import React, { useEffect, useState } from "react";
import TeamGrid from "@/components/ui/teammember";

type GithubUser = {
  login: string;
  name?: string;
  avatar_url?: string;
  bio?: string;
  email?: string | null;
};

type Member = {
  username: string;
  role: string;
};

export default function ExampleTeamPage() {
  const memberConfigs: Member[] = [
    { username: "lin-snow", role: "项目创建者" },
    { username: "minc-nice-100", role: "运维" },
    { username: "abloom25", role: "官网及文档维护" },
    { username: "sseaan", role: "文档编写" },
    { username: "shenlye", role: "前端优化" },
    { username: "HoronLee", role: "代码检查" },
  ];

  // 给每个成员一个默认占位，保证 SSR 渲染有内容
  const defaultMembers = memberConfigs.map((m, i) => ({
    id: i,
    name: m.username,
    role: m.role,
    bio: null,
    avatarUrl: null,
    socials: { github: `https://github.com/${m.username}` },
  }));

  const [members, setMembers] = useState<any[]>(defaultMembers);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const responses = await Promise.all(
          memberConfigs.map((m) =>
            fetch(`https://api.github.com/users/${m.username}`).then((res) => res.json())
          )
        );

        const formatted = responses.map((user: GithubUser, i) => ({
          id: i,
          name: user.name || user.login,
          role: memberConfigs[i].role,
          bio: user.bio || defaultMembers[i].bio,
          avatarUrl: user.avatar_url,
          socials: {
            github: `https://github.com/${user.login}`,
            email: user.email || undefined,
          },
        }));

        setMembers(formatted);
      } catch (err) {
        console.error("Failed to fetch team members", err);
      }
    }

    fetchMembers();
  }, []);

  return (
    <main className="flex items-center justify-center p-8">
      <div className="max-w-5xl w-full">
        <TeamGrid members={members} columns={3} />
      </div>
    </main>
  );
}

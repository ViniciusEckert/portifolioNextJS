import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Projects" };

type Mission = {
  code: string;
  title: string;
  year: string;
  description: string;
  highlights: string[];
  stack: string[];
  repos: [string, string][];
  image: string | null; // ex.: "/projects/tcc.png"
  demo: string | null; // ex.: "https://meu-projeto.vercel.app"
};

const missions: Mission[] = [
  {
    code: "MISSION_01",
    title: "Sistema Bancário Administrativo (TCC)",
    year: "2025 – 2026",
    description:
      "Aplicação full stack desacoplada com painel administrativo e controle de permissões granular.",
    highlights: [
      "API REST em Node.js, TypeScript e Express, com Prisma sobre SQLite, autenticação JWT com bcrypt e rotinas agendadas com node-cron.",
      "Documentação interativa da API com Swagger (OpenAPI).",
      "Front-end em Next.js (App Router) com Server Actions, cache por tag com revalidateTag e tratamento de sessão expirada (401).",
    ],
    stack: ["Next.js", "TypeScript", "Express", "Prisma", "SQLite", "JWT", "Swagger", "Tailwind CSS"],
    repos: [
      ["GITHUB BACK-END", "https://github.com/ViniciusEckert/TCC_backend"],
      ["GITHUB FRONT-END", "https://github.com/ViniciusEckert/TCC_Frontend"],
    ],
    image: null,
    demo: null,
  },
  {
    code: "MISSION_02",
    title: "Aplicação em Tempo Real",
    year: "2025",
    description:
      "Aplicação full stack com comunicação bidirecional e sincronização de estado via WebSockets.",
    highlights: [
      "Servidor REST e WebSockets com Express 5 e Socket.io.",
      "Interface em Next.js com React 19 e Tailwind CSS v4, atualizada em tempo real com socket.io-client, sem polling.",
    ],
    stack: ["Next.js", "React 19", "Socket.io", "Express 5", "TypeScript", "Tailwind CSS"],
    repos: [
      ["GITHUB BACK-END", "https://github.com/ViniciusEckert/socket_back"],
      ["GITHUB FRONT-END", "https://github.com/ViniciusEckert/socket_client"],
    ],
    image: null,
    demo: null,
  },
  {
    code: "MISSION_03",
    title: "Suíte de Testes de Integração",
    year: "2025",
    description: "API REST com testes de ponta a ponta, banco de dados isolado e dados sintéticos.",
    highlights: [
      "Testes de rotas e regras de negócio com Supertest e o test runner nativo do Node.js.",
      "Migrações Prisma executadas em um banco de testes isolado (.env.test) antes de cada rodada.",
      "Dados dinâmicos com Faker.js cobrindo cenários de autenticação JWT e bcrypt.",
    ],
    stack: ["Node.js", "TypeScript", "Supertest", "Prisma", "Faker.js"],
    repos: [["GITHUB", "https://github.com/ViniciusEckert/testes_De_Sistema"]],
    image: null,
    demo: null,
  },
];

export default function Projects() {
  return (
    <section>
      <p className="font-pixel text-xs tracking-widest text-cyan">{"// PROJECTS"}</p>
      <h1 className="mt-2 font-pixel text-2xl font-bold sm:text-3xl">MISSION FILES</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        Aplicações que construí durante a formação, todas com código aberto no GitHub. Cada arquivo
        abaixo é uma missão concluída.
      </p>

      <div className="mt-10 space-y-10">
        {missions.map((m) => (
          <article key={m.code} className="px overflow-hidden">
            <div
              className="relative flex h-40 items-end justify-between border-b-2 border-darkred p-4 sm:h-48"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent 0 7px, rgba(255,46,136,.07) 7px 8px), repeating-linear-gradient(90deg, transparent 0 7px, rgba(255,46,136,.07) 7px 8px), linear-gradient(135deg, #a8002a 0%, #111522 70%)",
              }}
            >
              {m.image && (
                <Image
                  src={m.image}
                  alt={`Preview do projeto ${m.title}`}
                  fill
                  sizes="(min-width: 896px) 832px, 100vw"
                  className="object-cover [image-rendering:pixelated]"
                />
              )}
              <span className="relative font-pixel text-xs tracking-widest text-fg">{m.code}</span>
              <span className="relative border border-cyan bg-deep/80 px-2 py-1 font-pixel text-[10px] tracking-widest text-cyan">
                COMPLETED
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-xl font-semibold">{m.title}</h2>
                <span className="font-mono text-xs text-muted">{m.year}</span>
              </div>
              <p className="mt-2 text-muted">{m.description}</p>

              <ul className="mt-5 space-y-2 text-sm leading-relaxed">
                {m.highlights.map((h) => (
                  <li key={h}>
                    <span className="font-mono text-pink">&gt;</span> {h}
                  </li>
                ))}
              </ul>

              <ul className="mt-5 flex flex-wrap gap-2 font-mono text-xs">
                {m.stack.map((s) => (
                  <li
                    key={s}
                    className="border border-line bg-deep px-2.5 py-1 text-muted transition-colors hover:border-pink hover:text-pink"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-4">
                {m.repos.map(([label, href]) => (
                  <a key={href} href={href} target="_blank" rel="noreferrer" className="btn">
                    {label}
                  </a>
                ))}
                {m.demo && (
                  <a href={m.demo} target="_blank" rel="noreferrer" className="btn btn-solid">
                    DEMO
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
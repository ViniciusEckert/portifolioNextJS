import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Sistema de Atendimento (NestJS)" };

// [etapa, concluída?]. Para avançar o projeto, troque false por true.
const roadmap: [string, boolean][] = [
  ["NestJS + TypeScript", true],
  ["Prisma 7 + PostgreSQL", true],
  ["Autenticação JWT", false],
  ["CRUD de contatos, conversas e mensagens com Swagger", false],
  ["Webhook e notificações por WebSocket", false],
  ["Testes de integração", false],
  ["Docker e docker-compose", false],
  ["Cache com Redis", false],
  ["CI com GitHub Actions", false],
];

// Tecnologias já em uso. Quando uma planejada for implementada, mova para cá.
const stack = ["NestJS", "TypeScript", "Prisma", "PostgreSQL"];
const planned = ["JWT", "Swagger", "Socket.io", "Jest", "Supertest", "Docker", "Redis", "GitHub Actions"];

const modules = [
  ["AUTH", "Cadastro e login com JWT."],
  ["CONTACTS", "Cadastro e consulta de contatos."],
  ["CONVERSATIONS", "Conversas ligadas a um contato."],
  ["MESSAGES", "Mensagens de cada conversa."],
  ["WEBHOOK", "Endpoint que simula o recebimento de mensagens."],
  ["GATEWAY", "WebSocket que avisa os clientes em tempo real."],
];

const decisions = [
  ["Guard próprio com JwtService", "em vez do Passport, para entender o fluxo de autenticação por dentro."],
  ["Prisma 7 com driver adapter", "usando @prisma/adapter-pg e pg, com o client gerado dentro do projeto."],
  ["Banco de teste separado", "um .env.test com outro banco, para os testes nunca tocarem nos dados de desenvolvimento."],
  ["Variáveis de ambiente validadas", "a aplicação não inicia se algo essencial estiver faltando no .env."],
];

const tag = "font-pixel text-xs tracking-widest text-cyan";
const heading = "mt-2 font-pixel text-xl font-bold sm:text-2xl";

export default function NestProject() {
  const doneCount = roadmap.filter(([, d]) => d).length;

  return (
    <div className="space-y-16">
      <section>
        <Link
          href="/projects"
          className="font-pixel text-xs tracking-widest text-muted transition-colors hover:text-pink"
        >
          &lt; BACK TO PROJECTS
        </Link>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="border border-pink bg-deep px-2 py-1 font-pixel text-xs tracking-widest">
            MISSION_04
          </span>
          <span className="border border-pink px-2 py-1 font-pixel text-[10px] tracking-widest text-pink">
            <span className="blink mr-2 inline-block h-2 w-2 bg-pink" />
            IN PROGRESS
          </span>
        </div>

        <p className="glow mt-6 font-pixel text-xs tracking-widest text-pink">ACTIVE MISSION</p>
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Sistema de Atendimento (NestJS)</h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          Backend de atendimento com contatos, conversas e mensagens, feito para aprender a stack
          moderna de back-end. Um endpoint simula o recebimento de mensagens, como um webhook, e os
          clientes conectados são avisados em tempo real por WebSocket. O projeto está no começo e
          este arquivo mostra o que já existe e o que vem pela frente.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="https://github.com/ViniciusEckert/projetoNestjs"
            target="_blank"
            rel="noreferrer"
            className="btn btn-solid"
          >
            GITHUB
          </a>
        </div>
      </section>

      <section>
        <p className={tag}>{"// PROGRESS"}</p>
        <h2 className={heading}>ROADMAP</h2>

        <div className="px mt-6 p-5">
          <p className="flex justify-between font-pixel text-[10px] tracking-widest">
            <span className="text-pink">MISSION PROGRESS</span>
            <span className="text-muted">
              {doneCount}/{roadmap.length} COMPLETE
            </span>
          </p>
          <div className="mt-3 flex gap-1" aria-hidden="true">
            {roadmap.map(([label, done]) => (
              <span
                key={label}
                className={`h-2 flex-1 ${done ? "bg-pink shadow-[0_0_8px_rgba(255,46,136,0.7)]" : "bg-line"}`}
              />
            ))}
          </div>
          <ul className="mt-5 space-y-2 font-mono text-sm">
            {roadmap.map(([label, done]) => (
              <li key={label} className={done ? "text-fg" : "text-muted"}>
                <span className={done ? "text-cyan" : "text-muted"}>{done ? "[x]" : "[ ]"}</span> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <p className={tag}>{"// TECH"}</p>
        <h2 className={heading}>STACK</h2>

        <ul className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
          {stack.map((s) => (
            <li
              key={s}
              className="border border-line bg-deep px-3 py-1.5 transition-colors hover:border-pink hover:text-pink"
            >
              {s}
            </li>
          ))}
          {planned.map((s) => (
            <li key={s} className="border border-dashed border-line px-3 py-1.5 text-muted/60">
              {s} <span className="text-cyan/70">NEXT</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 font-mono text-xs text-muted">
          Chips tracejados com NEXT são tecnologias planejadas, ainda não implementadas.
        </p>
      </section>

      <section>
        <p className={tag}>{"// ARCHITECTURE"}</p>
        <h2 className={heading}>PLANNED MODULES</h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {modules.map(([name, desc]) => (
            <div key={name} className="px p-4">
              <h3 className="font-pixel text-sm tracking-widest text-red">{name}</h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={tag}>{"// DECISIONS"}</p>
        <h2 className={heading}>DESIGN DECISIONS</h2>

        <ul className="mt-6 space-y-4">
          {decisions.map(([title, desc]) => (
            <li key={title} className="border-l-2 border-red pl-5">
              <p className="font-semibold">{title}</p>
              <p className="text-sm text-muted">{desc}</p>
            </li>
          ))}
        </ul>
        <p className="mt-4 font-mono text-xs text-muted">
          Algumas decisões ainda serão aplicadas conforme o roadmap avança.
        </p>
      </section>
    </div>
  );
}
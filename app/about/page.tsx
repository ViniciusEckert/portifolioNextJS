import type { Metadata } from "next";

export const metadata: Metadata = { title: "About" };

// Regenera a página no máximo uma vez por dia, para o período atualizar sozinho.
export const revalidate = 86400;

// Janeiro e agosto marcam a troca de período. Agosto/2026 = 2º período.
function getPeriod() {
  const now = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
  );
  const half = now.getFullYear() * 2 + (now.getMonth() >= 7 ? 1 : 0);
  return Math.min(8, Math.max(2, half - 4051));
}

const profile = [
  ["CLASS", "Full Stack Developer"],
  ["BASE", "Curitiba, PR"],
  ["GOAL", "Dev Júnior"],
  ["LANG", "PT nativo / EN intermediário"],
];

const inventory = [
  { group: "FRONTEND", items: ["React", "Next.js", "Server Actions", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"] },
  { group: "BACKEND", items: ["Node.js", "Express", "REST APIs", "JWT", "bcrypt", "Socket.io", "node-cron"] },
  { group: "DATABASE", items: ["SQLite", "Prisma ORM", "SQL"] },
  { group: "LANGUAGES", items: ["TypeScript", "JavaScript", "Python", "C"] },
  { group: "TESTING", items: ["Supertest", "Node Test Runner", "Faker.js"] },
  { group: "TOOLS", items: ["Git", "GitHub", "Swagger", "ESLint", "VS Code"] },
];

const getEducation = () => [
  {
    done: false,
    title: "Engenharia de Software — UniSENAI",
    detail: `${getPeriod()}º de 8 períodos. Conclusão prevista para 2029.`,
  },
  {
    done: true,
    title: "Técnico em Análise e Desenvolvimento de Sistemas — SENAI",
    detail: "Instituto Forja. Março de 2025 a agosto de 2026.",
  },
];

const tag = "font-pixel text-xs tracking-widest text-cyan";
const heading = "mt-2 font-pixel text-2xl font-bold sm:text-3xl";

export default function About() {
  const education = getEducation();

  return (
    <div className="space-y-20">
      <section>
        <p className={tag}>{"// ABOUT ME"}</p>
        <h1 className={heading}>PLAYER PROFILE</h1>

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_16rem]">
          <p className="max-w-xl leading-relaxed text-muted">
            Sou técnico em  Análise e Desenvolvimento de Sistemas pelo SENAI e estudante de Engenharia de
            Software no UniSENAI. Gosto de construir aplicações web completas e desacopladas, com
            API em Node.js e TypeScript e interface em React e Next.js. No dia a dia me preocupo com
            arquitetura, Clean Code e testes automatizados, e estou em busca da minha primeira vaga
            como desenvolvedor júnior.
          </p>

          <dl className="px self-start p-4 font-mono text-xs">
            {profile.map(([k, v]) => (
              <div key={k} className="flex gap-3 border-b border-line py-2 last:border-b-0">
                <dt className="w-12 shrink-0 text-pink">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section>
        <p className={tag}>{"// SKILLS"}</p>
        <h2 className={heading}>INVENTORY</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {inventory.map((g) => (
            <div key={g.group} className="px p-5">
              <h3 className="font-pixel text-sm tracking-widest text-red">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2 font-mono text-xs">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line bg-deep px-3 py-1.5 transition-all duration-100 hover:border-pink hover:text-pink hover:shadow-[0_0_10px_rgba(255,46,136,0.45)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className={tag}>{"// EDUCATION"}</p>
        <h2 className={heading}>TRAINING LOG</h2>

        <ul className="mt-8 space-y-6">
          {education.map((e) => (
            <li key={e.title} className="border-l-2 border-red pl-5">
              <span
                className={`inline-block border px-2 py-1 font-pixel text-[10px] tracking-widest ${
                  e.done ? "border-cyan text-cyan" : "border-pink text-pink"
                }`}
              >
                {e.done ? "COMPLETED" : "IN PROGRESS"}
              </span>
              <p className="mt-3 text-lg font-semibold">{e.title}</p>
              <p className="text-muted">{e.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <p className={tag}>{"// LANGUAGES"}</p>
        <h2 className={heading}>COMMS</h2>

        <ul className="mt-6 space-y-2 font-mono text-sm">
          <li>
            <span className="text-pink">&gt;</span> Português <span className="text-muted">(nativo)</span>
          </li>
          <li>
            <span className="text-pink">&gt;</span> Inglês <span className="text-muted">(intermediário)</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
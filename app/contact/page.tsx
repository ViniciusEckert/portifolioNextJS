import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact" };

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

const channels = [
  ["EMAIL", "viniciuseckert6@gmail.com", "mailto:viniciuseckert6@gmail.com"],
  ["LINKEDIN", "linkedin.com/in/vinicius-eckert", "https://www.linkedin.com/in/vinicius-eckert-0338183a6"],
  ["GITHUB", "github.com/ViniciusEckert", "https://github.com/ViniciusEckert"],
  ["RESUME", "baixar currículo em PDF", "/curriculo.pdf"],
];

const mailto =
  "mailto:viniciuseckert6@gmail.com?subject=" +
  encodeURIComponent("Contato pelo portfólio");

export default function Contact() {
  return (
    <section>
      <p className="font-pixel text-xs tracking-widest text-cyan">{"// CONTACT"}</p>
      <h1 className="mt-2 font-pixel text-2xl font-bold sm:text-3xl">OPEN CHANNEL</h1>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        Estou buscando minha primeira vaga como desenvolvedor Júnior Full Stack, Front-end ou
        Back-end. Escolha um canal abaixo, respondo o mais rápido que puder.
      </p>

      <div className="px mt-10 max-w-2xl overflow-hidden">
        <div className="flex items-center gap-2 border-b-2 border-darkred bg-deep px-4 py-3 font-pixel text-xs tracking-widest text-muted">
          <span className="h-2.5 w-2.5 bg-red" />
          <span className="h-2.5 w-2.5 bg-pink" />
          <span className="h-2.5 w-2.5 bg-cyan" />
          <span className="ml-3">SECURE_LINK.EXE</span>
        </div>

        <div className="space-y-4 p-5 font-mono text-sm sm:p-6">
          <p className="line" style={step(0)}>
            <span className="text-pink">&gt;</span> ESTABLISHING CONNECTION ...{" "}
            <span className="text-cyan">OK</span>
          </p>
          <p className="line font-pixel text-base tracking-widest text-red" style={step(1)}>
            CONNECTION ESTABLISHED
          </p>

          <ul className="line divide-y divide-line border-y border-line" style={step(2)}>
            {channels.map(([label, value, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="group flex flex-col gap-1 py-3 transition-colors hover:text-pink sm:flex-row sm:items-center sm:justify-between"
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <span className="text-xs tracking-widest text-muted group-hover:text-pink">
                    <span className="text-pink">&gt;</span> {label}
                  </span>
                  <span>{value}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="line text-muted" style={step(3)}>
            <span className="text-pink">&gt;</span> LOCATION: Curitiba, PR, Brasil
          </p>

          <div className="line pt-2" style={step(4)}>
            <a href={mailto} className="btn btn-solid">
              SEND MESSAGE...
            </a>
            <span className="cursor ml-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
import Link from "next/link";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

const hud = [
  ["LOC", "Curitiba, PR"],
  ["GOAL", "Dev Júnior"],
  ["CORE", "TS / Node / React"],
];

export default function Home() {
  return (
    <section className="relative isolate pb-8 pt-6 sm:pt-16">
      <div className="sun" aria-hidden="true" />

      <p className="font-pixel text-xs tracking-wide text-cyan">
        <span className="type" style={{ "--w": "18ch" } as React.CSSProperties}>
          INITIALIZING...
        </span>
      </p>
      <p className="line mt-3 font-mono text-xs text-muted" style={step(1)}>
        &gt; LOADING PROFILE ........ <span className="text-cyan">OK</span>
      </p>
      <p className="line font-mono text-xs text-muted" style={step(2)}>
        &gt; STATUS: <span className="text-pink">OPEN TO WORK</span>
      </p>

      <h1
        className="line glitch glow mt-8 font-pixel text-4xl font-bold leading-tight sm:text-6xl"
        data-text="VINICIUS ECKERT"
        style={step(3)}
      >
        VINICIUS ECKERT
      </h1>
      <p
        className="line mt-4 font-pixel text-sm tracking-widest text-red sm:text-base"
        style={step(4)}
      >
        FULL STACK DEVELOPER
      </p>

      <p
        className="line mt-6 max-w-lg leading-relaxed text-muted"
        style={step(5)}
      >
        Construo aplicações web completas, da API em Node.js à interface em
        React e Next.js. Sou técnico em Análise e Desenvolvimento de Sistemas
        pelo SENAI e estudante de Engenharia de Software, em busca da primeira
        vaga como desenvolvedor júnior.
      </p>

      <div className="line mt-8 flex flex-wrap gap-4" style={step(6)}>
        <Link href="/projects" className="btn btn-solid">
          PROJECTS
        </Link>
        <Link href="/about" className="btn">
          ABOUT ME
        </Link>
        <Link href="/contact" className="btn">
          CONTACT
        </Link>
      </div>

      <dl
        className="line mt-12 grid max-w-xl grid-cols-1 gap-px border-2 border-line bg-line font-mono text-xs sm:grid-cols-3"
        style={step(7)}
      >
        {hud.map(([k, v]) => (
          <div key={k} className="bg-panel p-3">
            <dt className="text-muted">{k}</dt>
            <dd className="mt-1 text-fg">{v}</dd>
          </div>
        ))}
      </dl>
      <Link
        href="/404"
        prefetch={false}
        aria-label="Página secreta"
        className="group absolute bottom-0 right-0 flex items-center gap-2 p-2 font-pixel text-[10px] tracking-widest"
      >
        <span className="text-pink opacity-0 transition-opacity duration-100 group-hover:opacity-100 group-focus-visible:opacity-100">
          ERR_404
        </span>
        <span className="h-2 w-2 bg-line transition-colors group-hover:bg-pink group-hover:shadow-[0_0_8px_rgba(255,46,136,0.8)] group-focus-visible:bg-pink" />
      </Link>
    </section>
  );
}

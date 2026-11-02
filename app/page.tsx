"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

const hud = [
  ["LOC", "Curitiba, PR"],
  ["GOAL", "Dev Júnior"],
  ["CORE", "TS / Node / React"],
];

// Linha do corte: vai de (0, 85%) a (100%, 15%) da caixa do título.
const CUT_TOP = "polygon(0 0, 100% 0, 100% 15%, 0 85%)";
const CUT_BOTTOM = "polygon(0 85%, 100% 15%, 100% 100%, 0 100%)";
const SLASH_OFF = "polygon(0 82%, 0 82%, 0 88%, 0 88%)";
const SLASH_ON = "polygon(0 82%, 100% 12%, 100% 18%, 0 88%)";

const MOVE_TOP = "translate(-12px, -10px) rotate(-1.2deg)";
const MOVE_BOTTOM = "translate(12px, 10px) rotate(1.2deg)";
const MOVE_EASE = "transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1)";

export default function Home() {
  const router = useRouter();
  // 0 parado | 1 risco | 2-3 título partido | 4 tela esmaecendo
  const [phase, setPhase] = useState(0);
  const cut = phase >= 2;

  const sound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/parry.mp3");
    audio.preload = "auto";
    audio.volume = 0.6;
    sound.current = audio;
  }, []);

  function slash(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    if (phase > 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      router.push(href);
      return;
    }

    const audio = sound.current;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }

    setPhase(1);
    setTimeout(() => setPhase(2), 180);
    setTimeout(() => setPhase(3), 260);
    setTimeout(() => setPhase(4), 520);
    setTimeout(() => router.push(href), 850);
  }

  return (
    <section className="relative isolate pb-8 pt-6 sm:pt-16">
      <style>{"body > header { display: none; }"}</style>
      <div
        style={{ opacity: phase >= 4 ? 0 : 1, transition: "opacity 300ms ease-in" }}
      >
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
          className="line relative mt-8 w-fit font-pixel text-4xl font-bold leading-tight sm:text-6xl"
          style={step(3)}
        >
          {/* Metade de cima (a que o leitor de tela lê) */}
          <span
            className="block"
            style={{
              clipPath: CUT_TOP,
              transform: cut ? MOVE_TOP : "none",
              transition: MOVE_EASE,
            }}
          >
            <span className="glitch glow block" data-text="VINICIUS ECKERT">
              VINICIUS ECKERT
            </span>
          </span>

          {/* Metade de baixo */}
          <span
            aria-hidden="true"
            className="absolute inset-0 block"
            style={{
              clipPath: CUT_BOTTOM,
              transform: cut ? MOVE_BOTTOM : "none",
              transition: MOVE_EASE,
            }}
          >
            <span className="glitch glow block" data-text="VINICIUS ECKERT">
              VINICIUS ECKERT
            </span>
          </span>

          {/* Risco de espada */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 block"
            style={{
              filter: "drop-shadow(0 0 6px #ff2e88)",
              opacity: cut ? 0 : 1,
              transition: "opacity 300ms",
            }}
          >
            <span
              className="absolute inset-0 bg-white"
              style={{
                clipPath: phase >= 1 ? SLASH_ON : SLASH_OFF,
                transition: "clip-path 160ms ease-out",
              }}
            />
          </span>
        </h1>

        <p className="line mt-4 font-pixel text-sm tracking-widest text-red sm:text-base" style={step(4)}>
          FULL STACK DEVELOPER
        </p>

        <p className="line mt-6 max-w-lg leading-relaxed text-muted" style={step(5)}>
          Construo aplicações web completas, da API em Node.js à interface em React e Next.js. Sou
          técnico em Análise e Desenvolvimento de Sistemas pelo SENAI e estudante de Engenharia de
          Software, em busca da primeira vaga como desenvolvedor júnior.
        </p>

        <div className="line mt-8 flex flex-wrap gap-4" style={step(6)}>
          <Link href="/projects" onClick={(e) => slash(e, "/projects")} className="btn btn-solid">
            PROJECTS
          </Link>
          <Link href="/about" onClick={(e) => slash(e, "/about")} className="btn">
            ABOUT ME
          </Link>
          <Link href="/contact" onClick={(e) => slash(e, "/contact")} className="btn">
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
          onClick={(e) => slash(e, "/404")}
          aria-label="Página secreta"
          className="group absolute bottom-0 right-0 flex items-center gap-2 p-2 font-pixel text-[10px] tracking-widest"
        >
          <span className="text-pink opacity-0 transition-opacity duration-100 group-hover:opacity-100 group-focus-visible:opacity-100">
            ERR_404
          </span>
          <span className="h-2 w-2 bg-line transition-colors group-hover:bg-pink group-hover:shadow-[0_0_8px_rgba(255,46,136,0.8)] group-focus-visible:bg-pink" />
        </Link>
      </div>
    </section>
  );
}
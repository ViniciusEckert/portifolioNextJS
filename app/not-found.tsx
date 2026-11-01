import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "404" };

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function NotFound() {
  return (
    <>
      <style>{"body > header, body > footer { display: none; }"}</style>
      <div className="flash" aria-hidden="true" />
      <div className="alarm" aria-hidden="true" />
      <div className="tear" aria-hidden="true" />

      <section className="shake pt-6 sm:pt-16">
        <p className="flicker font-pixel text-xs tracking-widest text-red">{"// ACCESS DENIED"}</p>

        <h1
          className="glitch-hard glow mt-3 w-fit font-pixel text-7xl font-bold leading-none sm:text-9xl"
          data-text="404"
        >
          404
        </h1>

        <p className="line mt-6 font-pixel text-sm tracking-widest text-red sm:text-base" style={step(1)}>
          UNAUTHORIZED ENTRY DETECTED
        </p>

        <div className="line mt-6 max-w-lg space-y-1 font-mono text-sm text-muted" style={step(2)}>
          <p>
            <span className="text-pink">&gt;</span> TRACING CONNECTION ........{" "}
            <span className="text-red">FAILED</span>
          </p>
          <p>
            <span className="text-pink">&gt;</span> Esta página não existe. Você não deveria estar aqui.
          </p>
          <p>
            <span className="text-pink">&gt;</span> Volte para um endereço conhecido.
            <span className="cursor ml-2" />
          </p>
        </div>

        <div className="line mt-8 flex flex-wrap gap-4" style={step(3)}>
          <Link href="/" className="btn btn-solid">RETURN HOME</Link>
          <Link href="/projects" className="btn">PROJECTS</Link>
          <Link href="/contact" className="btn">CONTACT</Link>
        </div>
      </section>
    </>
  );
}
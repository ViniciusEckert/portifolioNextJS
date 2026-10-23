import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "404" };

const step = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function NotFound() {
  return (
    <section className="pt-6 sm:pt-16">
      <p className="font-pixel text-xs tracking-widest text-cyan">{"// ERROR"}</p>

      <h1
        className="glitch glow mt-3 font-pixel text-7xl font-bold leading-none sm:text-9xl"
        data-text="404"
      >
        404
      </h1>

      <p className="line mt-6 font-pixel text-sm tracking-widest text-red sm:text-base" style={step(1)}>
        SIGNAL LOST
      </p>

      <div className="line mt-6 max-w-lg space-y-1 font-mono text-sm text-muted" style={step(2)}>
        <p>
          <span className="text-pink">&gt;</span> LOCATING PAGE ........ <span className="text-red">FAILED</span>
        </p>
        <p>
          <span className="text-pink">&gt;</span> A página que você procurou não existe ou foi movida.
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
  );
}
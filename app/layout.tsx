import type { Metadata } from "next";
import { Inter, Silkscreen } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const silkscreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-silkscreen",
});

export const metadata: Metadata = {
  title: {
    default: "Vinicius Eckert | Full Stack Developer",
    template: "%s | Vinicius Eckert",
  },
  description:
    "Portfólio de Vinicius Eckert, desenvolvedor full stack com Node.js, TypeScript, React e Next.js.",
};

const nav = [
  ["/", "HOME"],
  ["/projects", "PROJECTS"],
  ["/about", "ABOUT"],
  ["/contact", "CONTACT"],
];

const pinkWindows: [number, number][] = [
  [16, 19],
  [20, 23],
  [42, 17],
  [46, 21],
  [72, 13],
  [72, 19],
  [98, 20],
  [130, 15],
  [134, 19],
  [156, 18],
  [160, 22],
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${silkscreen.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        {/* Fundo: skyline em pixel art, ruído e scanlines */}
        <svg
          className="skyline"
          viewBox="0 0 192 40"
          preserveAspectRatio="xMidYMax slice"
          shapeRendering="crispEdges"
          aria-hidden="true"
        >
          <g fill="#0d1120">
            <rect x="0" y="22" width="14" height="18" />
            <rect x="14" y="16" width="10" height="24" />
            <rect x="24" y="24" width="16" height="16" />
            <rect x="40" y="14" width="12" height="26" />
            <rect x="52" y="20" width="18" height="20" />
            <rect x="70" y="10" width="10" height="30" />
            <rect x="80" y="22" width="16" height="18" />
            <rect x="96" y="17" width="12" height="23" />
            <rect x="108" y="25" width="20" height="15" />
            <rect x="128" y="12" width="11" height="28" />
            <rect x="139" y="21" width="15" height="19" />
            <rect x="154" y="15" width="12" height="25" />
            <rect x="166" y="23" width="26" height="17" />
          </g>
          <g fill="#06070e">
            <rect x="0" y="30" width="22" height="10" />
            <rect x="30" y="28" width="14" height="12" />
            <rect x="60" y="32" width="24" height="8" />
            <rect x="100" y="30" width="18" height="10" />
            <rect x="150" y="28" width="20" height="12" />
            <rect x="176" y="31" width="16" height="9" />
          </g>
          <g fill="#ff2e88">
            {pinkWindows.map(([x, y]) => (
              <rect key={`${x}-${y}`} x={x} y={y} width="2" height="2" />
            ))}
          </g>
          <rect x="54" y="23" width="2" height="2" fill="#00d9ff" />
          <rect
            className="blink"
            x="75"
            y="6"
            width="1"
            height="4"
            fill="#ff1744"
          />
        </svg>
        <div className="grain" aria-hidden="true" />
        <div className="scanlines" aria-hidden="true" />

        <header className="relative z-10 border-b border-line bg-deep/70 backdrop-blur-sm">
          <nav
            aria-label="Principal"
            className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4"
          >
            <Link href="/" className="font-pixel text-sm font-bold">
              VE<span className="glow text-red">{"//"}</span>DEV
              <span className="cursor ml-1" />
            </Link>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {nav.map(([href, label]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-pixel text-xs tracking-widest text-muted transition-colors hover:text-pink hover:[text-shadow:0_0_8px_rgba(255,46,136,.8)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <main className="relative z-10 mx-auto w-full max-w-4xl flex-1 px-6 py-12">
          {children}
        </main>

        <footer className="relative z-10 border-t border-line bg-deep/70 backdrop-blur-sm">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-6 py-5 font-pixel text-xs tracking-widest text-muted">
            <span>
              © {new Date().getFullYear()} VINICIUS ECKERT{" "}
              <span className="text-cyan">{"// ONLINE"}</span>
            </span>
            <div className="flex gap-5">
              <a
                href="https://github.com/ViniciusEckert"
                className="hover:text-pink"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/vinicius-eckert-0338183a6"
                className="hover:text-pink"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

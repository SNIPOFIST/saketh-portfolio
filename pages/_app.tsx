import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";

import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";

import "../styles/globals.css";
import "@fontsource/syncopate";
import "@fontsource/sen";
import SEO from "../next-seo.config";

// Client-only canvas / interactive layers
const StarParticles = dynamic(
  () => import("@/components/Common/StarParticles"),
  { ssr: false }
);
const ParallaxPokemon = dynamic(
  () => import("@/components/Common/ParallaxPokemon"),
  { ssr: false }
);
const PokemonCursor = dynamic(
  () => import("@/components/Common/PokemonCursor"),
  { ssr: false }
);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ── Layer 0: Star field canvas (fixed) ── */}
      <StarParticles />

      {/* ── Layer 1: Pokemon parallax silhouettes (fixed) ── */}
      <ParallaxPokemon />

      {/* ── Layer 2: Pokeball cursor (fixed, above everything) ── */}
      <PokemonCursor />

      {/* ── Layer 3: Page content ── */}
      <div className="relative z-10">
        <Header />
        <NextNProgress
          color="#FFD700"
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          options={{ showSpinner: false }}
        />
        <DefaultSeo {...SEO} />
        <SocialProfileJsonLd
          type="Person"
          name="Saketh Kilaru"
          url="https://sakethkilaru.dev/"
          sameAs={["https://www.linkedin.com/in/sakethkil/"]}
        />
        <main id="main" className="relative mx-auto mb-16 max-w-4xl px-8">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

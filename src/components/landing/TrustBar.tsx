import bralimpiaLogo from "@/assets/brands/bralimpia.webp";
import cheiroBomLogo from "@/assets/brands/cheiro-bom.webp";
import toQLogo from "@/assets/brands/toQ-logo.png";
import vabeneLogo from "@/assets/brands/vabene-logo.png";
import archoteLogo from "@/assets/brands/archote-logo.png";
import topbelLogo from "@/assets/brands/topbel-logo.png";
import plastsacLogo from "@/assets/brands/plastsac-logo.png";
import aninLogo from "@/assets/brands/anin-logo.png";
import nobreLogo from "@/assets/brands/nobre-logo.png";
import pureairLogo from "@/assets/brands/pureair-logo.png";
import proinsetLogo from "@/assets/brands/proinset-logo.png";
import vejaLogo from "@/assets/brands/veja-logo.png";
import cifLogo from "@/assets/brands/CIF-logo.png";
import poliflorLogo from "@/assets/brands/poliflor-logo.png";
import ouropelLogo from "@/assets/brands/ouropel-logo.png";

const brands = [
  { name: "Bralimpia", logo: bralimpiaLogo },
  { name: "Cheiro Bom", logo: cheiroBomLogo },
  { name: "toQ", logo: toQLogo },
  { name: "Vabene", logo: vabeneLogo },
  { name: "Archote", logo: archoteLogo },
  { name: "Topbel", logo: topbelLogo },
  { name: "Plastsac", logo: plastsacLogo },
  { name: "Anin", logo: aninLogo },
  { name: "Nobre", logo: nobreLogo },
  { name: "PureAir", logo: pureairLogo },
  { name: "Proinset", logo: proinsetLogo },
  { name: "Veja", logo: vejaLogo },
  { name: "CIF", logo: cifLogo },
  { name: "Poliflor", logo: poliflorLogo },
  { name: "Ouropel", logo: ouropelLogo },
];

const TrustBar = () => (
  <section className="border-b border-border py-8" style={{ backgroundColor: "hsl(var(--trust-bar))" }}>
    <div className="container-lp">
      <p className="mb-8 text-center font-heading text-base font-semibold text-foreground/80 md:text-lg">
        Padrão profissional para o seu negócio
      </p>
      <div
        className="group relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center gap-12 group-hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((b, i) => (
            <img
              key={i}
              src={b.logo}
              alt={b.name}
              className="h-10 w-auto object-contain md:h-12"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustBar;

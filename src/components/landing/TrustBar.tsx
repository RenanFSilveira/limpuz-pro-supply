import bralimpiaLogo from "@/assets/brands/bralimpia.webp";
import cheiroBomLogo from "@/assets/brands/cheiro-bom.webp";
import toQLogo from "@/assets/brands/toQ-logo.png";
import vabeneLogo from "@/assets/brands/vabene-logo.png";
import archoteLogo from "@/assets/brands/archote-logo.png";
import topbelLogo from "@/assets/brands/topbel-logo.png";
import delicattoLogo from "@/assets/brands/Delicatto.png";
import floraLogo from "@/assets/brands/Flora.png";
import aninLogo from "@/assets/brands/anin-logo.png";
import nobreLogo from "@/assets/brands/nobre-logo.png";
import proinsetLogo from "@/assets/brands/proinset-logo.png";
import vejaLogo from "@/assets/brands/veja-logo.png";
const brands = [
  { name: "Bralimpia", logo: bralimpiaLogo },
  { name: "Cheiro Bom", logo: cheiroBomLogo },
  { name: "toQ", logo: toQLogo },
  { name: "Vabene", logo: vabeneLogo },
  { name: "Archote", logo: archoteLogo },
  { name: "Topbel", logo: topbelLogo },
  { name: "Delicatto", logo: delicattoLogo },
  { name: "Flora", logo: floraLogo },
  { name: "Anin", logo: aninLogo },
  { name: "Nobre", logo: nobreLogo },
  { name: "Proinset", logo: proinsetLogo },
  { name: "Veja", logo: vejaLogo },
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
        <div className="flex w-max animate-marquee items-center gap-8 group-hover:[animation-play-state:paused]">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-xl bg-white px-4 py-2 shadow-sm ring-1 ring-black/5"
            >
              <img
                src={b.logo}
                alt={b.name}
                className="h-8 w-auto object-contain md:h-10"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustBar;

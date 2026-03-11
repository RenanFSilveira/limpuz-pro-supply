import spartanLogo from "@/assets/brands/spartan.webp";
import bralimpiaLogo from "@/assets/brands/bralimpia.webp";
import cheiroBomLogo from "@/assets/brands/cheiro-bom.webp";
import sevengelLogo from "@/assets/brands/sevengel.webp";
import santherLogo from "@/assets/brands/santher.webp";

const brands = [
  { name: "Santher Professional", logo: santherLogo },
  { name: "Spartan", logo: spartanLogo },
  { name: "Bralimpia", logo: bralimpiaLogo },
  { name: "Sevengel", logo: sevengelLogo },
  { name: "Cheiro Bom", logo: cheiroBomLogo },
];

const TrustBar = () => (
  <section className="border-b border-border py-8" style={{ backgroundColor: "hsl(var(--trust-bar))" }}>
    <div className="container-lp">
      <p className="mb-6 text-center text-sm font-medium text-muted-foreground">
        Produtos de linha profissional testados e aprovados por empresas no RJ.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
        {brands.map((b) => (
          <img
            key={b.name}
            src={b.logo}
            alt={b.name}
            className="h-8 object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0 md:h-10"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;

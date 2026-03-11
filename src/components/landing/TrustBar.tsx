const brands = ["Santher Professional", "Spartan do Brasil", "Bralimpia", "Sevengel", "Cheiro Bom"];

const TrustBar = () => (
  <section className="border-b border-border py-6" style={{ backgroundColor: "hsl(var(--trust-bar))" }}>
    <div className="container-lp">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Marcas que distribuímos
      </p>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {brands.map((brand) => (
          <span
            key={brand}
            className="text-sm font-bold tracking-wide text-primary/70 md:text-base"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBar;

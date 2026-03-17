import { motion } from "framer-motion";
import { Scroll, Droplets, FlaskConical, Wind } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, getCategoryMessage } from "@/lib/whatsapp";
import { pushToDataLayer } from "@/lib/gtm"; // Importando a função do GTM

const categories = [
  {
    icon: Scroll,
    name: "Papéis Profissionais",
    brand: "Nobre",
    benefit: "Papel toalha interfolha, higiênico profissional e bobinas de alta absorção para uso intenso.",
    ideal: "Restaurantes, escritórios, clínicas, academias",
  },
  {
    icon: Droplets,
    name: "Sabonetes e Dispensers",
    brand: "Delicatto",
    benefit: "Sabonete líquido profissional e dispensers de parede — higiênico, econômico e padronizado.",
    ideal: "Banheiros corporativos, salões, clínicas, hotéis",
  },
  {
    icon: FlaskConical,
    name: "Produtos Químicos",
    brand: "Bralimpia · Veja · CIF",
    benefit: "Desengordurante, multiuso, desinfetante e detergente neutro concentrado de alta performance.",
    ideal: "Cozinhas industriais, restaurantes, hospitais",
  },
  {
    icon: Wind,
    name: "Odorizadores Profissionais",
    brand: "Cheiro Bom · PureAir",
    benefit: "Aromatizadores automáticos e refis — ambiente agradável sem esforço manual.",
    ideal: "Recepções, escritórios, banheiros, consultórios",
  },
];

const ProductCatalog = () => (
  <section className="section-padding section-alt">
    <div className="container-lp">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          O que fornecemos
        </p>
        <h2 className="mb-4 text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl">
          Produtos profissionais para cada necessidade
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Tudo o que seu negócio precisa para manter a higiene no padrão — com rendimento real.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col rounded-xl border border-border bg-background p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
              <cat.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-1 text-lg font-bold text-foreground">{cat.name}</h3>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {cat.brand}
            </p>
            <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">{cat.benefit}</p>
            <p className="mb-4 text-xs text-primary font-medium">
              Ideal para: {cat.ideal}
            </p>
            <a
              href={getWhatsAppUrl(getCategoryMessage(cat.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-sm wpp mt-auto justify-center text-xs" // Adicionado a classe wpp
              onClick={() => pushToDataLayer("lead_wpp")} // Adicionado o disparo do GTM
            >
              <WhatsAppIcon className="h-4 w-4" />
              Pedir cotação
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCatalog;
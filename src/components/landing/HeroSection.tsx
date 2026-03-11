import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, DEFAULT_CTA_MESSAGE } from "@/lib/whatsapp";
import heroProducts from "@/assets/hero-products.jpg";

const HeroSection = () => (
  <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
    <div className="container-lp section-padding">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
            Fornecimento técnico para empresas no RJ
          </p>
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Seu negócio ainda depende de produto de limpeza que não rende?
          </h1>
          <p className="mb-8 max-w-lg text-lg leading-relaxed text-primary-foreground/85">
            A Limpuz fornece produtos profissionais concentrados — com suporte técnico, indicação do produto certo e entrega em até 24h no Rio de Janeiro. Sem surpresa, sem recompra de emergência.
          </p>
          <a
            href={getWhatsAppUrl(DEFAULT_CTA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-base md:text-lg"
          >
            <WhatsAppIcon className="h-6 w-6" />
            Quero minha cotação agora
          </a>
          <p className="mt-4 text-sm text-primary-foreground/60">
            Atendimento rápido · Sem compromisso · Entrega em 24h
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block"
        >
          <img
            src={heroProducts}
            alt="Produtos de limpeza profissional Limpuz"
            className="rounded-2xl shadow-2xl"
            loading="eager"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;

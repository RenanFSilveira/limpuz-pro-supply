import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

const FINAL_MESSAGE =
  "Olá! Quero falar com um especialista sobre produtos de limpeza profissional para minha empresa.";

const FinalCTA = () => (
  <section className="section-padding" style={{ background: "var(--hero-gradient)" }}>
    <div className="container-lp">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="mb-6 text-2xl font-extrabold text-primary-foreground md:text-3xl lg:text-4xl">
          Chega de comprar errado e ficar na mão.
        </h2>
        <p className="mb-8 text-lg leading-relaxed text-primary-foreground/85">
          Cada semana usando produto que não rende é dinheiro jogado fora e resultado abaixo do que seu negócio merece. Fale agora com um especialista e descubra o produto certo para sua operação.
        </p>
        <a
          href={getWhatsAppUrl(FINAL_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp text-base md:text-lg"
        >
          <WhatsAppIcon className="h-6 w-6" />
          Falar com especialista agora
        </a>
        <p className="mt-4 text-sm text-primary-foreground/60">
          Atendimento rápido · Entrega em até 24h no RJ · Sem burocracia
        </p>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;

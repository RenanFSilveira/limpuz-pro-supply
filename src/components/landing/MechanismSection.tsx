import { motion } from "framer-motion";
import { MessageCircle, Search, Truck, Headphones, X, Check } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Fale com a gente", desc: "Entre em contato via WhatsApp. Sem formulário, sem espera." },
  { icon: Search, title: "Diagnóstico rápido", desc: "Nosso especialista entende sua demanda e indica o produto certo para cada uso." },
  { icon: Truck, title: "Entrega em até 24h", desc: "Produto profissional concentrado entregue na sua porta, no RJ." },
  { icon: Headphones, title: "Suporte contínuo", desc: "Dúvida de dosagem ou aplicação? A equipe responde — sempre." },
];

const compLeft = [
  "Produto diluído de prateleira",
  "Sem orientação de uso",
  "Rende pouco, recompra constante",
  "Sem suporte técnico",
];

const compRight = [
  "Produto concentrado de linha profissional",
  "Indicação técnica para cada superfície",
  "Alto rendimento, menos recompra",
  "Suporte técnico incluído",
];

const MechanismSection = () => (
  <section className="section-padding">
    <div className="container-lp">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          Fornecimento Técnico
        </p>
        <h2 className="mb-4 text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl">
          Como funciona na prática
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Produto certo, dosagem certa, entrega rápida. Simples assim.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="mx-auto mb-16 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-background p-6 text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary">
              <s.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="mb-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Passo {i + 1}
            </div>
            <h3 className="mb-2 font-bold text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl"
      >
        <h3 className="mb-6 text-center text-xl font-bold text-foreground">
          Por que é diferente?
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
            <p className="mb-4 font-bold text-destructive">Supermercado / Atacadão</p>
            <ul className="space-y-3">
              {compLeft.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
            <p className="mb-4 font-bold text-accent">Fornecimento Técnico</p>
            <ul className="space-y-3">
              {compRight.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default MechanismSection;

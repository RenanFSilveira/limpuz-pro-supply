import { motion } from "framer-motion";
import { MessageCircle, Search, Truck, Headphones, X, Check } from "lucide-react";

const WhatsAppMonochrome = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const steps = [
  { icon: WhatsAppMonochrome, title: "Fale com a gente", desc: "Entre em contato via WhatsApp. Sem formulário, sem espera." },
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

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const stats = [
  { value: "8+", label: "Anos atendendo empresas no RJ" },
  { value: "500+", label: "Empresas atendidas" },
  { value: "24h", label: "Prazo de entrega no RJ" },
];

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Gerente de compras — Rede de restaurantes",
    text: "Antes a gente comprava no Atacadão e vivia ficando sem produto. Desde que começamos com o fornecedor, nunca mais faltou. O rendimento do concentrado é outro nível.",
  },
  {
    name: "Patrícia Alves",
    role: "Proprietária — Clínica odontológica",
    text: "O que me ganhou foi o suporte. Eu não entendia nada de produto de limpeza profissional. A equipe me indicou tudo — e entregou no dia seguinte.",
  },
  {
    name: "Roberto Farias",
    role: "Coordenador de facilities — Escritório corporativo",
    text: "A previsibilidade mudou tudo. Faço o pedido pelo WhatsApp, chega no prazo, e se tenho dúvida de dosagem, resolvo em 5 minutos com eles.",
  },
];

const SocialProof = () => (
  <section className="section-padding">
    <div className="container-lp">
      {/* Stats */}
      <div className="mx-auto mb-16 grid max-w-3xl gap-6 md:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl bg-primary p-8 text-center"
          >
            <div className="text-4xl font-extrabold text-primary-foreground">{s.value}</div>
            <div className="mt-1 text-sm text-primary-foreground/75">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-10 text-2xl font-extrabold text-foreground md:text-3xl">
          O que nossos clientes dizem
        </h2>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-background p-6"
          >
            <div className="mb-3 flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
            <div>
              <p className="text-sm font-bold text-foreground">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Credibility line */}
      <div className="mt-16 text-center">
        <p className="text-sm font-medium text-muted-foreground">
          Produtos de linha profissional testados e aprovados por empresas no RJ.
        </p>
      </div>
    </div>
  </section>
);

export default SocialProof;

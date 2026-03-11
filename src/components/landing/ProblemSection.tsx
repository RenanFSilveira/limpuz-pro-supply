import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  {
    title: "Produto que acaba rápido demais",
    desc: "Fórmulas diluídas de prateleira rendem pouco. Você compra mais vezes, gasta mais e nunca tem estoque seguro.",
  },
  {
    title: "Custo invisível que pesa no final do mês",
    desc: "O preço unitário parece baixo, mas o custo por aplicação é alto. Produto fraco exige mais quantidade — e o orçamento estoura sem você perceber.",
  },
  {
    title: "Sem orientação, sem padrão",
    desc: "Ninguém na equipe sabe a dosagem certa. O produto é desperdiçado, o resultado fica irregular e o ambiente nunca fica realmente limpo.",
  },
];

const ProblemSection = () => (
  <section className="section-padding section-alt">
    <div className="container-lp">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">
          O problema que ninguém fala
        </p>
        <h2 className="mb-4 text-2xl font-extrabold text-foreground md:text-3xl lg:text-4xl">
          Se você ainda compra produto de limpeza no supermercado para o seu negócio…
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          …está pagando mais caro, com menos resultado e zero suporte. Isso tem consequências reais:
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-destructive/20 bg-background p-6"
          >
            <AlertTriangle className="mb-3 h-6 w-6 text-destructive" />
            <h3 className="mb-2 text-base font-bold text-foreground">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium text-foreground"
      >
        Existe uma forma melhor: produto técnico, fornecedor especializado, entrega que não falha.
      </motion.p>
    </div>
  </section>
);

export default ProblemSection;

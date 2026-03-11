import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Produto profissional é mais caro que o do supermercado?",
    a: "Na prateleira, o preço unitário pode parecer menor. Mas produto de supermercado é diluído — você usa muito mais por aplicação. Produto concentrado profissional rende até 5x mais. Quando você compara o custo por aplicação, o profissional sai mais barato e entrega resultado melhor.",
  },
  {
    q: "Não sei qual produto usar para o meu caso. Como faço?",
    a: "É só chamar a gente no WhatsApp. Nosso especialista entende o seu tipo de operação — restaurante, clínica, escritório — e indica exatamente o produto certo para cada superfície e aplicação. Sem custo adicional.",
  },
  {
    q: "Meu pedido é pequeno. Vocês atendem?",
    a: "Sim. Atendemos desde pequenos negócios até grandes operações no Rio de Janeiro. Não importa o tamanho do pedido — o que importa é que você tenha o produto certo, na hora certa.",
  },
  {
    q: "Já tive problema com fornecedor que não entregou no prazo. Como garantem?",
    a: "Entregamos em até 24h no RJ. E você acompanha tudo pelo WhatsApp — do pedido à entrega. Se algo fugir do combinado, você fala direto com quem resolve. Sem 0800, sem protocolo, sem demora.",
  },
];

const FAQSection = () => (
  <section className="section-padding section-alt">
    <div className="container-lp">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-4 text-2xl font-extrabold text-foreground md:text-3xl">
          Dúvidas frequentes
        </h2>
        <p className="mb-10 text-lg text-muted-foreground">
          Respostas diretas para as perguntas que mais ouvimos.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-2xl"
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-background px-6"
            >
              <AccordionTrigger className="text-left text-sm font-bold text-foreground hover:no-underline md:text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;

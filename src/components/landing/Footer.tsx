const Footer = () => (
  <footer className="border-t border-border bg-background px-4 py-8">
    <div className="container-lp text-center">
      <div className="mb-2 text-lg font-heading font-bold text-primary">Limpuz</div>
      <p className="text-sm text-muted-foreground">
        Fornecimento técnico de produtos de limpeza profissional · Rio de Janeiro
      </p>
      <p className="mt-4 text-xs text-muted-foreground/60">
        © {new Date().getFullYear()} Limpuz. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;

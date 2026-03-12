import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, DEFAULT_CTA_MESSAGE } from "@/lib/whatsapp";
import { pushToDataLayer } from "@/lib/gtm";

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
    <div className="container-lp flex h-16 items-center justify-between">
      <span className="text-sm font-semibold text-foreground md:text-base">Fornecedor de Higiene Profissional RJ</span>
      <a
        href={getWhatsAppUrl(DEFAULT_CTA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp-sm wpp"
        onClick={() => pushToDataLayer("lead_wpp")}
      >
        <WhatsAppIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Solicitar Cotação</span>
        <span className="sm:hidden">Cotação</span>
      </a>
    </div>
  </header>
);

export default Header;

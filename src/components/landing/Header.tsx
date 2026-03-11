import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl, DEFAULT_CTA_MESSAGE } from "@/lib/whatsapp";

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
    <div className="container-lp flex h-16 items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <span className="text-lg font-bold text-primary-foreground">L</span>
        </div>
        <span className="text-xl font-heading font-bold text-primary">Limpuz</span>
      </div>
      <a
        href={getWhatsAppUrl(DEFAULT_CTA_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-whatsapp-sm"
      >
        <WhatsAppIcon className="h-4 w-4" />
        <span className="hidden sm:inline">Solicitar Cotação</span>
        <span className="sm:hidden">Cotação</span>
      </a>
    </div>
  </header>
);

export default Header;

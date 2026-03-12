const WHATSAPP_NUMBER = "5521999769500"; // Substituir pelo número real

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const DEFAULT_CTA_MESSAGE =
  "Olá! Gostaria de solicitar uma cotação de produtos de limpeza profissional para minha empresa.";

export const getCategoryMessage = (category: string) =>
  `Olá! Tenho interesse em produtos da categoria "${category}". Gostaria de receber uma cotação.`;

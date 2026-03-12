declare global {
  interface Window {
    dataLayer: Record<string, any>[];
  }
}

export const pushToDataLayer = (eventName: string) => {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName });
  }
};
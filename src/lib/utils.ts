import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Build Hotmart checkout URL with sequential src and optional sck (UTM payload)
export function buildCheckoutUrl(src: string): string {
  const base = "https://pay.hotmart.com/B102079638B?checkoutMode=10";
  // Safely read query params on client to forward as sck
  if (typeof window !== "undefined") {
    const qs = window.location.search.replace(/^\?/, "");
    if (qs) {
      return `${base}&src=${encodeURIComponent(src)}&sck=${encodeURIComponent(qs)}`;
    }
  }
  return `${base}&src=${encodeURIComponent(src)}`;
}

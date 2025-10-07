import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ===== META PIXEL FALLBACK INIT =====
// Garante que o Pixel seja iniciado mesmo se o index.html não carregar o snippet
function initMetaPixelIfMissing() {
  const w = window as any;
  if (w.fbq) {
    // Já existe fbq (provavelmente vindo do index.html)
    return;
  }
  (function (f: any, b: Document, e: string, v: string, n?: any, t?: HTMLScriptElement, s?: Element) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments as any) : n.queue.push(arguments as any);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e) as HTMLScriptElement;
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0] as Element;
    s.parentNode?.insertBefore(t, s);
  })(window as any, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  try {
    (window as any).fbq("init", "1265651664965507");
    (window as any).fbq("track", "PageView");
    console.log("Meta Pixel fallback inicializado");
  } catch (err) {
    console.warn("Falha ao inicializar Meta Pixel fallback", err);
  }
}

initMetaPixelIfMissing();

// ===== OVERLAY LOADING SCREEN REMOVAL ===== 
// JavaScript para remoção dinâmica do overlay de carregamento
function removeLoadingOverlay() {
  // Aguardar DOM estar completamente carregado
  const removeOverlays = () => {
    // Procurar por overlay específico mencionado
    const specificOverlay = document.querySelector('div.sc-gEvEer.kKIeyJ');
    if (specificOverlay) {
      specificOverlay.remove();
      console.log('Overlay específico removido:', specificOverlay);
    }

    // Procurar por overlays genéricos com z-index alto
    const highZIndexElements = document.querySelectorAll('[style*="z-index: 9999"], [style*="z-index:9999"]');
    highZIndexElements.forEach(element => {
      const style = element.getAttribute('style') || '';
      if (style.includes('position: fixed') && 
          style.includes('top: 0') && 
          style.includes('width: 100%') && 
          style.includes('height: 100%')) {
        element.remove();
        console.log('Overlay genérico removido:', element);
      }
    });

    // Procurar por elementos com classes que contenham sc-gEvEer ou kKIeyJ
    const classBasedOverlays = document.querySelectorAll('[class*="sc-gEvEer"], [class*="kKIeyJ"]');
    classBasedOverlays.forEach(element => {
      const classList = element.className;
      if (classList.includes('sc-gEvEer') || classList.includes('kKIeyJ')) {
        element.style.display = 'none';
        element.style.visibility = 'hidden';
        console.log('Overlay baseado em classe ocultado:', element);
      }
    });
  };

  // Executar imediatamente
  removeOverlays();
  
  // Executar quando DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', removeOverlays);
  }
  
  // Executar após carregamento completo da página
  window.addEventListener('load', removeOverlays);
  
  // Observer para elementos adicionados dinamicamente
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as Element;
          const className = element.className || '';
          const style = element.getAttribute('style') || '';
          
          // Verificar se é um overlay problemático
          if ((className.includes('sc-gEvEer') || className.includes('kKIeyJ')) ||
              (style.includes('z-index: 9999') && style.includes('position: fixed'))) {
            element.remove();
            console.log('Overlay dinâmico removido:', element);
          }
        }
      });
    });
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
}

// Inicializar remoção de overlay
removeLoadingOverlay();

createRoot(document.getElementById("root")!).render(<App />);

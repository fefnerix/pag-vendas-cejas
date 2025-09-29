import { useState } from "react";

export default function EbookMockup({
  src = "/new-ebook-mockup.png",
  alt = "Guía completa del diseño de cejas",
  className = "",
}: { src?: string; alt?: string; className?: string }) {
  const [error, setError] = useState(false);

  return (
    <div className="relative group">
      <img
        src={error ? "/placeholder.svg" : "/new-ebook-mockup.png"}
        alt="Guía Completa del Diseño de Cejas - Ebook"
        className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] h-auto rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,.35)] -rotate-3 translate-x-2 translate-y-1 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 transition-all duration-500"
        onError={() => setError(true)}
        loading="eager"
      />
      
      {/* Subtle glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-2xl -rotate-3 translate-x-2 translate-y-1 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 pointer-events-none" />
      
      {/* Floating NUEVO badge */}
      <div className="absolute -top-3 -right-3 bg-accent text-neutral-900 px-3 py-1.5 rounded-full text-xs font-bold shadow-lg animate-bounce">
        ¡NUEVO!
      </div>
    </div>
  );
}
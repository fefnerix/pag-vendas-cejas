import { useEffect, useState } from "react";

/** Barra de "cupones usados" para a primeira dobra (não-fixa).
 *  Sobe 94 → 106 (+1% a cada 1.5s). Visual limita em 100%.
 */
export default function CouponsUsedBarFinal({
  start = 94,
  end = 106,
  stepMs = 1500,
  className = "",
}: {
  start?: number; end?: number; stepMs?: number; className?: string;
}) {
  const [pct, setPct] = useState(start);

  useEffect(() => {
    if (start >= end) return;
    const id = setInterval(() => {
      setPct(p => (p + 1 >= end ? (clearInterval(id), end) as unknown as number : p + 1));
    }, stepMs);
    return () => clearInterval(id);
  }, [start, end, stepMs]);

  const visual = Math.min(100, Math.max(0, pct));

  return (
    <div role="region" aria-label={`Progreso de cupones usados: ${pct}%`} className={`w-full ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Card translúcido (glass) — não acompanha o scroll */}
        <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.18)] px-4 py-3 sm:px-5">
          {/* header compacto: mobile-first */}
          <div className="flex items-center justify-between gap-3 text-white">
            <p className="text-[13px] font-semibold tabular-nums">
              <span className="sm:hidden">{pct}% usados</span>
              <span className="hidden sm:inline">{pct}% de cupones usados</span>
            </p>

            {pct > 100 && (
              <span className="hidden xs:inline-flex items-center rounded-full px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide bg-gradient-to-r from-amber-400 to-rose-400 text-black/90 shadow-[0_6px_18px_rgba(251,191,36,0.35)]">
                ¡Agotándose!
              </span>
            )}
          </div>

          {/* progresso estilizado */}
          <div className="mt-3 h-2.5 w-full rounded-full bg-red-200/60 overflow-hidden" aria-hidden>
            <div
              className="h-full rounded-full relative bg-gradient-to-r from-red-500 via-red-600 to-red-700 shadow-[0_0_18px_rgba(220,38,38,0.45)_inset] transition-[width] duration-700 ease-out"
              style={{ width: `${visual}%` }}
            >
              {/* listras sutis */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "repeating-linear-gradient(45deg,#fff 0 8px,transparent 8px 16px)",
                  animation: "scarcityStripes 2.2s linear infinite",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* keyframes locais */}
      <style>{`
        @keyframes scarcityStripes {
          0% { transform: translateX(0); }
          100% { transform: translateX(32px); }
        }
      `}</style>
    </div>
  );
}
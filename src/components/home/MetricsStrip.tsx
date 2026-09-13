import Counter from "@/components/Counter";
import { METRICS } from "@/data/metrics";

// Oculto hasta tener cifras reales confirmadas (ver src/data/metrics.ts).
export default function MetricsStrip() {
  if (METRICS.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-8 border-t border-white/15 pt-10 sm:grid-cols-4">
      {METRICS.map((metric) => (
        <div key={metric.label}>
          <p className="font-display text-4xl font-medium text-white sm:text-5xl">
            <Counter value={metric.value} />
          </p>
          <p className="mt-2 text-xs uppercase tracking-wide text-white/50">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}

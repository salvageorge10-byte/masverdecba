import { COMMERCIAL_CONDITIONS } from "@/data/company";

export default function TrustStrip() {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-paper)]">
      <div className="mx-auto grid max-w-[1440px] divide-y divide-[var(--color-line)] px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:px-10">
        {COMMERCIAL_CONDITIONS.map((item) => (
          <div key={item.title} className="flex items-start gap-4 py-6 sm:px-8">
            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--color-grass)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-ink)]">{item.title}</p>
              <p className="mt-1 text-[13px] leading-snug text-[var(--color-ink-soft)]">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

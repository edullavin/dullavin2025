import PageTransition from "@/components/global/PageTransition";

export default function DesignSystem() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-4 py-14 md:py-18">
        <h1 className="font-heading text-3xl md:text-4xl">Design System Revamp</h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          Systems & Accessibility • 2023
        </p>

        <div className="mt-8 space-y-6">
          <p>
            Summarize design token strategy, component architecture, and documentation approach.
          </p>
          <p>
            Call out accessibility standards and audits, and how they shaped the system.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}

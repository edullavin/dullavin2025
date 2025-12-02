import PageTransition from "@/components/global/PageTransition";

export default function MobileCheckout() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-4 py-14 md:py-18">
        <h1 className="font-heading text-3xl md:text-4xl">Mobile Checkout Flow</h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">UX & Interaction • 2022</p>

        <div className="mt-8 space-y-6">
          <p>
            Describe the conversion goals, pain points, and constraints. Highlight key interaction
            decisions and motion principles.
          </p>
          <p>
            Include A/B learnings or usability testing outcomes that influenced iterations.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}

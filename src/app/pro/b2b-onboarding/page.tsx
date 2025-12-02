import PageTransition from "@/components/global/PageTransition";

export default function B2BOnboarding() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-4 py-14 md:py-18">
        <h1 className="font-heading text-3xl md:text-4xl">B2B Onboarding Redesign</h1>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          Lead Product Designer • 2024
        </p>

        <div className="mt-8 space-y-6">
          <p>
            Outline the challenge, constraints, and desired outcomes. Add research notes,
            key insights, and how they informed the solution.
          </p>
          <p>
            Describe the redesigned workflow, major interaction patterns, and validation steps.
            Include metrics or qualitative feedback if available.
          </p>
        </div>
      </section>
    </PageTransition>
  );
}

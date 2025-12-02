import PageTransition from "@/components/global/PageTransition";
import ProjectCard from "@/components/pro/ProjectCard";
import { projects } from "@/app/work/projects";

export default function Pro() {
  return (
    <PageTransition>
      <section className="min-h-screen w-full">
        {/* Hero */}
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
          <div className="mb-8 flex items-center justify-between gap-6">
            <div>
              <h1 className="text-priority font-heading text-4xl md:text-5xl">Product Design Portfolio</h1>
              <p className="mt-3 max-w-2xl text-neutral-700 dark:text-neutral-300">
                Selected work across product strategy, UX, and interaction design.
                Exploring outcomes, constraints, and the craft behind the solutions.
              </p>
            </div>
          </div>

          {/* Overview chips */}
          <div className="mb-10 flex flex-wrap gap-3">
            {[
              "Product Strategy",
              "UX Research",
              "Interaction Design",
              "Design Systems",
              "Prototyping",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary-200/60 bg-primary-50 px-3 py-1.5 text-sm text-primary-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard
                key={p.slug}
                title={p.title}
                role={p.role}
                period={p.period}
                tags={p.tags}
                href={`/work/${p.slug}`}
                image={p.image}
              />
            ))}
          </div>

          {/* Note for adding content */}
          <div className="mt-12 text-sm text-neutral-600 dark:text-neutral-400">
            <p>
              To add or update projects, edit this page and duplicate
              the `ProjectCard` entries, updating `title`, `role`, `period`, `tags`,
              `href`, and `image.src`. Images should be placed under `public/images/`.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
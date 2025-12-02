import PageTransition from "@/components/global/PageTransition";
import ProjectDetailLayout from "@/components/pro/ProjectDetailLayout";

export default function DesignSystem() {
  return (
    <PageTransition>
      <ProjectDetailLayout
        title="Design System Revamp"
        meta="Systems & Accessibility • 2023"
        heroImage={{ src: "/images/placeholder-2.jpg", alt: "Component library grid" }}
        gallery={[
          { src: "/images/placeholder-2.jpg", alt: "Token ramp" },
          { src: "/images/placeholder-1.jpg", alt: "Docs example" },
          { src: "/images/placeholder-3.jpg", alt: "Component variants" },
        ]}
      >
        <p>
          Summarize design token strategy, component architecture, and documentation approach.
        </p>
        <p>
          Call out accessibility standards and audits, and how they shaped the system.
        </p>
      </ProjectDetailLayout>
    </PageTransition>
  );
}

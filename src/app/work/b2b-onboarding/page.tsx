import PageTransition from "@/components/global/PageTransition";
import ProjectDetailLayout from "@/components/pro/ProjectDetailLayout";

export default function B2BOnboarding() {
  return (
    <PageTransition>
      <ProjectDetailLayout
        title="B2B Onboarding Redesign"
        meta="Lead Product Designer • 2024"
        heroImage={{ src: "/images/placeholder-1.jpg", alt: "Onboarding analytics dashboard" }}
        gallery={[
          { src: "/images/placeholder-1.jpg", alt: "Workflow overview" },
          { src: "/images/placeholder-2.jpg", alt: "Step detail" },
          { src: "/images/placeholder-3.jpg", alt: "Validation screen" },
        ]}
      >
        <p>
          Outline the challenge, constraints, and desired outcomes. Add research notes, key
          insights, and how they informed the solution.
        </p>
        <p>
          Describe the redesigned workflow, major interaction patterns, and validation steps.
          Include metrics or qualitative feedback if available.
        </p>
      </ProjectDetailLayout>
    </PageTransition>
  );
}

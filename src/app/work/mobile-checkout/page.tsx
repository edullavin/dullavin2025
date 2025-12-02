import PageTransition from "@/components/global/PageTransition";
import ProjectDetailLayout from "@/components/pro/ProjectDetailLayout";

export default function MobileCheckout() {
  return (
    <PageTransition>
      <ProjectDetailLayout
        title="Mobile Checkout Flow"
        meta="UX & Interaction • 2022"
        heroImage={{ src: "/images/placeholder-3.jpg", alt: "Checkout screens" }}
        gallery={[
          { src: "/images/placeholder-3.jpg", alt: "Motion pattern" },
          { src: "/images/placeholder-1.jpg", alt: "A/B test results" },
          { src: "/images/placeholder-2.jpg", alt: "Payment step" },
        ]}
      >
        <p>
          Describe the conversion goals, pain points, and constraints. Highlight key interaction
          decisions and motion principles.
        </p>
        <p>
          Include A/B learnings or usability testing outcomes that influenced iterations.
        </p>
      </ProjectDetailLayout>
    </PageTransition>
  );
}

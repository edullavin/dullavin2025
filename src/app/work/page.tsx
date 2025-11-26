import PageTransition from "@/components/global/PageTransition";

export default function Work() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-heading mb-4">Work</h1>
        <p className="text-lg">This is the work page.</p>
      </div>
    </PageTransition>
  );
}
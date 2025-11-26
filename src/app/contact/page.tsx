import PageTransition from "@/components/global/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-heading mb-4">Contact</h1>
        <p className="text-lg">This is the contact page.</p>
      </div>
    </PageTransition>
  );
}
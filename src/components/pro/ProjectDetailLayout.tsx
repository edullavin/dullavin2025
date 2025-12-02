import { cn } from "@/lib/utils";

type GalleryItem = {
  src: string;
  alt?: string;
};

type ProjectDetailLayoutProps = {
  title: string;
  meta?: string; // e.g., "Lead Product Designer • 2024"
  heroImage?: GalleryItem;
  gallery?: GalleryItem[];
  className?: string;
  children?: React.ReactNode; // content sections
};

export default function ProjectDetailLayout({
  title,
  meta,
  heroImage,
  gallery = [],
  className,
  children,
}: ProjectDetailLayoutProps) {
  return (
    <section className={cn("mx-auto max-w-6xl px-4 py-14 md:py-18", className)}>
      <header>
        <h1 className="font-heading text-3xl md:text-4xl">{title}</h1>
        {meta && (
          <p className="mt-3 text-neutral-700 dark:text-neutral-300">{meta}</p>
        )}
      </header>

      {heroImage && (
        <div className="mt-8 overflow-hidden rounded-2xl border border-primary-200/40 bg-white/50 dark:bg-neutral-900/50">
          <div className="relative aspect-video w-full">
            <img
              src={heroImage.src}
              alt={heroImage.alt ?? title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1200px"
              priority
            />
          </div>
        </div>
      )}

      {/* Content sections */}
      <div className="prose prose-neutral dark:prose-invert mt-10 max-w-none">
        {children}
      </div>

      {/* Gallery */}
      {gallery.length > 0 && (
        <div className="mt-12">
          <h2 className="font-heading text-2xl">Gallery</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((img) => (
              <figure
                key={img.src}
                className="overflow-hidden rounded-xl border border-primary-200/40 bg-white/50 dark:bg-neutral-900/50"
              >
                <div className="relative aspect-video w-full">
                  <img
                    src={img.src}
                    alt={img.alt ?? ""}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

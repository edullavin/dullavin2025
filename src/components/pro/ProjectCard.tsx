import Link from "next/link";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  role?: string;
  period?: string;
  tags?: string[];
  href?: string;
  image?: {
    src: string;
    alt?: string;
  };
  className?: string;
};

export default function ProjectCard({
  title,
  role,
  period,
  tags = [],
  href,
  image,
  className,
}: ProjectCardProps) {
  const Card = (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-primary-200/40 bg-white/60 shadow-sm backdrop-blur-sm transition hover:shadow-md dark:bg-neutral-900/60",
        className
      )}
    >
      {image?.src && (
        <div className="relative aspect-video w-full">
          <img
            src={image.src}
            alt={image.alt ?? title}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      )}

      <div className="p-4 md:p-5">
        <h3 className="font-heading text-xl md:text-2xl">{title}</h3>
        {(role || period) && (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
            {[role, period].filter(Boolean).join(" • ")}
          </p>
        )}

        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-primary-200/60 bg-primary-50 px-2.5 py-1 text-xs text-primary-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );

  if (href) {
    return (
      <Link href={href} className="rounded-2xl block focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2">
        {Card}
      </Link>
    );
  }

  return Card;
}
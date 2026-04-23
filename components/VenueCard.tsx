import Image from "next/image";
import Link from "next/link";
import type { ScoredVenue } from "@/types/venue";

interface VenueCardProps {
  venue: ScoredVenue;
  rank: number;
  isActive?: boolean;
  onHover?: () => void;
  onLeave?: () => void;
}

function formatAgeRange(range: string): string {
  return range.replace(/-/g, "–");
}

export default function VenueCard({ venue, rank, isActive, onHover, onLeave }: VenueCardProps) {
  const genreDisplay = venue.primaryGenres.slice(0, 3).join(", ");
  const rawHero = venue.images?.[0];
  const heroSrc = typeof rawHero === "string" && rawHero.trim() ? rawHero.trim() : undefined;

  return (
    <Link
      href={`/venue/${venue.id}`}
      className="block h-full"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <article
        className={`group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-200 hover:shadow-lg ${
          isActive
            ? "border-zinc-900 shadow-md ring-1 ring-zinc-900"
            : "border-zinc-100 hover:border-zinc-200"
        }`}
      >
        <span className="absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-zinc-200/80 bg-white/95 text-xs font-semibold text-zinc-500 shadow-sm">
          {rank}
        </span>

        {heroSrc ? (
          <div className="relative w-full shrink-0 overflow-hidden bg-zinc-100">
            <Image
              src={heroSrc}
              alt={venue.name}
              width={1000}
              height={600}
              className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="h-[200px] w-full shrink-0 bg-zinc-100 sm:h-[220px]" aria-hidden />
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-2">
            <h3 className="text-base font-semibold leading-tight text-zinc-900">{venue.name}</h3>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-zinc-400">
              {venue.suburb}
            </p>
          </div>

          <p className="mb-2 text-sm font-medium leading-snug text-zinc-800">{venue.highlight}</p>

          <p className="mb-5 flex-1 text-sm leading-relaxed text-zinc-500">{venue.description}</p>

          <div className="space-y-1.5 text-xs text-zinc-500">
            {genreDisplay && (
              <div className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 flex-shrink-0 text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18 3a1 1 0 0 0-1.196-.98l-10 2A1 1 0 0 0 6 5v6.499A3.001 3.001 0 1 0 8 14V8.82l8-1.6V11.5A3.001 3.001 0 1 0 18 13V3Z" />
                </svg>
                <span className="capitalize">{genreDisplay}</span>
              </div>
            )}

            <div className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5 flex-shrink-0 text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM17 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 0 0-1.5-4.33A5 5 0 0 1 19 16v1h-6.07ZM6 11a5 5 0 0 1 5 5v1H1v-1a5 5 0 0 1 5-5Z" />
              </svg>
              <span>Ages {formatAgeRange(venue.ageRange)}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg className="h-3.5 w-3.5 flex-shrink-0 text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.75 10.818c.193-.54.224-1.11.085-1.665l-1.96-.686a2.5 2.5 0 0 0-.573 2.83l2.448-.479ZM10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Zm1.12 11.414-.696.173A3.5 3.5 0 0 1 7 10.001L7 10a3.5 3.5 0 0 1 2.31-3.297l.125-.042.5-1.324.94.356-.5 1.323.137.048a3.5 3.5 0 0 1 2.163 2.87l.01.197-.94.164-.01-.197a2.5 2.5 0 0 0-1.546-2.05l-.128-.046-1.005 2.663a2.5 2.5 0 0 0 2.45 3.454l.697-.172-.184.941Z" />
              </svg>
              <span>{venue.cost}</span>
            </div>

            {venue.entryFee && (
              <div className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 flex-shrink-0 text-zinc-300" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5 5a3 3 0 0 1 5.268-1.954A3 3 0 1 1 9 8.817V9h2v1H9v1h2v1H9v3H8v-3H6v-1h2v-1H6v-1h2v-.183A3 3 0 0 1 5 5Zm3-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{venue.entryFee}</span>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

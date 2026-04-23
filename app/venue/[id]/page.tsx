import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { getVenueById, venues } from "@/lib/venues";
import type { MusicIntent } from "@/types/venue";

const VenueMap = dynamic(() => import("@/components/VenueMap"), { ssr: false });

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  const ids = [...new Set(venues.map((v) => v.id))];
  return ids.map((id) => ({ id }));
}

function musicIntentLabel(intent: MusicIntent): string {
  switch (intent) {
    case "primary":
      return "Music is the focus";
    case "secondary":
      return "Music is part of the experience";
    case "incidental":
      return "Background music";
  }
}

export default function VenuePage({ params }: Props) {
  const venue = getVenueById(params.id);
  if (!venue) notFound();

  const imageList = (venue.images ?? []).filter(
    (u): u is string => typeof u === "string" && u.trim().length > 0
  );
  const heroImage = imageList[0];
  const galleryImages = imageList.slice(1);

  const genreDisplay = [
    venue.primaryGenres.map((g) => g.charAt(0).toUpperCase() + g.slice(1)).join(", "),
    venue.secondaryGenres.length > 0
      ? `Also: ${venue.secondaryGenres.map((g) => g.charAt(0).toUpperCase() + g.slice(1)).join(", ")}`
      : null,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="sticky top-0 z-10 border-b border-zinc-100 bg-zinc-50/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-5xl items-center px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M10 3L5 8L10 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back
          </Link>
          <span className="mx-3 text-zinc-200">|</span>
          <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-900">
            fomo
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10">
        {heroImage ? (
          <div
            className={`mb-10 grid h-72 gap-2 overflow-hidden rounded-2xl sm:h-96 ${
              galleryImages.length > 0 ? "grid-cols-3" : "grid-cols-1"
            }`}
          >
            <div className={`relative ${galleryImages.length > 0 ? "col-span-2" : "col-span-1"}`}>
              <Image
                src={heroImage}
                alt={venue.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>
            {galleryImages.length > 0 && (
              <div className="flex flex-col gap-2">
                {galleryImages.slice(0, 2).map((src: string, i: number) => (
                  <div key={`${src}-${i}`} className="relative flex-1">
                    <Image
                      src={src}
                      alt={`${venue.name} — photo ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 320px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div
            className="mb-10 flex h-72 items-center justify-center rounded-2xl border border-dashed border-zinc-200 bg-zinc-100 text-sm text-zinc-500 sm:h-96"
            role="img"
            aria-label="No photos available"
          >
            No photos for this venue yet.
          </div>
        )}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {venue.suburb}
              </p>
              <h1 className="mb-2 text-3xl font-bold leading-tight tracking-tight text-zinc-900">
                {venue.name}
              </h1>
              <p className="mb-3 text-base font-medium text-zinc-700">{venue.highlight}</p>
              <p className="text-base leading-relaxed text-zinc-500">{venue.description}</p>
            </div>

            <section>
              <h2 className="mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                What to expect
              </h2>
              <div className="space-y-5">
                {genreDisplay && (
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 w-5 flex-shrink-0 text-zinc-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path d="M18 3a1 1 0 0 0-1.196-.98l-10 2A1 1 0 0 0 6 5v6.499A3.001 3.001 0 1 0 8 14V8.82l8-1.6V11.5A3.001 3.001 0 1 0 18 13V3ZM5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm11-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">Music</p>
                      <p className="text-sm text-zinc-700">{genreDisplay}</p>
                      <p className="mt-0.5 text-xs text-zinc-400">{musicIntentLabel(venue.musicIntent)}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-5 flex-shrink-0 text-zinc-300">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM17 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 0 0-1.5-4.33A5 5 0 0 1 19 16v1h-6.07ZM6 11a5 5 0 0 1 5 5v1H1v-1a5 5 0 0 1 5-5Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">Crowd</p>
                    <p className="text-sm text-zinc-700">Ages {venue.ageRange.replace(/-/g, "–")}</p>
                  </div>
                </div>

                {venue.detail && (
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 w-5 flex-shrink-0 text-zinc-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">Note</p>
                      <p className="text-sm text-zinc-700">{venue.detail}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-5 flex-shrink-0 text-zinc-300">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d="M10.75 10.818c.193-.54.224-1.11.085-1.665l-1.96-.686a2.5 2.5 0 0 0-.573 2.83l2.448-.479ZM10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Zm1.12 11.414-.696.173A3.5 3.5 0 0 1 7 10.001L7 10a3.5 3.5 0 0 1 2.31-3.297l.125-.042.5-1.324.94.356-.5 1.323.137.048a3.5 3.5 0 0 1 2.163 2.87l.01.197-.94.164-.01-.197a2.5 2.5 0 0 0-1.546-2.05l-.128-.046-1.005 2.663a2.5 2.5 0 0 0 2.45 3.454l.697-.172-.184.941Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">Cost</p>
                    <p className="text-sm text-zinc-700">{venue.cost}</p>
                  </div>
                </div>

                {venue.entryFee && (
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 w-5 flex-shrink-0 text-zinc-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path
                          fillRule="evenodd"
                          d="M13 3a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 0 1 2 0v1h4V4a1 1 0 0 1 1-1ZM5 9v7h10V9H5Zm2 2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="mb-0.5 text-xs font-semibold uppercase tracking-wide text-zinc-400">Entry</p>
                      <p className="text-sm text-zinc-700">{venue.entryFee}</p>
                    </div>
                  </div>
                )}
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <div className="space-y-4 rounded-2xl border border-zinc-100 bg-white p-5">
              <div>
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400">Address</p>
                <p className="text-sm leading-relaxed text-zinc-700">{venue.address}</p>
              </div>
              <div className="border-t border-zinc-100 pt-4">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400">Hours</p>
                <p className="text-sm leading-relaxed text-zinc-700">{venue.hours}</p>
              </div>
            </div>

            {venue.entryFee && (
              <div className="rounded-2xl border border-zinc-100 bg-white p-5">
                <p className="mb-1.5 text-xs font-semibold uppercase tracking-widest text-zinc-400">Entry</p>
                <p className="text-sm text-zinc-700">{venue.entryFee}</p>
              </div>
            )}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block h-44 overflow-hidden rounded-2xl border border-zinc-100 transition-colors hover:border-zinc-300"
              title="Open in Google Maps"
            >
              <VenueMap venues={[venue]} single />
              <div className="pointer-events-none absolute bottom-2 right-2 rounded-full border border-zinc-200 bg-white/90 px-2 py-1 text-xs text-zinc-500 backdrop-blur">
                Open in Maps ↗
              </div>
            </a>
          </aside>
        </div>
      </main>
    </div>
  );
}

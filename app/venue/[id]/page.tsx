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
  return venues.map((v) => ({ id: v.id }));
}

// ── Small helper components ──────────────────────────────────────────────────

function musicIntentLabel(intent: MusicIntent): string {
  switch (intent) {
    case "primary":    return "Music is the focus";
    case "secondary":  return "Music is part of the experience";
    case "incidental": return "Background music";
  }
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function VenuePage({ params }: Props) {
  const venue = getVenueById(params.id);
  if (!venue) notFound();

  const [heroImage, ...galleryImages] = venue.images;

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
      {/* Nav */}
      <header className="sticky top-0 z-10 bg-zinc-50/80 backdrop-blur border-b border-zinc-100">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors text-sm"
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
          <Link href="/" className="text-sm font-semibold text-zinc-900 tracking-tight">
            fomo
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Image gallery */}
        <div
          className={`grid gap-2 rounded-2xl overflow-hidden mb-10 h-72 sm:h-96 ${
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
                <div key={i} className="relative flex-1">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left column — main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Identity */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1">
                {venue.suburb}
              </p>
              <h1 className="text-3xl font-bold text-zinc-900 tracking-tight leading-tight mb-2">
                {venue.name}
              </h1>
              <p className="text-base font-medium text-zinc-700 mb-3">
                {venue.highlight}
              </p>
              <p className="text-zinc-500 text-base leading-relaxed">
                {venue.description}
              </p>
            </div>

            {/* What to expect */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-5">
                What to expect
              </h2>
              <div className="space-y-5">

                {/* Music */}
                {genreDisplay && (
                  <div className="flex gap-4 items-start">
                    <div className="w-5 mt-0.5 flex-shrink-0 text-zinc-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path d="M18 3a1 1 0 0 0-1.196-.98l-10 2A1 1 0 0 0 6 5v6.499A3.001 3.001 0 1 0 8 14V8.82l8-1.6V11.5A3.001 3.001 0 1 0 18 13V3ZM5 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm11-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-0.5">Music</p>
                      <p className="text-sm text-zinc-700">{genreDisplay}</p>
                      <p className="text-xs text-zinc-400 mt-0.5">{musicIntentLabel(venue.musicIntent)}</p>
                    </div>
                  </div>
                )}

                {/* Crowd */}
                <div className="flex gap-4 items-start">
                  <div className="w-5 mt-0.5 flex-shrink-0 text-zinc-300">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M9 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM17 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 0 0-1.5-4.33A5 5 0 0 1 19 16v1h-6.07ZM6 11a5 5 0 0 1 5 5v1H1v-1a5 5 0 0 1 5-5Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-0.5">Crowd</p>
                    <p className="text-sm text-zinc-700">
                      Ages {venue.ageRange.replace(/-/g, "–")}
                    </p>
                  </div>
                </div>

                {/* Note (optional) */}
                {venue.detail && (
                  <div className="flex gap-4 items-start">
                    <div className="w-5 mt-0.5 flex-shrink-0 text-zinc-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-0.5">Note</p>
                      <p className="text-sm text-zinc-700">{venue.detail}</p>
                    </div>
                  </div>
                )}

                {/* Cost */}
                <div className="flex gap-4 items-start">
                  <div className="w-5 mt-0.5 flex-shrink-0 text-zinc-300">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                      <path d="M10.75 10.818c.193-.54.224-1.11.085-1.665l-1.96-.686a2.5 2.5 0 0 0-.573 2.83l2.448-.479ZM10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2Zm1.12 11.414-.696.173A3.5 3.5 0 0 1 7 10.001L7 10a3.5 3.5 0 0 1 2.31-3.297l.125-.042.5-1.324.94.356-.5 1.323.137.048a3.5 3.5 0 0 1 2.163 2.87l.01.197-.94.164-.01-.197a2.5 2.5 0 0 0-1.546-2.05l-.128-.046-1.005 2.663a2.5 2.5 0 0 0 2.45 3.454l.697-.172-.184.941Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-0.5">Cost</p>
                    <p className="text-sm text-zinc-700">{venue.cost}</p>
                  </div>
                </div>

                {/* Entry fee (optional) */}
                {venue.entryFee && (
                  <div className="flex gap-4 items-start">
                    <div className="w-5 mt-0.5 flex-shrink-0 text-zinc-300">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M13 3a1 1 0 0 1 1 1v1h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1V4a1 1 0 0 1 2 0v1h4V4a1 1 0 0 1 1-1ZM5 9v7h10V9H5Zm2 2a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mb-0.5">Entry</p>
                      <p className="text-sm text-zinc-700">{venue.entryFee}</p>
                    </div>
                  </div>
                )}

              </div>
            </section>
          </div>

          {/* Right column — sidebar */}
          <aside className="space-y-4">
            <div className="bg-white border border-zinc-100 rounded-2xl p-5 space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1.5">Address</p>
                <p className="text-sm text-zinc-700 leading-relaxed">{venue.address}</p>
              </div>
              <div className="border-t border-zinc-100 pt-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1.5">Hours</p>
                <p className="text-sm text-zinc-700 leading-relaxed">{venue.hours}</p>
              </div>
            </div>

            {venue.entryFee && (
              <div className="bg-white border border-zinc-100 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-1.5">Entry</p>
                <p className="text-sm text-zinc-700">{venue.entryFee}</p>
              </div>
            )}

            {/* Map */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-zinc-100 h-44 relative hover:border-zinc-300 transition-colors"
              title="Open in Google Maps"
            >
              <VenueMap venues={[venue]} single />
              <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur text-zinc-500 text-xs px-2 py-1 rounded-full border border-zinc-200 pointer-events-none">
                Open in Maps ↗
              </div>
            </a>
          </aside>
        </div>
      </main>
    </div>
  );
}

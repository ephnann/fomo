"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { usePostHog } from "posthog-js/react";
import SearchBar from "@/components/SearchBar";
import VenueCard from "@/components/VenueCard";
import { matchVenues, CHIPS, type ChipName } from "@/lib/matcher";
import type { ScoredVenue } from "@/types/venue";

const VenueMap = dynamic(() => import("@/components/VenueMap"), { ssr: false });

const EXAMPLE_QUERIES = [
  "chill date spot",
  "singalong and drinks",
  "late night party",
  "after work drinks",
];

export default function Home() {
  const posthog = usePostHog();
  const [results, setResults] = useState<ScoredVenue[]>([]);
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeChips, setActiveChips] = useState<ChipName[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  function runSearch(input: string, chips: ChipName[]) {
    setIsLoading(true);
    setTimeout(() => {
      setResults(matchVenues(input, chips));
      setIsLoading(false);
    }, 200);
  }

  function handleSearch(input: string) {
    const chips: ChipName[] = [];
    setActiveChips(chips);
    setQuery(input);
    setHasSearched(true);
    posthog.capture("search", { query: input });
    runSearch(input, chips);
  }

  function toggleChip(chip: ChipName) {
    const next = activeChips.includes(chip)
      ? activeChips.filter((c) => c !== chip)
      : [...activeChips, chip];
    setActiveChips(next);
    runSearch(query, next);
  }

  return (
    <main className="flex min-h-screen flex-col">
      <section
        className={`flex flex-col items-center justify-center px-4 transition-all duration-500 ${
          hasSearched ? "pt-16 pb-8" : "flex-1 pb-24"
        }`}
      >
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">fomo</h1>
          {!hasSearched && (
            <p className="mt-2 text-base text-zinc-500">Describe a vibe. Find your night.</p>
          )}
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {hasSearched && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {CHIPS.map((chip) => {
              const active = activeChips.includes(chip);
              return (
                <button
                  key={chip}
                  onClick={() => toggleChip(chip)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-150 ${
                    active
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300 hover:text-zinc-700"
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        )}

        {!hasSearched && (
          <div className="mt-6 flex max-w-xl flex-wrap justify-center gap-2">
            {EXAMPLE_QUERIES.map((q) => (
              <button
                key={q}
                onClick={() => handleSearch(q)}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-500 transition-colors duration-150 hover:border-zinc-300 hover:text-zinc-700"
              >
                {q}
              </button>
            ))}
          </div>
        )}
      </section>

      {hasSearched && (
        <section className="flex-1 pb-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-6 flex items-baseline justify-between">
              <div>
                <p className="text-sm text-zinc-500">
                  Showing{" "}
                  <span className="font-semibold text-zinc-800">{results.length}</span>{" "}
                  {results.length === 1 ? "match" : "matches"} for
                </p>
                <h2 className="mt-0.5 text-lg font-semibold text-zinc-900">
                  &ldquo;{query}&rdquo;
                  {activeChips.length > 0 && (
                    <span className="ml-2 text-sm font-normal text-zinc-400">
                      + {activeChips.join(", ")}
                    </span>
                  )}
                </h2>
              </div>
              <button
                onClick={() => {
                  setHasSearched(false);
                  setResults([]);
                  setQuery("");
                  setActiveChips([]);
                }}
                className="text-xs text-zinc-400 transition-colors hover:text-zinc-600"
              >
                New search
              </button>
            </div>

            <div className="flex items-start gap-6">
              <div className="min-w-0 flex-1">
                {results.length > 0 ? (
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {results.map((venue, i) => (
                      <VenueCard
                        key={venue.id}
                        venue={venue}
                        rank={i + 1}
                        isActive={hoveredId === venue.id}
                        onHover={() => setHoveredId(venue.id)}
                        onLeave={() => setHoveredId(null)}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center">
                    <p className="text-base text-zinc-500">No matches found for this vibe.</p>
                    <p className="mt-1 text-sm text-zinc-400">
                      Try a different query, or remove some chips.
                    </p>
                  </div>
                )}
              </div>

              <div className="sticky top-6 hidden w-[420px] flex-shrink-0 lg:block xl:w-[500px]">
                <div
                  className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-sm"
                  style={{ height: "calc(100vh - 120px)" }}
                >
                  <VenueMap venues={results} activeId={hoveredId} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="space-y-1 py-6 text-center text-xs text-zinc-300">
        {!hasSearched && <p>Brisbane &mdash; bars &amp; nightlife only</p>}
        <p>
          &copy; EPHY Studio 2026 &mdash;{" "}
          <a
            href="https://www.ephystudio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-zinc-500"
          >
            Built by EPHY Studio
          </a>
        </p>
      </footer>
    </main>
  );
}

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import SearchBar from "@/components/SearchBar";
import VenueCard from "@/components/VenueCard";
import { matchVenues, CHIPS, type ChipName } from "@/lib/matcher";
import type { ScoredVenue } from "@/types/venue";

// Leaflet uses browser APIs — must be loaded client-side only
const VenueMap = dynamic(() => import("@/components/VenueMap"), { ssr: false });

const EXAMPLE_QUERIES = [
  "chill date spot",
  "singalong and drinks",
  "late night party",
  "after work drinks",
];

export default function Home() {
  const [results, setResults]         = useState<ScoredVenue[]>([]);
  const [query, setQuery]             = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading]     = useState(false);
  const [activeChips, setActiveChips] = useState<ChipName[]>([]);
  const [hoveredId, setHoveredId]     = useState<string | null>(null);

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
    <main className="min-h-screen flex flex-col">
      {/* Hero */}
      <section
        className={`flex flex-col items-center justify-center px-4 transition-all duration-500 ${
          hasSearched ? "pt-16 pb-8" : "flex-1 pb-24"
        }`}
      >
        {/* Wordmark */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900">fomo</h1>
          {!hasSearched && (
            <p className="mt-2 text-zinc-500 text-base">Describe a vibe. Find your night.</p>
          )}
        </div>

        {/* Search */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Chips — shown after a search, adjust intent and re-rank instantly */}
        {hasSearched && (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {CHIPS.map((chip) => {
              const active = activeChips.includes(chip);
              return (
                <button
                  key={chip}
                  onClick={() => toggleChip(chip)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-150 ${
                    active
                      ? "bg-zinc-900 text-white border-zinc-900"
                      : "bg-white text-zinc-500 border-zinc-200 hover:border-zinc-300 hover:text-zinc-700"
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        )}

        {/* Example queries — shown before any search */}
        {!hasSearched && (
          <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-xl">
            {EXAMPLE_QUERIES.map((q) => (
              <button
                key={q}
                onClick={() => handleSearch(q)}
                className="text-xs text-zinc-500 bg-white border border-zinc-200 hover:border-zinc-300 hover:text-zinc-700 px-3 py-1.5 rounded-full transition-colors duration-150"
              >
                {q}
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Results */}
      {hasSearched && (
        <section className="flex-1 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Result header */}
            <div className="flex items-baseline justify-between mb-6">
              <div>
                <p className="text-sm text-zinc-500">
                  Showing{" "}
                  <span className="font-semibold text-zinc-800">{results.length}</span>{" "}
                  {results.length === 1 ? "match" : "matches"} for
                </p>
                <h2 className="text-lg font-semibold text-zinc-900 mt-0.5">
                  &ldquo;{query}&rdquo;
                  {activeChips.length > 0 && (
                    <span className="text-sm font-normal text-zinc-400 ml-2">
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
                className="text-xs text-zinc-400 hover:text-zinc-600 transition-colors"
              >
                New search
              </button>
            </div>

            {/* Two-column layout: cards + map */}
            <div className="flex gap-6 items-start">
              {/* Left: venue cards */}
              <div className="flex-1 min-w-0">
                {results.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div className="text-center py-20">
                    <p className="text-zinc-500 text-base">
                      No matches found for this vibe.
                    </p>
                    <p className="text-zinc-400 text-sm mt-1">
                      Try a different query, or remove some chips.
                    </p>
                  </div>
                )}
              </div>

              {/* Right: map */}
              <div className="hidden lg:block w-[420px] xl:w-[500px] flex-shrink-0 sticky top-6">
                <div
                  className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-100"
                  style={{ height: "calc(100vh - 120px)" }}
                >
                  <VenueMap venues={results} activeId={hoveredId} />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-6 text-center text-xs text-zinc-300 space-y-1">
        {!hasSearched && (
          <p>Brisbane &mdash; bars &amp; nightlife only</p>
        )}
        <p>
          &copy; EPHY Studio 2026 &mdash;{" "}
          <a
            href="https://www.ephystudio.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-500 transition-colors underline underline-offset-2"
          >
            Built by EPHY Studio
          </a>
        </p>
      </footer>
    </main>
  );
}

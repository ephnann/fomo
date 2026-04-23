import type { AgeRange, ScoredVenue, Venue, VenueType } from "@/types/venue";
import { venues } from "@/lib/venues";
import { songs } from "@/lib/songs";

// ── Intent ──────────────────────────────────────────────────────────────────
//
// Represents what the user is looking for, derived from their query and
// any active chips. Each dimension is a 0–10 target value, or null when
// the user hasn't expressed a preference for that dimension.

interface Intent {
  energy:            number | null;
  intimacy:          number | null;
  social:            number | null;
  aesthetic:         number | null;
  attractiveness:    number | null;
  preferredAgeRange: AgeRange | null;
  genres:            string[];
  hardGenreFilter:   boolean;  // true only for song matches — the one strict rule
  venueType:         VenueType | null;  // dominant ranking signal when present
}

// Each keyword votes with desired target values for any dimensions it signals
type KeywordSignal = {
  energy?:            number;
  intimacy?:          number;
  social?:            number;
  aesthetic?:         number;
  attractiveness?:    number;
  preferredAgeRange?: AgeRange;
  genres?:            string[];
};

// ── Keyword → Signal Map ─────────────────────────────────────────────────────
//
// Values are desired 0–10 targets for each dimension.
// Multiple keywords that vote for the same dimension are averaged together.

const SIGNALS: Record<string, KeywordSignal> = {
  // Romantic / Date
  "date":             { intimacy: 8, energy: 4, social: 4, aesthetic: 9 },
  "date night":       { intimacy: 8, energy: 4, social: 3, aesthetic: 9 },
  "romantic":         { intimacy: 9, energy: 3, social: 3, aesthetic: 7 },
  "romance":          { intimacy: 9, energy: 3, social: 3, aesthetic: 7 },
  "cute":             { intimacy: 7, aesthetic: 8 },
  "intimate":         { intimacy: 9, social: 3 },
  "cosy":             { intimacy: 8, energy: 3 },
  "cozy":             { intimacy: 8, energy: 3 },

  // Attractiveness
  "hot":              { attractiveness: 8, social: 7 },
  "baddies":          { attractiveness: 9, social: 7 },
  "sexy":             { attractiveness: 8, social: 7 },
  "girls":            { attractiveness: 7, social: 7 },
  "girl":             { attractiveness: 6, social: 6 },
  "hot girls":        { attractiveness: 9, social: 7 },
  "fit":              { attractiveness: 7 },
  "attractive":       { attractiveness: 8 },
  "good looking":     { attractiveness: 8 },

  // Young / Students
  "young":            { preferredAgeRange: "18-25", energy: 7, social: 7 },
  "student":          { preferredAgeRange: "18-21", energy: 7, social: 7 },
  "students":         { preferredAgeRange: "18-21", energy: 7, social: 7 },
  "student night":    { preferredAgeRange: "18-21", energy: 8, social: 8, attractiveness: 6 },
  "uni":              { preferredAgeRange: "18-21", energy: 7, social: 7 },
  "university":       { preferredAgeRange: "18-21", energy: 7, social: 7 },
  "college":          { preferredAgeRange: "18-21", energy: 7, social: 7 },

  // High energy / Party
  "party":            { energy: 9, social: 8, intimacy: 2 },
  "parties":          { energy: 9, social: 8, intimacy: 2 },
  "rave":             { energy: 9, social: 7, aesthetic: 3, genres: ["techno", "house", "electronic"] },
  "dance":            { energy: 8, social: 8, intimacy: 3 },
  "dancing":          { energy: 8, social: 8, intimacy: 3 },
  "dance floor":      { energy: 8, social: 8, intimacy: 3 },
  "club":             { energy: 8, social: 7, intimacy: 2 },
  "clubbing":         { energy: 9, social: 8, intimacy: 2 },
  "big night":        { energy: 9, social: 8, intimacy: 2 },
  "night out":        { energy: 8, social: 8 },
  "hype":             { energy: 9, social: 7 },
  "chaotic":          { energy: 9, social: 8, aesthetic: 2 },
  "crazy":            { energy: 9, social: 8, aesthetic: 2 },
  "loud":             { energy: 8, social: 7 },
  "wild":             { energy: 9, social: 8, aesthetic: 2 },
  "banging":          { energy: 9, social: 8 },
  "rager":            { energy: 9, social: 8, intimacy: 2 },
  "lively":           { energy: 7, social: 7 },
  "buzzing":          { energy: 7, social: 8 },
  "fun":              { energy: 7, social: 7 },

  // Chill
  "chill":            { energy: 3, intimacy: 6, social: 5 },
  "chilled":          { energy: 3, intimacy: 6, social: 5 },
  "relaxed":          { energy: 3, intimacy: 6, social: 5 },
  "relaxing":         { energy: 3, intimacy: 6 },
  "mellow":           { energy: 2, intimacy: 6 },
  "laid back":        { energy: 3, intimacy: 6, social: 5 },
  "quiet":            { energy: 2, social: 3, intimacy: 7 },
  "low key":          { energy: 3, social: 4, intimacy: 6 },
  "lowkey":           { energy: 3, social: 4, intimacy: 6 },
  "casual":           { energy: 4, social: 5, intimacy: 5 },
  "easy going":       { energy: 3, social: 5, intimacy: 6 },
  "easygoing":        { energy: 3, social: 5, intimacy: 6 },

  // Upscale / Aesthetic
  "classy":           { aesthetic: 8, energy: 5, intimacy: 5 },
  "sophisticated":    { aesthetic: 9, energy: 4, intimacy: 6 },
  "upscale":          { aesthetic: 9 },
  "fancy":            { aesthetic: 8 },
  "nice":             { aesthetic: 7 },
  "elegant":          { aesthetic: 9, intimacy: 6 },
  "bougie":           { aesthetic: 9, attractiveness: 7 },
  "posh":             { aesthetic: 9 },

  // Dive / Grungy
  "dive":             { aesthetic: 2, energy: 7, social: 7 },
  "grungy":           { aesthetic: 2, energy: 7 },
  "grimy":            { aesthetic: 1, energy: 8 },
  "cheap":            { aesthetic: 3 },
  "sketchy":          { aesthetic: 2, energy: 8 },
  "dingey":           { aesthetic: 2, energy: 7 },
  "dingy":            { aesthetic: 2, energy: 7 },
  "seedy":            { aesthetic: 2, energy: 7 },

  // Social / Mingling
  "social":           { social: 9, energy: 6 },
  "mingle":           { social: 9 },
  "mingling":         { social: 9 },
  "meet people":      { social: 9, attractiveness: 6 },
  "singles":          { social: 8, attractiveness: 7 },
  "girls night":      { social: 8, attractiveness: 6, energy: 7 },
  "group":            { social: 8 },

  // Singalong
  "singalong":        { social: 9, energy: 7, intimacy: 5, genres: ["singalong", "classics", "piano"] },
  "sing along":       { social: 9, energy: 7, intimacy: 5, genres: ["singalong", "classics", "piano"] },
  "karaoke":          { social: 9, energy: 7, intimacy: 3 },

  // After work
  "after work":       { social: 7, energy: 5, aesthetic: 9 },
  "work drinks":      { social: 7, energy: 5, aesthetic: 9 },
  "post work":        { social: 7, energy: 5, aesthetic: 9 },
  "afterwork":        { social: 7, energy: 5, aesthetic: 9 },

  // Events / Occasions
  "birthday":         { social: 8, energy: 7 },
  "bday":             { social: 8, energy: 7 },
  "special occasion": { aesthetic: 7, social: 7 },
  "date spot":        { intimacy: 8, energy: 4, aesthetic: 9 },

  // Music genres
  "techno":           { genres: ["techno"], energy: 8 },
  "house":            { genres: ["house"], energy: 7 },
  "electronic":       { genres: ["electronic", "house", "techno"], energy: 7 },
  "hip hop":          { genres: ["hip-hop", "rnb"], energy: 7, social: 7 },
  "hip-hop":          { genres: ["hip-hop", "rnb"], energy: 7, social: 7 },
  "rnb":              { genres: ["rnb"], energy: 6, social: 7 },
  "r&b":              { genres: ["rnb", "r&b"], energy: 6, social: 7 },
  "rock":             { genres: ["rock"], energy: 7 },
  "indie rock":       { genres: ["indie rock", "indie"], energy: 6 },
  "indie":            { genres: ["indie"], energy: 5 },
  "jazz":             { genres: ["jazz"], energy: 4, intimacy: 7, aesthetic: 7 },
  "live music":       { genres: ["live music", "live"], energy: 6, social: 7 },
  "pop":              { genres: ["pop"], energy: 7, social: 7 },
  "piano":            { genres: ["piano", "singalong"], social: 8, intimacy: 5 },
  "classical":        { genres: ["classical", "piano"], aesthetic: 8, intimacy: 7 },
  "punk":             { genres: ["punk", "rock"], energy: 9, aesthetic: 2 },
  "metal":            { genres: ["metal", "rock"], energy: 9 },
  "funk":             { genres: ["funk", "soul"], energy: 6, social: 8 },
  "soul":             { genres: ["soul", "funk"], energy: 5, intimacy: 6 },
  "folk":             { genres: ["folk"], energy: 3, intimacy: 7 },

  // Cocktails (Task 5: primary signal is type, secondary adjustments are aesthetic/intimacy/energy)
  "cocktail":         { aesthetic: 8, intimacy: 6, energy: 4 },
  "cocktails":        { aesthetic: 8, intimacy: 6, energy: 4 },
  "cocktail bar":     { aesthetic: 8, intimacy: 6, energy: 4 },

  // Pub (vibe signal to complement the type signal)
  "pub":              { social: 7, energy: 6, aesthetic: 4 },
  "bar":              { social: 6, energy: 6 },

  // Outdoor / Scenic
  "outdoor":          { aesthetic: 6, intimacy: 5 },
  "rooftop":          { aesthetic: 7, intimacy: 5 },
  "riverside":        { aesthetic: 7, intimacy: 5 },
  "scenic":           { aesthetic: 7, intimacy: 5 },
  "beer garden":      { social: 7, energy: 5, aesthetic: 5 },
  "view":             { aesthetic: 7 },
  "views":            { aesthetic: 7 },

  // Time
  "late night":       { energy: 7 },
  "late":             { energy: 6 },
  "night":            { energy: 6 },
};

// ── Venue type → type signal ─────────────────────────────────────────────────
//
// When any of these keywords appears in the query, the matched VenueType is
// stored as intent.venueType and used as the dominant ranking signal.
// Multi-word keys are checked before single tokens (same pattern as SIGNALS).

const VENUE_TYPE_SIGNALS: Record<string, VenueType> = {
  // multi-word first
  "cocktail bar": "cocktail_bar",
  "piano bar":    "piano_bar",
  "dive bar":     "dive_bar",
  "live music":   "live_music",
  "sing along":   "piano_bar",
  "techno rave":  "club",
  // single tokens
  "rooftop":      "rooftop",
  "cocktail":     "cocktail_bar",
  "cocktails":    "cocktail_bar",
  "pub":          "pub",
  "bars":         "bar",
  "club":         "club",
  "nightclub":    "club",
  "clubbing":     "club",
  "rave":         "club",
  "raving":       "club",
  "dive":         "dive_bar",
  "piano":        "piano_bar",
  "singalong":    "piano_bar",
  "karaoke":      "karaoke",
  "gig":          "live_music",
  "concert":      "live_music",
};

// ── Song tag → intent signal ─────────────────────────────────────────────────
//
// When a song is matched, its mood/context tags are translated into intent
// signals using this map. Genre-like tags are extracted separately for the
// hard genre filter.

const SONG_TAG_SIGNALS: Record<string, KeywordSignal> = {
  "singalong":    { social: 9, energy: 7, intimacy: 5 },
  "dance floor":  { energy: 8, social: 8, intimacy: 3 },
  "feel good":    { energy: 7, social: 7 },
  "fun":          { energy: 7, social: 7 },
  "energetic":    { energy: 8 },
  "loud":         { energy: 8, social: 7 },
  "pub":          { social: 7, energy: 6, aesthetic: 4 },
  "chill":        { energy: 3, intimacy: 6 },
  "atmospheric":  { aesthetic: 7, intimacy: 6 },
  "late night":   { energy: 7 },
  "rooftop":      { aesthetic: 7, intimacy: 5 },
  "hype":         { energy: 9, social: 7 },
  "intense":      { energy: 9 },
  "groove":       { energy: 6, social: 7 },
  "vibey":        { aesthetic: 7, intimacy: 5 },
  "anthemic":     { social: 8, energy: 7 },
  "club":         { energy: 8, social: 7, intimacy: 2 },
  "emotional":    { intimacy: 7, social: 4, energy: 3 },
  "mellow":       { energy: 2, intimacy: 6 },
  "classic":      { social: 6 },
  "oldies":       { social: 6 },
  "date":         { intimacy: 7, energy: 4, aesthetic: 7 },
  "scenic":       { aesthetic: 7, intimacy: 5 },
  "crowd favourite": { social: 8, energy: 7 },
};

// Tags from songs that represent actual music genres (used for hard filter)
const GENRE_TAGS = new Set([
  "rock", "indie rock", "alternative", "indie", "electronic", "techno", "house",
  "pop", "hip-hop", "rnb", "r&b", "funk", "soul", "jazz", "latin", "classical",
  "piano", "singalong", "classics", "oldies", "folk", "country", "synthpop",
  "lo-fi", "australian rock", "indie pop", "classic rock",
]);

// ── Chips ────────────────────────────────────────────────────────────────────
//
// Chips shift the resolved intent. If a dimension was null (no query signal),
// the chip starts from a neutral 5 before applying the delta.

export type ChipName = "Romantic" | "Fun" | "Social" | "Party";

export const CHIPS: ChipName[] = ["Romantic", "Fun", "Social", "Party"];

const CHIP_DELTAS: Record<ChipName, Partial<{
  energy: number; intimacy: number; social: number;
  aesthetic: number; attractiveness: number;
}>> = {
  Romantic: { intimacy: 3,  energy: -2, social: -2, aesthetic: 2 },
  Fun:      { energy: 3,    social: 2,  aesthetic: -1 },
  Social:   { social: 3,    intimacy: -1, energy: 1 },
  Party:    { energy: 4,    social: 3,  intimacy: -3 },
};

// ── Intent building ──────────────────────────────────────────────────────────

interface VoteAccumulator {
  energy:            number[];
  intimacy:          number[];
  social:            number[];
  aesthetic:         number[];
  attractiveness:    number[];
  preferredAgeRanges: AgeRange[];
  genres:            string[];
  hardGenreFilter:   boolean;
}

function applySignal(sig: KeywordSignal, acc: VoteAccumulator): void {
  if (sig.energy        != null) acc.energy.push(sig.energy);
  if (sig.intimacy      != null) acc.intimacy.push(sig.intimacy);
  if (sig.social        != null) acc.social.push(sig.social);
  if (sig.aesthetic     != null) acc.aesthetic.push(sig.aesthetic);
  if (sig.attractiveness != null) acc.attractiveness.push(sig.attractiveness);
  if (sig.preferredAgeRange)     acc.preferredAgeRanges.push(sig.preferredAgeRange);
  if (sig.genres) {
    for (const g of sig.genres) {
      if (!acc.genres.includes(g)) acc.genres.push(g);
    }
  }
}

function buildIntent(query: string): Intent {
  const lower = query.toLowerCase().trim();

  const acc: VoteAccumulator = {
    energy: [], intimacy: [], social: [], aesthetic: [], attractiveness: [],
    preferredAgeRanges: [], genres: [], hardGenreFilter: false,
  };

  // 1. Song match — genre tags become a hard filter, mood tags become intent signals
  const matchedSong = songs.find((s) => {
    const title = s.title.toLowerCase();
    const artist = s.artist.toLowerCase();
    return (title.length >= 4 && lower.includes(title)) ||
           (artist.length >= 4 && lower.includes(artist));
  });

  if (matchedSong) {
    for (const tag of matchedSong.tags) {
      const tl = tag.toLowerCase();
      if (GENRE_TAGS.has(tl) && !acc.genres.includes(tl)) acc.genres.push(tl);
      const sig = SONG_TAG_SIGNALS[tl];
      if (sig) applySignal(sig, acc);
    }
    if (acc.genres.length > 0) acc.hardGenreFilter = true;
  }

  // 2. Multi-word phrases (checked before tokenisation to avoid splitting them)
  for (const [phrase, sig] of Object.entries(SIGNALS)) {
    if (phrase.includes(" ") && lower.includes(phrase)) {
      applySignal(sig, acc);
    }
  }

  // 3. Single tokens
  const tokens = lower.replace(/[^a-z0-9&-]/g, " ").split(/\s+/).filter(Boolean);
  for (const token of tokens) {
    const sig = SIGNALS[token];
    if (sig) applySignal(sig, acc);
  }

  // 4. Detect venue type — multi-word phrases first, then single tokens
  let venueType: VenueType | null = null;
  for (const [phrase, type] of Object.entries(VENUE_TYPE_SIGNALS)) {
    if (phrase.includes(" ") && lower.includes(phrase)) {
      venueType = type;
      break;
    }
  }
  if (!venueType) {
    for (const token of tokens) {
      if (token in VENUE_TYPE_SIGNALS) {
        venueType = VENUE_TYPE_SIGNALS[token];
        break;
      }
    }
  }

  // 5. Average the votes for each dimension
  const avg = (arr: number[]): number | null =>
    arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : null;

  return {
    energy:            avg(acc.energy),
    intimacy:          avg(acc.intimacy),
    social:            avg(acc.social),
    aesthetic:         avg(acc.aesthetic),
    attractiveness:    avg(acc.attractiveness),
    preferredAgeRange: acc.preferredAgeRanges.at(-1) ?? null,
    genres:            acc.genres,
    hardGenreFilter:   acc.hardGenreFilter,
    venueType,
  };
}

function applyChips(intent: Intent, chips: string[]): Intent {
  if (chips.length === 0) return intent;
  const clamp = (v: number) => Math.min(10, Math.max(0, v));
  const result = { ...intent };

  for (const chip of chips) {
    const delta = CHIP_DELTAS[chip as ChipName];
    if (!delta) continue;
    if (delta.energy       != null) result.energy       = clamp((result.energy       ?? 5) + delta.energy);
    if (delta.intimacy     != null) result.intimacy     = clamp((result.intimacy     ?? 5) + delta.intimacy);
    if (delta.social       != null) result.social       = clamp((result.social       ?? 5) + delta.social);
    if (delta.aesthetic    != null) result.aesthetic    = clamp((result.aesthetic    ?? 5) + delta.aesthetic);
    if (delta.attractiveness != null) result.attractiveness = clamp((result.attractiveness ?? 5) + delta.attractiveness);
  }

  return result;
}

// ── Scoring ──────────────────────────────────────────────────────────────────

const AGE_ORDER: AgeRange[] = ["18-21", "18-25", "21-30", "30-60", "60+"];

// Tiered penalty: adjacent ranges (e.g. 18-21 vs 18-25) get a small penalty;
// distant ranges (e.g. 18-21 vs 21-30) get a heavy penalty.
function tieredAgeScore(venueRange: AgeRange, preferred: AgeRange): number {
  const dist = Math.abs(AGE_ORDER.indexOf(venueRange) - AGE_ORDER.indexOf(preferred));
  if (dist === 0) return 5;
  if (dist === 1) return -1;  // same broad demographic, minor miss
  return -15;                  // clearly different crowd — heavy penalty
}

function getAgeBoost(ageRange: AgeRange): number {
  switch (ageRange) {
    case "18-21": return 2.0;
    case "18-25": return 1.5;
    case "21-30": return 0.5;
    default:      return 0;
  }
}

const W = {
  energy:          2.0,
  intimacy:        2.5,  // weighted higher — intimacy differentiates date vs. party strongly
  social:          2.0,
  aesthetic:       1.5,
  attractiveness:  2.0,
  attrGap:         1.5,  // extra multiplier on attractiveness shortfall
  agePenalty:      3.0,  // per mismatch on preferred age range
  genrePrimary:    3.0,  // per genre match in venue's primaryGenres
  genreSecondary:  1.2,  // per genre match in venue's secondaryGenres
  musicPrimary:    2.0,  // bonus: music query + venue focuses on music
  musicIncidental: -2.0, // penalty: music query + music is background only
  typeMatch:       18,   // dominant boost: venue type matches query
  typeMismatch:    -10,  // significant penalty: venue type doesn't match
};

function scoreVenue(venue: Venue, intent: Intent): number {
  let score = 0;

  // Vibe proximity — max contribution per dimension = weight × 10
  if (intent.energy    != null) score += (10 - Math.abs(venue.energy    - intent.energy))    * W.energy;
  if (intent.intimacy  != null) score += (10 - Math.abs(venue.intimacy  - intent.intimacy))  * W.intimacy;
  if (intent.social    != null) score += (10 - Math.abs(venue.social    - intent.social))    * W.social;
  if (intent.aesthetic != null) score += (10 - Math.abs(venue.aesthetic - intent.aesthetic)) * W.aesthetic;

  // Crowd: attractiveness
  if (intent.attractiveness != null) {
    if (venue.attractiveness >= intent.attractiveness) {
      score += venue.attractiveness * W.attractiveness;
    } else {
      score -= (intent.attractiveness - venue.attractiveness) * W.attractiveness * W.attrGap;
    }
  }

  // Crowd: age range
  if (intent.preferredAgeRange != null) {
    score += tieredAgeScore(venue.ageRange, intent.preferredAgeRange);
  }

  // Age boost is always applied (younger venues rank slightly higher by default)
  score += getAgeBoost(venue.ageRange);

  // Music / genre matching
  if (intent.genres.length > 0) {
    const lp = venue.primaryGenres.map((g) => g.toLowerCase());
    const ls = venue.secondaryGenres.map((g) => g.toLowerCase());

    let primaryHits = 0;
    let secondaryHits = 0;

    for (const g of intent.genres) {
      const gl = g.toLowerCase();
      if (lp.some((pg) => pg.includes(gl) || gl.includes(pg)))      primaryHits++;
      else if (ls.some((sg) => sg.includes(gl) || gl.includes(sg))) secondaryHits++;
    }

    // Hard filter: song query + no primary genre match → exclude this venue
    if (intent.hardGenreFilter && primaryHits === 0) return -Infinity;

    score += primaryHits  * W.genrePrimary;
    score += secondaryHits * W.genreSecondary;

    // Penalize venues that miss the genre intent entirely (not just losing the bonus)
    if (primaryHits === 0 && secondaryHits === 0) {
      score -= intent.genres.length * 4;
    }

    // Music intent bonus/penalty applies whenever genres are requested
    if (venue.musicIntent === "primary")    score += W.musicPrimary;
    if (venue.musicIntent === "incidental") score += W.musicIncidental;
  }

  // Venue type — dominant signal: overrides vibe differences when present
  if (intent.venueType != null) {
    score += venue.venueTypes.includes(intent.venueType) ? W.typeMatch : W.typeMismatch;
  }

  return score;
}

// ── Public API ───────────────────────────────────────────────────────────────

export function matchVenues(query: string, activeChips: string[] = []): ScoredVenue[] {
  const trimmed = query.trim();
  if (!trimmed && activeChips.length === 0) return [];

  let intent = buildIntent(trimmed);
  intent = applyChips(intent, activeChips);

  const scored = venues
    .map((v) => ({ ...v, score: scoreVenue(v, intent) }))
    .filter((v) => isFinite(v.score))
    .sort((a, b) => b.score - a.score);

  // `lib/venues.ts` may contain duplicate ids from repeated ingests — keep the
  // highest-scoring row per id so React keys and routing stay stable.
  const seenIds = new Set<string>();
  const deduped = scored.filter((v) => {
    if (seenIds.has(v.id)) return false;
    seenIds.add(v.id);
    return true;
  });

  // Apply a relative threshold when the query has meaningful intent.
  // Venues scoring below 80% of the top scorer are excluded — they're not
  // relevant enough to surface, even as lower-ranked results.
  const hasIntent =
    intent.energy != null || intent.intimacy != null || intent.social != null ||
    intent.aesthetic != null || intent.attractiveness != null ||
    intent.preferredAgeRange != null || intent.genres.length > 0 ||
    intent.venueType != null;

  if (hasIntent && deduped.length > 0) {
    const topScore = deduped[0].score;
    return deduped.filter((v) => v.score >= topScore * 0.80);
  }

  // Query was non-empty but no signals were recognised — return nothing
  // rather than dumping all venues (e.g. "I wanna get laid", "go on a crusade")
  return [];
}

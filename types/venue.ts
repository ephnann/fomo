export type MusicIntent = "primary" | "secondary" | "incidental";

export type AgeRange = "18-21" | "18-25" | "21-30" | "30-60" | "60+";

export type VenueType =
  | "rooftop"
  | "cocktail_bar"
  | "bar"
  | "pub"
  | "club"
  | "dive_bar"
  | "piano_bar"
  | "live_music"
  | "karaoke"
  | "beergarden"
  | "brewery"
  | "country";

export type Venue = {
  id: string;
  name: string;
  suburb: string;
  description: string;
  highlight: string;

  // Music
  musicIntent: MusicIntent;
  primaryGenres: string[];    // e.g. ["piano", "singalong", "classics"]
  secondaryGenres: string[];  // supporting genres

  // Crowd
  attractiveness: number;  // 0–10 (how attractive/desirable the crowd is)
  ageRange: AgeRange;

  // Vibe (0–10 each)
  energy: number;     // 0 = dead quiet, 10 = absolute chaos
  intimacy: number;   // 0 = hard to connect, 10 = very intimate
  social: number;     // 0 = isolated, 10 = everyone mingling
  aesthetic: number;  // 0 = dive bar, 10 = upscale

  // Venue type — used as the dominant ranking signal when queried directly
  venueTypes: VenueType[];

  // Display / context
  situations: string[];
  detail?: string;
  cost: string;
  entryFee: string | null;
  images: string[];
  address: string;
  hours: string;

  // Map
  lat: number;
  lng: number;
};

export type ScoredVenue = Venue & { score: number };

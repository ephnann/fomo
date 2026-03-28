export type Song = {
  title: string;
  artist: string;
  tags: string[];
};

export const songs: Song[] = [
  // --- provided by curation ---
  {
    title: "Are You Gonna Be My Girl",
    artist: "Jet",
    tags: ["australian rock", "pub", "loud", "indie sleaze", "rock", "anthemic"],
  },
  {
    title: "Dancing Queen",
    artist: "ABBA",
    tags: ["singalong", "classic", "feel good", "dance floor", "oldies", "fun"],
  },

  // --- rock / pub ---
  {
    title: "Thunderstruck",
    artist: "AC/DC",
    tags: ["australian rock", "rock", "loud", "pub", "anthemic", "energetic"],
  },
  {
    title: "Mr Brightside",
    artist: "The Killers",
    tags: ["indie", "rock", "singalong", "pub", "loud", "anthemic"],
  },
  {
    title: "Come Together",
    artist: "The Beatles",
    tags: ["classic rock", "rock", "pub", "live music", "timeless"],
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    tags: ["rock", "classic rock", "pub", "singalong", "anthemic", "loud"],
  },

  // --- singalong / piano bar ---
  {
    title: "Piano Man",
    artist: "Billy Joel",
    tags: ["piano", "singalong", "pub", "classic", "oldies", "feel good"],
  },
  {
    title: "Don't Stop Believin'",
    artist: "Journey",
    tags: ["singalong", "classic", "feel good", "anthemic", "pub", "crowd favourite"],
  },

  // --- dance / club ---
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    tags: ["r&b", "dance floor", "synthpop", "club", "euphoric", "late night"],
  },
  {
    title: "Get Lucky",
    artist: "Daft Punk",
    tags: ["funk", "electronic", "dance floor", "feel good", "late night", "club"],
  },
  {
    title: "September",
    artist: "Earth, Wind & Fire",
    tags: ["funk", "soul", "feel good", "dance floor", "classic", "singalong"],
  },

  // --- latin ---
  {
    title: "Livin' La Vida Loca",
    artist: "Ricky Martin",
    tags: ["latin", "dance floor", "energetic", "fun", "pop"],
  },

  // --- hip-hop / r&b ---
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    tags: ["hip-hop", "rap", "hype", "intense", "club"],
  },
  {
    title: "Lose Yourself",
    artist: "Eminem",
    tags: ["hip-hop", "rap", "energetic", "hype", "intense"],
  },

  // --- soul / funk ---
  {
    title: "Superstition",
    artist: "Stevie Wonder",
    tags: ["soul", "funk", "groove", "live music", "feel good"],
  },

  // --- chill / rooftop / date ---
  {
    title: "Midnight City",
    artist: "M83",
    tags: ["electronic", "indie", "atmospheric", "chill", "rooftop", "date", "scenic"],
  },
  {
    title: "Dreams",
    artist: "Fleetwood Mac",
    tags: ["classic rock", "mellow", "chill", "relaxed", "timeless"],
  },
  {
    title: "Sunset Lover",
    artist: "Petit Biscuit",
    tags: ["lo-fi", "chill", "rooftop", "relaxed", "date", "scenic"],
  },

  // --- indie / alternative ---
  {
    title: "Somebody That I Used To Know",
    artist: "Gotye",
    tags: ["indie pop", "australian", "chill", "emotional", "singalong"],
  },
  {
    title: "Feel Good Inc",
    artist: "Gorillaz",
    tags: ["alternative", "hip-hop", "electronic", "chill", "indie", "vibey"],
  },
];

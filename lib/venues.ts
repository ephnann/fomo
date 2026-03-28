import type { Venue } from "@/types/venue";

export const venues: Venue[] = [
  {
    id: "at-sixes-and-sevens",
    name: "At Sixes And Sevens",
    suburb: "Fortitude Valley",
    description: "Slightly classy, busy bar good for young professionals and students.",
    highlight: "Busy on weekends, a little bit classy, good for post-work drinks.",

    musicIntent: "incidental",
    primaryGenres: ["house", "trance"],
    secondaryGenres: [],

    attractiveness: 8,
    ageRange: "21-30",

    energy: 7,
    intimacy: 3,
    social: 6,
    aesthetic: 7,

    venueTypes: ["pub", "bar"],

    situations: ["after work drinks", "birthday", "casual catch-up", "group night out"],
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/sixes-and-sevens/2.jpg", "/images/sixes-and-sevens/3.jpg"],
    address: "67 James St, Fortitude Valley QLD",
    lat: -27.4576310373739, lng: 153.0408616846554,
    hours: "11am - 12am Fri, Sat; 11am - 11pm Tues to Thurs; Closed Mon",
  },
  {
    id: "doo-bop",
    name: "Doo Bop Piano Bar",
    suburb: "Brisbane City CBD",
    description: "Live piano & band singalongs where everyone ends up singing together.",
    highlight: "Busy on weekends, slightly older crowd, performers take requests.",

    musicIntent: "primary",
    primaryGenres: ["piano", "singalong", "classics", "oldies",],
    secondaryGenres: ["pop", "feel-good"],

    attractiveness: 4,
    ageRange: "30-60",

    energy: 8,
    intimacy: 3,
    social: 5,
    aesthetic: 8,

    venueTypes: ["piano_bar", "bar"],

    situations: ["birthday", "group night out", "something different", "special occasion"],
    detail: "Performers take requests",
    cost: "Reasonable — $15–20 per drink",
    entryFee: "$10",
    images: ["/images/doo-bop/1.jpg", "/images/doo-bop/2.jpg"],
    address: "101 Edward St, Brisbane QLD",
    lat: -27.470076712048275, lng: 153.02901331001527,
    hours: "5pm - 1am Fri, Sat; 6pm - 11pm Tues, Wed; 5:30pm - 12am Thurs; Closed Sun, Mon",
  },
  {
    id: "felons",
    name: "Felons",
    suburb: "Brisbane City CBD",
    description: "Riverside brewery with views of the Story Bridge. Large, scenic, and very casual.",
    highlight: "The best spot in Brisbane for a date or afternoon drinks by the river.",

    musicIntent: "secondary",
    primaryGenres: ["indie", "electronic"],
    secondaryGenres: ["electronic", "dj sets", "pop"],

    attractiveness: 8,
    ageRange: "18-25",

    energy: 5,
    intimacy: 7,
    social: 5,
    aesthetic: 9,

    venueTypes: ["pub", "bar",],

    situations: ["casual catch-up", "date", "after work", "group outing", "afternoon drinks", "night out"],
    detail: "Southern Hemisphere's biggest quiz night hosted every Wednesday in Barrel Hall.",
    cost: "Reasonable — $20 per drink",
    entryFee: null,
    images: ["/images/felons/1.jpg", "/images/felons/2.jpg"],
    address: "5 Boundary St, Brisbane City QLD 4000",
    lat: -27.46236498822869, lng: 153.03728855367646,
    hours: "11am - 12am every day",
  },
  {
    id: "rics",
    name: "Ric's Bar + Backyard",
    suburb: "Fortitude Valley",
    description: "A large venue in the Valley with karaoke, a dance floor, and beer garden.",
    highlight: "Open until 3:30am, grungy, usually packed and chaotic on weekends.",

    musicIntent: "primary",
    primaryGenres: ["pop", "rnb", "hip-hop", "electronic", "karaoke"],
    secondaryGenres: ["alternative", "hip-hop", "rock", "indie"],

    attractiveness: 3,
    ageRange: "18-25",

    energy: 9,
    intimacy: 2,
    social: 6,
    aesthetic: 1,

    venueTypes: ["dive_bar", "karaoke", "live_music", "beergarden", "bar"],

    situations: ["night out", "late night", "karaoke", "dancing", "birthday", "last stop", "open late", "hookup"],
    detail: "Regularly hosts live music",
    cost: "Cheap — $10–20 per drink",
    entryFee: "$15 on weekends",
    images: ["/images/rics/1.jpg", "/images/rics/2.jpg"],
    address: "321 Brunswick St, Fortitude Valley QLD 4006",
    lat: -27.457822089131433, lng: 153.03467553088393,
    hours: "6pm - 3:30am Thurs, Fri, Sat, Sun; 8pm - 3:30am Mon, Tues, Wed",
  },
  {
    id: "cloudland",
    name: "Cloudland",
    suburb: "Fortitude Valley",

    description: "Feels more like an event space than a typical club, with a mix of dining, drinks, and a weekend dancefloor upstairs.",

    highlight: "Beautiful venue, but not a major late-night destination. More atmosphere than chaos.",

    musicIntent: "primary",
    primaryGenres: ["house", "electronic", "pop", "rnb", "salsa"],
    secondaryGenres: ["hip-hop", "dance", "commercial"],

    attractiveness: 6,
    ageRange: "21-30",

    energy: 7,
    intimacy: 5,
    social: 6,
    aesthetic: 8,

    venueTypes: ["bar"],

    situations: ["dinner", "early drinks", "night out", "dancing", "birthday"],

    detail: "Gets busier upstairs on weekends with DJs and dancing, but the overall vibe is more relaxed and less flirt-driven than other Valley venues. People tend to stick to their groups rather than mixing heavily.",

    cost: "Moderate — $15–22 per drink",
    entryFee: null,

    images: ["/images/cloudland/1.jpg", "/images/cloudland/2.jpg", "/images/cloudland/3.jpg"],

    address: "321 Brunswick St, Fortitude Valley QLD 4006",
    lat: -27.45831638261852, lng: 153.0348471894523,

    hours: "11:30am–11pm Wed; 11:30am–1am Thurs; 11:30am–2am Fri; 11:30am–3am Sat; 10am–8pm Sun; Closed Mon–Tue"
  },
  {
    id: "regatta-hotel",
    name: "Regatta Hotel",
    suburb: "Toowong",

    description: "A large, iconic riverside pub near UQ that shifts from a relaxed daytime spot into a lively, social nightlife venue. Popular with students and young locals, especially on weekends.",

    highlight: "One of the best social pubs in Brisbane — consistently busy, high-energy, and easy to meet people.",

    musicIntent: "secondary",
    primaryGenres: ["commercial", "pop", "rnb", "dance"],
    secondaryGenres: ["house", "throwbacks"],

    attractiveness: 9,
    ageRange: "18-25",

    energy: 8,
    intimacy: 6,
    social: 8,
    aesthetic: 6,

    venueTypes: ["pub", "bar"],

    situations: ["night out", "drinks with mates", "dancing", "meeting people", "birthday", "drinks"],

    detail: "Starts as a standard pub with food, drinks, and sport on TV, but becomes much more lively as the night goes on. Dancefloor forms later and the crowd becomes more social and interactive, with lots of mixing between groups.",

    cost: "Moderate — $10–18 per drink",
    entryFee: null,

    images: ["/images/regatta/1.jpg", "/images/regatta/2.jpg"],

    address: "543 Coronation Dr, Toowong QLD 4066",
    lat: -27.48231887104224, lng: 152.99655087765396,

    hours: "6:30am–3am Tue–Sat; 6:30am–1am Sun–Mon",
  },
  {
    id: "the-met",
    name: "The Met",
    suburb: "Fortitude Valley",

    description: "A multi-level Brisbane nightclub known for its loud, crowded dancefloors and non-stop party atmosphere. Expect packed rooms, heavy bass, and a younger crowd.",

    highlight: "High-energy, chaotic clubbing.",

    musicIntent: "primary",
    primaryGenres: ["commercial", "edm", "house", "hip-hop"],
    secondaryGenres: ["rnb", "dance", "top 40"],

    attractiveness: 4,
    ageRange: "18-25",

    energy: 9,
    intimacy: 1,
    social: 1,
    aesthetic: 3,

    situations: ["night out", "late night", "dancing", "last stop", "hookup", "clubbing", "open late"],

    detail: "Three levels with different music styles, usually very crowded and sweaty. More about dancing and high-energy chaos than conversation — interactions happen, but it’s loud and intense.",

    cost: "Moderate — $10–20 per drink",
    entryFee: "$15–25 on weekends",

    images: ["/images/the-met/1.jpg", "/images/the-met/2.jpg", "/images/the-met/3.jpg"],

    address: "256 Wickham St, Fortitude Valley QLD 4006",
    lat: -27.456612171277193, lng: 153.03414313885108,

    venueTypes: ["club"],

    hours: "9pm–4am Fri; 9pm–5am Sat; Closed Sun–Thurs",
  },
  {
    id: "lina-rooftop",
    name: "Lina Rooftop",
    suburb: "South Brisbane",

    description: "A premium rooftop venue in South Bank with poolside seating, city and river views, and a polished, upscale atmosphere. Known for cocktails, sunsets, and curated events.",

    highlight: "One of Brisbane’s best rooftop spots — high aesthetic, strong social energy, and a flirty, dressed-up crowd during events.",

    musicIntent: "secondary",
    primaryGenres: ["house", "latin", "dance", "commercial"],
    secondaryGenres: ["rnb", "chill", "afrobeats"],

    attractiveness: 9,
    ageRange: "21-30",

    energy: 7,
    intimacy: 5,
    social: 8,
    aesthetic: 9,

    venueTypes: ["rooftop", "cocktail_bar"],

    situations: ["date", "drinks", "sunset", "birthday", "events", "dancing", "rooftop"],

    detail: "Best experienced during events like DJ nights and pool parties, where the venue becomes much more social and high-energy. Outside of events, it’s more relaxed but still a strong option for drinks and atmosphere.",

    cost: "Expensive — $18–28 per drink",
    entryFee: "$20–40 for events; free otherwise",

    images: ["/images/lina/2.jpg", "/images/lina/1.jpg", "/images/lina/4.jpg"],

    address: "74 Tribune St, South Brisbane QLD 4101",
    lat: -27.48175727906548, lng: 153.02059594696448,

    hours: "11am–12am Fri–Sat; 11am–7pm Sun; 12–5pm Mon–Tue; 11am–10pm Wed–Thurs",
  },
  {
    id: "empire-hotel",
    name: "Empire Hotel",
    suburb: "Fortitude Valley",

    description: "A lively Valley pub known for its singalong music, classic hits, and fun, unpretentious atmosphere. Popular with students on weekends but still draws a slightly mixed crowd.",

    highlight: "One of the best spots in the Valley for singalong music and a social, easygoing night out.",

    musicIntent: "primary",
    primaryGenres: ["pop", "classics", "throwbacks"],
    secondaryGenres: ["rock", "commercial"],

    attractiveness: 7,
    ageRange: "18-25",

    energy: 8,
    intimacy: 3,
    social: 8,
    aesthetic: 5,

    venueTypes: ["pub", "bar"],

    situations: ["drinks with mates", "singalong", "meeting people", "night out"],

    detail: "Crowd gets very engaged with the music — lots of singing along and shared moments. Social and easy to talk to people.",

    cost: "Moderate — $15–20 per drink",
    entryFee: null,

    images: ["/images/empire/4.jpg", "/images/empire/2.jpg", "/images/empire/3.jpg"],

    address: "339 Brunswick St, Fortitude Valley QLD 4006",
    lat: -27.45855737379519, lng: 153.035123538851,

    hours: "11:30am–3am Fri–Sat; 11:30am–2am Sun & Thurs; 11:30am–1am Mon–Wed",
  },
  {
    id: "chattahoochee-joes",
    name: "Chattahoochee Joe’s Honky Tonk",
    suburb: "Fortitude Valley",

    description: "A multi-level country-themed bar in the Valley with line dancing, karaoke, and live country music. Fully embraces the honky tonk vibe with boots, hats, and a high-energy crowd.",

    highlight: "Packed on weekends with line dancing, live country music, and a highly social, participatory atmosphere.",

    musicIntent: "primary",
    primaryGenres: ["country"],
    secondaryGenres: ["pop", "classics"],

    attractiveness: 6,
    ageRange: "18-25",

    energy: 9,
    intimacy: 4,
    social: 9,
    aesthetic: 6,

    venueTypes: ["bar", "country", "karaoke", "live_music"],

    situations: ["dancing", "big night out", "meeting people", "karaoke", "live music"],

    detail: "Friday nights feature live country music and line dancing, which drive a very engaged and social crowd. Three levels with different vibes — basement with pool, main floor dancefloor, and a more relaxed upstairs area.",

    cost: "Moderate — $10–18 per drink",
    entryFee: "$10–20 on weekends",

    images: ["/images/chattahoochee/3.jpg", "/images/chattahoochee/2.jpg", "/images/chattahoochee/1.jpg"],

    address: "Fortitude Valley, QLD",
    lat: -27.45807355150275, lng: 153.03501563346754,

    hours: "5pm–3am Thurs; 4pm–3am Fri–Sat; Closed Sun–Wed"
  },
  {
    id: "valley-hops-brewing",
    name: "Valley Hops Brewing",
    suburb: "Fortitude Valley",

    description: "A relaxed rooftop brewery above Cloudland with city views, craft beers, and a laid-back atmosphere. Popular for quiet drinks, dates, and small groups.",

    highlight: "Chill rooftop brewery — great for dates and low-key drinks away from the chaos of the Valley.",

    musicIntent: "secondary",
    primaryGenres: ["background"],
    secondaryGenres: ["house", "chill"],

    attractiveness: 5,
    ageRange: "21-30",

    energy: 3,
    intimacy: 8,
    social: 3,
    aesthetic: 7,

    venueTypes: ["bar", "rooftop", "brewery"],

    situations: ["date", "drinks", "quiet drinks", "catch up", "post-work", "group"],

    detail: "Usually quiet and not very crowded, with most people sticking to their own groups. Draws a slightly more professional crowd — more about conversation and atmosphere than partying.",

    cost: "Moderate — $15–20 per drink",
    entryFee: null,

    images: ["/images/valley-hops/3.jpg", "/images/valley-hops/2.jpg"],

    address: "Level 1/321 Brunswick St, Fortitude Valley QLD 4006",
    lat: -27.45872211356854, lng: 153.03499509652343,

    hours: "11:30am–12am Fri–Sat; 11:30am–10pm Sun & Wed; 11:30am–11pm Thurs; Closed Mon–Tue"
  },
  {
    id: "eclipse",
    name: "Eclipse",
    suburb: "Fortitude Valley",

    description: "A Valley nightclub focused on electronic music and DJ sets, known for hosting touring artists and late-night rave-style events.",

    highlight: "Great when a big DJ is playing — otherwise very hit or miss.",

    musicIntent: "primary",
    primaryGenres: ["house", "electronic", "techno", "edm"],
    secondaryGenres: [],

    attractiveness: 5,
    ageRange: "18-25",

    energy: 8,
    intimacy: 2,
    social: 2,
    aesthetic: 4,

    venueTypes: ["club"],

    situations: ["dancing", "late night", "big night out", "clubbing", "rave"],

    detail: "Best experienced when a known DJ is performing — these nights can be busy and high-energy. Outside of events, the venue is often quiet and lacks atmosphere, so it's worth checking what's on before going.",

    cost: "Moderate — $15–20 per drink",
    entryFee: "$20 most nights (often free entry via promoters/stamps outside)",

    images: ["/images/eclipse/1.jpg", "/images/eclipse/2.jpg"],

    address: "Fortitude Valley, QLD",
    lat: -27.457000113548812, lng: 153.03330350190183,

    hours: "9pm–3am Fri–Sat"
  },
  {
    id: "the-brightside",
    name: "The Brightside",
    suburb: "Fortitude Valley",

    description: "An alternative live music venue and club in the Valley known for emo, punk, goth, and heavy music nights. Draws a strong alt crowd and hosts gigs, themed parties, and DJ nights.",

    highlight: "High-energy alt venue where people fully lean into the music — chaotic, expressive, and very different from mainstream clubs.",

    musicIntent: "primary",
    primaryGenres: ["emo", "punk", "rock", "metal"],
    secondaryGenres: ["pop", "throwbacks"],

    attractiveness: 6,
    ageRange: "18-25",

    energy: 9,
    intimacy: 5,
    social: 7,
    aesthetic: 3,

    venueTypes: ["club", "live_music"],

    situations: ["dancing", "live music", "night out", "alternative", "emo", "goth"],

    detail: "Known for themed nights and gigs where the crowd gets heavily involved — expect moshing, singing, and a very engaged atmosphere. Music ranges from emo/pop throwbacks to heavy metal depending on the night.",

    cost: "Moderate — $15–20 per drink",
    entryFee: "$10–25 depending on event",

    images: ["/images/brightside/1.jpg", "/images/brightside/2.jpg"],

    address: "27 Warner St, Fortitude Valley QLD 4006",
    lat: -27.456970993550947, lng: 153.0350358235063,

    hours: "6pm–3am Thurs–Sat; 6pm–12am Wed; 5–10pm Sun; Closed Mon–Tue"
  },
  {
    id: "the-villa-by-maya",
    name: "The Villa by MAYA",
    suburb: "Fortitude Valley",

    description: "A stylish rooftop venue with city views, a well-dressed crowd, and a strong focus on music-led events. Blends sunset drinks with a lively dancefloor later in the night.",

    highlight: "Rooftop party energy with a dressed-up crowd — great for sunset into dancing.",

    musicIntent: "primary",
    primaryGenres: ["house", "afrobeats", "latin", "dance"],
    secondaryGenres: ["electronic", "rnb"],

    attractiveness: 7,
    ageRange: "21-30",

    energy: 7,
    intimacy: 4,
    social: 7,
    aesthetic: 7,

    venueTypes: ["rooftop", "bar"],

    situations: ["sunset", "drinks", "dancing", "night out"],

    detail: "Tends to be busy on weekends with a more dressed-up crowd. Often transitions from relaxed sunset drinks into a more energetic dancefloor with house, afro, and latin-influenced music.",

    cost: "Moderate — $15–25 per drink",
    entryFee: null,

    images: ["/images/maya/1.jpg", "/images/maya/2.jpg", "/images/maya/3.jpg"],

    address: "Brunswick St, Fortitude Valley QLD",
    lat: -27.456718747818247, lng: 153.0367022451056,

    hours: "12pm–3am Fri–Sat; 12–11pm Sun & Wed–Thurs; Closed Mon–Tue"
  },
  {
    id: "mr-percivals",
    name: "Mr Percival’s",
    suburb: "Brisbane City",

    description: "A stylish riverside bar under the Story Bridge known for cocktails, views, and a polished, upscale atmosphere. Popular for dates and evening drinks.",

    highlight: "One of Brisbane’s best date spots — beautiful setting, great cocktails, and a lively but refined crowd.",

    musicIntent: "secondary",
    primaryGenres: ["house", "chill", "commercial"],
    secondaryGenres: ["rnb", "dance"],

    attractiveness: 7,
    ageRange: "21-30",

    energy: 6,
    intimacy: 8,
    social: 4,
    aesthetic: 9,

    venueTypes: ["bar", "cocktail_bar"],

    situations: ["date", "drinks", "sunset", "birthday", "cocktails"],

    detail: "Located right on the river under the Story Bridge, with a well-dressed crowd and strong date-night appeal. Can get quite busy on weekends, which reduces intimacy slightly but adds to the atmosphere.",

    cost: "Expensive — $18–30 per drink",
    entryFee: null,

    images: ["/images/mr-percivals/1.jpg", "/images/mr-percivals/4.jpg", "/images/mr-percivals/2.jpg"],

    address: "5 Boundary St, Brisbane City QLD 4000",
    lat: -27.462598598840906, lng: 153.03570488488512,

    hours: "11am–1am Mon-Sun"
  }
];

/*
  Venues are manually curated. Add entries here following the Venue type shape.

  Required fields:
  {
    id: "kebab-case-id",
    name: "Venue Name",
    suburb: "Suburb",
    description: "2–3 sentence description.",
    highlight: "Single punchy reason to go.",

    musicIntent: "primary" | "secondary" | "incidental",
    primaryGenres: ["genre1", "genre2"],   // genres that define this venue's music
    secondaryGenres: ["genre3"],           // supporting genres (can be empty [])

    venueTypes: ["pub"],  // 1–2 of: rooftop | cocktail_bar | pub | club | dive_bar | piano_bar | live_music

    attractiveness: 7,  // 0–10: how attractive/desirable the crowd is
    ageRange: "21-30",  // "18-21" | "18-25" | "21-30" | "30-60" | "60+"

    energy: 7,     // 0–10: dead quiet → absolute chaos
    intimacy: 5,   // 0–10: impossible to connect → very intimate
    social: 8,     // 0–10: isolated → everyone mingling
    aesthetic: 6,  // 0–10: dive bar → upscale

    situations: ["date", "group night out"],
    detail: "One specific thing worth knowing",  // optional
    cost: "Cheap — $10–15 per drink",
    entryFee: "$10 on the door" | null,
    images: ["https://..."],
    address: "123 Street, Brisbane QLD 4000",
    hours: "...",
  }
*/

export function getVenueById(id: string): Venue | undefined {
  return venues.find((v) => v.id === id);
}

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
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "savile-row",
    name: "Savile Row",
    suburb: "Fortitude Valley",
    description: "A speakeasy-style cocktail bar hidden behind an orange door on Ann Street. Dark, intimate, and focused on whisky and classic cocktails.",
    highlight: "Small and moody — book ahead if you want a seat, especially on weekends.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["lounge", "blues"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "anniversary", "drinks with a colleague", "impress someone", "quiet catch-up", "whisky tasting"],
    detail: "Runs whisky masterclasses if you want to learn something while you drink.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/savile-row/hero.jpg", "/images/savile-row/interior.jpg", "/images/savile-row/signature.jpg"],
    address: "667 Ann St, Fortitude Valley QLD 4006",
    hours: "6pm–2am Sun–Thu; 6pm–3am Fri–Sat",
    lat: -27.4583476,
    lng: 153.0353704,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-gresham",
    name: "The Gresham Bar",
    suburb: "Brisbane City",
    description: "Heritage cocktail bar in a restored 1890s building with an extensive whiskey and rum collection. No bookings, walk-in only.",
    highlight: "One of Brisbane's best cocktail bars — arrive early on weekends or you'll be standing.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["blues", "lounge"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 5, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "after work drinks", "special occasion", "impressing someone", "whiskey tasting", "quiet drinks"],
    detail: "Has a private back room for group bookings of 18+",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/the-gresham/hero.jpg", "/images/the-gresham/crowd.jpg", "/images/the-gresham/interior.jpg"],
    address: "308 Queen St, Brisbane City QLD 4000",
    hours: "11am–2am Mon–Fri; 3pm–2am Sat; Closed Sun",
    lat: -27.4671567,
    lng: 153.0281984,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-triffid",
    name: "The Triffid",
    suburb: "Newstead",
    description: "A converted WWII hangar that's become Brisbane's go-to live music venue. Indoor stage for ticketed acts, outdoor beer garden for free gigs and Friday knock-offs.",
    highlight: "The beer garden is the real draw — free live music, burgers, and a relaxed crowd that actually listens.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["rock", "indie", "alternative"], // REVIEW
    secondaryGenres: ["country", "electronic", "punk"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 6, // REVIEW
    intimacy: 4, // REVIEW
    social: 6, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["live_music", "beergarden", "bar"],
    situations: ["live music", "friday knock-offs", "casual catch-up", "date night", "gig with mates", "sunday session"],
    detail: "Friday Sundowners from 5pm with DJs spinning in the beer garden.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: "Free for beer garden, ticketed for main room shows",
    images: ["/images/the-triffid/hero.jpg", "/images/the-triffid/crowd.webp", "/images/the-triffid/interior.jpg"],
    address: "7/9 Stratton St, Newstead QLD 4006",
    hours: "Thu–Fri 11am–11:30pm; Sat–Sun 12pm–11:30pm; Mon–Wed Closed",
    lat: -27.4523211,
    lng: 153.0419127,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-zoo",
    name: "The Zoo",
    suburb: "Fortitude Valley",
    description: "A long-running live music venue in the Valley that's hosted local and international acts for over 30 years. Small, sweaty, and loud.",
    highlight: "One of Brisbane's most important music rooms — if your favourite band is playing a 300-cap show, it's probably here.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["rock", "indie", "alternative", "punk"], // REVIEW
    secondaryGenres: ["metal", "electronic", "hip-hop"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "18-25", // REVIEW
    energy: 8, // REVIEW
    intimacy: 3, // REVIEW
    social: 5, // REVIEW
    aesthetic: 3, // REVIEW
    venueTypes: ["live_music", "bar"],
    situations: ["gig", "night out", "seeing a band", "supporting local music", "catching touring acts"],
    detail: "Standing room only — wear comfortable shoes",
    cost: "Cheap — $10–15 per drink",
    entryFee: "$15–40 depending on the act",
    images: ["/images/the-zoo/hero.jpg", "/images/the-zoo/interior.jpg", "/images/the-zoo/signature.jpg"],
    address: "711 Ann St, Fortitude Valley QLD 4006",
    hours: "Varies by event — check listings",
    lat: -27.4577205,
    lng: 153.0359446,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "brooklyn-standard",
    name: "Brooklyn Standard",
    suburb: "Brisbane City CBD",
    description: "Underground live music bar hidden down a CBD laneway. Brick cellar vibes, bands every night, and a crowd that's there to actually listen.",
    highlight: "One of the few places in Brisbane where live music is genuinely the main event — expect funk, soul, rock, and everything loud.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["funk", "soul", "rock", "rnb"], // REVIEW
    secondaryGenres: ["rockabilly", "mariachi", "blues"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 8, // REVIEW
    intimacy: 5, // REVIEW
    social: 6, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["live_music", "bar"],
    situations: ["live music", "date night", "night out", "after work drinks", "birthday", "something different"],
    detail: "Live bands 6 nights a week — check their Facebook for the lineup.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/brooklyn-standard/hero.jpg", "/images/brooklyn-standard/crowd.jpg", "/images/brooklyn-standard/interior.jpg"],
    address: "Eagle Ln, Brisbane City QLD 4000",
    hours: "Mon–Wed 6pm–12am, Thu 6pm–1am, Fri–Sat 6pm–3am, Sun closed",
    lat: -27.4663463,
    lng: 153.0298831,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-bearded-lady",
    name: "The Bearded Lady",
    suburb: "West End",
    description: "A grungy West End institution with live music most nights and a covered outdoor area. The kind of place where everyone looks like they're in a band.",
    highlight: "One of Brisbane's best spots for local and touring indie acts — expect sticky floors and cheap drinks.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["indie", "rock", "punk", "alternative"], // REVIEW
    secondaryGenres: ["garage", "psych", "folk"], // REVIEW
    attractiveness: 4, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 7, // REVIEW
    intimacy: 4, // REVIEW
    social: 6, // REVIEW
    aesthetic: 2, // REVIEW
    venueTypes: ["live_music", "dive_bar", "bar"],
    situations: ["live music", "night out", "casual catch-up", "seeing a band", "late night", "solo"],
    detail: "Live music most nights of the week",
    cost: "Cheap — $10–15 per drink",
    entryFee: "$10–20 for gigs",
    images: ["/images/the-bearded-lady/hero.jpg", "/images/the-bearded-lady/signature.jpg"],
    address: "138 Boundary St, West End QLD 4101",
    hours: "4pm - late Wed–Sun (hours vary for shows)",
    lat: -27.480469,
    lng: 153.0122941,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "fiume-rooftop-bar",
    name: "Fiume Rooftop Bar",
    suburb: "Brisbane City",
    description: "Hotel rooftop bar at Crystalbrook Vincent with views across the Brisbane River and Story Bridge. Polished, scenic, and quieter than the bustle of Howard Smith Wharves below.",
    highlight: "Best for a sundowner with someone you're trying to impress — upscale vibe without being pretentious.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["lounge", "house"], // REVIEW
    secondaryGenres: ["jazz", "ambient"], // REVIEW
    attractiveness: 8, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["rooftop", "cocktail_bar", "bar"],
    situations: ["date night", "anniversary", "after work drinks", "sunset drinks", "special occasion", "impressing someone"],
    detail: "Part of Crystalbrook Vincent hotel — limited hours midweek",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/fiume-rooftop-bar/hero.png", "/images/fiume-rooftop-bar/crowd.jpg", "/images/fiume-rooftop-bar/interior.jpg"],
    address: "Level 3/5 Boundary St, Brisbane City QLD 4000",
    hours: "Wed–Thu 4pm–9pm; Fri–Sat 12pm–11:30pm; Sun 12pm–9pm; Mon–Tue closed",
    lat: -27.462476,
    lng: 153.0357273,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-tivoli",
    name: "The Tivoli",
    suburb: "Fortitude Valley",
    description: "Brisbane's longest-running live music venue, hosting international and local acts since 1989. Standing room, decent sightlines, and a proper gig atmosphere.",
    highlight: "One of the few mid-sized rooms in Brisbane where you can actually see touring bands up close.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["rock", "indie", "alternative", "electronic"], // REVIEW
    secondaryGenres: ["punk", "hip-hop", "metal", "pop"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 8, // REVIEW
    intimacy: 4, // REVIEW
    social: 5, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["live_music"],
    situations: ["gig night", "seeing a band", "date night", "night out", "catching up with mates"],
    detail: "Capacity around 1,500 — intimate enough to feel close to the stage but big enough for proper production.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: "Varies by show — typically $30–80",
    images: ["/images/the-tivoli/hero.jpg", "/images/the-tivoli/interior.jpg", "/images/the-tivoli/crowd.jpg"],
    address: "52 Costin St, Fortitude Valley QLD 4006",
    hours: "Box office Mon–Fri 9am–4pm; show nights vary",
    lat: -27.4521218,
    lng: 153.0315037,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "soko-rooftop",
    name: "SOKO Rooftop Bar & Restaurant",
    suburb: "Fortitude Valley",
    description: "A 14th-floor rooftop bar and restaurant with city views, Peruvian-Japanese fusion food, and a heavy focus on pisco sours and sake cocktails.",
    highlight: "The views are genuinely impressive — dress up, book ahead, and expect to pay for the occasion.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["electronic", "latin"], // REVIEW
    attractiveness: 8, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 6, // REVIEW
    social: 5, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["rooftop", "cocktail_bar", "bar"],
    situations: ["date night", "special occasion", "birthday", "client dinner", "anniversary", "after work drinks"],
    detail: "Strict dress code — no flip flops, shorts, singlets, or visible face/neck tattoos",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/soko-rooftop/hero.png", "/images/soko-rooftop/crowd.jpg", "/images/soko-rooftop/interior.jpg"],
    address: "Level 14/7 Symes St, Fortitude Valley QLD 4006",
    hours: "Mon–Tue 12pm–4pm; Wed–Thu 12pm–10pm; Fri–Sat 12pm–11pm; Sun 12pm–10pm",
    lat: -27.4533062,
    lng: 153.0339513,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "death-and-taxes",
    name: "Death and Taxes",
    suburb: "Brisbane City",
    description: "A hidden speakeasy-style whisky bar tucked into Brisbane's oldest laneway. Dark, intimate, and stacked with over 1000 bottles behind the bar.",
    highlight: "No reservations — walk-in only, so arrive early on weekends if you want a booth.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["lounge", "blues"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "after work drinks", "whisky tasting", "intimate catch-up", "special occasion", "quiet drink"],
    detail: "Runs whisky tasting events with guest brand ambassadors",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/death-taxes/hero.jpg", "/images/death-taxes/interior.jpg"],
    address: "36 Burnett Ln, Brisbane City QLD 4000",
    hours: "3pm–1am Sun–Thu; 2pm–2am Fri–Sat",
    lat: -27.4699235,
    lng: 153.0238736,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "before-after",
    name: "Before + After",
    suburb: "Brisbane City CBD",
    description: "A basement bar tucked into a George Street laneway, focused on cheese boards, amaro, and inventive cocktails.",
    highlight: "Feels like a hidden gem — small, cosy, and best for intimate drinks rather than a big night out.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["lounge", "electronic"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "after work drinks", "quiet catch-up", "pre-dinner drinks", "anniversary"],
    detail: "Same team behind Milquetoast Wine Bar and Restaurant Venner.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/before-after/hero.jpg"],
    address: "Laneway Basement, 181 George St, Brisbane City QLD 4000",
    hours: "Tue–Sat 4pm–12am; Sun 4–11pm; Mon closed",
    lat: -27.4714105,
    lng: 153.0242614,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "maker",
    name: "Maker",
    suburb: "South Brisbane",
    description: "A compact cocktail bar tucked into Fish Lane's laneway scene. Dark, moody, and focused on drinks.",
    highlight: "One of the better cocktail spots on Fish Lane — small enough that you'll want to arrive early on weekends.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["electronic", "house"], // REVIEW
    secondaryGenres: ["jazz", "soul"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 5, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "after work drinks", "pre-dinner drinks", "catching up with a friend", "small group"],
    detail: "Part of the Fish Lane precinct near GOMA and QPAC",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/maker/hero.jpg", "/images/maker/signature.jpg"],
    address: "9 Fish Ln, South Brisbane QLD 4101",
    hours: "Wed–Sat 4pm–12am, Sun 4pm–10pm",
    lat: -27.4737034,
    lng: 153.017731,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "dr-gimlette-brisbane",
    name: "Dr Gimlette Brisbane",
    suburb: "Brisbane City",
    description: "A compact cocktail bar tucked away on Edward Street with a speakeasy vibe and classic drinks menu.",
    highlight: "Intimate enough for conversation but busy enough to feel alive — ideal for a first date or small group.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["lounge", "funk"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 5, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "after work drinks", "intimate catch-up", "small group", "pre-dinner drinks"],
    detail: "Named after the naval surgeon who popularised the gimlet cocktail.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/dr-gimlette/hero.png", "/images/dr-gimlette/signature.jpg"],
    address: "109 Edward St, Brisbane City QLD 4000",
    hours: "3pm–1am Mon–Thu & Sun; 3pm–2am Fri–Sat",
    lat: -27.4700407,
    lng: 153.0288771,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "hallelujah-shoe-works",
    name: "Hallelujah Shoe Works",
    suburb: "Brisbane City",
    description: "A CBD cobbler and shoe repair shop, not a bar or nightlife venue.",
    highlight: "This is a shoe repair business, not a drinking establishment.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: [], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 1, // REVIEW
    intimacy: 3, // REVIEW
    social: 2, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["bar"], // NOTE: This is NOT a bar - this appears to be a shoe repair shop
    situations: ["shoe repair", "leather work", "key cutting"],
    detail: "Traditional cobbler services in the CBD",
    cost: "N/A — not a bar",
    entryFee: null,
    images: ["/images/cobbler/hero.jpg", "/images/cobbler/crowd.jpg", "/images/cobbler/interior.jpg"],
    address: "Shop 3/126 Adelaide St, Brisbane City QLD 4000",
    hours: "7:30am - 5:30pm Mon-Fri; 9:30am - 2:30pm Sat; Closed Sun",
    lat: -27.467918,
    lng: 153.0251978,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "frogs-hollow-saloon",
    name: "Frog's Hollow Saloon",
    suburb: "Brisbane City",
    description: "A country and western themed bar in the CBD with line dancing, live music, and a proper honky-tonk atmosphere.",
    highlight: "One of the only places in Brisbane where you can two-step and line dance without irony.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["country", "americana", "country rock"], // REVIEW
    secondaryGenres: ["rock", "blues", "folk"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 7, // REVIEW
    intimacy: 4, // REVIEW
    social: 7, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["country", "bar", "live_music"],
    situations: ["night out", "dancing", "themed night", "date night", "group outing", "something different"],
    detail: "Regular line dancing nights and live country bands",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/frog-s-hollow-saloon/hero.jpg", "/images/frog-s-hollow-saloon/interior.jpg"],
    address: "26 Charlotte St, Brisbane City QLD 4000",
    hours: "12pm - 1am every day",
    lat: -27.4719977,
    lng: 153.0254977,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "milquetoast",
    name: "Milquetoast",
    suburb: "Brisbane City",
    description: "A hidden laneway wine bar tucked off Elizabeth Street. Small, dim, and deliberately low-key.",
    highlight: "The kind of place you'd take someone to impress them — intimate seating and an excellent natural wine list.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["lounge", "ambient"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 3, // REVIEW
    intimacy: 9, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar", "cocktail_bar"],
    situations: ["date night", "quiet drink", "after work", "catching up with one friend", "impressing someone"],
    detail: "Focus on natural and minimal intervention wines",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/milquetoast/hero.jpg", "/images/milquetoast/interior.jpg"],
    address: "Laneway/199 Elizabeth St, Brisbane City QLD 4000",
    hours: "Tue–Sat 4pm–12am",
    lat: -27.4697456,
    lng: 153.0275325,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "maeve",
    name: "Maeve",
    suburb: "South Brisbane",
    description: "An intimate upstairs wine bar tucked away on Melbourne Street. Natural wines, small plates, and a calm, grown-up atmosphere.",
    highlight: "Perfect for a quiet date or catching up with one or two friends over good wine.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["ambient", "indie"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 3, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "quiet drinks", "after work", "wine tasting", "catching up with a friend"],
    detail: "Focus on natural and organic wines",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/maeve-wine/hero.jpg", "/images/maeve-wine/interior.jpg"],
    address: "Upstairs, Level 1/39 Melbourne St, South Brisbane QLD 4101",
    hours: "Tue–Thu 5pm–10pm; Fri–Sat 12pm–10:30pm; Sun–Mon Closed",
    lat: -27.4739067,
    lng: 153.018096,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "iris-rooftop",
    name: "Iris Rooftop",
    suburb: "Fortitude Valley",
    description: "Rooftop bar atop Hotel X with skyline views and a Mediterranean-leaning food and drinks menu. Attracts a well-dressed, slightly older Valley crowd.",
    highlight: "One of the few genuine rooftops in the Valley — book ahead for sunset drinks on weekends.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["electronic", "disco"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 6, // REVIEW
    social: 5, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["rooftop", "bar"],
    situations: ["date night", "after work drinks", "sunset drinks", "special occasion", "catch-up with friends"],
    detail: "Part of Hotel X, so expect hotel bar prices.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/iris-rooftop/hero.jpg", "/images/iris-rooftop/signature.jpg"],
    address: "Atop Hotel X, 458 Brunswick St, Fortitude Valley QLD 4006",
    hours: "Tue–Thu 4pm–10pm, Fri–Sat 11:30am–11pm, Sun 11:30am–9:30pm, Mon closed",
    lat: -27.4602419,
    lng: 153.0377001,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "cielo-rooftop",
    name: "Cielo Rooftop",
    suburb: "Fortitude Valley",
    description: "A small rooftop bar tucked above Brunswick Street with city views and a relaxed Mediterranean vibe.",
    highlight: "One of the Valley's more chill rooftop options — good for sunset drinks before heading elsewhere.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["electronic", "pop"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 6, // REVIEW
    social: 5, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["rooftop", "bar"],
    situations: ["date night", "after work drinks", "sunset drinks", "casual catch-up", "pre-drinks"],
    detail: "Opens earlier on weekends for afternoon sessions",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/cielo-rooftop/hero.jpg", "/images/cielo-rooftop/interior.jpg"],
    address: "Rooftop, Shop 1/209 Brunswick St, Fortitude Valley QLD 4006",
    hours: "Thu 4pm–9:30pm; Fri 4pm–10pm; Sat 12pm–10pm; Sun 12pm–8pm; Mon–Wed Closed",
    lat: -27.4565478,
    lng: 153.0321657,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "babylon-brisbane",
    name: "Babylon Brisbane",
    suburb: "Brisbane City",
    description: "Middle Eastern-inspired restaurant and bar on Eagle Street with rooftop views over the river. More dining-focused than a dedicated bar.",
    highlight: "The rooftop terrace is the draw — great for sunset drinks before dinner.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["world", "ambient"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 6, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["rooftop", "bar"],
    situations: ["date night", "after work drinks", "special occasion", "client dinner", "sunset drinks"],
    detail: "Lebanese-inspired menu with shisha available on the terrace.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/babylon-brisbane/hero.jpg"],
    address: "145 Eagle St, Brisbane City QLD 4000",
    hours: "11am–10pm Mon–Tue; 11am–11pm Wed–Thu; 11am–12:30am Fri–Sat; 11am–10pm Sun",
    lat: -27.4665054,
    lng: 153.0306249,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "stanley-restaurant",
    name: "Stanley Restaurant",
    suburb: "Brisbane City",
    description: "Upscale waterfront restaurant at Howard Smith Wharves with polished Euro-style dining and river views.",
    highlight: "More of a special occasion dinner spot than a drinking venue — dress up and book ahead.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: ["jazz", "lounge"], // REVIEW
    attractiveness: 8, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 3, // REVIEW
    intimacy: 7, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["bar"],
    situations: ["anniversary dinner", "special occasion", "date night", "impressing someone", "business dinner"],
    detail: "Part of the Howard Smith Wharves precinct",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/stanley/hero.jpg", "/images/stanley/crowd.jpg"],
    address: "5 Boundary St, Brisbane City QLD 4000",
    hours: "12pm – 10pm Mon–Sat; 11:30am – 10pm Sun",
    lat: -27.4624719,
    lng: 153.0350917,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-terrace-rooftop-bar",
    name: "The Terrace Rooftop Bar",
    suburb: "South Brisbane",
    description: "Hotel rooftop bar on level 21 with panoramic views across South Bank and the Brisbane River. Upscale, quiet, and designed for lingering over drinks.",
    highlight: "One of the best sunset views in Brisbane — dress smart and book ahead on weekends.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["lounge", "jazz"], // REVIEW
    secondaryGenres: ["soul", "easy listening"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 3, // REVIEW
    intimacy: 7, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["rooftop", "cocktail_bar", "bar"],
    situations: ["date night", "anniversary", "special occasion", "sunset drinks", "business drinks", "catching up with one friend"],
    detail: "Part of the Emporium Hotel — expect polished service and a well-heeled crowd.",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/the-terrace-at-emporium/hero.jpg", "/images/the-terrace-at-emporium/signature.jpg"],
    address: "Emporium Hotel South Bank, Level 21/267 Grey St, South Brisbane QLD 4101",
    hours: "11am–11pm Mon–Wed, Sun; 11am–12am Thu–Fri; 6:30am–12am Sat",
    lat: -27.4814952,
    lng: 153.0231548,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "iris-rooftop",
    name: "Iris Rooftop",
    suburb: "Fortitude Valley",
    description: "A rooftop bar atop Hotel X with city views and a Mediterranean-influenced menu. Polished but not stuffy.",
    highlight: "One of the better rooftop options in the Valley — book ahead for sunset drinks on weekends.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["disco", "funk"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 6, // REVIEW
    social: 5, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["rooftop", "bar"],
    situations: ["date night", "after work drinks", "birthday", "sunset drinks", "special occasion", "catching up with friends"],
    detail: "Part of Hotel X — good for pre-dinner drinks before heading out in the Valley.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/iris-bar-restaurant/hero.jpg", "/images/iris-bar-restaurant/signature.jpg"],
    address: "Atop Hotel X, 458 Brunswick St, Fortitude Valley QLD 4006",
    hours: "Tue–Thu 4pm–10pm; Fri–Sat 11:30am–11pm; Sun 11:30am–9:30pm; Mon closed",
    lat: -27.4602419,
    lng: 153.0377001,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "wet-deck",
    name: "WET Deck",
    suburb: "Brisbane City CBD",
    description: "Rooftop pool bar at the W Brisbane hotel with skyline views. Expensive drinks, Instagram-ready aesthetics, and a crowd that dresses to impress.",
    highlight: "One of the only rooftop pools in the city — great for sundowners if you can stomach the prices.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["electronic", "pop"], // REVIEW
    attractiveness: 8, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 5, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["rooftop", "cocktail_bar", "bar"],
    situations: ["date night", "sundowner", "special occasion", "impressing someone", "hen's party", "corporate drinks"],
    detail: "Pool access for hotel guests; bar open to the public",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/wet-deck/hero.jpg", "/images/wet-deck/crowd.jpg", "/images/wet-deck/signature.jpg"],
    address: "Level 4/81 N Quay, Brisbane City QLD 4000",
    hours: "11am–9pm Mon–Thu & Sun; 11am–12am Fri–Sat",
    lat: -27.4699298,
    lng: 153.0221393,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-prince-consort-hotel",
    name: "The Prince Consort Hotel",
    suburb: "Fortitude Valley",
    description: "A multi-level Valley institution with different rooms for different vibes — from pub meals to live music to late-night dancing.",
    highlight: "Open until 5am every night, making it a reliable last stop when everywhere else has closed.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["electronic", "house", "techno"], // REVIEW
    secondaryGenres: ["hip-hop", "rnb", "indie", "rock"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "18-25", // REVIEW
    energy: 7, // REVIEW
    intimacy: 3, // REVIEW
    social: 6, // REVIEW
    aesthetic: 4, // REVIEW
    venueTypes: ["pub", "club", "live_music"],
    situations: ["night out", "late night", "after party", "live music", "group outing", "birthday", "last stop"],
    detail: "Multiple rooms including a dedicated live music space and late-night club areas.",
    cost: "Cheap — $10–15 per drink",
    entryFee: "$10–20 on weekends",
    images: ["/images/prince-consort/hero.jpg"],
    address: "230 Wickham St, Fortitude Valley QLD 4006",
    hours: "11am - 5am every day",
    lat: -27.4575221,
    lng: 153.0333725,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "osbourne-hotel",
    name: "Osbourne Hotel",
    suburb: "Fortitude Valley",
    description: "A heritage pub on the edge of the Valley with multiple bars, beer garden, and late-night dance floors on weekends.",
    highlight: "One of the few Valley spots where you can start with pub meals and end up dancing until 3am.",
    musicIntent: "secondary", // REVIEW
    primaryGenres: ["pop", "house", "rnb"], // REVIEW
    secondaryGenres: ["hip-hop", "commercial dance"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 6, // REVIEW
    intimacy: 4, // REVIEW
    social: 7, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["pub", "bar", "beergarden"],
    situations: ["after work drinks", "casual catch-up", "night out", "group outing", "watching sport", "birthday"],
    detail: "Multiple levels and bars means you can find a quieter spot early, louder space later.",
    cost: "Cheap — $10–15 per drink",
    entryFee: null,
    images: ["/images/osbourne-hotel/hero.jpg", "/images/osbourne-hotel/crowd.jpg", "/images/osbourne-hotel/interior.jpg"],
    address: "766 Ann St, Fortitude Valley QLD 4006",
    hours: "11am–10pm Mon–Tue; 11am–11pm Wed; 11am–12am Thu; 11am–3am Fri–Sat; 11am–10pm Sun",
    lat: -27.4564983,
    lng: 153.0367937,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-wickham",
    name: "The Wickham",
    suburb: "Fortitude Valley",
    description: "Brisbane's iconic LGBTQ+ pub with multiple bars, a beer garden, and drag shows most nights. A welcoming institution that's been a Valley fixture for decades.",
    highlight: "The heart of Brisbane's queer nightlife — inclusive, loud, and always up for a good time.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["pop", "dance", "rnb"], // REVIEW
    secondaryGenres: ["house", "disco", "electronic"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 7, // REVIEW
    intimacy: 4, // REVIEW
    social: 8, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["pub", "bar", "beergarden"],
    situations: ["night out", "drag shows", "dancing", "lgbtq+ friendly", "birthday", "group outing", "after work drinks"],
    detail: "Regular drag performances and themed nights throughout the week.",
    cost: "Cheap — $10–15 per drink",
    entryFee: null,
    images: ["/images/the-wickham/hero.jpg", "/images/the-wickham/interior.jpg"],
    address: "308 Wickham St, Fortitude Valley QLD 4006",
    hours: "10am - 12am Mon, Tue; 10am - 2am Wed, Thu, Sun; 10am - 3am Fri, Sat",
    lat: -27.4560743,
    lng: 153.0348663,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "jubilee-hotel",
    name: "Jubilee Hotel",
    suburb: "Fortitude Valley",
    description: "A classic Valley pub with multiple levels, outdoor areas, and a laid-back vibe that draws a mixed crowd of locals and students.",
    highlight: "Solid all-rounder pub — nothing fancy, just cheap drinks and a reliable spot for bigger groups.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["pop", "rock"], // REVIEW
    secondaryGenres: ["top 40", "indie"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 4, // REVIEW
    social: 7, // REVIEW
    aesthetic: 4, // REVIEW
    venueTypes: ["pub", "bar", "beergarden"],
    situations: ["after work drinks", "casual catch-up", "group outing", "watching sport", "pre-drinks", "big groups"],
    detail: "Multiple levels and outdoor spaces make it easy to find a spot",
    cost: "Cheap — $10–15 per drink",
    entryFee: null,
    images: ["/images/the-jubilee-hotel/hero.jpg", "/images/the-jubilee-hotel/crowd.jpg"],
    address: "470 St Pauls Ter, Fortitude Valley QLD 4006",
    hours: "10am–12am Mon–Wed, Sun; 10am–2am Thu–Sat",
    lat: -27.4536882,
    lng: 153.0336766,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "leftys-music-hall",
    name: "Lefty's Music Hall",
    suburb: "Petrie Terrace",
    description: "A dedicated live music venue on Caxton Street with a focus on rock, country, and Americana acts. Standing room, loud, and unapologetically old-school.",
    highlight: "One of the few venues in Brisbane where live music is the actual point — not background noise.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["rock", "country", "americana", "blues"], // REVIEW
    secondaryGenres: ["indie", "folk", "alternative"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 7, // REVIEW
    intimacy: 4, // REVIEW
    social: 6, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["live_music", "bar"],
    situations: ["live music", "night out", "gig", "weekend plans", "date night"],
    detail: "Named after the left-handed guitar — expect guitar-forward acts most weekends.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: "$10–30 depending on the act",
    images: ["/images/lefty-s-music-hall/hero.jpg", "/images/lefty-s-music-hall/crowd.jpg"],
    address: "15 Caxton St, Petrie Terrace QLD 4000",
    hours: "5pm–2am Fri–Sat",
    lat: -27.4645492,
    lng: 153.0129935,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "archive",
    name: "Archive",
    suburb: "West End",
    description: "A craft beer bar with a huge rotating tap list and bottle shop attached. Laid-back West End vibe with outdoor seating.",
    highlight: "One of Brisbane's best beer selections — over 20 taps and hundreds of bottles if you know what you're looking for.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["indie", "alternative"], // REVIEW
    secondaryGenres: ["jazz", "soul"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 6, // REVIEW
    social: 5, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["bar", "pub"],
    situations: ["casual catch-up", "after work", "date", "solo drinks", "beer tasting", "weekend afternoon"],
    detail: "Bottle shop attached so you can take something home.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/archive-beer-boutique/hero.jpg", "/images/archive-beer-boutique/interior.jpg"],
    address: "100 Boundary St, West End QLD 4101",
    hours: "12pm - 12am Mon-Thu, Sun; 10am - 2am Fri-Sat",
    lat: -27.4790309,
    lng: 153.0126716,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "brewdog-dogtap-brisbane",
    name: "BrewDog DogTap Brisbane",
    suburb: "Murarrie",
    description: "BrewDog's Brisbane brewery taproom in an industrial pocket of Murarrie. Big warehouse space with their full range on tap plus brewery-exclusive releases.",
    highlight: "Worth the drive for craft beer fans — over 20 taps and you can watch the brewing happen.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["indie", "rock"], // REVIEW
    secondaryGenres: ["electronic", "pop"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 5, // REVIEW
    social: 6, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["brewery", "bar"],
    situations: ["casual catch-up", "afternoon drinks", "brewery tour", "group outing", "craft beer exploration"],
    detail: "Dog-friendly venue with outdoor seating",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/brewdog-murarrie/hero.jpg", "/images/brewdog-murarrie/interior.jpg"],
    address: "77 Metroplex Ave, Murarrie QLD 4172",
    hours: "11am - 10pm every day",
    lat: -27.448543,
    lng: 153.0997958,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-plough-inn",
    name: "The Plough Inn",
    suburb: "South Brisbane",
    description: "A heritage pub on Stanley Street Plaza, steps from South Bank. Classic pub grub, cold beers, and a reliable spot before or after a show at QPAC.",
    highlight: "The go-to pre-theatre pint for anyone heading to the Performing Arts Centre.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["background"], // REVIEW
    secondaryGenres: ["pop", "rock"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 5, // REVIEW
    social: 5, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["pub"],
    situations: ["pre-theatre drinks", "casual catch-up", "after work", "family dinner", "watching sport", "lunch"],
    detail: "Heritage-listed building with outdoor seating on the plaza",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/the-plough-inn/hero.jpg", "/images/the-plough-inn/crowd.jpg"],
    address: "29 Stanley St Plaza, South Brisbane QLD 4101",
    hours: "11am - 11pm Mon-Thu, Sun; 11am - 1am Fri-Sat",
    lat: -27.4783601,
    lng: 153.0224917,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "norman-hotel",
    name: "Norman Hotel",
    suburb: "Woolloongabba",
    description: "A classic Brisbane pub known for its steaks and no-frills beer garden. Popular with locals and footy crowds heading to the Gabba.",
    highlight: "Famous for its steaks — this is a pub where you come to eat and drink, not dance.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["rock", "pub rock"], // REVIEW
    secondaryGenres: ["classic rock", "country"], // REVIEW
    attractiveness: 4, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 5, // REVIEW
    social: 6, // REVIEW
    aesthetic: 3, // REVIEW
    venueTypes: ["pub", "beergarden"],
    situations: ["casual catch-up", "after work drinks", "pre-game drinks", "family dinner", "steak night", "sunday session"],
    detail: "Walk from the Gabba — heaving on game days.",
    cost: "Cheap — $10–15 per drink",
    entryFee: null,
    images: ["/images/the-norman-hotel/hero.jpg", "/images/the-norman-hotel/signature.jpg"],
    address: "102 Ipswich Rd, Woolloongabba QLD 4102",
    hours: "Tue–Thu & Sun 11am–10pm; Fri–Sat 11am–11:30pm; Mon closed",
    lat: -27.4918324,
    lng: 153.035317,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "saccharomyces-beer-cafe",
    name: "Saccharomyces Beer Cafe",
    suburb: "South Brisbane",
    description: "A craft beer bar tucked into Fish Lane with a rotating tap list and relaxed laneway seating. Popular with the post-work crowd and beer nerds alike.",
    highlight: "One of the best craft beer selections in Brisbane — expect to find rare drops you won't see elsewhere.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["indie", "alternative"], // REVIEW
    secondaryGenres: ["jazz", "soul"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 6, // REVIEW
    social: 5, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["bar", "brewery"],
    situations: ["after work drinks", "date", "casual catch-up", "beer tasting", "solo drink"],
    detail: "Named after the yeast genus used in brewing — they take their beer seriously here.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/saccharomyces-beer-caf/hero.jpg", "/images/saccharomyces-beer-caf/crowd.jpg"],
    address: "Fish Ln, South Brisbane QLD 4101",
    hours: "3pm–10pm Mon–Wed; 12pm–10pm Thu; 12pm–12am Fri–Sat; 12pm–8pm Sun",
    lat: -27.4745321,
    lng: 153.0166003,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "julius-pizzeria",
    name: "Julius Pizzeria",
    suburb: "South Brisbane",
    description: "A casual Italian spot on Grey Street near QPAC, focused on wood-fired pizzas and simple pasta dishes. More restaurant than bar, but decent wine list.",
    highlight: "Solid pre-show dinner option — quick service and close to South Bank's cultural precinct.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: [], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 6, // REVIEW
    social: 4, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "pre-theatre dinner", "casual dinner", "family meal"],
    detail: "Wood-fired pizzas are the main draw",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/julius-pizzeria/hero.jpg", "/images/julius-pizzeria/signature.jpg"],
    address: "77 Grey St, South Brisbane QLD 4101",
    hours: "Tue–Thu 12pm–9:30pm, Fri–Sat 12pm–10pm, Sun 12pm–9pm, Mon closed",
    lat: -27.4736071,
    lng: 153.0178836,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "beccofino",
    name: "Beccofino",
    suburb: "Teneriffe",
    description: "Intimate Italian wine bar and restaurant in a heritage woolstore. White tablecloths, dim lighting, and a serious wine list.",
    highlight: "One of Brisbane's best date spots — romantic, quiet, and feels special without being stuffy.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "classical"], // REVIEW
    secondaryGenres: ["ambient"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 3, // REVIEW
    intimacy: 9, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "anniversary", "special occasion", "quiet dinner", "impressing someone", "wine tasting"],
    detail: "Known for house-made pasta and an extensive Italian wine selection.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/beccofino/hero.jpg"],
    address: "10 Vernon Terrace, Cnr of Florence St, Teneriffe QLD 4005",
    hours: "Tue–Thu 5:30–9pm; Fri–Sat 12–9:30pm; Sun 12–9pm; Mon closed",
    lat: -27.4558092,
    lng: 153.0497222,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "happy-boy",
    name: "Happy Boy",
    suburb: "Fortitude Valley",
    description: "An outdoor dumpling and cocktail spot tucked under fairy lights in East Street. More restaurant than bar, but the drinks are solid.",
    highlight: "Perfect for a casual dinner date — grab dumplings and cocktails under the string lights before heading somewhere else.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: ["lo-fi", "ambient"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 6, // REVIEW
    social: 5, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "dinner with friends", "casual catch-up", "pre-drinks", "after work"],
    detail: "Known for dumplings and Asian-inspired cocktails",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/happy-boy/hero.jpg"],
    address: "Under fairy-lit trees, East St, Fortitude Valley QLD 4006",
    hours: "Tue–Thu 11:30am–2pm & 5:30–8:30pm; Fri 11:30am–2:30pm & 4:30–9:30pm; Sat–Sun 12–2:45pm & 4:30–8:30pm; Mon closed",
    lat: -27.4549756,
    lng: 153.0377759,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "same-same-brisbane",
    name: "sAme sAme Brisbane",
    suburb: "Fortitude Valley",
    description: "Thai-inspired bar and restaurant tucked into Ada Lane. Small plates, creative cocktails, and a moody fit-out.",
    highlight: "A solid date spot if you want flavour-forward drinks and don't mind sitting close together.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["electronic", "soul"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 4, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "after work drinks", "catching up with a friend", "pre-dinner drinks", "small group"],
    detail: "Part of the James Street dining precinct",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/same-same/hero.jpg", "/images/same-same/crowd.jpg"],
    address: "Shop AM3 Ada Lane, 46 James St, Fortitude Valley QLD 4006",
    hours: "5pm–10pm Mon–Thu; 11:30am–11pm Fri–Sat; 11:30am–10pm Sun",
    lat: -27.4561864,
    lng: 153.0403779,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "bianca-restaurant",
    name: "Biànca Restaurant",
    suburb: "Fortitude Valley",
    description: "Upscale Italian restaurant tucked into Ada Lane on James Street. More of a dining destination than a drinking spot, but the bar area works for aperitivos.",
    highlight: "Beautiful fit-out and serious food — come here to impress someone, not to party.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "lounge"], // REVIEW
    secondaryGenres: ["italian", "easy listening"], // REVIEW
    attractiveness: 8, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 3, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "anniversary", "business dinner", "special occasion", "impressing someone"],
    detail: "Part of the James Street precinct — good for a pre-dinner drink before heading elsewhere.",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/bi-nca/hero.jpg", "/images/bi-nca/interior.jpg"],
    address: "Shop AM5 Ada Lane, 46 James St, Fortitude Valley QLD 4006",
    hours: "5pm–10pm Mon–Thu; 12pm–11pm Fri; 11:30am–11pm Sat; 11:30am–10pm Sun",
    lat: -27.4560522,
    lng: 153.0404668,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "gerards-bistro",
    name: "Gerard's Bistro",
    suburb: "Fortitude Valley",
    description: "Middle Eastern-inspired restaurant on James Street with a dedicated bar area. More restaurant than bar, but the cocktails are excellent.",
    highlight: "One of Brisbane's best restaurants — come for dinner, stay for drinks at the bar.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "world"], // REVIEW
    secondaryGenres: ["soul", "ambient"], // REVIEW
    attractiveness: 8, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["bar", "cocktail_bar"],
    situations: ["date night", "special occasion", "anniversary", "impressing someone", "after dinner drinks"],
    detail: "Friday and Saturday lunch service available",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/gerard-s-bistro/hero.jpg"],
    address: "14/15 James St, Fortitude Valley QLD 4006",
    hours: "Mon–Thu 5:30pm–12am; Fri–Sat 12pm–3pm, 5:30pm–12am; Sun Closed",
    lat: -27.4565453,
    lng: 153.0389514,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "agnes-restaurant",
    name: "Agnes Restaurant",
    suburb: "Fortitude Valley",
    description: "Fire-focused fine dining in a dramatic industrial space. Think wood-fired everything and serious wine pairings.",
    highlight: "One of Brisbane's best restaurants — book well ahead and dress up a bit.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["ambient"], // REVIEW
    secondaryGenres: ["jazz", "soul"], // REVIEW
    attractiveness: 8, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 3, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["bar"],
    situations: ["special occasion", "date night", "anniversary", "business dinner", "celebration"],
    detail: "Wood-fired cooking is the centrepiece — expect smoky, bold flavours",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/agnes/hero.jpg", "/images/agnes/interior.jpg", "/images/agnes/signature.jpg"],
    address: "22 Agnes St, Fortitude Valley QLD 4006",
    hours: "5:15pm–10pm Mon–Thu, Sun; 11:30am–11pm Fri–Sat",
    lat: -27.4579396,
    lng: 153.0308917,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "honto",
    name: "hôntô",
    suburb: "Fortitude Valley",
    description: "A Japanese izakaya-style bar tucked away in a Fortitude Valley laneway. Dark, intimate, and feels like a hidden find.",
    highlight: "One of Brisbane's best-kept secrets — small, moody, and perfect for impressing a date.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["japanese", "lounge"], // REVIEW
    secondaryGenres: ["electronic", "ambient"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "intimate drinks", "impressing someone", "anniversary", "small group catch-up"],
    detail: "Japanese-inspired cocktails and bar snacks",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/honto/hero.jpg", "/images/honto/signature.jpg"],
    address: "Alden St, Fortitude Valley QLD 4006",
    hours: "5:30pm–10pm Mon–Thu; 5pm–11pm Fri–Sat; 5pm–10pm Sun",
    lat: -27.4556693,
    lng: 153.0348472,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "superfly-pizza",
    name: "Superfly Pizza",
    suburb: "Woolloongabba",
    description: "A small neighbourhood pizza joint with craft beers and natural wines. More about the food than the party.",
    highlight: "Excellent Detroit-style pizza in a no-frills setting — grab a booth and a cold beer.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["soul", "funk"], // REVIEW
    secondaryGenres: ["rock", "indie"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 5, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["bar"],
    situations: ["casual dinner", "date night", "after work", "low-key catch-up"],
    detail: "Known for their Detroit-style pizza with thick, crispy edges",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/superfly-pizza/hero.jpg", "/images/superfly-pizza/signature.jpg"],
    address: "17B Gibbon St, Woolloongabba QLD 4102",
    hours: "5pm - 9pm Mon-Sat; 4pm - 8pm Sun",
    lat: -27.4876531,
    lng: 153.0347341,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "bar-brutus",
    name: "Bar Brutus",
    suburb: "South Brisbane",
    description: "A wine-focused bar tucked away on Melbourne Street with a Mediterranean-leaning food menu and natural wines.",
    highlight: "Intimate space that rewards wine nerds — come early on weekends or you'll be standing.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["indie", "acoustic"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 5, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "after work drinks", "casual catch-up", "wine tasting", "small group dinner"],
    detail: "Strong focus on natural and minimal-intervention wines",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/bar-brutus/hero.jpg", "/images/bar-brutus/interior.jpg"],
    address: "2/49 Melbourne St, South Brisbane QLD 4101",
    hours: "Tue–Fri 4pm–12am; Sat–Sun 2pm–12am; Mon closed",
    lat: -27.4738031,
    lng: 153.0177552,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "black-bear-lodge",
    name: "Black Bear Lodge",
    suburb: "Fortitude Valley",
    description: "An intimate upstairs bar on Brunswick Street with a focus on whiskey and live music. Dark, cozy, and feels like a hidden gem.",
    highlight: "One of the Valley's best spots for catching local live acts in a small room setting.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["indie", "rock", "folk", "acoustic"], // REVIEW
    secondaryGenres: ["blues", "singer-songwriter", "alternative"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 8, // REVIEW
    social: 6, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["live_music", "bar"],
    situations: ["date night", "live music", "drinks with friends", "chilled night out", "discovering new bands"],
    detail: "Regular live music program featuring local and touring acts.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: "$10–20 for ticketed gigs",
    images: ["/images/black-bear-lodge/hero.jpg", "/images/black-bear-lodge/crowd.jpg"],
    address: "1/322 Brunswick St, Fortitude Valley QLD 4006",
    hours: "Wed–Thu & Sun 6pm–12am; Fri 6pm–3am; Sat 7pm–3am; Mon–Tue closed",
    lat: -27.4580598,
    lng: 153.034764,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "greaser",
    name: "Greaser",
    suburb: "Fortitude Valley",
    description: "A rock and metal bar tucked inside The Prince Consort building. Dark, loud, and unapologetically heavy.",
    highlight: "Brisbane's dedicated spot for metalheads and rock fans who want to hear something heavier than the usual Valley fare.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["metal", "rock", "punk"], // REVIEW
    secondaryGenres: ["hard rock", "grunge", "alternative"], // REVIEW
    attractiveness: 4, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 8, // REVIEW
    intimacy: 3, // REVIEW
    social: 6, // REVIEW
    aesthetic: 4, // REVIEW
    venueTypes: ["bar", "live_music", "dive_bar"],
    situations: ["night out", "live music", "late night", "gig", "meeting people with similar taste", "birthday"],
    detail: "Part of The Prince Consort complex — can wander between different bars in the same building.",
    cost: "Cheap — $10–15 per drink",
    entryFee: null,
    images: ["/images/greaser/hero.jpg", "/images/greaser/interior.jpg", "/images/greaser/interior.jpg"],
    address: "259 Brunswick St, Fortitude Valley QLD 4006",
    hours: "Wed–Thu & Sun 5pm–12am; Fri–Sat 5pm–3am; Mon–Tue Closed",
    lat: -27.4574064,
    lng: 153.0333986,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "crowbar-brisbane",
    name: "Crowbar Brisbane",
    suburb: "Fortitude Valley",
    description: "A dedicated heavy music venue in the Valley with a dark, gritty aesthetic and a loyal local following.",
    highlight: "The go-to spot for metal, punk, and hardcore gigs — small room, big sound, cheap drinks.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["metal", "punk", "hardcore"], // REVIEW
    secondaryGenres: ["rock", "alternative", "grunge"], // REVIEW
    attractiveness: 4, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 8, // REVIEW
    intimacy: 3, // REVIEW
    social: 6, // REVIEW
    aesthetic: 2, // REVIEW
    venueTypes: ["live_music", "dive_bar", "bar"],
    situations: ["gig night", "night out", "catching a band", "solo", "meeting mates", "cheap drinks"],
    detail: "Hosts local and touring heavy acts most weekends",
    cost: "Cheap — $10–15 per drink",
    entryFee: "$10–20 depending on lineup",
    images: ["/images/crowbar-brisbane/hero.jpg", "/images/crowbar-brisbane/signature.jpg"],
    address: "711 Ann St, Fortitude Valley QLD 4006",
    hours: "Wed–Sun from 7pm (gig dependent)",
    lat: -27.4577103,
    lng: 153.035958,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "tomcat",
    name: "Tomcat",
    suburb: "Fortitude Valley",
    description: "A compact upstairs bar on Wickham Street with a late-night focus and intimate layout. One of the Valley's smaller, moodier spots.",
    highlight: "Tight space that gets sweaty fast — good for dancing with a small crew, not ideal for big groups.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["house", "disco", "funk"], // REVIEW
    secondaryGenres: ["electronic", "techno"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 7, // REVIEW
    intimacy: 5, // REVIEW
    social: 6, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["bar", "club"],
    situations: ["late night", "dancing", "night out", "date night", "after party"],
    detail: "Upstairs venue — look for the entrance on Wickham Street",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/tomcat/hero.jpg", "/images/tomcat/crowd.jpg", "/images/tomcat/interior.jpg"],
    address: "Level 1/210 Wickham St, Fortitude Valley QLD 4006",
    hours: "Thu, Sun: 8pm–3am; Fri, Sat: 7pm–3am; Mon–Wed: Closed",
    lat: -27.4577384,
    lng: 153.0331139,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-princess-theatre",
    name: "The Princess Theatre",
    suburb: "Woolloongabba",
    description: "A heritage-listed theatre venue that doubles as an event space and live music destination. The ornate 1880s building hosts everything from comedy to rock gigs.",
    highlight: "One of Brisbane's most atmospheric rooms for live music — the old theatre bones give it character you won't find elsewhere.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["rock", "indie", "alternative"], // REVIEW
    secondaryGenres: ["punk", "metal", "folk"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 7, // REVIEW
    intimacy: 4, // REVIEW
    social: 5, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["live_music", "bar"],
    situations: ["live gig", "night out", "date night", "seeing a band", "comedy show"],
    detail: "Heritage-listed venue from the 1880s with original theatrical features",
    cost: "Reasonable — $15–20 per drink",
    entryFee: "Varies by event — typically $20–50",
    images: ["/images/princess-theatre/hero.jpg", "/images/princess-theatre/crowd.jpg"],
    address: "8 Annerley Rd, Woolloongabba QLD 4102",
    hours: "Event-dependent — check listings",
    lat: -27.4863722,
    lng: 153.0292225,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "can-you-keep-a-secret",
    name: "Can You Keep A Secret",
    suburb: "Woolloongabba",
    description: "A speakeasy-style cocktail bar tucked away on Stanley Street. Small, dimly lit, and heavy on the prohibition-era theatrics.",
    highlight: "The kind of place where you need to know it exists — genuinely hidden entrance and intimate seating.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["blues", "lounge"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 9, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "anniversary", "intimate catch-up", "impressing someone", "quiet drinks"],
    detail: "Look for the unmarked door — that's part of the experience.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/can-you-keep-a-secret/hero.jpg", "/images/can-you-keep-a-secret/interior.jpg"],
    address: "619-621 Stanley St, Woolloongabba QLD 4102",
    hours: "Wed–Thu 5pm–12am; Fri 4pm–12am; Sat 2pm–12am; Sun 5pm–12am; Mon–Tue Closed",
    lat: -27.4857675,
    lng: 153.029687,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "dark-red-wine-bar",
    name: "Dark Red Wine Bar",
    suburb: "Fortitude Valley",
    description: "A compact wine bar tucked away on Ann Street with a moody, intimate vibe. The kind of place you come for proper wine, not to party.",
    highlight: "Small and cosy — perfect for a quiet drink with someone you actually want to talk to.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["ambient", "lounge"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 3, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "quiet drink", "after work drinks", "catching up with a friend", "wine tasting"],
    detail: "Focus on natural and small-batch wines",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/dark-red/hero.jpg", "/images/dark-red/crowd.jpg", "/images/dark-red/signature.jpg"],
    address: "694 Ann St, Fortitude Valley QLD 4006",
    hours: "Wed–Fri 4pm–10pm; Sat 4pm–11pm",
    lat: -27.4579285,
    lng: 153.0352882,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "jungle-tiki-bar",
    name: "Jungle Tiki Bar",
    suburb: "West End",
    description: "A tropical tiki bar tucked away in West End with rum-heavy cocktails and kitsch Polynesian decor.",
    highlight: "Small and atmospheric — the kind of place you stumble upon and keep coming back to.", // REVIEW
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["reggae", "tropical"], // REVIEW
    secondaryGenres: ["funk", "soul"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 5, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "catch-up with a friend", "something different", "midweek drinks", "after dinner"],
    detail: "Known for their rum collection and tiki cocktails",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/jungle-tiki-bar/hero.jpg", "/images/jungle-tiki-bar/signature.jpg"],
    address: "76 Vulture St, West End QLD 4101",
    hours: "Wed 6pm–10pm; Thu–Sat 4pm–11:30pm; Sun 5pm–11:30pm; Mon–Tue closed",
    lat: -27.4807279,
    lng: 153.0116225,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "maker",
    name: "Maker",
    suburb: "South Brisbane",
    description: "A compact cocktail bar tucked into Fish Lane's laneway strip. Dark, moody, and focused on drinks.",
    highlight: "One of Fish Lane's best spots for a proper cocktail without the pretension.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["soul", "jazz"], // REVIEW
    secondaryGenres: ["electronic", "downtempo"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 5, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "after work drinks", "pre-dinner drinks", "catching up with a friend", "small group"],
    detail: "Part of the Fish Lane precinct near GOMA and the Cultural Centre.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/maker-riverside/hero.jpg", "/images/maker-riverside/signature.jpg"],
    address: "9 Fish Ln, South Brisbane QLD 4101",
    hours: "Wed–Sat 4pm–12am; Sun 4–10pm; Mon–Tue closed",
    lat: -27.4737034,
    lng: 153.017731,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "maker",
    name: "Maker",
    suburb: "South Brisbane",
    description: "A tiny 20-seat cocktail bar on Fish Lane that operates walk-ins only. Intimate, deliberate, and impossible to get into on busy nights.",
    highlight: "Only 20 seats and no bookings — if you want in on a Saturday, arrive early or be prepared to wait.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["electronic", "ambient"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 3, // REVIEW
    intimacy: 9, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "intimate catch-up", "special occasion", "quiet drinks", "impressing someone"],
    detail: "Walk-ins only, no reservations",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/maker/hero.jpg", "/images/maker/signature.jpg"],
    address: "9 Fish Ln, South Brisbane QLD 4101",
    hours: "Wed–Sat 4pm–12am, Sun 4pm–10pm, Mon–Tue closed",
    lat: -27.4737034,
    lng: 153.017731,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "cobbler",
    name: "Cobbler",
    suburb: "West End",
    description: "A whisky-focused cocktail bar tucked away in West End. Small, dimly lit, and serious about its spirits.",
    highlight: "One of Brisbane's original whisky bars — come for the collection, stay for the expertly made cocktails.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["blues", "lounge"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "quiet drinks", "whisky tasting", "after dinner drinks", "special occasion"],
    detail: "Margarita Mondays with cheap prices and fresh lime juice.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/cobbler-west-end/hero.jpg", "/images/cobbler-west-end/interior.jpg"],
    address: "7 Browning St, West End QLD 4101",
    hours: "Mon 5pm–1am; Tue–Sun 4pm–1am",
    lat: -27.4779704,
    lng: 153.0130879,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "dr-gimlette",
    name: "Dr Gimlette",
    suburb: "Brisbane City",
    description: "An upscale cocktail bar in one of Brisbane's oldest heritage buildings, known for tableside martini service and a 9-meter marble bar.",
    highlight: "The martini cart experience is genuinely theatrical — they make it right at your table and hand it over ice-cold.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "lounge"], // REVIEW
    secondaryGenres: ["soul", "easy listening"], // REVIEW
    attractiveness: 8, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["cocktail_bar", "bar"],
    situations: ["date night", "anniversary", "impressing someone", "after work drinks", "special occasion", "quiet conversation"],
    detail: "Over 800 bottles behind the bar if cocktails aren't your thing.",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/dr-gimlette/hero.png", "/images/dr-gimlette/interior.jpg"],
    address: "109 Edward St, Brisbane City QLD 4000",
    hours: "3pm–1am Mon–Thu & Sun; 3pm–2am Fri–Sat",
    lat: -27.4700407,
    lng: 153.0288771,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "frogs-hollow-saloon",
    name: "Frog's Hollow Saloon",
    suburb: "Brisbane City",
    description: "A compact Western-themed saloon bar tucked away on Charlotte Street. Old-school pub vibes with a kitsch cowboy twist.",
    highlight: "One of the few CBD bars open until 1am every night — good for a late drink when other places have shut.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["country", "rock"], // REVIEW
    secondaryGenres: ["blues", "americana"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 6, // REVIEW
    social: 6, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["bar", "pub"],
    situations: ["after work drinks", "casual catch-up", "late night", "small group", "solo drink"],
    detail: "No reservations after 3pm — turn up and hope for the best.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/frog-s-hollow-saloon/hero.jpg", "/images/frog-s-hollow-saloon/interior.jpg"],
    address: "26 Charlotte St, Brisbane City QLD 4000",
    hours: "12pm - 1am, 7 days",
    lat: -27.4719977,
    lng: 153.0254977,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "milquetoast",
    name: "Milquetoast",
    suburb: "Brisbane City",
    description: "A hidden laneway wine bar tucked off Elizabeth Street. Small, moody, and unapologetically intimate.",
    highlight: "The kind of place you'd bring someone you're trying to impress — if you can find it.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "soul"], // REVIEW
    secondaryGenres: ["lounge", "indie"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 9, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar", "cocktail_bar"],
    situations: ["date night", "intimate catch-up", "after work drinks", "special occasion", "impressing someone"],
    detail: "British-inspired small plates until late",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/milquetoast/hero.jpg", "/images/milquetoast/signature.webp"],
    address: "Laneway/199 Elizabeth St, Brisbane City QLD 4000",
    hours: "Tue–Sat 4pm–12am; Sun–Mon Closed",
    lat: -27.4697456,
    lng: 153.0275325,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "maeve",
    name: "Maeve",
    suburb: "South Brisbane",
    description: "A heritage-listed wine bar tucked upstairs on Melbourne Street. Small, intimate, and focused on natural wines with European-style snacks.",
    highlight: "One of the best date spots in South Brisbane — moody, quiet, and genuinely romantic.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "ambient"], // REVIEW
    secondaryGenres: ["classical", "soul"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 3, // REVIEW
    intimacy: 9, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "anniversary", "quiet drinks", "after-show drinks", "impressing someone"],
    detail: "Focus on natural and low-intervention wines",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/maeve-wine/hero.jpg", "/images/maeve-wine/interior.png"],
    address: "Upstairs, Level 1/39 Melbourne St, South Brisbane QLD 4101",
    hours: "Tue–Thu 5pm–10pm, Fri–Sat 12pm–10:30pm, Sun–Mon Closed",
    lat: -27.4739067,
    lng: 153.018096,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "iris-rooftop",
    name: "Iris Rooftop",
    suburb: "Fortitude Valley",
    description: "Spanish-inspired rooftop bar atop Hotel X with 360° city views. Open-air, tapas-focused, and leans toward the polished end of Valley nightlife.",
    highlight: "One of the better sunset spots in Brisbane — book ahead on weekends or you'll be waiting.",
    musicIntent: "secondary", // REVIEW
    primaryGenres: ["acoustic", "latin", "jazz"], // REVIEW
    secondaryGenres: ["soul", "pop"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 6, // REVIEW
    social: 6, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["rooftop", "cocktail_bar", "bar"],
    situations: ["date night", "sunset drinks", "birthday", "catch-up with friends", "corporate drinks", "special occasion"],
    detail: "Live music Friday to Sunday afternoons.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/iris-rooftop/hero.jpg", "/images/iris-rooftop/interior.jpg", "/images/iris-rooftop/signature.jpg"],
    address: "Atop Hotel X, 458 Brunswick St, Fortitude Valley QLD 4006",
    hours: "Tue–Thu 4pm–late; Fri–Sun 11:30am–late; Mon closed",
    lat: -27.4602419,
    lng: 153.0377001,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "cielo-rooftop",
    name: "Cielo Rooftop",
    suburb: "Fortitude Valley",
    description: "A polished rooftop bar in the Valley with skyline views and an Italian aperitivo lean. Small space, mostly seated, draws a slightly older after-work crowd.",
    highlight: "Great sunset spot for a spritz — but book ahead on weekends or you'll be waiting.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["pop", "disco"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 5, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["rooftop", "cocktail_bar", "bar"],
    situations: ["date night", "after work drinks", "catch-up with friends", "birthday", "sundowners", "girls' day out"],
    detail: "Bottomless rosé brunches on Saturdays, seafood brunch Sundays.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/cielo-rooftop/hero.jpg", "/images/cielo-rooftop/crowd.jpg", "/images/cielo-rooftop/signature.jpg"],
    address: "Rooftop, Shop 1/209 Brunswick St, Fortitude Valley QLD 4006",
    hours: "Thu 4pm–9:30pm; Fri 4pm–10pm; Sat 12pm–late; Sun 12pm–8pm; Mon–Wed closed",
    lat: -27.4565478,
    lng: 153.0321657,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "babylon-brisbane",
    name: "Babylon Brisbane",
    suburb: "Brisbane City",
    description: "Multi-level Middle Eastern restaurant and bar on the riverfront with terraces, cocktails, and space for up to 500 people in the outdoor garden area.",
    highlight: "One of the best sunset spots in the CBD — the terrace fills up fast on Fridays so arrive early.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["electronic", "world"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 5, // REVIEW
    social: 6, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar", "rooftop"],
    situations: ["date night", "after work drinks", "corporate function", "birthday", "group dinner", "sunset drinks"],
    detail: "Live music on select nights",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/babylon-brisbane/hero.webp", "/images/babylon-brisbane/interior.webp", "/images/babylon-brisbane/crowd.webp"],
    address: "145 Eagle St, Brisbane City QLD 4000",
    hours: "11am–10pm Sun–Tue; 11am–11pm Wed–Thu; 11am–12:30am Fri–Sat",
    lat: -27.4665054,
    lng: 153.0306249,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "stanley-restaurant",
    name: "Stanley Restaurant",
    suburb: "Brisbane City",
    description: "Upscale Cantonese restaurant at Howard Smith Wharves with waterfront views. More of a dining destination than a drinking spot.",
    highlight: "Go for the food and the riverside setting — not really a bar vibe, but Stan's Lounge upstairs works for pre-dinner drinks.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: ["ambient", "lounge"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "anniversary", "family dinner", "birthday", "business dinner", "special occasion"],
    detail: "Stan's Lounge upstairs for cocktails before or after dinner.",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/stanley/hero.jpg", "/images/stanley/interior.jpg", "/images/stanley/signature.jpg"],
    address: "5 Boundary St, Brisbane City QLD 4000",
    hours: "12pm - 10pm Mon-Sat; 11:30am - 10pm Sun",
    lat: -27.4624719,
    lng: 153.0350917,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-terrace-rooftop-bar",
    name: "The Terrace Rooftop Bar",
    suburb: "South Brisbane",
    description: "A polished rooftop bar on level 21 of the Emporium Hotel with retractable glass ceiling and sweeping city views. Very much a hotel bar vibe.",
    highlight: "Genuinely impressive views and a solid spot for a fancy date — just don't expect a casual crowd.",
    musicIntent: "secondary", // REVIEW
    primaryGenres: ["soul", "rnb"], // REVIEW
    secondaryGenres: ["pop", "acoustic", "jazz"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 6, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["rooftop", "cocktail_bar", "bar"],
    situations: ["date night", "special occasion", "anniversary", "drinks with parents", "sunset drinks", "impressing someone"],
    detail: "Live soul/R&B duo on Sundays",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/the-terrace-at-emporium/hero.jpg", "/images/the-terrace-at-emporium/interior.jpg"],
    address: "Emporium Hotel South Bank, Level 21/267 Grey St, South Brisbane QLD 4101",
    hours: "11am–11pm Mon–Wed; 11am–12am Thu–Fri; 6:30am–12am Sat; 6:30am–11pm Sun",
    lat: -27.4814952,
    lng: 153.0231548,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "iris-rooftop",
    name: "Iris Rooftop",
    suburb: "Fortitude Valley",
    description: "Spanish-inspired rooftop bar atop Hotel X with 360° views of the city skyline. Open-air setting with tapas and cocktails.",
    highlight: "Best visited at sunset on a Friday or Saturday when the live music kicks in and the views hit their peak.",
    musicIntent: "secondary", // REVIEW
    primaryGenres: ["acoustic", "latin"], // REVIEW
    secondaryGenres: ["pop", "soul", "jazz"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 6, // REVIEW
    intimacy: 5, // REVIEW
    social: 6, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["rooftop", "bar", "cocktail_bar"],
    situations: ["date night", "sunset drinks", "birthday", "catch-up with friends", "after work drinks", "special occasion"],
    detail: "Live music Friday to Sunday on the rooftop.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/iris-bar-restaurant/hero.jpg", "/images/iris-bar-restaurant/interior.jpg", "/images/iris-bar-restaurant/signature.jpg"],
    address: "Atop Hotel X, 458 Brunswick St, Fortitude Valley QLD 4006",
    hours: "Tue–Thu 4pm–late; Fri–Sun 11:30am–late; Mon closed",
    lat: -27.4602419,
    lng: 153.0377001,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "wet-deck",
    name: "WET Deck",
    suburb: "Brisbane City CBD",
    description: "Rooftop pool bar at the W Hotel with city views. More of a hotel amenity than a standalone bar — drinks are expensive and the crowd skews corporate or tourist.",
    highlight: "The pool is heated and the views are nice, but expect hotel prices and a slightly sterile vibe.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["house", "lounge"], // REVIEW
    secondaryGenres: ["electronic", "pop"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 5, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["rooftop", "bar"],
    situations: ["hotel guests", "special occasion", "date", "afternoon drinks", "after work"],
    detail: "Part of the W Brisbane — pool access for hotel guests, bar open to public",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/wet-deck/hero.jpg", "/images/wet-deck/signature.jpg", "/images/wet-deck/interior.jpg"],
    address: "Level 4, 81 North Quay, Brisbane City QLD 4000",
    hours: "11am–9pm Mon–Thu & Sun, 11am–12am Fri–Sat",
    lat: -27.4699298,
    lng: 153.0221393,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-prince-consort-hotel",
    name: "The Prince Consort Hotel",
    suburb: "Fortitude Valley",
    description: "A massive multi-level pub complex with different bars, a beer garden, live music rooms, and late-night DJ spaces. Open until 5am every night.",
    highlight: "Five different spaces under one roof — you can start with pub grub and trivia, then end up at a DnB night upstairs.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["electronic", "drum and bass", "house"], // REVIEW
    secondaryGenres: ["rock", "pop", "rnb", "hip-hop"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "18-25", // REVIEW
    energy: 8, // REVIEW
    intimacy: 3, // REVIEW
    social: 7, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["pub", "live_music", "club", "beergarden"],
    situations: ["night out", "late night", "live music", "student night", "watching sport", "big group", "birthday", "after work drinks"],
    detail: "Multiple spaces including La La Land (club), Greaser (live music), and Prosperity88 (cocktail bar).",
    cost: "Cheap — $10–15 per drink",
    entryFee: "$10–15 for ticketed events",
    images: ["/images/prince-consort/hero.jpg", "/images/prince-consort/interior.jpg", "/images/prince-consort/crowd.jpg"],
    address: "230 Wickham St, Fortitude Valley QLD 4006",
    hours: "11am - 5am every day",
    lat: -27.4575221,
    lng: 153.0333725,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "osbourne-hotel",
    name: "Osbourne Hotel",
    suburb: "Fortitude Valley",
    description: "A large Valley pub with 31 beers on tap, a big beer garden, and late-night DJs on weekends. Gets rowdy after dark.",
    highlight: "One of the few Valley pubs open until 3am with proper pub vibes — expect crowds and noise on Friday/Saturday.",
    musicIntent: "secondary", // REVIEW
    primaryGenres: ["pop", "rnb", "house"], // REVIEW
    secondaryGenres: ["hip-hop", "commercial dance"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 7, // REVIEW
    intimacy: 3, // REVIEW
    social: 7, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["pub", "beergarden", "bar"],
    situations: ["watching sport", "after work drinks", "group outing", "night out", "casual catch-up", "late night", "birthday"],
    detail: "Hosts drag brunches, live music nights, and screens all major sports on stadium screens.",
    cost: "Cheap — $10–15 per drink",
    entryFee: null,
    images: ["/images/osbourne-hotel/hero.jpg", "/images/osbourne-hotel/crowd.jpg", "/images/osbourne-hotel/interior.webp"],
    address: "766 Ann St, Fortitude Valley QLD 4006",
    hours: "11am–10pm Mon–Tue; 11am–11pm Wed; 11am–12am Thu; 11am–3am Fri–Sat; 11am–10pm Sun",
    lat: -27.4564983,
    lng: 153.0367937,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-wickham",
    name: "The Wickham",
    suburb: "Fortitude Valley",
    description: "A long-running LGBTQIA+ pub in the Valley with a large beer garden, drag shows, and DJ nights. Feels like a community hub as much as a bar.",
    highlight: "Brisbane's most iconic queer venue — welcoming to everyone but especially lively during drag nights and weekend parties.",
    musicIntent: "secondary", // REVIEW
    primaryGenres: ["pop", "dance"], // REVIEW
    secondaryGenres: ["house", "disco", "rnb"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 7, // REVIEW
    intimacy: 4, // REVIEW
    social: 8, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["pub", "beergarden", "bar"],
    situations: ["night out", "drag shows", "pride", "group outing", "casual catch-up", "after work drinks", "karaoke night"],
    detail: "Weekly drag shows, karaoke Wednesdays, and trivia in the beer garden.",
    cost: "Cheap — $10–15 per drink",
    entryFee: null,
    images: ["/images/the-wickham/hero.jpg", "/images/the-wickham/interior.jpg", "/images/the-wickham/signature.jpg"],
    address: "308 Wickham St, Fortitude Valley QLD 4006",
    hours: "10am–12am Mon–Tue; 10am–2am Wed–Thu, Sun; 10am–3am Fri–Sat",
    lat: -27.4560743,
    lng: 153.0348663,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "jubilee-hotel",
    name: "Jubilee Hotel",
    suburb: "Fortitude Valley",
    description: "Heritage pub from 1887 with multiple bars across two levels plus a modern extension. Big on rugby and functions.",
    highlight: "The go-to spot for watching rugby in Brisbane — packed with fans on game days.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["pub rock", "classic hits"], // REVIEW
    secondaryGenres: ["pop"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 6, // REVIEW
    intimacy: 4, // REVIEW
    social: 7, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["pub", "bar"],
    situations: ["watching sport", "after work drinks", "casual catch-up", "birthday", "work function", "group outing"],
    detail: "Official Queensland Rugby Union partner venue",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/the-jubilee-hotel/hero.jpg", "/images/the-jubilee-hotel/interior.jpg", "/images/the-jubilee-hotel/signature.jpg"],
    address: "470 St Pauls Ter, Fortitude Valley QLD 4006",
    hours: "10am–12am Mon–Wed, Sun; 10am–2am Thu–Sat",
    lat: -27.4536882,
    lng: 153.0336766,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "leftys-music-hall",
    name: "Lefty's Music Hall",
    suburb: "Petrie Terrace",
    description: "A honky-tonk themed live music venue housed in the old Baroona Labor Hall. American comfort food, country-leaning live acts, and saloon-style decor.",
    highlight: "One of Brisbane's few dedicated country and Americana music venues — check the gig guide before heading over.",
    musicIntent: "primary", // REVIEW
    primaryGenres: ["country", "americana", "folk"], // REVIEW
    secondaryGenres: ["blues", "rock", "rockabilly"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 7, // REVIEW
    intimacy: 4, // REVIEW
    social: 6, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["live_music", "bar", "country"],
    situations: ["live music", "date night", "group outing", "weekend night out", "themed night", "birthday"],
    detail: "Only open Fri-Sat unless there's a ticketed event — always check the gig guide",
    cost: "Reasonable — $15–20 per drink",
    entryFee: "Varies by event",
    images: ["/images/lefty-s-music-hall/hero.jpg", "/images/lefty-s-music-hall/crowd.jpg", "/images/lefty-s-music-hall/interior.png"],
    address: "15 Caxton St, Petrie Terrace QLD 4000",
    hours: "Fri–Sat: 5pm–2am; Sun–Thu: Subject to gig guide",
    lat: -27.4645492,
    lng: 153.0129935,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "archive-beer-boutique",
    name: "Archive Beer Boutique",
    suburb: "West End",
    description: "A craft beer bar in West End with a huge tap list and a relaxed neighbourhood vibe. Popular with locals for after-work drinks and weekend sessions.",
    highlight: "One of Brisbane's best beer selections — if you're into craft beer, this is your spot.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["indie", "alternative"], // REVIEW
    secondaryGenres: ["pop", "rock"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 6, // REVIEW
    social: 6, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["bar", "pub"],
    situations: ["after work drinks", "casual catch-up", "date", "trivia night", "solo drink", "weekend session"],
    detail: "Hosts trivia nights and music bingo regularly",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/archive-beer-boutique/hero.jpg", "/images/archive-beer-boutique/interior.jpg"],
    address: "100 Boundary St, West End QLD 4101",
    hours: "12pm–12am Sun–Thu; 10am–2am Fri–Sat",
    lat: -27.4790309,
    lng: 153.0126716,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "brewdog-dogtap-brisbane",
    name: "BrewDog DogTap Brisbane",
    suburb: "Murarrie",
    description: "A large brewery taproom tucked under the Gateway Bridge with 28 taps, arcade games, and riverside seating. Industrial space, very casual, dog-friendly.",
    highlight: "Worth the drive out for fresh beer straight from the source — but it's a destination, not a drop-in.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: ["pop", "indie"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 4, // REVIEW
    social: 6, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["brewery", "beergarden", "bar"],
    situations: ["casual catch-up", "group outing", "afternoon drinks", "birthday", "dog-friendly outing", "family-friendly"],
    detail: "28 taps pouring beer brewed on-site, plus arcade machines and a photobooth.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/brewdog-murarrie/hero.jpg", "/images/brewdog-murarrie/interior.jpg", "/images/brewdog-murarrie/signature.jpg"],
    address: "77 Metroplex Ave, Murarrie QLD 4172",
    hours: "11am - 10pm every day",
    lat: -27.448543,
    lng: 153.0997958,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "the-plough-inn",
    name: "The Plough Inn",
    suburb: "South Brisbane",
    description: "Large South Bank pub with city skyline views, daily live music, and a sprawling outdoor deck by the river.",
    highlight: "One of the few pubs where you can watch the sunset over the CBD with a cold beer and live music most nights.",
    musicIntent: "secondary", // REVIEW
    primaryGenres: ["covers", "acoustic", "rock"], // REVIEW
    secondaryGenres: ["pop", "blues"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 4, // REVIEW
    social: 6, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["pub", "live_music", "beergarden"],
    situations: ["after work drinks", "casual catch-up", "watching the game", "family lunch", "date", "group outing"],
    detail: "Live music every day of the week, plus Friday night raffles.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/the-plough-inn/hero.jpg", "/images/the-plough-inn/interior.jpg", "/images/the-plough-inn/signature.jpg"],
    address: "29 Stanley St Plaza, South Brisbane QLD 4101",
    hours: "11am–11pm Mon–Thu & Sun; 11am–1am Fri–Sat",
    lat: -27.4783601,
    lng: 153.0224917,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "norman-hotel",
    name: "Norman Hotel",
    suburb: "Woolloongabba",
    description: "Historic 1889 pub famous for its meat cabinet and steaks. A proper Queensland pub with a garden bar and multiple function spaces.",
    highlight: "Self-proclaimed 'Brisbane's Worst Vegetarian Restaurant' — come for the steak, stay for the beer garden.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: ["rock", "pub rock"], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 5, // REVIEW
    social: 6, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["pub", "beergarden"],
    situations: ["family dinner", "pre-game drinks", "work lunch", "casual catch-up", "sunday session", "gabba game day"],
    detail: "Walking distance to the Gabba — packed on game days",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/the-norman-hotel/hero.jpg", "/images/the-norman-hotel/interior.jpg", "/images/the-norman-hotel/signature.jpg"],
    address: "102 Ipswich Rd, Woolloongabba QLD 4102",
    hours: "Tue–Thu & Sun 11am–10pm; Fri–Sat 11am–11:30pm; Mon closed",
    lat: -27.4918324,
    lng: 153.035317,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "saccharomyces-beer-cafe",
    name: "Saccharomyces Beer Cafe",
    suburb: "South Brisbane",
    description: "A small, fiercely independent craft beer bar tucked down Fish Lane. Rotating taps from local breweries, plus indie wines and spirits.",
    highlight: "The kind of place where the bartender will happily talk you through every tap — come for the beer education, stay for the laneway vibes.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["indie", "alternative"], // REVIEW
    secondaryGenres: ["jazz", "soul"], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 5, // REVIEW
    aesthetic: 6, // REVIEW
    venueTypes: ["bar", "brewery"],
    situations: ["after work drinks", "casual catch-up", "date night", "trying new beers", "solo drink"],
    detail: "Rotating tap takeovers and tasting events throughout the week.",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/saccharomyces-beer-caf/hero.jpg", "/images/saccharomyces-beer-caf/crowd.jpg", "/images/saccharomyces-beer-caf/signature.jpg"],
    address: "23 Fish Lane, South Brisbane QLD 4101",
    hours: "Mon–Wed 3pm–10pm; Thu 12pm–10pm; Fri–Sat 12pm–12am; Sun 12pm–8pm",
    lat: -27.4745321,
    lng: 153.0166003,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "julius-pizzeria",
    name: "Julius Pizzeria",
    suburb: "South Brisbane",
    description: "A compact pizzeria on Fish Lane that does Neapolitan-style pies and natural wines. More restaurant than bar, but the vibe is relaxed.",
    highlight: "Great for a casual dinner date — the pizzas are legit and the wine list is thoughtful.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: [], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 4, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "casual dinner", "pre-show drinks", "small group catch-up"],
    detail: "Walk-ins welcome but it fills up fast on weekends",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/julius-pizzeria/hero.jpg", "/images/julius-pizzeria/signature.jpg"],
    address: "77 Grey St, South Brisbane QLD 4101",
    hours: "Tue–Thu 12pm–9:30pm, Fri–Sat 12pm–10pm, Sun 12pm–9pm, Mon closed",
    lat: -27.4736071,
    lng: 153.0178836,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "beccofino",
    name: "Beccofino",
    suburb: "Teneriffe",
    description: "An intimate Italian restaurant and wine bar tucked into a quiet Teneriffe corner. More of a dinner spot than a drinking destination.",
    highlight: "Great for a relaxed date night with wine — but this is a restaurant first, not a bar.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "italian"], // REVIEW
    secondaryGenres: ["acoustic", "easy listening"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 3, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "anniversary", "quiet dinner", "wine with friends"],
    detail: "Italian-focused wine list and classic dishes",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/beccofino/hero.jpg", "/images/beccofino/crowd.jpg"],
    address: "10 Vernon Terrace, Cnr of Florence St, Teneriffe QLD 4005",
    hours: "Tue–Thu 5:30–9pm; Fri–Sat 12–9:30pm; Sun 12–9pm; Mon closed",
    lat: -27.4558092,
    lng: 153.0497222,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "happy-boy",
    name: "Happy Boy",
    suburb: "Fortitude Valley",
    description: "A spacious Chinese restaurant under fairy-lit trees, serving generous Cantonese-style wok dishes and BBQ alongside small producer Australian wines.",
    highlight: "More of a pre-drinks dinner spot than a bar — great for groups before heading out in the Valley.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: [], // REVIEW
    attractiveness: 6, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 5, // REVIEW
    social: 6, // REVIEW
    aesthetic: 7, // REVIEW
    venueTypes: ["bar"],
    situations: ["group dinner", "pre-drinks", "family dinner", "date night", "casual catch-up"],
    detail: "Outdoor deck available in fine weather",
    cost: "Reasonable — $15–20 per drink",
    entryFee: null,
    images: ["/images/happy-boy/hero.png", "/images/happy-boy/crowd.png", "/images/happy-boy/signature.jpg"],
    address: "Under fairy-lit trees, East St, Fortitude Valley QLD 4006",
    hours: "Tue–Wed 11:30am–2pm, 5:30–8:30pm; Thu 11:30am–2pm, 5:30–8:45pm; Fri 11:30am–2:30pm, 4:30–9:30pm; Sat 12–2:45pm, 4:30–9:30pm; Sun 12–2:45pm, 4:30–8:30pm; Mon closed",
    lat: -27.4549756,
    lng: 153.0377759,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "same-same-brisbane",
    name: "sAme sAme Brisbane",
    suburb: "Fortitude Valley",
    description: "A Thai restaurant in James Street's Ada Lane with wok-fired dishes and a Southeast Asian-inspired drinks list. The upstairs bar LOS has a separate vibe with DJs and mezcal.",
    highlight: "More restaurant than bar — come for dinner, then head upstairs to LOS for drinks if you want to linger.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["electronic", "house"], // REVIEW
    secondaryGenres: ["ambient", "world"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 5, // REVIEW
    intimacy: 6, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar", "cocktail_bar"],
    situations: ["date night", "dinner with friends", "special occasion", "pre-drinks", "group dinner"],
    detail: "LOS bar upstairs has weekly DJs and rare tequilas/mezcals",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/same-same/hero.jpg", "/images/same-same/crowd.jpg", "/images/same-same/interior.jpg"],
    address: "Shop AM3 Ada Lane, 46 James St, Fortitude Valley QLD 4006",
    hours: "Mon–Thu 5pm–10pm; Fri 11:30am–11pm; Sat 11:30am–11pm; Sun 11:30am–10pm",
    lat: -27.4561864,
    lng: 153.0403779,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "bianca-restaurant",
    name: "Biànca Restaurant",
    suburb: "Fortitude Valley",
    description: "A compact, pink-walled Italian trattoria tucked into Ada Lane. Handmade pasta, wood-fired bread, and Italian wines in a warm, intimate setting.",
    highlight: "More restaurant than bar — come for a proper Italian dinner, not casual drinks.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["jazz", "italian"], // REVIEW
    secondaryGenres: ["ambient", "lounge"], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 4, // REVIEW
    intimacy: 8, // REVIEW
    social: 4, // REVIEW
    aesthetic: 8, // REVIEW
    venueTypes: ["bar"],
    situations: ["date night", "anniversary", "special occasion", "catch-up with close friends", "double date"],
    detail: "Private dining room upstairs seats up to 36 for events.",
    cost: "Pricey — $20–25 per drink",
    entryFee: null,
    images: ["/images/bi-nca/hero.png", "/images/bi-nca/crowd.jpg", "/images/bi-nca/interior.jpg"],
    address: "Shop AM5 Ada Lane, 46 James St, Fortitude Valley QLD 4006",
    hours: "Mon–Thu 5pm–10pm; Fri 12pm–11pm; Sat 11:30am–11pm; Sun 11:30am–10pm",
    lat: -27.4560522,
    lng: 153.0404668,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "gerards-bistro",
    name: "Gerard's Bistro",
    suburb: "Fortitude Valley",
    description: "Upscale Middle Eastern restaurant on James Street with an inventive menu and polished wine list. More restaurant than bar, but the cocktails are serious.",
    highlight: "A proper date-night spot — dress up, book ahead, and expect to spend.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: ["ambient"], // REVIEW
    secondaryGenres: ["jazz", "world"], // REVIEW
    attractiveness: 8, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["bar", "cocktail_bar"],
    situations: ["date night", "anniversary", "impressing someone", "special occasion", "business dinner"],
    detail: "Friday and Saturday lunch service from 12pm",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/gerard-s-bistro/hero.jpg", "/images/gerard-s-bistro/interior.jpg"],
    address: "14/15 James St, Fortitude Valley QLD 4006",
    hours: "Mon–Thu 5:30pm–12am; Fri–Sat 12pm–3pm, 5:30pm–12am; Sun closed",
    lat: -27.4565453,
    lng: 153.0389514,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "agnes-restaurant",
    name: "Agnes Restaurant",
    suburb: "Fortitude Valley",
    description: "A multi-level fire-focused restaurant in a heritage building, with a main dining room, wine bar, and terrace. The open kitchen runs entirely on wood fire.",
    highlight: "More of a destination dinner spot than a bar — head to the wine bar downstairs if you just want drinks.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: [], // REVIEW
    attractiveness: 7, // REVIEW
    ageRange: "30-60", // REVIEW
    energy: 4, // REVIEW
    intimacy: 7, // REVIEW
    social: 4, // REVIEW
    aesthetic: 9, // REVIEW
    venueTypes: ["bar"],
    situations: ["special occasion", "date night", "anniversary", "birthday dinner", "impressing someone"],
    detail: "The wine bar and terrace work for a pre-dinner drink without a reservation.",
    cost: "Expensive — $25+ per drink",
    entryFee: null,
    images: ["/images/agnes/hero.jpg", "/images/agnes/interior.jpg", "/images/agnes/signature.jpg"],
    address: "22 Agnes St, Fortitude Valley QLD 4006",
    hours: "Mon–Thu, Sun: 5:15pm–10pm; Fri–Sat: 11:30am–11pm",
    lat: -27.4579396,
    lng: 153.0308917,
  },
  // --- GENERATED — review fields marked // REVIEW before committing ---
  {
    id: "superfly-pizza",
    name: "Superfly Pizza",
    suburb: "Woolloongabba",
    description: "A tiny takeaway pizza spot hidden down a laneway in Woolloongabba. New York meets Neapolitan style, hand-stretched and made to order.",
    highlight: "Not really a bar — more a quick pickup spot for excellent pizza before or after drinks elsewhere.",
    musicIntent: "incidental", // REVIEW
    primaryGenres: [], // REVIEW
    secondaryGenres: [], // REVIEW
    attractiveness: 5, // REVIEW
    ageRange: "21-30", // REVIEW
    energy: 3, // REVIEW
    intimacy: 2, // REVIEW
    social: 2, // REVIEW
    aesthetic: 5, // REVIEW
    venueTypes: ["bar"],
    situations: ["quick bite", "pre-drinks food", "late night snack", "casual pickup"],
    detail: "Pickup only — no dine-in seating",
    cost: "Cheap — $10–15 per drink",
    entryFee: null,
    images: ["/images/superfly-pizza/hero.jpg", "/images/superfly-pizza/signature.jpg"],
    address: "17B Gibbon St, Woolloongabba QLD 4102",
    hours: "5pm - 9pm Mon-Sat; 4pm - 8pm Sun",
    lat: -27.4876531,
    lng: 153.0347341,
  },
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

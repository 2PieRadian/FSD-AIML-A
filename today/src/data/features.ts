export type Feature = {
  id: string;
  title: string;
  blurb: string;
  detail: string;
  imageTone: string;
  mood?: boolean;
};

export const features: Feature[] = [
  {
    id: "instant",
    title: "Instant Sharing",
    blurb: "Post thoughts, photos, and videos instantly to your world.",
    detail:
      "Share in the moment with lightweight, fast posting. Your media is optimized on-device for speed and clarity, so your followers see what you see — instantly.",
    imageTone: "from-indigo-400 to-sky-400",
  },
  {
    id: "connect",
    title: "Connect & Chat",
    blurb: "Follow friends, join communities, and message in real-time.",
    detail:
      "Create tight circles or explore vibrant communities. Real-time DMs, read states, and media-friendly chats keep conversations flowing.",
    imageTone: "from-fuchsia-400 to-purple-400",
  },
  {
    id: "discover",
    title: "Discover Trends",
    blurb: "Explore viral moments and join global conversations.",
    detail:
      "Your explore tab bubbles with timely, human content — curated to be meaningful, not mindless. Trend with intention.",
    imageTone: "from-emerald-400 to-teal-400",
  },
  {
    id: "mood",
    title: "AI-Powered Mood Feed",
    blurb:
      "On-device AI curates content that matches how you feel — calm, motivated, inspired, or social.",
    detail:
      "We analyze recent posts and comments on-device to infer a gentle mood signal. Your feed shifts its tone accordingly — fewer distractions when calm, more upbeat energy when motivated. Private by default. No data leaves your device.",
    imageTone: "from-pink-400 via-purple-400 to-sky-400",
    mood: true,
  },
];

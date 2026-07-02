import { NewsArticle } from "../models/news";

function createMockImage(title: string, from: string, to: string): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)" rx="40" />
      <circle cx="990" cy="170" r="120" fill="rgba(255,255,255,0.14)" />
      <circle cx="230" cy="600" r="200" fill="rgba(255,255,255,0.08)" />
      <path d="M140 635C320 500 450 470 620 520C740 556 890 560 1060 465" fill="none" stroke="rgba(255,255,255,0.28)" stroke-width="16" stroke-linecap="round" />
      <text x="80" y="165" fill="#ffffff" font-size="78" font-weight="700" font-family="Arial, Helvetica, sans-serif">OmegaField</text>
      <text x="80" y="250" fill="#ffffff" font-size="44" font-weight="600" font-family="Arial, Helvetica, sans-serif">${title}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const mockNewsArticles: NewsArticle[] = [
  {
    id: "news-1",
    title: "Title race tightens as late surge reshapes the weekend table",
    shortDescription:
      "A disciplined closing spell and a dramatic finish pushed the league leaders back into contention.",
    content:
      "The weekend produced another swing in the title race as the top three separated by only a handful of points after a late-winning run changed the standings again.",
    image: createMockImage("Title race tightens", "#0f172a", "#b91c1c"),
    author: "Aarav Mehta",
    category: "Football",
    publishedDate: "2026-07-02T06:30:00.000Z",
    featured: true,
  },
  {
    id: "news-2",
    title: "Young sprinter sets new meet record in the opening heat",
    shortDescription:
      "The teenager controlled the race from the first bend and finished well clear of the field.",
    content:
      "A composed performance in the opening heat delivered a new meet record and instantly moved the sprinter into the spotlight for the final.",
    image: createMockImage("Meet record", "#0f172a", "#1d4ed8"),
    author: "Priya Nair",
    category: "Athletics",
    publishedDate: "2026-07-02T05:10:00.000Z",
    featured: false,
  },
  {
    id: "news-3",
    title: "School finals deliver a surprise champion after extra time thriller",
    shortDescription:
      "A packed crowd watched the underdogs recover twice before taking the trophy in extra time.",
    content:
      "The school finals lived up to the billing with a tense, physical contest that ended only after a decisive move in extra time.",
    image: createMockImage("School finals", "#111827", "#ca8a04"),
    author: "Sanjay Kapoor",
    category: "School Sports",
    publishedDate: "2026-07-01T18:40:00.000Z",
    featured: false,
  },
  {
    id: "news-4",
    title: "Touring side sharpens attack with an aggressive powerplay plan",
    shortDescription:
      "The visitors used new opening patterns to build pressure early and keep the chase within reach.",
    content:
      "A data-driven batting approach helped the touring team control the pace of the match and create a chase-friendly target.",
    image: createMockImage("Powerplay plan", "#0f172a", "#16a34a"),
    author: "Maya Roy",
    category: "Cricket",
    publishedDate: "2026-07-01T15:20:00.000Z",
    featured: true,
  },
  {
    id: "news-5",
    title: "Opinion: Why grassroots scheduling deserves the same attention as broadcast deals",
    shortDescription:
      "The path to stronger national teams starts with fixing the calendar at the lowest levels.",
    content:
      "Grassroots administrators continue to work around broken schedules, and fixing that bottleneck may be the most effective development investment.",
    image: createMockImage("Grassroots first", "#312e81", "#7c2d12"),
    author: "Karan Bedi",
    category: "Opinion",
    publishedDate: "2026-07-01T13:05:00.000Z",
    featured: false,
  },
  {
    id: "news-6",
    title: "International camp welcomes two debutants ahead of the series opener",
    shortDescription:
      "Fresh faces were added after a training block that focused on tempo and defensive shape.",
    content:
      "The national team confirmed a balanced squad with two debutants included after strong domestic form during the last month.",
    image: createMockImage("Series opener", "#1e3a8a", "#be123c"),
    author: "Nadia Farooq",
    category: "International",
    publishedDate: "2026-07-01T09:45:00.000Z",
    featured: false,
  },
  {
    id: "news-7",
    title: "Veteran coach explains the defensive shift that transformed the second half",
    shortDescription:
      "A compact mid-block and faster transitions changed the rhythm after the break.",
    content:
      "The tactical switch tightened spaces between the lines and turned a fragile lead into a comfortable finish.",
    image: createMockImage("Defensive shift", "#0f172a", "#4f46e5"),
    author: "Dev Patel",
    category: "Football",
    publishedDate: "2026-06-30T21:15:00.000Z",
    featured: false,
  },
  {
    id: "news-8",
    title: "Athletics federation approves a new sprint circuit for regional talent",
    shortDescription:
      "The circuit is designed to expose younger athletes to faster competition across the season.",
    content:
      "Officials say the regional sprint circuit will create more opportunities for emerging athletes and support long-term pipeline growth.",
    image: createMockImage("Sprint circuit", "#14532d", "#0f172a"),
    author: "Rhea Thomas",
    category: "Athletics",
    publishedDate: "2026-06-30T17:30:00.000Z",
    featured: false,
  },
  {
    id: "news-9",
    title: "Rival schools set up a marquee midweek rematch after dramatic draw",
    shortDescription:
      "Both sides finished with momentum, setting the stage for a high-interest return fixture.",
    content:
      "A dramatic draw kept both schools alive in the standings and pushed supporters toward a much-anticipated rematch.",
    image: createMockImage("Midweek rematch", "#7c2d12", "#111827"),
    author: "Ishaan Verma",
    category: "School Sports",
    publishedDate: "2026-06-30T12:05:00.000Z",
    featured: false,
  },
  {
    id: "news-10",
    title: "Analysis: Why the most read column keeps drawing boardroom attention",
    shortDescription:
      "Audience habits are shaping editorial decisions more than ever across the sports desk.",
    content:
      "Analytics from the newsroom highlight how long-form explainers continue to outperform quick takes when major fixtures wrap up.",
    image: createMockImage("Most read analysis", "#4c1d95", "#0f172a"),
    author: "Leena Joseph",
    category: "Opinion",
    publishedDate: "2026-06-29T19:00:00.000Z",
    featured: true,
  },
];
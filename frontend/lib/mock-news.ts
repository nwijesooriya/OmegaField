import type { NewsArticle } from "@/types/news";

function createMockImage(title: string, from: string, to: string): string {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" role="img" aria-label="${title}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#bg)" />
      <circle cx="940" cy="130" r="85" fill="#ffffff" opacity="0.09" />
      <g stroke="#ffffff" fill="none" opacity="0.24">
        <path d="M-60 450 Q600 80 1260 450" stroke-width="18" />
        <path d="M-60 485 Q600 140 1260 485" stroke-width="12" />
        <path d="M-60 515 Q600 200 1260 515" stroke-width="8" />
        <path d="M110 320 L90 60 M1090 320 L1110 60" stroke-width="12" />
      </g>
      <g fill="#ffffff" opacity="0.4">
        <rect x="45" y="60" width="100" height="24" rx="4" />
        <rect x="1060" y="60" width="100" height="24" rx="4" />
      </g>
      <ellipse cx="600" cy="660" rx="580" ry="235" fill="#14532d" opacity="0.7" />
      <ellipse cx="600" cy="660" rx="490" ry="170" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.4" />
      <g transform="translate(600 565) skewX(-20) scale(1 0.7)" stroke="#ffffff" fill="none" stroke-width="4" opacity="0.45">
        <rect x="-330" y="-65" width="660" height="255" />
        <path d="M0 -65 V190 M-330 -15 H-240 V140 H-330 M330 -15 H240 V140 H330" />
        <circle cy="62" r="50" />
      </g>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export const fallbackNewsArticles: NewsArticle[] = [
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

// Additional sample coverage for the five Phase 1 sports desks.
const phaseOneStories = [
  { id: "news-11", category: "Cricket", title: "Sri Lanka prepares for a testing tour with a renewed focus on spin", excerpt: "The training squad is building longer spells and sharper close catching into its preparation.", content: "The latest training block has placed spin bowling and close catching at the centre of tour preparation. Coaches are using extended practice sessions to help the squad adapt to changing conditions.\n\nSelectors are expected to assess both experience and recent domestic form before settling on the travelling group. The emphasis remains on a balanced attack and partnerships that can withstand pressure.", imageLabel: "Cricket preparations" },
  { id: "news-12", category: "Rugby", title: "Club rugby enters the final stretch with everything still to play for", excerpt: "A closely contested table puts discipline and squad depth at the centre of the run-in.", content: "The closing weeks of the club season promise a series of competitive fixtures as several sides remain in contention. Coaches have highlighted discipline at the breakdown and accurate kicking as key priorities.\n\nSquad rotation is also coming into focus. With recovery time limited between matches, the teams that manage their resources well could gain an advantage.", imageLabel: "Club rugby" },
  { id: "news-13", category: "Rugby", title: "School rugby captains look ahead to a season of renewed rivalries", excerpt: "Young leaders are setting the tone with an emphasis on teamwork and steady preparation.", content: "School rugby programmes are returning to structured training as captains prepare to lead a new generation of players. Early sessions have concentrated on passing accuracy, communication and defensive organisation.\n\nCoaches say player development will remain a priority alongside results. Supporters can expect familiar rivalries to provide a lively backdrop to the season.", imageLabel: "School rugby" },
  { id: "news-14", category: "Rugby", title: "A stronger set piece gives the national rugby squad a platform to build on", excerpt: "Technical work in the scrum and lineout is shaping the next phase of preparation.", content: "The national rugby training group has devoted extra time to the set piece. The aim is to provide a reliable platform from which the backs can create space.\n\nThe coaching staff is combining technical drills with match scenarios, giving newer players the chance to learn alongside experienced members of the squad.", imageLabel: "Rugby training" },
  { id: "news-15", category: "Cricket", title: "Domestic cricket gives emerging batters a chance to make their case", excerpt: "Consistent performances across longer innings are drawing attention from selectors.", content: "Emerging batters are making the most of the domestic calendar, with patient innings and sound decision making drawing attention. Coaches have encouraged players to focus on repeatable skills rather than individual highlights.\n\nThe competition offers valuable exposure to different bowling attacks. For younger players, building partnerships remains an important part of the learning process.", imageLabel: "Domestic cricket" },
  { id: "news-16", category: "Football", title: "Youth football academies put player development at the heart of the new season", excerpt: "Smaller training groups and more time on the ball are helping young players build confidence.", content: "Youth academies are reviewing their training programmes to give players more opportunities to make decisions with the ball. Sessions are blending technical work with small-sided games.\n\nCoaches are also encouraging families to support gradual development. A consistent environment can help young players enjoy the game and stay involved for longer.", imageLabel: "Youth football" },
  { id: "news-17", category: "Athletics", title: "Distance runners embrace a measured approach ahead of the road season", excerpt: "Training groups are balancing endurance work with recovery and strength sessions.", content: "Distance runners are building toward the road season with a focus on sustainable training. Coaches are combining steady mileage with strength work and carefully planned rest.\n\nCommunity events will give newer runners opportunities to compete alongside established athletes. Organisers hope the calendar will encourage participation across a broad range of abilities.", imageLabel: "Distance running" },
  { id: "news-18", category: "Other Sports", title: "Young swimmers find their rhythm at the regional development meet", excerpt: "A new generation gains experience in the pool while coaches track progress beyond the podium.", content: "A regional swimming meet is giving young athletes the chance to put training into practice. Coaches are looking at technique, consistency and confidence alongside finishing positions.\n\nThe event forms part of a wider development programme designed to provide regular competition. Families and local clubs are helping make participation more accessible.", imageLabel: "Swimming" },
  { id: "news-19", category: "Cricket", title: "Women’s cricket builds momentum through a wider domestic programme", excerpt: "More fixtures offer developing players valuable time in competitive conditions.", content: "An expanded domestic programme is creating more opportunities for women cricketers to gain match experience. Clubs are concentrating on consistent training and stronger pathways for new players.\n\nCoaches say the additional fixtures can support both skill development and confidence, with partnerships between schools and clubs playing an important role.", imageLabel: "Women’s cricket" },
  { id: "news-20", category: "Rugby", title: "Community rugby puts the next generation at the centre of its plans", excerpt: "Introductory sessions are opening the game to young players across more local clubs.", content: "Community clubs are welcoming new players through introductory rugby sessions focused on safe technique and teamwork. Volunteer coaches are helping families understand the pathways available.\n\nThe programme places enjoyment and participation first. Organisers hope a positive first experience will encourage young players to stay involved in sport.", imageLabel: "Community rugby" },
];

fallbackNewsArticles.push(...phaseOneStories.map((story, index): NewsArticle => ({
  id: story.id,
  title: story.title,
  shortDescription: story.excerpt,
  content: story.content,
  image: createMockImage(story.imageLabel, "#0f172a", ["#b91c1c", "#92400e", "#14532d"][index % 3]),
  category: story.category,
  author: "OmegaField Sports Desk",
  publishedDate: `2026-10-${String(10 - Math.floor(index / 3)).padStart(2, "0")}T${String(15 - index).padStart(2, "0")}:00:00.000Z`,
  featured: index < 4,
})));

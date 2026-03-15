export interface NewsArticle {
  slug: string;
  title: string;
  date: string;
  image: string;
  content: NewsBlock[];
}

export type NewsBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "spacer" };

export const newsArticles: NewsArticle[] = [
  {
    slug: "loomi-partners-kt-studiogenie-k-drama-southeast-asia",
    title:
      "Loomi Entertainment Group Partners with KT Studiogenie to Bring Premium K-Drama to Southeast Asia",
    date: "13 March 2026",
    image: "/images/news-1.jpg",
    content: [
      {
        type: "paragraph",
        text: "Loomi Entertainment Group (LEG) has announced a strategic partnership with KT Studiogenie, one of South Korea's leading content production companies, to bring premium K-Drama content to Southeast Asian audiences.",
      },
      {
        type: "paragraph",
        text: "The collaboration will leverage LEG's AI-powered distribution platform and deep understanding of Southeast Asian audiences to localize and distribute KT Studiogenie's extensive library of Korean drama content across the region.",
      },
      { type: "spacer" },
      {
        type: "heading",
        text: "Bridging Korean Content with Southeast Asian Audiences",
      },
      {
        type: "paragraph",
        text: "Korean drama has seen explosive growth across Southeast Asia, with audiences in markets like Indonesia, Thailand, the Philippines, and Malaysia showing strong appetite for K-content. This partnership positions LEG as a key bridge between Korean content creators and the region's rapidly growing digital entertainment market.",
      },
      {
        type: "paragraph",
        text: "Through LEG's proprietary AI technology, content will be intelligently localized — going beyond simple translation to ensure cultural nuances, viewing preferences, and platform-specific formats are optimized for each market.",
      },
      { type: "spacer" },
      {
        type: "heading",
        text: "A Win for Creators and Audiences",
      },
      {
        type: "paragraph",
        text: "For KT Studiogenie, the partnership opens up access to one of the world's fastest-growing entertainment markets without the complexity of navigating each country individually. For Southeast Asian audiences, it means access to high-quality Korean storytelling, delivered in formats and languages that feel native.",
      },
      {
        type: "paragraph",
        text: "This partnership represents another step in LEG's mission to shape tomorrow's entertainment with AI — connecting great stories with the audiences who will love them most.",
      },
    ],
  },
  {
    slug: "loomi-partners-col-group-original-microdramas",
    title:
      "Loomi Partners with COL Group, Greenlights Original Microdramas as Southeast Asia Hits 23% of Global Vertical Drama Downloads",
    date: "9 March 2026",
    image: "/images/news-2.png",
    content: [
      {
        type: "paragraph",
        text: "Loomi Entertainment Group has partnered with COL Group to greenlight a slate of original microdramas targeting Southeast Asian audiences, as the region now accounts for 23% of global vertical drama downloads.",
      },
      {
        type: "paragraph",
        text: "The partnership will see both companies co-develop and produce original short-form drama series specifically designed for mobile-first audiences across the region.",
      },
      { type: "spacer" },
      {
        type: "heading",
        text: "Southeast Asia's Microdrama Moment",
      },
      {
        type: "paragraph",
        text: "The microdrama format has seen extraordinary adoption across Southeast Asia, with the region emerging as one of the fastest-growing markets globally. Audiences are drawn to bite-sized, serialized stories that fit seamlessly into their mobile-centric lifestyles.",
      },
      {
        type: "paragraph",
        text: "LEG and COL Group will leverage AI-powered production tools and data-driven insights to create content that resonates deeply with local audiences while maintaining production quality that meets global standards.",
      },
    ],
  },
  {
    slug: "loomi-alibaba-cloud-cxo-nexus-kuala-lumpur",
    title:
      "Loomi Entertainment Group Takes the Stage at Alibaba Cloud CXO Nexus World Tour in Kuala Lumpur",
    date: "24 February 2026",
    image: "/images/news-3-alt.png",
    content: [
      {
        type: "paragraph",
        text: "Loomi Entertainment Group was invited to present at the Alibaba Cloud CXO Nexus World Tour in Kuala Lumpur, showcasing how AI is transforming entertainment production and distribution across Southeast Asia.",
      },
      { type: "spacer" },
      {
        type: "heading",
        text: "AI-Powered Entertainment on the Global Stage",
      },
      {
        type: "paragraph",
        text: "The presentation highlighted LEG's innovative approach to leveraging AI across the entire entertainment value chain — from content creation with the Imaginary engine to intelligent distribution and data-driven monetization.",
      },
      {
        type: "paragraph",
        text: "Industry leaders and technology executives from across the Asia-Pacific region gathered to explore how cloud computing and AI are reshaping traditional industries, with entertainment emerging as one of the most dynamic sectors for AI adoption.",
      },
      {
        type: "paragraph",
        text: "LEG's participation at the event underscores its growing reputation as a pioneer at the intersection of AI and entertainment in the Southeast Asian market.",
      },
    ],
  },
  {
    slug: "loomi-launches-mobile-app-short-dramas",
    title:
      "Loomi Entertainment Group Launches Mobile App Bringing Short Dramas to Southeast Asian Audiences",
    date: "18 February 2026",
    image: "/images/news-2.png",
    content: [
      {
        type: "paragraph",
        text: "Loomi Entertainment Group has officially launched its mobile app, bringing a curated library of AI-enhanced short dramas directly to Southeast Asian audiences on iOS and Android.",
      },
      { type: "spacer" },
      {
        type: "heading",
        text: "Entertainment in Your Pocket",
      },
      {
        type: "paragraph",
        text: "The LOOMI app uses AI and data-driven insights to curate and recommend content tailored to each user's preferences, language, and viewing habits. The platform supports multiple Southeast Asian languages and features both fully AI-generated and hybrid AI-live action productions.",
      },
      {
        type: "paragraph",
        text: "With the app, LEG completes a key piece of its ecosystem — giving audiences direct access to a growing library of original microdrama content, while providing creators with a dedicated platform to reach engaged viewers across the region.",
      },
    ],
  },
  {
    slug: "shaping-tomorrows-entertainment-with-ai",
    title: "Shaping Tomorrow's Entertainment with AI",
    date: "10 February 2026",
    image: "/images/news-1.jpg",
    content: [
      {
        type: "paragraph",
        text: "The way the world consumes entertainment has fundamentally changed.",
      },
      {
        type: "paragraph",
        text: "Scroll through any platform today and you'll see it: audiences consuming content in bursts, demanding stories that hook them in seconds and hold them for minutes — not hours. The primetime slot is fading. What's rising in its place is something faster, more intimate, and radically more engaging.",
      },
      {
        type: "paragraph",
        text: "This is the world Loomi Entertainment Group (LEG) was built for.",
      },
      { type: "spacer" },
      { type: "heading", text: "A New Era of Storytelling" },
      {
        type: "paragraph",
        text: "Microdrama is not a fringe trend — it's the new mainstream. Global audiences are spending billions of hours each year engaged with serialized short-form stories, designed to be consumed anytime, anywhere, on any screen. The market is expanding at a pace traditional entertainment has rarely seen. And yet the infrastructure powering how these stories are made and monetized has remained largely conventional.",
      },
      {
        type: "paragraph",
        text: "LEG is here to change that.",
      },
      { type: "spacer" },
      { type: "heading", text: "AI at Every Layer" },
      {
        type: "paragraph",
        text: "What sets LEG apart is not simply that we create content. It's that we've embedded AI into every stage of the entertainment value chain.",
      },
      {
        type: "paragraph",
        text: "At the production stage, AI unlocks a level of creativity that was once gated by budget. Developing a script, structuring a narrative, iterating on concepts, refining dialogue — what once demanded large teams and long timelines can now move at the speed of imagination. For independent creators and lean production teams, this is a game-changer. AI lowers the financial barrier to entry without lowering the creative ceiling.",
      },
      {
        type: "paragraph",
        text: "We're not replacing human storytellers. We're liberating them. Writers and directors are no longer constrained by what they can afford to produce — they're empowered to tell bolder, richer stories with less. More creative ambition. Less overheads.",
      },
      {
        type: "paragraph",
        text: "At the distribution stage, AI becomes a competitive advantage. Southeast Asia is one of the most dynamic and diverse media markets in the world — spanning hundreds of languages, deeply distinct cultures, and audiences with very different tastes and viewing habits. Reaching them meaningfully requires more than translation. It requires genuine local intelligence.",
      },
      {
        type: "paragraph",
        text: "At the monetization stage, AI enables models that legacy studios haven't imagined. Traditional entertainment was built on rigid revenue structures — box office windows, broadcast deals, and one-size-fits-all subscription tiers. Digital audiences don't behave that way, and the business models serving them shouldn't either. Loomi leverages AI to build smarter, more flexible monetization strategies that move with audience behavior rather than against it.",
      },
      { type: "spacer" },
      { type: "heading", text: "Building an Ecosystem" },
      {
        type: "paragraph",
        text: "Loomi Entertainment Group is building an ecosystem — a platform where IP is created, tested, distributed, and scaled with unprecedented speed. We work with creators, production partners, and distribution networks to bring microdrama storytelling to audiences across multiple languages, cultures, and markets.",
      },
      {
        type: "paragraph",
        text: "We named our company Loomi because entertainment is something woven into the fabric of human experience. Stories connect us. AI doesn't diminish that — in the right hands, it deepens it.",
      },
      {
        type: "paragraph",
        text: "At Loomi Entertainment Group, we are those hands.",
      },
      {
        type: "paragraph",
        text: "The future of entertainment is smarter, faster, and more human than ever. This is just the beginning.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug);
}

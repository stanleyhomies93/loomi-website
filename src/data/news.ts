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
    image: "/images/news-cover-5.png",
    content: [
      {
        type: "paragraph",
        text: "Loomi Entertainment Group (LEG) is proud to announce a landmark partnership with KT Studiogenie, one of the largest K-Drama distributors in the world, to bring their premium K-Drama titles to Southeast Asian audiences through the Loomi mobile app. The collaboration marks a major step forward in our mission to deliver the content Southeast Asia loves most — intelligently, accessibly, and on demand.",
      },
      { type: "spacer" },
      { type: "heading", text: "What the Data Told Us" },
      {
        type: "paragraph",
        text: "Great partnerships don't begin with luck. They begin with insight.",
      },
      {
        type: "paragraph",
        text: "Our AI-driven data intelligence has consistently pointed to one undeniable truth about the Southeast Asian entertainment landscape: the region's appetite for Korean drama is enormous, deeply rooted, and still growing. From heartfelt romance and family sagas to high-stakes thrillers and historical epics, K-Drama has captured the hearts of millions of viewers across Malaysia, Indonesia, the Philippines, Thailand, Vietnam, and beyond.",
      },
      {
        type: "paragraph",
        text: "This is not a passing trend. Korean content has built genuine, lasting cultural resonance across the region — influencing fashion, language, travel, and popular culture in ways that few entertainment phenomena ever do. For us, the data didn't just confirm what many already sensed. It gave us the clarity and conviction to act.",
      },
      { type: "spacer" },
      { type: "heading", text: "KT Studiogenie" },
      {
        type: "paragraph",
        text: "KT Studiogenie brings to this partnership a catalogue of premium Korean content backed by the production values, storytelling depth, and creative ambition that have made K-Drama a global force. As an institution with strong roots in the Korean entertainment ecosystem, KT Studiogenie represents exactly the kind of partner we sought — one whose creative excellence matches the high standards Southeast Asian audiences have come to expect from Korean content.",
      },
      {
        type: "paragraph",
        text: "Together, LEG and KT Studiogenie are building a bridge between two of the world's most dynamic entertainment markets.",
      },
      { type: "spacer" },
      { type: "heading", text: "A Platform That Understands Its Audience" },
      {
        type: "paragraph",
        text: "What makes this partnership more than a content licensing deal is the foundation it is built on. Our commitment to the Southeast Asian market goes beyond geography. It is cultural, behavioral, and data-informed. The platform is designed to understand not just who Southeast Asian audiences are, but how they watch, what keeps them engaged, and what they will come back for.",
      },
      {
        type: "paragraph",
        text: "That depth of understanding is what makes the Loomi mobile app the right home for KT Studiogenie's titles in this region. It ensures that premium Korean content doesn't simply land on our platform — it reaches the audiences who have been waiting for it, in the most engaging way possible.",
      },
      { type: "spacer" },
      { type: "heading", text: "The Beginning of Something Bigger" },
      {
        type: "paragraph",
        text: "This partnership is a reflection of LEG's broader strategy: identify where audience demand is strongest on the Loomi mobile app, move with speed and precision, and build relationships with world-class content partners to meet that demand head-on.",
      },
      {
        type: "paragraph",
        text: "And at LEG, we're just getting started.",
      },
    ],
  },
  {
    slug: "loomi-partners-col-group-original-microdramas",
    title:
      "Loomi Partners with COL Group and Greenlights Original Microdrama Slate as Southeast Asia Claims 23% of Global Vertical Drama Downloads",
    date: "9 March 2026",
    image: "/images/news-cover-4.png",
    content: [
      {
        type: "paragraph",
        text: "Loomi Entertainment Group (LEG) has tied up with COL Group International to acquire and curate content for the coming-soon Loomi vertical drama streaming app.",
      },
      {
        type: "paragraph",
        text: "The deal makes COL Group the official content partner of the Loomi app, which is billed as the first Southeast Asia-wide vertical-only microdrama platform.",
      },
      {
        type: "paragraph",
        text: "Loomi has already commissioned eight Southeast Asia originals slated to release next year.",
      },
      {
        type: "paragraph",
        text: "The app launches towards the end of this month with a hybrid IAA (advertising-supported) and IAP (in-app purchase) model tailored to mobile viewing behaviour.",
      },
      {
        type: "paragraph",
        text: "The platform will have access to more than 1,000 microdrama titles from COL's global library, spanning romance, fantasy, thriller and revenge genres.",
      },
      {
        type: "paragraph",
        text: "Southeast Asia is already one of the world's most important microdrama markets, accounting for 23% of global downloads, led by Indonesia (14%), the Philippines (5%) and Thailand (4%), according to COL data.",
      },
      {
        type: "paragraph",
        text: "Despite its size, the region has historically lacked a platform built exclusively for vertical storytelling.",
      },
      {
        type: "paragraph",
        text: "LEG said the Loomi App was purpose-built for mobile-first viewing rather than adapted from traditional horizontal streaming formats.",
      },
      {
        type: "paragraph",
        text: "\u201CSoutheast Asia deserves a platform that truly understands its audiences,\u201D said Sharon Tse, CEO of Loomi Entertainment Group.",
      },
      {
        type: "paragraph",
        text: "Tse also said Loomi \u201Cis not just launching content \u2013 it\u2019s building a creative ecosystem where technology, culture, and community come together.\u201D",
      },
      {
        type: "paragraph",
        text: "COL Group International\u2019s GM, Timothy Oh, said the partnership \u201Creflects a long-term commitment to building the category, not just distributing content\u201D.",
      },
      {
        type: "paragraph",
        text: "\u201CMicrodrama is no longer experimental. It\u2019s becoming a core entertainment format,\u201D he said.",
      },
    ],
  },
  {
    slug: "loomi-alibaba-cloud-cxo-nexus-kuala-lumpur",
    title:
      "Loomi Entertainment Group Takes the Stage at Alibaba Cloud CXO Nexus World Tour in Kuala Lumpur",
    date: "24 February 2026",
    image: "/images/news-cover-3.jpg",
    content: [
      {
        type: "paragraph",
        text: "Loomi Entertainment Group (LEG) made its mark on the regional technology and entertainment stage recently, joining industry leaders at the Alibaba Cloud CXO Nexus World Tour in Kuala Lumpur. The event brought together some of the most influential voices in technology and business across Southeast Asia, and LEG\u2019s participation signaled a clear statement of intent: AI-powered entertainment is no longer a vision of the future \u2014 it is happening now.",
      },
      { type: "spacer" },
      {
        type: "heading",
        text: "Beyond Automation: The Next Evolution of AI-Generated Content",
      },
      {
        type: "paragraph",
        text: "Taking the stage at the event, LEG\u2019s Head of Product, Stan Tan, delivered a compelling look at where AI-generated content is heading \u2014 and more importantly, what it is truly capable of when applied with creative purpose.",
      },
      {
        type: "paragraph",
        text: "The conversation went well beyond the familiar narrative of AI as a tool for efficiency and cost-cutting. Stan\u2019s presentation reframed AI as a creative force in its own right \u2014 one that doesn\u2019t simply automate existing processes but actively participates in the art of storytelling. From shaping narrative arcs and developing fictional worlds to transforming how audiences engage with the stories they love, the next evolution of AI-generated content is deeply, unmistakably human in its ambitions.",
      },
      {
        type: "paragraph",
        text: "For an audience of senior executives and industry decision-makers, the message landed with weight. Entertainment is at an inflection point, and the companies that understand how to harness AI at the creative layer \u2014 not just the operational one \u2014 will define what the industry looks like in the years ahead.",
      },
      { type: "spacer" },
      {
        type: "heading",
        text: "Introducing Imaginery: Where a Single Prompt Becomes a Universe",
      },
      {
        type: "paragraph",
        text: "The highlight of LEG\u2019s appearance was the showcase of Imaginery, the company\u2019s proprietary cinematic AI video generation engine. Imaginery represents a significant leap forward in what AI-powered production tools can deliver \u2014 and a glimpse into how dramatically the economics and possibilities of drama production are about to change.",
      },
      {
        type: "paragraph",
        text: "At its core, Imaginery does something remarkable: it transforms a single story prompt into a fully realized cinematic universe. Characters, settings, tone, visual language, and narrative depth \u2014 elements that traditionally demanded large teams, significant budgets, and extended timelines \u2014 can now emerge from a single creative spark.",
      },
      {
        type: "paragraph",
        text: "For too long, the barrier to professional-grade storytelling has been financial. The biggest, most immersive stories were reserved for those with the biggest resources \u2014 leaving independent creators, emerging studios, and homegrown talent on the sidelines with visions they couldn\u2019t afford to realize. Imaginery changes that equation entirely. Whether you are a major production house or a first-time creator with nothing but a story idea, the tools to bring that idea to life at a cinematic level are now within reach. Budget is no longer the deciding factor between a great idea and a great production.",
      },
      {
        type: "paragraph",
        text: "The playing field is leveling. Imaginery gives every storyteller \u2014 big or small, established or emerging \u2014 the creative freedom to build rich, layered universes without the constraints that once made such ambition impossible. It is not designed to replace creative vision. It is designed to unleash it.",
      },
      { type: "spacer" },
      { type: "heading", text: "AI That Elevates, Not Replaces" },
      {
        type: "paragraph",
        text: "LEG\u2019s presence at the Alibaba Cloud CXO Nexus World Tour reinforced a belief that sits at the heart of everything the company builds: AI elevates entertainment. It unlocks creativity that budget and time would otherwise suppress. It enables immersive experiences that were previously out of reach. And it redefines the boundaries of how stories are imagined, produced, and brought to life.",
      },
      {
        type: "paragraph",
        text: "AI isn\u2019t coming. It\u2019s already here \u2014 and at LEG, it\u2019s already reshaping how the world entertains, engages, and creates.",
      },
    ],
  },
  {
    slug: "loomi-launches-mobile-app-short-dramas",
    title:
      "Loomi Entertainment Group Launches Mobile App Bringing Short Dramas to Southeast Asian Audiences",
    date: "18 February 2026",
    image: "/images/news-cover-2.png",
    content: [
      {
        type: "paragraph",
        text: "Loomi Entertainment Group has officially launched its mobile application, marking a significant milestone for the company and a bold new chapter in Southeast Asia\u2019s fast-growing short-form entertainment landscape. The app is now available for download, bringing an AI-powered viewing experience to audiences across the region and beyond.",
      },
      {
        type: "paragraph",
        text: "The launch comes at a pivotal moment. Short-form drama \u2014 episodic storytelling delivered in compact, high-impact episodes \u2014 has exploded in popularity across the world and especially in Southeast Asia, with millions of viewers turning to their smartphones for entertainment that fits the rhythm of their daily lives. Loomi is entering this space not just as another content platform, but as a technology-first experience built from the ground up around how today\u2019s audiences actually watch.",
      },
      { type: "spacer" },
      { type: "heading", text: "Mobile-First, by Design" },
      {
        type: "paragraph",
        text: "From the outset, Loomi was conceived as a mobile-native product. Every element of the app \u2014 from its interface and navigation to how content is served and experienced \u2014 has been engineered for the small screen. Episodes are short, sharp, and immediately engaging, designed to capture attention quickly and sustain it through compelling, serialized narratives.",
      },
      {
        type: "paragraph",
        text: "Entertainment has moved to the phone, and Loomi didn\u2019t adapt to that reality \u2014 it was built for it.",
      },
      {
        type: "paragraph",
        text: "The app offers viewers access to a growing library of short dramas spanning a range of genres, languages, and cultural contexts. Whether commuting in Kuala Lumpur, unwinding in Manila, or catching a break in Jakarta, Loomi users can drop into a story and back out again with ease \u2014 no commitment, no friction.",
      },
      {
        type: "paragraph",
        text: "Technology doesn\u2019t simply sit on the surface of the Loomi mobile app \u2014 it powers the experience from end to end, touching every interaction a viewer has with the platform.",
      },
      {
        type: "paragraph",
        text: "Take language. Southeast Asia is one of the most linguistically diverse regions on the planet. Loomi\u2019s AI-powered translation engine ensures that content moves fluidly across language barriers \u2014 delivering accurate, culturally nuanced subtitles and dubbing that preserve the emotional texture of the original story. A K-Drama produced in Seoul lands just as powerfully for a viewer in Jakarta or Manila as it does for one in Kuala Lumpur. That kind of seamless cross-cultural delivery is not a minor feature. It is foundational to what Loomi is.",
      },
      {
        type: "paragraph",
        text: "Then there is curation. What a viewer sees the moment they open the Loomi app is not accidental. Every title surfaced on the home page is informed by intelligent data \u2014 regional viewing patterns, genre preferences, engagement behavior, and emerging trends across the Southeast Asian market. The platform is constantly learning, constantly refining, and constantly working to ensure that the right content is the first thing audiences see. In an era where content libraries are vast and attention is scarce, the ability to cut through the noise with precision is one of Loomi\u2019s most powerful advantages.",
      },
      {
        type: "paragraph",
        text: "For a region as diverse as Southeast Asia \u2014 with its many languages, cultures, and storytelling traditions \u2014 this kind of nuance is not a luxury. It\u2019s a necessity.",
      },
      {
        type: "paragraph",
        text: "Loomi was made for Southeast Asia \u2014 not adapted for it.",
      },
    ],
  },
  {
    slug: "shaping-tomorrows-entertainment-with-ai",
    title: "Shaping Tomorrow\u2019s Entertainment with AI",
    date: "10 February 2026",
    image: "/images/news-cover-1.png",
    content: [
      {
        type: "paragraph",
        text: "The way the world consumes entertainment has fundamentally changed.",
      },
      {
        type: "paragraph",
        text: "Scroll through any platform today and you\u2019ll see it: audiences consuming content in bursts, demanding stories that hook them in seconds and hold them for minutes \u2014 not hours. The primetime slot is fading. What\u2019s rising in its place is something faster, more intimate, and radically more engaging.",
      },
      {
        type: "paragraph",
        text: "This is the world Loomi Entertainment Group (LEG) was built for.",
      },
      { type: "spacer" },
      { type: "heading", text: "A New Era of Storytelling" },
      {
        type: "paragraph",
        text: "Microdrama is not a fringe trend \u2014 it\u2019s the new mainstream. Global audiences are spending billions of hours each year engaged with serialized short-form stories, designed to be consumed anytime, anywhere, on any screen. The market is expanding at a pace traditional entertainment has rarely seen. And yet the infrastructure powering how these stories are made and monetized has remained largely conventional.",
      },
      {
        type: "paragraph",
        text: "LEG is here to change that.",
      },
      { type: "spacer" },
      { type: "heading", text: "AI at Every Layer" },
      {
        type: "paragraph",
        text: "What sets LEG apart is not simply that we create content. It\u2019s that we\u2019ve embedded AI into every stage of the entertainment value chain.",
      },
      {
        type: "paragraph",
        text: "At the production stage, AI unlocks a level of creativity that was once gated by budget.",
      },
      {
        type: "paragraph",
        text: "Developing a script, structuring a narrative, iterating on concepts, refining dialogue \u2014 what once demanded large teams and long timelines can now move at the speed of imagination. For independent creators and lean production teams, this is a game-changer. AI lowers the financial barrier to entry without lowering the creative ceiling.",
      },
      {
        type: "paragraph",
        text: "We\u2019re not replacing human storytellers. We\u2019re liberating them. Writers and directors are no longer constrained by what they can afford to produce \u2014 they\u2019re empowered to tell bolder, richer stories with less. More creative ambition. Less overheads.",
      },
      {
        type: "paragraph",
        text: "At the distribution stage, AI becomes a competitive advantage.",
      },
      {
        type: "paragraph",
        text: "Southeast Asia is one of the most dynamic and diverse media markets in the world \u2014 spanning hundreds of languages, deeply distinct cultures, and audiences with very different tastes and viewing habits. Reaching them meaningfully requires more than translation. It requires genuine local intelligence. Our data infrastructure is built with this complexity in mind, giving every piece of content the best possible chance to connect with audiences across the region \u2014 from Metro Manila to Jakarta, Kuala Lumpur to Ho Chi Minh City. In a market this rich and this fast-moving, smart distribution isn\u2019t optional. It\u2019s everything.",
      },
      {
        type: "paragraph",
        text: "At the monetization stage, AI enables models that legacy studios haven\u2019t imagined.",
      },
      {
        type: "paragraph",
        text: "Traditional entertainment was built on rigid revenue structures \u2014 box office windows, broadcast deals, and one-size-fits-all subscription tiers. Digital audiences don\u2019t behave that way, and the business models serving them shouldn\u2019t either. Loomi leverages AI to build smarter, more flexible monetization strategies that move with audience behavior rather than against it. The result is a more sustainable, more scalable approach to turning great content into lasting commercial value.",
      },
      { type: "spacer" },
      { type: "heading", text: "Building an Ecosystem" },
      {
        type: "paragraph",
        text: "Loomi Entertainment Group is building an ecosystem \u2014 a platform where IP is created, tested, distributed, and scaled with unprecedented speed. We work with creators, production partners, and distribution networks to bring microdrama storytelling to audiences across multiple languages, cultures, and markets.",
      },
      {
        type: "paragraph",
        text: "We named our company Loomi because entertainment is something woven into the fabric of human experience. Stories connect us. AI doesn\u2019t diminish that \u2014 in the right hands, it deepens it.",
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

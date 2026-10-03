// Everything on the site is driven from this file.
// Weights are [software, ml, quant]: how relevant a project is to each area (0 to 1).
// The project filter shows items with weight >= 0.5 for the chosen area.

export type Role = 'swe' | 'ml' | 'quant';
export type Link = { label: string; href: string };

export const site = {
  url: 'https://sanyam2005.github.io',
  name: 'Sanyam Agrawal',
  title: 'Sanyam Agrawal | Software & ML Engineer, IIIT Hyderabad',
  description:
    'Sanyam Agrawal builds distributed systems, ML models and trading infrastructure. Final-year CS at IIIT Hyderabad; interned at Microsoft and Silverleaf Capital.',
  intro:
    'Final-year computer science student at IIIT Hyderabad. I build backend systems, machine learning models and trading infrastructure, most recently as a software engineering intern at Microsoft, where I received a pre-placement offer.',
  email: 'sanyamagrawal2005@gmail.com',
  github: 'https://github.com/Sanyam2005',
  linkedin: 'https://www.linkedin.com/in/sanyam-agrawal-4531a6283/',
  codeforces: 'https://codeforces.com/profile/tanph',
  resume: 'https://drive.google.com/file/d/17Y99MJB4yOsG-E-NuQuKsklYKA6yCQEA/view?usp=sharing',
  // Free form relay, no backend. The first submission sends you a one-time activation email from FormSubmit.
  // Set to '' to remove the form and keep only email and LinkedIn.
  formEndpoint: 'https://formsubmit.co/ajax/sanyamagrawal2005@gmail.com',
};

export const roles: { id: Role; label: string }[] = [
  { id: 'swe', label: 'Software' },
  { id: 'ml', label: 'Machine learning' },
  { id: 'quant', label: 'Quant' },
];

export type Work = {
  stack?: string[];
  id: string;
  org: string;
  role: string;
  when: string;
  where: string;
  badge?: string;
  featured?: boolean;
  w: [number, number, number];
  impact: string[];
  links?: Link[];
};

export const work: Work[] = [
  {
    id: 'microsoft',
    org: 'Microsoft',
    role: 'Software engineering intern, AI ERP (Dynamics 365)',
    when: 'May to Jul 2026',
    where: 'Hyderabad',
    badge: 'Pre-placement offer',
    featured: true,
    stack: ['Power Platform', 'Dataverse', 'REST APIs', 'Copilot', 'Teams'],
    w: [1, 0.3, 0.35],
    impact: [
      'Auditors had no single view of where an expense receipt was in its lifecycle, so every investigation meant stitching records together by hand. I designed and shipped a traceability service that follows each receipt through all seven pipeline stages into Dataverse and ties it to its expense report. Investigations now take about a third of the time they used to.',
      'Brought that status into the places people already work: Teams and Outlook notifications, conversational Copilot skills, and REST APIs used by internal enterprise tenants.',
      'Received a pre-placement offer for a full-time software engineering role.',
    ],
  },
  {
    id: 'mockr',
    org: 'PM Mockr',
    role: 'Tech intern',
    when: '',
    where: '',
    badge: 'Current',
    w: [0.6, 0.8, 0.1],
    impact: [
      'Improving the conversational and voice agents that run live mock interviews, so candidates get an interviewer that listens, follows up and responds the way a real one would.',
    ],
  },
  {
    id: 'silverleaf',
    org: 'Silverleaf Capital',
    role: 'HFT developer intern, quantitative trading systems',
    stack: ['Time series', 'Backtesting', 'Market data'],
    when: 'Dec 2025 to Jan 2026',
    where: 'Mumbai',
    w: [0.55, 0.45, 1],
    impact: [
      'Built a cross-exchange backtesting framework where a strategy replays identically in research and in live trading, so a backtest result is something the desk can act on. It became the firm\'s standard pipeline for syncing data and replaying signals.',
      'Tested whether the MCX and NYMEX natural gas spread leads MCX prices. Built the tick-to-10-minute resampling and cross-exchange merge, and found statistically significant lead-lag relationships across forward horizons.',
    ],
  },
  {
    id: 'uexcelerate',
    org: 'uExcelerate',
    role: 'Software engineering intern, learning platform',
    stack: ['Python', 'React', 'Node.js', 'MongoDB'],
    when: 'Jan to Apr 2025',
    where: 'Hyderabad',
    w: [0.7, 0.55, 0.15],
    impact: [
      'Built the recommendation engine that decides which course each learner sees next, using hybrid collaborative filtering. Learners engaged with recommendations 28% more often.',
      'Built the platform around it in React, Node.js and MongoDB, extending Moodle with learner profiles and a coaching dashboard.',
    ],
    links: [{ label: 'Code', href: 'https://github.com/Sanyam2005/LMS_UEX_DASS' }],
  },
];

export type Project = {
  slug: string;
  title: string;
  kind: string;
  status?: string;
  team?: string;
  w: [number, number, number];
  impact: string;
  stack: string[];
  links: Link[];
  draft?: boolean; // hidden until filled in
  image?: string; // card header image in public/img
  video?: string; // e.g. '/media/nutri-ai.mp4' in public/media, or a YouTube embed URL
  page?: { problem: string; built: string[]; outcome: string };
};

export const projects: Project[] = [
  {
    slug: 'transformers-from-scratch',
    title: 'Transformers from scratch',
    image: '/img/transformers.webp',
    kind: 'ML research',
    w: [0.3, 1, 0.4],
    impact:
      'A controlled ablation that isolates what each modern transformer component actually buys you. Rotary embeddings gave the best sequence recovery, and grouped-query attention cut peak GPU memory by a third for a small accuracy cost.',
    stack: ['PyTorch', 'Weights and Biases', 'Hugging Face'],
    links: [
      { label: 'Code', href: 'https://github.com/Sanyam2005/transformers-from-scratch' },
      { label: 'Checkpoints', href: 'https://huggingface.co/sanyam2005/anlp-a1-transformers' },
      { label: 'Experiment logs', href: 'https://wandb.ai/sanyamagrawal2005-iiit-hyderabad/anlp-a1-transformers' },
    ],
    page: {
      problem:
        'Papers report RoPE, grouped-query attention and RMSNorm as improvements, but usually change several things at once. I wanted to know what each one does on its own when everything else is held fixed.',
      built: [
        'An encoder-decoder transformer written from tensor operations only: attention, multi-head and grouped-query attention, Pre-LN LayerNorm, RMSNorm and feed-forward blocks, with no nn.Transformer or nn.MultiheadAttention.',
        'Rotary position embeddings as 2D subspace rotations applied to queries and keys, so attention depends only on relative distance.',
        'A byte-pair encoding tokenizer learned from scratch, greedy autoregressive decoding with causal and padding masks, and a 14-test unit suite.',
        'Four configurations differing in exactly one component, trained identically and evaluated on an unseen test set for substitution-cipher recovery.',
      ],
      outcome:
        'RoPE was the clear accuracy winner, with the best exact-match recovery and 96.25 BLEU-4. Grouped-query attention reduced peak memory by 32.5% but cost accuracy, and RMSNorm trained fastest. The result is a measured trade-off map rather than a single winner.',
    },
  },
  {
    slug: 'rollout-allocation',
    title: 'Credit-aware rollout allocation for LLM reasoning',
    kind: 'ML research',
    status: 'In progress',
    team: 'Team project',
    w: [0.2, 0.95, 0.35],
    impact:
      'Reinforcement learning for reasoning spends most of its compute on rollouts that teach the model little. This work spends a fixed rollout budget where the tree of partial solutions disagrees most, and turns those differences into step-level credit.',
    stack: ['PyTorch', 'Qwen', 'RL for LLMs'],
    links: [],
  },
  {
    slug: 'legal-precedent-retrieval',
    title: 'Legal precedent retrieval',
    kind: 'NLP and information retrieval',
    team: 'Team of four',
    w: [0.3, 0.85, 0.2],
    impact:
      'Finds which earlier Indian court judgments a new case should cite. Weighting retrieval by what each passage does in a judgment, such as facts, arguments or the ruling, beat the course benchmark leaderboard.',
    stack: ['Python', 'BM25', 'Transformers', 'LegalBERT'],
    links: [{ label: 'Code', href: 'https://github.com/gautambhetanabhotla/inlp-project' }],
    page: {
      problem:
        'A lawyer drafting an argument needs the precedents that matter, and keyword search over long Indian judgments returns either too much or the wrong thing. The IL-PCR benchmark measures how well a system ranks the cases that were actually cited.',
      built: [
        'Lexical baselines with TF-IDF and BM25, tuned across n-gram settings.',
        'Re-ranking with MiniLM, RoBERTa and LegalBERT on top of the lexical candidates.',
        'Role-weighted retrieval, which scores passages differently depending on their rhetorical role in the judgment.',
        'More than 50 experiments to separate what helped from what only looked like it helped.',
      ],
      outcome:
        'Role-weighted retrieval with tuned n-grams reached 0.4596 MicroF1 and finished above the benchmark leaderboard on the course evaluation set.',
    },
  },
  {
    slug: 'network-file-system',
    title: 'Distributed network file system',
    kind: 'Systems',
    team: 'Team of four',
    w: [0.85, 0.1, 0.6],
    impact:
      'A file system spread across machines that keeps files readable when a storage server goes down. A naming server routes each client to the right storage server, and replicas take over on failure.',
    stack: ['C', 'POSIX threads', 'TCP sockets'],
    links: [{ label: 'Code', href: 'https://github.com/Sanyam2005/Network-File-System' }],
    page: {
      problem:
        'Files live on many storage servers, clients should not need to know which one, and the system has to stay usable when one of them fails.',
      built: [
        'A naming server that registers storage servers and resolves every client request to the right server, using a trie with a cache so lookups stay fast as paths grow.',
        'Concurrent reads and writes across clients with multi-threading and synchronisation.',
        'Replication so files stay readable from a backup when a storage server is down.',
        'Create, delete, copy, list and info operations over TCP, plus streaming of audio files.',
      ],
      outcome:
        'A working multi-machine file system on a local network, with nine storage servers configured by default and graceful read-only behaviour on failure.',
    },
  },
  {
    slug: 'iiit-mart',
    title: 'IIIT Mart',
    kind: 'Full-stack product',
    w: [0.75, 0.15, 0.1],
    impact:
      'A buy-and-sell marketplace for IIIT Hyderabad students. Sign-in goes through the campus login so only students can trade, and an OTP at handover confirms each order actually changed hands.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    links: [
      { label: 'Code', href: 'https://github.com/Sanyam2005/IIIT-MART-MERN-STACK' },
      { label: 'Demo video', href: 'https://www.loom.com/share/d3cbfcc7f73440c49353c8a6f28850eb' },
    ],
    page: {
      problem:
        'Campus buying and selling ran through chat groups, with no way to know who you were dealing with or whether an order was completed.',
      built: [
        'CAS-based campus login with JWT sessions, so every account belongs to a real student.',
        'Search, cart, checkout and order tracking for buyers; listings, order management and a dashboard for sellers.',
        'OTP verification at handover and buyer-seller chat for completed orders.',
        'An AI help chat for navigation questions, and Cloudinary for product images.',
      ],
      outcome:
        'A complete marketplace flow from listing to verified handover, shown end to end in the demo video.',
    },
  },
  {
    slug: 'wandermate',
    title: 'WanderMate',
    kind: 'Mobile app',
    team: 'Team project',
    w: [0.7, 0.1, 0.1],
    impact:
      'A travel planner where a group edits one itinerary together in real time. It orders stops into an efficient route, splits the budget, and keeps working offline, syncing edits when the connection returns.',
    stack: ['React Native', 'TypeScript', 'Node.js', 'MongoDB', 'Firebase'],
    links: [{ label: 'Code', href: 'https://github.com/arnav4124/WanderMate' }],
    page: {
      problem:
        'Group trips get planned across chats and spreadsheets that drift out of sync, and travel apps assume you always have signal.',
      built: [
        'An API gateway that keeps third-party keys on the server and wraps places, routing and geocoding behind one facade with caching and fallbacks.',
        'Live collaboration through Firebase, with an observer pattern pushing every change to everyone on the trip.',
        'Route optimisation across multiple stops, budget tracking with per-person splits, and undo and redo for itinerary edits.',
        'An offline cache and sync queue so edits made without signal are applied later.',
      ],
      outcome:
        'A social trip planner with shared itineraries, a feed for publishing and cloning trips, and documented architecture decisions.',
    },
  },
  {
    slug: 'operating-systems',
    title: 'Operating systems from scratch',
    kind: 'Systems',
    w: [0.7, 0.05, 0.45],
    impact:
      'A Unix shell in C with pipes, redirection, background jobs and signals; additions to the xv6 kernel such as per-process syscall counting and alarms; a client-server game over sockets; and concurrency simulations built on locks and condition variables.',
    stack: ['C', 'xv6', 'POSIX'],
    links: [
      { label: 'Shell', href: 'https://github.com/Sanyam2005/C-Shell' },
      { label: 'xv6', href: 'https://github.com/Sanyam2005/OSN-MP2-XV6' },
      { label: 'Networking', href: 'https://github.com/Sanyam2005/OSN-MP2-Networks' },
      { label: 'Concurrency', href: 'https://github.com/Sanyam2005/OSN-MP3-Concurrency' },
    ],
  },
  {
    slug: 'crowd-monitoring',
    title: 'Crowd monitoring on edge hardware',
    kind: 'Embedded ML',
    team: 'Team of four',
    w: [0.4, 0.5, 0.1],
    impact:
      'Counts people and reads their emotions in real time on a Qualcomm development board, then streams the results to a central server. I evaluated the detection models and built the server side.',
    stack: ['TensorFlow Lite', 'Java', 'Android'],
    links: [{ label: 'Code', href: 'https://github.com/ARK3105/ESW-PROJECT' }],
  },
  {
    slug: 'citiverse',
    title: 'CitiVerse',
    kind: 'Databases',
    team: 'Team project',
    w: [0.35, 0.05, 0.05],
    impact:
      'The relational database behind a city travel app, covering hotels, restaurants and attractions, with a Python interface on top.',
    stack: ['SQL', 'Python'],
    links: [{ label: 'Code', href: 'https://github.com/Sanyam2005/DNA-PROJECT-CITIVERSE' }],
  },
  {
    slug: 'nutri-ai',
    title: 'NutriAI',
    image: '/img/nutri-ai.webp',
    kind: 'AI product, Microsoft hackathon',
    team: 'Team ProjectX',
    w: [0.65, 0.6, 0.05],
    impact:
      'Calorie tracking that understands Indian meals. Photograph dal-chawal, biryani or a thali and get an editable nutrition breakdown in seconds, so logging a meal takes one photo instead of a dozen searches. Built for Microsoft employees in the Healthy Future hackathon track.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'GPT-4o vision', 'Azure Blob Storage', 'Microsoft Entra ID'],
    links: [{ label: 'Code', href: 'https://github.com/Sanyam2005/ProjectX_NUTRIAI' }],
    video: '/media/nutri-ai.mp4', // shown only once public/media/nutri-ai.mp4 exists
    page: {
      problem:
        'Calorie apps are built around Western packaged food. Logging a home-cooked Indian meal means guessing portions and searching for each ingredient, so people stop logging within a week.',
      built: [
        'A photo-to-nutrition pipeline: a vision model identifies the dish and its ingredients, and every row of the result stays editable so a wrong guess takes seconds to fix.',
        'A pluggable AI provider interface with an offline mock for demos and GPT-4o vision through GitHub Models behind one setting.',
        'An Indian-first nutrition table of about 120 foods, with USDA FoodData Central as a fallback for everything else.',
        'Dashboard, calendar, 7 to 90-day trends, goals from Mifflin-St Jeor, reminders, achievements and weekly challenges, with Microsoft Entra ID sign-in and a guest mode. FastAPI and async SQLAlchemy on PostgreSQL, React on the front end, all in Docker Compose.',
      ],
      outcome:
        'On a 10-photo evaluation set the pipeline matched the ingredients and returned plausible calories in every case and named the dish correctly in 8, at about 10 seconds per photo.',
    },
  },
  {
    slug: 'teleprompter',
    title: 'Teleprompter',
    kind: 'Mobile app',
    w: [0.7, 0.1, 0.05],
    impact:
      'Turns a phone into a teleprompter that records while you read. The script scrolls over the front camera, so you keep eye contact and finish a video in one take, and the recording saves straight to your photo library.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Reanimated'],
    links: [{ label: 'Code', href: 'https://github.com/Sanyam2005/Teleprompter' }],
    page: {
      problem:
        'Recording a talking-head video usually means memorising lines or reading off a second screen, which breaks eye contact and costs retakes.',
      built: [
        'A script library with an editor, stored on the device so scripts are there offline.',
        'A recording screen that overlays the scrolling script on the front camera and saves the take to the photo library.',
        'Scrolling driven by Reanimated shared values on the UI thread, so the text moves smoothly even while the camera records.',
        'Live controls for scroll speed, font size and mirroring for use with a physical prompter glass. Recording pauses automatically when the screen loses focus.',
      ],
      outcome: 'A complete record-while-reading flow on iOS and Android from a single Expo codebase.',
    },
  },
];

export const honours = [
  { what: 'JEE Main', detail: 'All India Rank 481 among more than a million candidates' },
  { what: 'JEE Advanced', detail: 'All India Rank 3400' },
  { what: 'Codeforces', detail: 'Expert, peak rating 1756', href: site.codeforces },
  { what: 'IIIT Hyderabad', detail: "Dean's List, top 10% of the batch" },
  { what: 'CBSE Class 10', detail: 'National topper, 99.8%' },
];

// Skills, each with the work or projects that show it. Ids refer to work ids, project slugs, or 'codeforces'.
export const skills: { group: string; items: { name: string; in: string[] }[] }[] = [
  {
    group: 'Languages',
    items: [
      { name: 'C', in: ['network-file-system', 'operating-systems'] },
      { name: 'C++', in: ['codeforces'] },
      { name: 'Python', in: ['transformers-from-scratch', 'legal-precedent-retrieval', 'nutri-ai', 'uexcelerate'] },
      { name: 'TypeScript', in: ['nutri-ai', 'teleprompter', 'wandermate'] },
      { name: 'JavaScript', in: ['iiit-mart'] },
      { name: 'SQL', in: ['citiverse', 'nutri-ai'] },
    ],
  },
  {
    group: 'Systems',
    items: [
      { name: 'Distributed systems', in: ['network-file-system', 'microsoft'] },
      { name: 'Event-driven architecture', in: ['microsoft'] },
      { name: 'Multi-threading', in: ['network-file-system', 'operating-systems'] },
      { name: 'TCP/IP and sockets', in: ['network-file-system', 'operating-systems'] },
      { name: 'Backtesting infrastructure', in: ['silverleaf'] },
      { name: 'Docker', in: ['nutri-ai'] },
    ],
  },
  {
    group: 'Machine learning',
    items: [
      { name: 'PyTorch', in: ['transformers-from-scratch', 'rollout-allocation'] },
      { name: 'Transformers', in: ['transformers-from-scratch', 'legal-precedent-retrieval'] },
      { name: 'Information retrieval', in: ['legal-precedent-retrieval'] },
      { name: 'Recommender systems', in: ['uexcelerate'] },
      { name: 'Computer vision', in: ['nutri-ai', 'crowd-monitoring'] },
      { name: 'Time series', in: ['silverleaf'] },
      { name: 'Voice agents', in: ['mockr'] },
    ],
  },
  {
    group: 'Product engineering',
    items: [
      { name: 'React', in: ['nutri-ai', 'iiit-mart', 'uexcelerate'] },
      { name: 'React Native', in: ['teleprompter', 'wandermate'] },
      { name: 'Node.js', in: ['iiit-mart', 'wandermate', 'uexcelerate'] },
      { name: 'FastAPI', in: ['nutri-ai'] },
      { name: 'MongoDB', in: ['iiit-mart', 'wandermate', 'uexcelerate'] },
      { name: 'PostgreSQL', in: ['nutri-ai'] },
      { name: 'Power Platform', in: ['microsoft'] },
    ],
  },
];

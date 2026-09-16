
const TOPICS = [
  {
    title: "Urban Policy",
    desc: "Cities, planning, housing, and municipal finance.",
    icon: "🏙"
  },
  {
    title: "Climate & Environment",
    desc: "Mitigation, adaptation, and ecological governance.",
    icon: "🌱"
  },
  {
    title: "Governance & Institutions",
    desc: "Federalism, accountability, and the administrative state.",
    icon: "🏛"
  },
  {
    title: "Economy & Public Finance",
    desc: "Taxation, welfare economics, and expenditure reform.",
    icon: "📊"
  },
  {
    title: "Digital Governance",
    desc: "Data policy, digital public infrastructure, and rights.",
    icon: "💻"
  },
  {
    title: "Education & Health",
    desc: "Human capital, access, and service delivery.",
    icon: "📚"
  }
];

const ARTICLES = [
  {
    id: "land-acquisition-urban-india",
    title: "The Geography of Consent: Land Acquisition and Urban Expansion in India",
    author: "Chinmaya Patro",
    date: "2025-03-12",
    category: "Urban Policy",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1568410294065-3cb559e9c1a4?w=1200&q=80",
    excerpt: "How an obsolete colonial statute continues to shape the spatial grammar of Indian cities, and what a genuine reform agenda might look like.",
    body: [
      "Land is the silent protagonist of Indian urbanisation. Every metro line, every peripheral expressway, every relocated slum carries within it a buried negotiation over title, tenancy, and consent — a negotiation almost always won by the party with the better paperwork.",
      "The Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013 was meant to settle this question. It introduced consent clauses, social impact assessments, and compensation multipliers. A decade later, the law sits largely unused, with state governments preferring older, swifter instruments such as the Land Acquisition Act, 1894, or bypassing acquisition altogether through land pooling and township schemes.",
      "The result is an urban form that is pathologically fragmented. Cities expand not where demand pulls them, but where the cadastral map permits. Agricultural land at the urban edge gets converted in irregular patches; peri-urban villages are absorbed without ever quite becoming wards. The master plan, drawn on a clean sheet, becomes an aspiration document overlaid on a messy reality of contested titles and informal transactions.",
      "Reform cannot be confined to statute. It must address the cadastral foundation itself — the long-promised Digital India Land Records Modernization Programme, the slow maturation of the SVAMITVA scheme for unmapped rural abadi, and the political economy of state-level revenue departments that have resisted transparency for a century. A genuine land policy for urban India would begin by recognising that the map is the policy."
    ]
  },
  {
    id: "heat-action-plans",
    title: "After the Heatwave: Why India's Cooling Action Plans Are Not Cooling Enough",
    author: "Chinmaya Patro",
    date: "2025-02-28",
    category: "Climate & Environment",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1605579450583-2bc234e8f33e?w=1200&q=80",
    excerpt: "Over a hundred Indian cities now have Heat Action Plans. Most of them are rhetorically robust and operationally thin.",
    body: [
      "India's Heat Action Plan moment is upon us. The national Cool Roofing Strategy, the India Cooling Action Plan, and more than a hundred city-level HAPs together represent what is arguably the largest climate-adaptation planning exercise in the Global South.",
      "Yet a series of recent evaluations — most notably by the Centre for Policy Research — find that the plans share a common weakness: they are heavy on public awareness and light on the binding mechanics of service delivery. Cool-roof subsidies remain pilots; informal workforces are mentioned but rarely protected; inter-agency coordination is asserted more than institutionalised.",
      "The deeper problem is temporal. Heatwaves are acute events, but the conditions that produce heat mortality — dense informal housing, occupational exposure, unreliable power supply — are chronic. A HAP that activates only when the Indian Meteorological Department issues a red alert is responding to symptoms after they have already crystallised. Adaptation needs to operate on the cadence of urban governance, not weather warnings.",
      "Cooling, ultimately, is not a discrete intervention. It is a property of how cities are built — the albedo of their roofs, the porosity of their pavements, the presence or absence of shade trees, the working hours of their economies. Heat Action Plans will mean little until they begin to reshape these slow variables."
    ]
  },
  {
    id: "fiscal-federalism-issues",
    title: "The Sixteenth Finance Commission and the Quiet Remaking of Fiscal Federalism",
    author: "Chinmaya Patro",
    date: "2025-02-10",
    category: "Economy & Public Finance",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1450101499160159e9ec7f73eeb6c0d9e?w=1200&q=80",
    excerpt: "Vertical imbalance, horizontal equity, and the politics of devolution — what to watch as the Sixteenth Finance Commission prepares its report.",
    body: [
      "The Finance Commission is one of those rare institutions whose design is itself an argument — about what the union owes the states, about how need is measured, and about which indices should govern redistribution. The Sixteenth Commission, chaired by Arvind Panagariya, will deliver its recommendations for the 2026–31 cycle at a moment when the underlying fiscal fabric has shifted.",
      "Three shifts deserve attention. First, the post-GST compensation era has left states more dependent on devolution than at any time since the early 1990s. Second, the union's reliance on cesses and surcharges — which sit outside the divisible pool — has grown structurally, hollowing out the share of taxes that the Commission can actually allocate. Third, the question of how to weight demographic performance versus demographic dependency remains unresolved, with southern states increasingly vocal about an implicit penalty for fertility decline.",
      "Each of these is technical. Each is also deeply political. The Commission's quiet, technocratic prose conceals a negotiation that will shape the next decade of Indian federalism — and perhaps its very legibility as a federal system."
    ]
  },
  {
    id: "digital-personal-data-protection",
    title: "The Data Protection Act and the Quiet Birth of a New Administrative State",
    author: "Chinmaya Patro",
    date: "2025-01-22",
    category: "Digital Governance",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1531746790731-6c0874209f21?w=1200&q=80",
    excerpt: "India's DPDP Act, 2023, sets up a Data Protection Board whose design will determine whether the law becomes a substantive rights regime or a paper tiger.",
    body: [
      "The Digital Personal Data Protection Act, 2023 — India's first comprehensive data protection law — is, on its face, a consent-and-purpose framework familiar from the European GDPR. Its most consequential provision, however, is institutional rather than substantive: the creation of a Data Protection Board, whose composition, jurisdiction, and independence are left almost entirely to rules yet to be notified.",
      "An administrative body that is constituted by rule rather than statute is a fragile creature. It is bound by its parent ministry, removable at executive pleasure, and structurally insulated from parliamentary oversight. Without statutory anchoring, the Board risks becoming — like so many of its predecessors — an entity that exists on paper but rarely adjudicates.",
      "The question for India's digital rights regime is therefore not whether the DPDP Act is a strong law, but whether the administrative scaffolding around it will let it operate as one."
    ]
  },
  {
    id: "aspirational-districts-programme",
    title: "What the Aspirational Districts Programme Got Right — and What It Quietly Skipped",
    author: "Chinmaya Patro",
    date: "2024-12-15",
    category: "Governance & Institutions",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1542744094-3d2d1e3e7f6e?w=1200&q=80",
    excerpt: "The NITI Aayog's flagship district transformation programme is being reviewed for a successor. The lessons are more nuanced than either side admits.",
    body: [
      "The Aspirational Districts Programme (ADP), launched in 2018, identified 117 districts on the basis of composite deprivation and subjected them to a regime of indicators, rankings, and concentrated central attention. Six years on, NITI Aayog is preparing a successor framework. The conversation around what worked, and what did not, has been surprisingly thin.",
      "What worked: the discipline of indicators. District administrations responded to visible league tables. Health and education outcomes improved measurably in several focus districts. The model of convergent central monitoring, paired with state-level execution, created a useful tension.",
      "What was skipped: the structural. ADP treated districts as the unit of intervention, but the binding constraints on deprivation — land records, forest rights, local government capacity — sit at the block and panchayat level. The programme reached where it was easiest to reach. The successor framework will need to decide whether to deepen or to widen."
    ]
  },
  {
    id: "right-to-education-census",
    title: "RTE at Fifteen: A Census of Quiet Failure",
    author: "Chinmaya Patro",
    date: "2024-11-30",
    category: "Education & Health",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1503676265938-5325eb9d6e1e?w=1200&q=80",
    excerpt: "The Right of Children to Free and Compulsory Education Act turns fifteen. The numbers suggest a law that has been honoured more in observance than in substance.",
    body: [
      "Fifteen years after the RTE Act, India's education system has expanded enrolment, narrowed gender gaps in access, and built infrastructure at a pace inconceivable in the 1990s. By the headline indicators of policy success — schools, enrolment, toilets — the law has worked.",
      "By the indicators of learning, however, it has not. The Annual Status of Education Report finds that basic literacy and numeracy among rural grade-five children remain stuck at levels that would, in any other sector, be called a crisis. The law's Section 12(1)(c), mandating reservation for economically weaker sections in private schools, has been implemented with the enthusiasm of reluctant partners on both sides.",
      "RTE was a rights-based law in an era that did not yet have the administrative machinery to deliver rights. Its successor — when it comes — will need to begin with the unglamorous question the original Act avoided: what does it actually take to teach a child to read?"
    ]
  }
];

// Expose globally
window.TOPICS = TOPICS;
window.ARTICLES = ARTICLES;
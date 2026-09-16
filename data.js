const articles = [
  {
    id: "rules-based-maritime-order",
    title: "Sovereignty at Sea: Navigating International Maritime Jurisdictions",
    topic: "law",
    topicLabel: "Law & Jurisprudence",
    date: "September 2026",
    readingTime: "8 min read",
    summary: "An inquiry into dispute resolution frameworks under UNCLOS and evolving conventions governing sovereign corridors.",
    content: `
      <p>International legal frameworks are facing unprecedented structural tests. As states adapt to contested waterways, the reliance on established arbitration mechanisms becomes both an imperative and a diplomatic flashpoint.</p>
      <h2>The Framework of UNCLOS</h2>
      <p>Maritime boundaries are not merely territorial lines; they represent complex balances between coastal sovereignty and freedom of navigation...</p>
    `
  },
  {
    id: "climate-treaty-mechanisms",
    title: "Ecological Multilateralism: The Evolution of Global Climate Accords",
    topic: "environment",
    topicLabel: "Environment",
    date: "August 2026",
    readingTime: "6 min read",
    summary: "Examining adaptation finance accountability, transboundary emissions protocols, and global institutional architecture.",
    content: `<p>The intersection of international diplomacy and climate commitments reveals structural deficits in financial compliance frameworks...</p>`
  },
  {
    id: "coalition-dynamics-statecraft",
    title: "Institutional Restructuring and Foreign Policy Coherence",
    topic: "politics",
    topicLabel: "Politics & Statecraft",
    date: "August 2026",
    readingTime: "10 min read",
    summary: "Analyzing strategic autonomy, ministerial diplomacy, and executive decision structures in contemporary external policy.",
    content: `<p>Diplomatic coherence requires seamless synthesis between internal legislative mandates and outward strategic commitments...</p>`
  },
  {
    id: "urban-mobility-governance",
    title: "Social Capital, Demographics, and Equitable Institutional Access",
    topic: "society",
    topicLabel: "Society & Governance",
    date: "July 2026",
    readingTime: "7 min read",
    summary: "A policy evaluation of civic equity metrics, welfare distribution channels, and decentralized administrative capacities.",
    content: `<p>Social policy frameworks often falter at the point of implementation due to informational asymmetries at the municipal level...</p>`
  },
  {
    id: "history-culture-dummy",
    title: "Remembering the Past: History, Culture, and Public Memory",
    topic: "history-culture",
    topicLabel: "History & Culture",
    date: "September 2026",
    readingTime: "5 min read",
    summary: "A sample essay on how societies preserve, reinterpret, and debate their shared histories.",
    content: "<p>Public memory is built through more than textbooks and archives. Monuments, museums, festivals, family stories, and everyday rituals all influence how communities understand the past.</p><h2>History as a Shared Conversation</h2><p>The past does not change, but interpretations of it can. Different generations may emphasize different experiences, making historical understanding an ongoing conversation between evidence, memory, and contemporary concerns.</p><p>This dummy article demonstrates the History &amp; Culture topic and can be replaced with a full editorial essay later.</p>"
  },
  {
    id: "geography-dummy",
    title: "Maps and Meaning: Understanding Place in a Changing World",
    topic: "geography",
    topicLabel: "Geography",
    date: "September 2026",
    readingTime: "5 min read",
    summary: "A sample essay exploring how geography shapes communities, economies, borders, and political choices.",
    content: "<p>Geography is not simply the study of maps. Location, distance, terrain, infrastructure, and access to resources influence how people live and how institutions make decisions.</p><h2>The Importance of Place</h2><p>A river can connect communities while also forming a boundary. A mountain range can shape trade routes, settlement, and political administration. These physical features interact with human choices to produce distinctive landscapes.</p><p>This dummy article demonstrates the Geography topic and can be replaced with a full editorial essay later.</p>"
  },
  {
    id: "environment-climate-dummy",
    title: "Living with Change: Climate, Adaptation, and Environmental Responsibility",
    topic: "environment-climate",
    topicLabel: "Environment & Climate Issues",
    date: "September 2026",
    readingTime: "6 min read",
    summary: "A sample essay on climate risks, environmental governance, adaptation, and the choices facing communities.",
    content: "<p>Environmental change creates questions that extend beyond science into economics, governance, infrastructure, and public responsibility. Communities must consider both immediate risks and long-term resilience.</p><h2>From Risk to Resilience</h2><p>Adaptation can include better planning, stronger infrastructure, ecosystem protection, and improved access to reliable information. Effective responses often depend on cooperation between governments, businesses, communities, and researchers.</p><p>This dummy article demonstrates the Environment &amp; Climate Issues topic and can be replaced with a full editorial essay later.</p>"
  },
  {
    id: "social-change-dummy",
    title: "Society in Transition: Institutions and the Pace of Social Change",
    topic: "social-change",
    topicLabel: "Social Change",
    date: "September 2026",
    readingTime: "5 min read",
    summary: "A sample essay examining how technology, demographics, institutions, and collective action reshape society.",
    content: "<p>Social change rarely follows a single path. Demographic shifts, economic transformations, new technologies, cultural movements, and institutional reforms can reinforce or challenge one another.</p><h2>Institutions Under Pressure</h2><p>When social expectations change faster than institutions, debates emerge over representation, access, rights, and responsibilities. The resulting adjustment can be gradual or rapid, depending on the issue and the strength of competing interests.</p><p>This dummy article demonstrates the Social Change topic and can be replaced with a full editorial essay later.</p>"
  },
  {
    id: "international-affairs-dummy",
    title: "A Connected World: Diplomacy and the New International Landscape",
    topic: "international-affairs",
    topicLabel: "International Affairs",
    date: "September 2026",
    readingTime: "6 min read",
    summary: "A sample essay on diplomacy, international institutions, strategic relationships, and global interdependence.",
    content: "<p>International affairs increasingly connect questions of security, trade, technology, climate, and public health. States pursue national interests while also relying on institutions and relationships that cross borders.</p><h2>Diplomacy Beyond Bilateral Ties</h2><p>Modern diplomacy operates through bilateral relationships as well as regional and global institutions. Negotiation, information exchange, and confidence-building can help manage disagreements even when interests remain different.</p><p>This dummy article demonstrates the International Affairs topic and can be replaced with a full editorial essay later.</p>"
  },
  {
    id: "indian-politics-dummy",
    title: "Institutions and Representation: A Primer on Indian Political Life",
    topic: "indian-politics",
    topicLabel: "Indian Politics",
    date: "September 2026",
    readingTime: "6 min read",
    summary: "A sample essay introducing institutions, representation, federalism, and governance in Indian politics.",
    content: "<p>Indian political life operates across multiple levels, including the Union, states, and local institutions. Representation and governance therefore involve a wide range of institutions and political actors.</p><h2>Federalism and Public Policy</h2><p>The distribution of responsibilities between different levels of government shapes how policies are designed and implemented. Political debate can therefore involve both national priorities and distinct regional or local concerns.</p><p>This dummy article demonstrates the Indian Politics topic and can be replaced with a full editorial essay later.</p>"
  },
  {
    id: "business-economy-dummy",
    title: "Markets and Society: Understanding Economic Change",
    topic: "business-economy",
    topicLabel: "Business & Economy",
    date: "September 2026",
    readingTime: "5 min read",
    summary: "A sample essay on markets, enterprise, economic policy, and the wider social effects of economic decisions.",
    content: "<p>Economic life links households, businesses, governments, and financial institutions. Changes in prices, investment, productivity, and employment can affect different groups in different ways.</p><h2>The Policy Context</h2><p>Economic policy often involves trade-offs among growth, stability, distribution, and long-term investment. Understanding those trade-offs requires attention to both aggregate indicators and lived economic experience.</p><p>This dummy article demonstrates the Business &amp; Economy topic and can be replaced with a full editorial essay later.</p>"
  },
  {
    id: "ethics-philosophy-dummy",
    title: "The Public Good: Questions of Ethics, Justice, and Responsibility",
    topic: "ethics-philosophy",
    topicLabel: "Ethics & Philosophy",
    date: "September 2026",
    readingTime: "6 min read",
    summary: "A sample essay considering how ethical frameworks shape arguments about justice, responsibility, and public decisions.",
    content: "<p>Public decisions often raise ethical questions that cannot be settled by facts alone. Ideas about fairness, liberty, responsibility, and the common good influence how societies evaluate competing choices.</p><h2>Reasoning About Difficult Choices</h2><p>Ethical reasoning can clarify what values are in conflict and what principles are being applied. Different philosophical traditions may reach different conclusions while still providing structured ways to examine an argument.</p><p>This dummy article demonstrates the Ethics &amp; Philosophy topic and can be replaced with a full editorial essay later.</p>"
  },
  {
    id: "books-literature-dummy",
    title: "Why We Read: Books, Literature, and the Life of Ideas",
    topic: "books-literature",
    topicLabel: "Books & Literature",
    date: "September 2026",
    readingTime: "5 min read",
    summary: "A sample essay on reading, literary traditions, interpretation, and the relationship between books and public life.",
    content: "<p>Books preserve ideas across generations while also inviting readers to reinterpret them. Literature can illuminate individual experience, social structures, memory, and moral questions through forms that are both imaginative and analytical.</p><h2>Reading as Interpretation</h2><p>No book arrives with only one possible reading. Context, language, experience, and historical distance all shape interpretation, making literary discussion a continuing exchange among readers.</p><p>This dummy article demonstrates the Books &amp; Literature topic and can be replaced with a full editorial essay later.</p>"
  }
];


/**
 * Centralized Portfolio Data for Harsh Dikshit
 * Single source of truth for projects, skills, experience, and contact configuration.
 */

export const personalInfo = {
  name: "Harsh Dikshit",
  shortName: "Harsh",
  initials: "HD",
  title: "Full-Stack Software Developer",
  role: "Full-Stack Developer",
  tagline: "Building scalable, reliable, and thoughtfully designed digital products across frontend, backend, and data architectures.",
  status: "Available for full-stack opportunities",
  availabilityText: "Available for Full-Stack & Engineering Roles",
  location: "Open to Remote & On-site",
  resumePath: "/resume/Harsh%20Dikshit.pdf",
  bio: [
    "I am a Full-Stack Software Developer with hands-on experience designing and building complete software products from user-facing interfaces to relational database architectures.",
    "My engineering approach centers on pragmatic architecture: crafting fluid, accessible React and Flutter frontends, architecting resilient REST APIs in Python (FastAPI) and Node.js (Express), enforcing role-based access control with JWT, and modeling robust relational schemas in MSSQL and MySQL.",
    "Beyond web applications, I build automated data pipelines utilizing Python and Pandas for web scraping, schema normalization, and competitive analytical datasets."
  ],
  stats: [
    { label: "Architecture", value: "End-to-End", helper: "Frontend to DB Schemas" },
    { label: "Core Stacks", value: "React • Node • Python", helper: "Modern Full-Stack" },
    { label: "Databases", value: "MSSQL • MySQL • Mongo", helper: "Relational & NoSQL" },
    { label: "Mobile & Data", value: "Flutter • Pandas", helper: "Cross-Platform & ETL" },
  ]
};

export const socialLinks = {
  github: "https://github.com/harshdikshit29",
  linkedin: "https://www.linkedin.com/in/harshdikshit29/",
  email: "harshdikshit29@gmail.com",
  twitter: "https://x.com",
};

export const skillsData = {
  categories: [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "mobile", label: "Mobile" },
    { id: "data", label: "Data & APIs" },
    { id: "engineering", label: "Engineering & Security" },
  ],
  items: [
    // Frontend
    { name: "React.js", category: "frontend", highlight: "Component lifecycle, Hooks, State management", tier: "Core" },
    { name: "JavaScript (ES6+)", category: "frontend", highlight: "Async/Await, Closures, DOM manipulation", tier: "Core" },
    { name: "Vite", category: "frontend", highlight: "Lightning-fast HMR, Rollup bundling, optimization", tier: "Core" },
    { name: "Tailwind CSS", category: "frontend", highlight: "Design systems, Responsive layouts, CSS v4", tier: "Core" },
    { name: "HTML5", category: "frontend", highlight: "Semantic structure, Accessibility, SEO best practices", tier: "Core" },
    { name: "CSS3", category: "frontend", highlight: "Flexbox, Grid, Custom properties, Animations", tier: "Core" },
    
    // Backend
    { name: "Python", category: "backend", highlight: "Clean scripting, OOP, typing, data processing", tier: "Core" },
    { name: "FastAPI", category: "backend", highlight: "Asynchronous endpoints, Pydantic, OpenAPI docs", tier: "Core" },
    { name: "Node.js", category: "backend", highlight: "Event-driven runtime, NPM ecosystem, streams", tier: "Core" },
    { name: "Express.js", category: "backend", highlight: "REST API routing, custom middleware, error handling", tier: "Core" },
    { name: "RESTful API Design", category: "backend", highlight: "Clean contracts, HTTP semantics, payload schemas", tier: "Core" },
    
    // Databases
    { name: "Microsoft SQL Server", category: "database", highlight: "Relational modeling, T-SQL, indexing, procedures", tier: "Core" },
    { name: "MySQL", category: "database", highlight: "ACID compliance, schema migrations, constraints", tier: "Core" },
    { name: "MongoDB", category: "database", highlight: "Document modeling, aggregation pipelines", tier: "Working" },
    { name: "SQLAlchemy", category: "database", highlight: "Python ORM, entity relationships, query optimization", tier: "Core" },
    
    // Mobile
    { name: "Flutter", category: "mobile", highlight: "Cross-platform UI, Dart, state management, mobile UX", tier: "Core" },

    // Data & APIs
    { name: "Pandas", category: "data", highlight: "DataFrames, cleaning, aggregation, restructuring", tier: "Core" },
    { name: "Web Scraping", category: "data", highlight: "DOM traversal, anti-blocking heuristics, extraction", tier: "Core" },
    { name: "Data Normalization", category: "data", highlight: "Schema alignment, deduplication, sanitization", tier: "Core" },
    { name: "CSV & JSON Processing", category: "data", highlight: "Streaming serialization, batch data ingestion", tier: "Core" },
    
    // Engineering & Security
    { name: "JWT Authentication", category: "engineering", highlight: "Stateless security tokens, refresh token flow", tier: "Core" },
    { name: "Role-Based Access (RBAC)", category: "engineering", highlight: "Fine-grained permission gates, middleware", tier: "Core" },
    { name: "Axios", category: "engineering", highlight: "Interceptors, request cancellation, auth headers", tier: "Core" },
    { name: "Git & GitHub", category: "engineering", highlight: "Version control, branching, PR reviews, CI/CD", tier: "Core" },
    { name: "Full-Stack Architecture", category: "engineering", highlight: "Decoupled client-server design, state flows", tier: "Core" },
  ]
};

export const projectsData = [
  {
    id: "pet-care-system",
    title: "Veterinary Care & Product Management System",
    shortTitle: "Pet Care Management System",
    category: "Full-Stack Web System",
    kicker: "Healthcare & Inventory Platform",
    tagline: "End-to-end clinical workflow portal with multi-tier RBAC, pet medical histories, and prescription inventory tracking.",
    summary: "A robust clinical management platform built to streamline veterinary operations. Designed with discrete portals for Administrators, Doctors, Clinic Staff, and Pet Owners.",
    overview: "Veterinary clinics manage sensitive patient data alongside high-value pharmaceutical and nutritional inventories. This full-stack system consolidates disparate paper-based and siloed digital records into a unified, secure portal with strict role-based access control.",
    problem: "Clinics faced severe operational bottlenecks: lost paper vaccination histories, lack of granular access control between front-desk staff and attending veterinarians, and manual inventory tracking that caused stockouts of vital prescription medications.",
    solution: "Engineered a decoupled React + FastAPI platform with role-based JWT auth. Designed relational SQL schemas that bind pet medical cards to owner accounts while maintaining real-time inventory decrement logic upon prescription fulfillment.",
    highlights: [
      "Role-Based Access Control (RBAC): Differentiated authorization tiers for Admin, Doctor, Staff, and Pet Owners.",
      "Pet & Patient Profiles: Medical records, vaccination dates, diagnostic notes, and emergency owner contacts.",
      "Inventory & Prescription Tracking: Real-time stock alerts, batch monitoring, and automated deduction upon checkout.",
      "Stateless Token Security: JWT authorization with protected FastAPI route dependencies and Axios request interceptors."
    ],
    architecture: {
      client: "React.js + Vite with Tailwind CSS, custom dashboard layouts, and protected route guards.",
      api: "FastAPI with asynchronous endpoint handlers, Pydantic schema validation, and Swagger/OpenAPI documentation.",
      auth: "JWT-based authentication with bcrypt password hashing and permission-aware middleware dependencies.",
      database: "Relational SQL database with strict foreign key constraints across owners, pets, appointments, and inventory SKUs."
    },
    techStack: ["React.js", "Vite", "Tailwind CSS", "Python", "FastAPI", "SQL", "SQLAlchemy", "JWT", "Axios", "REST API"],
    challenges: [
      {
        challenge: "Granular Role Separation",
        resolution: "Created FastAPI dependency injection functions that inspect JWT token claims, rejecting unauthorized access at the route level before database queries execute."
      },
      {
        challenge: "Real-Time Inventory Integrity",
        resolution: "Implemented atomic database transactions to guarantee stock quantities update accurately when medication is prescribed, preventing concurrent double-booking."
      }
    ],
    githubUrl: "https://github.com/harshdikshit29",
    liveUrl: null,
    metrics: [
      { label: "Access Roles", value: "4 Tiers" },
      { label: "Schema Tables", value: "Normalized SQL" },
      { label: "API Protocol", value: "REST / JSON" },
    ]
  },
  {
    id: "bizzlink-mobile",
    title: "BizzLink — Enterprise Mobile Business Network",
    shortTitle: "BizzLink Mobile Platform",
    category: "Mobile & Backend Engineering",
    kicker: "Cross-Platform Ecosystem",
    tagline: "High-concurrency mobile application connecting merchants and customers, backed by Node.js and Microsoft SQL Server.",
    summary: "A mobile-first commerce and merchant networking application built with Flutter, powered by an asynchronous Node/Express backend and Microsoft SQL Server for robust transactional persistence.",
    overview: "Small and medium business owners require an intuitive, low-latency mobile interface to showcase services, manage catalogs, and communicate with customers without maintaining complicated infrastructure.",
    problem: "Existing solutions were either desktop-heavy or lacked dependable offline resilience, while backends frequently buckled under peak query volumes without structured relational indexing.",
    solution: "Developed a Flutter cross-platform client with clean state management, coupled with a Node.js/Express REST API communicating with a tuned Microsoft SQL Server database utilizing parameterized procedures for data integrity.",
    highlights: [
      "Cross-Platform Native Experience: Flutter client delivering 60fps animations, intuitive gesture navigation, and mobile responsiveness.",
      "Enterprise Relational Persistence: Normalized Microsoft SQL Server (MSSQL) tables designed for high-concurrency transactions.",
      "Scalable REST Microservices: Modular Express.js controllers isolating merchant catalogs, customer queries, and profile data.",
      "Resilient Data Handling: Parameterized SQL queries preventing injection vulnerabilities and optimizing query cache hit ratios."
    ],
    architecture: {
      client: "Flutter mobile application (Android / iOS) leveraging reactive state management and cached HTTP clients.",
      api: "Node.js with Express.js router, input sanitation middleware, and structured JSON error responses.",
      auth: "Secure token verification with role checks for merchant operations.",
      database: "Microsoft SQL Server (MSSQL) with indexed foreign keys, relational integrity, and optimized query execution plans."
    },
    techStack: ["Flutter", "Dart", "Node.js", "Express.js", "Microsoft SQL Server (MSSQL)", "REST APIs", "JWT", "Git"],
    challenges: [
      {
        challenge: "Mobile Network Variability",
        resolution: "Designed lightweight API payload structures with defensive error handling and retry mechanisms to prevent crashes during intermittent mobile connectivity."
      },
      {
        challenge: "MSSQL Relational Optimization",
        resolution: "Wrote structured relational queries and created targeted indexes on merchant IDs to minimize query latency on complex multi-table joins."
      }
    ],
    githubUrl: "https://github.com/harshdikshit29",
    liveUrl: null,
    metrics: [
      { label: "Client Target", value: "Android & iOS" },
      { label: "DB Engine", value: "Microsoft SQL Server" },
      { label: "API Runtime", value: "Node.js / Express" },
    ]
  },
  {
    id: "marketintel-engine",
    title: "MarketIntel — Competitive Price Intelligence Engine",
    shortTitle: "Price Intelligence Engine",
    category: "Data Engineering & Analytics",
    kicker: "Automated ETL & Web Scraping",
    tagline: "Automated Python and Pandas data extraction pipeline aggregating, deduplicating, and analyzing multi-vendor pricing trends.",
    summary: "An automated data extraction and transformation pipeline that harvests catalog data from e-commerce platforms, normalizes messy schemas, and outputs clean analytical datasets for price-trend analysis.",
    overview: "In competitive retail environments, pricing intelligence requires continuous, structured market observation. Raw web data is notoriously unstructured, inconsistent, and prone to breaking changes.",
    problem: "Manually comparing competitor catalogs across disparate vendors was error-prone and unscalable. Different sellers used conflicting product titles, varied measurement units, and unpredictable HTML layouts.",
    solution: "Built an automated Python web scraping pipeline using modular DOM extractors, combined with a Pandas data-cleaning pipeline that standardizes currency, deduplicates SKU variants, and exports normalized CSV datasets.",
    highlights: [
      "Resilient Web Extractors: Rate-limited Python scrapers with rotating request headers and defensive DOM fallbacks.",
      "Data Normalization Engine: Pandas pipelines handling null imputations, price string cleaning, and unit unification.",
      "Fuzzy Entity Resolution: String-matching heuristics that group equivalent products across competing vendors despite title variations.",
      "Exportable Data Pipelines: Structured CSV and JSON outputs structured for analytical modeling and historical price tracking."
    ],
    architecture: {
      ingestion: "Python scrapers employing custom session handling, exponential backoff, and robust HTML parsers.",
      processing: "Pandas DataFrames executing vector operations for cleaning, data type casting, and schema alignment.",
      normalization: "Algorithmic deduplication and category normalization modules converting raw strings to structured types.",
      output: "Standardized CSV datasets and tabular data structures ready for business reporting."
    },
    techStack: ["Python", "Pandas", "Web Scraping", "BeautifulSoup", "Data Normalization", "CSV Processing", "Data Cleaning"],
    challenges: [
      {
        challenge: "Messy & Irregular Product Schemas",
        resolution: "Built modular Pandas transformations that clean disparate currency formats, extract numerical weights/units, and handle missing values deterministically."
      },
      {
        challenge: "Anti-Scraping Defenses & Fragile Selectors",
        resolution: "Structured extractors with adaptive selector hierarchies, randomized request intervals, and error isolation so one failed product page never halted the entire pipeline."
      }
    ],
    githubUrl: "https://github.com/harshdikshit29",
    liveUrl: null,
    metrics: [
      { label: "Language", value: "Python 3" },
      { label: "Core Library", value: "Pandas" },
      { label: "Pipeline", value: "Scrape → Clean → CSV" },
    ]
  }
];

export const architectureLayers = [
  {
    id: "client",
    name: "01 / Client & Presentation Layer",
    tech: "React 19, Vite, Tailwind CSS, Flutter",
    description: "Responsive, accessible, and high-performance interfaces built with modern reactive principles. Designed for intuitive user flows and fast initial render times.",
    responsibilities: [
      "Component-driven modular architectures",
      "Client-side routing and protected view guards",
      "Optimistic UI updates and resilient error boundaries",
      "Cross-platform mobile experiences with Flutter"
    ],
    codeSnippet: `// Protected Client API Instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) config.headers.Authorization = \`Bearer \${token}\`;
  return config;
});`
  },
  {
    id: "gateway",
    name: "02 / API Gateway & Security Boundary",
    tech: "FastAPI, Express.js, JWT, CORS, Helmet",
    description: "The security perimeter enforcing authentication, role-based authorization, rate limits, and schema validation before any request reaches business logic.",
    responsibilities: [
      "Cryptographic JWT signature verification",
      "Strict Role-Based Access Control (RBAC) middleware",
      "Request validation via Pydantic schemas",
      "Consistent HTTP error code standardization"
    ],
    codeSnippet: `# FastAPI Dependency Injection for RBAC
async def get_current_user_with_role(
    required_role: str,
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db)
):
    payload = decode_jwt_token(token)
    user = db.query(User).filter(User.id == payload.get("sub")).first()
    if not user or user.role != required_role:
        raise HTTPException(status_code=403, detail="Insufficient privileges")
    return user`
  },
  {
    id: "services",
    name: "03 / Application & Service Layer",
    tech: "Python, Node.js, FastAPI Handlers, Express Controllers",
    description: "Domain services executing business logic, transaction management, and algorithmic orchestration cleanly isolated from presentation logic.",
    responsibilities: [
      "Decoupled service controllers and business rules",
      "Transactional consistency across multi-step mutations",
      "Asynchronous tasks and non-blocking I/O execution",
      "External API integrations and payload transformations"
    ],
    codeSnippet: `// Node/Express Service Layer
export const processOrderFulfillment = async (orderId, staffId) => {
  const transaction = await db.beginTransaction();
  try {
    const order = await orderRepo.findById(orderId, { transaction });
    await inventoryRepo.decrementStock(order.items, { transaction });
    await orderRepo.updateStatus(orderId, 'FULFILLED', { transaction });
    await transaction.commit();
    return { success: true };
  } catch (error) {
    await transaction.rollback();
    throw new ServiceException("Order fulfillment failed", error);
  }
};`
  },
  {
    id: "storage",
    name: "04 / Data Persistence & Relational Layer",
    tech: "Microsoft SQL Server (MSSQL), MySQL, MongoDB, SQLAlchemy",
    description: "Durable, high-integrity data storage designed with normalized relational schemas, explicit foreign keys, indexes, and optimized query access patterns.",
    responsibilities: [
      "Relational schema modeling and normal form adherence",
      "Primary/foreign key constraints and cascade integrity",
      "Targeted index strategies for query performance",
      "SQLAlchemy ORM models and raw SQL procedures"
    ],
    codeSnippet: `-- Relational Schema Definition in MSSQL
CREATE TABLE Pets (
    PetId INT IDENTITY(1,1) PRIMARY KEY,
    OwnerId INT NOT NULL,
    Name NVARCHAR(100) NOT NULL,
    Species NVARCHAR(50) NOT NULL,
    Breed NVARCHAR(100),
    CreatedAt DATETIME2 DEFAULT SYSUTCDATETIME(),
    CONSTRAINT FK_Pets_Owner FOREIGN KEY (OwnerId) 
        REFERENCES Customers(CustomerId) ON DELETE CASCADE
);
CREATE NONCLUSTERED INDEX IX_Pets_OwnerId ON Pets(OwnerId);`
  },
  {
    id: "etl",
    name: "05 / Data Pipelines & Normalization",
    tech: "Python, Pandas, BeautifulSoup, CSV / JSON Pipelines",
    description: "Automated pipelines that ingest, parse, clean, and transform semi-structured web data into normalized relational formats for analytical consumption.",
    responsibilities: [
      "Rate-limited multi-source web scrapers",
      "Pandas DataFrame cleaning and type coercion",
      "Fuzzy deduplication and entity alignment",
      "Automated CSV exports and reporting feeds"
    ],
    codeSnippet: `# Pandas Data Cleaning & Normalization Pipeline
def normalize_catalog(raw_records: list[dict]) -> pd.DataFrame:
    df = pd.DataFrame(raw_records)
    # Sanitize price strings to numeric floats
    df['clean_price'] = df['raw_price'].str.replace(r'[^0-9.]', '', regex=True).astype(float)
    # Deduplicate based on normalized title string
    df['clean_title'] = df['title'].str.strip().str.lower()
    df = df.drop_duplicates(subset=['clean_title', 'vendor_id'])
    return df[['vendor_id', 'clean_title', 'clean_price', 'timestamp']]`
  }
];

export const journeyMilestones = [
  {
    phase: "01",
    period: "Foundation & Modern Frontend",
    title: "Component Architecture & Interface Craft",
    summary: "Built a solid foundation in modern web engineering: ES6+ JavaScript, semantic HTML5, CSS3 layout engines, and the React ecosystem.",
    skills: ["React.js", "JavaScript ES6+", "HTML5/CSS3", "Vite", "Tailwind CSS"]
  },
  {
    phase: "02",
    period: "Backend & Server Architecture",
    title: "REST APIs & Asynchronous Microservices",
    summary: "Expanded into server-side development, constructing RESTful APIs using Node.js (Express) and Python (FastAPI) with structured routing, middleware, and request validation.",
    skills: ["Node.js", "Express.js", "Python", "FastAPI", "RESTful APIs"]
  },
  {
    phase: "03",
    period: "Security & Access Governance",
    title: "Authentication, JWT & Role-Based Access Control",
    summary: "Implemented security best practices: stateless token authentication using JWT, password hashing, and granular Role-Based Access Control (RBAC) separating administrative and public actions.",
    skills: ["JWT", "Authentication", "RBAC", "Axios Interceptors", "Security Headers"]
  },
  {
    phase: "04",
    period: "Database Modeling & Data Integrity",
    title: "Relational Schemas & Storage Engines",
    summary: "Designed and optimized database architectures across Microsoft SQL Server (MSSQL), MySQL, and MongoDB. Structured foreign keys, indexing, and ORM abstractions via SQLAlchemy.",
    skills: ["MSSQL", "MySQL", "MongoDB", "SQLAlchemy", "Database Normalization"]
  },
  {
    phase: "05",
    period: "Data Engineering & Automation",
    title: "Web Scraping, Pandas & ETL Pipelines",
    summary: "Developed automated data extraction and cleaning workflows. Utilized Python and Pandas to parse heterogeneous web feeds, deduplicate records, and generate normalized CSV feeds.",
    skills: ["Pandas", "Web Scraping", "Data Normalization", "CSV Processing"]
  },
  {
    phase: "06",
    period: "Full-Stack Systems & Mobile Delivery",
    title: "Production Applications & Mobile Networks",
    summary: "Synthesized the full stack into real-world production architectures: multi-tier veterinary management systems and Flutter mobile business applications.",
    skills: ["Full-Stack Architecture", "Flutter", "Cross-Platform Delivery", "Production Deployment"]
  }
];

export const howIBuildSteps = [
  {
    step: "01",
    title: "Understand & Scope",
    description: "Analyze the problem space, dissect user requirements, identify constraints, and establish realistic technical boundaries before writing a single line of code."
  },
  {
    step: "02",
    title: "Architect & Model",
    description: "Design the data model (relational schemas, keys, constraints), formulate clean REST API contracts, and establish security boundaries like JWT and RBAC."
  },
  {
    step: "03",
    title: "Build & Modularize",
    description: "Implement decoupled frontend components and backend services. Maintain clean separation of concerns between UI, controllers, and database access."
  },
  {
    step: "04",
    title: "Integrate & Secure",
    description: "Wire frontend clients to API endpoints with Axios interceptors, enforce role checks on every sensitive route, and handle edge cases gracefully."
  },
  {
    step: "05",
    title: "Test & Refine",
    description: "Validate responsiveness across viewports (mobile to desktop), test API error handling, optimize SQL queries, and ensure smooth, accessible interactions."
  },
  {
    step: "06",
    title: "Deploy & Maintain",
    description: "Package assets for production with clean Vite bundling, configure environment variables defensively, and monitor performance and data reliability."
  }
];

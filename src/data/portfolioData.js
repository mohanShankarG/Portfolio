export const personalInfo = {
  name: "Mohan Shankar G",
  shortName: "Mohan Shankar",
  title: "Full Stack Web Developer & AI Engineer",
  tagline: "Building scalable enterprise web platforms, robust RESTful APIs, and high-performance computer vision pipelines.",
  location: "Nidadavole, Andhra Pradesh, India",
  phone: "+91 8985338792",
  email: "mohan.shankar62892@gmail.com",
  linkedin: "https://linkedin.com/in/mohan-shankar-1598432b",
  github: "https://github.com/mohanShankarG",
  resumePdfUrl: "./Mohan_Shankar_Resume.pdf",
  availability: "Available for Full-time Roles & High-Impact Opportunities",
  targetRoles: [
    "Full Stack Developer",
    "React.js Developer",
    "Node.js Backend Developer",
    "AI / Computer Vision Engineer"
  ],
  stats: [
    { label: "Years of Experience", value: "3+", icon: "Clock" },
    { label: "Production Projects", value: "5+", icon: "FolderGit2" },
    { label: "Tech Stack Tools", value: "20+", icon: "Cpu" },
    { label: "Government Modules Built", value: "6+", icon: "ShieldCheck" }
  ]
};

export const professionalSummary = `
Full Stack Web Developer with 3+ years of experience building responsive web applications, RESTful APIs, dashboards, business workflows, and data-driven systems using React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Experienced in authentication, RBAC, API integration, scheduled Cron jobs, database workflows, deployment, and production issue resolution. Also specialized in AI/ML integration using Python, PyTorch, YOLO, and computer vision for real-world road-safety and video-processing applications.
`;

export const skillsData = {
  frontend: {
    title: "Frontend Engineering",
    icon: "Layout",
    description: "Modern, responsive, user-centric web applications and audit dashboards.",
    skills: [
      { name: "React.js", level: "Expert", tags: ["Hooks", "Router", "State", "Context"] },
      { name: "JavaScript (ES6+)", level: "Expert", tags: ["Async/Await", "DOM", "Modular"] },
      { name: "Material UI & Tailwind CSS", level: "Advanced", tags: ["Theming", "Responsive", "Glassmorphism"] },
      { name: "Vite & Build Tools", level: "Advanced", tags: ["Bundling", "HMR", "Performance"] },
      { name: "Axios & REST Integration", level: "Expert", tags: ["Interceptors", "Error Handling", "JWT"] },
      { name: "HTML5 & CSS3 / Flex / Grid", level: "Expert", tags: ["Semantic", "Cross-browser", "Accessible"] }
    ]
  },
  backend: {
    title: "Backend & Systems",
    icon: "Server",
    description: "High-throughput APIs, microservices, secure authentication, and scheduled workers.",
    skills: [
      { name: "Node.js", level: "Expert", tags: ["Event Loop", "Streams", "Modules"] },
      { name: "Express.js", level: "Expert", tags: ["Middleware", "Routing", "Error Handling"] },
      { name: "RESTful API Architecture", level: "Expert", tags: ["API Design", "Versioning", "Clean Arch"] },
      { name: "JWT & RBAC Security", level: "Advanced", tags: ["Role Hierarchy", "Tokens", "Auth Guards"] },
      { name: "Cron Jobs & Schedulers", level: "Advanced", tags: ["Daily Archival", "Rankings", "Workers"] },
      { name: "SAP ABAP Integration", level: "Familiar", tags: ["B2B Tickets", "Order Sync"] }
    ]
  },
  databases: {
    title: "Databases & ORMs",
    icon: "Database",
    description: "Relational, document, and caching layers optimized for high query velocity.",
    skills: [
      { name: "PostgreSQL", level: "Advanced", tags: ["Relational", "Indexing", "Complex Queries"] },
      { name: "MongoDB & Mongoose", level: "Expert", tags: ["Aggregation", "Schema Design", "NoSQL"] },
      { name: "Prisma ORM", level: "Advanced", tags: ["Type-Safe Queries", "Migrations"] },
      { name: "Redis", level: "Advanced", tags: ["Queue Management", "Caching", "Pub/Sub"] },
      { name: "MySQL", level: "Intermediate", tags: ["Joins", "Transactions", "Relational"] }
    ]
  },
  aiAndVision: {
    title: "AI & Computer Vision",
    icon: "Eye",
    description: "Deep learning models, real-time object tracking, and large-scale video analytics.",
    skills: [
      { name: "Python", level: "Advanced", tags: ["Data Pipelines", "Automation", "Scripting"] },
      { name: "PyTorch", level: "Advanced", tags: ["Deep Learning", "Tensor Ops", "Model Eval"] },
      { name: "YOLO & YOLOv11", level: "Expert", tags: ["Asset Detection", "Batch Inference", "Weights"] },
      { name: "OpenCV", level: "Advanced", tags: ["Video Processing", "Frame Extraction", "Filters"] },
      { name: "BoT-SORT & ByteTrack", level: "Advanced", tags: ["Multi-Object Tracking", "Trajectory"] },
      { name: "Label Studio & LabelImg", level: "Expert", tags: ["Dataset Annotation", "Curation"] }
    ]
  },
  devopsAndTools: {
    title: "DevOps & Deployment",
    icon: "Wrench",
    description: "Modern containerization, cloud deployment, asset optimization, and version control.",
    skills: [
      { name: "Docker", level: "Intermediate", tags: ["Containers", "Images", "Composes"] },
      { name: "Git & GitHub", level: "Expert", tags: ["Branching", "Code Reviews", "CI/CD"] },
      { name: "Postman", level: "Expert", tags: ["API Testing", "Environments", "Docs"] },
      { name: "Vercel & Render", level: "Advanced", tags: ["Automated Deployments", "Serverless"] },
      { name: "Cloudinary / Multer / Sharp", level: "Advanced", tags: ["Media Pipelines", "Compression"] }
    ]
  },
  embedded: {
    title: "Embedded & Hardware",
    icon: "Cpu",
    description: "Foundational roots in microcontroller programming, sensors, and robotics automation.",
    skills: [
      { name: "C & C++", level: "Advanced", tags: ["Memory Management", "Algorithms"] },
      { name: "Embedded C", level: "Advanced", tags: ["Microcontrollers", "Registers"] },
      { name: "Arduino & Microcontrollers", level: "Advanced", tags: ["Firmware", "Motor Control"] },
      { name: "Hardware & Sensor Integration", level: "Advanced", tags: ["Ultrasonic", "Infrared", "Robotics"] }
    ]
  }
};

export const experienceData = [
  {
    role: "Full Stack Developer / AI Engineer",
    company: "Satra Service and Solutions Pvt. Ltd.",
    location: "Ahmedabad, Gujarat / Remote",
    period: "Dec 2024 -- Present",
    type: "Full-Time",
    highlights: [
      "Developed and maintained mission-critical modules for GujMarg (Gujarat Government Road Safety and Complaint Management System) using React.js, Node.js, and Express.js.",
      "Architected intelligent complaint workflows featuring automated officer assignment based on jurisdiction, hierarchical escalation matrix, role-based access control (RBAC), and high-performance server-side sorting/filtering/pagination.",
      "Engineered comprehensive React dashboards including Web Audit and Citizen Audit modules for real-time monitoring, analytics, and transparent governmental reporting.",
      "Implemented scheduled Cron background workers for automated daily officer ranking calculation and high-volume historic record archival.",
      "Integrated end-to-end AI/ML workflows for road-survey imagery and video processing using Python, PyTorch, YOLOv11, and computer vision pipelines.",
      "Spearheaded Git/GitHub collaborative workflows, active debugging, code reviews, and production hotfix resolutions."
    ],
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Python", "YOLOv11", "PyTorch", "Redis", "Cron Jobs", "RBAC"]
  },
  {
    role: "Backend Developer Intern",
    company: "Synozon Technology",
    location: "India",
    period: "Aug 2023 -- Oct 2024",
    type: "Internship",
    highlights: [
      "Engineered core CRM modules utilizing React.js, Node.js, Express.js, and MongoDB.",
      "Designed and implemented secure REST APIs for customer profiles, order fulfillment, automated alerts, and JWT authentication flows.",
      "Created fluid, responsive React frontend interfaces and connected them seamlessly with backend service endpoints.",
      "Contributed to SAP ABAP B2B ticket synchronization mechanisms and real-time order-tracking workflows.",
      "Optimized backend data processing routines and streamlined application response latencies."
    ],
    tech: ["Node.js", "Express.js", "React.js", "MongoDB", "REST APIs", "JWT", "SAP ABAP"]
  },
  {
    role: "Embedded Developer / Jr. Software Engineer",
    company: "Pantech Solutions R&D",
    location: "India",
    period: "Dec 2021 -- Mar 2023",
    type: "Full-Time",
    highlights: [
      "Built embedded software and automated robotics solutions utilizing C, C++, Embedded C, Python, and Arduino architectures.",
      "Conducted extensive multi-sensor integration, PWM motor speed control, hardware automation routines, and rigorous circuit testing.",
      "Led development of notable prototypes including the Blind Man Wheelchair (obstacle avoidance & autonomous navigation), Auto Robo Assistant, and an Electric Vehicle (EV) smart telemetry prototype."
    ],
    tech: ["C/C++", "Embedded C", "Python", "Arduino", "Sensors", "Robotics", "Hardware Automation"]
  }
];

export const projectsData = [
  {
    id: "gujmarg",
    title: "GujMarg -- Road Safety & Complaint Portal",
    subtitle: "Enterprise Government Road Safety & Complaint Management Platform",
    category: "Full Stack Web",
    badge: "Government Enterprise",
    period: "2024 -- Present",
    client: "Gujarat State Government / Satra Solutions",
    description:
      "A high-impact citizen complaint and road infrastructure safety platform handling civic issues across Gujarat. Features automated department dispatching, multi-level escalation timers, audit logs, and performance ranking.",
    features: [
      "Automated officer assignment driven by jurisdictional boundaries & category taxonomy",
      "Hierarchical escalation workflows with automated breach notifications",
      "Role-Based Access Control (RBAC) with granular admin, supervisor, and field-officer scopes",
      "High-throughput server-side pagination, multi-column sorting, and dynamic status filters",
      "Web Audit & Citizen Audit modules delivering public accountability and transparency",
      "Nightly scheduled Cron jobs calculating officer performance indices and automated data archival"
    ],
    architecture: {
      client: "React.js, Material UI, Vite, Axios",
      server: "Node.js, Express.js, Cron Worker Schedulers",
      database: "PostgreSQL & MongoDB",
      security: "JWT Tokens, Role-Based Route Guards, Sanitization"
    },
    tech: ["React.js", "Node.js", "Express.js", "PostgreSQL", "Cron Jobs", "RBAC", "Material UI"],
    metrics: [
      { label: "Complaint Routing", val: "100% Automated" },
      { label: "Response Visibility", val: "Real-time" },
      { label: "Escalation Levels", val: "Multi-tier" }
    ],
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: "road-furniture",
    title: "Road Furniture Asset Detection System",
    subtitle: "AI-Powered Highway Infrastructure Inventory & Inspection",
    category: "AI & Computer Vision",
    badge: "Computer Vision & AI",
    period: "2025 -- Present",
    client: "Highway & Infrastructure Survey",
    description:
      "Large-scale intelligent road-survey image and video detection system leveraging YOLOv11 deep learning models to identify, catalog, and locate highway safety assets (guard rails, signage, kilometer stones, road furniture).",
    features: [
      "Batch inference pipeline handling high-resolution survey video feeds and dashcam imagery",
      "Asynchronous job queue processing powered by Redis and background worker threads",
      "Chainage-based spatial deduplication algorithm to prevent redundant asset tallies across consecutive video frames",
      "Automated inspection report generation with georeferenced bounding boxes and confidence metrics",
      "Database integration using Prisma ORM with PostgreSQL for GIS spatial indexing"
    ],
    architecture: {
      model: "YOLOv11 custom-trained on road furniture asset classes",
      backend: "Python, FastAPI/Node.js, Prisma ORM",
      queue: "Redis Task Queue with concurrent workers",
      database: "PostgreSQL with spatial chainage mapping"
    },
    tech: ["Python", "YOLOv11", "PostgreSQL", "Prisma ORM", "Redis", "OpenCV", "Batch Processing"],
    metrics: [
      { label: "Inference Engine", val: "YOLOv11" },
      { label: "Queue System", val: "Redis Workers" },
      { label: "Deduplication", val: "Chainage-Based" }
    ],
    color: "from-emerald-600 to-teal-600"
  },
  {
    id: "nirupaa",
    title: "Nirupaa -- Fashion E-Commerce Platform",
    subtitle: "Full-Stack Retail Application with Intelligent Media Optimization",
    category: "Full Stack Web",
    badge: "Full Stack MERN",
    period: "2024 -- Present",
    client: "E-Commerce / Commercial",
    description:
      "A complete e-commerce solution offering seamless catalog browsing, dynamic price filtering, cart state management, secure checkout flows, and a dedicated admin portal for product and order lifecycle management.",
    features: [
      "Modern React storefront with instant search, multi-attribute filtering, and cart drawer",
      "Robust RESTful API architecture built on Node.js and Express.js",
      "Automated media optimization pipeline using Multer, Sharp (dynamic image resizing), and Cloudinary CDN storage",
      "JWT-based user authentication and protected admin dashboards for inventory oversight",
      "Production deployment architecture running on Vercel (frontend) and Render (backend)"
    ],
    architecture: {
      frontend: "React.js, Tailwind CSS, Responsive Cart State",
      backend: "Node.js, Express.js, REST APIs",
      database: "MongoDB Atlas",
      media: "Multer, Sharp compression, Cloudinary Storage CDN",
      deploy: "Vercel & Render"
    },
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Multer", "Sharp", "Vercel", "Render"],
    metrics: [
      { label: "Image Optimization", val: "Sharp & Cloudinary" },
      { label: "Deployment", val: "Vercel + Render" },
      { label: "Architecture", val: "MERN Stack" }
    ],
    color: "from-purple-600 to-pink-600"
  },
  {
    id: "vehicle-ai",
    title: "Vehicle Detection & Multi-Object Tracking AI",
    subtitle: "Real-Time Traffic Surveillance & Trajectory Analytics",
    category: "AI & Computer Vision",
    badge: "Deep Learning",
    period: "2024 -- Present",
    client: "Traffic Analytics / R&D",
    description:
      "High-accuracy computer vision pipeline designed for automated vehicle identification, class tagging (cars, trucks, bikes, buses), and continuous trajectory tracking across highway camera streams.",
    features: [
      "Integration of YOLO deep neural networks with BoT-SORT / ByteTrack tracking algorithms",
      "Custom dataset curation and bounding-box annotation using LabelImg and Label Studio",
      "OpenCV video stream decoding, frame rate normalization, and zone-crossing analytics",
      "Resilient tracking under challenging real-world occlusion and varied lighting conditions"
    ],
    architecture: {
      detection: "PyTorch & YOLO",
      tracking: "BoT-SORT / ByteTrack multi-object tracker",
      processing: "OpenCV frame manipulation pipeline",
      annotation: "Label Studio & LabelImg"
    },
    tech: ["Python", "PyTorch", "YOLO", "BoT-SORT", "OpenCV", "Label Studio", "LabelImg"],
    metrics: [
      { label: "Tracker", val: "BoT-SORT" },
      { label: "Model Framework", val: "PyTorch" },
      { label: "Annotation Tool", val: "Label Studio" }
    ],
    color: "from-amber-600 to-orange-600"
  },
  {
    id: "embedded-suite",
    title: "Embedded Robotics & Assistive Prototypes",
    subtitle: "Hardware-Software Integration & Assistive Mobility Systems",
    category: "Embedded / IoT",
    badge: "Hardware & Robotics",
    period: "2021 -- 2023",
    client: "Pantech R&D / Innovation Showcase",
    description:
      "A suite of autonomous robotic prototypes and assistive mobility systems merging embedded C/C++ microcontrollers, ultrasonic/IR sensor arrays, and motor driver automation.",
    features: [
      "Blind Man Wheelchair: Ultrasonic obstacle detection, auditory feedback alerts, and automated brake-triggering",
      "Auto Robo Assistant: Autonomous navigation, programmed waypoint routines, and sensor-driven collision avoidance",
      "EV Vehicle Prototype: Microcontroller-based battery monitoring, motor PWM acceleration control, and telemetry logic"
    ],
    architecture: {
      firmware: "C, C++, Embedded C",
      controller: "Arduino & Microcontrollers",
      hardware: "Sensor Arrays, PWM Motor Drivers, Power Relays"
    },
    tech: ["C", "C++", "Embedded C", "Arduino", "Sensors", "Motor Drivers", "Robotics"],
    metrics: [
      { label: "Prototypes", val: "3 Finished Systems" },
      { label: "Domain", val: "Assistive Tech & EV" },
      { label: "Core Lang", val: "Embedded C/C++" }
    ],
    color: "from-teal-600 to-indigo-600"
  }
];

export const systemPipelines = [
  {
    id: "gujmarg-flow",
    title: "GujMarg Complaint & Escalation Pipeline",
    description: "How citizen complaints flow from submission to automated officer dispatch, audit, and ranking.",
    steps: [
      {
        step: "01",
        title: "Citizen Submission",
        desc: "Citizen registers road damage/issue via portal with GPS coordinates & media upload."
      },
      {
        step: "02",
        title: "Automated Routing & RBAC",
        desc: "System inspects GIS boundaries & category to assign directly to responsible road officer."
      },
      {
        step: "03",
        title: "SLA Escalation Timer",
        desc: "Automated cron daemon monitors response windows; auto-escalates to higher authorities if breached."
      },
      {
        step: "04",
        title: "Officer Action & Verification",
        desc: "Officer completes repair with geo-tagged proof photo; citizen & web audit modules review resolution."
      },
      {
        step: "05",
        title: "Archival & Ranking Cron",
        desc: "Daily midnight job updates officer efficiency index, generates audit metrics, and archives closed tickets."
      }
    ]
  },
  {
    id: "vision-flow",
    title: "YOLOv11 Road Asset Detection & Deduplication Pipeline",
    description: "High-scale video processing architecture for automated highway furniture inventory.",
    steps: [
      {
        step: "01",
        title: "Video Survey Ingestion",
        desc: "Dashcam / survey vehicle video files ingested and sliced into synchronized keyframe batches."
      },
      {
        step: "02",
        title: "Redis Task Queue Worker",
        desc: "Asynchronous worker pool pulls frame batches to avoid GPU throttling and memory bottlenecks."
      },
      {
        step: "03",
        title: "YOLOv11 Batch Inference",
        desc: "Deep learning model detects road assets (guardrails, signs, milestones) with bounding boxes & class confidence."
      },
      {
        step: "04",
        title: "Chainage Deduplication",
        desc: "Custom spatial algorithm filters out identical assets appearing across multiple continuous frames."
      },
      {
        step: "05",
        title: "PostgreSQL & Prisma Sync",
        desc: "Persists deduplicated inventory records with highway chainage markers for GIS reporting & client dashboards."
      }
    ]
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Andhra University",
    location: "Visakhapatnam, Andhra Pradesh",
    period: "2015 -- 2019",
    grade: "First Class",
    details: "Comprehensive coursework in Data Structures, Algorithms, Database Systems, Computer Networks, and Software Engineering."
  },
  {
    degree: "Intermediate -- MPC (Maths, Physics, Chemistry)",
    institution: "Narayana Junior College",
    location: "Nidadavole, Andhra Pradesh",
    period: "2013 -- 2015",
    grade: "Distinction",
    details: "Foundational mathematics, physics, analytical reasoning, and competitive aptitude."
  }
];

export const achievementsData = [
  {
    title: "Best Trainee Certificate",
    issuer: "Karpagam Engineering College, Coimbatore",
    description: "Honored with the Best Trainee award for outstanding performance in technical workshops and hands-on software training.",
    icon: "Award"
  },
  {
    title: "Robotics & Project Presentations",
    issuer: "Academic & Tech Competitions",
    description: "Active participant and presenter in collegiate robotics design exhibitions, embedded prototype showcases, and tech symposia.",
    icon: "Cpu"
  },
  {
    title: "1st Place -- Cricket Championship",
    issuer: "NBA & Nidadavole Cricket Association",
    description: "Secured first place in regional championship tournament demonstrating strategic leadership, team spirit, and high-pressure execution.",
    icon: "Trophy"
  }
];

export const projects = [
  {
    id: "ecopack-ai",
    title: "EcoPack-AI: Sustainable Packaging Recommendation Engine",
    subtitle: "AI-Powered Packaging Material Recommendation & Cost/CO₂ Prediction System",
    category: "aiml",
    featured: true,
    badge: "AI / ML & Flask",
    github: "https://github.com/anii-123/EcoPackwithAI",
    demo: "https://ecopackailk.vercel.app",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Flask", "XGBoost", "Random Forest", "PostgreSQL", "Plotly", "Vercel"],
    overview: "An end-to-end Machine Learning web platform that recommends eco-friendly packaging materials based on product fragility, shipping requirements, cost, and sustainability weightage.",
    problem: "E-commerce and logistics companies struggle to balance packaging cost against environmental CO₂ impact while choosing suitable materials.",
    solution: "Developed dual regression models (Random Forest for Cost prediction and XGBoost for CO₂ footprint & ranking) with a dynamic multi-attribute scoring algorithm and interactive BI analytics dashboard.",
    features: [
      "Dynamic material recommendation ranking based on CO₂ emissions, cost, and strength",
      "Interactive Plotly sustainability dashboard with trend analytics",
      "PostgreSQL database integration via SQLAlchemy ORM",
      "Automated PDF & Excel report export with ReportLab",
      "RESTful API endpoints with API key security"
    ],
    metrics: {
      accuracy: "89% R² Score",
      co2Reduction: "Up to 35% CO₂ savings",
      speed: "< 200ms recommendation response"
    },
    architecture: [
      "User Interface Layer: React / Tailwind CSS interactive input form",
      "API Layer: Flask web server with REST endpoints & CORS",
      "ML Layer: Trained Random Forest & XGBoost models",
      "Database Layer: PostgreSQL dataset storage & user history"
    ]
  },
  {
    id: "farmconnect",
    title: "FarmConnect: Smart Farmer Registration & Location App",
    subtitle: "Cross-Platform Flutter Mobile Application for Agricultural Management",
    category: "mobile",
    featured: true,
    badge: "Flutter & Mobile",
    github: "https://github.com/anii-123/farmconnect",
    demo: "https://github.com/anii-123/farmconnect",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "Dart", "SQLite", "India Post API", "Geolocator", "Material 3"],
    overview: "A comprehensive mobile app designed to streamline farmer registration, automatically detect location details via PIN code lookup, and compute GPS distance to the APMC market.",
    problem: "Manual farmer registration process is prone to location data entry errors and lacks real-time distance calculations for logistics planning.",
    solution: "Engineered a 3-step registration form connected to the India Post API for automatic state/district/taluka auto-fill, integrated SQLite for offline persistence, and implemented the Haversine formula for APMC GPS distance computation.",
    features: [
      "3-Step intuitive registration form with real-time validation",
      "Automatic PIN code auto-fill via India Post postal API",
      "GPS Haversine distance calculation to APMC Market (Kalmeshwar)",
      "Offline-first local storage using SQLite (sqflite)",
      "Search, filter, and sort registered farmers by name, crop, or distance"
    ],
    metrics: {
      performance: "60 FPS smooth animations",
      validation: "100% data validation accuracy",
      offline: "100% offline database support"
    },
    architecture: [
      "Presentation Layer: Material Design 3 widgets & animations",
      "State Management: Provider pattern",
      "Location Service: Geolocator & Haversine GPS formula",
      "Database: Local SQLite persistence"
    ]
  },
  {
    id: "amazon-prime-dashboard",
    title: "Amazon Prime Video Content Analytics Dashboard",
    subtitle: "Interactive Power BI & DAX Exploratory Content Trends Dashboard",
    category: "analytics",
    featured: true,
    badge: "Power BI & Analytics",
    github: "https://github.com/anii-123/Amazon-Prime-Video-PowerBI-Dashboard",
    demo: "https://github.com/anii-123/Amazon-Prime-Video-PowerBI-Dashboard",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=1200&q=80",
    tags: ["Power BI", "DAX", "Power Query", "Data Visualization", "Excel"],
    overview: "A comprehensive business intelligence dashboard analyzing Amazon Prime Video content metadata to uncover production patterns, genre distributions, and country-wise growth trends.",
    problem: "Raw content catalogs contain unorganized metadata that makes content acquisition and genre investment decisions difficult to visualize.",
    solution: "Cleaned and transformed content data using Power Query, authored custom DAX calculations, and constructed interactive dashboard visuals.",
    features: [
      "Movies vs TV Shows distribution ratio breakdown",
      "Genre density heatmap & top genre ranking (Drama, Comedy)",
      "Geographic production analysis (USA, India leading output)",
      "Content release year-wise trajectory post-2015"
    ],
    metrics: {
      insights: "10k+ titles analyzed",
      dashboards: "5 interactive view pages",
      speed: "Instant filter cross-highlighting"
    },
    architecture: [
      "Data Source: Amazon Prime Video CSV dataset",
      "ETL Layer: Power Query cleaning & normalization",
      "DAX Engine: Measures for title counts, ratios, growth %",
      "Visualization: Power BI visual canvas"
    ]
  },
  {
    id: "productivity-wfh",
    title: "Productivity-WFH: Remote Employee Productivity Predictor",
    subtitle: "Flask ML Web Application for Remote Work Analytics",
    category: "aiml",
    featured: false,
    badge: "Flask & ML",
    github: "https://github.com/anii-123/productivity-wfh",
    demo: "https://productivity-wfh.vercel.app",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Flask", "Scikit-Learn", "Pandas", "Flask-SQLAlchemy", "Vercel"],
    overview: "A predictive analytics web application designed to model and forecast remote worker productivity based on work environment parameters, break times, and workload.",
    problem: "Organizations struggle to evaluate remote work effectiveness without intruding on employee privacy.",
    solution: "Built a machine learning classification pipeline wrapped in a clean Flask web app with user authentication and instant prediction reporting.",
    features: [
      "User authentication & session management with Flask-Login",
      "Interactive form input for work environmental metrics",
      "Scikit-Learn prediction model output with actionable suggestions",
      "SQLAlchemy database storage for historical evaluations"
    ],
    metrics: {
      deployment: "Deployed live on Vercel",
      models: "Multiple ML algorithms benchmarked"
    },
    architecture: [
      "Frontend: HTML5 / Tailwind CSS UI templates",
      "Backend: Flask Python server",
      "Model: Scikit-learn trained classifier",
      "Database: SQLite / SQLAlchemy ORM"
    ]
  },
  {
    id: "leetcode-java",
    title: "LeetCode Data Structures & Algorithms Solutions",
    subtitle: "100+ Algorithmic Problem Solutions in Java",
    category: "fullstack",
    featured: false,
    badge: "Java & DSA",
    github: "https://github.com/anii-123/leetcode_coding",
    demo: "https://github.com/anii-123/leetcode_coding",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Java", "DSA", "Algorithms", "Data Structures", "LeetCode"],
    overview: "A clean, well-documented repository containing optimal Java solutions for 100+ algorithmic problems across Arrays, Graphs, Dynamic Programming, and Trees.",
    problem: "Mastering competitive coding and software engineering interviews requires well-structured problem solutions with time/space complexity commentary.",
    solution: "Implemented modular Java classes organized by category with detailed docstrings explaining time and space complexity trade-offs.",
    features: [
      "100+ solved problems categorized by difficulty and pattern",
      "Optimal Time Complexity O(N), O(N log N) implementations",
      "Clean Java code with unit test assertions",
      "Coverage across Dynamic Programming, Graphs, Two Pointers, Trees"
    ],
    metrics: {
      solved: "100+ Problems",
      language: "100% Java",
      coverage: "Easy, Medium, Hard problems"
    },
    architecture: [
      "Language: Java 17",
      "Structure: Topic-wise packages",
      "Documentation: Time/space complexity annotations"
    ]
  },
  {
    id: "prodexa-app",
    title: "Prodexa App: Mobile Productivity Suite",
    subtitle: "Flutter Task & Resource Management Application",
    category: "mobile",
    featured: false,
    badge: "Flutter & Mobile",
    github: "https://github.com/anii-123/Prodexa_App",
    demo: "https://github.com/anii-123/Prodexa_App",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Flutter", "Dart", "SQLite", "State Management"],
    overview: "A sleek Flutter mobile application designed for personal task management, goal tracking, and daily productivity organization.",
    problem: "Users need a responsive mobile application to organize daily schedules without intrusive advertisements or cloud lock-in.",
    solution: "Created a minimalist Flutter application using local storage and custom Material design UI components.",
    features: [
      "Task creation with priority levels and due dates",
      "Category tags and status filtering",
      "Smooth animations and dark mode theme support",
      "Local data persistence"
    ],
    metrics: {
      platform: "Android & iOS ready",
      framework: "Flutter 3.x"
    },
    architecture: [
      "UI: Flutter Material Widgets",
      "Storage: SQLite local persistence"
    ]
  }
];

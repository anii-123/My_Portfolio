export const skillCategories = [
  { id: "all", label: "All Skills" },
  { id: "aiml", label: "AI / ML & Data" },
  { id: "analytics", label: "Analytics & DB" },
  { id: "mobile", label: "Mobile & Web" },
  { id: "devops", label: "DevOps & Tools" }
];

export const skills = [
  // AI/ML
  { name: "Python", category: "aiml", proficiency: 92, icon: "Py", color: "from-blue-500 to-indigo-500", desc: "Pandas, NumPy, Scikit-Learn, XGBoost, Random Forest" },
  { name: "Scikit-Learn", category: "aiml", proficiency: 88, icon: "Sk", color: "from-orange-500 to-amber-500", desc: "Classification, Regression, Clustering, Feature Engineering" },
  { name: "XGBoost", category: "aiml", proficiency: 85, icon: "Xg", color: "from-purple-500 to-pink-500", desc: "Gradient boosting, ranking algorithms, hyperparameter tuning" },
  { name: "TensorFlow", category: "aiml", proficiency: 80, icon: "Tf", color: "from-amber-500 to-red-500", desc: "Neural networks, deep learning fundamentals" },
  { name: "Pandas & NumPy", category: "aiml", proficiency: 95, icon: "Pd", color: "from-blue-600 to-cyan-500", desc: "Data cleaning, transformation, aggregation, matrix ops" },
  { name: "Plotly", category: "aiml", proficiency: 85, icon: "Pl", color: "from-cyan-500 to-teal-500", desc: "Interactive charts, dashboard visual generation" },

  // Data Analytics
  { name: "Power BI", category: "analytics", proficiency: 90, icon: "Bi", color: "from-amber-400 to-yellow-500", desc: "Interactive dashboards, DAX measures, Power Query ETL" },
  { name: "PostgreSQL", category: "analytics", proficiency: 85, icon: "Pg", color: "from-blue-600 to-indigo-600", desc: "Relational modeling, SQL queries, SQLAlchemy ORM" },
  { name: "SQLite", category: "analytics", proficiency: 90, icon: "Sq", color: "from-cyan-600 to-blue-500", desc: "Embedded databases, Flutter local storage" },
  { name: "SQL", category: "analytics", proficiency: 92, icon: "Sql", color: "from-emerald-500 to-teal-600", desc: "Complex joins, aggregations, schema design" },

  // Mobile & Web
  { name: "Flutter", category: "mobile", proficiency: 88, icon: "Fl", color: "from-cyan-400 to-blue-600", desc: "Cross-platform mobile apps, Material Design 3, State Management" },
  { name: "Dart", category: "mobile", proficiency: 88, icon: "Dt", color: "from-blue-500 to-cyan-500", desc: "Object-oriented programming, async/await, mobile runtime" },
  { name: "Flask", category: "mobile", proficiency: 88, icon: "Fk", color: "from-gray-400 to-slate-600", desc: "RESTful API development, CORS, Python backend servers" },
  { name: "Java", category: "mobile", proficiency: 90, icon: "Jv", color: "from-red-500 to-orange-600", desc: "100+ LeetCode DSA solutions, OOP architecture" },
  { name: "JavaScript", category: "mobile", proficiency: 85, icon: "Js", color: "from-yellow-400 to-amber-500", desc: "ES6+, DOM manipulation, async requests" },
  { name: "HTML5 & CSS3", category: "mobile", proficiency: 95, icon: "Ht", color: "from-orange-500 to-red-500", desc: "Semantic markup, Flexbox, Grid, Tailwind CSS" },

  // DevOps & Tools
  { name: "Git & GitHub", category: "devops", proficiency: 92, icon: "Gt", color: "from-red-500 to-pink-600", desc: "Version control, branching, PR workflows, GitHub Actions" },
  { name: "Vercel", category: "devops", proficiency: 88, icon: "Vc", color: "from-slate-200 to-gray-400", desc: "Web app deployments, automated CI/CD builds" },
  { name: "Render", category: "devops", proficiency: 85, icon: "Rn", color: "from-emerald-400 to-teal-500", desc: "Python Flask & PostgreSQL production web hosting" },
];

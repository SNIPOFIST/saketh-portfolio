export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  tech: string[];
  link?: string;
    githubLink?: string;
    period: string;
    highlights: string[];
    iconEmoji: string;
  }
  
  const projects: Project[] = [
    {
      slug: "su-hoops-sail",
      name: "SU Hoops SAIL — Injury Risk Prediction",
      githubLink: "https://github.com/sakethkilaru/SUHoops_SAIL_Project",
      description:
      "Predicting injury risk from muscle imbalance for Syracuse basketball. Built models that flag athletes whose strength ratios fall outside the safe zone.",
    longDescription:
      "Part of Syracuse University's Sports Analytics Innovation Lab (SAIL). Analyzed player physiological data to surface a 'safe zone' of muscle balance and flag athletes at risk before injuries occur, giving coaches and trainers actionable signals.",
    tech: ["Python", "Scikit-learn", "Sports Analytics", "Feature Engineering"],
    period: "2024",
    highlights: [
      "Engineered features capturing muscle imbalance (groin vs quadriceps ratios) from session-level data.",
      "Built Logistic Regression and Random Forest classifiers; explored semi-supervised approaches due to limited labeled injury data.",
      "Identified a 'safe zone' of muscle balance where injury likelihood was low, with actionable recommendations for coaching staff.",
      "Combined domain knowledge with machine learning to produce interpretable, decision-ready outputs.",
    ],
    iconEmoji: "🏀",
  },
  {
    slug: "fire-risk-dashboard",
    name: "Fire Risk Dashboard",
    githubLink: "https://github.com/sakethkilaru/fire_dashboard",
    description:
      "Interactive geospatial dashboard for surfacing high-risk fire zones. Combines geospatial layers with time-based trends for non-technical stakeholders.",
    longDescription:
      "An interactive analytics dashboard that makes fire risk data accessible and actionable. Integrates geospatial maps, time-based filters, and severity layers so decision-makers can explore risk patterns without needing technical expertise.",
    tech: ["Python", "Plotly", "Geospatial", "Dashboarding"],
    period: "2024",
    highlights: [
      "Cleaned and processed fire-related datasets, then built an interactive Plotly dashboard with map-based risk visualization.",
      "Added filters for time, region, and severity to support non-technical stakeholders.",
      "Identified high-risk zones and seasonal trends from geospatial and temporal data.",
      "Demonstrated how visualization and UX are as critical as the underlying analysis.",
    ],
    iconEmoji: "🔥",
  },
  {
    slug: "datathon26",
    name: "DataThon26 — SNIPOFIST",
    description:
      "Team predictive modeling under tight time constraints. Leaned on careful feature engineering and gradient boosting to deliver insights quickly.",
    longDescription:
      "A competitive data science challenge requiring rapid EDA, feature engineering, and model building on a messy real-world dataset. Our team prioritized interpretability and robust cross-validation to deliver strong performance on unseen data.",
    tech: ["Python", "XGBoost", "Feature Engineering", "Teamwork"],
    period: "2026",
    highlights: [
      "Performed exploratory data analysis to understand patterns and guide feature engineering.",
      "Built XGBoost and Random Forest models with cross-validation, achieving strong performance on unseen data.",
      "Identified key variables driving outcomes and delivered clear, stakeholder-ready insights under time pressure.",
      "Reinforced how feature engineering and quick prioritization are decisive in real-world competitions.",
    ],
    iconEmoji: "🏆",
  },
  {
    slug: "predictive-maintenance",
    name: "Predictive Maintenance — Failure Prediction",
    description:
      "Forecasting machine failures from sensor time-series data. ML on operational data to predict failures early and reduce costly downtime.",
    longDescription:
      "A machine learning project targeting early detection of equipment failures using sensor and time-series data. Tackled real-world challenges including imbalanced classes and noisy sensor readings to build a robust, production-ready predictor.",
    tech: ["Python", "XGBoost", "Time-Series", "IoT / Sensors"],
    period: "2025",
    highlights: [
      "Processed time-series and operational sensor data; engineered features to capture early failure signatures.",
      "Handled severely imbalanced datasets (failures are rare) using sampling strategies and threshold tuning.",
      "Built XGBoost and Random Forest models evaluated on precision, recall, and F1-score.",
      "Demonstrated how predictive ML can shift maintenance from reactive to proactive, reducing downtime.",
    ],
    iconEmoji: "⚙️",
  },
  {
    slug: "energy-forecasting",
    name: "Energy Forecasting & Peak Demand Modeling",
    description:
      "End-to-end analytics pipeline processing 50M+ rows of energy usage data to forecast July peak-load risks with interactive dashboards.",
    longDescription:
      "A large-scale data engineering and analytics project focused on processing and modeling hourly energy consumption data to predict peak demand events and help grid operators plan capacity more effectively.",
    tech: ["Python", "R", "Parquet", "SQL", "Time-Series Modeling", "Tableau"],
    period: "2024",
    highlights: [
      "Processed and joined 50 million+ rows of hourly energy usage, home attributes, and weather data using R/Python and Parquet.",
      "Built feature-engineering workflows including lag features, weather deltas, and region indicators for time-series models.",
      "Delivered an analytics layer and interactive dashboards summarizing July peak-load risks for decision-makers.",
    ],
    iconEmoji: "⚡",
  },
];

export default projects;

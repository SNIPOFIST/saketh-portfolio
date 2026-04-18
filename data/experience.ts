export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    id: "amazon",
    company: "Amazon",
    role: "Data Engineering / AI Intern",
    period: "May 2025 – Sept 2025",
    location: "Remote",
    highlights: [
      "Built and automated 3+ data ingestion pipelines using AWS Lambda, S3, CloudWatch, and Python to collect, clean, and standardize 3,500+ JIRA tickets, runbooks, and 80+ hours of training transcripts, reducing manual data preparation time by 90%.",
      "Converted messy operational data (JSON logs, CSVs, Confluence exports) into a structured analytics layer (Parquet/clean CSV), improving downstream queryability and retrieval latency for internal AI tools by 40–50%.",
      "Implemented schema validation, cleaning logic, and end-to-end job monitoring, cutting pipeline failures by 30% and improving data freshness from weekly to daily refresh.",
      "Built Power BI dashboards surfacing ingestion status, document coverage, and failure alerts, becoming the primary view for 10+ engineers and PMs.",
    ],
    tech: ["Python", "AWS Lambda", "S3", "CloudWatch", "Parquet", "Power BI"],
  },
  {
    id: "jupiter-money",
    company: "Jupiter Money",
    role: "Data and AI Trainee",
    period: "Aug 2023 – Aug 2024",
    location: "Remote",
    highlights: [
      "Built Python-based ETL workflows to process 3 years of Play Store reviews and 50,000+ SMS logs into analyzable tables (cleaning, deduplication, language detection).",
      "Engineered text-processing pipelines (regex cleaning, keyword extraction, metadata tagging) to prepare data for NLP models like BERT/BART and BERTopic.",
      "Built analytics dashboards showing issue categories, sentiment trends, and feature-level pain points used by Product & CX teams.",
      "Engineered reusable preprocessing pipelines for text analytics, enabling consistent input quality across sentiment and topic models.",
      "Supported classification model development by delivering structured datasets with improved label balance and features.",
    ],
    tech: ["Python", "ETL", "BERT", "BERTopic", "NLP", "Tableau"],
  },
  {
    id: "aethereus",
    company: "Aethereus Consulting",
    role: "AI Intern",
    period: "June 2023 – Aug 2023",
    location: "Remote",
    highlights: [
      "Built preprocessing scripts to extract and transform CRM datasets (Salesforce exports, customer records) into ML-ready tables for downstream NLP and classification tasks.",
      "Designed modular data pipelines to clean, validate, and reshape multimodal data (text + metadata) used for internal AI POCs.",
      "Collaborated with engineers on integrating transformed datasets into model-serving workflows.",
    ],
    tech: ["Python", "SQL", "Salesforce", "ML Pipelines"],
  },
];

export default experiences;

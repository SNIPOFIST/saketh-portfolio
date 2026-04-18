export interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Data Engineering",
    skills: [
      "Python",
      "SQL",
      "ETL Workflows",
      "Apache Spark",
      "Data Cleaning",
      "Schema Design",
      "API Ingestion",
      "Batch Processing",
    ],
  },
  {
    category: "Cloud & Pipelines",
    skills: ["AWS Lambda", "S3", "CloudWatch", "Snowflake", "Parquet"],
  },
  {
    category: "Analytics & ML",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "BERTopic",
      "BERT",
      "BART",
      "NLP",
    ],
  },
  {
    category: "Visualization",
    skills: ["Power BI", "Tableau", "Shiny"],
  },
  {
    category: "Tools",
    skills: ["Git", "Jupyter", "Regex", "Excel"],
  },
];

export default skillCategories;

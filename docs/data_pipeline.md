# Data Pipeline

Global Superstore CSV
        │
        ▼
PostgreSQL Database
        │
        ▼
dbt Seed
        │
        ▼
Staging Model (stg_superstore)
        │
        ▼
Dimension Models
├── dim_customer
├── dim_product
└── dim_region
        │
        ▼
Fact Table (fact_sales)
        │
        ▼
Business Metrics
        │
        ▼
Backend APIs
        │
        ▼
Frontend Dashboard & AI Analytics
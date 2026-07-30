<div align="center">

# 🚀 MetricMind

### AI-Powered Semantic Business Intelligence Engine

Transform Business Data into Actionable Insights using Artificial Intelligence, Semantic Search, and Business Intelligence.

</div>

---

# 📖 Overview

MetricMind is an AI-powered Semantic Business Intelligence (BI) Engine that enables users to analyze business data using natural language.

Instead of writing SQL queries, users can simply ask questions in plain English and receive meaningful business insights through AI-powered analytics and interactive dashboards.
---

# ✨ Key Features

- 🤖 AI-powered Natural Language Querying
- 📊 Business Intelligence Dashboards
- 🏗️ PostgreSQL Data Warehouse
- 🔄 Data Transformation using dbt
- 📈 Business Metrics & Analytics
- ⚡ FastAPI Backend Services
- 🎨 Interactive Next.js Frontend
- 🔍 Semantic Query Processing
- ✅ Automated Data Quality Testing
- 📚 Auto-generated Documentation
---

# 🏗️ System Architecture

```text
                    +----------------------+
                    |        User          |
                    +----------+-----------+
                               |
                               v
                  Natural Language Query
                               |
                               v
                    +----------------------+
                    |  AI / LLM Processing |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |   Semantic Layer     |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |   FastAPI Backend    |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    | PostgreSQL Database  |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |    dbt Warehouse     |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    | Analytics & Metrics  |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    | Next.js Dashboard    |
                    +----------------------+
```
---

# 📂 Repository Structure

```text
metric-mind/
│
├── backend/                  # FastAPI backend services
├── frontend/                 # Next.js frontend application
├── semantic-layer/           # Semantic query processing
├── warehouse/
│   └── metricmind_dbt/
│       ├── analyses/
│       ├── macros/
│       ├── models/
│       │   ├── staging/
│       │   ├── marts/
│       │   │   ├── analytics/
│       │   │   ├── facts/
│       │   │   ├── metrics/
│       │   │   └── dimensions/
│       ├── seeds/
│       ├── snapshots/
│       ├── tests/
│       └── schema.yml
│
├── datasets/
├── docs/
├── README.md
└── LICENSE
```
---

# 🛠️ Technology Stack

| Category | Technologies |
|----------|--------------|
| Programming Language | Python, SQL |
| Frontend | Next.js, React, Tailwind CSS |
| Backend | FastAPI |
| Database | PostgreSQL |
| Data Transformation | dbt (Data Build Tool) |
| AI | Groq API, Llama Models |
| Version Control | Git, GitHub |
---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/sreejagubbala/metric-mind.git
```

```bash
cd metric-mind
```

---

## 2. Create a Virtual Environment

```bash
python -m venv venv
```

### Windows

```bash
venv\Scripts\activate
```

### Linux / macOS

```bash
source venv/bin/activate
```

---

## 3. Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

---

## 4. Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 5. Configure PostgreSQL

- Install PostgreSQL.
- Create a database.
- Import the Global Superstore dataset.
- Update the database credentials in the configuration files.
---

# ▶️ Running the Project

## Start the Backend

```bash
cd backend
uvicorn main:app --reload
```

Backend URL

```
http://localhost:8000
```

---

## Start the Frontend

```bash
cd frontend
npm run dev
```

Frontend URL

```
http://localhost:3000
```

---

## Run dbt Models

```bash
cd warehouse/metricmind_dbt
```

Run all models

```bash
dbt run
```

Run tests

```bash
dbt test
```

Generate documentation

```bash
dbt docs generate
```

Serve documentation

```bash
dbt docs serve
```
---

# 🏗️ Data Warehouse

The data warehouse was developed using **PostgreSQL** and **dbt**. It transforms raw transactional data into analytics-ready models following a layered architecture.

## Staging Layer

- `stg_superstore`

Prepares and cleans the raw Superstore dataset before it is used by downstream models.

## Fact Model

- `fact_sales`

Stores sales transactions including customer, product, order, quantity, sales, discount, and profit information.

## Dimension Models

- `dim_customer`
- `dim_product`
- `dim_region`

These models organize descriptive information for efficient reporting and analysis.

## Metric Models

- Revenue Model
- Cost Model
- Profit Model
- Margin Model

These models calculate important business performance metrics.

## Analytics Models

- Monthly Sales
- Regional Sales
- Category Sales
- Top Products
- Top Customers
- Sales Trend
- Customer Segment Analysis

These analytics models provide insights into business performance from different perspectives.

-- ============================================
-- File: create_table.sql
-- Project: MetricMind - Agentic Semantic BI Engine
-- Author: Sreeja Gubbala
-- Description: Creates the Superstore Sales table
-- ============================================

DROP TABLE IF EXISTS superstore;

CREATE TABLE superstore (
    row_id INTEGER,
    order_id VARCHAR(20),
    order_date DATE,
    ship_date DATE,
    ship_mode VARCHAR(50),
    customer_id VARCHAR(20),
    customer_name VARCHAR(100),
    segment VARCHAR(50),
    country VARCHAR(50),
    city VARCHAR(100),
    state VARCHAR(100),
    postal_code VARCHAR(20),
    region VARCHAR(50),
    product_id VARCHAR(30),
    category VARCHAR(50),
    sub_category VARCHAR(50),
    product_name TEXT,
    sales DECIMAL(10,2),
    quantity INTEGER,
    discount DECIMAL(5,2),
    profit DECIMAL(10,2)
);

-- Verify the table has been created
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name = 'superstore';
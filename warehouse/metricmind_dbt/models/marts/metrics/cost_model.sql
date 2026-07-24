SELECT
    order_id,
    product_id,
    region,
    category,
    sales,
    ROUND(sales * 0.70, 2) AS estimated_cost
FROM {{ ref('fact_sales') }}
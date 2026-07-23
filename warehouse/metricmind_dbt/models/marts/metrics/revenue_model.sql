SELECT
    region,
    category,
    SUM(sales) AS total_revenue,
    COUNT(DISTINCT order_id) AS total_orders,
    SUM(quantity) AS total_quantity,
    AVG(sales) AS average_order_value
FROM {{ ref('fact_sales') }}
GROUP BY
    region,
    category
ORDER BY
    total_revenue DESC
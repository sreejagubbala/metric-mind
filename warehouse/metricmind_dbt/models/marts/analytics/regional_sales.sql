SELECT
    region,
    SUM(sales) AS total_sales,
    SUM(profit) AS total_profit,
    COUNT(order_id) AS total_orders
FROM {{ ref('fact_sales') }}
GROUP BY region
ORDER BY total_sales DESC
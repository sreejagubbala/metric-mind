SELECT
    category,
    SUM(sales) AS total_sales,
    SUM(profit) AS total_profit,
    SUM(quantity) AS total_quantity,
    COUNT(order_id) AS total_orders
FROM {{ ref('fact_sales') }}
GROUP BY category
ORDER BY total_sales DESC
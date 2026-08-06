SELECT
    segment,
    COUNT(DISTINCT customer_id) AS total_customers,
    COUNT(order_id) AS total_orders,
    SUM(sales) AS total_sales,
    SUM(profit) AS total_profit,
    AVG(sales) AS average_order_value
FROM {{ ref('stg_superstore') }}
GROUP BY segment
ORDER BY total_sales DESC
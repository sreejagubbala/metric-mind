SELECT
    customer_id,
    SUM(sales) AS total_sales,
    SUM(profit) AS total_profit,
    COUNT(order_id) AS total_orders
FROM {{ ref('fact_sales') }}
GROUP BY
    customer_id
ORDER BY
    total_sales DESC
LIMIT 10
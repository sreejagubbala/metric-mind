SELECT
    DATE_TRUNC('month', order_date) AS sales_month,
    SUM(sales) AS total_sales,
    SUM(profit) AS total_profit,
    COUNT(order_id) AS total_orders
FROM {{ ref('fact_sales') }}
GROUP BY DATE_TRUNC('month', order_date)
ORDER BY sales_month
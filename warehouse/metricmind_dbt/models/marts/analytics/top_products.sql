SELECT
    product_id,
    product_name,
    SUM(sales) AS total_sales,
    SUM(profit) AS total_profit,
    SUM(quantity) AS total_quantity
FROM {{ ref('stg_superstore') }}
GROUP BY
    product_id,
    product_name
ORDER BY
    total_sales DESC
LIMIT 10
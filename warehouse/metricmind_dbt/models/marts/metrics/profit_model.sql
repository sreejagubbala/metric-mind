SELECT
    region,
    category,
    SUM(sales) AS total_sales,
    SUM(profit) AS total_profit,
    {{ calculate_margin('profit', 'sales') }} AS profit_margin_percentage
FROM {{ ref('fact_sales') }}
GROUP BY
    region,
    category
ORDER BY
    total_profit DESC
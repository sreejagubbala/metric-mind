-- Fact table containing all sales transactions for business analytics.
SELECT
    row_id,
    order_id,
    order_date,
    ship_date,
    customer_id,
    product_id,
    region,
    category,
    sub_category,
    sales,
    quantity,
    discount,
    profit
FROM {{ ref('stg_superstore') }}
-- Staging model for cleaning and standardizing the Global Superstore dataset.
SELECT
    row_id,
    order_id,
    TO_DATE(order_date, 'MM/DD/YYYY') AS order_date,
    TO_DATE(ship_date, 'MM/DD/YYYY') AS ship_date,
    ship_mode,
    customer_id,
    customer_name,
    segment,
    country,
    city,
    state,
    postal_code,
    region,
    product_id,
    category,
    sub_category,
    product_name,
    sales,
    quantity,
    discount,
    profit
FROM public.superstore
SELECT DISTINCT
    product_id,
    product_name,
    category,
    sub_category
FROM {{ ref('stg_superstore') }}
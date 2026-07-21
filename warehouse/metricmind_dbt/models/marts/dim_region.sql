SELECT DISTINCT
    country,
    state,
    city,
    region
FROM {{ ref('stg_superstore') }}
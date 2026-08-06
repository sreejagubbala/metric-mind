-- Region dimension table.
SELECT DISTINCT
    country,
    state,
    city,
    region
FROM {{ ref('stg_superstore') }}
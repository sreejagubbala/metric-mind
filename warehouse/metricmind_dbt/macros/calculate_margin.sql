{% macro calculate_margin(profit_col, sales_col) %}
ROUND(
    (SUM({{ profit_col }}) / NULLIF(SUM({{ sales_col }}), 0)) * 100,
    2
)
{% endmacro %}
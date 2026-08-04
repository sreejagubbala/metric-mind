{% macro calculate_profit_margin(sales, profit) %}

CASE
    WHEN {{ sales }} = 0 THEN 0
    ELSE ROUND(({{ profit }} / {{ sales }}) * 100, 2)
END

{% endmacro %}
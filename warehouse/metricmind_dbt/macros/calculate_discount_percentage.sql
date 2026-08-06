{% macro calculate_discount_percentage(discount, sales) %}

CASE
    WHEN {{ sales }} = 0 THEN 0
    ELSE ROUND(({{ discount }} / {{ sales }}) * 100,2)
END

{% endmacro %}
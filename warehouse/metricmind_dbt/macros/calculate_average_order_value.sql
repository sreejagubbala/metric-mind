{% macro calculate_average_order_value(total_sales, total_orders) %}

CASE
    WHEN {{ total_orders }} = 0 THEN 0
    ELSE ROUND({{ total_sales }}/{{ total_orders }},2)
END

{% endmacro %}
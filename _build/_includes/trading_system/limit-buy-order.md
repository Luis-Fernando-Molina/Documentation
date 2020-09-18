<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "XXXXXXXXXXXXXXXX" %}
{% assign definition = site.data.trading_system.XXXXXXXXXXXXXXXX %}
{% assign preposition = "XXXXXXXXXXXXXXXX" %}
{% assign plural = "s" %}

<!--------------------------------------------- TITLE AND DEFINITION ends -->

{% if include.more == "yes" and include.heading == "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.heading != "" and include.heading != "more" %}
{{include.heading}} {{title}}
{% endif %}

{% if include.icon != "no" %} 

{% if include.table == "yes" and include.icon != "no" %}
<table class='definitionTable'><tr><td>
{% endif %}

<img src='images/icons/nodes/png{{include.icon}}/{{ title | downcase | replace: " ", "-" }}.png' />

{% if include.table == "yes" and include.icon != "no" %}
</td><td>
{% endif %}

{% endif %}

{% if include.definition == "bold" %}
<strong>{{ definition }}</strong>
{% else %}
{% if include.definition != "no" %}
{{ definition }}
{% endif %}
{% endif %}

{% if include.table == "yes" and include.icon != "no" %}
</td></tr></table>
{% endif %}

{% if include.more == "yes" and include.content == "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.content != "no" %}

<!--------------------------------------------- CONTENT starts -->Traders usually use limit orders when the priority is the rate of execution over the certainty of execution. Limit orders are much more efficient than market orders in terms of rate, particularly for larger sizes which&mdash;when executed as market orders&mdash;may suffer considerable slippage filled as fast as possible with the order book of the particular instant.Also, many exchanges regard limit orders as market makers, that is, orders that bring liquidity to the market, and, therefore, may charge relatively better fees.###### Limit Orders' RateSuperalgos users must define the rate at wish they wish the order to be filled. The exchange is responsible for not filling the order unless it can match it with bids/asks at the rate set by the user, or at a better rate.Small discrepancies between the actual rate and the order rate are to be expected, as not all exchanges handle decimals and other conversions involving, for example, fees, in the same manner.{% include note.html content="Limit orders must define a rate using the appropriate child node, otherwise, the target rate defined as an initial target is used. If no rate is defined at all, the system stops with an error upon execution. The configuration of the order deals with the size. " %}{% include tip.html content="Please read the definition of [market buy order](suite-strategies-open.html#market-buy-order) for relevant information about how orders in general work, in particular, the section about Order Size, Filling of Orders, Closing of Orders, and Spawning Multiple Orders. " %}<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->To add the {{ title | downcase }} node, select *Add Missing Items* on the parent node menu. <!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->To configure the {{ title | downcase }} node, select *Configure* on the menu. ```json{     "percentageOfAlgorithmSize": 100,      "spawnMultipleOrders": false }```* ```percentageOfAlgorithmSize``` is the definition of how much of the size handled by the algorithm shall be allocated to this particular order. Posible values are real numbers between ```0``` and ```100```, including the extremes. If you set the value to ```0```, the order will not be executed.* ```spawnMultipleOrders``` is the parameter that indicates whether additional spawned orders are allowed (```true```) or not (```false```).<!--------------------------------------------- CONFIGURING ends -->

{% endif %}

{% if include.starting != "" %}

{{include.starting}} Starting {{preposition}} {{title}}

<!--------------------------------------------- STARTING starts -->XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<!--------------------------------------------- STARTING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}
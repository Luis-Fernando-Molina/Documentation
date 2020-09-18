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

<!--------------------------------------------- CONTENT starts -->Upon each execution, the simulation verifies if the current candle intersects the rate set for the order. If it does, it uses the value in this parameter as a factor to determine and keep track of what percentage of the order is filled.The same process repeats for each subsequent candle, until the order is filled.When the parameter is not present or undefined, the simulation assumes the order is filled as soon as the rate is hit.<!--------------------------------------------- CONTENT ends -->

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

<!--------------------------------------------- CONFIGURING starts -->To configure the {{ title | downcase }} node, select *Configure* on the menu. ```json{      "fillProbability": 1}```* ```fillProbability``` indicates the probability of an order getting filled upon each tag of the price. Values may range from ```0``` to ```1```. The value ```0``` indicates that there are 0% chances of the order getting filled. With such a setting, the order will never get filled in the simulation.  The value ```1``` indicates that there is a 100% probability of the order getting filled. With such a setting, the order is filled upon the first tag of the price. A value of ```0.5``` indicates a 50% probability, thus, it takes two tags of the price for the order to fill completely with such a setting.<!--------------------------------------------- CONFIGURING ends -->

{% endif %}

{% if include.starting != "" %}

{{include.starting}} Starting {{preposition}} {{title}}

<!--------------------------------------------- STARTING starts -->XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<!--------------------------------------------- STARTING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}
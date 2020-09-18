<!-- TITLE AND DEFINITION starts -->

{% assign title = "Trigger Stage" %}
{% assign definition = site.data.trading_system.trigger_stage %}
{% assign preposition = "a" %}
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

<!--------------------------------------------- CONTENT starts -->

A trading system may have multiple strategies designed for the same market.

An important aspect of trading systems is that they are allocated a certain amount of capital (see the <a data-toggle="tooltip" data-original-title="{{site.data.network.base_asset}}">base asset</a> parameter of the trading session). As a consequence, strategies within a trading system share a certain capital allocation. 

The logic behind the concept of the trigger stage assumes that different strategies within a trading system may be specialized for trading in different market situations. The trigger stage in each strategy is, therefore, the mechanism by which any particular strategy within the trading system may be selected to trade, given any particular market situation.

The triggering-on of a strategy effectively blocks the selection of any other strategy in the trading system and reserves the whole capital allocation for the one strategy selected, until the strategy is triggered-off.

Therefore, if certain strategies are meant to trade under the same market situations and open trades concurrently, then those strategies should be deployed in separate trading systems.

Once a strategy is triggered, the strategy may decide&mdash;or not&mdash;to take a position. If a position is taken, then the rest of the stages eventually become active.

However, the strategy may also be triggered off without taking a position. When a strategy is triggered off, the trading system goes back to monitoring the trigger-on definitions for all strategies, and capital is released to be used by whatever strategy is triggered-on next.

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add a trigger stage node, select *Add Missing Stages* on the strategy node menu. All stages that may be missing are created along with the rest of the basic structure of nodes required to define each of them and their events.

{% include note.html content="Only one trigger stage may exist in each strategy." %}

<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

<!--------------------------------------------- CONFIGURING ends -->

{% endif %}

{% if include.starting != "" %}

{{include.starting}} Starting {{preposition}} {{title}}

<!--------------------------------------------- STARTING starts -->

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

<!--------------------------------------------- STARTING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}
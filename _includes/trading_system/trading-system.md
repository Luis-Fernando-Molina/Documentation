<!-- TITLE AND DEFINITION starts -->

{% assign title = "Trading System" %}
{% assign definition = site.data.trading_system.trading_system %}
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

In practical terms, a trading system is a hierarchical arrangement organizing the actionable aspects of your investment plan. The hierarchy contains definitions regarding any number of trading strategies, all operating on the same market and sharing the same initial capital allocation.

You use a trading system to define strategies following the <a data-toggle="tooltip" data-original-title="{{site.data.concepts.superalgos_protocol}}">Superalgos Protocol</a>, splitting strategies into four stages: trigger, open, manage, and close.

The concept of describing strategies in stages is fundamental to the methodical aspect of the trading system, as it provides a framework to run every strategy with the same framework, which contributes to developing scalable trading systems that may grow to any number of strategies.

When a trading system features more than one strategy, the first strategy has precedence over the second, the second over the third, and so on. This means that strategies are evaluated in a sequence. When a given strategy is triggered-on, the remaining strategies in the queue are no longer evaluated until the strategy triggers off. In other words, when multiple strategies are deployed within a single trading system, only one strategy may trade at any given moment, and precedence is given by the order around the trading system node.

As a corollary to the above, if you wish strategies to operate in different markets, or you wish strategies to be able to take positions simultaneously, then you must set up those strategies in different trading systems.

{% include important.html content="Changes made to trading systems shipping with Superalgos may not be saved at the workspace level. If you wish to modify those hierarchies and use them in such modified versions, you need to clone them and modify the clone instead." %}

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add a trading system, select *Add Trading System* on the workspace node menu. 

{% include tip.html content="You may work with as many trading systems as you wish" %}

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
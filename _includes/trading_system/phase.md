<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Phase" %}
{% assign definition = site.data.trading_system.phase %}
{% assign preposition = "a" %}
{% assign plural = "" %}

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

The default management of phases is sequential, meaning that phase 2 comes after phase 1, phase 3 comes after phase 2, and so on. 

To switch from one phase to the next phase in the sequence, the next phase event is used. When the situation described in the next phase event validates ```true```, the switch occurs and the next phase becomes the active phase.

However, management does not need to happen sequentially. By using the move to phase event instead of the next phase event, the system may activate any other phase and not just the one next in the sequence.

Both events may be used at the same time, and whichever event is triggered first takes precedence.

{% include note.html content="Notice that stop loss and take profit phases are independent and defined separately from each other, each below the corresponding managed stop loss and managed take profit nodes." %}

{% include note.html content="The value of the target set for a phase is expressed by a formula. Learn more about [formulas](suite-situations-conditions-formulas.html) and how to write them." %}

{% include tip.html content="This explanation about phase 1 may be extended to any other phase, as they all work similarly, and it applies both for managed stop loss phases and managed take profit phases." %}

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about phases
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} Phase Node

<!--------------------------------------------- ADDING starts -->

To add a new phase, select *Add Phase* on the stop or take-profit node menu. A new phase is added along with the basic structure of nodes required to define each of them and their events.

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
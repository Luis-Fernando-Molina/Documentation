<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Data Storage" %}
{% assign definition = site.data.network.data_storage %}
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

Bot instances running on the data mining and trading sections of a network node produce data products that need to be stored somewhere, specifically. The data storage node and its chain of offspring determine which data is to be stored where; that is, in what network node.

Like with the data mining section and the sections referring to trading operations (testing and production environments), the data storage section is too organized by exchange, market, and data or trading mines. See the [sorting of tasks](suite-sorting-of-tasks.html) page for the details.

The storage of data is split between [data mines data](suite-data-mines-data.html) and [trading mines data](suite-trading-mines-data.html). This is to facilitate the management of data storage definitions in [trading farms](suite-fundamental-trading-farms-concepts.html), on which data mining operations may be separate from trading operations.

The data stored on each node of the network may be accessed by others, including the charting system, to visualize information via plotters defined in data mines, by trading systems to make trading decisions, and even by third-party systems. The information regarding trading mine data is explained in length in the [trading engine](suite-trading-engine.html) section of the documentation.

The setup of data storage definitions is done automatically when the [install market](suite-how-to-install-a-new-market.html) function under the exchange markets node of the Crypto Ecosystem hierarchy is used. However, when data mining or trading tasks are created manually, the data storage definitions must be created manually as well, using the tools available in each of the data structures below this node.

{% include node-deletion-warning.html %}

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add a data storage, select *Add Data Storage* on the network node menu. 

{% include note.html content="Only one data storage node may exist on each network node." %}

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
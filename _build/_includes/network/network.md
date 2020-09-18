<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "XXXXXXXXXXXXXXXX" %}
{% assign definition = site.data.network.XXXXXXXXXXXXXXXX %}
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

<!--------------------------------------------- CONTENT starts -->The network hierarchy defines where in the network you run each of the bots you choose to run, and where the data they output is stored. You will use the network hierarchy for the following purposes:* To control your data mining operation&mdash;that is, tasks running <a data-toggle="tooltip" data-original-title="{{site.data.concepts.sensor_bot}}">sensor</a> and <a data-toggle="tooltip" data-original-title="{{site.data.concepts.sensor_bot}}">indicator bots</a>. Data mining tasks process data that may be consumed by others; for example, so that your trading systems may count with quality information.* To control your testing environment&mdash;that is, trading sessions including <a data-toggle="tooltip" data-original-title="{{site.data.network.backtesting_session}}">backtesting</a> and <a data-toggle="tooltip" data-original-title="{{site.data.network.paper_trading_session}}">paper trading</a> sessions.* To control your production environment&mdash;that is, <a data-toggle="tooltip" data-original-title="{{site.data.network.forward_testing_session}}">forward testing</a>, and <a data-toggle="tooltip" data-original-title="{{site.data.network.live_trading_session}}">live trading sessions</a>.* To manage the storage of the data produced by the bots you run as outputs. This includes administering the physical locations on which the data products produced by bots reside.{% include note.html content="These processes may run together on a single machine, or may be distributed across a network of machines, or what we call a [trading farm](suite-fundamental-trading-farms-concepts.html). " %}{% include warning.html content="At this stage, the system does not implement any form of security measures, therefore, Superalgos is to be run in the context of a restricted Local Area Network only, unless you implement your own network security." %}<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<!--------------------------------------------- CONFIGURING ends -->

{% endif %}

{% if include.starting != "" %}

{{include.starting}} Starting {{preposition}} {{title}}

<!--------------------------------------------- STARTING starts -->XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<!--------------------------------------------- STARTING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}
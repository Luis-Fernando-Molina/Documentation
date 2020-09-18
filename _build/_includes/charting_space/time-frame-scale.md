<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "XXXXXXXXXXXXXXXX" %}
{% assign definition = site.data.charting_space.XXXXXXXXXXXXXXXX %}
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

<!--------------------------------------------- CONTENT starts -->When the time frame scale is set at the level of the time machine, the scale setting affects all charts within the time machine. When set at the level of the timeline chart, the setting overrides the time frame scale at the time machine level. This allows comparing charts in different time frames, but still synchronized at the datetime level.<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.charts != "" %}

{{include.charts}} Controlling the {{title}} from the Charts

<!--------------------------------------------- CHARTS starts -->**1. To set a time frame value**, place the mouse pointer over the corresponding time machine or timeline chart time frame box and scroll the mouse wheel.{% include image.html file='interface/time-frame-scale-00.gif' url='yes' max-width='100' caption='To set a time frame, scroll the wheel of the mouse over the time frame scale box.' %}<!--------------------------------------------- CHARTS ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->To add a time frame scale, select *Add Time Frame Scale* on the time machine or the timeline chart node menu.<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->Select *Configure Frame Scale* on the menu to access the configuration.```json{    "value":"06-hs"}```* ```value``` can be any of the time frames supported by the system:  * ```01-min```, ```02-min```, ```03-min```, ```04-min```, ```05-min```, ```10-min```, ```15-min```, ```20-min```, ```30-min```, ```40-min```, and ```45-min```.  * ```01-hs```, ```02-hs```, ```03-hs```, ```04-hs```, ```06-hs```, ```08-hs```, ```12-hs```, and ```24-hs```.  {% include note.html content="The values entered via the design space and the charts are synchronized and stored in the node." %}<!--------------------------------------------- CONFIGURING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}
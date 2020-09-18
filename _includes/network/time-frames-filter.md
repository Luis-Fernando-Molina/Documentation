<!-- TITLE AND DEFINITION starts -->

{% assign title = "Time Frames Filter" %}
{% assign definition = site.data.network.time_frames_filter %}
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

Limiting the number of time frames calculated by any given indicator to the few that may be required by a particular trading system has a significant positive impact on performance: it reduces the load on the CPU, the memory requirements, and the requirements of storage space, in proportion with the time frames you remove.

When a time frames filter is set up, a ```Time.Frames.json``` file is created by the indicator process in the corresponding output folder. This file is read by others&mdash;such as the charting system&mdash;to get the information regarding which time frames are available and which are not, to avoid reporting errors.

{% include important.html content="Before applying a time frames filter or changing the configuration, that is, changing which time frames are produced and which are not, it is highly recommended to delete the data corresponding to the affected indicator, to avoid inconsistencies in the data that may later cause confusion." %}

{% include note.html content="When no time frames filter is defined, the bot processes all time frames by default." %}

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add the {{ title | downcase }} node, select *Add {{ title }}* on the parent node menu. 

<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->

Select *Configure* on the menu to access the configuration.

```json
{ 
"dailyTimeFrames": [ "45-min", "40-min", "30-min", "20-min", "15-min", "10-min", "05-min", "04-min", "03-min", "02-min", "01-min" ],
"marketTimeFrames": [ "24-hs", "12-hs", "08-hs", "06-hs", "04-hs", "03-hs", "02-hs", "01-hs"]
}
```

* ```dailyTimeFrames``` features the time frames corresponding to the *daily files* type of data structure; in practical terms, the time frames below one hour.

* ```marketTimeFrames``` features the time frames corresponding to the *market files* type of data structure; in practical terms, the time frames of one hour and above.

{% include tip.html content="Remove the time frames you are not interested in, making sure the JSON file is still valid." %}

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


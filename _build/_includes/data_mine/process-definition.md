<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "XXXXXXXXXXXXXXXX" %}
{% assign definition = site.data.data_mine.XXXXXXXXXXXXXXXX %}
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

<!--------------------------------------------- CONTENT starts -->As hinted above, most bots&mdash;in particular indicators&mdash;have two different processes. The reason is that different data structures need to be handled in different manners. The Multi-Period-Daily process handles *daily files*, while the Multi-Period-Market process handles *market files*.The Multi-Period-Market process deals with time frames of one hour and above. Because these time frames produce relatively small numbers of records, the process builds one single file per time frame spanning the whole market history&mdash;hence the name Multi-Period-*Market*.On the other hand, the Multi-Period-Daily process deals with time frames below one hour. These time frames produce huge numbers of records, therefore, the corresponding data must be fragmented in multiple files. The Multi-Period-Daily process builds one file per day for each time frame&mdash;hence the name Multi-Period-*Daily*.{% include note.html content="The way in which datasets are structured by each of the processes is determined by the corresponding dataset definitions." %}<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->To add a process definition, select *Add Process Definition* on the bot's menu. A process definition node is created along with the basic structure of nodes comprising the definition.<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->Select *Configure Process* on the menu to access the configuration.**Multi-Period-Market:**```json  {    "codeName": "Multi-Period-Market",    "normalWaitTime": 0,    "retryWaitTime": 10000,    "framework": {      "name": "Multi-Period-Market"    }  }```**Multi-Period-Daily:**```json  {    "codeName": "Multi-Period-Daily",    "normalWaitTime": 0,    "retryWaitTime": 10000,    "framework": {      "name": "Multi-Period-Daily"    }  }```* ```codeName``` is the name of the process as used within the code of the system.<!--------------------------------------------- CONFIGURING ends -->

{% endif %}

{% if include.starting != "" %}

{{include.starting}} Starting {{preposition}} {{title}}

<!--------------------------------------------- STARTING starts -->XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<!--------------------------------------------- STARTING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}
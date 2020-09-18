<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "XXXXXXXXXXXXXXXX" %}
{% assign definition = site.data.trading_engine.XXXXXXXXXXXXXXXX %}
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

<!--------------------------------------------- CONTENT starts -->In the context of the base asset or the quoted asset, the calculation is done by subtracting the balances in the corresponding assets, using the variable appropriate to the larger context (i.e.: episode, position, etc.).*In general terms:** ```base asset profit loss = base asset end balance - base asset begin balance```* ```quoted asset profit loss = quoted asset end balance - quoted asset begin balance```*In the case of the episode base asset and episode quoted asset:*```tradingEngine.current.episode.episodeBaseAsset.profitLoss.value =    tradingEngine.current.episode.episodeBaseAsset.balance.value -    sessionParameters.sessionBaseAsset.config.initialBalance    tradingEngine.current.episode.episodeQuotedAsset.profitLoss.value =    tradingEngine.current.episode.episodeQuotedAsset.balance.value -    sessionParameters.sessionQuotedAsset.config.initialBalance```*In the case of the position base asset and position quoted asset:*```tradingEngine.current.position.positionBaseAsset.profitLoss.value =    tradingEngine.current.episode.episodeBaseAsset.balance.value -    tradingEngine.current.position.positionBaseAsset.beginBalance    tradingEngine.current.position.positionQuotedAsset.profitLoss.value =    tradingEngine.current.episode.episodeQuotedAsset.balance.value -    tradingEngine.current.position.positionQuotedAsset.beginBalance```In the context of the episode statistics or the position statistics, the calculation is done consolidating the profits of both assets. {% include note.html content="When the context does not refer to either of the assets in particular, then both assets are taken into account in the calculation." %}*In the context of the episode statistics:*```tradingEngine.current.episode.episodeStatistics.profitLoss.value =    tradingEngine.current.episode.episodeBaseAsset.profitLoss.value *     tradingEngine.current.episode.candle.close.value +    tradingEngine.current.episode.episodeQuotedAsset.profitLoss.value```*In the context of the position statistics:*```tradingEngine.current.position.positionStatistics.profitLoss.value =    tradingEngine.current.episode.episodeBaseAsset.profitLoss.value *     tradingEngine.current.position.endRate.value +    tradingEngine.current.episode.episodeQuotedAsset.profitLoss.value```<!--------------------------------------------- CONTENT ends -->

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

<!--------------------------------------------- CONFIGURING starts -->XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<!--------------------------------------------- CONFIGURING ends -->

{% endif %}

{% if include.starting != "" %}

{{include.starting}} Starting {{preposition}} {{title}}

<!--------------------------------------------- STARTING starts -->XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX<!--------------------------------------------- STARTING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}
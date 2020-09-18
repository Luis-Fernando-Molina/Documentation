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

<!--------------------------------------------- CONTENT starts -->In other words, it is the equivalent annual return received over a given period.*The formula:*```annualized rate of return = (((investment + profits) / investments) ^ (365 / days)) - 1```In the context of the episode base asset and episode quoted asset, the calculation is done relative to the corresponding assets, and the overall context.*The formulas:*```tradingEngine.current.episode.episodeBaseAsset.annualizedRateOfReturn.value = ((( tradingEngine.current.episode.episodeBaseAsset.beginBalance.value +tradingEngine.current.episode.episodeBaseAsset.profitLoss.value ) / tradingEngine.current.episode.episodeBaseAsset.beginBalance.value) ^(365 / tradingEngine.current.episode.episodeStatistics.days.value)) - 1tradingEngine.current.episode.episodeQuotedAsset.annualizedRateOfReturn.value = ((( tradingEngine.current.episode.episodeQuotedAsset.beginBalance.value +tradingEngine.current.episode.episodeQuotedAsset.profitLoss.value ) / tradingEngine.current.episode.episodeQuotedAsset.beginBalance.value) ^(365 / tradingEngine.current.episode.episodeStatistics.days.value)) - 1```*The JavaScript code:*```jstradingEngine.current.episode.episodeBaseAsset.annualizedRateOfReturn.value = Math.pow(             ( tradingEngine.current.episode.episodeBaseAsset.beginBalance.value +             tradingEngine.current.episode.episodeBaseAsset.profitLoss.value ) /              tradingEngine.current.episode.episodeBaseAsset.beginBalance.value             ,              (365 / tradingEngine.current.episode.episodeStatistics.days.value)        ) - 1tradingEngine.current.episode.episodeQuotedAsset.annualizedRateOfReturn.value = Math.pow(             ( tradingEngine.current.episode.episodeQuotedAsset.beginBalance.value +             tradingEngine.current.episode.episodeQuotedAsset.profitLoss.value ) /              tradingEngine.current.episode.episodeQuotedAsset.beginBalance.value             ,              (365 / tradingEngine.current.episode.episodeStatistics.days.value)        ) - 1```In the context of the episode statistics, the calculation is done using the consolidated balance, as explained in the profit loss definition. {% include note.html content="When the context does not refer to either of the assets in particular, then both asset balances are consolidated, and denominated in the quoted asset." %}*The JavaScript code:*```jstradingEngine.current.episode.episodeStatistics.annualizedRateOfReturn.value =Math.pow(            (                tradingEngine.current.episode.episodeBaseAsset.beginBalance.value *                 tradingEngine.current.episode.beginRate.value +                tradingEngine.current.episode.episodeQuotedAsset.beginBalance.value +                tradingEngine.current.episode.episodeBaseAsset.profitLoss.value +                tradingEngine.current.episode.episodeQuotedAsset.profitLoss.value            ) /             (                tradingEngine.current.episode.episodeBaseAsset.beginBalance.value *                 tradingEngine.current.episode.beginRate.value +                tradingEngine.current.episode.episodeQuotedAsset.beginBalance.value             )         ,             (                365 / tradingEngine.current.episode.episodeStatistics.days.value            )         ) - 1```<!--------------------------------------------- CONTENT ends -->

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
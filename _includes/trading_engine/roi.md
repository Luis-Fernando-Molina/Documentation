<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "ROI" %}
{% assign definition = site.data.trading_engine.ROI %}
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

In general financial terms, ROI is equal to the *Net Return on Investment* divided by the *Cost of Investment*, expressed as a percentage.

In Superalgos, the *Net Return on Investment* is the profit loss, as defined elsewhere. The *Cost of Investment* is solely the begin balance, as the fees are subtracted from the balance to calculate the profit loss, so we don't need to account for them in the divisor side of the ratio.

*That is:*

```ROI = profit loss / begin balance * 100```

In the context of the episode base asset and episode quoted asset, the calculation is done relative to the corresponding assets, and the overall context.

*The formula:*

```
tradingEngine.current.episode.episodeBaseAsset.ROI.value =
    tradingEngine.current.episode.episodeBaseAsset.profitLoss.value /
    tradingEngine.current.episode.episodeBaseAsset.beginBalance.value * 100 
    
tradingEngine.current.episode.episodeQuotedAsset.ROI.value =
    tradingEngine.current.episode.episodeQuotedAsset.profitLoss.value /
    tradingEngine.current.episode.episodeQuotedAsset.beginBalance.value * 100
```

In the context of the position base asset and position quoted asset, the size filled is used instead of the balance, so that ROI may be properly calculated for complex execution algorithms.

*The formula:*

```

tradingEngine.current.position.positionBaseAsset.ROI.value =
    tradingEngine.current.position.positionBaseAsset.profitLoss.value * 100 /
    tradingEngine.current.strategyOpenStage.stageBaseAsset.sizeFilled.value
    
tradingEngine.current.position.positionQuotedAsset.ROI.value =
    tradingEngine.current.position.positionQuotedAsset.profitLoss.value * 100 /
    tradingEngine.current.strategyOpenStage.stageQuotedAsset.sizeFilled.value

```

In the context of the episode statistics, the calculation is done using the consolidated balance, as explained in the profit loss definition. 

{% include note.html content="When the context does not refer to either of the assets in particular, then both asset balances are consolidated, and denominated in the quoted asset." %}

*The formula:*

```
tradingEngine.current.episode.episodeStatistics.ROI.value =
    (
        tradingEngine.current.episode.episodeBaseAsset.profitLoss.value * 
        tradingEngine.current.episode.endRate.value +
        tradingEngine.current.episode.episodeQuotedAsset.profitLoss.value
    ) / (
        tradingEngine.current.episode.episodeBaseAsset.beginBalance.value * 
        tradingEngine.current.episode.beginRate.value +
        tradingEngine.current.episode.episodeQuotedAsset.beginBalance.value
    ) * 100
```


<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add the {{ title | downcase }} node, select *Add Missing Items* on the parent node menu. 

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
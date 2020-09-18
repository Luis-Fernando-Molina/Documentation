<!-- TITLE AND DEFINITION starts -->

{% assign title = "Formula" %}
{% assign definition = site.data.trading_system.formula %}
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

In the context of a trading system, formulas are used to determine the values for several properties, such as the target rate, target size, managed stop loss, managed take profit, and so on.

Formulas may use indicators and trading engine properties. The main difference between writing a formula and writing a condition is that while conditions must evaluate to ```true``` or ```false```, formulas must evaluate to a number.

**A simple math example:**

This simple formula may be used to define an initial take profit target 3% above the rate at which the position was taken.

```
tradingEngine.current.position.entryTargetRate.value * 1.03
``` 

{% include note.html content="You may use any variable made available by the trading engine, as explained on the [accessing runtime data](suite-trading-engine-accessing-runtime-data.html) page." %}

**A simple JavaScript example:**

A bit of very basic JavaScript, introducing conditional statements, allows more intelligence. For example, in this case, we ask if the proposed formula results in a number greater than the current stop loss value; if it does, then the proposed formula is used; if not, then the current stop loss value is left as is.

This is&mdash;basically&mdash;a trailing stop loss 2% below the moving average that may go higher if the moving average goes up, but it may never come down&mdash;thanks to the use of the IF ELSE clause.

```js
if (chart.at01hs.bollingerBand.movingAverage * 0.98 > tradingEngine.current.position.stopLoss.value) 
   {chart.at01hs.bollingerBand.movingAverage * 0.98} 
   else 
   {tradingEngine.current.position.stopLoss.value}
```

**For developers:**

To build more complex logic within a formula, create a function that implements the logic and returns a numerical value, and then call the function:

```js
function orderRate() {
    const ORDER_STEP_NUMBER = 1    // Secuential step number, starting with 1 from the closest to the price.
    const BUY_SELL_SIGN = -1       // 1 for buy orders, -1 for sell orders.
    const STEP_SEPARATION = 0.15   // % of separation of stair steps between them.
    const BASE_FACTOR = 0.2        // % above or below bollinger band without bias.
    const BIAS_FACTOR = 0.3        // % to move the whole stair of orders up or down depending on the bias.
    const BAND_RATE = chart.at01min.bollingerBand.lowerBand    //  Upper Bollinger Band for sell orders, and Lower for buy orders.

    let inbalance = tradingEngine.current.episode.episodeBaseAsset.beginBalance.value - tradingEngine.current.episode.episodeBaseAsset.balance.value

    let BIAS_SIGN

    if (inbalance === 0) {
        BIAS_SIGN = 0
    }
    if (inbalance < 0) {
        BIAS_SIGN = + 1
    }
    if (inbalance > 0) {
        BIAS_SIGN = - 1
    }

    let rate = BAND_RATE + BUY_SELL_SIGN * BAND_RATE * (BASE_FACTOR + ORDER_STEP_NUMBER * STEP_SEPARATION + BIAS_SIGN * BIAS_FACTOR) / 100

    return rate
}

orderRate()
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

To add a formula, select *Add Formula* on the corresponding parent node menu.

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
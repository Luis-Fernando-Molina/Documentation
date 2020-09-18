<!-- TITLE AND DEFINITION starts -->

{% assign title = "Time Frame" %}
{% assign definition = site.data.network.time_frame %}
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

In the context of backtesting sessions, what time frame you decide to run the session depends on the trading system being tested. If the trading system makes decisions based on the 1-hour candle and above, then ```01-hs``` may be the best choice. However, if decisions are influenced by sub-hour candles then you should match the time frame accordingly.

In other words, in backtesting sessions, you should match the time frame to the smallest period on which the trading system makes decisions.

In the context of live sessions, that is, paper trading, forward testing, and live trading, you should run the session on the ```01-min``` time frame so that the trading bot reacts fast when the price tags the take profit or stop loss targets. Remember that stop and take profit orders are not placed at the exchange after the take position event, that is, once you enter the position. Instead, the trading bot checks the current price upon each execution cycle and determines whether targets have been hit or not. If targets are hit, only then orders are placed. That is why running live trading sessions at the ```01-min``` time frame is recommended. Learn more about the [management](suite-strategies-manage.html) of take profit and stop loss targets.

If for whatever reason you don't need to minimize the potential for slippage when hitting stop or take profit targets, you may choose whatever time frame you like, taking into account the explanations below.

{{include.heading}}## Why the Time Frame Matters

{% include callout.html type="success" content="Running trading sessions of any given trading system on different time frames may produce different results. This is because the behavior of a trading session may vary depending on how well the time frame on which the session is run matches the logic of the strategy." %}

This is why:

The trading bot evaluates closed candles only. At any given point in time, the current candle in each time frame is the candle that closed last.

*For example:*

Let's say it's ```2020-06-11T11:39:30:00.000Z```, that is, 11 hours, 39 minutes and 30 seconds of June 11th, 2020.

* The current 1-minute candle is the one which closed at 11:38:59.999.
* The current 5-minute candle is the one which closed at 11:34:59.999.
* The current 30-minute candle is the one which closed at 11:29:59.999.
* The current 1-hour candle is the one which closed at 10:59:59.999.
* The current 2-hour candle is the one which closed at 09:59:59.999.
* The current 6-hour candle is the one which closed at 05:59:59.999.
* The current 24-hour candle is the one which closed at 23:59:59.999 of June 10th!

... and so on.

Let's say the trading system implements conditions that evaluate 30-minute and 1-hour candles.

If a session is run at the 30-minutes time frame, all 30-minutes candles are evaluated. Also, all 1-hour candles are evaluated twice.

However, if the session is run at the 1-hour time frame, only one out of two 30-minute candles are evaluated.

And if the session is run at the 2-hour time frame, only one out of four 30-minute candles and one out of two 1-hour candles are evaluated.

This means that running the session (for this particular trading system) at the 30-minute time frame has higher probabilities of conditions evaluating 30-minute candles to be ```true``` during the session.

{% include callout.html type="success" content="In other words, when running the session on time frames higher than the time frame on which decisions are made, chances are the bot will eventually skip candles on which conditions would have evaluated true, potentially skipping trading opportunities." %}

The above is true for all types of trading sessions.

{{include.heading}}## Backtesting Vs. Live Sessions

In a backtesting session, the collection of candles evaluated is determined by the time frame selected to better simulate what would happen if the live trading session was run in the same time frame.


<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add a parameter that may be missing, select *Add Missing Params* on the parameters node menu. 

<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->

Select *Configure Time Frame* on the menu to access the configuration.

```js
{
"value": "01-min"
}
```

* ```value``` is the setting for the time frame. You may use any of the values below.

Available options at the sub-hour level are:

```json
01-min
02-min
03-min
04-min
05-min
10-min
15-min
20-min
30-min
45-min
```

Available options at larger time frames are:

```json
01-hs
02-hs
03-hs
04-hs
06-hs
08-hs
12-hs
24-hs
```

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


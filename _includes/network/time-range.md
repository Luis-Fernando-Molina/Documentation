<!-- TITLE AND DEFINITION starts -->

{% assign title = "Time Range" %}
{% assign definition = site.data.network.time_range %}
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

The parameter offers precise control over the duration, starting and ending points of the session. Several options are available, and there are differences in how backtesting and the rest of the types of trading sessions function in this regard. 

Check the configuration to learn more.

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

Select *Configure Time Range* on the menu to access the configuration. The configuration varies slightly depending on the type of session you are running.

{{include.configuring}}# On Backtesting Sessions

```json
{
"initialDatetime": "2019-09-01T00:00:00.000Z",
"finalDatetime": "2019-09-25T00:00:00.000Z"
}
```

* ```initialDatetime``` is the datetime the session starts at.

* ```finalDatetime``` is the datetime the session finishes at. If you don't set a *finalDatetime*, the session runs until the date data is available.

{{include.configuring}}# On Paper Trading, Forward Testing and Live Trading Sessions

```json
{
"initialDatetime": "2019-09-01T00:00:00.000Z",
"finalDatetime": "2019-09-25T00:00:00.000Z",
"allowStartingFromThePast": false
}
```

* ```finalDatetime``` is the datetime the session finishes at. If you don't set a *finalDatetime* at the level of the testing session or the trading system, then the session runs for one year.

By default, paper trading, forward testing and live trading sessions start at the datetime the session is run, that is, the present time. Such a behavior is in accordance with the most common use case, by which a user starting a new live trading session usually wishes the session to start at that moment.

However, users have requested to be allowed to start live sessions in the past. Such a feature may be useful, for example, to take an opportunity that was just missed for whatever reason, including technical ones.

* ```initialDatetime```, in combination with the ```allowStartingFromThePast``` parameter, is a hack to allow a live session to start from a date in the past. If there is a valid ```initialDatetime``` and ```allowStartingFromThePast``` is ```true```, then the live session effectively starts from the specified date in the past. If ```allowStartingFromThePast``` is ```false``` the ```initialDatetime``` is ignored and the session starts from the present time.

* ```allowStartingFromThePast``` may be ```true``` or ```false```.

{% include warning.html content="In the case of forward testing and live trading sessions, starting from the past may involve placing orders at the exchange while evaluating past events. That is, if conditions to take a position and place orders validate true for candles in the past, the position is taken and orders are placed." %}

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
<!-- TITLE AND DEFINITION starts -->

{% assign title = "Manage Stage" %}
{% assign definition = site.data.trading_system.manage_stage %}
{% assign preposition = "the" %}
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

The first and foremost rule of trading is to preserve capital and its main goal is to increase it.

Conceptually, a position is not an instantaneous event, but an event which has an opening, a period of maturation, and a closing. The management of the position happens throughout the process.

The concept of managing the position refers to the fact that the formulas that determine the take profit and stop loss targets may change as the position develops. A typical situation in which you may want to change your original take profit and stop loss formulas is when the position seems to be developing well in your favor.

It may be in your best interest to manage the stop loss, moving the target in the direction that would help protect unrealized profits. It may also be in your interest to move the take profit target to extract a larger profit than originally expected. Or you may wish to set up a mechanism that closes the trade as soon as a certain market situation materializes.

The management of take profit and stop loss is done independently of each other, in phases. Therefore, each concept has its own set of management phases.

Each phase has its formula to describe the corresponding target. Users may define situations in which the current phase shall be abandoned and a different phase&mdash;with its formula&mdash;shall be implemented. 

Keep in mind that the position is in constant development, so there may be as many phases as you deem appropriate for your particular strategy.

The idea of managing targets in phases derives from the notion that big market moves tend to provide clues as to what may come up next. For instance, rallies may accelerate as more traders join the move. Recognizable patterns may emerge. Signs of exhaustion may be identified.

All of these considerations may feed the dynamic analysis performed in each phase as the position develops.

Upon execution, the system verifies if the current candle has tagged either of the targets. If&mdash;or when&mdash;it does, the close stage kicks in and closing execution begins.

{% include callout.html type="success" content="It is crucial to understand that Superalgos does not place orders to close a position until the stop loss or take profit targets are hit. That is, stop loss and take profit are not orders sitting at the exchange waiting to be filled at a certain rate. Instead, Superalgos keeps track of targets internally, and places the orders at the exchange during the execution cycle in which it detects either of the targets has been hit." %}

This behavior has advantages and disadvantages, but it was designed as is because the former outweigh the latter.

By not placing stop or take profit orders at the exchange, Superalgos keeps your targets&mdash;and the underlying strategy&mdash;secret. This guarantees that such a crucial piece of information may not be used against you by the exchange itself or any third party that may have access to privileged information.

On the other hand, not placing a stop order in advance may occasionally cause relatively more slippage, for instance, in cases of massive flash market moves. 

That said, the default behavior of the system may be hacked to avoid the eventual risk of excessive slippage: set your stop loss and take profit targets tighter than intended.

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add a manage stage node, select *Add Missing Stages* on the strategy node menu. All stages that may be missing are created along with the rest of the basic structure of nodes required to define each of them and their events.

{% include note.html content="Only one manage stage may exist in each strategy." %}

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
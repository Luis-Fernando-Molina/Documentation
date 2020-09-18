---
title:  Simulation Layers
summary: "The Masters trading bot Jason provides four different layers: simulation, conditions, strategies, and trades."
sidebar: suite_sidebar
permalink: suite-simulation-layers.html
---

The <a data-toggle="tooltip" data-original-title="{{site.data.concepts.trading_bot}}">trading bot</a> provides <a data-toggle="tooltip" data-original-title="{{site.data.concepts.data_product}}">data products</a> that serve to plot strategies' actions over market data, offering a comprehensive set of visual clues that show how strategies behave when trading. These layers become available after running any of the four types of trading <a data-toggle="tooltip" data-original-title="{{site.data.concepts.session}}">sessions</a>: <a data-toggle="tooltip" data-original-title="{{site.data.network.backtesting_session}}">backtesting</a>, <a data-toggle="tooltip" data-original-title="{{site.data.network.paper_trading_session}}">paper trading</a>, <a data-toggle="tooltip" data-original-title="{{site.data.network.forward_testing_session}}">forward testing</a>, and <a data-toggle="tooltip" data-original-title="{{site.data.network.live_trading_session}}">live trading</a>.

{% include note.html content="The examples below illustrate the [Weak-hands Buster](suite-community-weak-hands-buster.html) trading system, designed to sell BTC as prices start dropping and re-buy BTC as prices stabilize at a lower level." %}

## Simulation

The *simulation* layer displays the actions of strategies throughout the tested period. Actions include the <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.take_position_event}}">take position event</a> and the management of <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.stop}}">stop</a> and <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.take_profit}}">take profit</a> in phases. By turning on the simulation layer you should be able to see something like this:

{% include image-ext.html file='https://user-images.githubusercontent.com/13994516/67279788-040d5880-f4cc-11e9-9098-11496fac9c79.gif' url='yes' max-width='100' caption='' %}

{% include note.html content="For the time being, asset balances displayed on-screen correspond to the simulation layer that was turned on last." %}

The dashed line represents the duration of the trade at the price of the take position event. Notice how one asset is exchanged for the other asset at the take position event, and exchanged back as the trade closes.

{% include image-ext.html file='https://user-images.githubusercontent.com/13994516/67279791-040d5880-f4cc-11e9-9cac-db42c419ca0c.gif' url='yes' max-width='100' caption='' %}

Notice the green horizontal lines indicating the take profit value for each period or candle). Take profit is managed in <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.phase}}">phases</a>, marked with the corresponding icons.

{% include image-ext.html file='https://user-images.githubusercontent.com/13994516/67279792-040d5880-f4cc-11e9-8487-cf390d78da92.gif' url='yes' max-width='100' caption='' %}

Notice the red horizontal lines indicating the stop value for each period or candle. Stop is managed in phases marked with the corresponding icons.

{% include image-ext.html file='https://user-images.githubusercontent.com/13994516/67279793-04a5ef00-f4cc-11e9-8ac1-32e98762bf5b.gif' url='yes' max-width='100' caption='' %}

## Conditions

The conditions layer helps identify which <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.condition}}">conditions</a> are met at each candle. Notice how conditions are highlighted as the mouse pointer moves through different candles.

{% include image-ext.html file='https://user-images.githubusercontent.com/13994516/67279794-04a5ef00-f4cc-11e9-9c53-cf5694701b50.gif' url='yes' max-width='100' caption='' %}

It also allows to track the value of each <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.formula}}">formula</a>, for instance, those used to dynamically manage take profit in phases. Notice the *eye icon* poping up above the phase node, indicating the particular phase is currently *active*, that is, being evaluated at the current candle.

{% include image-ext.html file='https://user-images.githubusercontent.com/13994516/67279796-053e8580-f4cc-11e9-8688-4fea62c1f40b.gif' url='yes' max-width='100' caption='' %}

The same *eye icon* icon may signal when a strategy within a trading system is active.

{% include image.html file='interface/active-icon.PNG' url='yes' max-width='100' caption='' %}


## Strategies

The strategies layer identifies <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trigger-on_event}}">trigger on</a> and <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trigger-off_event}}">trigger off events</a>, signaling the activation and deactivation of strategies.

{% include image-ext.html file='https://user-images.githubusercontent.com/13994516/67280186-dd035680-f4cc-11e9-82e8-e52706749f5a.gif' url='yes' max-width='100' caption='' %}

## Trades

The trades layer marks trades with a triangle whose hypotenuse connects the price at the take position event with the exit price. When the trade is profitable, the triangle is green; when the exit happens at a loss, the triangle is red.

{% include image-ext.html file='https://user-images.githubusercontent.com/13994516/67280187-dd9bed00-f4cc-11e9-93be-74b497d8f7b5.gif' url='yes' max-width='100' caption='' %}
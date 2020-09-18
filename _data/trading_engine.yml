trading_engine: "The trading engine hierarchy is the data structure used by the trading bot to keep runtime information highly accessible and exposed to others."

current: "The current object refers to the context in which instances of several other objects exist&mdash;like episode, strategy, position, strategy stages, and so on&mdash;in particular, the instances that are open at the time of evaluation, hence the adjective current."

episode: "Episode is the object that handles the information corresponding to the whole run of the trading bot&mdash;beginning to end&mdash;between the specified initial datetime and final datetime, in the time range parameter of the trading session."

serial_number: "Serial number is a sequential number assigned to the object represented by the parent node at the moment it is opened."

identifier: "Identifier is a unique alphanumeric string by which the object represented by the parent node may be unequivocally identified."

begin: "Begin is the datetime at the moment the object represented by the parent node began to exist."

end: "End is the datetime on which the object represented by the parent node ceased to exist. In case the object has not been closed yet, it is the datetime at the moment of evaluation."

begin_rate: "Begin rate is the close rate of the candle corresponding to the datetime of the begin property."

end_rate: "End rate is the close rate of the candle corresponding to the datetime of the end property."

status: "Status refers to the state of the object represented by the parent node at the moment of evaluation."

exit_type: "Exit type refers to the reason why the object is closed."

episode_base_asset: "The episode base asset node keeps track of the evolution of variables and metrics denominated in the base asset, throughout the episode."

balance: "Balance is the running balance, that is, the amount of the asset that exists at any point in time."

begin_balance: "Begin balance is the balance at the datetime of the begin property of the parent node or concept."

end_balance: "End balance is the balance at the datetime of the end property of the parent node or concept."

hits: "Hits counts the number of positions that closed with a positive profit loss, in the context of the parent node."

fails: "Fails counts the number of positions that closed with a negative profit loss, in the context of the parent node."

hit_ratio: "Hit ratio is the percentage of positions that closed with a positive profit loss, in the context of the parent node."

profit_loss: "Profit loss is the difference between the balance at the end and the balance at the beginning of a certain period, given by the context."

ROI: "ROI is a ratio that compares the profit loss with the cost of the investment, expressed as a percentage."

annualized_rate_of_return: "Annualized rate of return is the equivalent ROI scaled to one year."

hit_fail: "Hit fail states whether a transaction is successful or not, hit meaning it is successful and fail meaning it is not."

episode_quoted_asset: "The episode quoted asset node keeps track of the evolution of variables and metrics denominated in the quoted asset, throughout the episode."

episode_counters: "The episode counters node features counters of instances of objects that come to exist during the duration of the episode."

periods: "Periods counts the number of candles that have been evaluated, in the context of the parent node."

strategies: "Strategies counts the number of times strategies have been triggered-on, in the context of the parent node."

positions: "Positions counts the number of times positions have been opened, in the context of the parent node."

orders: "Orders counts the number of times orders have been placed, in the context of the parent node."

user_defined_counter: ""

episode_statistics: "Episode statistics keeps track of several metrics in the context of the episode."

days: "Days counts the number of days through which the trading bot has cycled since the object represented by the parent node was open."

user_defined_statistic: "A user defined statistic allows users to create custom metrics by defining the corresponding calculation in a formula, in the context of the parent node."

formula: "A formula is a mathematical expression intended to determine a numerical value to be applied dynamically to a certain property."

candle: "The candle structure of nodes stores the properties that make up each candle in the episode, including open and close datetime, and the rates for open, min, max, and close."

open: "Open is the rate at the datetime of the begin property, as provided by the exchange. That is, the rate at the open of the candle."

close: "Close is the rate at the datetime of the end property, as provided by the exchange. That is, the rate at the close of the candle."

min: "Min is the minimum rate registered by the exchange during the period between the datetimes of the begin and end properties, as provided by the exchange."

max: "Max is the maximum rate registered by the exchange during the period between the datetimes of the begin and end properties, as provided by the exchange."

index: "Index is the position of the parent object in the corresponding data collection, as determined by the context."

cycle: "The trading bot performs its duties in regards to exchange orders and accounts in two consecutive cycles for each candle."

distance_to_event: "Distance to event features counters indicating how many periods (candles) have passed since the last occurrence of certain events, in the context of the episode."

trigger_on: "Counts the periods since the last time a strategy was triggered on."

trigger_off: "Counts the periods since the last time a strategy was triggered off."

take_position: "Counts the periods since the last time a position was taken."

close_position: "Counts the periods since the last time a position was closed."

next_phase: "Counts the periods since the last time a next phase event was triggered."

move_to_phase: "Counts the periods since the last time a move to phase event was triggered."

create_order: "Counts the periods since the last time an order was created."

cancel_order: "Counts the periods since the last time an order was canceled."

close_order: "Counts the periods since the last time an order was closed."

strategy: "The strategy section of the trading engine keeps track of information relating to the trading strategies that are triggered-on, during the time they remain open."

situation_name: "Situation name features the name of the situation that triggered a certain event, which is dependent on the context."

strategy_name: "Strategy name features the name of the strategy that is currently open."

strategy_counters: "The strategy counters node features counters of instances of objects that come to exist while the strategy is open."

position: "Position is the section of the data structure that keeps track of information within the scope of each position, and during the time a position is open."

entry_target_rate: "Entry target rate is the target rate set on the initial targets definition, in the open stage of the strategy."

exit_target_rate: "Exit target rate is the target rate set on the initial targets definition, in the close stage of the strategy."

stop_loss: "Stop loss is the current stop loss target, as defined in the manage stage of the corresponding strategy."

stop_loss_phase: "Stop loss phase is the numeric value of the phase that is currently open, and thus, defining the value of the stop loss."

stop_loss_position: "Stop Loss position indicates if the stop loss target is above or below the position rate."

take_profit: "Take profit is the current take profit target, as defined in the manage stage of the corresponding strategy."

take_profit_phase: "Take profit phase is the numeric value of the phase that is currently open, and thus, defining the value of the take profit."

take_profit_position: "Take profit position indicates if the take profit target is above or below the position rate."

position_counters: "The position counters node features counters of instances of objects that come to exist during the duration of the position."

position_statistics: "Position statistics keeps track of several metrics in the context of the position."

position_base_asset: "The position base asset node keeps track of the evolution of variables related to the base asset throughout the position."

entry_target_size: "Entry target size is the target size set on the initial targets definition, in the open stage of the strategy."

exit_target_size: "Exit target size is the target size set on the initial targets definition, in the close stage of the strategy."

position_quoted_asset: "The position quoted asset node keeps track of the evolution of variables related to the quoted asset throughout the position."

strategy_trigger_stage: "Strategy trigger stage is the section of the data structure that keeps track of information specific to the scope of the trigger stage during the period the stage is open."

strategy_open_stage: "Strategy open stage is the section of the data structure that keeps track of information specific to the scope of the open stage during the period the stage is open."

stage_base_asset: "The stage base asset node keeps track of the evolution of variables related to the base asset throughout the stage."

target_size: "Target size is the target set on the initial targets definition which, in the context of a strategy stage, acts as a limit."

size_placed: "Size placed is the size of the order placed at the exchange."

size_filled: "Size filled is the amount of the order that has been filled at the exchange."

fees_paid: "Fees paid is the amount paid in fees."

stage_quoted_asset: "The stage quoted asset node keeps track of the evolution of variables related to the quoted asset throughout the stage."

strategy_manage_stage: "Strategy manage stage is the section of the data structure that keeps track of information specific to the scope of the manage stage during the period the stage is open."

strategy_close_stage: "Strategy close stage is the section of the data structure that keeps track of information specific to the scope of the close stage during the period the stage is open."

last: "The last object stores instances of position and strategy objects, in particular the instances that were last open at the time of evaluation, hence the adjective last."

exchange_orders: "Exchange orders is the section of the data structure that keeps track of orders of all types."

market_buy_orders: "Market buy orders is the section of the data structure that keeps track of this specific type of order."

market_order: "Market order is the section of the data structure that keeps track of the properties of a specific market order, as defined in the trading system."

exchange_id: "Exchange ID is a unique identifier the exchange assigns to the order, so that it may be unequivocally identified."

rate: "Rate is the rate at which the order is placed."

order_name: "Order name is the name of the order as specified in the trading system."

algorithm_name: "Algorithm name is the name of the execution algorithm that opened the order, as specified in the trading system."

order_counters: "The order counters node features counters of instances of objects that come to exist while the order is open."

lock: "Lock is an internal mechanism that blocks the data structure of the order at the trading engine when the definition of the order at the trading system disallows spawning multiple orders."

order_base_asset: "The order base asset node keeps track of the evolution of certain properties of orders, denominated in the base asset."

size: "Size is the size set for the order through a combination of formulas and configurations defined in the trading system, and is the value passed on to the exchange as the size of the order."

order_quoted_asset: "The order quoted asset node keeps track of the evolution of certain properties of orders, denominated in the quoted asset."

order_statistics: "Order statistics keeps track of several metrics in the context of the order."

percentage_filled: "Percentage filled represents the portion of the order that has been filled, expressed as a percentage."

actual_rate: "Actual rate is the number reported by the exchange as the rate at which an order was filled."

market_sell_orders: "Market sell orders is the section of the data structure that keeps track of this specific type of order."

limit_buy_orders: "Limit buy orders is the section of the data structure that keeps track of this specific type of order."

limit_order: "Limit order is the section of the data structure that keeps track of the properties of a specific limit order, as defined in the trading system."

limit_sell_orders: "Limit sell orders is the section of the data structure that keeps track of this specific type of order."

dynamic_indicators: ""

indicator_function: ""
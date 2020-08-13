trading_engine: "The trading engine hierarchy is the data structure used by the trading bot to keep runtime information highly accessible and exposed to others. Trading systems may access the information processed by the trading bot, keep track of and react to current and past events&mdash;including those involving the exchange, such as orders placed or filled&mdash;as the bot is running."

current: "The current object stores instances of several other objects, in particular the instances that are open at the time of evaluation. Conceptually, current is used as an adverb of time applied to different concepts, such as the current episode, the current strategy, the current position, or the current strategy stage."

episode: "Episode is the object that handles the information corresponding to the whole run of the trading bot&mdash;beginning to end&mdash;between the specified initial datetime and final datetime in the time range parameter of a trading session."

serial_number: "Serial number is a sequential number assigned to the object represented by the parent node at the moment it's opened."

identifier: "Identifier is a unique alphanumeric string by which the object represented by the parent node may be unequivocally identified."

begin: "Begin is the datetime at the moment the object represented by the parent node began to exist."

end: "End is the datetime on which the object represented by the parent node ceased to exist. In case the object hasn't been closed yet, it is the datetime at the moment of evaluation."

begin_rate: "Begin rate is the close rate of the candle corresponding to the datetime of the begin property."

end_rate: "End rate is the close rate of the candle corresponding to the datetime of the end property."

status: "Status refers to the state of the object represented by the parent node at the moment of evaluation."

exit_type: "Exit type refers to the reason why the object is closed."

episode_base_asset: "The episode base asset node keeps track of the evolution of variables related to the base asset throughout the episode."

balance: ""

begin_balance: ""

end_balance: ""

hits: "Hits counts the number of positions that closed with a positive profit loss (P&L), in the context of the parent node."

fails: "Fails counts the number of positions that closed with a negative profit loss (P&L), in the context of the parent node."

hit_ratio: "Hit ratio is the percentage of positions that closed with a positive profit loss (P&L), in the context of the parent node."

profit_loss: ""

roi: ""

annualized_rate_of_return: ""

hit_fail: ""

episode_quoted_asset: "The episode quoted asset node keeps track of the evolution of variables related to the quoted asset throughout the episode."

episode_counters: "The episode counters node features counters of instances of objects that come to exist during the duration of the episode."

periods: "Periods counts the number of candles that have been evaluated, in the context of the parent node."

strategies: "Strategies counts the number of times strategies have been triggered-on, in the context of the parent node."

positions: "Positions counts the number of times positions have been opened, in the context of the parent node."

orders: "Orders counts the number of times orders have been placed, in the context of the parent node."

user_defined_counters: ""

episode_statistics: ""

days: ""

user_defined_statistics: ""

formula: ""

candle: ""

open: ""

close: ""

min: ""

max: ""

index: ""

distance_to_event: ""

trigger_on: ""

trigger_off: ""

take_position: ""

close_position: ""

next_phase: ""

move_to_phase: ""

create_order: ""

cancel_order: ""

close_order: ""

strategy: "Strategy is the section of the data structure that keeps track of information within the scope of the trading strategy as defined in the trading system, during the time the strategy is open."

situation_name: ""

strategy_name: ""

strategy_counters: ""

position: "Position is the section of the data structure that keeps track of information within the scope of each position, and during the time a position is open."

entry_target_rate: ""

exit_target_rate: ""

stop_loss: ""

stop_loss_stage: ""

stop_loss_phase: ""

stop_loss_position: ""

take_profit: ""

position_counters: ""

position_statistics: ""

position_base_asset: ""

entry_target_size: ""

exit_target_size: ""

position_quoted_asset: ""

strategy_trigger_stage: "Strategy trigger stage is the section of the data structure that keeps track of information specific to the scope of the trigger stage during the period the stage is open."

strategy_open_stage: "Strategy open stage is the section of the data structure that keeps track of information specific to the scope of the open stage during the period the stage is open."

stage_base_asset: ""

target_size: ""

size_placed: ""

size_filled: ""

fees_paid: ""

stage_quoted_asset: ""

strategy_manage_stage: "Strategy manage stage is the section of the data structure that keeps track of information specific to the scope of the manage stage during the period the stage is open."

strategy_close_stage: "Strategy close stage is the section of the data structure that keeps track of information specific to the scope of the close stage during the period the stage is open."

last: ""

exchange_orders: ""

market_buy_orders: ""

market_order: ""

exchange_id: ""

rate: ""

order_name: ""

algorithm_name: ""

order_counters: ""

lock: ""

order_base_asset: ""

size: ""

order_quoted_asset: ""

order_statistics: ""

percentage_filled: ""

actual_rate: ""

market_sell_orders: ""

limit_buy_orders: ""

limit_order: ""

limit_sell_orders: ""

dynamic_indicators: ""

indicator_function: ""
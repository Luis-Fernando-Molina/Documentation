trading_system: "A trading system is a framework handling the low-level logic that serves to structure the processes and methods used to implement and deploy trading strategies."

trading_strategy: "A trading strategy is a set of actions occurring in stages, designed to achieve a specific goal within a broader plan, via taking and managing positions."

trigger_stage: "The trigger stage deals with monitoring the market in search of trading opportunities with the corresponding strategy."

trigger-on_event: "The trigger-on event defines the set of rules that need to be met for the corresponding strategy to be triggered on. A strategy that is triggered may use all the capital available to the trading system, and prevents other strategies in the system from triggering."

situation: "A situation refers to a specific state of the market in which a certain event should take place, as defined by any number of conditions."

condition: "Conditions are rules within a situation. When all conditions under a situation validate true, then the situation gets validated as well, and the associated event is triggered."

trigger-off_event: "The trigger-off event defines the situation in which the corresponding strategy shall be triggered-off. A strategy that is triggered-off releases the capital in reserve and makes it available to other strategies in the trading system."

take_position_event: "The take position event defines the situation that needs to be met to take a position."

open_stage: "The open stage deals with the definitions that make up the logic to enter a position, including the target rate and size, and order execution."

initial_targets: "The initial targets node holds the most basic definitions about the position to be taken: the target rate and the target size."

target_rate: "The target rate is a reference rate that, in combination with the placement of managed stop loss and managed take profit targets, is used to determine whether the targets have been hit."

formula: "A formula is a mathematical expression intended to determine a numerical value to be applied dynamically to a certain property."

target_size_in_base_asset: "Target size in base asset is used to define the size of the position, denominating it in the base asset."

target_size_in_quoted_asset: "Target size in quoted asset is used to define the size of the position, denominating it in the quoted asset."

open_execution: "The open execution node groups all execution algorithms involved in the process of opening a position."

execution_algorithm: "An execution algorithm is a set of instructions used to place and manage orders at the exchange."

market_buy_order: "A market buy order is an instruction sent to the exchange to buy the base asset, for immediate execution at current market prices."

create_order_event: "The create order event controls the placement of orders."

cancel_order_event: "The cancel order event makes cancelling limit orders possible."

simulated_exchange_events: "The simulated exchange event node allows to override the parameters set at the level of the trading session on a per order basis to determine how each order shall be simulated."

simulated_partial_fill: "The simulated partial fill parameter allows simulating the partial fill of orders."

simulated_actual_rate: "The simulated actual rate node allows setting a specific rate value for the simulation of each order, overriding the slippage parameter of the trading session."

simulated_fees_paid: "The simulated fees paid node allows setting a specific fee for the simulation of each order, overriding the fee structure parameter of the trading session."

market_sell_order: "A market sell order is an instruction sent to the exchange to sell the base asset, for immediate execution at current market prices."

limit_buy_order: "A limit buy order is an instruction sent to the exchange to buy the base asset, for execution at a specific rate or better."

order_rate: "The order rate node defines the rate of limit orders."

limit_sell_order: "A limit sell order is an instruction sent to the exchange to sell the base asset, for execution at a specific rate or better."

close_stage_event: "The close stage event defines the set of rules that need to be met for the corresponding stage to be closed."

manage_stage: "The manage stage deals with the setting and management of stop loss and take profit targets, both to protect your capital and to increase the efficiency of your trading system."

managed_stop_loss: "The managed stop loss node features the definition of the phases that make up the management of the stop loss target as the position develops."

phase: "The management of take profit and stop loss targets is done in phases. Phase 1 sets the initial targets, either for the managed stop loss or the managed take profit, and becomes active as soon as the first order is placed. Subsequent phases allows switching to different formulas given certain market situations."

next_phase_event: "The next phase event determines when there should be a switch of phases to the next phase in a predefined sequence."

move_to_phase_event: "The move to phase event determines when there should be a switch of phases from the current phase to an arbitrary phase determined by a reference."

managed_take_profit: "The managed take profit node features the definition of the phases that make up the management of the take profit target as the position develops."

close_stage: "The close stage deals with the definitions that make up the logic to close a position, including the target rate and size, and order execution."

close_execution: "The close execution node groups all execution algorithms involved in the process of closing a position."

event: "An event is an action triggered by predefined market situations."

javascript_code: "The JavaScript code node may hold any snippet of valid JavaScript."
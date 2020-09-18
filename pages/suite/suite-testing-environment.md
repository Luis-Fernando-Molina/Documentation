---
title:  Testing Environment
summary: "The testing environment organizes your strategy-testing resources, grouping tasks and associated backtesting and paper trading sessions."
sidebar: suite_sidebar
permalink: suite-testing-environment.html
toc: false
---

{% include /network/testing-environment.md heading="" icon="150" adding="" configuring="" starting="" content="yes" definition="bold" table="yes" more="no"%}

<table class='hierarchyTable'><thead><tr><th><a href='#testing-environment' data-toggle='tooltip' data-original-title='{{site.data.network.testing_environment}}'><img src='images/icons/nodes/png50/testing-environment.png' /><br />Testing Environment</a></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead><tbody>
<tr><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#exchange-trading-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.exchange_trading_tasks}}'><img src='images/icons/nodes/png50/exchange-trading-tasks.png' /><br />Exchange Trading Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#market-trading-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.market_trading_tasks}}'><img src='images/icons/nodes/png50/market-trading-tasks.png' /><br />Market Trading Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-mine-tasks' data-toggle='tooltip' data-original-title='{{site.data.network.trading_mine_tasks}}'><img src='images/icons/nodes/png50/trading-mine-tasks.png' /><br />Trading Mine Tasks</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task-manager' data-toggle='tooltip' data-original-title='{{site.data.network.task_manager}}'><img src='images/icons/nodes/png50/task-manager.png' /><br />Task Manager</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#task' data-toggle='tooltip' data-original-title='{{site.data.network.task}}'><img src='images/icons/nodes/png50/task.png' /><br />Task</a></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#trading-bot-instance' data-toggle='tooltip' data-original-title='{{site.data.network.trading_bot_instance}}'><img src='images/icons/nodes/png50/trading-bot-instance.png' /><br />Trading Bot Instance</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-process-instance' data-toggle='tooltip' data-original-title='{{site.data.network.trading_process_instance}}'><img src='images/icons/nodes/png50/trading-process-instance.png' /><br />Trading Process Instance</a></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#backtesting-session' data-toggle='tooltip' data-original-title='{{site.data.network.backtesting_session}}'><img src='images/icons/nodes/png50/backtesting-session.png' /><br />Backtesting Session</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#paper-trading-session' data-toggle='tooltip' data-original-title='{{site.data.network.paper_trading_session}}'><img src='images/icons/nodes/png50/paper-trading-session.png' /><br />Paper Trading Session</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#parameters' data-toggle='tooltip' data-original-title='{{site.data.network.parameters}}'><img src='images/icons/nodes/png50/parameters.png' /><br />Parameters</a></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-fork.png' /></td><td><a href='#trading-system-reference' data-toggle='tooltip' data-original-title='{{site.data.network.trading_system_reference}}'><img src='images/icons/nodes/png50/trading-system-reference.png' /><br />Trading System Reference</a></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#trading-engine-reference' data-toggle='tooltip' data-original-title='{{site.data.network.trading_engine_reference}}'><img src='images/icons/nodes/png50/trading-engine-reference.png' /><br />Trading Engine Reference</a></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-line.png' /></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#execution-started-event' data-toggle='tooltip' data-original-title='{{site.data.network.execution_started_event}}'><img src='images/icons/nodes/png50/execution-started-event.png' /><br />Execution Started Event</a></td><td></td><td></td><td></td><td></td></tr>
<tr><td></td><td></td><td></td><td></td><td></td><td><img src='images/icons/various/png/tree-connector-elbow.png' /></td><td><a href='#key-reference' data-toggle='tooltip' data-original-title='{{site.data.network.key_reference}}'><img src='images/icons/nodes/png50/key-reference.png' /><br />Key Reference</a></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table>


{% include /network/exchange-trading-tasks.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/market-trading-tasks.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/trading-mine-tasks.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/task-manager.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/task.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/trading-bot-instance.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/trading-process-instance.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/backtesting-session.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/paper-trading-session.md heading="##" icon="150" adding="####" configuring="" starting="####" content="yes" definition="bold" table="yes" more="yes"%}

{% include /network/parameters.md heading="###" icon="50" adding="#####" configuring="" starting="" content="yes" definition="yes" table="yes" more="yes"%}

{% include note.html content="For a description of each of the parameters defining a trading session, see the [parameters](suite-parameters.html) page. " %}

{% include /network/trading-system-reference.md heading="###" icon="50" adding="#####" configuring="" starting="" content="yes" definition="yes" table="yes" more="yes"%}

{% include /network/trading-engine-reference.md heading="###" icon="50" adding="#####" configuring="" starting="" content="yes" definition="yes" table="yes" more="yes"%}

{% include /data_mine/execution-started-event.md heading="##" icon="150" adding="####" configuring="" starting="" content="yes" definition="bold" table="yes" more="yes"%}

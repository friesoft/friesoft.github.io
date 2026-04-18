---
title: "Tooltips for Line Charts in System Graphs"
date: 2026-04-11
image: "/images/projects/kde/linechart-tooltip-widget.png"
type: "kde"
status: "Pending Review"
tags: ["KDE", "KQuickCharts", "libksysguard"]
merge_requests:
  - url: "https://invent.kde.org/plasma/libksysguard/-/merge_requests/468"
    status: "Pending Review"
  - url: "https://invent.kde.org/frameworks/kquickcharts/-/merge_requests/106"
    status: "Pending Review"
---

I found an old bugreport about the lack of tooltips for line charts in plasms-systemmonitor and thought this would be a cool thing to have. Using Grafana extensively at work this seemed like something useful to me so I took a shot at it.

This work involved changes in `kquickcharts` and `libksysguard`. The nice thing about it is that those changes are not only visible in plasma-systemmonitor but also for example in all system monitor widgets.

![Tooltips for Line Charts in System Monitor](/images/projects/kde/linechart-tooltip-systemmonitor.png)

*Tooltips for line charts in plasma-systemmonitor*

![Tooltips for Line Charts in System Monitor Widget](/images/projects/kde/linechart-tooltip-widget.png)

*Tooltips for line charts in system monitor widget*

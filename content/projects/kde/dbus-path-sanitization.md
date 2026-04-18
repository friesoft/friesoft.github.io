---
title: "Fix D-Bus Path Sanitization"
date: 2026-04-16
image: "/images/projects/kde/dbus-path-sanitization.png"
type: "kde"
status: "Released"
tags: ["KDE", "Plasma", "D-Bus"]
merge_requests:
  - url: "https://invent.kde.org/plasma/plasma-desktop/-/merge_requests/3667"
    status: "Merged"
    release: "Plasma 6.6.5"
---

After adding actions to plasma-systemmonitor I noticed I couldn't run those actions from krunner.

This ensures that applications with dashes in their names (like `plasma-systemmonitor`) can be run via D-Bus (like krunner does). This uses the same logic as already present in kglobalacceld.

![D-Bus Path Sanitization](/images/projects/kde/dbus-path-sanitization.png)

*Actions from plasma-systemmonitor shown in krunner and working after this fix*

---
title: "CPU Architecture Detection in libksysguard"
date: 2026-04-05
image: "/images/projects/kde/cpu-architecture.png"
type: "kde"
status: "Pending Review"
tags: ["KDE", "Plasma", "libksysguard"]
merge_requests:
  - url: "https://invent.kde.org/plasma/libksysguard/-/merge_requests/467"
    status: "Pending Review"
---

I've added support for displaying the CPU architecture of processes (32-bit/64-bit for x86/ARM/RISC-V) in `libksysguard`. This information is now available to plasma-systemmonitor. In addition it also detects when running x86/x86-64 binaries on arm64/aarch64 and displays it as "Emulated". 

![CPU Architecture](/images/projects/kde/cpu-architecture.png)

*CPU architecture of processes (where current user can read) is shown in plasma-systemmonitor*

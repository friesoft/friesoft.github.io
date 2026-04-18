---
title: "GPU naming in System Monitor"
date: 2026-03-20
image: "/images/projects/kde/gpu-naming-1.png"
type: "kde"
status: "Released"
tags: ["KDE", "Plasma", "libksysguard", "ksystemstats"]
merge_requests:
  - url: "https://invent.kde.org/plasma/libksysguard/-/merge_requests/464"
    status: "Merged"
    release: "Plasma 6.7.0"
  - url: "https://invent.kde.org/plasma/ksystemstats/-/merge_requests/129"
    status: "Merged"
    release: "Plasma 6.7.0"
---

On my new computer, the internal and dedicated GPU are most of the time powerful enough that it's hard to distinguish which one is in use (e.g., Minecraft runs on the internal GPU perfectly fine until enabling shaders).

In addition, the GPU numbers seem to sometimes change, so just setting `DRI_PRIME=1` didn't work; I had to use the PCI ID.
To make things worse, `plasma-systemmonitor` only showed generic labels like "gpu 2" or "gpu 3," which wasn't helpful at all for determining which GPU was being utilized.

To circumvent these problems, I added proper GPU naming to `libksysguard` for the application/process view in `plasma-systemmonitor` and `ksystemstats` for sensor readings.

I moved the GPU naming logic into `libksysguard` and reused it in `ksystemstats` to ensure consistency across the system.

![gpu-naming-1](/images/projects/kde/gpu-naming-1.png)

![gpu-naming-2](/images/projects/kde/gpu-naming-2.png)

![gpu-naming-3](/images/projects/kde/gpu-naming-3.png)

![gpu-naming-4](/images/projects/kde/gpu-naming-4.png)

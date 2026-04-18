---
title: "GPU Usage and Memory Fixes"
date: 2026-03-23
image: "/images/projects/kde/gpu-usage-fixes-1.png"
type: "kde"
status: "Released"
tags: ["KDE", "Plasma", "libksysguard"]
merge_requests:
  - url: "https://invent.kde.org/plasma/libksysguard/-/merge_requests/465"
    status: "Merged"
    release: "Plasma 6.6.4"
---

On my system (with Intel and NVIDIA GPUs), the GPU usage and memory graphs shown in `plasma-systemmonitor` were completely broken.

![GPU Usage Fixes Before](/images/projects/kde/gpu-usage-fixes-1.png)

With this change, graphs now display useful values 😄.

![GPU Usage Fixes After](/images/projects/kde/gpu-usage-fixes-2.png)

I compared the VRAM values of processes with `nvidia-smi` and `intel_gpu_top`, and they look plausible now. In addition, I optimized the implementation by removing a wasteful `nvidia-smi` call that occurred in a loop for every line read.

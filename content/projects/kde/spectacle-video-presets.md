---
title: "Video recording presets for Spectacle"
date: 2026-04-08
type: "kde"
status: "Idea"
tags: ["KDE", "Spectacle", "KPipeWire", "FFmpeg"]
merge_requests:
  - url: "https://invent.kde.org/friedreich/kpipewire/-/compare/master...work%2Fencoding-preferences?from_project_id=1911"
    status: "Work in Progress"
  - url: "https://invent.kde.org/friedreich/spectacle/-/compare/master...work%2Fencoding-preferences?from_project_id=2004"
    status: "Work in Progress"
---

I want the ability to configure the encoding preferences for video recordings in Spectacle. This is useful for users who want to optimize for file size, quality, or speed. I also want to be able to benchmark the different encoding preferences to actually see the difference in file size and quality.

### Spectacle Settings UI

Users can now explicitly set a **Max frame rate** (defaulting to 30 fps) and choose an **Encoding preference** (Balanced, Highest Quality, Fast, or Smallest Size).

### KPipeWire Backend

I refactored the backend to ensure that these preferences are actually respected by all encoders

### Benchmarks

To allow benchmarking I added cli options to Spectacle for running headless recordings with varying encoders, frame rates and presets.

The results of my testing across 48 combinations show the impact of these presets (10-second recordings):

| Format | Preset | 10 FPS | 60 FPS | 120 FPS |
|---|---|---|---|---|
| **vp9** | balanced | 125.9 KiB | 460.4 KiB | 473.3 KiB |
| **vp9** | quality | 169.8 KiB | 491.9 KiB | 495.7 KiB |
| **vp9** | speed | 195.2 KiB | 568.5 KiB | 573.3 KiB |
| **vp9** | size | 159.8 KiB | 312.8 KiB | 444.9 KiB |
| **h264** | balanced | 110.7 KiB | 408.1 KiB | 415.6 KiB |
| **h264** | quality | 118.7 KiB | 433.1 KiB | 438.5 KiB |
| **h264** | speed | 119.8 KiB | 446.2 KiB | 437.7 KiB |
| **h264** | size | 210.7 KiB | 460.9 KiB | 468.6 KiB |
| **webp** | balanced | 8.69 MiB | 29.37 MiB | 29.86 MiB |
| **webp** | quality | 8.35 MiB | 30.19 MiB | 31.32 MiB |
| **webp** | speed | 15.94 MiB | 42.60 MiB | 41.22 MiB |
| **webp** | size | 8.40 MiB | 31.67 MiB | 32.90 MiB |
| **gif** | balanced | 425.6 KiB | 635.7 KiB | 616.3 KiB |
| **gif** | quality | 14.44 MiB | 48.22 MiB | 51.51 MiB |
| **gif** | speed | 356.1 KiB | 499.5 KiB | 433.4 KiB |
| **gif** | size | 392.8 KiB | 537.2 KiB | 496.3 KiB |

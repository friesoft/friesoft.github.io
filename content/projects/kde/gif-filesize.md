---
title: "Optimized GIF filesize"
date: 2026-04-14
image: "/images/projects/kde/gif-filesize.png"
type: "kde"
status: "Released"
tags: ["KDE", "Spectacle", "KPipeWire"]
merge_requests:
  - url: "https://invent.kde.org/plasma/kpipewire/-/merge_requests/247"
    status: "Merged"
    release: "Plasma 6.7.0"
---

As I'm mostly using GIFs as attachments for Jira tasks, and their file size with Spectacle was previously abysmally (read: unusable) large, I was looking into how to improve this.

By enabling diff mode, setting a static color palette and bayer dither the filesize has been reduced drastically.

For a typical 10-second 1080p screen recording where content doesn't change that much, the file size now shrinks from about 33 MB to about 500 KB—with quality that is, in my opinion, more than good enough.

![GIF filesize](/images/projects/kde/gif-filesize.png)

*GIF filesize comparison*

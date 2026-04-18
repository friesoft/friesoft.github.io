---
title: "PIN Unlock with autosubmit for Plasma Screenlocker"
date: 2026-03-29
type: "kde"
status: "Idea"
tags: ["KDE", "Plasma", "Security", "TPM2", "Screenlocker"]
merge_requests:
  - url: "https://invent.kde.org/friedreich/plasma-desktop/-/compare/master...work%2Fpinpam?from_project_id=2802"
    status: "Work in Progress"
  - url: "https://invent.kde.org/friedreich/kscreenlocker/-/compare/master...work%2Fpinpam?from_project_id=2683"
    status: "Work in Progress"
  - url: "https://invent.kde.org/friedreich/plasma-workspace/-/compare/master...work%2Fpinpam?from_project_id=2703"
    status: "Work in Progress"
---

I'm trying to bring native PIN unlock with auto-submit support to the Plasma Screenlocker, mimicking the experience found on Windows.

### The Objective

The goal is to allow users to set a numeric PIN in the "Users" KCM, which can then be used to quickly unlock the desktop using a short PIN but still keeping your strong password as a fallback. 

This includes:
1. **Auto-submit**: The lockscreen automatically attempts to unlock once the entered PIN length matches the configured length.
2. **Numeric Keypad**: A dedicated keypad UI on the lockscreen for touch and mouse friendliness.
3. **TPM 2.0 Integration**: If TPM 2.0 is available PINs can be saved using the `pinpam` PAM module that interacts with the TPM.

### Technical Implementation

The feature consists of multiple components:
* **Users KCM (`plasma-workspace`)**: A new section to set/change/remove the PIN.
* **Screenlocker (`kscreenlocker`)**: New configuration entries for `PinEnabled` and `PinLength`.
* **Lockscreen UI (`plasma-desktop`)**: Porting the Plasma Mobile numeric keypad to the desktop Breeze theme and adding the auto-submit logic.

### Backend with pinpam (hardware based)

The backend uses [pinpam](https://github.com/RazeLighter777/pinpam), a PAM module written in Rust that leverages TPM 2.0 for secret storage and lockout management. Since no official Fedora packages are available, I've created a [COPR repository](https://copr.fedorainfracloud.org/coprs/friesoft/pinpam/) for it.

### Backend using pam_pinlock (software based)

For systems without a TPM, I'm looking at [pam_pinlock](https://github.com/saltnpepper97/pam_pinlock). I've also made a [COPR repository](https://copr.fedorainfracloud.org/coprs/friesoft/pam_pinlock/) available for Fedora users.

### Security & Development Status

> [!WARNING]
> Both of these PAM modules are currently in the early stages of development and may not yet meet the security standards required. There is a strong possibility that we will need to invest more into developing a dedicated, robust PAM module.

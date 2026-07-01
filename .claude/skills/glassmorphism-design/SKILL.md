---
name: glassmorphism-design
description: Use whenever building or restyling a UI section for the Sandbox site. Guidance for applying glassmorphism (frosted glass panels, layered blur, translucency) deliberately and well, in the direction of startglobal.org's START Summit page, rather than as a generic default.
---

# Glassmorphism Design — Sandbox

## Reference direction
startglobal.org/start-summit is the north star: dark, high-contrast base,
large photographic/video content doing most of the work, and glass panels
used sparingly to float UI elements (nav, cards, badges, CTAs) above that
content — not as the entire page's visual language.

The failure mode to avoid: turning every card on the page into a translucent
blurred box. That's the generic AI-default version of glassmorphism. Used
well, glass is a **supporting** material, not the whole design.

## When glass earns its place
Use a frosted/glass treatment when an element needs to sit *on top of*
something visually busy — a photo, video, gradient, or colorful background —
and needs to stay legible without blocking what's behind it:
- Sticky nav bar over a hero image/video
- Floating stat badges over a hero photo
- Speaker/judge cards over a background texture
- Modal/overlay panels (registration form steps, FAQ expand)

Don't reach for glass on sections that already sit on a plain, solid
background — a flat surface color reads cleaner there. Glass on glass on
glass flattens the hierarchy and just looks foggy.

## Technical recipe (Tailwind + Next.js)
Core combination:
```jsx
className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl"
```

Breakdown:
- `backdrop-blur-md` (or `backdrop-blur-lg` for stronger effect) — the blur itself
- `bg-white/10` to `bg-white/15` — a low-opacity white overlay (adjust for dark vs light sections; on a light background use `bg-black/5` instead)
- `border border-white/20` — a faint edge so the panel reads as a distinct object, not a smudge
- `shadow-xl` or a custom soft shadow — lifts it off the background so it feels like a physical layer

For the electric violet / hot coral / ice blue palette already in use, tint
the glass instead of leaving it neutral white where it sits over a colored
gradient:
```jsx
className="backdrop-blur-md bg-violet-500/10 border border-violet-300/20"
```

## Rules to keep it disciplined
1. **One blur strength per page region.** Don't mix `backdrop-blur-sm` and `backdrop-blur-xl` in the same viewport — pick one and stay consistent within a section.
2. **Glass needs contrast behind it to justify existing.** If a panel sits over a flat solid color, ask whether a plain card with a subtle border would look more intentional than glass with nothing to blur.
3. **Text inside glass must stay legible at every scroll position.** Since the background behind a fixed/sticky glass nav changes as the user scrolls, test it over your darkest and lightest hero content, not just one screenshot.
4. **Reserve the strongest glass effect for one signature moment** (e.g. the sticky nav, or the hero stat bar) rather than spreading it evenly across every card on the page — that's what makes it feel designed rather than templated.
5. **Mobile check is mandatory.** `backdrop-filter` blur can be expensive on low-end Android devices, which is a real concern given the audience is ~150 schools on mobile phones. Test scroll performance on a mid-range device, not just desktop Chrome. If it stutters, drop to `backdrop-blur-sm` or fall back to a solid `bg-slate-900/90` panel on mobile breakpoints only.

## Quick self-check before shipping a glass element
- Would this still look intentional as a static screenshot, with no animation? I need animation and there should smooth transition between each frames 
- Is there real content (a photo, gradient, texture) visible through the blur — or is it blurring a flat color for no reason?
- Did I test text contrast against the actual background it'll sit over, not a placeholder?

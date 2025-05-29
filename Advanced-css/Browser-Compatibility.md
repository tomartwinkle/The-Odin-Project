# Browser Compatibility

## History of Browsers
- **1990**: *WorldWideWeb* (later *Nexus*) by Tim Berners-Lee – first browser.
- **1993**: *Mosaic* browser gains popularity.
- **1995**: Microsoft releases *Internet Explorer* (once held 90% market share).
- **2003**: Apple launches *Safari*.
- **2008**: Google releases *Chrome*.
- Mozilla Foundation creates *Firefox* to counter Internet Explorer dominance.

---

## What is Browser Compatibility?
- Ensures web applications work across different browsers.
- Browsers use different rendering engines:
  - Chrome/Edge/Brave: Blink (Chromium-based)
  - Safari: WebKit
- Apps may behave differently in different browsers.
- Most developers prioritize Chrome/Chromium due to market dominance.

---

## CSS Features and Browser Support
- **W3C** sets web standards and works with browser vendors.
- In the past, lack of standards meant inconsistent behavior across browsers.
- Today, browser support is more unified due to standardization.

### When is it safe to use new CSS features?
- Use [Can I Use](https://caniuse.com) to check browser support.
- Implement new features once widely supported by major browsers.
- Avoid breaking user experience by testing thoroughly.

---

## Mobile Browser Considerations
- Mobile usage is growing; ensure mobile compatibility.
- On iOS/iPadOS, all browsers use **WebKit** under the hood.
  - Chrome/Firefox on iOS = still Safari engine.
- Emulators in browsers only simulate screen size, not full mobile behavior.
- Always test on actual mobile devices when possible.

---

## Key Takeaways
- Test on all major browsers (Chrome, Safari, Firefox, Edge).
- Use feature detection and compatibility checks.
- Prioritize responsive and mobile-friendly designs.
- Stay updated with evolving browser technologies and standards.

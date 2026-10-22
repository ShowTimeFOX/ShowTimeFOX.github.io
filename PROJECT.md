# Project Guidelines

## Purpose

ShowTimeFOX.github.io is Bartłomiej Mastalerz's public portfolio and creative hub. It should make projects and small browser-based tools easy to discover, understand, and try.

## Structure

- `index.html` is the GitHub Pages homepage and the catalog of projects and tools.
- `banner.html` is the standalone, reusable introduction banner. Embed it on portfolio pages with an accessible `<iframe>` and a descriptive `title`.
- `styles/catalog.css` contains the homepage catalog styles; `styles/banner.css` contains the standalone banner styles.
- `tools/<tool-name>/` contains a self-contained mini tool and its assets.
- `README.md` explains the site, how to preview it, and how to add projects.

Keep shared components separate when they have their own purpose, but keep the site simple: use plain HTML, CSS, and JavaScript unless a project genuinely needs a framework or build step.

## Adding a project or tool

1. Give each tool its own descriptive directory under `tools/`.
2. Make the tool work on GitHub Pages using relative asset paths; do not depend on a server-side runtime.
3. Add a homepage card with an accurate description, relevant technologies, and a working destination.
4. Add the entry to the README project list so the catalog and documentation stay in sync.
5. Check that internal links resolve and that layouts remain usable on narrow screens.

Do not list unfinished or unavailable work as a working tool. Clearly label previews or work in progress.

## Design and accessibility

- Keep the dark, creative visual identity consistent: deep backgrounds, violet/pink accents, readable contrast, and restrained effects.
- Use semantic HTML, descriptive link text, proper heading order, and accessible names for embedded content.
- Ensure keyboard focus is visible, interactive controls are usable without a mouse, and reduced-motion preferences are respected.
- Test responsive layouts, especially at mobile widths.

## Code and dependencies

- Prefer native browser APIs and client-side code for mini tools.
- Avoid adding dependencies, build systems, or external services without a clear need.
- Do not commit secrets, private data, or generated build output.
- Keep changes focused and update `README.md` or this file when structure or contributor guidance changes.

## Verification checklist

- Open the changed page locally or preview it with a static HTTP server.
- Check the homepage, banner, card links, and responsive layout.
- Confirm any new tool works at its expected GitHub Pages path.
- Review the final diff and ensure only intended files changed.

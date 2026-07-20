# Assets

Two locations, and the difference matters — Vite treats them differently.

## `src/assets/` — files a component imports

```jsx
import founderPhoto from '../assets/images/founder/founder.jpg'

<img src={founderPhoto} alt="..." />
```

Vite hashes the filename at build time, optimizes it, and inlines small files.
Because the hash changes when the file changes, browsers can never serve a
stale cached version. **This is the default choice for photos and screenshots.**

## `public/` — files referenced by a literal URL

```html
<link rel="icon" href="/favicon.svg" />
<a href="/downloads/proof-pack.pdf">Download</a>
```

Copied to the build root untouched, filename preserved. Use it only when
something needs a predictable URL — the favicon, an OG preview image,
`robots.txt`, or a downloadable PDF. Paths start with `/`, not `./`.

## The rule

> A `.jsx` file will `import` it → `src/assets/`
> A URL string points at it → `public/`

## Layout

```
src/assets/
  images/work/      case-study screenshots (GetDentalLeads, Upwork projects)
  images/founder/   founder photo for the About section
  logo/             Vantro Digital wordmark / mark files

public/
  favicon.svg
  downloads/        Proof Pack PDF and anything else linked by URL
```

## Where these get wired up

Search `TODO` in `src/content/site.js`:

- `FOUNDER.initials` — swap the initials circle for the real founder photo
- `PROOF.items[].grad` — replace the CSS gradients with project screenshots

## Notes

- `.gitkeep` files exist only so git tracks the empty folders. Delete one once
  real files land in its directory.
- Prefer `.webp` for photos (roughly 30% smaller than JPEG at equal quality),
  `.svg` for logos and icons.
- Compress before committing. A 4 MB phone photo will tank your load time even
  after Vite processes it — Vite optimizes delivery, not source dimensions.

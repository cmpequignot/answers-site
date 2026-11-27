# answers-site
Site for the band ANSWERS

A plain HTML/CSS rebuild of thebandisanswers.com, with no build step.

## Pages
- `index.html` (home)
- `about.html`
- `press.html`
- `contact.html`
- `re-in-coding.html`
- `404.html` (shown for any address that doesn't exist)

Styles are in `css/style.css`, the small amount of JavaScript (mobile menu and the glitch reveal) is in `js/main.js`, and photos are in `images/`. See **Images** below before adding one.

## Preview
The site uses clean addresses: `/about` instead of `/about.html`. `vercel.json` turns this on (`cleanUrls`). Vercel serves `about.html` at `/about` and redirects any old `.html` link to the clean address. Links between pages use the clean form too, for example `href="/about"`.

Because of that, opening `index.html` straight from your files shows the home page, but links to other pages won't work. To preview the whole site, run a local server that understands clean addresses:

```bash
npx serve .
```

Then visit the address it prints (usually http://localhost:3000). `npx` comes with Node.js. The Vercel preview link on each pull request also works.

When you add a page, link to it as `/page-name` with no `.html`, and use `https://thebandisanswers.com/page-name` in its canonical tag, `og:url` and `sitemap.xml`.

## RE:in_coding feature (home page)
The section under the hero shows `images/re-in-coding-gnarly.webp`, exported from page 3 ("SAMPLE I GNARLY") of the Canva design *ANSWERS / / RE : IN _ CODING PART I. IN MORNING (ECHOES)*.

The artwork is one flattened image, so the glitch is done by stacking copies of it:
- The red, green and blue channels are separate layers that start out offset and snap together.
- The image prints in from top to bottom in steps, like code appearing line by line.
- Thin horizontal slices jump sideways during the reveal.

It plays once when scrolled into view and gives a short glitch on hover. Visitors with reduced motion turned on see the static image.

The **Learn More** button links to the RE:in_coding page.

The glitch effect can be reused anywhere: write `<div class="glitch"><img src="..." alt="..."></div>` and `js/main.js` builds the layers. The page also needs the three hidden SVG colour filters from the bottom of `index.html`. A `.glitch` must keep its white background, because the layers are multiply-blended.

## RE:in_coding page
`re-in-coding.html` uses a retro-terminal theme (`css/re-in-coding.css`) and the same header as the rest of the site. The artwork in `images/re-in-coding/` comes from the Canva design above. The text and performance photos come from the band's project proposal.

**Releases:** each movement has two singles, the Part and the sample it was born from, for ten in total before the full album. Each movement has two buttons in a `.ric-listen` group.

**Artwork is revealed as it's released.** Unreleased artwork is not in the repo at all, so it can't be found by URL. Each unreleased spot shows a `.ric-locked` "decoding" placeholder.

On release day:
1. Export the art from Canva into `images/re-in-coding/`.
2. Replace the placeholder with the image. A cover is a plain `<img>`. A sample uses `<div class="glitch"><img ...></div>` so it gets the glitch reveal.

**To switch on a released single:** find its button, for example `sample 2: coming soon`. Replace it with `<a class="term-btn" href="BANDCAMP LINK">listen: sample 2</a>`. Then update the "N of 10 out now" count above the movements.

## Social sharing previews
Each page's `<head>` has OpenGraph and Twitter/X tags, so links shared in iMessage, Instagram, Facebook, Slack, Discord and so on show a title, description and photo.

- The preview images are in `images/og/`. Each is 1200×630, cropped from a band photo.
- Image and page addresses must be full URLs that start with `https://thebandisanswers.com/`.
- When you add a page, copy the block from an existing page and update the title, description, `og:url` and image.
- After a deploy, platforms cache previews. To refresh one, use Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) and click **Scrape Again**.

## Search engines
- Each page has a `<link rel="canonical">` with its full `https://thebandisanswers.com/` address. This tells search engines which address is the real one, for example when the same page is also reachable through a Vercel preview link.
- `robots.txt` allows all crawlers and points them to `sitemap.xml`.
- `sitemap.xml` lists every page. When you add a page, add it here and give it a canonical tag. When a page changes a lot, update its `<lastmod>` date.
- When the site is live, submit `https://thebandisanswers.com/sitemap.xml` in [Google Search Console](https://search.google.com/search-console) to get the pages indexed faster.

## Structured data
`index.html` has a `<script type="application/ld+json">` block that describes the band to search engines: name, location, members and instruments, albums, email and social profiles. It helps Google show a band info panel when people search for ANSWERS.

Update it when the lineup changes, when an album comes out (add it to `album`), or when you add a social profile (add it to `sameAs`). To check it, use Google's [Rich Results Test](https://search.google.com/test/rich-results) or the [Schema Markup Validator](https://validator.schema.org/).

## 404 page
Vercel shows `404.html` for any address that doesn't exist. Its links and file paths start with `/` (for example `/css/style.css`), so they work even when the bad address is several folders deep. Keep them that way. The page is marked `noindex` so it never appears in search results.

## Images
Photos on the pages are WebP files, sized to about twice the largest width each is shown at, so they stay sharp on phones and Retina screens without extra download. When you add a photo:

1. Work out the widest it will appear on the page (for example, a half-width column on desktop is about 600px), and resize it to about twice that. Full-screen backgrounds top out at 1920px.
2. Export it as WebP at quality 80, or 85 for artwork with fine text. Squoosh (squoosh.app) does both in the browser.
3. Set `width` and `height` on the `<img>` to the file's real size. That stops the page jumping around while it loads.

Exceptions:
- **Press kit downloads** (`images/press/`) are the original full-resolution JPGs. The press page gallery shows the small WebP versions and links each one to its JPG here, so journalists can download print-quality files.
- **Social preview images** (`images/og/`) stay JPG, because some apps don't show WebP link previews.
- **Favicons** stay PNG/ICO.

# answers-site
Site for the band ANSWERS

A plain HTML/CSS rebuild of thebandisanswers.com, with no build step.

## Pages
- `index.html` (home)
- `about.html`
- `press.html`
- `contact.html`

Styles are in `css/style.css`, the small amount of JavaScript (mobile menu and the glitch reveal) is in `js/main.js`, and photos are in `images/`.

## Preview
Open `index.html` in a browser. To serve it locally instead:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## RE:in_coding feature (home page)
The section under the hero shows `images/re-in-coding-gnarly.png`, exported from page 3 ("SAMPLE I GNARLY") of the Canva design *ANSWERS / / RE : IN _ CODING PART I. IN MORNING (ECHOES)*.

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

**To switch on a released single:** find its button, for example `sample 2: coming soon`. Replace it with `<a class="term-btn" href="BANDCAMP LINK">listen: sample 2</a>`. Then update the "3 of 10 out now" count above the movements.

## Social sharing previews
Each page's `<head>` has OpenGraph and Twitter/X tags, so links shared in iMessage, Instagram, Facebook, Slack, Discord and so on show a title, description and photo.

- The preview images are in `images/og/`. Each is 1200×630, cropped from a band photo.
- Image and page addresses must be full URLs that start with `https://thebandisanswers.com/`.
- When you add a page, copy the block from an existing page and update the title, description, `og:url` and image.
- After a deploy, platforms cache previews. To refresh one, use Facebook's [Sharing Debugger](https://developers.facebook.com/tools/debug/) and click **Scrape Again**.

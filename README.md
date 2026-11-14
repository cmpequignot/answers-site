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

## RE: in_coding feature (home page)
The section under the hero shows `images/re-in-coding-gnarly.png`, exported from page 3 ("SAMPLE I GNARLY") of the Canva design *ANSWERS / / RE : IN _ CODING PART I. IN MORNING (ECHOES)*.

The artwork is one flattened image, so the glitch is done by stacking copies of it:
- The red, green and blue channels are separate layers that start out offset and snap together.
- The image prints in from top to bottom in steps, like code appearing line by line.
- Thin horizontal slices jump sideways during the reveal.

It plays once when scrolled into view and gives a short glitch on hover. Visitors with reduced motion turned on see the static image.

The **Learn More** button links to the RE: in_coding page.

The glitch effect can be reused anywhere: write `<div class="glitch"><img src="..." alt="..."></div>` and `js/main.js` builds the layers. The page also needs the three hidden SVG colour filters from the bottom of `index.html`. A `.glitch` must keep its white background, because the layers are multiply-blended.

## RE: in_coding page
`re-in-coding.html` uses a retro-terminal theme (`css/re-in-coding.css`) and the same header as the rest of the site. The artwork in `images/re-in-coding/` comes from the Canva design above. The text and performance photos come from the band's project proposal.

**To add a listening link:** find that part's `listen: coming soon` button. Change it to `<a class="term-btn" href="LINK">listen</a>`, with the `aria-disabled` attribute removed.

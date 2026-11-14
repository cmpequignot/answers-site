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

The **Learn More** button links to `#` for now. Point it at the RE: in_coding page once that exists.

# Cat Cafe

![Cat Cafe logo](./images/logo_new.svg)

This website has been developed as a final project for JAMK's Web visualization course.

[Website](https://cat-cafe-alpha.vercel.app/)

[Presentation (in Finnish)](https://youtu.be/b6thrZ1Lq0Q) on YouTube.

## Summary

As my final project for Web visualization course I decided to develop a simple website for an imaginary cat cafe. Since the course focused on visualization of websites (as the name suggests), the website does not have any "*real*" functionality. The forms can be sent, but the information in them doesn't go anywhere.

The site consists of 5 sections:

- Home
    - Landing page, includes a little introduction of the cafe
- Menu
    - Cafe's available menu
- Cats
    - Images of cafe's cats
- Contact us
    - Cafe's information and contact/feedback form
- Reservations
    - Seat reservation form

I plan to develop this site further, and you can read about my development ideas and updates from [Further development](#further-development).

## Technology choices

![TailwindCSS logo](https://tailwindcss.com/_next/static/media/tailwindcss-logotype.a1069bda.svg)

The site has been developed using TailwindCSS and Flowbite. A little bit of JavaScript has been used to make the navigation bar responsive. I chose to use Tailwind, because it was new to me and I wanted to try it out. Flowbite offers some nice free components for Tailwind.

## Planning and designing visuals

I designed the site's UI in [Figma](https://www.figma.com/) and planned a suitable color palette with [Coolors](https://coolors.co/).

The logo, that is also used as a favicon, I made with [Inkscape](https://inkscape.org/).

Photos used on the site are from [Pexels](https://www.pexels.com/) and the pawprint used on Menu is from [SVGRepo](https://www.svgrepo.com/).

I'd imagine that a site like this would have users on both mobile and desktop view, so throughout the design and development phases I tried to make both as user-friendly as possible.

I did my best to implement the chosen color palette throughout the used components.

## Further development
My ideas for further development are:

- [ ] Performance improvements
    - Biggest thing to improve performance is to change the image formats and sizes
- [ ] Slide down hamburger menu in mobile view
    - Probably the whole navigation bar needs to be reworked to implement this
- [ ] Modals instead of alerts
    - Now sending the forms give alerts, but modals would look better (and are more customizable)
- [ ] Introductions for cats
    - Small fun introductions of the cats that change when the carousel is being browsed
- [ ] Smooth appearance (fade in) of images
    - I'd like to try and see if I like this effect
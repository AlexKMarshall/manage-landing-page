# Manage Landing Page

This project is a landing page built in completely vanilla HTML, CSS and Javascript. No frameworks, no npm packages.

It's mobile-first, but looks great on desktop too.

View the [live site](https://hungry-jepsen-landingpage.netlify.app/)

## The Challenge

This is an implementation of a design from [FrontendMentor](https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5). Design briefs were supplied for a mobile and desktop view.

![Screenshot of the desktop design](https://res.cloudinary.com/dz209s6jk/image/upload/v1580921397/Challenges/qkpgcsmter7tah2sjdij.jpg).

## Little Details

I rolled my own hamburger menu toggle SVG icon in Figma so that I could animate its state between open and closed. It's a little fiddly, but I'd be keen to try some more SVG animation in future.

The testimonials slider was built with CSS transitions and some custom properties to store the current state. A simple javascript interval controls its rotation, but you can interrupt that to select the one you want to see manually too. I took the idea for that from the [Keyframers Youtube channel](https://www.youtube.com/channel/UCtmYk7H-NNYLEe_LgBRYomA)

## Lessons Learned

I tried to use BEM naming for the CSS classes, mainly as an exercise after doing a lot of work with Tailwind and CSS-in-JS. It took a minute to get used to it, and I think if I were to redo this, I'd look to use a bit more global CSS. Having more elements of the design in CSS variables (not just the colors and margins) would I think allow for a leaner style-sheet, that would be more maintainable.

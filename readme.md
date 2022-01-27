# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

<div align="center">
Desktop design VS Desktop solution<br>
<a href="challenge/desktop-design.jpg" target="_blank"><img src="challenge/desktop-design.jpg" width="45%" height="60%"/></a> <a href="solution/desktop.png" target="_blank"><img src="solution/desktop.png" width="45%" height="60%" align="top"/></a>
</div>

<br>

<div align="center">
Mobile design VS Mobile solution<br>
<a href="challenge/mobile-design.jpg" target="_blank"><img src="challenge/mobile-design.jpg" width="20%" height="20%"/></a> <a href="solution/mobile.png" target="_blank"><img src="solution/mobile.png" width="20%" height="20%" align="top"/></a>
</div>

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/intro-component-with-signup-form-C8hWQrvja)
- [Live Site URL](https://intro-form-component-with-signup.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS
- BEM
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JS
- [Animate.css - For animations](https://animate.style/)

### What I learned

- Floating labels
- Animations using Animate.css
- Complete form validation in vanilla JS
- Writing code using [SOLID principles](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design)

### Useful resources

- [Floating Input Labels](https://www.youtube.com/watch?v=v8mRUU3orjI&t=635s) - Learnt about the requirement of `placeholder=" "` in `input="text/email/password"` for performing the floating transitions on input change.
- [Vanilla JS Form Validation](https://www.javascripttutorial.net/javascript-dom/javascript-form/) - I had known the basics of form validation, however, this post helped me clear out form validation with ease. After understanding the basics, I was able to use SOLID principles in segregating the code to it's respective files/creating helper functions.

### Continued Development

Using SOLID principles, provision has been made to provide additional validations like, name/password validation in their own respective block.

## Author

- Linkedin - [Elroy Toscano](https://www.linkedin.com/in/elroy-toscano/)
- Frontend Mentor - [@elroytoscano](https://www.frontendmentor.io/profile/elroytoscano)

## Acknowledgments

- [@frontendmentorio](https://github.com/ApplePieGiraffe) - Animations are inspired by the animations in ApplePieGiraffe's solution. The Animate.css library is a brilliant css animations library.
- [@daniloparrajr](https://github.com/daniloparrajr) - Initially I was using my own project boilerplate to build the project, however since gulp doesn't support js module imports, had to switch to Danilo's project boilerplate for HTML-SCSS projects.
- [@anoshaahmed](https://github.com/anoshaahmed) - The layout of this readme.md is borrowed from the readme of Anosha's Huddle Page solution.

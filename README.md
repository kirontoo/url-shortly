# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty

### Screenshot
![](./screenshots/desktop-preview.png)

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/responsive-url-shortener-using-react-and-the-shrtcode-api-QgjVNYfnU)
- Live Site URL: [Url Shortly](url-shortly-kirontoo.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Mobile-first workflow
- [ReactJs](https://reactjs.org/) with Typescript

### What I learned

One thing I learned from this project is that there are ways to add interesting
CSS styling without having to add a empty html element by using the CSS
selector `::after` or `::before`.

For example, that blue line at the bottom of the card was created using this snippet: 
```SCSS
.card {
  &:not(:last-child):after {
    content: '';
    width: 0.5rem;
    height: 5rem;
    background: $cyan;
    position: absolute;
    top: 100%;
    left: 49%;
    z-index: 0;
  }
}
```

![card section](./screenshots/card-section.png)

### Useful resources

- [MDN Web Storage
  API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) - This 
  helped me create show stortend urls the user have submitted in the
  past. Local storage is great when you need persistent data to be loaded on a website.
  learning this concept.

## Author
- Frontend Mentor - [@kirontoo](https://www.frontendmentor.io/profile/kirontoo)
- LinkedIn - [Amy Nguyen-Dang](https://www.linkedin.com/in/amy-nguyen-dang/)

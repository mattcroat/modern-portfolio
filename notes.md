# Modern Portfolio
---

## Setting up Sass

Init package.json
```shell
npm init -y
```

Install sass
```json
npm i node-sass
```

Watch for any changes to our sass 💁‍
```json
{
  "name": "modern-portfolio",
  "version": "1.0.0",
  "description": "Responsive portfolio website",
  "main": "index.js",
  "scripts": {
    "sass": "node-sass -w scss/ -o dist/css/ --recursive"
  },
  "author": "mattcroat",
  "license": "MIT",
  "dependencies": {
    "node-sass": "^4.9.2"
  }
}
```

Run the script
```shell
npm run sass
```

## Initialize repo

Create ignore list
```shell
touch .gitignore
```

Init repo
```shell
git init
```

Add everything
```shell
git add .
```

Commit
```shell
git commit -m "Initial commit"
```

## HTML5 Semantic Tags

```html
<header>
<main>
<footer>
```

## Sass

Sass partials
Every file that starts with a underscore is a Sass partial.
`scss/_config.sass`

Importing partials
```sass
@import 'config';
```

CSS reset
```sass
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Sass variable
```sass
$primary-color: #444;
```

Sass nesting
```sass
h1,
h2,
h3 {
  margin: 0;
  font-weight: 400;

  &.lg-heading {
    font-size: 6rem;
  }
}
```sass

Sass lighten
```sass
background: lighten($primary-color, 2);
```

Sass darken
```sass
background: lighten($primary-color, 2);
```

Simple animation
```sass
&:hover {
  color: $secondary-color;
  transition: all 1.5s ease-out; // everything transitionable, time, motion
}
```

Sass mixin
```sass
@mixin easeOut {
  transition: all 0.5s ease-out; // everything transitionable, time, motion
}

&:hover {
  color: $secondary-color;
  @include easeOut;
}
```

```scss
$show-home-image: true;
$home-image: url('../img/background.jpg');
$background-opacity: 0.9;

@mixin background {
  // Check if image is enabled
  @if $show-home-image {
    &#bg-img {
      background: $home-image;
      background-attachment: fixed;
      background-size: cover;
    }
  }
}

body {
  @include background;
  background: $primary-color;
  color: #fff;
  height: 100%; // so you can use vh, vw on the child elements
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', 'Segoe UI', Arial, Helvetica, sans-serif;
  line-height: 1.5;
}
```

Pseudo element overlay
```sass
@mixin background {
  // Check if image is enabled
  @if $show-home-image {
    &#bg-img {
      background: $home-image;
      background-attachment: fixed;
      background-size: cover;

      // Pseudo element overlay
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background: rgba($primary-color, $background-opacity);
      }
    }
  }
}
```

Change cursor
```sass
cursor: pointer;
```

## Rotate menu into x
---
### index.html
```html
<!-- Hamburger menu -->
<div class="menu-btn">
  <div class="btn-line"></div>
  <div class="btn-line"></div>
  <div class="btn-line"></div>
</div>
```

### _menu.scss
```scss
// Menu button
.menu-btn {
  position: absolute;
  z-index: 3;
  top: 35px;
  right: 35px;
  cursor: pointer;
  @include easeOut;

  .btn-line {
    width: 28px;
    height: 3px;
    margin: 0 0 5px 0; // space in-between
    background: #fff;
    @include easeOut;
  }

  // Rotate into x with menu lines
  &.close {
    transform: rotate(180deg);

    .btn-line {
      // Line 1 rotate
      &:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }
      // Line 2 hide
      &:nth-child(2) {
        opacity: 0;
      }
      // Line 3 rotate
      &:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }
}
```

## Animate a element appearing from the top using translate3d

```sass
&-nav {
  margin: 0;
  paddng: 0;
  background: darken($primary-color, 5);
  list-style: none;
  transform: translate3d(0, -100%, 0); // now it's off the page
  @include easeOut;
  
  // Only transition when it has class of show
  &.show {
    // Slide in from top
    transform: translate3d(0, 0 ,0);
  }
}
```

## Sass for loop to delay nav item slide

```sass
.nav-item {
  transform: translate3d(600px, 0, 0); // move it right
  @include easeOut;

  // Only transition when it has class of show
  &.show {
    // Slide in from right
    transform: translate3d(0, 0 ,0);
  }
}

// Delay each nav item slide by 0.1s
@for $x from 1 through 4 {
  .nav-item:nth-child(#{$x}) {
    transition-delay: $x * 0.1s // so each item comes in seperately
  }
}
```
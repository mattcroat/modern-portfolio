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
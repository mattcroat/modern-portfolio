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

## Sass

Sass variable
```sass
$primary-color: #444;
```
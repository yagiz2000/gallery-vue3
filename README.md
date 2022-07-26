# Gallery Vue3

Gallery vue 3 is a gallery component, which aims to simplify your content displaying. You just give the image source to prop than it handles everything.

![Demo Gif](https://media.giphy.com/media/zCxOtq5MyVAS5nKTcc/giphy.gif)

## Installation

```bash
yarn add gallery-vue3

# or

npm install gallery-vue3
```

There are two options avialable to use this component

## As Component

```js
import 'gallery-vue3/dist/gallery-vue3.css'

import Gallery from 'gallery-vue3'

export default {
  install(app) {
    app.component('Gallery', Gallery)
  }
}
```

## By Import

```js
import 'gallery-vue3/dist/gallery-vue3.css'
import Gallery from 'gallery-vue3'
```

You must import css files above import statements otherwise component will not correctly render

## Keyboard Functionality

- On press right arrow you can swipe to right.
- On press left arrow you can swtipe to left.
- On press esc you can close gallery.

### Usage

https://stackblitz.com/edit/vue-ta6vut?file=src%2FApp.vue

# Todo List

- [ ] Adding width and height prop for image rendering
- [ ] Refactor with Typescript
- [ ] Publishing React version
- [ ] Fullscreen option
- [ ] Adding image download functionality
- [ ] Adding github workflow for when issue created send a discord notification

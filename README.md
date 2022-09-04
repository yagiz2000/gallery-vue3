# Gallery Vue3

Gallery vue 3 is a gallery component, which aims to aim simplify your image sliding process. You just give the image source to prop than it handles everything.

## Quick Start

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

https://stackblitz.com/edit/vue-5qbkec?file=src/App.vue

# Todo List

- [ ] Adding Width and Height Prop For Image Rendering
- [ ] Refactor With Typescript
- [ ] Publishing React Version
- [ ] Full Screen Option
- [ ] Adding Image Download Functionality

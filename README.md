# Sticky-kit plugin for Vue.js

A Vue.js(v2.x+) integration of <http://leafo.net/sticky-kit/>

## Installation

Install the npm package.
```bash
$ npm install vue-stickykit --save
```

Register the component.
- ES5
```js
var Vue = require('vue')
var VueStickyKit = require('vue-stickykit')
Vue.use(VueStickyKit)
```

- ES6
```js
import Vue from 'vue'
import VueStickyKit from 'vue-stickykit'
Vue.use(VueStickyKit)
```

## Usage 

```html
<template>
    <div v-stick-in-parent="stikyKitOptions">
        My sticky content
    </div>
</template>

<script>
export default {
    data () {
      return {
        // See http://leafo.net/sticky-kit/#reference
        stikyKitOptions: {
          parent: '.parent-class',
          offset_top: 50
        }
      }
    },
}
</script>
```

### License

The code is available under the [MIT](LICENSE) license.
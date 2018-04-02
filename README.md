# Sticky-kit plugin for Vue.js

A Vue.js(v2.x+) integration of <http://leafo.net/sticky-kit/>

See also <https://imfaber.me/lab/sticky-kit-plugin-vuejs>

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

#### Basic Sticking
```html
<template>
    <div v-stick-in-parent>
        My sticky content
    </div>
</template>
```

#### Custom Sticking
```html
<template>
    <div v-stick-in-parent="stikyKit">
        My sticky content
    </div>
</template>

<script>
    export default {
        data () {
          return {
            // See http://leafo.net/sticky-kit/#reference
            stikyKit: {
              options: {
                parent: '.my-sticky-class',
                offset_top: 50
              },
              on: {
                'sticky_kit:stick': function(e) {
                  console.log("has stuck!", e.target);
                },
                'sticky_kit:unstick': function(e) {
                  console.log("has unstuck!", e.target);
                },
              }
            }
          }
        },
    }
</script>
```

### License

The code is available under the [MIT](LICENSE) license.
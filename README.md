# vue-bury

## A Vue plugin for centeralized managing bury rule.

### Usage
**Now it's a very simple toy but valuable:**

main.js
```javascript
import Vue from 'vue';
import VueBury from 'vue-bury';

Vue.use(VueBury, {
  adapters: {
    load (data, value) {
      console.log(data)
      console.log(value)
      // TODO with bury
    },

    hover (data, value, $event) {
      // TODO with mouseenter
    },

    click (data, value, $event) {
      // TODO with click
    }
  }
})
```
myComponent.js
```html
<template>
  <!-- The load function will execute when <main> is loaded -->
  <main v-bury.load>
    <h1 data-id="123" v-bury.hover>Hover(Mouse Enter) Me!</h1>
    <h1 data-tag="click" v-bury.click="someValue">Click Me!</h1>
    <h1 data-tip="mul" v-bury.hover.click>Hover then Click Me!</h1>
  </main>
</template>
```

### What Can I Use?
As upon, it just supports a few event:
  - Every funcs will receive (data, value, $event)
    - **data**: datas defined on element as ``data-${field}``
    - **value**: value passed to the directive, like ``v-bury.click="{ id: '123'}"
    - **$event**: the event you know...
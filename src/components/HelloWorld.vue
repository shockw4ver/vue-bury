<template>
  <div class="hello" v-bury.load>
    <h1>This page will trigger the bury on load</h1>
    <h1 :data-id="123" v-bury.click>Bind on click</h1>
    <h1 :data-id="321" v-bury.hover>Bind on Hover</h1>
    <h1 :data-id="123321" v-bury.hover.click>Bind on Hover and Click</h1>

    <h3>Open your developer tool and see what happened.</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  line-height: 50px;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

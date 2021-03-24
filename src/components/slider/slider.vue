<template src="./slider.html"></template>

<script>
export default {
  name: 'slider',
  props: ['text', 'home'],
  mounted() {
    console.log(this.home)
    console.log(typeof this.home)
  },
}
</script>

<style src="./slider.css"></style>

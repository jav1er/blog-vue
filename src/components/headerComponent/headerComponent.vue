<template src="./headerCoponent.html"></template>

<script>
  export default {
    name: "headerComp",
    methods:{
      mouseleave(event){
        console.log('en print del mouseleave');
        console.log(event);
      },
      mouseenter(event){
        console.log(' mouseenter');
        console.log(event);
      }
    }
  }
</script>

<style src="./headerCoponent.css"></style>

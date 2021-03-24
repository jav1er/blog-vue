<template src="./redirect.html"> </template>
<script>
  export default {
    name: "redirect",
    mounted() {
      let searchString = this.$route.params.searchString
      console.log(searchString)
      setTimeout(() => {
        this.$router.push("/buscador/" + searchString)
      }, 1000)
    }
  }
</script>
<style src="./redirect.css"></style>

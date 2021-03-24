<template src="./sidebar.html"></template>

<script>
  export default {
    name: "sidebar",
    data() {
      return {
        searchString: undefined
      }
    },
    methods: {
      goSearch() {
        this.$router.push("/redirect/" + this.searchString)
        console.log(this.searchString)
      }
    }
  }
</script>

<style  src="./sidebar.css"></style>

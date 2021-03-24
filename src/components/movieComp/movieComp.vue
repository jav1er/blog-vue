<template src="./movieComp.html"></template>

<script>
export default {
  name: "movieComp",
  props: ["objectPelicula"],

  mounted() {
    console.log('componente montado');
    console.log(this.objectPelicula)
  },

  methods: {
    sendMovie(movieSelected) {
      this.$emit("capturefavoriteMovieEvent", movieSelected)
    }
  }
}
</script>

<style src="./movieComp.css"></style>

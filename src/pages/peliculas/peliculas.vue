<template src="./peliculas.html"></template>

<script>
import movieComp from "../../components/movieComp/movieComp.vue"
import sidebar from "../../components/movieComp/movieComp.vue"
export default {
  name: "peliculas",
  components: {
    movieComp,
    sidebar
  },
  methods: {
    capturefavoriteMovieMethod(movie) {
      this.favoriteMovie = movie
    }
  },
  data() {
    return {
      favoriteMovie:undefined,
      arrayPeliculas: [
        {
          title: "batman vs superman",
          year: 2017,
          image:
            "https://pics.filmaffinity.com/Batman_v_Superman_El_amanecer_de_la_Justicia-728293826-large.jpg"
        },
        {
          title: "gran torino",
          year: 2018,
          image:
            "https://upload.wikimedia.org/wikipedia/en/c/c6/Gran_Torino_poster.jpg"
        },
        {title: "jhon", year: 2015, image: "../assets/john.jpg"}
      ]
    }
  }
}
</script>

<style src="./peliculas.css"></style>

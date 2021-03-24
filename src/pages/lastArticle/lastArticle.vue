<template src="./lastArticle.html"></template>

<script>
  import slider from "../../components/slider/slider.vue"
  import sidebar from "../../components/sidebar/sidebar.vue"
  import axios from "axios"
  import articles from "../../components/articles/articles.vue"
  import Global from "../../providers/constants"
  export default {
    name: "lastArticles",
    components: {
      slider,
      sidebar,
      articles
    },

    data() {
      return {
        articlesArry: undefined,
        url: Global.url
      }
    },
    mounted() {
      console.log("componente lastArticles montado")
      this.getLastArticles()
    },
    methods: {
      getLastArticles() {
        axios.get(`${this.url}articles/true`).then(res => {
          if (res.data.status === "success") {
            this.articlesArry = res.data.articles
            console.log(this.articlesArry)
          }
        })
      }
    }
  }
</script>

<style src="./lastArticle.css"></style>

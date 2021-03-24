<template src="./blog.html"></template>

<script>
  import slider from "../../components/slider/slider.vue"
  import sidebar from "../../components/sidebar/sidebar.vue"
  import Global from "../../providers/constants"
  import articles from "../../components/articles/articles.vue"
  import axios from "axios"

  export default {
    name: "blog",
    components: {
      slider,
      sidebar,
      articles
    },

    data() {
      return {
        articles: undefined,
        url: Global.url
      }
    },
    mounted() {
      console.log("componente BLOG montado ")
      this.getArticles()
    },
    methods: {
      getArticles() {
        setTimeout(() => {
          axios.get(`${this.url}articles`).then(res => {
            if (res.data.status === "success") {
              this.articles = res.data.articles
              console.log(this.articles)
            }
          })
        }, 2000)
      }
    }
  }
</script>
<style></style>

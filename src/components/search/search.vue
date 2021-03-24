<template src="./search.html"></template>

<script>
import slider from "../slider/slider.vue"
  import sidebar from "../sidebar/sidebar.vue"
  import Global from "../../providers/constants"
  import articles from "../../components/articles/articles.vue"
  import axios from "axios"

  export default {
    name: "search",
    components: {
      slider,
      sidebar,
      articles
    },

    data() {
      return {
        select: undefined,
        articles: undefined,
        searchString: undefined,
        url: Global.url
      }
    },
    mounted() {
      this.searchString = this.$route.params.searchString
      console.log("componente search montado")
      console.log(this.searchString);
      this.getArticlesBySearch(this.searchString)
    },
    methods: {
      getArticlesBySearch(searchString) {
        setTimeout(()=> {
          axios.get(`${this.url}search/${searchString}`).then(res => {
            if (res.data.status === "success") {
              this.articles = res.data.articles
            }
          })
        }, 2000)
      }
    }
  }
</script>
<style src="./search.css"></style>

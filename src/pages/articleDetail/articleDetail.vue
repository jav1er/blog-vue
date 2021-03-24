<template src="./articleDetail.html"></template>
<script>
  import sidebar from "../../components/sidebar/sidebar.vue"
  import Global from "../../providers/constants"
  import axios from "axios"
  import swal from "sweetalert"

  export default {
    name: "articleDetail",
    components: {
      sidebar
    },
    data() {
      return {
        url: Global.url,
        article: []
      }
    },
    mounted() {
      let articleId = this.$route.params.id
      this.getArticle(articleId)
    },
    methods: {
      getArticle(articleId) {
        axios.get(this.url + "article/" + articleId).then(res => {
          if (res.data.status == "success") {
            this.article = res.data.article
          }
        })
      },
      deleteArticle(articleId) {
        axios.delete(this.url + "article/" + articleId).then(() => {
          swal("Artículo borrado", "El artículo fue borrado", "success")
        })
        this.$router.push("/blog")
      }
    }
  }
</script>

<style src="./articleDetail.css"></style>

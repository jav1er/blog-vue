<template src="../createArticle/createArticle.html"></template>
<script>
  import sidebar from "../../components/sidebar/sidebar.vue"
  import Global from "../../providers/constants"
  import modelArticle from "../../models/modelArticle"
  import HttpRequest from "../../providers/HttpRequest"
  import swal from "sweetalert"

  export default {
    name: "editArticle",
    components: {
      sidebar
    },

    data() {
      return {
        url: Global.url,
        objectArticle: new modelArticle("", "", null, ""),
        file: "",
        isEdit: true,
        HttpRequest: new HttpRequest()
      }
    },
    mounted() {
      console.log("componente editarArticulo montado ")
      let articleId = this.$route.params.id
      this.getArticle(articleId)
    },
    methods: {
      async getArticle(articleId) {
        let directionRequest = this.url + "article/" + articleId
        let result = await this.HttpRequest.getRequest(directionRequest)
        this.objectArticle = result.article
      },
      async save() {
        let articleID = this.$route.params.id
        let directionRequest = this.url + "article/" + articleID
        let result = await this.HttpRequest.putRequest(
          directionRequest,
          this.objectArticle
        )
        if (result.status == "success") {
          if (this.file) {
            const formData = new FormData()
            formData.append("file0", this.file, this.file.name)
            let articleId = result.article._id
            let direction = this.url + "upload-image/" + articleId
            let resultPost = await this.HttpRequest.postRequest(direction, formData)
            if (resultPost.article) {
              swal(
                "Artículo editado",
                "El artículo se a editado correctamente",
                "success"
              )
              this.objectArticle = resultPost.article
              this.$router.push("/detalles/" + articleId)
            }
          }

          if (!this.file) {
            swal(
              "Artículo editado",
              "El artículo se a editado correctamente",
              "success"
            )
            this.objectArticle = result.article
            this.$router.push("/detalles/" + articleID)
          }
        }
      },
      changeFile() {
        this.file = this.$refs.file.files[0]
        console.log(this.file)
      }
    }
  }
</script>
<style src="./editArticle.css"></style>

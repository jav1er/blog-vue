<template src="./createArticle.html"></template>

<script>
  import sidebar from "../../components/sidebar/sidebar.vue"
  import Global from "../../providers/constants"
  import modelArticle from "../../models/modelArticle"
  import axios from "axios"
  import swal from "sweetalert"

  export default {
    name: "createArticle",
    components: {
      sidebar
    },

    data() {
      return {
        url: Global.url,
        objectArticle: new modelArticle("", "", null, ""),
        file: ""
      }
    },
    mounted() {
      console.log("componente crearArticulo montado ")
      console.log(this.objectArticle)
    },
    methods: {
      save() {
        axios
          .post(this.url + "salvar", this.objectArticle)
          .then(res => {
            console.log("en el then")
            console.log(res.data)
            if (res.data.status == "success") {
              if (this.file) {
                const formData = new FormData()
                formData.append("file0", this.file, this.file.name)
                let articleId = res.data.article._id
                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then(res => {
                    if (res.data.article) {
                      swal(
                        "Artículo",
                        "El artículo se a creado correctamente",
                        "success"
                      )
                      this.objectArticle = res.data.article
                      this.$router.push("/blog")
                    }
                  })
              }
              if (!this.file) {
                swal(
                  "Artículo",
                  "El artículo se a creado correctamente",
                  "success"
                )
                this.objectArticle = res.data.article
                this.$router.push("/blog")
              }
            }
          })
          .catch(err => {
            console.log("en el catch")
            console.log(err)
          })
      },
      changeFile() {
        this.file = this.$refs.file.files[0]
        console.log(this.file)
      }
    }
  }
</script>
<style src="./createArticle.css"></style>

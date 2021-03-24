<template src='./articles.html'></template>
<script>
  import Global from "../../providers/constants"
  export default {
    name: "articles",
    props: ["articles"],
    data() {
      return {
        url: Global.url
      }
    },
    mounted() {
      console.log("Componente articles montado")
      console.log("prop que resive componente articles")
      console.log(this.articles)
      console.log(`longitud de el props: ${this.articles.length}`)
    }
  }
</script>

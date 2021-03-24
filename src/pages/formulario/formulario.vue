<template src="./formulario.html" ></template>

<script>
  import sidebar from "../../components/sidebar/sidebar.vue"
  export default {
    name: "formulario",
    components: {
      sidebar
    },
    data() {
      return {
        user: {
          name: "",
          lastName: "",
          bio: "",
          genero: ""
        }
      }
    },
    updated() {
      console.log(this.user)
    }
  }
</script>
<style src="./formulario.css" ></style>

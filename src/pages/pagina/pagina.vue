<template src="./pagina.html"></template>

<script>
import slider from "../../components/slider/slider.vue"
import sidebar from "../../components/sidebar/sidebar.vue"
export default {
  name: "pagina",
  components: {
    slider,
    sidebar,
    
  },

  data() {
    return {
      id_desde_url: null,
      name: "x",
      active:false
    }
  },

  created() {
    console.log("componente creado")
  },

  mounted() {
    this.id_desde_url = this.$route.params.id
    console.log("componente montado")
  },

  updated() {
    console.log("componente actualizado")
  },

  destroyed() {
    console.log("componente destruido")
  },

  methods: {
    actualizarName() {
      this.name = "click"
      console.log("estas en el method actualizarName")
    },

    redirection() {
      console.log("a el blog")
      this.$router.push({
        name: "blog",
        params: {arg: "parametro capturado en pagina"},
      })
    },

    change(){
      console.log(this.active);
      this.active = !this.active
    }
  },
}
</script>
<style src="./pagina.css"></style>

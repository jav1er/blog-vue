<template src="./firstComp.html"></template>

<script>
export default {
  name: "firstComp",

  data() {
    return {
      title: "Mi Componente",
      subtitle: "Soy el subtitulo de mi componente",
      name: 0,
      edad: 0,
      frutas:['pera','manzana','uva','mandarina','piña']
    }
  },

  methods: {
    actualizarName() {
      let r = 5
      let a = setInterval(() => {
        this.name++
        console.log(this.name)
        r--
        console.log(r)
        this.name == 5 && clearInterval(a)
      }, 500)
    },
  },
}
</script>
<style src="./firstComp.css"></style>

import Vue from "vue"
import App from "./app/App.vue"
import VueRouter from "vue-router"
import VueMoment from "vue-moment"
import moment from "moment"
import "moment/locale/es"
import routes from "../src/providers/routes"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueMoment, {moment})

const router = new VueRouter({
  routes,
  mode: "history"
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")

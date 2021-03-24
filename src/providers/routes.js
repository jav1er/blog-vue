import HelloWorld from "../components/helloWorld/HelloWorld.vue"
import lastArticles from "../pages/lastArticle/lastArticle.vue"
import pagina from "../pages/pagina/pagina.vue"
import blog from "../pages/blog/blog.vue"
import formulario from "../pages/formulario/formulario.vue"
import ErrorComponent from "../components/errorComp/errorComp.vue"
import firstComp from "../components/firstComp/firstComp.vue"
import peliculas from "../pages/peliculas/peliculas.vue"
import search from "../components/search/search.vue"
import redirect from "../components/redirect/redirect.vue"
import articleDetail from "../pages/articleDetail/articleDetail.vue"
import createArticle from "../pages/createArticle/createArticle.vue"
import editArticle from "../pages/editArticle/editArticle.vue"


const routes = [
 {path: "/home", component: lastArticles},
 {path: "/ultimos-articulos", component: lastArticles},
 {path: "/pagina/:id?", name: "pagina", component: pagina},
 {path: "/blog/:arg?", name: "blog", component: blog},
 {path: "/formulario", component: formulario},
 {path: "/buscador/:searchString", component: search},
 {path: "/crear-articulo", name:'create', component: createArticle},
 {path: "/editar/:id", name:'edit', component: editArticle},
 {path: "/redirect/:searchString", component: redirect},
 {path: "/detalles/:id", name: "articleDetail", component: articleDetail},
 {path: "/hello", component: HelloWorld},
 {path: "/componente", component: firstComp},
 {path: "/movies", name: "m", component: peliculas},
 {path: "/", component: lastArticles},
 {path: "*", component: ErrorComponent}
]

export default routes
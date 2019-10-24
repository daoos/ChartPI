import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/Home'
import LoginPage from '../views/login/LoginPage'
import NotFound from '../views/home/404'
import Fila from '../views/fila/Fila'
import Vendedores from '../views/vendedores/Vendedores'
import CadastrarVendedor from '../views/vendedores/CadastrarVendedor'
import EditarVendedor from '../views/vendedores/EditarVendedor'
import Usuarios from '../views/usuario/Usuarios'
import CadastrarUsuario from '../views/usuario/CadastrarUsuario'
import EditarUsuario from '../views/usuario/EditarUsuario'
import Graficos from '../views/graficos/Graficos'

Vue.use(Router)

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home Page', component: Home },
    { path: '/404', name: '404', component: NotFound },
    { path: '/login', component: LoginPage },
    { path: '/fila', component: Fila },
    { path: '/vendedores', name: 'Vendedores', component: Vendedores },
    { path: '/cadastrarVendedor', name: 'Cadastrar Vendedor', component: CadastrarVendedor },
    { path: '/editarVendedor', name: 'Editar Vendedor', component: EditarVendedor },
    { path: '/usuarios', name: 'Usuários', component: Usuarios },
    { path: '/cadastrarUsuario', name: 'Cadastrar Usuário', component: CadastrarUsuario },
    { path: '/editarUsuario', name: 'Editar Usuário', component: EditarUsuario },
    { path: '/graficos', name: 'Gráficos', component: Graficos },
    { path: '*', redirect: '/404' }
  ]
})

router.beforeEach((to, from, next) => {
  const publicPages = ['/login']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('usuario')
  if (authRequired && !loggedIn) {
    return next('/login')
  }
  next()
})

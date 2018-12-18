import Vue from 'vue'
import Router from 'vue-router'

import Home from './vue/Home.vue'
import Login from './vue/LogIn.vue'
import Catalogo from './vue/Catalogo.vue'
import Profile from './vue/Profile.vue'
import Producto from './vue/Producto.vue'
import SubirArchivo from './vue/SubirArchivo.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/catalogo',
            name: 'Catalogo',
            component: Catalogo
        },
        {
            path: '/producto',
            name: 'Producto',
            component: Producto
        },
        {
            path: '/subirArchivo',
            name: 'SubirArchivo',
            component: SubirArchivo
        }
    ]
})

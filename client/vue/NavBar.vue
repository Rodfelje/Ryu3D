<template>
    <div id="RyuNavBar">
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-navbar-toggle target="navMainPage_collapse"></b-navbar-toggle>
            <router-link to="/">
                <b-navbar-brand >Ryu3D</b-navbar-brand>
            </router-link>

            <b-collapse is-nav id="navMainPage_collapse">
                <b-navbar-nav>
                    <b-nav-item href="#">FORO</b-nav-item>
                    <b-nav-item to="/catalogo">CATEGORIAS</b-nav-item>
                    <b-nav-item href="#">FAQ</b-nav-item>
                    <b-nav-item href="#">CONTACTANOS</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form right>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>
                    <div v-if="logged">
                            <b-nav-item-dropdown text="MI CUENTA" extra-toggle-classes="nav-link-custom" right>
                            <b-dropdown-item to="/profile">Perfil</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>Mensaje</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item to="/subirArchivo" >Crear</b-dropdown-item>
                            <b-dropdown-divider></b-dropdown-divider>
                            <b-dropdown-item>CERRAR SESIÓN</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </div>
                    <div v-else>
                        <b-nav-item to="/login" right>
                            LOG IN
                        </b-nav-item>
                    </div>
                </b-navbar-nav>
            </b-collapse>
            <b-navbar-nav right>
                <b-nav-item>
                    <img src="../images/cart-icon.png" fluid alt="Cart">
                </b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'RyuNavBar',
    data () {
        return {
            logged: true
        }
    }
}
</script>

<template>
    <b-container fluid id="LogIn">
        <br>
        <b-row>
            <b-col md="4"></b-col>
            <b-col md="4">
                <b-row>
                    <b-col>
                        <!-- INICIAR SESION-->
                        <b-card header="INICIAR SESION"
                                header-text-variant="white"
                                header-tag="header"
                                header-bg-variant="dark"
                        >
                            <b-row>
                                <b-col sm="5"><label for="input-usuario">Usuario:</label></b-col>
                                <b-col sm="7">
                                     <b-form-input id="input-usuario" size="sm" type="text" placeholder="Escribe el nombre del Usuario"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row>
                                 <b-col sm="5"><label for="input-password">Password:</label></b-col>
                                 <b-col sm="7">
                                      <b-form-input id="input-password" size="sm" type="text" placeholder="Ingrese su contraseña"></b-form-input>
                                </b-col>
                            </b-row>
                            <br>
                            <b-row class="justify-content-md-center">
                                <b-col md="3">
                                    <b-button>ENTRAR</b-button>
                                </b-col>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
                <br>
                <b-row>
                    <b-col>
                        <!--Registrarse como usuario-->
                        <b-card header="REGIATRARSE COMO USUARIO"
                                header-text-variant="white"
                                header-tag="header"
                                header-bg-variant="dark"
                        >
                            <p class="card-text">Para acceder al sistema tómase unos minutos para crear una cuenta .</p>
                            <p class="card-text">Lo cual se rellenara un formulario con sus respectivos dato.</p>
                            <b-row class="my-1">
                                <b-col sm="5"><label for="input-usuario">Usuario:</label></b-col>
                                <b-col sm="7">
                                     <b-form-input id="input-usuario" size="sm" type="text" placeholder="Ingrese un nuevo nombre de usuario"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                 <b-col sm="5"><label for="input-password">Password:</label></b-col>
                                 <b-col sm="7">
                                      <b-form-input id="input-password" size="sm" type="text" placeholder="Ingrese una nueva contraseña"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="5"><label for="input-nombre">Nombre:</label></b-col>
                                <b-col sm="7">
                                    <b-form-input id="input-nombre" size="sm" type="text" placeholder="Ingrese sus nombres"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="5"><label for="input-apellido">Apellido:</label></b-col>
                                <b-col sm="7">
                                    <b-form-input id="input-apellido" size="sm" type="text" placeholder="Ingrese sus apellidos"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="5"><label for="input-email">Email:</label></b-col>
                                <b-col sm="7">
                                    <b-form-input id="input-email" size="sm" type="text" placeholder="Ingrese su correo electrónico"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="5"><label for="input-celular">Celular:</label></b-col>
                                <b-col sm="7">
                                    <b-form-input id="input-celular" size="sm" type="text" placeholder="Ingrese su número telefónico"></b-form-input>
                                </b-col>
                            </b-row>
                            <b-row class="my-1">
                                <b-col sm="5"><label for="input-nacimiento">Fecha de nacimiento:</label></b-col>
                                <b-col sm="7">
                                    <b-form-input id="input-nacimiento" size="sm" type="text" placeholder="dd/mm/aa"></b-form-input>
                                </b-col>
                            </b-row>

                            <b-row class="justify-content-center">
                                <b-button >REGISTRARSE</b-button>
                            </b-row>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
            <b-col md="4"></b-col>
        </b-row>
    </b-container>
</template>

<script>
import RyuNavBar from './NavBar.vue'

export default {
    name: 'LogIn',
    components: {
        RyuNavBar
    }
}
</script>

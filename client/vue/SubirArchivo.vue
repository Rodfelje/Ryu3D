<template>
    <div id="SubirArchivo">
        <RyuNavBar/>
        <br>
        <b-container fluid>
            <b-row>
                <b-col md="3"></b-col>
                <b-col md="6">
                    <b-row>
                        <b-col>
                            <b-card header="CREAR O SUBIR UN ARCHIVO NUEVO"
                                    header-text-variant="white"
                                    header-tag="header"
                                    header-bg-variant="dark"
                            >
                                <b-form-file v-model="file2" class="mt-3" plain></b-form-file>
                                <br>
                                <b-row class="justify-content-md-center">
                                    <b-col md="3">
                                        <b-button>CARGAR ARCHIVO</b-button>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
                <b-col md="3"></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import RyuNavBar from './NavBar.vue'

export default {
    name: 'LogIn',
    components: {
        RyuNavBar
    },
    data () {
      return {
        file2: null
      }
    }
}
</script>

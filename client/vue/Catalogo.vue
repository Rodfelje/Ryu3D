<template>
    <div id="Catalogo">
        <RyuNavBar/>
        <br>
        <b-container fluid id='Catalogo' >
            <b-row>
                <b-col md="1"></b-col>
                <b-col md="2">
                    <!-- CATEGORIAS -->
                    <b-card header="CATEGORIAS"
                            header-text-variant="white"
                            header-tag="header"
                            header-bg-variant="dark"
                    >
                        <b-row>
                            <b-col>
                                <b-form-group label="CATEGORIA1">
                                    <b-form-checkbox-group stacked v-model="selected" name="flavour2" :options="options1">
                                    </b-form-checkbox-group>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <br>
                        <b-row>
                            <b-col>
                                <b-form-group label="CATEGORIA2">
                                    <b-form-checkbox-group stacked v-model="selected" name="flavour2" :options="options2">
                                    </b-form-checkbox-group>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-card>
                    Selected: <strong>{{ selected }}</strong>
                </b-col>
                <b-col md="1"></b-col>
                <b-col md="7">
                    <!-- ARTICULOS CATALOGO -->
                    <b-card header="RESULTADOS"
                        header-text-variant="white"
                        header-tag="header"
                        header-bg-variant="dark"
                    >
                        <b-row>
                            <b-col md="4">
                                <b-card
                                    img-src="client/images/ruinasmodelo01-miniatura.jpg"
                                    img-alt="Card Image"
                                    title="Model Name"
                                >
                                    <b-button to="/producto" variant="dark">Ver modelo</b-button>
                                </b-card>
                            </b-col>
                            <b-col md="4">
                                <b-card
                                    img-src="client/images/ruinasmodelo01-miniatura.jpg"
                                    img-alt="Card Image"
                                    title="Model Name"
                                >
                                    <b-button href="#" variant="dark">Ver modelo</b-button>
                                </b-card>
                            </b-col>
                            <b-col md="4">
                                <b-card
                                    img-src="client/images/ruinasmodelo01-miniatura.jpg"
                                    img-alt="Card Image"
                                    title="Model Name"
                                >
                                    <b-button href="#" variant="dark">Ver modelo</b-button>
                                </b-card>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col md="4">
                                <b-card
                                    img-src="client/images/ruinasmodelo01-miniatura.jpg"
                                    img-alt="Card Image"
                                    title="Model Name"
                                >
                                    <b-button href="#" variant="dark">Ver modelo</b-button>
                                </b-card>
                            </b-col>
                            <b-col md="4">
                                <b-card
                                    img-src="client/images/ruinasmodelo01-miniatura.jpg"
                                    img-alt="Card Image"
                                    title="Model Name"
                                >
                                    <b-button href="#" variant="dark">Ver modelo</b-button>
                                </b-card>
                            </b-col>
                            <b-col md="4">
                                <b-card
                                    img-src="client/images/ruinasmodelo01-miniatura.jpg"
                                    img-alt="Card Image"
                                    title="Model Name"
                                >
                                    <b-button href="#" variant="dark">Ver modelo</b-button>
                                </b-card>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
                <b-col md="1"></b-col>
            </b-row>
        </b-container>
    </div>
</template>


<script>
import RyuNavBar from './NavBar.vue'

export default {
    name: 'Catalogo',
    components: {
        RyuNavBar
    },
    data(){
        return {
            selected: [],
            options1: [
                {text: 'Art', value: 'art'},
                {text: 'Fashion', value: 'fashion'},
                {text: 'Gadgets', value: 'gadgets'},
                {text: 'Household', value: 'household'},
                {text: 'Learning', value: 'learning'},
                {text: 'Models', value: 'models'},
                {text: 'Tools', value: 'tools'},
                {text: 'Toys', value: 'toys'}
            ],
            options2: [
                {text: 'Newest', value: 'newest'},
                {text: 'Popular', value: 'popular'},
                {text: 'Random', value: 'random'},
                {text: 'Collections', value: 'collections'}
    		],
    		productoLink: "producto.html"
    	}
    }
}
</script>

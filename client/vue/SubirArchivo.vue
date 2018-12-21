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
                                <b-form @submit="onSubmit" @reset="onReset">
				<b-form-file v-model="design.img" class="mt-3" plain required></b-form-file>
                                <br>
				<b-form-textarea v-model="design.name" placeholder="Ingrese el nombre del diseño" required></b-form-textarea>
				<br>
                                <b-row class="justify-content-md-center">
                                    <b-col md="6">
                                        <b-button type="submit">CARGAR ARCHIVO</b-button>
				    </b-col>
				    <b-col md = "6">
					<b-button type="reset" variant="danger">LIMPIAR</b-button>
                                    </b-col>
                                </b-row>
				</b-form>
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
        design: {
          img: null,
          name: '',
	  author: 'admin'
	},
      }
    },
    
    methods: {
    
        onSubmit(evt){
	    evt.preventDefault();
	    console.log(this.design.img);
	    console.log(this.design.name);
	    console.log(this.design.author);
	    fetch('http://localhost:3000/products', {
		method: "POST",
		body: {
			'name': this.design.name,
			'author': this.design.author,
			'img': this.design.img
		},
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	    })
	    .then(res => console.log(res));
        },

	onReset(){
	   this.design.img = null;
	   this.design.name = '';
	}

    }

}
</script>

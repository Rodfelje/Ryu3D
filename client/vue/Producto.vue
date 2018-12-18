<template>
    <div id="Producto">
        <RyuNavBar/>
        <br>
        <b-container fluid>
            <b-row>
                <b-col md="1"></b-col>
                <b-col md="10">
                    <b-row>
                        <b-col md="4">
                            <!-- PRODUCTO MAIN INFO -->
                            <div id="ProductoMainInfo">
                                <b-row align="center">
                                    <b-col>
                                        <img :src="'client/images/products/' + productName + '.png'"
                                            alt="Product Pic"
                                            width="240"
                                        ></img>
                                    </b-col>
                                </b-row><br>
                                <b-row align="center">
                                    <b-col>
                                        <p class="name-text">{{ productName }}</p>
                                    </b-col>
                                </b-row> <br>
                                <b-row align="center">
                                    <b-col>
                                        <b-button href="#" variant="dark">Descargar</b-button>
                                    </b-col>
                                </b-row><br>
                                <b-row>
				    <table align="center">
                        <tr>
                        <td align="center">by</td>
                        <td align="center" href="#">{{ diseñadorName }}</td>
				        </tr>
				        <tr>
                        <td align="center">Descargas</td>
					    <td align="center">{{ dowloadsRating }}</td>
				        </tr>
				        <tr>
                                            <td align="center">Colecci&oacute;n</td>
					    <td align="center">{{ collectionRating }}</td>
				        </tr>

				        <tr>
                                            <td align="center">Likes</td>
					    <td align="center">{{ likesRating }}</td>
                        </tr>
                        <tr>
                            <td align="center">DisLikes</td>
                            <td align="center">{{ dislikesRating }}</td>
                        </tr>
				    </table>
			        </b-row>
			    </div>
                        </b-col>
			<b-col>
                            <!-- PRODUCTO EXTRA DATA -->
			    <div id="ProductoExtraData">
                                <div class="tab">
				    <b-card no-body>
				        <b-tabs card>
					    <b-tab title="SOBRE" active>
						<b-card header="Resumen">
							{{resumen}}
						</b-card><br>
						<b-card>
						    <b-row>
							<b-col>
							    <b-card header="Etiquetas">
                                    <li v-for="etiqueta in etiquetas">
								        {{ etiqueta.name }}
								    </li>
							    </b-card>
							</b-col>
							<b-col>
							    <b-card header="Categorias">
							        <ul>
								    <li v-for="categoria in categorias">
								        {{ categoria.name }}
								    </li>
								</ul>
							    </b-card>
							</b-col>
						    </b-row>
						</b-card>
					    </b-tab>
					    <b-tab title="ESPECIFICACIONES">
					    </b-tab>
					    <b-tab title="COMENTARIOS">
					    </b-tab>
					</b-tabs>
				    </b-card>
				</div>
			    </div>

			</b-col>
                    </b-row>
		</b-col>
		<b-col></b-col>
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
    data() {
        return {
        	productName: "producto1",
        	diseñadorName: "Jorge Palacios",
        	dowloadsRating: "1",
        	collectionRating: "2",
        	comentariosRating: "4",
        	likesRating: "40",
        	dislikesRating:"10",
        	resumen: "",
        	etiquetas: [
        		{name:"pokemon"},
        		{name:"charmander"},

        	],
        	categorias: [
        	    { name: "Anime" },
        	    { name: "Hogar" },
        	]
        }
    }
}
</script>

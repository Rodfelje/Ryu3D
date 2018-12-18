<template>
    <div id="Profile">
        <RyuNavBar/>
        <br>
        <b-container fluid id="ProfilePage">
            <b-row>
                <b-col md="1"></b-col>
                <b-col md="10">
                    <b-row>
                        <b-col md="4">
                            <!-- PROFILE MAIN INFO -->
                            <div id="ProfileMainInfo">
                                <b-row align="center">
                                    <b-col >
                                        <img :src="'client/images/users/' + currentUser + '.png'"
                                            alt="User Image"
                                            width="240"
                                        ></img>
                                    </b-col>
                                </b-row> <br>
                                <b-row align="center">
                                    <b-col>
                                        <p class="name-text">{{ fullName }}</p>
                                    </b-col>
                                </b-row><br>
                				<b-row align="center">
                				    <b-col>
                				        <b-button href="#" variant="dark">Editar Perfil</b-button>
                				    </b-col>
                				</b-row><br>
                                <b-row align="center">
                                    <b-col>
                                        <table align="center">
                                            <tr>
                                                <td align="center">Siguidores</td>
                                                <td align="center">Siguiendo</td>
                                            </tr>
                                            <tr>
                                                <td align="center">{{ followers }}</td>
                                                <td align="center">{{ following }}</td>
                                            </tr>
                                            <tr>
                                                <td align="center">Dise&ntilde;o</td>
                                                <td align="center">{{ designRating }}</td>
                                            </tr>
                                            <tr>
                                                <td align="center">Colecci&oacute;n</td>
                                                <td align="center">{{ collectionRating }}</td>
                                            </tr>
                                            <tr>
                                                <td align="center">Marcas</td>
                                                <td align="center">{{ marksRating }}</td>
                                            </tr>
                                            <tr>
                                                <td align="center">Likes</td>
                                                <td align="center">{{ likesRating }}</td>
                                            </tr>
                                        </table>
                                    </b-col>
                                </b-row>
                            </div>
                        </b-col>

                        <b-col md="8">
                            <!-- PROFILE EXTRA DATA -->
                            <div id="ProfileExtraData">
                                <div class="tab">
                                    <b-card no-body>
                                        <b-tabs card>
                                            <b-tab title="SOBRE" active>
                                                <b-card header="Acerca de ti">
                                                    <b-row>
                                                        <b-col>
                                                            <img src="client/images/twitter-icon.png" height="40">
                                                            <a :href="TwitterAccount"> Cuenta de Twitter</a>
                                                        </b-col>
                                                        <b-col><img src="client/images/pc-icon.png" height="40"><a :href="WebPage"> Sitio Web</a></b-col>
                                                    </b-row>
                                                </b-card>
                                                <br>
                                                <b-card>
                                                    <b-row>
                                                        <b-col>
                                                            <b-card header="¿Quién soy?">
                                                                <p>{{ description }}</p>
                                                            </b-card>
                                                        </b-col>
                                                        <b-col>
                                                            <b-card header="¿Qué herramientas uso?">
                                                                <ul>
                                                                    <li v-for="tool in tools">
                                                                        {{ tool.name }}
                                                                    </li>
                                                                </ul>
                                                            </b-card>
                                                        </b-col>
                                                    </b-row> <br>
                                                    <b-row>
                                                        <b-col>
                                                            <b-card header="Habilidades en el diseño 3D">
                                                                <p>{{ habilities3D }}</p>
                                                            </b-card>
                                                        </b-col>
                                                    </b-row> <br>
                                                    <b-row>
                                                        <b-col>
                                                            <b-card header="Grupos a los que pertenezco">
                                                                <div v-if="groups.length == 0">Usted no pertenece a ningun grupo aun</div>
                                                                <div v-else>Ustede pertenece a los siguientes grupos:
                                                                    <ul>
                                                                        <li v-for="group in groups">
                                                                            {{ group.name }}
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div>
                                                                    <b-button href="#" variant="dark" width="100%">
                                                                        Navegar y unirse a grupos
                                                                    </b-button>
                                                                </div>
                                                            </b-card>
                                                        </b-col>
                                                    </b-row>
                                                </b-card>
                                            </b-tab>
                                            <b-tab title="DISEÑOS">
                                                <b-container class="ImagesContainer">
                                                    <b-row>
                                                        <b-col sm = "4">
                                                            <div v-if="designs.length >= 1">
                                                                <p align="center">{{ designs[0].name }}</p> <br>
                                                                <img :src="'client/images/designs/' + currentUser + '/' + designs[0].filename"
                                                                    width="100%"
                                                                    height = "200"
                                                                >
                                                                <br><br>
                                                                <div align="center">
                                                                    <b-button href="#" variant="dark">Ver Modelo</b-button>
                                                                </div><br>
                                                            </div>
                                                        </b-col>
                                                        <b-col sm = "4">
                                                            <div v-if="designs.length >= 2">
                                                                <p align="center">{{ designs[1].name }}</p><br>
                                                                <img :src="'client/images/designs/' + currentUser + '/' + designs[1].filename"
                                                                    width="100%"
                                                                    height = "200">
                                                                <br><br>
                                                                <div align="center">
                                                                    <b-button href="#" variant="dark">Ver Modelo</b-button>
                                                                </div><br>
                                                            </div>
                                                        </b-col>
                                                        <b-col sm = "4">
                                                            <div v-if="designs.length >= 3">
                                                                <p align="center">{{ designs[1].name }}</p><br>
                                                                <img :src="'client/images/designs/' + currentUser + '/' + designs[1].filename"
                                                                    width="100%"
                                                                    height = "200">
                                                                <br><br>
                                                                <div align="center">
                                                                    <b-button href="#" variant="dark">Ver Modelo</b-button>
                                                                </div><br>
                                                            </div>
                                                        </b-col>
                                                        <b-col sm = "4">
                                                            <div v-if="designs.length >= 4">
                                                                <p align="center">{{ designs[1].name }}</p><br>
                                                                <img :src="'client/images/designs/' + currentUser + '/' + designs[1].filename"
                                                                    width="100%"
                                                                    height = "200">
                                                                <br><br>
                                                                <div align="center">
                                                                    <b-button href="#" variant="dark">Ver Modelo</b-button>
                                                                </div><br>
                                                            </div>
                                                        </b-col>
                                                        <b-col sm = "4">
                                                            <div v-if="designs.length >= 5">
                                                                <p align="center">{{ designs[1].name }}</p><br>
                                                                <img :src="'client/images/designs/' + currentUser + '/' + designs[1].filename"
                                                                    width="100%"
                                                                    height = "200">
                                                                <br><br>
                                                                <div align="center">
                                                                    <b-button href="#" variant="dark">Ver Modelo</b-button>
                                                                </div><br>
                                                            </div>
                                                        </b-col>
                                                        <b-col sm = "4">
                                                            <div v-if="designs.length >= 6">
                                                                <p align="center">{{ designs[1].name }}</p><br>
                                                                <img :src="'client/images/designs/' + currentUser + '/' + designs[1].filename"
                                                                    width="100%"
                                                                    height = "200">
                                                                <br><br>
                                                                <div align="center">
                                                                    <b-button href="#" variant="dark">Ver Modelo</b-button>
                                                                </div><br>
                                                            </div>
                                                        </b-col>
                                                        <b-col sm = "4">
                                                            <div v-if="designs.length >= 7">
                                                                <p align="center">{{ designs[1].name }}</p><br>
                                                                <img :src="'client/images/designs/' + currentUser + '/' + designs[1].filename"
                                                                    width="100%"
                                                                    height = "200">
                                                                <br><br>
                                                                <div align="center">
                                                                    <b-button href="#" variant="dark">Ver Modelo</b-button>
                                                                </div><br>
                                                            </div>
                                                        </b-col>
                                                        <b-col sm = "4">
                                                            <div v-if="designs.length >= 8">
                                                                <p align="center">{{ designs[1].name }}</p><br>
                                                                <img :src="'client/images/designs/' + currentUser + '/' + designs[1].filename"
                                                                    width="100%"
                                                                    height = "200">
                                                                <br><br>
                                                                <div align="center">
                                                                    <b-button href="#" variant="dark">Ver Modelo</b-button>
                                                                </div><br>
                                                            </div>
                                                        </b-col>
                                                        <b-col sm = "4">
                                                            <div v-if="designs.length >= 9">
                                                                <p align="center">{{ designs[1].name }}</p><br>
                                                                <img :src="'client/images/designs/' + currentUser + '/' + designs[1].filename"
                                                                    width="100%"
                                                                    height = "200">
                                                                <br><br>
                                                                <div align="center">
                                                                    <b-button href="#" variant="dark">Ver Modelo</b-button>
                                                                </div><br>
                                                            </div>
                                                        </b-col>
                                                    </b-row>
                                                </b-container>
                                            </b-tab>
                                            <b-tab title="COLECCIONES">
                                            </b-tab>
                                            <b-tab title="LIKE">
                                            </b-tab>
                                        </b-tabs>
                                    </b-card>
                                </div>
                            </div>
                        </b-col>
                    </b-row>
                </b-col>
		      <b-col md="1"></b-col>
          </b-row>
      </b-container>
    </div>
</template>


<script>
import RyuNavBar from './NavBar.vue'

export default {
    name: 'Profile',
    components: {
        RyuNavBar
    },
    data () {
        return {
        	currentUser: "admin",
        	fullName: "Doddy Dodorio",
        	followers: "27",
        	following: "1",
        	designRating: "5",
        	collectionRating: "2",
        	marksRating: "4",
        	likesRating: "40",
        	description: "Soy un perro. Woof!",
        	TwitterAccount: "www.twitter.com/DoddyDodorio",
        	WebPage: "www.doddydodorio.com.pe",
        	tools: [
        	    { name: "Photoshop" },
        	    { name: "Illustrator" },
        	    { name: "Adobe flash" }
        	],
        	habilities3D: "Soy bueno usando el mouse aunque tengo patas :D",
        	groups: [
                    { name: "Universidad Canina" },
        	    { name: "Do it by yourself - Dogs" },
        	    { name: "Seguidores de Cu chulainn" },
        	    { name: "Huellas y sonrisas" }
        	],
        	designs: [
        	    {
        	        name: "Star Wars 1",
        		filename: "Design01.png"
        	    },
        	    {
        	        name: "Hatsune Miku",
        		filename: "Design02.png"
        	    }

        	]
        }
    }
}
</script>

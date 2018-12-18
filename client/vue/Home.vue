<template>
    <div id="Home">
        <RyuNavBar/>
        <br>
        <b-container fluid>
            <b-row>
                <b-col md="1"></b-col>
                <b-col md="10">
                    <b-row>
                        <b-col>
                            <!-- MAIN PAGE CAROUSEL-->
                            <b-carousel
                                controls
                                indicators
                                background="#ababab"
                                :interval="4000"
                                img-width="1024"
                                img-height="360"
                            >
                                <b-carousel-slide img-src="./client/images/carousel-1.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="./client/images/carousel-2.jpg"></b-carousel-slide>
                                <b-carousel-slide img-src="./client/images/carousel-3.jpg"></b-carousel-slide>
                            </b-carousel>
                        </b-col>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col md="7">
                            <b-row>
                                <b-col>
                                    <!-- ARTICULOS POPULARES -->
                                    <div id="PopularCard">
                                        <b-card header="MODELOS POPULARES"
                                            header-text-variant="white"
                                            header-tag="header"
                                            header-bg-variant="dark"
                                        >
                                            <b-row>
                                                <b-col md="4">
                                                    <b-card
                                                        img-src="./client/images/ruinasmodelo01-miniatura.jpg"
                                                        img-alt="Card Image"
                                                        sub-title="Model Name"
                                                    >
                                                        <b-button href="#" variant="dark">Ver modelo</b-button>
                                                    </b-card>
                                                </b-col>
                                                <b-col md="4">
                                                    <b-card
                                                        img-src="./client/images/ruinasmodelo01-miniatura.jpg"
                                                        img-alt="Card Image"
                                                        sub-title="Model Name"
                                                    >
                                                        <b-button href="#" variant="dark">Ver modelo</b-button>
                                                    </b-card>
                                                </b-col>
                                                <b-col md="4">
                                                    <b-card
                                                        img-src="./client/images/ruinasmodelo01-miniatura.jpg"
                                                        img-alt="Card Image"
                                                        sub-title="Model Name"
                                                    >
                                                        <b-button href="#" variant="dark">Ver modelo</b-button>
                                                    </b-card>
                                                </b-col>
                                            </b-row>
                                        </b-card>
                                    </div>
                                </b-col>
                            </b-row> <br>
                            <b-row>
                                <b-col>
                                    <!-- ARTICULOS NUEVOS -->
                                    <div id="NewCard">
                                        <b-card header="NUEVOS MODELOS"
                                            header-text-variant="white"
                                            header-tag="header"
                                            header-bg-variant="dark"
                                        >
                                        <b-row>
                                            <b-col md="4">
                                                <b-card
                                                    img-src="./client/images/ruinasmodelo01-miniatura.jpg"
                                                    img-alt="Card Image"
                                                    sub-title="Model Name"
                                                >
                                                    <b-button href="#" variant="dark">Ver modelo</b-button>
                                                </b-card>
                                            </b-col>
                                            <b-col md="4">
                                                <b-card
                                                    img-src="./client/images/ruinasmodelo01-miniatura.jpg"
                                                    img-alt="Card Image"
                                                    sub-title="Model Name"
                                                >
                                                    <b-button href="#" variant="dark">Ver modelo</b-button>
                                                </b-card>
                                            </b-col>
                                            <b-col md="4">
                                                <b-card
                                                    img-src="./client/images/ruinasmodelo01-miniatura.jpg"
                                                    img-alt="Card Image"
                                                    sub-title="Model Name"
                                                >
                                                    <b-button href="#" variant="dark">Ver modelo</b-button>
                                                </b-card>
                                            </b-col>
                                        </b-row>
                                        </b-card>
                                    </div>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col md="1"></b-col>
                        <b-col md="4">
                            <!-- OUR SERVICES -->
                            <div id="ServicesCard">
                                <b-card header="NUESTROS SERVICIOS"
                                    header-text-variant="white"
                                    header-tag="header"
                                    header-bg-variant="dark"
                                    title="Our Services"
                                >
                                    <p class="card-text">Currently on development.</p>
                                </b-card>
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
    name: 'Home',
    components: {
        RyuNavBar
    }
}
</script>

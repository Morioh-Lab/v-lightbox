<template>
    <div>
        <div class="container">

            <header>
                <h1>v-lightbox</h1>
                <h4>Lightbox Photo Grid and Slideshow component for Vue.Js</h4>
            </header>


            <div class="row my-30">
                <div class="col-12 col-lg-8">
                    <lightbox :items="images"></lightbox>


                    <div class="form-group mt-30">
                        <lightbox cells="4" :items="images"></lightbox>
                    </div>

                    <div class="form-group mt-30">
                        <lightbox cells="2" :items="images"></lightbox>
                    </div>

                    <div class="row mt-30">
                        <div class="col-6">
                            <lightbox css="h-200 h-lg-250" :items="images" :cells="3"></lightbox>
                        </div>
                        <div class="col-6">
                            <lightbox css="h-200 h-lg-250" :items="images" :cells="3"></lightbox>
                        </div>

                    </div>

                    <div class="form-group">
                        Photo of Chloe Ting
                    </div>

                    <div class="form-group mt-30">
                        <lightbox cells="4" :items="goku"></lightbox>
                    </div>

                    <div class="form-group mt-30">
                        <lightbox cells="2" :items="goku"></lightbox>
                    </div>

                    <div class="row mt-30">
                        <div class="col-6">
                            <lightbox css="h-200 h-lg-250" :items="goku" :cells="3"></lightbox>
                        </div>
                        <div class="col-6">
                            <lightbox css="h-200 h-lg-250" :items="goku" :cells="3"></lightbox>
                        </div>

                    </div>

                </div>
                <div class="col-12 col-lg-4">
                    <div class="viralroll" data-id="5e8d2bb73364491e2a946eec"></div>
                </div>
            </div>


        </div>


        <footer>

            <p>
                <a class="social-icon" href="https://github.com/Morioh-Lab/v-lightbox" target="_blank">
                    <i class="fa-3x fab fa-github-square"></i>
                </a>

            </p>

            <p>Themed by <a href="http://on.morioh.net/96d5d36367" target="_blank">Morioh Theme</a><br>
                <a href="https://morioh.com">Social Network for Developers</a>
            </p>


        </footer>

    </div>
</template>


<script>

    export default {
        data() {
            return {

                images: [
                    "https://i.wifegeek.com/200426/f9459c52.jpg",
                    "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
                    "https://i.wifegeek.com/200426/5fa51df3.jpg",
                    "https://i.wifegeek.com/200426/663181fe.jpg",
                    "https://i.wifegeek.com/200426/2d110780.jpg",
                    "https://i.wifegeek.com/200426/e73cd3fa.jpg",
                    "https://i.wifegeek.com/200426/15160d6e.jpg",
                    "https://i.wifegeek.com/200426/d0c881ae.jpg",
                    "https://i.wifegeek.com/200426/a154fc3d.jpg",
                    "https://i.wifegeek.com/200426/71d3aa60.jpg",
                    "https://i.wifegeek.com/200426/d17ce9a0.jpg",
                    "https://i.wifegeek.com/200426/7c4deca9.jpg",
                    "https://i.wifegeek.com/200426/64672676.jpg",
                    "https://i.wifegeek.com/200426/de6ab9c6.jpg",
                    "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
                    "https://i.wifegeek.com/200426/4085d03b.jpg",
                    "https://i.wifegeek.com/200426/177ef44c.jpg",
                    "https://i.wifegeek.com/200426/d74d9040.jpg",
                    "https://i.wifegeek.com/200426/81e24a47.jpg",
                    "https://i.wifegeek.com/200426/43e2e8bb.jpg"

                ],

                goku: [
                    'https://i.imgur.com/JtfV6MJ.jpg',
                    'https://i.imgur.com/6Pwl3pI.jpg',
                    'https://i.imgur.com/CDCJjfz.jpg',
                    'https://i.imgur.com/lYbqb9m.jpg',
                    'https://i.imgur.com/VmVbTGi.jpg',
                    'https://i.imgur.com/7Cuwnxe.jpg',
                    'https://i.imgur.com/yrDowBc.jpg',
                    'https://i.imgur.com/HuPkJbE.jpg',
                    'https://i.imgur.com/eJkDmId.jpg',
                    'https://i.imgur.com/N76gZXm.jpg',
                    'https://i.imgur.com/cTeixf7.jpg'
                ],





            }
        },

    }

</script>
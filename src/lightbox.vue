<template>
    <div class="lb" v-if="items.length>0">
        <div class="lb-grid" :class="[css,items.length>cells?'lb-grid-' + cells: 'lb-grid-' + items.length]">
            <div class="lb-item" v-for="(src, i) in items" @click="show(i)" v-if="i<cells" :style="bg(src)">
                <span class="lb-more" v-if="i==cells-1 && items.length - cells>0">{{ items.length - cells}}+</span>
            </div>
        </div>

        <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
            <div class="lb-modal" v-if="index>=0">
                <button class="btn btn-outline-danger btn-sm lb-modal-close" @click="close">
                    <i class="fas far fa-times"></i>
                </button>
                <button class="btn btn-outline-primary lb-modal-prev" @click="prev">
                    <i class="fas far fa-angle-left fa-2x"></i>

                </button>
                <button class="btn btn-outline-primary lb-modal-next" @click="next">
                    <i class="fas far fa-angle-right fa-2x"></i>
                </button>

                <div class="lb-modal-img" @click="close">
                    <img :src="src">
                    <div class="spinner spinner-dots-wave" v-if="loading">
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                        <span class="badge badge-primary rounded-circle w-10 h-10">
                            <i class="sr-only">&nbsp;</i>
                        </span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    export default {

        props: {
            items: {
                type: Array,
                default: () => { return [] }
            },

            css: {
                type: String,
                default: () => 'h-250 h-md-400 h-lg-600'
            },

            cells: {
                type: Number,
                default: () => 5
            }
        },

        data() {
            return {
                src: '',
                index: -1,
                loading: false,
                events: []
            }
        },

        methods: {


            bind() {

                if (this.events.length > 0) return;

                this.events.push(['keydown', e => {
                    if (this.index < 0) return;
                    if (e.keyCode === 37) {
                        this.prev();
                    } else if (e.keyCode === 39) {
                        this.next();
                    } else if (e.keyCode === 27) {
                        this.close();
                    }
                }]);
                this.events.forEach(e => { window.addEventListener(e[0], e[1]); });
            },

            show(i) {

                if (i >= this.items.length) {
                    i = 0;
                }
                if (i < 0) {
                    i = this.items.length - 1;
                }
                this.loading = true;
                this.bind();
                this.index = i;
                var src = this.items[i];
                var img = new Image();
                img.src = src;
                img.onload = () => {
                    this.loading = false;
                    this.src = src;
                }
            },
            next() {
                this.show(this.index - 1);
            },

            prev() {
                this.show(this.index + 1);
            },
            close() {
                this.index = -1;
                this.events.forEach(e => { window.removeEventListener(e[0], e[1]); });
                this.events = [];
            },
            bg(i) {
                return i && i.length > 0 ? `background-image: url('${i}')` : '';
            }

        },


    }
</script>
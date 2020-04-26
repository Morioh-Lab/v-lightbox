
import './lightbox.css';
import Lightbox from './lightbox.vue';


var __LightboxPlugin = {
    install: function (Vue) {
        if (Vue.__lightbox_installed) {
            return;
        }

        Vue.__lightbox_installed = true;

        Vue.component('lightbox', Lightbox);
    }
};

if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(__LightboxPlugin);
}

export default __LightboxPlugin;
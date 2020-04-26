

import './layout.css';
import '../dist/lightbox.css';

import Vue from 'vue';
import App from './app.vue';
import Plugin from '../dist/lightbox';


Vue.use(Plugin);

Vue.config.devtools = process.env.NODE_ENV !== 'production';

new Vue({
  el: '#app', 
 
  render: h => h(App)
})

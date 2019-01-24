import Vue from 'vue';
import App from './App.vue';

import markedEditor from '../packages/index';

Vue.use(markedEditor);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount('#app');

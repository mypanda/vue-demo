import Vue from 'Vue'//必须用babel编译ES6
import App from './App.vue'

import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)

new Vue({
    el:'#box',
    store,
    components:{
        app:App
    }
})
import Vue from 'Vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//定义状态
	state:{
		author:'panda'
	}
})

export default store
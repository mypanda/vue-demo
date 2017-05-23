import Vue from 'Vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//定义状态
	state:{
		author:'your panda',
		water:0
	},
	mutations:{
		neWater(state,msg){
			//state是$store.state
			state.water = msg
		}
	}
})

export default store
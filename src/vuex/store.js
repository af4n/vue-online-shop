import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "../router/mutations/mutations";
import actions from "../router/actions/actions";
import getters from "../router/getters/getters";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    basket: []
  },
  mutations,
  actions,
  getters
})

export default store
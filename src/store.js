import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    images: {}
  },
  mutations: {
    getPhoto (state, payload) {
      state.images = payload
    }
  },
  actions: {
    getPhotos: function (context) {
      let auth = localStorage.getItem('authorization')

      axios.get('http://35.198.212.156/api/image', {
        headers: { authorization: auth }
      })
        .then((response) => {
          console.log(response.data)
          let data = response.data
          // console.log(data)
          context.commit('getPhoto', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addPhoto (context, payload) {
      let auth = localStorage.getItem('authorization')

      axios.post('http://35.198.212.156/api/image', payload, { headers: { authorization: auth } })
        .then(function (response) {
          console.log(response.data.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
})

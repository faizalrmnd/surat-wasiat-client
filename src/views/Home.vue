<template>
  <div class="home">
    <!-- <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h2>Surat Wasiat</h2>
    <div class="card">
        <div class="card-body">
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" v-model="email" @keyup="validation" class="form-control" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Name</label>
                <input type="text" v-model="name" class="form-control" placeholder="name">
            </div>
            </form>
            <button type="button" v-if="isEmail === false" class="btn btn-lg btn-primary" disabled>Request Token</button>
            <button type="button" v-if="isEmail === true" @click="requestToken" data-dismiss="modal" class="btn btn-primary">Request Token</button>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // },
  data () {
    return {
      email: '',
      name: '',
      isEmail: false
    }
  },
  methods: {
    requestToken: function () {
      let self = this

      axios.post('http://35.198.212.156/request-token', {
        email: this.email,
        name: this.name
      })
        .then(function (response) {
          console.log(response.data.user.uid)
          localStorage.setItem('authorization', response.data.user.uid)
          self.$router.push('/about')
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    validation: function () {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      let valid = re.test(String(this.email).toLowerCase());

      if(valid === true) {
        this.isEmail = true
      } else {
        this.isEmail = false
      }
    }
  }
}
</script>

<style>
  .card {
    align-items: center !important;
    width: 500px;
    margin: 0px;
    align-self: center !important;
  }

  .home {
    align-content: center !important;
    align-items: center !important;
  }
</style>


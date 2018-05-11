<template>
  <div class="ListPhoto">
    <div class="card" v-for="(photo, index) in images.images" :key="index">
      <img id="gambar" class="card-img-top" :src="photo.url" alt="Card image cap">
      <div class="card-body">
        <!-- <h5 class="card-title"><router-link class="title" to="detailmateri"> {{ materi.title }} </router-link></h5> -->
        <h5 class="card-title" > User: {{ photo.user.name }}</h5>
        <!-- <p class="card-text">{{ introLimiter(materi.intro) }}</p> -->
        <p class="card-text">User's email: {{ photo.user.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'images'
    ])
  },
  created () {
    this.$store.dispatch('getPhotos')
  }
}
</script>

<style>
  #gambar {
    width: 100px;
    align-self: center;
  }
  .listPhoto {
    display: flex !important;
    flex-wrap: wrap !important;
    border-style: solid !important;
  }
</style>

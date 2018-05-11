<template>
  <div class="upload form-group">
    <label for="exampleFormControlFile1">Example file input</label>
    <input type="file" id="image" class="form-control-file">
    <button type="button" @click="upload" class="btn btn-primary">Submit</button>
  </div>
</template>

<script>
export default {
  methods: {
    upload: function () {
      const fileInput = document.querySelector('#image')

      let payload = new FormData()

      payload.append('photo', fileInput.files[0])

      this.$store.dispatch('addPhoto', payload)
      
      this.$router.push('/about')
    }
  }
}
</script>

<style>
  .upload {
    align-self: center;
    width: 300px;
  }
</style>

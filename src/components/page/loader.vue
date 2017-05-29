<template>
<!-- begin #page-loader -->
<div id="page-loader" v-bind:class="{ hide: appLodding }" class="fade in"><span class="spinner"></span></div>
<!-- end #page-loader -->
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'page-loader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState([
        'appLodding'
    ])
  }
}
//  $.when($('#page-loader').addClass('hide')).done(function() {
//         $('#page-container').addClass('in');
//     });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

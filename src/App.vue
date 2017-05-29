<template>
  <div id="app">
    <page-loader></page-loader>
    <!--<img src="./assets/logo.png">-->
    <!-- begin #page-container -->
	  <div id="page-container" class="fade page-sidebar-fixed page-header-fixed  in active">
    <page-header></page-header>
    <transition name="router-fade" mode="out-in">
    		<router-view></router-view>
    </transition>
    </div>
	  <!-- end page container -->
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
// import "./assets/plugins/jquery/jquery-1.9.1.min.js"
import {pageHeader,pageLoader} from './components/page/export.js'
export default {
  name: 'app',
  components: { pageHeader,pageLoader },
  created(){},
  mounted () {
    this.APP_LOADDING(true);
  },
  methods: {
       ...mapMutations([
            'APP_LOADDING'
        ]),
  },
}
</script>

<style>
@import "./assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css";
@import "./assets/plugins/bootstrap/css/bootstrap.min.css";
@import "./assets/plugins/font-awesome/css/font-awesome.min.css";
@import "./assets/css/animate.min.css";
@import "./assets/css/style.css";
@import "./assets/css/style-responsive.min.css";
@import "./assets/css/theme/default.css";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

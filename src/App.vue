<template>
  <div id="app">
    <!-- begin #page-loader -->
    <div id="page-loader" class="fade in"><span class="spinner"></span></div>
    <!-- end #page-loader -->
    <!--<img src="./assets/logo.png">-->
    <!-- begin #page-container -->
	  <div id="page-container" class="fade page-sidebar-fixed page-header-fixed">
    <transition name="router-fade" mode="out-in">
    		<router-view></router-view>
    </transition>
    </div>
	  <!-- end page container -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "./assets/plugins/jquery-ui/themes/base/minified/jquery-ui.min.css";
@import "./assets/plugins/bootstrap/css/bootstrap.min.css";
@import "./assets/plugins/font-awesome/css/font-awesome.min.css";
@import "./assets/css/animate.min.css";
@import "./assets/css/style.min.css";
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

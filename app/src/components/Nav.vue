<template>
<div class="navmenu">
    <img alt="logo" src="../assets/logo.png">
    <p>{{ user }}</p>
    
</div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    user: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navmenu {
  background-color: #e95b5f;
  position: fixed;
  top: 0px;
  width: 100%;
  margin: 0px;
  padding: 10px 0px 10px 0px;
}

.navmenu img{ 
  float: left;
  width: 200px;
  padding-left: 14px;
}

.navmenu p{ 
  float: right;
  padding-right: 14px;
    padding-top: 10px;
  color: white;
}
</style>

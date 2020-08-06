<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

:root {
  --dark-color: #010001;
  --white-color: #FFF;
  --main-color: #f3f3f3;
  --radio-color: #2A8CB7
}
</style>

<template>
  <div id="app">
    <resume />
    <!-- <el-button class="print" type="primary">打印</el-button> -->
  </div>
</template>

<script>
import Resume from './components/Resume.vue'

export default {
  name: 'App',
  components: {
    Resume,
  },
}
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
html,
body,
h1,
ul,
ol {
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 1.2px;
  /* margin: 80px; */
}
/* h1,
h2,
h3,
h4,
h5 {
  font-family: Yatra-One, sans-serif;
} */
.print {
  position: fixed;
  top: 100px;
  right: 70px;
}
</style>

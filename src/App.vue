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

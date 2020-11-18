<template>
  <div class="resume">
    <div class="main" ref="main">
      <div class="header" ref="header">
        <div class="name pd10">
          <h1>{{ basicInfo.name }}</h1>
          <span class="en-name">{{ basicInfo.enName }}</span>
        </div>
        <div class="avatar"></div>
      </div>
      <div class="information" ref="information">
        <div class="pd10">
          <div class="desc">
            {{ basicInfo.description }}
          </div>
          <div class="desc pd10">
            {{ basicInfo.work }}
          </div>
        </div>
        <div class="pd10">
          <div>
            <span>{{ basicInfo.university }}</span> ——
            <span class="mr10">{{ basicInfo.major }}</span>
            <span class="mr10">{{ basicInfo.year }}</span>
          </div>
          <ul class="contact pd10">
            <li>
              <span class="label">Mobile:</span>
              <span class="content">{{ basicInfo.mobile }}</span>
            </li>
            <li>
              <span class="label">Site:</span>
              <span class="content">{{ basicInfo.site }}</span>
            </li>
            <li>
              <span class="label">E-mail:</span>
              <span class="content">{{ basicInfo.email }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="content" ref="content">
        <template v-for="(item, index) in experience">
          <el-row :gutter="25" :key="index">
            <el-col :span="5">
              <div class="p-header">{{ item.date }}</div>
              <ul class="p-content">
                <li v-for="(p, i) in item.program" :key="i">
                  {{ p }}
                </li>
              </ul>
            </el-col>
            <el-col :span="7">
              <div class="p-header">{{ item.company }}</div>
              <div class="p-content">
                {{ item.desc }}
              </div>
            </el-col>
            <el-col :span="12">
              <div class="p-header">{{ item.position }}</div>
              <ul class="p-content">
                <li
                  v-for="(d, index) in item.detail"
                  :key="index"
                  class="mb10"
                  v-html="d"
                ></li>
              </ul>
            </el-col>
          </el-row>
        </template>
      </div>
      <ul class="skill">
        <h3>Skills</h3>
        <li v-for="(item, index) in skill" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'
import Personal from '../config/config'

export default {
  props: {},
  data() {
    return {
      basicInfo: Personal.basicInfo,
      experience: Personal.experience,
      skill: Personal.skill,
    }
  },
  mounted() {
    const header = this.$refs.header.clientHeight
    const information = this.$refs.information.clientHeight
    const content = this.$refs.content.clientHeight
    if (header + information + content > this.$refs.main.clientHeight) {
      console.log('超出')
    }
  },
  methods: {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  margin: 0 auto;
  width: 863px;
  height: 1221px;
  background-color: #fff;
  color: #444;
  font-size: 13px;
  text-align: left;
  display: flex;
}
.main {
  margin: 0 60px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name h1 {
  padding: 10px 0;
  text-align: left;
}
.name .en-name {
  font-size: 20px;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background: url(./../assets/avatar.jpg) top/cover no-repeat;
}

.pd10 {
  padding: 10px 0;
}
.mt10 {
  margin-top: 10px;
}
.mb10 {
  margin-bottom: 10px;
}
.mr10 {
  display: inline-block;
  margin-right: 10px;
}
.information {
  line-height: 2;
  width: 50%;
}
.contact {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.contact li {
  flex-shrink: 1;
  flex-wrap: nowrap;
}
.contact li .label {
  display: inline-block;
  width: 80px;
}
.content {
  margin-top: 40px;
}
.content .el-row {
  margin-bottom: 30px;
}
.el-row .p-header {
  font-weight: 600;
}
.el-row .p-content {
  margin-top: 10px;
  line-height: 1.8;
  font-size: 12px;
}
.skill {
  line-height: 1.8;
}
</style>

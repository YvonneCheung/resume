<template>
  <div class="content">
    <div class="content-bd">
      <header class="content-hd">
        <div class="name">
          <h1>{{ basicInfo.name }}</h1>
          <span class="en-name">{{ basicInfo.enName }}</span>
        </div>
        <div class="avatar"></div>
      </header>
      <div class="content-info">
        <div class="info-top">
          <div class="desc">
            {{ basicInfo.description }}
          </div>
          <div class="desc pd10">
            {{ basicInfo.work }}
          </div>
        </div>
        <div class="info-bottom">
          <div>
            <span>{{ basicInfo.university }}</span> ——
            <span class="mr10">{{ basicInfo.major }}</span>
            <span class="mr10">{{ basicInfo.year }}</span>
          </div>
          <ul class="contact pd10">
            <li>
              <i class="iconfont icon-phone"></i>
              <span class="label">Mobile:</span>
              <a :href="`tel:${basicInfo.mobile}`" target="_blank">{{
                basicInfo.mobile
              }}</a>
            </li>
            <li>
              <i class="iconfont icon-homepage"></i>
              <span class="label">Site:</span>
              <a :href="`https://${basicInfo.site}`" target="_blank">{{
                basicInfo.site
              }}</a>
            </li>
            <li>
              <i class="iconfont icon-email"></i>
              <span class="label">E-mail:</span>
              <a :href="`mailto://${basicInfo.email}`" target="_blank">{{
                basicInfo.email
              }}</a>
            </li>
          </ul>
        </div>
      </div>

      <ul class="content-skill">
        <h3>Skills</h3>
        <li v-for="(item, index) in skill" :key="index">{{ item }}</li>
      </ul>
      <div class="content-work">
        <h3>Work Experience</h3>
        <div v-for="(item, index) in experience" :key="index" class="work-item">
          <el-row :gutter="10" class="work">
            <el-col :span="6">
              <div>{{ item.date }}</div>
            </el-col>
            <el-col :span="10">
              <div>{{ item.company }}</div>
            </el-col>
            <el-col :span="4">{{ item.position }}</el-col>
          </el-row>
          <el-row :gutter="10" class="work">
            <el-col :span="6">
              <ul v-for="(p, i) in item.program" :key="i">
                <li>{{ p }}</li>
              </ul>
            </el-col>
            <el-col :span="18">
              <ul class="program-item">
                <li v-for="(d, id1) in item.detail" :key="id1" class="pd10">
                  <label>{{ d.title }}</label>
                  <ul>
                    <li v-for="(c, id2) in d.content" :key="id2">
                      {{ c }}
                    </li>
                  </ul>
                </li>
              </ul>
            </el-col>
          </el-row>
        </div>
      </div>
      <ul class="content-personal">
        <h3>Personal Program</h3>
        <li v-for="(item, index) in personal" :key="index" class="pd10">
          <label>{{ item.title }}</label>
          <ul>
            <li v-for="(c, i) in item.content" :key="i">
              {{ c }}
            </li>
          </ul>
        </li>
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
      personal: Personal.personal,
    }
  },
  methods: {},
}
</script>

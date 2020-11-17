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
        <div class="desc pd10">
          {{ basicInfo.description }}
        </div>
        <div class="pd10">
          <span>{{ basicInfo.university }}</span> ——
          <span>{{ basicInfo.major }}</span>
          <span>{{ basicInfo.year }}</span>
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

      <div class="content" ref="content">
        <template v-for="(item, index) in experience">
          <el-row :gutter="10" :key="index">
            <el-col :span="4">
              <div class="header">{{ item.date }}</div>
              <ul class="content">
                <li v-for="(p, i) in item.program" :key="i">
                  {{ p }}
                </li>
              </ul>
            </el-col>
            <el-col :span="8">
              <div class="header">{{ item.company }}</div>
              <div class="content">
                {{ item.desc }}
              </div>
            </el-col>
            <el-col :span="12">
              <div class="header">{{ item.position }}</div>
              <div class="content">
                {{ item.detail }}
              </div>
            </el-col>
          </el-row>
        </template>
      </div>
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
      experience: Personal.experience
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
  methods: {
    // printOut22() {
    //   var title = this.teacher
    //   var that = this
    //   html2Canvas(document.querySelector('#subOutputRank'), {
    //     allowTaint: true
    //   }).then(function(canvas) {
    //     console.log(canvas.height)
    //     let contentWidth = canvas.width
    //     let contentHeight = canvas.height
    //     let pageHeight = (contentWidth / 592.28) * 841.89
    //     let leftHeight = contentHeight
    //     let position = 0
    //     let imgWidth = 595.28
    //     let imgHeight = (592.28 / contentWidth) * contentHeight
    //     let pageData = canvas.toDataURL('image/jpeg', 1.0)
    //     let PDF = new JsPDF('', 'pt', 'a4')
    //     if (leftHeight < pageHeight) {
    //       PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
    //     } else {
    //       while (leftHeight > 0) {
    //         PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
    //         leftHeight -= pageHeight
    //         position -= 842
    //         if (leftHeight > 0) {
    //           PDF.addPage()
    //         }
    //       }
    //     }
    //     PDF.save(title + '.pdf')
    //     that.dianpingShow = true
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  margin: 0 auto;
  width: 794px;
  height: 1123px;
  background-color: #f7f6f3;
  color: #444;
  font-size: 13px;
  text-align: left;
  display: flex;
}
.main {
  margin: 60px 70px;
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
.information {
  line-height: 2;
  width: 50%;
}

.contact li .label {
  display: inline-block;
  width: 80px;
}
.el-row {
  margin-top: 40px;
}
.el-row .header {
  font-weight: 600;
}
.el-row .content {
  margin-top: 10px;
}
</style>

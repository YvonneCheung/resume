<template>
  <div class="resume">
    <div class="header">
      <div class="name pd10">
        <h1>张 晓</h1>
        <span class="en-name">Yvonne Cheung</span>
      </div>
      <div class="avatar"></div>
    </div>
    <div class="information">
      <div class="desc pd10">
        我是一名热爱编程、热爱交互设计的前端工程师，3+
        年从业经验。至今在三家公司担任过前端工程师，参与或负责后台管理系统、大数据项目和教育相关系统等开发。
      </div>
      <div class="pd10">
        <span>合肥师范学院 —— 计算机技术与科学 2016</span>
      </div>
      <ul class="contact pd10">
        <li>
          <span class="label">Mobile:</span>
          <span class="content">166 2128 0052</span>
        </li>
        <li>
          <span class="label">Site:</span>
          <span class="content">www.yvonnecheung.cn</span>
        </li>
        <li>
          <span class="label">E-mail:</span>
          <span class="content">xixixixiao@hotmail.com</span>
        </li>
      </ul>
    </div>
    <el-row :gutter="10">
      <el-col :span="4">
        <div class="header">2017.2-至今</div>
        <div class="content">武汉 ｜ B2B成都 ｜ B2B交互安全领域</div>
      </el-col>
      <el-col :span="8">
        <div class="header">极验 Geetest</div>
        <div class="content">
          全球 29 万家企业达成合作，每天提供超过 12 亿次的安全防护。
        </div>
      </el-col>
      <el-col :span="12">
        <div class="header">UI 设计师</div>
        <div class="content">
          2017、2018 年公司官网设计（包含海外版），实现局部前端动效。从 2017
          年的单个产品线（行为验证）到现在极验全部产品的用户后台管理系统的设计和迭代。期间和前端组协同建立起极验第一个成形且应用于实际项目的
          GEE-UI Design System（包含 Style Guide，Figma Componnets，23
          个组件类型和数据图表优化）。大幅提升设计和前端开发效率，降低设计师和前端工程师的沟通成本。设计部于
          2018 年年中组建极验设计用户体验中心（GEE Design），我负责
          geetest.design 的部分⻚面设计和整体前端开发。2018
          年访问量：35,770，访问用户数：13,280 (Via: Google Analytics)。
        </div>
      </el-col>
    </el-row>
    <!-- <ul class="exp pd10">
        <li>
          <ul class="exp-content">
            <li class="time">
              <span class="header">2017.2-至今</span>
              <span class="content">武汉 ｜ B2B成都 ｜ B2B交互安全领域</span>
            </li>
            <li></li>
            <li class="flex1"></li>
          </ul>
        </li>
      </ul> -->
  </div>
</template>

<script>
import html2Canvas from "html2canvas";
import JsPDF from "jspdf";

export default {
  props: {},
  methods: {
    printOut22 () {
      var title = this.teacher;
      var that = this;
      html2Canvas(document.querySelector("#subOutputRank"), {
        allowTaint: true
      }).then(function (canvas) {
        console.log(canvas.height);
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;
        let pageHeight = (contentWidth / 592.28) * 841.89;
        let leftHeight = contentHeight;
        let position = 0;
        let imgWidth = 595.28;
        let imgHeight = (592.28 / contentWidth) * contentHeight;
        let pageData = canvas.toDataURL("image/jpeg", 1.0);
        let PDF = new JsPDF("", "pt", "a4");
        if (leftHeight < pageHeight) {
          PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
        } else {
          while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= 842;
            if (leftHeight > 0) {
              PDF.addPage();
            }
          }
        }
        PDF.save(title + ".pdf");
        that.dianpingShow = true;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  margin: 0 auto;
  width: 794px;
  height: 1123px;
  background-color: #f7f6f3;
  padding: 60px 70px;
  color: #444;
  font-size: 13px;
  text-align: left;
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

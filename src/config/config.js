export default {
  basicInfo: {
    avatar: '',
    name: '张 晓',
    enName: 'Yvonne Cheung',
    description:
      '我是一名热爱编程、热爱交互感的前端工程师，3+年从业经验。至今在三家公司担任过前端工程师，参与负责过多个后台管理系统、大数据项目和教育相关系统等开发。',
    work:
      '在工作中，我比较追求代码的规范性和高效可维护性。能快速对接产品需求、前后端对接工作，对web前端有很大的兴趣并有独立自主学习的能力，具备独立分析并解决问题的能力。代码强迫症患者，注重团队合作，具有良好的沟通能力。',
    university: '合肥师范学院',
    major: '计算机技术与科学',
    year: '2016',
    mobile: '166 2128 0052',
    site: 'www.yvonnecheung.cn',
    github: 'github.com/YvonneCheung',
    email: 'xixixixiao@hotmail.com'
  },
  experience: [
    {
      date: '2020.07 - 至今',
      company: '安徽百得思维信息科技有限公司',
      position: '前端研发工程师',
      program: ['资源管理后台', '考前全真练', '考前全真练管理后台'],
      desc: '提供英语听说教、学、考、评于一体的综合区级教学',
      detail: [
        {
          title: '考前全真练',
          content: [
            '该项目由功能端和考试端组成，主要负责完成项目PC端的功能端',
            '封装可复用组件及功能函数类，方便项目中重复使用',
            '运用 element 的表单验证，完成验证码密码登录以及注册功能',
            '由于端的特殊性，用 localForage 做登录记住密码等功能',
            '防抖实现远程搜索、节流控制滚动条下拉加载更多',
            '使用 echarts 完成产品绘制的图表的自定义效果',
            '通过创建 storage 监听事件实现实时更新 storage 取出的数据等'
          ]
        },
        {
          title: '考前全真练管理后台',
          content: [
            '负责项目中所有公用代码的封装及优化，制定规范的代码结构',
            '负责前端项目需求分析，技术选型',
            '根据产品需求对项目进行逻辑编写、配合后端完成项目中测试环境及线上环境的数据完整性',
            '使用 keep-alive 实现跳转详情页返回时保存搜索条件',
            '使用 provide/inject 实现切换全局变量时，数据更新页面不刷新',
            '运用 vue-router + vuex 控制角色权限以及动态路由显示等'
          ]
        },
        {
          title: '资源管理后台',
          content: [
            '重构部分代码，给项目添加Eslint规范调整部分代码及语法，优化性能',
            '对原有产品根据业务需求进行不断迭代',
            '与项目经理与技术团队等进行充分的沟通，开发新的需求',
            '参与代码 review 改善代码等'
          ]
        }
      ]
    },
    {
      date: '2018.08 - 2020.04',
      company: '上海久耶供应链管理有限公司',
      position: 'web前端工程师',
      program: [
        '客服系统',
        '大数据项目',
        '服务平台',
        '合同在线',
        '业务预警系统',
        'UAM管理系统'
      ],
      desc:
        '专业为生鲜农业、生鲜电商、食品企业等提供从国内外原产地到终端用户一站式供应链服务',
      detail: [
        {
          title: '大数据项目',
          content: [
            '使用 vue + element 完成动态表头的展示以及数据库和表的树状显示',
            '采用 highlight.js 实现SQL语句代码高亮',
            '通过 echarts 展示数据库统计的数据等'
          ]
        },
        {
          title: '客服系统',
          content: [
            '操作数组方法完成对工单自定义表单的动态删减功能',
            '轮循请求实时提示工单消息',
            '运用 animate 实现公告轮播鼠标悬浮停止查看',
            '使用 flex 布局完成页面布局',
            '参与代码review和技术分享，提高产品稳定性和自身技术等'
          ]
        },
        {
          title: '服务平台',
          content: [
            '完成个人中心信息、公告展示、消息提醒等功能',
            '使用 el-table 的 toggleRowSelection 方法实现翻页记忆功能',
            '完成角色菜单权限控制的添加和回显',
            '处理后端返回的复杂json数据等'
          ]
        }
      ]
    },
    {
      date: '2016.12 - 2018.04',
      company: '杭州图特信息科技有限公司',
      position: 'web前端工程师',
      program: ['供应链平台'],
      desc:
        '为全国500多家医疗机构、医共体/医疗集团，以及超过15000家的医药流通企业提供专业化产品支持及数据运营服务',
      detail: [
        {
          title: '供应链平台',
          content: [
            '参与公司项目供应链平台的开发及维护',
            '基于 div + css 布局构建页面，使用 vue + element 编写功能',
            '负责解决医院客户的数据问题，及客服提出和总结出的优化与反馈，使得平台项目更加完善等'
          ]
        }
      ]
    }
  ],
  skill: [
    '掌握 Web 前端开发基本技能，熟悉 W3C 标准、HTML、CSS、UI重构、页面布局、响应式布局等，重视页面交互与用户体验',
    '熟练运用 Less / Sass / Stylus 等 CSS 预处理器，以及 Flex 布局',
    '对JavaScript、各类UI组件库、JS类库、MVVM 框架、工程化工具、组件化、模块化开发流程等有着较熟练的实践和较深刻的感悟',
    '精通 Vue / VueX / VueRouter 前端框架技术，配合 Webpack / ElementUI / Axios 实现前后端分离',
    '熟练掌握 ES6 到 ES10 的 新特性，以及 Vue-cli 脚手架的使用',
    '拥有良好的代码编写规范意识，追求代码高质量可维护性，使用 Eslint / Prettier 效率开发',
    '熟练运用 Echarts 完成多种自定义图表的展示',
    '熟练运用 SVN、GIT 进行版本控制和代码托管，Markdown 语法编写文档，了解项目常规开发流程、开发调试技巧、发布部署步骤，并掌握Window、IOS、Linux系统的基本命令',
    '使用 Vuepress + Nginx 完成在云服务器上博客的搭建部署',
    '开发基于 Node 的 Koa2 + Mysql + Vue 全栈博客及其管理系统',
    '了解并关注 Websocket 基本消息应用开发、Vuejs 3.0、TypeScript、微信小程序等前端技术'
  ],
  personal: [
    {
      title: '个人博客',
      content: [
        '使用 vuepress 搭建个人博客，更改源码写样式以及扩展功能',
        '最初通过命令自动部署在 GitHub 上，之后添加域名及证书部署到云服务器'
      ]
    },
    {
      title: '博客管理系统',
      content: [
        '使用 animate.css 样式库完成页面切换过渡',
        '采用 koa2 + mysql 实现对数据的增删查改，封装 mysql 语句',
        '使用 sass 的 mixin 以及变量的统一定义，并通过配置 style-resources-loader 完成在项目中的全局引入'
      ]
    }
  ]
}

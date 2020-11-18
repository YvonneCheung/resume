export default {
  basicInfo: {
    avatar: '',
    name: '张 晓',
    enName: 'Yvonne Cheung',
    description:
      '我是一名热爱编程、热爱交互感的前端工程师，3+年从业经验。至今在三家公司担任过前端工程师，参与负责过多个后台管理系统、大数据项目和教育相关系统等开发。',
    work:
      '在工作中，我比较追求代码的规范性和全局性。当更清晰的了解到业务功能后，我会先思考设计结构，而不是随意地就着手写页面。当然看着整洁的项目也能给我带来整理的快感。',
    university: '合肥师范学院',
    major: '计算机技术与科学',
    year: '2016',
    mobile: '166 2128 0052',
    site: 'www.yvonnecheung.cn',
    email: 'xixixixiao@hotmail.com'
  },
  experience: [
    {
      date: '2020.07-至今',
      company: '安徽百得思维信息科技有限公司',
      position: '前端工程师',
      program: ['资源管理后台', '考前全真练', '考前全真练管理后台'],
      desc: '提供英语听说教、学、考、评于一体的综合区级教学',
      detail: [
        '<strong>考前全真练：</strong>由于端的特殊性，运用localForage做登录记住密码等功能；实现远程搜索防抖、滚动条下拉加载更多节流；大量运用到echarts的基础图形的自定义扩展完成产品绘制的原型；通过创建storage监听事件实现实时更新storage取出的数据。',
        '<strong>考前全真练管理后台：</strong>使用keep-alive实现跳转详情页返回时保存搜索条件；router+store控制角色权限以及动态路由显示。',
        ''
      ]
    },
    {
      date: '2018.08-2020.04',
      company: '上海久耶供应链管理有限公司',
      position: '前端工程师',
      program: [
        '客服系统',
        '大数据项目',
        '服务平台',
        '合同在线',
        'UAM管理系统'
      ],
      desc:
        '专业为生鲜农业、生鲜电商、食品企业等提供从国内外原产地到终端用户一站式供应链服务',
      detail: [
        '<strong>大数据项目：</strong>使用vue+element完成动态表头的展示以及数据库和表的树状显示，使用highlight.js实现SQL语句代码高亮；通过echarts工具展示数据库统计的数据。',
        '<strong>客服系统：</strong>通过对数组的操作完成对工单自定义表单的动态删减功能；轮循请求显示工单消息提示；animate实现公告轮播鼠标悬浮停止查看。',
        '<strong>服务平台：</strong>通过tab+table完成UI的角色权限菜单设计稿，toggleRowSelection实现翻页记忆功能；处理后端返回的复杂json数据等。'
      ]
    },
    {
      date: '2016.12-2018.04',
      company: '杭州图特信息科技有限公司',
      position: '前端工程师',
      program: ['供应链平台'],
      desc:
        '为全国500多家医疗机构、医共体/医疗集团，以及超过15000家的医药流通企业提供专业化产品支持及数据运营服务',
      detail: [
        '参与公司项目供应链平台的开发及维护，基于div+css布局构建页面，使用vue+element编写功能， 负责解决医院客户的数据问题，及客服提出和总结出的优化与反馈，使得平台项目更加完善。'
      ]
    }
  ],
  skill: [
    '熟练掌握 ES6 语法，以及 Vue-cli 脚手架的使用',
    '熟悉 Less/Sass/Stylus 等预处理器运用，熟练运用 Flex 布局  ',
    '熟练运用 Echarts 完成多种自定义图表的展示',
    '熟练运用 SVN、GIT 等版本控制工具，熟悉项目版本管理',
    '精通 Vue/VueX/VueRouter前端框架技术，配合Webpack/ElementUI/Axios 开发多个项目，实现前后端分离',
    '拥有良好的代码编写规范意识，使用 Eslint/Prettier 效率开发',
    '了解组件化、模块化开发流程以及MVVM设计模式',
    '使用 Vuepress + Nginx 完成在云服务器上博客的搭建部署',
    '基于 node 的 Koa2 + Mysql + Vue 开发全栈博客及其管理系统',
    '了解 Websocket 与 Socket.io 的基本消息应用开发'
  ]
}

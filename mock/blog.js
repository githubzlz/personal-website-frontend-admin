const Mock = require('mockjs')

const data = Mock.mock({
  infos: [
    {
      title: '文章数量',
      icon: 'el-icon-data-analysis',
      colors: ['#727db6', '#b87fd0'],
      tendency: 0,
      total: 2516,
      change: 253
    },
    {
      title: '阅读量',
      icon: 'el-icon-data-analysis',
      colors: ['#e5ad7c', '#c27633'],
      tendency: 1,
      total: 251326,
      change: 25332
    },
    {
      title: '获赞量',
      icon: 'el-icon-data-analysis',
      colors: ['rgba(41,51,160,0.78)', '#31a0ea'],
      tendency: 0,
      total: 4851,
      change: 230
    },
    {
      title: '获赞量',
      icon: 'el-icon-data-analysis',
      colors: ['rgb(38,159,163)', '#43c7b3'],
      tendency: 0,
      total: 4851,
      change: 230
    }
  ],
  statistics1: {
    title: {
      text: '文章数量'
    },
    tooltip: {},
    xAxis: {
      data: ['2022/3/1', '2022/3/2', '2022/3/3', '2022/3/4', '2022/3/5', '2022/3/6', '2022/3/7']
    },
    yAxis: {},
    series: [
      {
        name: '数量',
        type: 'bar',
        data: [5, 20, 20, 22, 23, 50, 48]
      }
    ]
  },
  statistics2: {
    title: {
      text: '分类文章数量'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      bottom: '5%',
      left: 'center'
    },
    series: [
      {
        name: '数量',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Java' },
          { value: 735, name: 'Python' },
          { value: 580, name: 'PHP' },
          { value: 484, name: 'Golang' },
          { value: 300, name: 'Nodejs' }
        ]
      }
    ]
  }
})

const baseUrl = process.env.VUE_APP_BLOG_BASE_API
module.exports = [
  {
    url: `${baseUrl}/basic/info`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.infos
      }
    }
  },
  {
    url: `${baseUrl}/statistics/info`,
    type: 'post',
    response: config => {
      const { state } = config.body
      let result
      if (state === 0) {
        result = data.statistics1
      } if (state === 1) {
        result = data.statistics2
      }
      return {
        code: 200,
        data: result
      }
    }
  }
]

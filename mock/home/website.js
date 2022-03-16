const Mock = require('mockjs')
const data = Mock.mock({
  message: {
    pageNum: 1,
    pageSize: 4,
    totalSize: 26,
    totalPageNum: 7,
    'list|4': [
      {
        'title|1-3': '这是一条未读的消息。'
      }
    ]
  },
  log: {
    pageNum: 1,
    pageSize: 4,
    totalSize: 26,
    totalPageNum: 7,
    'list|4': [
      {
        'title|1-3': '你有开发任务未完成，截止时间2020/02/05晚.'
      }
    ]
  },
  statistics: {
    title: {
      text: '网站访问量'
    },
    xAxis: {
      type: 'category',
      data: ['2022/3/1', '2022/3/2', '2022/3/3', '2022/3/4', '2022/3/5', '2022/3/6', '2022/3/7']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  }
})

const baseUrl = process.env.VUE_APP_ADMIN_BASE_API
module.exports = [
  {
    url: `${baseUrl}/calendar`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.message
      }
    }
  },
  {
    url: `${baseUrl}/message`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.message
      }
    }
  },
  {
    url: `${baseUrl}/backlog`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.log
      }
    }
  },
  {
    url: `${baseUrl}/statistics/info`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.statistics
      }
    }
  }
]

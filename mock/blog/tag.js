const Mock = require('mockjs')

const data = Mock.mock({
  tagList: [
    {
      id: '1',
      name: 'Java'
    }, {
      id: '11',
      name: 'Java语法'
    }, {
      id: '12',
      name: 'Java语法'
    }, {
      id: '2',
      name: 'Python'
    }, {
      id: '21',
      name: '自然语义分析'
    }, {
      id: '22',
      name: '机器学习'
    }, {
      id: '3',
      name: 'PHP'
    }
  ],
  tagTree: [
    {
      id: '1',
      name: 'Java',
      children: [
        {
          id: '11',
          name: 'Java语法'
        }, {
          id: '12',
          name: 'Java语法2'
        }
      ]
    }, {
      id: '2',
      name: 'Python',
      children: [
        {
          id: '21',
          name: '自然语义分析'
        }, {
          id: '22',
          name: '机器学习'
        }
      ]
    }, {
      id: '3',
      name: 'PHP'
    }
  ]
})

const baseUrl = process.env.VUE_APP_BLOG_BASE_API
module.exports = [
  {
    url: `${baseUrl}/tag/list`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.tagList
      }
    }
  },
  {
    url: `${baseUrl}/tag/tree`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.tagTree
      }
    }
  }
]

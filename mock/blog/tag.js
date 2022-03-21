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
      name: '分类1',
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
      name: '分类2',
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
      name: '分类3',
      children: [
        {
          id: '31',
          name: '人工智能'
        }, {
          id: '32',
          name: 'Python'
        }
      ]
    }, {
      id: '4',
      name: '分类4'
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

const Mock = require('mockjs')

const data = Mock.mock({
  categoryList: [
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
  categoryTree: [
    {
      id: '1',
      name: 'Java',
      createdTime: '1647932497781',
      children: [
        {
          id: '11',
          name: 'Java语法',
          createdTime: '1647932497781'
        }, {
          id: '12',
          name: 'Java语法',
          createdTime: '1647932497781'
        }
      ]
    }, {
      id: '2',
      name: 'Python',
      createdTime: '1647932497781',
      children: [
        {
          id: '21',
          name: '自然语义分析',
          createdTime: '1647932497781'
        }, {
          id: '22',
          name: '机器学习',
          createdTime: '1647932497781'
        }
      ]
    }, {
      id: '3',
      name: 'PHP',
      createdTime: '1647932497781'
    }
  ]
})

const baseUrl = process.env.VUE_APP_BLOG_BASE_API
module.exports = [
  {
    url: `${baseUrl}/category/list`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.categoryList
      }
    }
  },
  {
    url: `${baseUrl}/category/tree`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.categoryTree
      }
    }
  },
  {
    url: `${baseUrl}/category/update`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        message: 'success'
      }
    }
  },
  {
    url: `${baseUrl}/category/delete`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        message: 'success'
      }
    }
  }
]

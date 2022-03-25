const Mock = require('mockjs')

const data = Mock.mock({
  blog: {
    id: '1231232',
    title: '测试文章名',
    summary: '测试摘要测试摘要测试摘要测试摘要测试摘要测试摘要测试摘要',
    provenance: 1,
    isPublish: 0,
    categories: [
      '1', '2'
    ],
    tags: [
      '11', '21'
    ],
    content: {
      type: 1,
      content: '#12312 \n ![](https://drawio-1309555906.cos.ap-beijing.myqcloud.com/drawtest.drawio.png)'
    }
  },
  page: {
    pageNum: 1,
    pageSize: 10,
    totalSize: 121,
    'list|10': [
      {
        'id|+1': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        title: '测试文章名',
        imgSrc: 'https://drawio-1309555906.cos.ap-beijing.myqcloud.com/blogback.jpg',
        author: 'zlz',
        'stars|200-1000': 0,
        'readings|1540-9999': 0,
        summary: '测试摘要测试摘要测试摘要测试摘要测试摘要测试摘要测试摘要',
        'provenance|0-2': 0,
        'isPublish|0-1': 0,
        'categories|2': [
          {
            name: 'Java'
          }, {
            name: 'Python'
          }, {
            name: 'Php'
          }
        ],
        'tags|2': [
          {
            name: 'Java'
          }, {
            name: 'Python'
          }, {
            name: 'Php'
          }
        ],
        content: {
          type: 1,
          content: '#12312 \n ![](https://drawio-1309555906.cos.ap-beijing.myqcloud.com/drawtest.drawio.png)'
        },
        createdTime: '1647932497781',
        modifiedTime: '1647932487781'
      }
    ]
  }
})

const baseUrl = process.env.VUE_APP_BLOG_BASE_API
module.exports = [
  {
    url: `${baseUrl}/blog/query/one`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.blog
      }
    }
  }, {
    url: `${baseUrl}/blog/query/list`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        data: data.page
      }
    }
  }, {
    url: `${baseUrl}/blog/edit`,
    type: 'post',
    response: config => {
      return {
        code: 200,
        message: 'success',
        data: '10086'
      }
    }
  }
]

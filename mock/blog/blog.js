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
        data: data.blog
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

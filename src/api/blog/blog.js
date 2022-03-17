import request from '@/utils/request'

const baseUrl = process.env.VUE_APP_BLOG_BASE_API

/**
 * 文章信息
 * @param data
 * @returns {AxiosPromise}
 */
export function queryBlog(data) {
  return request({
    url: `${baseUrl}/blog/query/one`,
    method: 'post',
    data
  })
}

/**
 * 文章信息
 * @param data
 * @returns {AxiosPromise}
 */
export function queryBlogList(data) {
  return request({
    url: `${baseUrl}/blog/query/list`,
    method: 'post',
    data
  })
}

/**
 * 编辑信息
 * @param data
 * @returns {AxiosPromise}
 */
export function editBlog(data) {
  return request({
    url: `${baseUrl}/blog/edit`,
    method: 'post',
    data
  })
}

import request from '@/utils/request'

const baseUrl = process.env.VUE_APP_BLOG_BASE_API

/**
 * 文章标签
 * @param data
 * @returns {AxiosPromise}
 */
export function queryTagList(data) {
  return request({
    url: `${baseUrl}/tag/query-by-name`,
    method: 'post',
    data
  })
}

/**
 * 文章标签
 * @param data
 * @returns {AxiosPromise}
 */
export function queryTagTree(data) {
  return request({
    url: `${baseUrl}/tag/tree`,
    method: 'get',
    data
  })
}

/**
 * 文章标签分类创建
 * @param data
 * @returns {AxiosPromise}
 */
export function createTagCate(data) {
  return request({
    url: `${baseUrl}/tag/create/cate`,
    method: 'post',
    data
  })
}

/**
 * 文章标签创建
 * @param data
 * @returns {AxiosPromise}
 */
export function createTag(data) {
  return request({
    url: `${baseUrl}/tag/create`,
    method: 'post',
    data
  })
}

/**
 * 文章标签创建
 * @param data
 * @returns {AxiosPromise}
 */
export function deleteTag(data) {
  return request({
    url: `${baseUrl}/tag/delete`,
    method: 'post',
    data
  })
}

import request from '@/utils/request'

const baseUrl = process.env.VUE_APP_BLOG_BASE_API

/**
 * 文章标签
 * @param data
 * @returns {AxiosPromise}
 */
export function queryTagList(data) {
  return request({
    url: `${baseUrl}/tag/list`,
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
    method: 'post',
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
    url: `${baseUrl}/tag/cate/create`,
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

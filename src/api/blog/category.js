import request from '@/utils/request'

const baseUrl = process.env.VUE_APP_BLOG_BASE_API

/**
 * 文章分类
 * @param data
 * @returns {AxiosPromise}
 */
export function queryCategoryList(data) {
  return request({
    url: `${baseUrl}/category/list`,
    method: 'post',
    data
  })
}

/**
 * 文章分类
 * @param data
 * @returns {AxiosPromise}
 */
export function queryCategoryTree(data) {
  return request({
    url: `${baseUrl}/category/tree`,
    method: 'post',
    data
  })
}

/**
 * 创建修改文章分类
 * @param data
 * @returns {AxiosPromise}
 */
export function updateCategory(data) {
  return request({
    url: `${baseUrl}/category/update`,
    method: 'post',
    data
  })
}

/**
 * 删除文章分类
 * @param data
 * @returns {AxiosPromise}
 */
export function deleteCategory(data) {
  return request({
    url: `${baseUrl}/category/delete`,
    method: 'post',
    data
  })
}

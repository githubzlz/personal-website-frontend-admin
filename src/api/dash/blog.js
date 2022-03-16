import request from '@/utils/request'

const baseUrl = process.env.VUE_APP_BLOG_BASE_API

/**
 * 文章信息统计
 * @returns {AxiosPromise}
 */
export function blogInfo() {
  return request({
    url: `${baseUrl}/basic/info`,
    method: 'post'
  })
}

/**
 * 文章信息统计图表
 * @param data {type: 0:文章总量}
 * @returns {AxiosPromise}
 */
export function blogStatisticalTable(data) {
  return request({
    url: `${baseUrl}/statistics/info`,
    method: 'post',
    data
  })
}

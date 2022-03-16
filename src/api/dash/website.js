import request from '@/utils/request'
const baseUrl = process.env.VUE_APP_ADMIN_BASE_API

/**
 * 日历信息
 * @param data
 * @returns {AxiosPromise}
 */
export function calendar(data) {
  return request({
    url: `${baseUrl}/calendar`,
    method: 'post',
    params: { data }
  })
}

/**
 * 消息信息
 * @param data
 * @returns {AxiosPromise}
 */
export function message(data) {
  return request({
    url: `${baseUrl}/message`,
    method: 'post',
    params: { data }
  })
}

/**
 * 待办信息
 * @param data
 * @returns {AxiosPromise}
 */
export function backLog(data) {
  return request({
    url: `${baseUrl}/backlog`,
    method: 'post',
    data
  })
}

/**
 * 统计图表
 * @param data {type: 0:网站访问数}
 * @returns {AxiosPromise}
 */
export function websiteStatisticalTable(data) {
  return request({
    url: `${baseUrl}/statistics/info`,
    method: 'post',
    data
  })
}

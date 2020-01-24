import request from '@/utils/request'

/**
 * 查询
 */
export function query(pagination, queryParam) {
  return request({
    url: '/system/prompt/query',
    method: 'post',
    params: {
      page: pagination.page,
      pageSize: pagination.pageSize
    },
    data: queryParam
  })
}

/**
 * 保存
 * @param dto
 */
export function submit(dto) {
  return request({
    url: '/system/prompt/submit',
    method: 'post',
    data: dto
  })
}

/**
 * 删除
 * @param rows
 */
export function remove(rows) {
  return request({
    url: '/system/prompt/remove',
    method: 'post',
    data: rows
  })
}

/**
 * 根据ID查询
 * @param id
 */
export function queryById(id) {
  return request({
    url: '/system/prompt/queryById',
    method: 'get',
    params: {
      'id': id
    }
  })
}

/**
 * 根据语言查找全部
 * @param langCode
 */
export function i18n(langCode) {
  return request({
    url: '/system/prompt/i18n',
    method: 'get',
    params: {
      'langCode': langCode
    }
  })
}


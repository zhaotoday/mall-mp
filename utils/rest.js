import REST from 'jt-rest'
import consts from './consts'
import restHelpers from './helpers/rest-helpers'
import wxb from './wxb'
import auth from './auth'

export default class extends REST {
  /**
   * 重写父类 request 方法，按业务场景定制功能
   * @override
   */
  request (method = 'GET', options = {}) {
    if (!options.query) {
      options.query = {}
    }

    if (!options.body) {
      options.body = {}
    }

    if (typeof options.loading === 'undefined') {
      options.loading = true
    }

    if (auth.loggedIn()) {
      const userId = auth.get()['user']['id']

      options.query.wxUserId = userId
      options.body.wxUserId = userId
    }

    // 转 options.query.where 对象为字符串
    if (options.query.where) {
      options.query.where = restHelpers.whereToStr(options.query.where)
    }

    if (method === 'GET') {
      options.query._ = new Date().getTime()
    }

    // options.loading && wxb.showLoading()

    return new Promise(resolve => {
      super.request(method, options)
        .then(res => {
          options.loading && wxb.hideLoading()

          // 在这里可对 res 进行包装
          resolve(res.data)
        })
        .catch(res => {
          options.loading && wxb.hideLoading()

          if (res.statusCode === 500) {
            wxb.showToast({ title: '服务器出错' })
          } else if (res.data.error.code === 'AUTHORIZATION/UNAUTHORIZED') {
            wxb.navigateTo({ url: consts.LOGIN_PAGE })
          } else {
            wxb.showToast({ title: res.data.error.message })
          }
        })
    })
  }
}

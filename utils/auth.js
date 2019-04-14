import wxb from './wxb'

const USER = 'user'
const TOKEN = 'token'

export default {
  /**
   * 获取 auth，返回：用户信息和 token
   * @return {Object}
   */
  get () {
    return {
      [USER]: wxb.getStorageSync(USER),
      [TOKEN]: wxb.getStorageSync(TOKEN)
    }
  },

  /**
   * 登录
   * @param {string} user 登录用户
   * @param {string} token 登录 token
   */
  login ({ user, token }) {
    wxb.setStorageSync(USER, user)
    wxb.setStorageSync(TOKEN, `Bearer ${token}`)
  },

  /**
   * 登出
   */
  logout () {
    wxb.removeStorageSync(USER)
    wxb.removeStorageSync(TOKEN)
  },

  /**
   * 是否已登录
   * @return {boolean}
   */
  loggedIn () {
    return !!wxb.getStorageSync(USER) && !!wxb.getStorageSync(TOKEN)
  }
}

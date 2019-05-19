import wxb from './wxb'

const USER = 'user'
const TOKEN = 'token'

export default {
  get () {
    return {
      [USER]: wxb.getStorageSync(USER),
      [TOKEN]: wxb.getStorageSync(TOKEN)
    }
  },
  login ({ user, token }) {
    wxb.setStorageSync(USER, user)
    wxb.setStorageSync(TOKEN, `Bearer ${token}`)
  },
  setPhoneNumber ({ phoneNumber }) {
    const user = this.get()[USER]
    wxb.setStorageSync(USER, { ...user, phoneNumber })
  },
  logout () {
    wxb.removeStorageSync(USER)
    wxb.removeStorageSync(TOKEN)
  },
  loggedIn () {
    return !!wxb.getStorageSync(USER) && !!wxb.getStorageSync(TOKEN)
  }
}

import ORDER_STATUSES from './order-statuses'
import PRODUCT_UNITS from './product-units'
import PRODUCT_SORT_ITEMS from './product-sort-items'
import PAY_WAYS from './pay-ways'
import ADDRESS_TAGS from './address-tags'
import GENDERS from './genders'
import COUPON_STATUSES from './coupon-statuses'

// 接口地址
// const API_URL = 'http://localhost:3005/api/v1'
const API_URL = 'https://api.fjnm.cn/api/v1'

// 首页
const INDEX_PAGE = '/pages/tab-bar/index/index'

// 登录页
const LOGIN_PAGE = '/pages/login/index'

// 绑定手机页面
const BIND_PAGE = '/pages/bind/index'

export default {
  API_URL,
  INDEX_PAGE,
  LOGIN_PAGE,
  BIND_PAGE,
  ORDER_STATUSES,
  PRODUCT_UNITS,
  PRODUCT_SORT_ITEMS,
  PAY_WAYS,
  ADDRESS_TAGS,
  GENDERS,
  COUPON_STATUSES
}

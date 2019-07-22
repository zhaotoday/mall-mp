import ORDER_STATUSES from './order-statuses'
import DISPATCH_STATUSES from './dispatch-statuses'
import PRODUCT_UNITS from './product-units'
import PRODUCT_SORT_ITEMS from './product-sort-items'
import PAY_WAYS from './pay-ways'
import ADDRESS_TAGS from './address-tags'
import GENDERS from './genders'
import COUPON_STATUSES from './coupon-statuses'
import DELIVERY_AREAS from './delivery-areas'

// 接口地址
const API_URL = 'http://localhost:3004/api/v1'
// const API_URL = 'https://api.fjnm.cn/api/v1'

// CDN
const CDN_URL = 'https://cdn.fjnm.cn'

// 高德地图 Web 服务接口地址
const AMAP_WEB_SERVICE_URL = 'https://restapi.amap.com/v3'

// 高德地图 Web 服务 KEY
const AMAP_WEB_SERVICE_KEY = '0510f542d12fa1d3c70a9c19830f6657'

// 首页
const HOME_PAGE = '/pages/tab-bar/home/index'

// 登录页
const LOGIN_PAGE = '/pages/login/index'

// 绑定手机页面
const BIND_PAGE = '/pages/bind/index'

// 订单最低限额
const ORDER_MIN_PRICE = 0.03

export default {
  API_URL,
  CDN_URL,
  AMAP_WEB_SERVICE_URL,
  AMAP_WEB_SERVICE_KEY,
  HOME_PAGE,
  LOGIN_PAGE,
  BIND_PAGE,
  ORDER_MIN_PRICE,
  ORDER_STATUSES,
  DISPATCH_STATUSES,
  PRODUCT_UNITS,
  PRODUCT_SORT_ITEMS,
  PAY_WAYS,
  ADDRESS_TAGS,
  GENDERS,
  COUPON_STATUSES,
  DELIVERY_AREAS
}

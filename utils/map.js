import consts from '@/utils/consts'
import wxb from '@/utils/wxb'
import REST from '@/utils/rest'

class MapModel extends REST {
  constructor () {
    super()

    this.baseURL = consts.AMAP_WEB_SERVICE_URL
    this.path = ''
  }
}

export default {
  async getAddress ({ location } = {}) {
    const { regeocode } = await new MapModel()
      .addPath('geocode/regeo')
      .GET({
        query: {
          extensions: 'all',
          key: consts.AMAP_WEB_SERVICE_KEY,
          location: `${location.longitude},${location.latitude}`
        }
      })

    return (item => ({
      ...location,
      province: item.province,
      district: item.district,
      city: item.city,
      cityCode: item.citycode,
      town: item.township,
      townCode: item.towncode,
      name: item.name,
      address: item.address
    }))({ ...regeocode.addressComponent, ...regeocode.pois[0] })
  },
  async getNearbyAddresses ({ location, keywords, types = '120201|120302|141200' }) {
    const { pois } = await new MapModel()
      .addPath('place/around')
      .GET({
        query: {
          extensions: 'all',
          key: consts.AMAP_WEB_SERVICE_KEY,
          location: `${location.longitude},${location.latitude}`,
          sortrule: 'distance',
          keywords,
          types
        }
      })

    return pois.map(item => {
      const [lng, lat] = item.location.split(',')

      return {
        id: item.id,
        longitude: lng,
        latitude: lat,
        province: item.pname,
        city: item.cityname,
        cityCode: item.citycode,
        district: item.adname,
        name: item.name,
        address: item.address
      }
    })
  }
}

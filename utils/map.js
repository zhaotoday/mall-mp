import consts from '@/utils/consts'
import wxb from '@/utils/wxb'

export default {
  async getNearbyAddresses ({ location, keywords, types = '120201|120302|141200' }) {
    const { data: { pois } } = await wxb.request({
      url: `${consts.AMAP_WEB_SERVICE_URL}/place/around`,
      data: {
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

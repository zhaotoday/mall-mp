import { mapState } from 'vuex'
import CProductActions from '@/components/product-actions'
import CSpecifications from '@/components/specifications'

export default {
  components: { CProductActions, CSpecifications },
  data () {
    return {
      cSpecifications: {
        current: -1
      }
    }
  },
  computed: mapState({
    detail: state => {
      const detail = state['public/products'].detail

      return detail.id ? {
        ...detail,
        number: 0,
        specifications: (detail.specifications || []).map(item => ({ ...item, number: 0 }))
      } : {}
    }
  }),
  async onShow () {
    this.id = this.$mp.query.id || 17

    await this.getDetail()
    await this.$wx.setNavigationBarTitle({ title: this.detail.name })
  },
  methods: {
    getDetail () {
      return this.$store.dispatch('public/products/getDetail', {
        id: this.id
      })
    },
    handleSpecificationChange (e) {
      this.cSpecifications.current = +e.detail.value
    }
  }
}

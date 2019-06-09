<template>
  <div class="p-products-detail">
    <div class="bgc1">
      <div class="b-picture">
        <img
          v-if="detail.pictures"
          mode="aspectFill"
          :src="$helpers.getImageById(detail.pictures)" />
      </div>
      <div class="b-name u-tac fs40">{{ detail.name }}</div>
      <div class="b-price u-tac">
        <span class="c5 fs20">￥</span>
        <span class="c5 fs50">12.34</span>
        <span class="c9 fs20">/￥20.54</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState({
    detail: state => state['public/products'].detail
  }),
  async onShow () {
    this.id = this.$mp.query.id || 17

    await this.getDetail()
    await this.$wx.setNavigationBarTitle({ title: this.detail.name })
  },
  methods: {
    async getDetail () {
      const { data } = await this.$store.dispatch('public/products/getDetail', {
        id: this.id
      })

      console.log(data)

    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

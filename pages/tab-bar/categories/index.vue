<template>
  <div class="p-categories">
    <scroll-view
      class="b-sidebar bgc6"
      scroll-y>
      <li
        v-for="(item, index) in tree"
        :key="item.id"
        :class="[ 'b-sidebar__item', 'fs24', { 'is-active': index === cSidebar.index } ]"
        @click="handleClickSidebarItem(index)">
        <p>{{ item.name }}</p>
      </li>
    </scroll-view>
    <scroll-view
      v-if="!!tree[cSidebar.index].banner"
      class="b-main bgc1"
      scroll-y>
      <div class="b-banner-wrap">
        <img
          class="b-banner"
          :src="$helpers.getImageById((tree[cSidebar.index] || {})['banner'])" />
      </div>
      <ul class="b-categories">
        <li
          class="b-categories__item"
          v-for="item in (tree[cSidebar.index] || {}).children || []"
          :key="item.id">
          <img
            class="b-categories__image"
            :src="$helpers.getImageById(item.icon)" />
          <p class="b-categories__name c10 fs24">
            {{ item.name }}
          </p>
        </li>
      </ul>
    </scroll-view>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      cMain: {
        items: {}
      },
      cSidebar: {
        index: 0
      }
    }
  },
  computed: {
    ...mapState({
      id: state => state['public/categories'].id,
      list: state => state['public/categories'].list
    }),
    ...mapGetters({
      tree: 'public/categories/tree'
    })
  },
  async onLoad () {
    await this.getList()
  },
  async onShow () {
    if (this.id) {
      this.cSidebar.index = this.tree.findIndex(item => item.id === this.id)
    } else {
      this.cSidebar.index = 0
    }
    this.$store.dispatch('public/categories/setId', { id: 0 })
  },
  methods: {
    getList () {
      return this.$store.dispatch('public/categories/getList', {
        query: {
          offset: 0,
          limit: 1000,
          alias: 'products'
        }
      })
    },
    handleClickSidebarItem (index) {
      this.cSidebar.index = index
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

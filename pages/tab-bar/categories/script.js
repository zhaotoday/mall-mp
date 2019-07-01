import { mapState } from 'vuex'
import categoriesMixin from '@/mixins/categories'

export default {
  mixins: [categoriesMixin],
  data () {
    return {
      cSidebar: {index: 0}
    }
  },
  computed: mapState({
    id: state => state['public/categories'].id
  }),
  onLoad () {
    this.getCategoriesList()
  },
  async onShow () {
    this.cSidebar.index = this.id
      ? this.categoriesTree.findIndex(item => item.id === this.id)
      : 0
    this.$store.dispatch('public/categories/setId', {id: 0})
  },
  methods: {
    handleClickSidebarItem (index) {
      this.cSidebar.index = index
    }
  }
}

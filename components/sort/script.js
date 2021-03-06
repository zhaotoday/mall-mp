export default {
  name: 'c-sort',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      current: 0,
      mappedItems: []
    }
  },
  created () {
    this.mappedItems = this.items.map(item => ({
      ...item,
      dir: ''
    }))
  },
  methods: {
    change (index) {
      if (this.mappedItems[index].sortable) {
        if (this.current === index) {
          this.mappedItems[index].dir = this.mappedItems[index].dir === 'up'
            ? 'down'
            : 'up'
        } else {
          this.mappedItems = this.mappedItems.map((item, itemIndex) => ({
            ...item,
            dir: itemIndex === index ? 'down' : ''
          }))
        }
      } else {
        this.mappedItems = this.mappedItems.map(item => ({ ...item, dir: '' }))
      }

      this.current = index

      this.$emit('change', this.mappedItems[index])
    }
  }
}

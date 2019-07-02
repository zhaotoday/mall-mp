export default {
  name: 'c-specifications',
  data () {
    return {
      current: -1,
      range: []
    }
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleChange (e) {
      this.current = +e.detail.value
      this.$emit('change', e)
    }
  }
}

export default {
  name: 'c-specifications',
  data () {
    return {
      index: 0,
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
      this.$emit('change', e)
    }
  }
}

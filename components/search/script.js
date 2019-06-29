export default {
  name: 'c-search',
  props: {
    autoFocus: {
      type: Boolean,
      default: false
    },
    hasSubmit: {
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      value: ''
    }
  },
  created () {
    this.value = this.defaultValue
  },
  methods: {
    handleConfirm () {
      this.$emit('confirm', this.value)
    },
    getValue () {
      return this.value
    }
  }
}

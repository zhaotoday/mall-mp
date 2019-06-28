<template>
  <div>
    <div
      v-show="visible"
      class="c-overlay"
      @click="$emit('cancel')">
    </div>
    <div
      v-show="visible"
      class="c-dialog"
      :style="{ width: `${width}rpx` }">
      <div
        v-if="title"
        class="c-dialog__title fs34 u-tac">
        {{ title }}
      </div>
      <div
        v-if="content"
        class="c-dialog__content u-tac c6 fs28">
        {{ content }}
      </div>
      <slot name="body"></slot>
      <ul class="c-dialog__foot o-grid u-tac fs32">
        <li
          v-if="cancel"
          class="o-grid__cell"
          @click="$emit('cancel')">
          取消
        </li>
        <li
          :class="[ 'o-grid__cell', confirmDisabled ? 'c19' : 'c7' ]"
          @click="handleConfirm">
          {{ confirmText }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    cancel: {
      type: Boolean,
      default: true
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    confirmDisabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '560'
    }
  },
  methods: {
    handleConfirm () {
      if (!this.confirmDisabled) {
        this.$emit('confirm')
      }
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

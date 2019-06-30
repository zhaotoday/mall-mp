<template>
  <div class="c-number-input">
    <div
      v-if="number"
      class="c-number-input__subtract"
      @click.stop="$emit('subtract')">
    </div>
    <div
      v-if="number"
      class="c-number-input__number fs28 u-tac">
      {{ number }}
    </div>
    <div
      class="c-number-input__add"
      @click.stop="$emit('add')">
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-number-input',
  props: {
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style
  lang="scss"
  src="./styles.scss">
</style>

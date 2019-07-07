<template>
  <div class="p-remark">
    <textarea
      class="b-input bgc1 fs28"
      placeholder="有什么补充的或其他想说的"
      v-model="cForm.remark">
    </textarea>
    <button
      class="c-button is-foot w670 h76 bgc4 c1 fs32"
      @click="submit">
      提交
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

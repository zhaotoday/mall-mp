<template>
  <div class="p-addresses-form">
    <ul class="c-list bgc1 fs30 u-mt20">
      <li class="c-list__item">
        收货人
        <input
          class="c-list__value fs32"
          placeholder-class="c9"
          placeholder="收货人姓名"
          v-model="cForm.name" />
        <ul class="b-genders">
          <li
            v-for="item in $consts.GENDERS"
            :key="item.value"
            :class="[ 'c-tag h50', cForm.gender === item.value ? 'bdc5 c5': 'bdc14 c9', 'fs26' ]"
            @click="changeTag('gender', item)">
            {{ item.label }}
          </li>
        </ul>
      </li>
      <li class="c-list__item">
        手机号
        <input
          class="c-list__value fs32"
          type="number"
          maxlength="11"
          placeholder-class="c9"
          placeholder="配送员联系您的手机号"
          v-model="cForm.phoneNumber" />
      </li>
      <li
        class="c-list__item is-link"
        @click="navigateTo('/pages/addresses/map/index')">
        小区
        <p
          v-if="addressesForm.location.id"
          class="c-list__value fs32">
          {{ addressesForm.location.name }}
        </p>
        <p
          v-else
          class="c-list__value c9 fs32">
          小区/写字楼等
        </p>
      </li>
      <li class="c-list__item">
        门牌号
        <input
          class="c-list__value fs32"
          placeholder-class="c9"
          placeholder="门牌号，如：1 号楼 102"
          v-model="cForm.room" />
      </li>
      <li class="c-list__item">
        地址分类
        <ul class="b-types">
          <li
            v-for="item in $consts.ADDRESS_TAGS"
            :key="item.value"
            :class="[ 'c-tag h50', cForm.tag === item.value ? 'bdc5 c5' : 'bdc14 c9', 'fs26' ]"
            @click="changeTag('tag', item)">
            {{ item.label }}
          </li>
        </ul>
      </li>
    </ul>
    <button
      class="c-button w670 h76 bgc4 c1 fs32"
      @click="save">
      保存
    </button>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

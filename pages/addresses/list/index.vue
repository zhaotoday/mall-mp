<template>
  <div class="p-addresses-list">
    <ul
      v-for="item in list.items"
      :key="item"
      class="b-list u-mt20">
      <li class="b-list__item bgc1">
        <div class="b-list__head">
          <h2 class="b-list__title fs28">{{ item.address + item.room }}</h2>
          <p class="b-list__desc c9 fs24">{{ item.name }} {{ item.phoneNumber }}</p>
          <div class="c-tag h34 bdc5 c5 fs20">
            {{ $helpers.getItem($consts.ADDRESS_TAGS, 'value', item.tag)['label'] }}
          </div>
        </div>
        <div class="b-list__foot fs24">
          <div
            class="c-icon-tag c-icon-tag--set"
            @click="setDefault(item)">
            设为默认
          </div>
          <div
            class="c-icon-tag c-icon-tag--edit"
            @click="navigateTo(`/pages/addresses/form/index?id=${item.id}`)">
            编辑
          </div>
          <div
            class="c-icon-tag c-icon-tag--del"
            @click="showDel(item)">
            删除
          </div>
        </div>
      </li>
    </ul>
    <button
      class="c-button w670 h76 bgc4 c1 fs32"
      @click="navigateTo('/pages/addresses/form/index')">
      新增地址
    </button>
    <c-dialog
      :visible="cDel.visible"
      title="请确认"
      content="确认删除地址？"
      @cancel="cDel.visible = false"
      @confirm="confirmDel">
    </c-dialog>
  </div>
</template>

<script src="./script.js"></script>

<style
  lang="scss"
  src="./style.scss">
</style>

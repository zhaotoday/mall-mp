export default {
  checkedItems (state) {
    return state.items.filter(item => item.checked)
  }
}

export default {
  getTotalPrice (products = []) {
    let totalPrice = 0

    products.filter(item => item.checked).forEach(product => {
      if (product.price) {
        totalPrice += product.price * product.number
      } else {
        product.specifications.forEach(specification => {
          totalPrice += specification.price * specification.number
        })
      }
    })

    return parseFloat(totalPrice.toFixed(2))
  }
}

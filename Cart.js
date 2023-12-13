import { formatCurrency } from "./helper.js"

export default class Cart {
  constructor(cartId) {
    this.cartId = cartId
    this.items = []
  }

  addToCart(product, quantity) {
    this.items.push({product, quantity})
    console.log(`\nAdded ${quantity} ${product.productName}(s) to the cart.`)
  }

  removeFromCart(product) {
    const index = this.items.findIndex(item => item.product === product)
    if(index >= 0) {
      this.items.splice(index, 1)
      console.log(`\nRemoved ${product.productName} from the cart.`)
    } else {
      console.log(`\n${product.productName} not found in the cart.`)
    }
  }

  viewCart() {
    console.log(`\nCart ID: ${this.cartId}`)
    console.log("Cart Items: ")
    this.items.forEach(item => {
      console.log(`${item.product.productName} - Quantity: ${item.quantity}`)
    })
    const totalAmount = this.items.reduce((totalPrice, itemPrice) => totalPrice + itemPrice.product.price * itemPrice.quantity, 0)
    console.log(`Total amount: Rp ${formatCurrency(totalAmount)}`)
  }
}
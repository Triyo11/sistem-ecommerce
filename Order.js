export default class Order {
  constructor(orderId) {
    this.orderId = orderId
    this.items = []
    this.totalAmount = 0
  }

  createOrder(cart) {
    this.items = [...cart.items]
    this.totalAmount = this.items.reduce((totalPrice, item) => totalPrice + item.product.price * item.quantity, 0)
    console.log("Order created successfully.")
  }

  displayOrderDetails() {
    console.log(`Order ID: ${this.orderId}`)
    console.log("Order items:")
    this.items.forEach(item => {
      console.log(`${item.product.productName} - Quantity: ${item.quantity}`)
    })
    console.log(`Total amount: Rp ${this.totalAmount}`)
  }
}
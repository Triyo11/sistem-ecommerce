import { formatCurrency } from "./helper.js"

export default class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId
    this.productName = productName
    this.price = price
    this.description = description
  }

  displayProduct() {
    console.log(`Product ID: ${this.productId}`)
    console.log(`Product Name: ${this.productName}`)
    console.log(`Price: ${formatCurrency(this.price)}`)
    console.log(`Description: ${this.description}`)
  }

  updateProduct(newProductName, newPrice, newDescription) {
    this.productName = newProductName ? newProductName : this.productName
    this.price = newPrice ? formatCurrency(newPrice) : formatCurrency(this.price)
    this.description = newDescription ? newDescription : this.description
    console.log("Product updated successfully.")
  }
}
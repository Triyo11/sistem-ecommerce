export default class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId
    this.categoryName = categoryName
    this.listProducts = []
  }

  displayCategory() {
    console.log(`\nCategory ID: ${this.categoryId}`)
    console.log(`Category Name: ${this.categoryName}`)
  }

  updateCategory(newCategoryName) {
    this.categoryName = newCategoryName ? newCategoryName : this.categoryName
    console.log("\nCategory update successfully.")
  }

  products() {
    console.log(`\nProducts in category "${this.categoryName}":\n`)
    this.listProducts.forEach(product => product.displayProduct())
  }
}
export default class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId
    this.categoryName = categoryName
    this.listProducts = []
  }

  displayCategory() {
    console.log(`Category ID: ${this.categoryId}`)
    console.log(`Category Name: ${this.categoryName}`)
  }

  updateCategory(newCategoryName) {
    this.categoryName = newCategoryName ? newCategoryName : this.categoryName
    console.log("Category update successfully.")
  }

  products() {
    console.log(`Products in category "${this.categoryName}":\n`)
    this.listProducts.forEach(product => product.displayProduct())
  }
}
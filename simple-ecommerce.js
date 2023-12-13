import Product from "./Product.js";
import Category from "./Category.js";
import Cart from "./Cart.js";
import Order from "./Order.js";

// create new product
const laptop = new Product(1, 'Laptop', 8000000, "Powerfull laptop")
const smartphone = new Product(2, 'Smartphone', 3000000, "Aesthetic phone")
const headset = new Product(3, 'Headset', 900000, "Boombastic bass")

// display detail of product
laptop.displayProduct()
smartphone.displayProduct()
headset.displayProduct()

// update product and display the edited product
laptop.updateProduct(null, 7000000, null)
laptop.displayProduct()

// create new category
const electronic = new Category(1, 'Electronic')
const computer = new Category(2, 'Computer')

// display detail of category
electronic.displayCategory()
computer.displayCategory()

// add product to one category
electronic.listProducts.push(laptop, smartphone)
// add product to two category
// laptop will has two category, electronic and computer
computer.listProducts.push(laptop, headset)
// display product(s) in category
electronic.products()
computer.products()

// update detail of category
computer.updateCategory('Hardware')
computer.displayCategory()
computer.products()

// create cart object
const cart = new Cart(1)

// add item(s) to cart
cart.addToCart(laptop, 1)
cart.addToCart(smartphone, 2)

// remove item(s) from cart
// if successed
cart.removeFromCart(laptop)
// if failed
cart.removeFromCart(headset)

// display all item(s) in the cart
cart.viewCart()

// create an order object
const order = new Order(1)

// create order by cart
order.createOrder(cart)

// display detail of order
order.displayOrderDetails()

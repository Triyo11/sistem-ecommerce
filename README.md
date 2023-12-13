# Ecommerce App

This is a simple ecommerce app using OOP in Javascript. There are class for **Product**, **Category**, **Cart**, and **Order**. Each of these class is inter-connected to build a complex system. I have added `simple-ecommerce.js` file to demonstrate how to use this app. Below it I would give a small guide of each method in this system.

### Add product and display it
```javascript
// create new product
const laptop = new Product(1, 'Laptop', 8000000, "Powerfull laptop")
const smartphone = new Product(2, 'Smartphone', 3000000, "Aesthetic phone")
const headset = new Product(3, 'Headset', 900000, "Boombastic bass")

// display detail of product
laptop.displayProduct()
smartphone.displayProduct()
headset.displayProduct()
```

### Update product
```javascript
// update product and display the edited product
laptop.updateProduct(null, 7000000, null)
laptop.displayProduct()
```
### Create a category
```javascript
// create new category
const electronic = new Category(1, 'Electronic')
const computer = new Category(2, 'Computer')
```
### Display detail of category
```javascript
// display detail of category
electronic.displayCategory()
computer.displayCategory()
```
### Add product to one category and many category
```javascript
// add product to one category
electronic.listProducts.push(laptop, smartphone)
// add product to two category
// laptop will has two category, electronic and computer
computer.listProducts.push(laptop, headset)
// display product(s) in category
electronic.products()
computer.products()
```
### Update detail of category
```javascript
// update detail of category
computer.updateCategory('Hardware')
computer.displayCategory()
computer.products()
```
### Create cart and add item to cart
```javascript
// create cart object
const cart = new Cart(1)

// add item(s) to cart
cart.addToCart(laptop, 1)
cart.addToCart(smartphone, 2)
```
### Remove item(s) from cart
```javascript
// remove item(s) from cart
// if successed
cart.removeFromCart(laptop)
// if failed
cart.removeFromCart(headset)
```
### Display all item(s) in cart
```javascript
// display all item(s) in the cart
cart.viewCart()
```
### Create order object and add cart to order
```javascript
// create an order object
const order = new Order(1)

// create order by cart
order.createOrder(cart)
```
### Display detail of order
```javascript
// display detail of order
order.displayOrderDetails()
```

var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item1 = {
  itemName: item,
  itemPrice:Math.floor(Math.random() * 100)
 };
 cart.push(item1);
return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  if (cart.length == 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  else if (cart.length == 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else if (cart.length > 2) {
    var firstItem = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}`
    var lastItem = `, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
    var middleItems = ""
    for (let i = 1; i < cart.length - 1; i++) {
      middleItems = middleItems.concat(`, ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
    return firstItem + middleItems + lastItem
  }
  else {
    return "Your shopping cart is empty."
  }
}
// function total() {
//   // write your code here
//   cart3 = {};
//   for() {
//     return
//   }
// }
//
// function removeFromCart(item) {
//   // write your code here
//   if(condition) {
//
//   } else {
//     return "The item is not in your cart."
//   }
// }
//
// function placeOrder(cardNumber) {
//   // write your code here
//   if(condition) {
//     return `Your total cost is ${total}, which will be charged to the card ${cardNumber}`
//   } else {
//     return "Sorry, we don't have a credit card on file for you."
//   }
// }

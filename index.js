var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100)})
 return `${item} has been added to your cart.`
}

function viewCart() {
  let returnedStatement;
  for (i=0; i<cart.length; i++){
    let returnedDetails;
    returnedDetails += `${cart[i].itemName} at $${cart[i].itemPrice}, `
  }
  returnedStatement = `In your cart, you have ${returnedDetails}`
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

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
  let returnedDetails;
  if (cart.length == 0){
    return "Your shopping cart is empty."
  } else if (cart.length == 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    }
  {
    for (i=0; i<cart.length; i++){
      if (i < cart.length-1){
        returnedDetails += `${cart[i].itemName} at $${cart[i].itemPrice}, `
      } else {
        returnedDetails += `and ${cart[i].itemName} at $${cart[i].itemPrice}.`
        }
      }
      return`In your cart, you have ${returnedDetails}`;
    }
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

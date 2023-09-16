let productViews = new WeakMap();
let cartItems = new WeakSet();

function incrementProductViews(productId) {
  let views = productViews.get(productId) || 0;
  productViews.set(productId, views + 1);
}

function addToCart(productId) {
  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    cartItems.add(productId);
    return "Product added to cart";
  } 
}

 const product1 = {}; 

incrementProductViews(product1);
incrementProductViews(product1);
console.log(productViews.get(product1)); 

console.log(addToCart(product1)); 
console.log(addToCart(product1));
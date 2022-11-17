const products = [
    {name: "t-shirt", price: 500},
    {name: "Laptop", price: 55000},
    {name: "iPad", price: 85000},
    {name: "iMac", price: 185000}
]

let totalPrice = 0; //  ইনিশিয়াল ভ্যালু 
for(product of products){ // Product এর products এর সকল উপাদান আছে ।
    totalPrice = totalPrice + product.price; // product  থেকে শুধুমাত্র প্রাইজকে নেওয় হয়েছে । 
}
console.log(totalPrice);





const carts = [
    {name: "t-shirt", price: 500, quantity: 10},
    {name: "Laptop", price: 55000, quantity: 3},
    {name: "iPad", price: 85000, quantity: 5},
    {name: "iMac", price: 185000, quantity: 2}
]


let cartTotal = 0;
for (product of carts){
  const  productTotal = product.quantity * product.price;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);
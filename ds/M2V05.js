// Count subtotal

const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 100, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 35, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 200, quantity: 1 },
];

const subTotal = cartItems.reduce((acc, item) => {
  return acc + item.price * item.quantity;
}, 0);

console.log(subTotal);

//---------------------------- Data Aggregation useing reduce
const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];
const bestPlayer = players.reduce((acc, item) => {
  if (acc.score > item.score) {
    return acc;
  }
  return item;
}, players[0]);

console.log(bestPlayer); //95

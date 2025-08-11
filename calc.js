//----------wood requirement--------//

// function woodQ(chair, table, bed) {
//   const chairWood = 3;
//   const tableWood = 10;
//   const bedWood = 50;

//   const allChairWood = chair * chairWood;
//   const allTableWood = table * tableWood;
//   const allbedWood = bed * bedWood;

//   const total = allChairWood + allTableWood + allbedWood;
//   return total
// }

// const wood = woodQ(0,0,1)
// console.log(wood);

// ----------cheapest phone in array of object---//

// const phones = [
//   { name: "Samsung", price: 60000, camera: "64mp", color: "White" },
//   { name: "Xoami", price: 30000, camera: "14mp", color: "Black" },
//   { name: "oppo", price: 20000, camera: "4mp", color: "White" },
//   { name: "iphone", price: 100000, camera: "64mp", color: "White" },
//   { name: "realme", price: 40000, camera: "24mp", color: "Black" },
// ];

// function cheapest(phones) {
//   let min = phones[0];
//   for (const phone of phones) {
//     if (phone.price < min.price) {
//       min = phone;
//     }
//   }
//   return min;
// }
// const cheap = cheapest(phones);
// console.log(cheap);

// -------total -----------//

// const products = [
//   { name: "Shampoo", price: 1200 },
//   { name: "face-wash", price: 2200 },
//   { name: "Cream", price: 2200 },
//   { name: "tonner", price: 2300 },
// ];

// function shopping(products) {
//   let sum = 0;

//   for (const product of products) {
//     sum += product.price
//   }
//   return sum;
// }

// const total = shopping(products);
// console.log(total);

// ----------cart--------//
// const products = [
//   { quantity: 2, name: "Shampoo", price: 1200 },
//   { quantity: 1, name: "face-wash", price: 2200 },
//   { quantity: 3, name: "Cream", price: 2200 },
//   { quantity: 4, name: "tonner", price: 2300 },
// ];

// function shopping(product) {
//   let total = 0;
//   for (const product of products) {
//     const thisProductCost = product.price * product.quantity;
//     total = total + thisProductCost;
//   }
//   return total;
// }

// const total = shopping(products);
// console.log(total);

// ----------discount-----------//

// function discount(quantity) {

//   if (quantity <= 100) {
//     const total = quantity * 100;
//     return total;
//   } else if (quantity <= 200) {
//     const total = quantity * 90;
//     return total;
//   } else {
//     const total = quantity * 70;
//     return total;
//   }
// }

// const total = discount(500);
// console.log(total);

// ---------layered discount-------//

// function layeredDiscount(quantity) {
//   const price1 = 100;
//   const price2 = 90;
//   const price3 = 70;

//   if (quantity <= 100) {
//     const total = quantity * price1;
//     return total;
//   } else if (quantity <= 200) {
//     const price1Total = 100 * price1;
//     const remaining = quantity - 100;
//     const remainingSum = remaining * 90;
//     const total = remainingSum + price1Total;
//     return total;
//   } else {
//     const price1Total = 100 * price1;
//     const price2Total = 100 * price2;
//     const remaining = quantity - 200;
//     const remainingSum = remaining * price3;
//     const total = remainingSum + price1Total + price2Total;
//     return total;
//   }
// }

// const discount = layeredDiscount(220)
// console.log(discount);

// -------------calculator----------//
// function add(num1, num2) {
//   return num1 + num2;
// }
// function sub(num1, num2) {
//   return num1 - num2;
// }
// function mult(num1, num2) {
//   return num1 * num2;
// }
// function div(num1, num2) {
//   return num1 / num2;
// }

// function calculator(a, b, ope) {
//   if (ope === "add") {
//     const result = add(a, b);
//     return result;
//   } else if (ope === "sub") {
//     const result = sub(a, b);
//     return result;
//   } else if (ope === "multiply") {
//     const result = mult(a, b);
//     return result;
//   }
//   else if (ope === "devide") {
//     const result = div(a, b);
//     return result;
//   }
//   else{
//     return "invalid"
//   }
// }

// const result = calculator(5,7,'sub')
// console.log(result);


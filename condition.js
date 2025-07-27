// console.log(10>=5)
// console.log(10==10 || 16<10);
// var apple = 10;
// var lemon = 20;
// console.log(apple <= lemon)

// // Condition
// var coffeePrice = 400;
// if (coffeePrice <= 300) {
//   console.log("i will have coffee");
// } else {
//   console.log("can i have tea?");
// }
//  Two condition
// const price = 2000;
// const buyBag = true;
// const color = 'blue';

// if(price<=2000 && color == 'red'){
//   console.log('buy bag');
// }
// else {
//   console.log('cry in the corner');

// }

// ----------complex----------//
//  const price = 2000;
// const buyBag = true;
// const color = 'blue';

// if( (price<= 2000 && color =='red') || color =='blue'){
//    console.log('buy bag');
// }

// multi level
const price = 4000;
if (price >= 5000) {
  const discount = (price * 10) / 100;
  const pay = price - discount;
  console.log(pay);
} 
else if( price >= 2500){
   const discount = (price * 5) / 100;
  const pay = price - discount;
  console.log(pay);
}
else {
  console.log(price);
}

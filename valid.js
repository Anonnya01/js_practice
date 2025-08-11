// function mult(num1, num2) {
//   if (typeof num1 !== "number" || typeof num2 !== "number") {
//     return "not a number";
//   }
//   const total = num1 * num2;
//   return total;
// }

// const sum = mult(3, "s");
// console.log(sum);

// example-2//

// function name(first,second) {
//     if(typeof first !== 'string'|| typeof second !=='string'){
//         return 'not a name'
//     }
//     const full = first + " " +second;
//     return full;
// }

// const full =name("Simba",8)
// console.log(full);

function getPrice(product) {
  if (typeof product !== "object") {
    return "not an object";
  }

  const price = product.price;
  return price;
}
const price = getPrice(5);
// const price = getPrice({ quantity: 2, price: 1200 });
console.log(price);

function second(num) {

if(Array.isArray(num) === false){
return 'enter array'
}
  const numb = num[1];
  return numb;
}
const number = second(2);
console.log(number);

// inch to ft
// // ----1-----
// function inchToFeet(inch) {
//   const feet = inch / 12;
//   return feet;
// }
// --------two-------//
// function inchToFeet2(inch) {
//   const feet = inch / 12;
//   const feetNum = parseInt(feet);
//   const inchRem = inch % 12;
//   const result = feetNum + " ft " + inchRem + " inch";
//   return result;
// }
// const sazidHight = inchToFeet(68);
// const sazidHight2 = inchToFeet2(66);
//  console.log(sazidHight.toFixed(2));
// console.log(sazidHight2);

// ====mile to kilo----

// function mileToKilo(mile) {
//   const kilo = mile * 1.60934;
//   return kilo;
// }
// const kilo = mileToKilo(2);
// console.log(kilo);

// -------kilo to mile

// function kiloToMile(kilo) {
//   const mile = kilo * 0.621371;
//   return mile;

// }

// const miles = kiloToMile(20);
// console.log(miles);

// ----------odd avg-------//

function oddAvg(number) {
  const odd = [];
  for (const num of number) {
    if (num % 2 === 1) {
      odd.push(num);
    }
  }
  let sum = 0;
  for (const num of odd) {
    sum += num;
  }
  const length = odd.length;
  const avg = sum / length;
  return avg;
}

const number = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAvg(number);
console.log("average is:", avg);

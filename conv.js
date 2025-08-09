// inch to ft
// // ----1-----
// function inchToFeet(inch) {
//   const feet = inch / 12;
//   return feet;
// }
// // --------two-------//
// function inchToFeet2(inch) {
//   const feet = inch / 12;
//   const feetNum = parseInt(feet);
//   const inchRem = inch % 12;
//   const result = feetNum + " ft " + inchRem + " inch";
//   return result;
// }
// const sazidHight = inchToFeet(68);
// const sazidHight2 = inchToFeet2(66);
// // console.log(sazidHight.toFixed(2));
// console.log(sazidHight2);



// ====mile to kilo----

function mileToKilo(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const kilo = mileToKilo(2);
console.log(kilo);

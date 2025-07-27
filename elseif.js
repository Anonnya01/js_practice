const age = 10;
const price = 600;

if (age < 12) {
  console.log("can get kids meal");
} 
else if (age <= 19) {
  const discount = (price * 20) / 100;
  const pay = price - discount;
  console.log(pay);
}
else
{
    console.log(price);
    
}
const name = ["grape", "apple", "banana", "cherry", "apple", "grape", "cherry"];
const number = [2, 5, 8, 3, 2, 5, 9, 8];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
   if(unique.includes(item) === false){
    unique.push(item)
   }
  }
  return unique
}

const unique = noDuplicate(name);
console.log(unique);
const unique1 = noDuplicate(number);
console.log(unique1);

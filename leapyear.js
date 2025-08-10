// function leapYear(year) {
//     if(year % 4 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const value = leapYear(2024);
// console.log(value);

function leapYear(year) {
    if(year / 100 !== 0 && year % 4 == 0){
        return true;
    }
    else if(year % 100 ===0 && year % 400 === 0){
        return true;
    }
    else{
        return false;
    }
}

const value = leapYear(2400);
console.log(value);

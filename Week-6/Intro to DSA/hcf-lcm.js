
let hcf;

const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {

    // check if is factor of both integers
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}


console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

// higher number among number1 and number2 is stored in min
let min = (number1 > number2) ? number1 : number2;

while (true) {
    if (min % number1 == 0 && min % number2 == 0) {
        console.log(`LCM of ${number1} and ${number2} is ${min}`);
        break;
    }
    min++;
}

let product = hcf * min;

console.log(`Product of ${hcf} * ${min} is ${product}.`);
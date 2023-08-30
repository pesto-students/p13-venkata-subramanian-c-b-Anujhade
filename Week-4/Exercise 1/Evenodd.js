const numbers = [1,8,9,7,2,4,6,2];
const evennumbers = [];
const oddnumbers = [];

for(const number of numbers)
{
    if (number % 2 === 0){
        evennumbers.push(number);
    }
    else{
        oddnumbers.push(number);
    }
}

console.log("Even numbers:" , evennumbers);
console.log("odd numbers" , oddnumbers);
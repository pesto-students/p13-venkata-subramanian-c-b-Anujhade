
function reverseFunction(num) 
    {
        let numStr = num.toString();
        let reversedStr = '';
        
        for (let i = numStr.length - 1; i >= 0; i--) 
            {
                reversedStr += numStr[i];
            }
        return parseInt(reversedStr);
}
  
let num = prompt("Enter the number to be reversed: ");
let reversedNum = reverseFunction(num);
  
console.log(`The reversed number is : ${reversedNum}`);
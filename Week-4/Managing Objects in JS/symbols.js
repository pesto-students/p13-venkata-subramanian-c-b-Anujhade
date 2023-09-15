let transactionCounter = 0;
const generateTransactionId= () =>{
            transactionCounter++;
            const id = `TransactionId - ${transactionCounter}`
            return Symbol(id);
        }

const transaction1 = generateTransactionId();
console.log(transaction1); 

const transaction2 = generateTransactionId();
console.log(transaction2); 

const transaction3 = generateTransactionId();
console.log(transaction3);  
 
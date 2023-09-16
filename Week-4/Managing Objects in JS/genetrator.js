const arrayOfString = ["hello", "world", "test"];

function* symbolIterator(value) 
                {
                yield* value.map((item) => Symbol(item));
                }
const iterator = symbolIterator(arrayOfString);

const symbolArray = Array.from(iterator);

symbolArray.forEach(symbol => {
                    console.log(symbol);
                });
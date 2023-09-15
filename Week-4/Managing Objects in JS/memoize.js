const temperatureData = {
    'New York': 20,
    'London': 18,
    'Paris': 22,
    'Tokyo': 25,
    'Sydney': 28,
  };

const getTemperatureForCity = (city) => {
    if(temperatureData[city]){
        return temperatureData[city];
    }
    else {
        console.log(`City not found: ${city}`)
        return null;
    }
}

const memoize = (getTemperatureForCity) =>{

    let cache = {};
    return function(...arg){
        let n = arg[0];
        if(n in cache){
            console.log("FROM CACHE");
            return cache[n];
        }
        else{
            console.log("NOT IN  CACHE");            
            let result = getTemperatureForCity(n);
            cache[n] = result ; 
            return result
        }
    }
}

const efficient  = memoize(getTemperatureForCity);

console.time();
console.log(efficient("New York"));
console.timeEnd();
console.log("\n");

console.time();
console.log(efficient("New York"));
console.timeEnd();
console.log("\n");


console.time();
console.log(efficient("London"));
console.timeEnd();
console.log("\n");

console.time();
console.log(efficient("London"));
console.timeEnd();
console.log("\n");

console.time();
console.log(efficient("Tokyo"));
console.timeEnd();
console.log("\n");

console.time();
console.log(efficient("Sydney"));
console.timeEnd();
console.log("\n");

console.time();
console.log(efficient("Paris"));
console.timeEnd();
console.log("\n");


console.time();
console.log(efficient("Miami"));
console.timeEnd();
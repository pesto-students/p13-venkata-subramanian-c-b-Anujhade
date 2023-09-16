async function getExchangeRate(currencyCode) {
    try {
      const apiResponse = await fetch(`https://api.exchangerate.host/latest`);   
      const data = await apiResponse.json();
      if (!data.rates[currencyCode]) {
        return null;
      }
      const exchangeRate = parseFloat(data.rates[currencyCode]).toFixed(4);  
      return exchangeRate;
    } catch (error) {
      throw new Error(`Error fetching exchange rate: ${error.message}`);
    }
  }


  getExchangeRate('USD')
        .then((rate) => {
          console.log(rate); 
        })
        .catch((error) => {
          console.error(error);
        });

  getExchangeRate('XYZ')
        .then((rate) => {
          console.log(rate); 
        })
        .catch((error) => {
          console.error(error); 
        });

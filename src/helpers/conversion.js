export const conversion = (amount, currency) => {
    // amount = 99999999 VON
    
    const currencyRates = {
        "USD": 1,
        "VND": 23480,
        "RUB": 82,
        "INR": 82.5,
        "GOLD": 0.0005
    };

    if (!amount || !currency || !currencyRates[currency]) {
        return null;
    }


    const rate = currencyRates[currency];
    const valueInUSD = Number((amount / rate).toFixed(2));

    return valueInUSD;
}
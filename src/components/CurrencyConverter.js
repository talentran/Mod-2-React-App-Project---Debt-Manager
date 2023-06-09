import React from 'react';

function CurrencyConverter({ amount, currency, setAmountAfterConversion }) {
    const currencyRates = {
        "USD": 1,
        "VND": 23480,
        "RUB": 82,
        "INR": 82.5,
        "GOLD": 0.0005
    };

    const convertToUSD = () => {
        if (!amount || !currency || !currencyRates[currency]) {
            return "";
        }

        const rate = currencyRates[currency];
        const valueInUSD = Number((amount / rate).toFixed(2));
        setAmountAfterConversion(valueInUSD)
        return `Approximate value in USD: $${valueInUSD}`;
    };

    return <p>{convertToUSD()}</p>;
}

export default CurrencyConverter;


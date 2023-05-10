import React, { useState } from 'react';

function CurrencyConverter() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [exchangeRate, setExchangeRate] = useState(0);

    function handleAmountChange(event) {
        setAmount(event.target.value);
    }

    function handleFromCurrencyChange(event) {
        setFromCurrency(event.target.value);
    }

    function handleToCurrencyChange(event) {
        setToCurrency(event.target.value);
    }

    function getExchangeRate() {
        fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then(response => response.json())
            .then(data => setExchangeRate(data.rates[toCurrency]));
    }

    function convertCurrency() {
        return (amount * exchangeRate).toFixed(2);
    }

    return (
        <div>
            <h1>Currency Converter</h1>
            <div>
                <label>Amount:</label>
                <input type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <div>
                <label>From Currency:</label>
                <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="RWF">RWF</option>

                </select>
            </div>
            <div>
                <label>To Currency:</label>
                <select value={toCurrency} onChange={handleToCurrencyChange}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="RWF">RWF</option>
                </select>
            </div>
            <button onClick={getExchangeRate}>Get Exchange Rate</button>
            <div>
                {exchangeRate !== 0 && <p>1 {fromCurrency} = {exchangeRate} {toCurrency}</p>}
                {amount !== 0 && exchangeRate !== 0 && <p>{amount} {fromCurrency} = {convertCurrency()} {toCurrency}</p>}
            </div>
        </div>
    );
}
export default CurrencyConverter;
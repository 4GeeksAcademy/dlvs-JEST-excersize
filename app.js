// app.js

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // Japanese Yen
    "USD": 1.07, // US Dollar
    "GBP": 0.87, // British Pound
}

// DOLLAR > EURO
const fromDollarToEuro = function(valueInDollar) {
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    return valueInEuro;
}

// DOLLAR > YEN
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = fromDollarToEuro(valueInDollar) * oneEuroIs.JPY;
    return valueInYen;
}

// EURO > DOLLAR 
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    return valueInDollar;
}

// YEN > EURO
const fromYenToEuro = function(valueInYen) {
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    return valueInEuro;
}

// YEN > POUNDS
const fromYenToPound = function(valueInYen) {
    let valueInPound = fromYenToEuro(valueInYen) * oneEuroIs.GBP;
    return valueInPound;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound, fromYenToEuro };

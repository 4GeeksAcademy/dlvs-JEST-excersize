const { fromDollarToYen, fromEuroToDollar, fromYenToPound, fromYenToEuro } = require('./app.js');
const oneEuroIs = {
    "JPY": 156.5, // Japanese Yen
    "USD": 1.07, // US Dollar
    "GBP": 0.87, // British Pound
};

// DOLLAR >> YEN
test("Fifty dollars should be converted to yen", function() {
    const yens = fromDollarToYen(50);
    const expected = 50 * oneEuroIs.JPY / oneEuroIs.USD; // Correct calculation
    expect(yens).toBeCloseTo(expected, 2); // Use toBeCloseTo for floating-point precision
});

// EURO >> DOLLAR
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs.USD; // Use oneEuroIs object for USD conversion
    expect(dollars).toBeCloseTo(expected, 2); // Use toBeCloseTo for floating-point precision
});

// YEN >> POUND
test("Yen should be converted to pounds", function() {
    const yenValue = 1000; // Example yen value
    const pounds = fromYenToPound(yenValue);
    const expected = fromYenToEuro(yenValue) * oneEuroIs.GBP; // Use fromYenToEuro and oneEuroIs for conversion
    expect(pounds).toBeCloseTo(expected, 2); // Use toBeCloseTo for floating-point precision
});

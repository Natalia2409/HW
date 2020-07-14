'use strict'

let priceOfApples = 15.678;
let priceOfOranges = 123.965;
let priceOfCherries = 90.2345;

document.writeln(`<p>Максимальна ціна продуктів: ${Math.max(priceOfApples, priceOfOranges, priceOfCherries)};</p>`);

document.writeln(`<p>Мінімальна ціна продуктів: ${Math.min(priceOfApples, priceOfOranges, priceOfCherries)};</p>`);

let sumOfPrices = priceOfApples + priceOfOranges + priceOfCherries;
document.writeln(`<p>Сума всіх товарів: ${sumOfPrices};</p>`);

let roundedPrice = Math.floor(priceOfApples) + Math.floor(priceOfOranges) + Math.floor(priceOfCherries);
document.writeln(`<p>Заокруглена сума усіх товарів: ${roundedPrice};</p>`);

let roundToHundred = Math.round(roundedPrice/100)*100;
document.writeln(`<p>Сума товарів округлена до сотень: ${roundToHundred};</p>`);

if (roundedPrice % 2 == 0) {
    document.writeln('<p>Сума усіх товарів є: парним числом;</p>');
} else {
    document.writeln('<p>Сума усіх товарів є: непарним числом;</p>');
}

let clientPayment = 500;
let restOfPayment = clientPayment - sumOfPrices;
document.writeln(`<p>Сума решти: ${restOfPayment};</p>`);

let averagePrice = (sumOfPrices/3).toFixed(2);
document.writeln(`<p>Середнє значення цін (округлене до другого знаку після коми): ${averagePrice};</p>`);

let randomDiscount = Math.round(Math.random()*100);
document.writeln(`<p>Випадкова знижка: ${randomDiscount}%;</p>`);

let sumWithDiscount = (sumOfPrices - (sumOfPrices*(randomDiscount/100))).toFixed(2);
document.writeln(`<p>Сума зі знижкою: ${sumWithDiscount};</p>`);

let profit = (sumOfPrices/2 - (sumOfPrices - sumWithDiscount)).toFixed(2);
document.writeln(`<p>Прибуток складає: ${profit};</p>`);



let div = document.createElement('div');
div.innerHTML = `
    <h2>ADVANCED</h2>
    <p>Максимальна ціна продуктів: ${Math.max(priceOfApples, priceOfOranges, priceOfCherries)};</p>
    <p>Мінімальна ціна продуктів: ${Math.min(priceOfApples, priceOfOranges, priceOfCherries)};</p>
    <p>Сума всіх товарів: ${sumOfPrices};</p>
    <p>Заокруглена сума усіх товарів: ${roundedPrice};</p>
    <p>Сума товарів округлена до сотень: ${roundToHundred};</p>
    <p>Сума усіх товарів є: парним числом;</p>
    <p>Сума решти: ${restOfPayment};</p>
    <p>Середнє значення цін (округлене до другого знаку після коми): ${averagePrice};</p>
    <p>Випадкова знижка: ${randomDiscount}%;</p>
    <p>Сума зі знижкою: ${sumWithDiscount};</p>
    <p>Прибуток складає: ${profit};</p>
`;
document.body.append(div);

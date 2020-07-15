'use strict'

const priceOfApples = 15.678;
const priceOfOranges = 123.965;
const priceOfCherries = 90.2345;

document.writeln(`<p>Максимальна ціна продуктів: ${Math.max(priceOfApples, priceOfOranges, priceOfCherries)};</p>`);

document.writeln(`<p>Мінімальна ціна продуктів: ${Math.min(priceOfApples, priceOfOranges, priceOfCherries)};</p>`);

const sumOfPrices = priceOfApples + priceOfOranges + priceOfCherries;
document.writeln(`<p>Сума всіх товарів: ${sumOfPrices};</p>`);

const roundedPrice = Math.floor(priceOfApples) + Math.floor(priceOfOranges) + Math.floor(priceOfCherries);
document.writeln(`<p>Заокруглена сума усіх товарів: ${roundedPrice};</p>`);

const roundToHundred = Math.round(roundedPrice/100)*100;
document.writeln(`<p>Сума товарів округлена до сотень: ${roundToHundred};</p>`);

const isEven = (roundedPrice % 2 == 0) ? "true" : "false";
document.writeln(`<p>Чи парна сума усіх товарів?: ${isEven};</p>`);

const clientPayment = 500;
const restOfPayment = clientPayment - sumOfPrices;
document.writeln(`<p>Сума решти: ${restOfPayment};</p>`);

const averagePrice = (sumOfPrices/3).toFixed(2);
document.writeln(`<p>Середнє значення цін (округлене до другого знаку після коми): ${averagePrice};</p>`);

const randomDiscount = Math.round(Math.random()*100);
document.writeln(`<p>Випадкова знижка: ${randomDiscount}%;</p>`);

const sumWithDiscount = (sumOfPrices - (sumOfPrices*(randomDiscount/100))).toFixed(2);
document.writeln(`<p>Сума зі знижкою: ${sumWithDiscount};</p>`);

const profit = (sumOfPrices/2 - (sumOfPrices - sumWithDiscount)).toFixed(2);
document.writeln(`<p>Прибуток складає: ${profit};</p>`);



const div = document.createElement('div');
div.innerHTML = `
    <h2>ADVANCED</h2>
    <p>Максимальна ціна продуктів: ${Math.max(priceOfApples, priceOfOranges, priceOfCherries)};</p>
    <p>Мінімальна ціна продуктів: ${Math.min(priceOfApples, priceOfOranges, priceOfCherries)};</p>
    <p>Сума всіх товарів: ${sumOfPrices};</p>
    <p>Заокруглена сума усіх товарів: ${roundedPrice};</p>
    <p>Сума товарів округлена до сотень: ${roundToHundred};</p>
    <p>Чи парна сума усіх товарів?: ${isEven};</p>
    <p>Сума решти: ${restOfPayment};</p>
    <p>Середнє значення цін (округлене до другого знаку після коми): ${averagePrice};</p>
    <p>Випадкова знижка: ${randomDiscount}%;</p>
    <p>Сума зі знижкою: ${sumWithDiscount};</p>
    <p>Прибуток складає: ${profit};</p>
`;
document.body.append(div);


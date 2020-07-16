const PRICE_OF_APPLES = 15.678;
const PRICE_OF_ORANGES = 123.965;
const PRICE_OF_CHERRIES = 90.2345;

document.writeln(`<p>Максимальна ціна продуктів: ${Math.max(PRICE_OF_APPLES, PRICE_OF_ORANGES, PRICE_OF_CHERRIES)};</p>`);

document.writeln(`<p>Мінімальна ціна продуктів: ${Math.min(PRICE_OF_APPLES, PRICE_OF_ORANGES, PRICE_OF_CHERRIES)};</p>`);

const SUM_OF_PRICES = PRICE_OF_APPLES + PRICE_OF_ORANGES + PRICE_OF_CHERRIES;
document.writeln(`<p>Сума всіх товарів: ${SUM_OF_PRICES};</p>`);

const ROUNDED_PRICE = Math.floor(PRICE_OF_APPLES) + Math.floor(PRICE_OF_ORANGES) + Math.floor(PRICE_OF_CHERRIES);
document.writeln(`<p>Заокруглена сума усіх товарів: ${ROUNDED_PRICE};</p>`);

const ROUND_TO_HUNDRED = Math.ceil(ROUNDED_PRICE/100)*100;
document.writeln(`<p>Сума товарів округлена до сотень: ${ROUND_TO_HUNDRED};</p>`);

const IS_EVEN = (ROUNDED_PRICE % 2 == 0) ? "true" : "false";
document.writeln(`<p>Чи парна сума усіх товарів?: ${IS_EVEN};</p>`);

const CLIENT_PAYMENT = 500;
const REST_OF_PAYMENT = CLIENT_PAYMENT - SUM_OF_PRICES;
document.writeln(`<p>Сума решти: ${REST_OF_PAYMENT};</p>`);

const AVERAGE_PRICE = (SUM_OF_PRICES/3).toFixed(2);
document.writeln(`<p>Середнє значення цін (округлене до другого знаку після коми): ${AVERAGE_PRICE};</p>`);

const RANDOM_DISCOUNT = Math.round(Math.random()*100);
document.writeln(`<p>Випадкова знижка: ${RANDOM_DISCOUNT}%;</p>`);

const SUM_WITH_DISCOUNT = (SUM_OF_PRICES - (SUM_OF_PRICES*(RANDOM_DISCOUNT/100))).toFixed(2);
document.writeln(`<p>Сума зі знижкою: ${SUM_WITH_DISCOUNT};</p>`);

const PROFIT = (SUM_OF_PRICES/2 - (SUM_OF_PRICES - SUM_WITH_DISCOUNT)).toFixed(2);
document.writeln(`<p>Прибуток складає: ${PROFIT};</p>`);



const div = document.createElement('div');
div.innerHTML = `
    <h2>ADVANCED</h2>
    <p>Максимальна ціна продуктів: ${Math.max(PRICE_OF_APPLES, PRICE_OF_ORANGES, PRICE_OF_CHERRIES)};</p>
    <p>Мінімальна ціна продуктів: ${Math.min(PRICE_OF_APPLES, PRICE_OF_ORANGES, PRICE_OF_CHERRIES)};</p>
    <p>Сума всіх товарів: ${SUM_OF_PRICES};</p>
    <p>Заокруглена сума усіх товарів: ${ROUNDED_PRICE};</p>
    <p>Сума товарів округлена до сотень: ${ROUND_TO_HUNDRED};</p>
    <p>Чи парна сума усіх товарів?: ${IS_EVEN};</p>
    <p>Сума решти: ${REST_OF_PAYMENT};</p>
    <p>Середнє значення цін (округлене до другого знаку після коми): ${AVERAGE_PRICE};</p>
    <p>Випадкова знижка: ${RANDOM_DISCOUNT}%;</p>
    <p>Сума зі знижкою: ${SUM_WITH_DISCOUNT};</p>
    <p>Прибуток складає: ${PROFIT};</p>
`;
document.body.append(div);


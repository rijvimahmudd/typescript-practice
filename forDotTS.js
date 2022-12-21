"use strict";
function calToPrice(price) {
    return (price + (price * 0.18).toFixed(1));
}
;
const priceOfToy = calToPrice(1233);
const discountedPrice = priceOfToy / 2;
console.log(discountedPrice);

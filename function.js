"use strict";
exports.__esModule = true;
function sum(num) {
    return num + 2;
}
var a = sum(2);
console.log(a);
function getUpper(val) {
    return val.toUpperCase();
}
var b = getUpper("t");
console.log(b);
function signUpUser(name, email, isPaid) {
}
;
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("rijvi", "rijvi@gmail.com", false);
loginUser("rijvi", "rijvi@gmail.com");
function getValue(myVal) {
    if (myVal > 5)
        return true;
    return "200 OK";
}
// arrow function 
var getHello = function (s) {
    return "OK";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero /**can declare type or not */) {
    return "hero is ".concat(hero);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}

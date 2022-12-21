"use strict";
function sum(num) {
    return num + 2;
}
let a = sum(2);
console.log(a);
function getUpper(val) {
    return val.toUpperCase();
}
let b = getUpper("t");
console.log(b);
function signUpUser(name, email, isPaid) {
}
;
let loginUser = (name, email, isPaid = false) => { };
signUpUser("rijvi", "rijvi@gmail.com", false);
loginUser("rijvi", "rijvi@gmail.com");
function getValue(myVal) {
    if (myVal > 5)
        return true;
    return "200 OK";
}
// arrow function 
const getHello = (s) => {
    return "OK";
};
const heros = ["thor", "spiderman", "ironman"];
heros.map((hero /**can declare type or not */) => {
    return `hero is ${hero}`;
});
function consoleError(errmsg) {
    console.log(errmsg);
}
// never type use when throw error or terminate program 
function handleError(errmsg) {
    throw new Error(errmsg);
}

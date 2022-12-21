"use strict";
let score = 33;
score = "33";
score = false;
let rijvi = {
    name: "rijvi",
    id: 1234,
};
rijvi = {
    Username: "rm",
    id: 3456,
};
function getDBId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id.toFixed(2);
    }
    console.log(`DB id is ${id}`);
}
getDBId(3);
getDBId("3");
// array 
const data = [1, 2, 3, 4, 5];
const data2 = ["1", "2"];
const data3 = ["1", "2", 3];
// let pi:3.14 = 3.14;
let seatAllotment;
seatAllotment = "window";

"use strict";
const User = {
    name: "rijvi",
    email: "r@r.com",
    isActive: true
};
function createUser({ name: string, isPaid: boolean }) {
    return {
        name: "",
        isPaid: false,
    };
}
;
let newUser = { name: "rijvi", isPaid: false, email: "r@r.com" };
createUser(newUser);
// createUser({name:"rijvi", isPaid:false, email : "r@r.com"});
function createCourse() {
    return {
        name: "reactjs",
        price: 399,
    };
}
;
createCourse();
function createUserTwo(user) {
    return { name: "", email: "", isActive: false };
}
createUserTwo({ name: "", isActive: false });
let myUser = {
    _id: "1234",
    name: "rijvi",
    email: "r@r.com",
    isActive: false,
};
myUser.email = "r@rr.com";
// myUser._id = "1234",
// function createUserThree(u:UserTwo):UserTwo{
// }

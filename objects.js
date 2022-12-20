"use strict";
exports.__esModule = true;
var User = {
    name: "rijvi",
    email: "r@r.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
;
var newUser = { name: "rijvi", isPaid: false, email: "r@r.com" };
createUser(newUser);
// createUser({name:"rijvi", isPaid:false, email : "r@r.com"});
function createCourse() {
    return {
        name: "reactjs",
        price: 399
    };
}
;
// type Mystring = string;
function createUserTwo(user) {
    return { name: "", email: "", isActive: false };
}
createUserTwo({ name: "", isActive: false });
var myUser = {
    _id: "1234",
    name: "rijvi",
    email: "r@r.com",
    isActive: false
};
myUser.email = "r@rr.com";

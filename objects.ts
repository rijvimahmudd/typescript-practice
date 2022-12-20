const User = {
    name : "rijvi",
    email: "r@r.com",
    isActive: true
};


function createUser({name:string, isPaid:boolean}){

};

let newUser = {name:"rijvi", isPaid:false, email : "r@r.com"};
createUser(newUser);
// createUser({name:"rijvi", isPaid:false, email : "r@r.com"});



function createCourse():{name:string, price:number}{
    return {
        name : "reactjs",
        price : 399,
    };
};

// alias
type bool = boolean;

type User={
    name: string;
    email?: string; //optional
    isActive: bool;
}

// type Mystring = string;

function createUserTwo(user:User):User{
    return {name: "", email:"", isActive:false};
}

createUserTwo({name: "", isActive:false})

type UserTwo = {
    readonly _id : string;
    name : string;
    email : string;
    isActive: boolean;
    credcardDetails ?: cardDetails;
}

let myUser:UserTwo ={
    _id: "1234",
    name : "rijvi",
    email : "r@r.com",
    isActive : false,
} 

type cardNumber = {
    cardNumber : string,
}

type cardDate ={
    cardDate: string,
}

type cardDetails = cardNumber & cardDate & {
    cvv : number;
} //use & for mixed the types 

myUser.email = "r@rr.com";

// myUser._id = "1234",

// function createUserThree(u:UserTwo):UserTwo{

// }



export {};
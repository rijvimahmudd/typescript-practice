function sum (num:number):number{
    return num + 2;
}


let a = sum(2);

console.log(a);


function getUpper(val:string):string{
    return val.toUpperCase();
}

let b = getUpper("t");

console.log(b);


function signUpUser(name:string, email:string, isPaid:boolean){

};


let loginUser = (name: string, email:string, isPaid:boolean = false)=>{};


signUpUser("rijvi", "rijvi@gmail.com", false);
loginUser("rijvi", "rijvi@gmail.com");

function getValue(myVal: number):string | boolean{
    if(myVal > 5)
        return true;
    
    return "200 OK";
}

// arrow function 

const getHello = (s:string):string=>{
    return "OK";
}

const heros = ["thor", "spiderman", "ironman"];


heros.map((hero: string /**can declare type or not */):string => {
    return `hero is ${hero}`;
});



function consoleError(errmsg: string):void{
    console.log(errmsg);
}

// never type use when throw error or terminate program 
function handleError(errmsg: string):never{
    throw new Error(errmsg);
}

export {};
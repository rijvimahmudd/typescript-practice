let score:number | string | boolean = 33;

score = "33";

score = false;

type Userfour= {
    name : string;
    id: number;
};

type Admin = {
    Username : string;
    id: number;   
}

let rijvi: Userfour | Admin = {
    name : "rijvi",
    id : 1234,
}

rijvi = {
    Username: "rm",
    id: 3456,
}


function getDBId(id: number | string):void{

    if (typeof id === "string") {
        id.toLowerCase();
    }else{
        id.toFixed(2);
    }

    console.log(`DB id is ${id}`);    
}

getDBId(3);
getDBId("3");

// array 

const data : number[] = [1,2,3,4,5];
const data2 : string[] = ["1","2"];
const data3 : (string| number)[] = ["1","2",3];

// let pi:3.14 = 3.14;


let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "window";


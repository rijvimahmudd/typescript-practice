const user1: (string | number)[] = [1,"hc"];

// in tuples element's order is matter 

let tUser:[string,number,boolean] = ["hc", 121, true];

let rgb:[number, number, number] = [255,255,255];


type TUser = [number, string];


const TUser:TUser = [112, "example@google.com"];

TUser[1] = "rm@google.com";

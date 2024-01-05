const userEmail = "h@google.com";

if (userEmail){
  console.log("Got user email");
}else {
  console.log("Don't have user email");
}

/* 
falsy values: 

false, 0, -0, 0n(for BigInt), "", null, undefined, NaN

truthy value:

"0", "false", " ", [], {}, function(){}

*/

// TO check array is empty or not 

if (userEmail.length === 0) {
  console.log("Array is empty");
}

// TO check object is empty or not

const emptyObj = {}
if(Object.keys(emptyObj).length){
  console.log("Object is empty");
}


//Nullish Coalescing Operator(??): null, undefined

// let val1;
// val1 = 5 ?? 10
// console.log(val1)

// Terniary Operator

//confition ? true : false

const iceTeaprice = 100
iceTeaprice <= 80 ?console.log("less than 80"): console.log("more than 80");
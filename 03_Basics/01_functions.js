function sayMyName(){
  console.log("A");
  console.log("D");
  console.log("I");
  console.log("T");
  console.log("Y");
  console.log("A");
}

sayMyName()

// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2){
   let result =  number1 + number2;
   return result;
   }

const result1 = addTwoNumbers(6,5)

//console.log("Result: ", result1)

function loginUserMessage(username = "Addy"){
  if (!username){
    console.log("Please enter a username")
    return
  }
  return(`${username} just logged in`)
}

//console.log(loginUserMessage("Aditay"));
//console.log(loginUserMessage());

function calculateCartPrice(...num1){// This (... is rest operator)
  return num1
}

console.log(calculateCartPrice(200, 400, 600, 2000))

const user = {
  username: "hitesh",
  price: 199
}
function handelObject (anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

handelObject({
  username: "ady",
  price: 782
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
  return(getArray[1])
}

console.log(returnSecondValue(myNewArray))
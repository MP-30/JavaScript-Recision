const user = {
  username: "aditya",
  price: 56,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  } 

}
//  user.welcomeMessage()
//  user.username = "addy"
//  user.welcomeMessage()

// console.log(this)

// function chai (){
//   let username = "aditya"
//   console.log(this);
// }
// chai()

const chai = () => {
  let username = "Aditya";
  console.log(this)
}
//chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Aditya"})

console.log(addTwo(7,9))

const myArray = [4,6,9,4,1,35]


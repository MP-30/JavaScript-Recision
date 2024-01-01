// singleton

// Object literals
//Object.create.... Constructor
const mysym = Symbol("Key1")

const Jsuser = {
  name:"Aditya",
  age : 10,
  "fullName": "AdityaSingh",
  [mysym]:"MyKey1",
  location: "India",
  email: "aditya@microsoft.com",
  isLoggedIn: false,
  lastLoginDays:["Monday", "Saturday"]
}

console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser["fullName"])
console.log(Jsuser[mysym])
console.log(typeof (Jsuser[mysym]))

Jsuser.fullName = "AdityaBhadauriya"
console.log(Jsuser ["fullName"])
//Object.freeze(Jsuser)
Jsuser.fullName = "AdityaOnly"
console.log(Jsuser ["fullName"])
console.log(Jsuser)

Jsuser.greeting = function(){
  console.log("Hello JS user");  
}

Jsuser.greetingTwo = function(){
  console.log(`Hello JS user, ${this.name}`);  
}
console.log(Jsuser.greeting);
console.log(Jsuser.greetingTwo())



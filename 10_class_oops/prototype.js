// let myName = "hitesh     "

// console.log(myName.trueLength);

let myHeros = ["thos", "spiderman"]

let heroPower = {
  thod: "hammer",
  spiderman: "sling",

  getSpiderPower: function(){
    console.log(`Spidy power is${this.spiderman}`);
  }
}

Object.prototype.aditya = function(){
  //console.log(`aditya is present in all objects`);
}
//heroPower.aditya()

Array.prototype.heyAditya = function(){
  //console.log(`Aditya says hello`);
}

//myHeros.aditya()
myHeros.heyAditya()
//heroPower.heyAditya()


//inheritance
const User = {
  name:"chai",
  email:"chai@yahoo.com"
}

const Teacher = {
  makeVideo: true
}
const TeachingSupport = {
  isAvailable: false
} 
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__= User

//modern Systax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiOurCode   "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  console.log(`True length is :${this.trim().length}`);
}
anotherUsername.trueLength()
"aditya   ".trueLength()
"singh         ".trueLength()
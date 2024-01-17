const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")


console.log(descriptor);
// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)

const chai = {
  name: 'ginger',
  replaceprice:250,
  isAvailable: true,
  
  orderChai: function(){
    console.log("Code fat jayega")
  }
}

console.log(chai)
console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
  //writable: false,
  enumerable: false,
  configurable: true
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// for (let [key, value] of chai){
//   console.log(`${key}: ${value}`)
// }

for (let [key, value] of Object.entries(chai)){
  if(typeof value !== 'function'){
    console.log(`${key}: ${value}`)
  }
  
}